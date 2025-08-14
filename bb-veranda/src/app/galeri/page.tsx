"use client"

import { useState } from 'react'

const FILTERS = ['Tümü', 'Verandalar', 'Bahçe Odaları', 'Cam Duvarlı Verandalar', 'Pergolalar']

export default function GaleriPage() {
  const [filter, setFilter] = useState('Tümü')

  return (
    <div className="container-site py-12">
      <h1 className="text-3xl font-semibold">Galeri</h1>
      <div className="mt-4 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button key={f} onClick={() => setFilter(f)} className={`rounded border px-3 py-1.5 text-sm ${filter===f ? 'bg-primary text-white border-primary' : 'hover:bg-gray-50'}`}>{f}</button>
        ))}
      </div>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="group relative aspect-video rounded bg-gray-200">
            <div className="absolute inset-0 hidden group-hover:flex items-center justify-center bg-black/40 text-white text-sm">Proje adı / açıklama</div>
          </div>
        ))}
      </div>
    </div>
  )
}