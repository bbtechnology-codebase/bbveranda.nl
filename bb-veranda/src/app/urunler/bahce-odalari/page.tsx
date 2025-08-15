export default function BahceOdalariPage() {
  return (
    <div className="container-site py-12">
      <h1 className="text-3xl font-semibold">Bahçe Odaları</h1>
      <p className="mt-3 text-gray-600">Tam kapalı kış bahçesi çözümleri (placeholder).</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-video rounded bg-gray-200 flex items-center justify-center text-gray-600">[Görsel]</div>
        ))}
      </div>
    </div>
  )
}