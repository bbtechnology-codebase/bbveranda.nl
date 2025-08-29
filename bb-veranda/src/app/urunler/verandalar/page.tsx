import VerandaConfigurator from '@/components/VerandaConfigurator'
import Image from 'next/image'

export default function VerandalarPage() {
  const exampleImages = [
    '/Fotos Website/Prime Plus Veranda_s.png',
    '/Fotos Website/Prime R-plus veranda_s.png',
    '/Fotos Website/Cubo-2-1.png',
    '/Fotos Website/Cubo-2-9.png',
    '/Fotos Website/Cubo bovenaanzicht.png',
    '/Fotos Website/Cubo met schuifpui TS100.png'
  ]

  return (
    <div className="container-site py-12">
      <h1 className="text-3xl font-semibold">Verandalar</h1>
      <p className="mt-3 text-gray-600">
        EG Veranda modellerini konfigüre edin ve seçtiğiniz özelliklere göre görsel önizleme alın.
      </p>

      <div className="mt-8">
        <VerandaConfigurator />
      </div>

      <div id="ozellikler" className="mt-12">
        <h2 className="text-2xl font-semibold">Özellikler ve Teknik Detaylar</h2>
        <ul className="mt-4 list-disc pl-6 text-gray-700 space-y-1">
          <li>Alüminyum profil, yüksek dayanım</li>
          <li>Maksimum çatı yükü ve açıklık değerleri</li>
          <li>Standart renk seçenekleri: Antrasit, Siyah, Beyaz</li>
          <li>Cam ve polikarbonat çatı seçenekleri</li>
          <li>10 yıl garanti</li>
        </ul>
        
        <h3 className="mt-8 text-xl font-semibold">Açıklamalar</h3>
        <p className="mt-2 text-gray-700">
          Alüminyum verandalar, dayanıklılıkları ve şık görünümleriyle dört mevsim bahçe keyfi sunar. 
          EG Veranda kalitesi ile uzun yıllar kullanım garantisi.
        </p>

        <h3 className="mt-8 text-xl font-semibold">Örnek Uygulamalar</h3>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {exampleImages.map((src, i) => (
            <div key={i} className="aspect-video rounded overflow-hidden bg-gray-200 relative">
              <Image
                src={src}
                alt={`Veranda örnek uygulama ${i + 1}`}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}