"use client"

import Script from 'next/script'
import { useEffect, useRef, useState } from 'react'

interface Props {
  onVerify: (token: string) => void
  siteKey?: string
}

export default function Turnstile({ onVerify, siteKey }: Props) {
  const [ready, setReady] = useState(false)
  const widgetRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ready) return
    const w = window as any
    if (w.turnstile && widgetRef.current) {
      try {
        w.turnstile.render(widgetRef.current, {
          sitekey: siteKey || process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
          theme: 'light',
          callback: (token: string) => onVerify(token)
        })
      } catch {}
    }
  }, [ready, onVerify, siteKey])

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstile"
        strategy="afterInteractive"
      />
      <Script id="turnstile-init" strategy="afterInteractive">
        {`window.onloadTurnstile = function(){ try { window.dispatchEvent(new Event('turnstile-ready')) } catch(e){} }`}
      </Script>
      <TurnstileReady onReady={() => setReady(true)} />
      <div ref={widgetRef} />
    </>
  )
}

function TurnstileReady({ onReady }: { onReady: () => void }) {
  useEffect(() => {
    const handler = () => onReady()
    window.addEventListener('turnstile-ready', handler)
    return () => window.removeEventListener('turnstile-ready', handler)
  }, [onReady])
  return null
}


