"use client"

import Link from 'next/link'
import { useState } from 'react'

const PRODUCTS = [
  { href: '/urunler/verandalar', title: 'Verandalar' },
  { href: '/urunler/cam-surgulu-duvarlar', title: 'Cam Sürgülü Duvarlar' },
  { href: '/urunler/cerceveler', title: 'Çerçeveler' },
  { href: '/urunler/ic-kapilar', title: 'İç Kapılar' },
  { href: '/urunler/gunes-koruma', title: 'Güneş Koruması' },
  { href: '/urunler/louvre-catilari', title: 'Louvre Çatıları' },
  { href: '/urunler/bahce-odalari', title: 'Bahçe Odaları' },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

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
              {/* Ürünler Dropdown */}
              <div>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="flex items-center justify-between w-full py-2 hover:text-primary transition-colors"
                >
                  <span>Ürünler</span>
                  <svg 
                    className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {productsOpen && (
                  <div className="ml-4 mt-2 space-y-2 border-l border-gray-200 pl-4">
                    {PRODUCTS.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        onClick={() => setOpen(false)}
                        className="block py-1 text-gray-600 hover:text-primary transition-colors"
                      >
                        {product.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link onClick={() => setOpen(false)} href="/hakkimizda" className="py-2 hover:text-primary transition-colors">Hakkımızda</Link>
              <Link onClick={() => setOpen(false)} href="/sss" className="py-2 hover:text-primary transition-colors">SSS</Link>
              <Link onClick={() => setOpen(false)} href="/galeri" className="py-2 hover:text-primary transition-colors">Galeri</Link>
              <Link onClick={() => setOpen(false)} href="/blog" className="py-2 hover:text-primary transition-colors">Blog</Link>
              <Link onClick={() => setOpen(false)} href="/iletisim" className="py-2 hover:text-primary transition-colors">İletişim</Link>
            </nav>
            <Link href="/teklif" onClick={() => setOpen(false)} className="mt-auto rounded-md bg-primary px-4 py-2 text-white text-center text-sm font-medium hover:bg-primary/90 transition-colors">Teklif İsteyin</Link>
          </div>
        </div>
      )}
    </>
  )
}