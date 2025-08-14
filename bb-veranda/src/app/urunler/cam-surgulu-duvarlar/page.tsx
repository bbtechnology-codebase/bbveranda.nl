export default function CamSurguluDuvarlarPage() {
  return (
    <div className="container-site py-12">
      <h1 className="text-3xl font-semibold">Cam Sürgülü Duvarlar</h1>
      <p className="mt-3 text-gray-600">Ray sayısı, yükseklik ve kilitleme seçenekleri gibi tercihler için dinamik alanlar (placeholder).</p>
      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <div className="aspect-video rounded bg-gray-200 flex items-center justify-center text-gray-600">[Görsel]</div>
        <div className="space-y-4">
          <div>
            <div className="font-medium">Ray Sayısı</div>
            <div className="mt-2 flex gap-2">
              {[2,3,4,5].map((n) => (
                <button key={n} className="rounded border px-3 py-2 text-sm hover:bg-gray-50">{n} Ray</button>
              ))}
            </div>
          </div>
          <div>
            <div className="font-medium">Yükseklik</div>
            <input className="mt-2 w-48 rounded border px-3 py-2 text-sm" placeholder="Örn. 220 cm" />
          </div>
          <a href="/teklif" className="inline-block rounded-md bg-primary px-5 py-2.5 text-white text-sm font-medium">Bu ürün için fiyat isteyin</a>
        </div>
      </div>
    </div>
  )
}