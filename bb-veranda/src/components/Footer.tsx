import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-50">
      <div className="container-site py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-semibold text-lg">B&B Veranda</div>
          <p className="mt-2 text-sm text-gray-600">Kaliteli verandalar ve dış mekan çözümleri</p>
        </div>
        <div>
          <div className="font-medium">Ürünler</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><Link href="/urunler/verandalar">Verandalar</Link></li>
            <li><Link href="/urunler/cam-surgulu-duvarlar">Cam Sürgülü Duvarlar</Link></li>
            <li><Link href="/urunler/cerceveler">Çerçeveler</Link></li>
            <li><Link href="/urunler/ic-kapilar">İç Kapılar</Link></li>
            <li><Link href="/urunler/gunes-koruma">Güneş Koruması</Link></li>
            <li><Link href="/urunler/louvre-catilari">Louvre Çatıları</Link></li>
            <li><Link href="/urunler/bahce-odalari">Bahçe Odaları</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Kurumsal</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><Link href="/hakkimizda">Hakkımızda</Link></li>
            <li><Link href="/sss">Sıkça Sorulan Sorular</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/iletisim">İletişim</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Yasal</div>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li><Link href="/gizlilik">Gizlilik Politikası</Link></li>
            <li><Link href="/cerez">Çerez Bildirimi</Link></li>
            <li><Link href="/kullanim">Kullanım Şartları</Link></li>
          </ul>
          <div className="mt-6 text-sm text-gray-600">© {new Date().getFullYear()} B&B Veranda</div>
        </div>
      </div>
    </footer>
  )
}
