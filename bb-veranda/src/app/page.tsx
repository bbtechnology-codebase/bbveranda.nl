import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <section className="relative">
        <div className="container-site py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
                Mükemmel dış mekan alanınızı yaratın
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                EG Veranda yetkili bayisi B&B Veranda ile modern, dayanıklı ve şık verandalar.
              </p>
              <div className="mt-8 flex gap-4">
                <Link href="/urunler/verandalar" className="rounded-md bg-primary px-6 py-3 text-white font-medium">
                  Daha Fazla Veranda
                </Link>
                <Link href="/teklif" className="rounded-md border border-primary px-6 py-3 text-primary font-medium">
                  Teklif İsteyin
                </Link>
              </div>
            </div>
            <div className="aspect-[16/10] w-full rounded-lg bg-gray-200 flex items-center justify-center text-gray-600">
              [Buraya veranda görseli/video gelecek]
            </div>
          </div>
        </div>
      </section>

      <section className="container-site py-14">
        <h2 className="text-2xl font-semibold">Ürün Kategorileri</h2>
        <div className="mt-6 overflow-x-auto">
          <div className="flex gap-4 min-w-max">
            {[
              { href: '/urunler/verandalar', title: 'Verandalar' },
              { href: '/urunler/cam-surgulu-duvarlar', title: 'Cam Sürgülü Duvarlar' },
              { href: '/urunler/cerceveler', title: 'Çerçeveler' },
              { href: '/urunler/ic-kapilar', title: 'İç Kapılar' },
              { href: '/urunler/gunes-koruma', title: 'Güneş Koruması' },
              { href: '/urunler/louvre-catilari', title: 'Louvre Çatıları' },
              { href: '/urunler/bahce-odalari', title: 'Bahçe Odaları' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="w-64 shrink-0">
                <div className="aspect-video w-full rounded-lg bg-gray-200 flex items-center justify-center text-gray-600">
                  [Görsel]
                </div>
                <div className="mt-2 font-medium">{item.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}