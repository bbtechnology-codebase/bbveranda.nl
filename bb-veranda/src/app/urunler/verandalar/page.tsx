export default function VerandalarPage() {
  return (
    <div className="container-site py-12">
      <h1 className="text-3xl font-semibold">Verandalar</h1>
      <p className="mt-3 text-gray-600">EG Veranda modellerine uygun seçeneklerle dinamik gösterim (placeholder).</p>

      <div className="mt-8 grid lg:grid-cols-2 gap-8">
        <div className="aspect-video rounded-lg bg-gray-200 flex items-center justify-center text-gray-600">
          [Buraya veranda görseli gelecek]
        </div>
        <div className="space-y-4">
          <div>
            <div className="font-medium">Model</div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {['Primeline Plus', 'R-Plus', 'Cubo Line', 'Cubo Plus'].map((m) => (
                <button key={m} className="rounded border px-3 py-2 text-sm hover:bg-gray-50">{m}</button>
              ))}
            </div>
          </div>
          <div>
            <div className="font-medium">Çatı Tipi</div>
            <div className="mt-2 flex gap-2">
              {['Cam', 'Polikarbonat'].map((o) => (
                <button key={o} className="rounded border px-3 py-2 text-sm hover:bg-gray-50">{o}</button>
              ))}
            </div>
          </div>
          <div>
            <div className="font-medium">Renk</div>
            <div className="mt-2 flex gap-2">
              {['Antrasit', 'Siyah', 'Beyaz'].map((o) => (
                <button key={o} className="rounded border px-3 py-2 text-sm hover:bg-gray-50">{o}</button>
              ))}
            </div>
          </div>
          <div className="pt-4 flex gap-3">
            <a href="/teklif" className="rounded-md bg-primary px-5 py-2.5 text-white text-sm font-medium">Bu ürün için fiyat isteyin</a>
            <a href="#ozellikler" className="rounded-md border px-5 py-2.5 text-sm font-medium">Özellikler</a>
          </div>
        </div>
      </div>

      <div id="ozellikler" className="mt-12">
        <h2 className="text-2xl font-semibold">Özellikler ve Teknik Detaylar</h2>
        <ul className="mt-4 list-disc pl-6 text-gray-700 space-y-1">
          <li>Alüminyum profil, yüksek dayanım</li>
          <li>Maksimum çatı yükü ve açıklık değerleri (placeholder)</li>
          <li>Standart renk seçenekleri</li>
          <li>Garanti süresi (placeholder)</li>
        </ul>
        <h3 className="mt-8 text-xl font-semibold">Açıklamalar</h3>
        <p className="mt-2 text-gray-700">Alüminyum verandalar, dayanıklılıkları ve şık görünümleriyle dört mevsim bahçe keyfi sunar. EG Veranda kalitesi ile.</p>

        <h3 className="mt-8 text-xl font-semibold">Örnek Uygulamalar</h3>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-video rounded bg-gray-200 flex items-center justify-center text-gray-600">[Görsel]</div>
          ))}
        </div>
      </div>
    </div>
  )
}