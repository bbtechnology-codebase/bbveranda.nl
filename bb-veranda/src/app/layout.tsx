import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import CookieBanner from '@/components/CookieBanner'
import dynamic from 'next/dynamic'
const MobileNav = dynamic(() => import('@/components/MobileNav'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'B&B Veranda',
  description: 'Modern verandalar ve dış mekan çözümleri',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <CookieBanner />

          <div className="container-site flex h-16 items-center justify-between">
            <Link href="/" className="font-semibold text-xl">B&B Veranda</Link>
            <div className="md:hidden">
              <MobileNav />
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/urunler/verandalar">Verandalar</Link>
              <Link href="/urunler/cam-surgulu-duvarlar">Cam Sürgülü Duvarlar</Link>
              <Link href="/urunler/ic-kapilar">İç Kapılar</Link>
              <Link href="/urunler/gunes-koruma">Güneş Koruması</Link>
              <Link href="/urunler/louvre-catilari">Louvre Çatıları</Link>
              <Link href="/urunler/bahce-odalari">Bahçe Odaları</Link>
              <Link href="/hakkimizda">Hakkımızda</Link>
              <Link href="/sss">SSS</Link>
              <Link href="/galeri">Galeri</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/iletisim">İletişim</Link>
            </nav>
            <Link href="/teklif" className="rounded-md bg-primary px-4 py-2 text-white font-medium">Teklif İsteyin</Link>
          </div>
        </header>
        <main className="min-h-[calc(100vh-16rem)]">{children}<div id="portal-root" /></main>
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
      </body>
    </html>
  )
}