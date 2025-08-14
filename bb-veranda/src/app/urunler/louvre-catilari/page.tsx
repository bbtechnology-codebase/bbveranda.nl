export default function LouvreCatilariPage() {
  return (
    <div className="container-site py-12">
      <h1 className="text-3xl font-semibold">Louvre Çatıları</h1>
      <p className="mt-3 text-gray-600">Ayarlanabilir kanatlı çatı sistemleri (placeholder).</p>
      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <div className="aspect-video rounded bg-gray-200 flex items-center justify-center text-gray-600">[Görsel]</div>
        <div className="space-y-3">
          <div className="font-medium">Kontrol</div>
          <div className="flex gap-2">
            {['Manuel', 'Uzaktan Kumanda', 'Otomasyon'].map((t) => (
              <button key={t} className="rounded border px-3 py-2 text-sm hover:bg-gray-50">{t}</button>
            ))}
          </div>
          <a href="/teklif" className="inline-block rounded-md bg-primary px-5 py-2.5 text-white text-sm font-medium mt-4">Bu ürün için fiyat isteyin</a>
        </div>
      </div>
    </div>
  )
}