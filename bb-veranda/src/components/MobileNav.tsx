"use client"

import Link from 'next/link'
import { useState } from 'react'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        aria-label="Menü"
        className="md:hidden inline-flex items-center justify-center rounded-md border px-3 py-2 text-sm"
        onClick={() => setOpen(true)}
      >
        Menü
      </button>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-4 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="font-semibold">B&B Veranda</div>
              <button className="rounded-md border px-2 py-1 text-sm" onClick={() => setOpen(false)}>Kapat</button>
            </div>
            <nav className="mt-4 grid gap-2 text-sm">
              <Link onClick={() => setOpen(false)} href="/urunler/verandalar">Verandalar</Link>
              <Link onClick={() => setOpen(false)} href="/urunler/cam-surgulu-duvarlar">Cam Sürgülü Duvarlar</Link>
              <Link onClick={() => setOpen(false)} href="/urunler/ic-kapilar">İç Kapılar</Link>
              <Link onClick={() => setOpen(false)} href="/urunler/gunes-koruma">Güneş Koruması</Link>
              <Link onClick={() => setOpen(false)} href="/urunler/louvre-catilari">Louvre Çatıları</Link>
              <Link onClick={() => setOpen(false)} href="/urunler/bahce-odalari">Bahçe Odaları</Link>
              <Link onClick={() => setOpen(false)} href="/hakkimizda">Hakkımızda</Link>
              <Link onClick={() => setOpen(false)} href="/sss">SSS</Link>
              <Link onClick={() => setOpen(false)} href="/galeri">Galeri</Link>
              <Link onClick={() => setOpen(false)} href="/blog">Blog</Link>
              <Link onClick={() => setOpen(false)} href="/iletisim">İletişim</Link>
            </nav>
            <Link href="/teklif" onClick={() => setOpen(false)} className="mt-auto rounded-md bg-primary px-4 py-2 text-white text-center text-sm font-medium">Teklif İsteyin</Link>
          </div>
        </div>
      )}
    </>
  )
}