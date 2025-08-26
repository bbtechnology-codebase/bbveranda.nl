import { NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'
import nodemailer from 'nodemailer'
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'

const selectionSchema = z.object({
  model: z.string().min(1),
  roof: z.string().min(1),
  glassVariant: z.string().optional().nullable(),
  color: z.string().min(1)
})

const bodySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6).max(30).optional().nullable(),
  message: z.string().max(2000).optional().nullable(),
  selection: selectionSchema,
  token: z.string().min(10).optional(),
  provider: z.enum(['turnstile', 'hcaptcha']).optional()
})

async function verifyBotToken(provider: 'turnstile' | 'hcaptcha' | undefined, token: string | undefined, remoteIp?: string) {
  if (!provider || !token) return false
  try {
    if (provider === 'turnstile') {
      const secret = process.env.TURNSTILE_SECRET_KEY
      if (!secret) return false
      const resp = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret,
          response: token,
          ...(remoteIp ? { remoteip: remoteIp } : {})
        })
      })
      const json: any = await resp.json()
      return !!json.success
    }
    if (provider === 'hcaptcha') {
      const secret = process.env.HCAPTCHA_SECRET_KEY
      if (!secret) return false
      const resp = await fetch('https://hcaptcha.com/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret,
          response: token,
          ...(remoteIp ? { remoteip: remoteIp } : {})
        })
      })
      const json: any = await resp.json()
      return !!json.success
    }
  } catch {
    return false
  }
  return false
}

async function sendViaResend(subject: string, html: string) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.TO_EMAIL
  const from = process.env.FROM_EMAIL
  if (!apiKey || !to || !from) return false
  try {
    const resend = new Resend(apiKey)
    const result = await resend.emails.send({ to, from, subject, html })
    // Resend v3 returns { data: { id } | null, error }
    return !!(result as any)?.data?.id
  } catch {
    return false
  }
}

async function sendViaSMTP(subject: string, html: string) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL, TO_EMAIL } = process.env
  if (!SMTP_HOST || !SMTP_PORT || !TO_EMAIL || !FROM_EMAIL) return false
  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT || 587),
      secure: Number(SMTP_PORT) === 465,
      auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined
    })
    await transporter.sendMail({ to: TO_EMAIL, from: FROM_EMAIL, subject, html })
    return true
  } catch {
    return false
  }
}

function appendAuditLog(entry: unknown) {
  try {
    const base = join(process.cwd(), '.data')
    const file = join(base, 'teklif-logs.json')
    if (!existsSync(base)) mkdirSync(base)
    let arr: any[] = []
    if (existsSync(file)) {
      try { arr = JSON.parse(String(readFileSync(file))) } catch { arr = [] }
    }
    arr.push(entry)
    writeFileSync(file, JSON.stringify(arr, null, 2))
  } catch {
    // ignore if fs not writable
  }
}

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const parsed = bodySchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
    const data = parsed.data

    // Bot protection
    const remoteIp = (req.headers.get('x-forwarded-for') || '').split(',')[0]?.trim()
    const botOk = await verifyBotToken(data.provider, data.token, remoteIp)
    if (!botOk) {
      return NextResponse.json({ error: 'Bot verification failed' }, { status: 400 })
    }

    // Compose email
    const subject = `Yeni Teklif Talebi – ${data.name}`
    const time = new Date().toISOString()
    const selection = data.selection
    const html = `
      <h2>Yeni Teklif Talebi</h2>
      <p><strong>Tarih:</strong> ${time}</p>
      <h3>Müşteri Bilgileri</h3>
      <ul>
        <li><strong>İsim:</strong> ${data.name}</li>
        <li><strong>E-posta:</strong> ${data.email}</li>
        ${data.phone ? `<li><strong>Telefon:</strong> ${data.phone}</li>` : ''}
      </ul>
      ${data.message ? `<p><strong>Mesaj:</strong> ${data.message}</p>` : ''}
      <h3>Seçim</h3>
      <ul>
        <li><strong>Model:</strong> ${selection.model}</li>
        <li><strong>Çatı:</strong> ${selection.roof}</li>
        ${selection.glassVariant ? `<li><strong>Cam Varyantı:</strong> ${selection.glassVariant}</li>` : ''}
        <li><strong>Renk:</strong> ${selection.color}</li>
      </ul>
    `

    // Try Resend, then SMTP
    const sentResend = await sendViaResend(subject, html)
    const sent = sentResend || await sendViaSMTP(subject, html)
    if (!sent) {
      return NextResponse.json({ error: 'Mail sending failed' }, { status: 500 })
    }

    // Audit log (best-effort)
    appendAuditLog({
      time,
      name: data.name,
      email: data.email,
      phone: data.phone ?? null,
      selection: data.selection,
      provider: data.provider || null
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}


