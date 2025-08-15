import Link from 'next/link'

export default function ProductsIndexPage() {
  const categories = [
    { slug: 'verandalar', title: 'Verandalar' },
    { slug: 'cam-surgulu-duvarlar', title: 'Cam Sürgülü Duvarlar' },
    { slug: 'cerceveler', title: 'Çerçeveler' },
    { slug: 'ic-kapilar', title: 'İç Kapılar' },
    { slug: 'gunes-koruma', title: 'Güneş Koruması' },
    { slug: 'louvre-catilari', title: 'Louvre Çatıları' },
    { slug: 'bahce-odalari', title: 'Bahçe Odaları' },
  ]

  return (
    <div className="container-site py-12">
      <h1 className="text-3xl font-semibold">Ürünler</h1>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link key={cat.slug} href={`/urunler/${cat.slug}`} className="border rounded-lg p-4 hover:shadow-sm transition">
            <div className="aspect-video rounded bg-gray-200 flex items-center justify-center text-gray-600">[Görsel]</div>
            <div className="mt-3 font-medium">{cat.title}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}