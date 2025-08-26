import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// i18n provider temporarily removed due to runtime issues
import Analytics from '@/components/Analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'B&B Veranda',
  description: 'Modern verandalar ve dış mekan çözümleri',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bbveranda.nl'),
  openGraph: {
    title: 'B&B Veranda',
    description: 'Modern verandalar ve dış mekan çözümleri',
    type: 'website',
    url: '/',
    siteName: 'B&B Veranda',
    images: ['/images/og-default.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B&B Veranda',
    description: 'Modern verandalar ve dış mekan çözümleri',
    images: ['/images/og-default.jpg']
  },
  alternates: {
    languages: {
      tr: '/tr',
      nl: '/nl'
    }
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Header />
        <main className="min-h-[calc(100vh-16rem)]">{children}<div id="portal-root" /></main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}