export default function GunesKorumaPage() {
  return (
    <div className="container-site py-12">
      <h1 className="text-3xl font-semibold">Güneş Koruması</h1>
      <p className="mt-3 text-gray-600">Zip screen, pergola tente vb. çözümler (placeholder).</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          '/Fotos Website/Zip-screen.png',
          '/Fotos Website/zip-screen veranda 2.png',
          '/Fotos Website/Zip-screen veranda.png',
          '/Fotos Website/onderdak zonwering veranda.png',
          '/Fotos Website/bovendak zonwering veranda.png',
          '/Fotos Website/cubo met bovendakzonwerring.png'
        ].map((src, i) => (
          <div key={i} className="aspect-video rounded overflow-hidden bg-gray-200 relative">
            <img src={src} alt="Güneş koruma" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}