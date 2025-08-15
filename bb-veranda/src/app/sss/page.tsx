"use client"

import { useState } from 'react'

const FAQS = [
  {
    q: 'Veranda ile kış bahçesi (serre) arasındaki fark nedir?',
    a: 'Veranda yanları açık üstü kapalıdır; serre ise camla kapalı ekstra yaşam alanıdır. Verandayı cam sürgülü duvarlarla kapatabilirsiniz.'
  },
  {
    q: 'Veranda yapımı için izin almam gerekir mi?',
    a: 'Yerel belediye yönetmeliklerine bağlıdır. Çoğu durumda belirli ölçü ve kurallara uygun yapılar için izin gerekmez.'
  },
  {
    q: 'Hangi malzeme veranda için en iyisidir?',
    a: 'Alüminyum; dayanıklılık, düşük bakım ve modern görünüm avantajlarıyla öne çıkar.'
  },
]

export default function SSSPage() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="container-site py-12">
      <h1 className="text-3xl font-semibold">Sıkça Sorulan Sorular</h1>
      <div className="mt-6 divide-y rounded border">
        {FAQS.map((item, idx) => (
          <div key={idx}>
            <button onClick={() => setOpen(open === idx ? null : idx)} className="w-full flex items-center justify-between px-4 py-3 text-left">
              <span className="font-medium">{item.q}</span>
              <span className="text-gray-500">{open === idx ? '−' : '+'}</span>
            </button>
            {open === idx && (
              <div className="px-4 pb-4 text-gray-700">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}