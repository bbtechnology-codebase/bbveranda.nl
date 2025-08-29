export default function CercevelerPage() {
  return (
    <div className="container-site py-12">
      <h1 className="text-3xl font-semibold">Çerçeveler</h1>
      <p className="mt-3 text-gray-600">Sabit ve hareketli çerçeve çözümleri (placeholder).</p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          '/Fotos Website/Steellook scharnierdeur.jpg',
          '/Fotos Website/taatsdeur steellook.jpg',
          '/Fotos Website/steellook vaste wand.jpg',
          '/Fotos Website/voordeur WD70T (paneel deur).jpg',
          '/Fotos Website/raam voor woning detail WD70T.jpg',
          '/Fotos Website/ramen en deuren wonigen (WD70T).jpg'
        ].map((src, i) => (
          <div key={i} className="aspect-video rounded overflow-hidden bg-gray-200 relative">
            <img src={src} alt="Çerçeveler" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}