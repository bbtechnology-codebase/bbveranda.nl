"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'

const ITEMS = [
  {
    href: '/urunler/verandalar',
    title: 'Verandalar',
    description: 'Modern alüminyum verandalar',
    imageSrc: '/Fotos Website/Prime Plus Veranda_s.png',
    imageAlt: 'Verandalar'
  },
  {
    href: '/urunler/cam-surgulu-duvarlar',
    title: 'Cam Sürgülü Duvarlar',
    description: 'Şeffaf ve esnek çözümler',
    imageSrc: '/Fotos Website/Rails_3.png',
    imageAlt: 'Cam sürgülü duvarlar'
  },
  {
    href: '/urunler/cerceveler',
    title: 'Çerçeveler',
    description: 'Dayanıklı alüminyum çerçeveler',
    imageSrc: '/Fotos Website/ramen en deuren wonigen (WD70T).jpg',
    imageAlt: 'Çerçeveler'
  },
  {
    href: '/urunler/ic-kapilar',
    title: 'İç Kapılar',
    description: 'Modern iç mekan kapıları',
    imageSrc: '/Fotos Website/Steellook scharnierdeur.jpg',
    imageAlt: 'İç kapılar'
  },
  {
    href: '/urunler/gunes-koruma',
    title: 'Güneş Koruması',
    description: 'UV korumalı sistemler',
    imageSrc: '/Fotos Website/Zip-screen veranda.png',
    imageAlt: 'Güneş koruması'
  },
  {
    href: '/urunler/louvre-catilari',
    title: 'Louvre Çatıları',
    description: 'Ayarlanabilir çatı sistemleri',
    imageSrc: '/Fotos Website/Cubo-2-1.png',
    imageAlt: 'Louvre çatıları'
  }
]

export default function CategorySlider() {
  const containerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="container-site py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Ürün Kategorileri</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          EG Veranda'nın geniş ürün yelpazesinden size en uygun çözümü seçin
        </p>
      </div>

      <div className="relative">
        {/* Sol Ok */}
        <button
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
          </svg>
        </button>

        {/* Sağ Ok */}
        <button
          onClick={scrollRight}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        {/* Scroll Container */}
        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {ITEMS.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="group w-80 flex-shrink-0"
            >
              <div className="aspect-[4/3] w-full rounded-xl bg-gray-200 mb-4 overflow-hidden relative">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="320px"
                  className="object-cover group-hover:scale-[1.02] transition-transform"
                />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-gray-900 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
