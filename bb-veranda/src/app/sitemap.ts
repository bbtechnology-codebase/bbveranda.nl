import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bbveranda.nl'
  const now = new Date().toISOString()
  const routes = [
    '',
    '/urunler',
    '/urunler/verandalar',
    '/hakkimizda',
    '/iletisim',
    '/teklif'
  ]
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7
  }))
}



