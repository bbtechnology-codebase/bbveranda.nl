import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'B&B Veranda',
  description: 'Modern verandalar ve dış mekan çözümleri',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-[calc(100vh-16rem)]">{children}<div id="portal-root" /></main>
        <Footer />
      </body>
    </html>
  )
}