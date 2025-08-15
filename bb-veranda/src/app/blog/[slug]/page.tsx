import Link from 'next/link'

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  return (
    <div className="container-site py-12">
      <Link href="/blog" className="text-sm text-primary">← Tüm yazılar</Link>
      <h1 className="mt-2 text-3xl font-semibold">{slug.replace(/-/g, ' ')}</h1>
      <div className="mt-6 prose max-w-none">
        <p>[İçerik placeholder] Bu yazıda {slug.replace(/-/g, ' ')} konusunu ele alıyoruz.</p>
        <p>İlgili: <Link href="/urunler/verandalar" className="text-primary">Verandalar</Link></p>
      </div>
    </div>
  )
}