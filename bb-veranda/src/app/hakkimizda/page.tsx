export default function HakkimizdaPage() {
  return (
    <div className="container-site py-12">
      <h1 className="text-3xl font-semibold">B&B Veranda Hakkında</h1>
      <p className="mt-3 text-gray-700">B&B Veranda, Hollanda merkezli EG Veranda’nın Türkiye’deki resmi bayisidir. Kalite, hız ve kişiye özel üretim değerlerini paylaşır.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold">Misyon ve Değerler</h2>
          <p>Önceliğimiz kaliteli işçilik ve koşulsuz müşteri memnuniyetidir. Her müşterimizin hayalindeki dış mekan alanını sunmak için özenle çalışıyoruz.</p>

          <h2 className="mt-6 text-xl font-semibold">EG Veranda Bayiliği</h2>
          <p>EG Veranda’nın uluslararası standarttaki ürünlerini Türkiye’de müşterilerimize sunuyoruz. %99 geri dönüştürülmüş alüminyum, hızlı teslimat ve maatwerk çözümler.</p>
        </div>
        <div className="aspect-video rounded bg-gray-200 flex items-center justify-center text-gray-600">[Ofis/Showroom görseli]</div>
      </div>
    </div>
  )
}