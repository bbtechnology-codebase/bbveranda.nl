"use client"

import Link from 'next/link'
import { useState } from 'react'
import CookieBanner from '@/components/CookieBanner'
import dynamic from 'next/dynamic'
// i18n temporarily disabled
import { useEffect, useRef } from 'react'


const MobileNav = dynamic(() => import('@/components/MobileNav'), { ssr: false })

const PRODUCTS = [
  { href: '/urunler/verandalar', title: 'Verandalar' },
  { href: '/urunler/cam-surgulu-duvarlar', title: 'Cam Sürgülü Duvarlar' },
  { href: '/urunler/cerceveler', title: 'Çerçeveler' },
  { href: '/urunler/ic-kapilar', title: 'İç Kapılar' },
  { href: '/urunler/gunes-koruma', title: 'Güneş Koruması' },
  { href: '/urunler/louvre-catilari', title: 'Louvre Çatıları' },
  { href: '/urunler/bahce-odalari', title: 'Bahçe Odaları' },
]

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Close on outside click and ESC
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node
      if (!menuRef.current && !triggerRef.current) return
      if (menuRef.current?.contains(t) || triggerRef.current?.contains(t)) return
      setIsProductsOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsProductsOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <CookieBanner />

      <div className="container-site flex h-16 items-center justify-between">
      <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/BBVerandaLogo.png"  // başında / olmalı
            alt="B&B Veranda Logo"
            className="w-10 h-10"
          />
          <span className="font-semibold text-xl">B&B Veranda</span>
        </Link>
        <div className="md:hidden flex items-center gap-3">
          <MobileNav />
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {/* Ürünler Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (hoverTimer.current) clearTimeout(hoverTimer.current)
              setIsProductsOpen(true)
            }}
            onMouseLeave={() => {
              if (hoverTimer.current) clearTimeout(hoverTimer.current)
              hoverTimer.current = setTimeout(() => setIsProductsOpen(false), 100)
            }}
            onFocus={() => setIsProductsOpen(true)}
            onBlur={(e) => {
              const related = e.relatedTarget as Node | null
              if (!related || (!menuRef.current?.contains(related) && !triggerRef.current?.contains(related))) {
                setIsProductsOpen(false)
              }
            }}
          >
            <button
              ref={triggerRef}
              aria-haspopup="menu"
              aria-expanded={isProductsOpen}
              onClick={() => setIsProductsOpen(v => !v)}
              className="flex items-center gap-1 py-2 hover:text-primary transition-colors"
            >
              Ürünler
              <svg 
                className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {isProductsOpen && (
              <div
                ref={menuRef}
                role="menu"
                aria-label="Ürünler"
                className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
              >
                {PRODUCTS.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link href="/hakkimizda" className="hover:text-primary transition-colors">Hakkımızda</Link>
          <Link href="/sss" className="hover:text-primary transition-colors">SSS</Link>
          <Link href="/galeri" className="hover:text-primary transition-colors">Galeri</Link>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <Link href="/iletisim" className="hover:text-primary transition-colors">İletişim</Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link href="/teklif" className="rounded-md bg-primary px-4 py-2 text-white font-medium hover:bg-primary/90 transition-colors">Teklif İsteyin</Link>
        </div>
      </div>
    </header>
  )
}
