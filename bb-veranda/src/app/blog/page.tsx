import Link from 'next/link'

export default function BlogIndexPage() {
  const posts = [
    { slug: 'veranda-alirken-nelere-dikkat-etmeli', title: 'Veranda Alırken Nelere Dikkat Etmeli?', excerpt: 'Potansiyel müşterilere rehber olacak ipuçları.' },
    { slug: '2025-bahce-trendleri', title: '2025 Bahçe Trendleri', excerpt: 'Dış mekan tasarımında yeni trendler, renkler, malzemeler.' },
  ]

  return (
    <div className="container-site py-12">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="border rounded-lg p-4 hover:shadow-sm transition">
            <div className="aspect-video rounded bg-gray-200 flex items-center justify-center text-gray-600">[Görsel]</div>
            <div className="mt-3 font-medium">{p.title}</div>
            <p className="mt-1 text-sm text-gray-600">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}