"use client"

import { useState } from 'react'

const PRODUCTS = [
  'Veranda',
  'Cam Sürgülü Duvar',
  'İç Kapı',
  'Güneş Koruması',
  'Louvre Çatısı',
  'Bahçe Odası',
]

export default function TeklifPage() {
  const [step, setStep] = useState(1)
  const [product, setProduct] = useState<string>('')
  const [options, setOptions] = useState<Record<string, string>>({})
  const [contact, setContact] = useState({ ad: '', soyad: '', email: '', telefon: '' })
  const [note, setNote] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const canNext1 = product !== ''
  const canNext3 = contact.ad && contact.soyad && /.+@.+\..+/.test(contact.email)

  function next() { setStep((s) => Math.min(4, s + 1)) }
  function prev() { setStep((s) => Math.max(1, s - 1)) }

  function submit() {
    // Placeholder submit
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="container-site py-12">
        <h1 className="text-3xl font-semibold">Teşekkürler</h1>
        <p className="mt-2 text-gray-700">Teklif talebiniz alınmıştır, en kısa sürede sizinle iletişime geçeceğiz.</p>
      </div>
    )
  }

  return (
    <div className="container-site py-12">
      <h1 className="text-3xl font-semibold">Teklif Al</h1>
      <div className="mt-2 text-gray-600">Adım {step} / 4</div>

      <div className="mt-6">
        {step === 1 && (
          <div>
            <div className="font-medium">Ürün Seçimi</div>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {PRODUCTS.map((p) => (
                <button
                  key={p}
                  className={`rounded border px-4 py-2 text-left ${product === p ? 'border-primary ring-2 ring-primary/30' : 'hover:bg-gray-50'}`}
                  onClick={() => setProduct(p)}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="font-medium">Özellik Tercihleri ({product})</div>
            <div className="mt-4 grid gap-4 max-w-xl">
              <input
                className="rounded border px-3 py-2 text-sm"
                placeholder="Boyut/Ölçü (ör. 4x3 m)"
                value={options.boyut || ''}
                onChange={(e) => setOptions({ ...options, boyut: e.target.value })}
              />
              <input
                className="rounded border px-3 py-2 text-sm"
                placeholder="Renk (ör. Antrasit)"
                value={options.renk || ''}
                onChange={(e) => setOptions({ ...options, renk: e.target.value })}
              />
              <input
                className="rounded border px-3 py-2 text-sm"
                placeholder="Diğer (ör. LED aydınlatma)"
                value={options.diger || ''}
                onChange={(e) => setOptions({ ...options, diger: e.target.value })}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <div className="font-medium">İletişim Bilgileri</div>
            <div className="mt-4 grid gap-4 max-w-xl">
              <div className="grid sm:grid-cols-2 gap-3">
                <input className="rounded border px-3 py-2 text-sm" placeholder="Ad" value={contact.ad} onChange={(e) => setContact({ ...contact, ad: e.target.value })} />
                <input className="rounded border px-3 py-2 text-sm" placeholder="Soyad" value={contact.soyad} onChange={(e) => setContact({ ...contact, soyad: e.target.value })} />
              </div>
              <input className="rounded border px-3 py-2 text-sm" placeholder="E-posta" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
              <input className="rounded border px-3 py-2 text-sm" placeholder="Telefon" value={contact.telefon} onChange={(e) => setContact({ ...contact, telefon: e.target.value })} />
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <div className="font-medium">Onay & Gönderim</div>
            <div className="mt-4 max-w-2xl text-sm text-gray-700">
              <div><span className="font-medium">Ürün:</span> {product || '-'}</div>
              <div className="mt-1"><span className="font-medium">Tercihler:</span> {JSON.stringify(options) || '-'}</div>
              <div className="mt-1"><span className="font-medium">İletişim:</span> {contact.ad} {contact.soyad}, {contact.email}, {contact.telefon}</div>
              <textarea className="mt-4 w-full rounded border px-3 py-2" rows={4} placeholder="Açıklama / Not" value={note} onChange={(e) => setNote(e.target.value)} />
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex items-center gap-3">
        <button disabled={step===1} onClick={prev} className="rounded-md border px-5 py-2.5 text-sm font-medium disabled:opacity-50">Geri</button>
        {step < 4 && (
          <button
            onClick={next}
            disabled={(step===1 && !canNext1) || (step===3 && !canNext3)}
            className="rounded-md bg-primary px-5 py-2.5 text-white text-sm font-medium disabled:opacity-50"
          >
            İleri
          </button>
        )}
        {step === 4 && (
          <button onClick={submit} className="rounded-md bg-primary px-5 py-2.5 text-white text-sm font-medium">Gönder</button>
        )}
      </div>
    </div>
  )
}