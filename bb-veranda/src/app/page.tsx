import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

export default function HomePage() {
  return (
    <div>
      <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "B&B Veranda",
          "url": process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bbveranda.nl',
          "logo": `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bbveranda.nl'}/images/BBVerandaLogo.png`
        })}
      </Script>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://egveranda.nl/wp-content/uploads/2024/01/Banner-en-EG-Veranda-scaled.webp"
            alt="EG Veranda Banner"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
        <div className="container-site relative z-20 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              Mükemmel dış mekan alanınızı yaratın
            </h1>
            <p className="mt-6 text-xl text-white/90 max-w-2xl">
              EG Veranda yetkili bayisi B&B Veranda ile modern, dayanıklı ve şık verandalar. 
              Dört mevsim bahçe keyfi için profesyonel çözümler.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link 
                href="/urunler/verandalar" 
                className="rounded-lg bg-primary px-8 py-4 text-white font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                Daha Fazla Veranda
              </Link>
              <Link 
                href="/teklif" 
                className="rounded-lg border-2 border-white px-8 py-4 text-white font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Teklif İsteyin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ürün Kategorileri Slider */}
      <section className="container-site py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ürün Kategorileri</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            EG Veranda'nın geniş ürün yelpazesinden size en uygun çözümü seçin
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 min-w-max pb-4">
              {[
                {
                  href: '/urunler/verandalar',
                  title: 'Verandalar',
                  description: 'Modern alüminyum verandalar',
                  imageSrc: '/images/categories/veranda.webp',
                  imageAlt: 'Veranda'
                },
                {
                  href: '/urunler/cam-surgulu-duvarlar',
                  title: 'Cam Sürgülü Duvarlar',
                  description: 'Şeffaf ve esnek çözümler',
                  imageSrc: '/images/categories/glazen-schuifwand.webp',
                  imageAlt: 'Glazen schuifwand'
                },
                {
                  href: '/urunler/cerceveler',
                  title: 'Çerçeveler',
                  description: 'Dayanıklı alüminyum çerçeveler',
                  imageSrc: '/images/categories/kozijnen.webp',
                  imageAlt: 'Kozijnen'
                },
                {
                  href: '/urunler/ic-kapilar',
                  title: 'İç Kapılar',
                  description: 'Modern iç mekan kapıları',
                  imageSrc: '/images/categories/binnendeuren.webp',
                  imageAlt: 'Binnendeuren'
                },
                {
                  href: '/urunler/gunes-koruma',
                  title: 'Güneş Koruması',
                  description: 'UV korumalı sistemler',
                  imageSrc: '/images/categories/zonwering.webp',
                  imageAlt: 'Zonwering'
                },
                {
                  href: '/urunler/louvre-catilari',
                  title: 'Louvre Çatıları',
                  description: 'Ayarlanabilir çatı sistemleri',
                  imageSrc: '/images/categories/lamellendaken.webp',
                  imageAlt: 'Lamellendaken'
                }
              ].map((item) => (
                <Link key={item.href} href={item.href} className="group w-80 shrink-0">
                  <div className="aspect-[4/3] w-full rounded-xl bg-gray-200 mb-4 overflow-hidden relative">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width:1024px) 33vw, 80vw"
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
        </div>
      </section>

      {/* Neden B&B Veranda */}
      <section className="bg-gray-50 py-20">
        <div className="container-site">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Neden B&B Veranda?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              EG Veranda'nın Türkiye'deki yetkili bayisi olarak kaliteli hizmet sunuyoruz
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Kaliteli Malzeme</h3>
              <p className="text-gray-600">%99 geri dönüştürülmüş alüminyumdan üretilen dayanıklı ürünler</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Hızlı Teslimat</h3>
              <p className="text-gray-600">Profesyonel montaj ekibi ile hızlı ve güvenli kurulum</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Kişiye Özel</h3>
              <p className="text-gray-600">Her projeye özel tasarım ve ölçülü üretim</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-site py-20">
        <div className="bg-primary rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Hayalinizdeki Verandayı Gerçekleştirin</h2>
          <p className="text-xl mb-8 opacity-90">
            Ücretsiz keşif ve fiyat teklifi için hemen iletişime geçin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/teklif" 
              className="rounded-lg bg-white px-8 py-4 text-primary font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Teklif İsteyin
            </Link>
            <Link 
              href="/iletisim" 
              className="rounded-lg border-2 border-white px-8 py-4 text-white font-semibold text-lg hover:bg-white hover:text-primary transition-colors"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}