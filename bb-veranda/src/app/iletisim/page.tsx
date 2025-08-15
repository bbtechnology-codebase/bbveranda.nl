export default function IletisimPage() {
  return (
    <div className="container-site py-12">
      <h1 className="text-3xl font-semibold">İletişim</h1>
      <div className="mt-6 grid lg:grid-cols-2 gap-8">
        <div>
          <div className="aspect-video w-full rounded bg-gray-200 flex items-center justify-center text-gray-600">[Harita Yer Tutucu]</div>
          <div className="mt-6 space-y-1 text-sm text-gray-700">
            <div><span className="font-medium">Adres:</span> [Adres metni]</div>
            <div><span className="font-medium">Telefon:</span> <a className="text-primary" href="tel:+90...">+90 ...</a></div>
            <div><span className="font-medium">E-posta:</span> <a className="text-primary" href="mailto:info@bbveranda.com">info@bbveranda.com</a></div>
            <div><span className="font-medium">WhatsApp:</span> <a className="text-primary" href="#">+90 ...</a></div>
            <div><span className="font-medium">Çalışma Saatleri:</span> Hafta içi 09:00–18:00</div>
          </div>
        </div>
        <div>
          <div className="font-medium">Bize yazın</div>
          <form className="mt-4 grid gap-3 max-w-md">
            <input className="rounded border px-3 py-2 text-sm" placeholder="İsim" />
            <input className="rounded border px-3 py-2 text-sm" placeholder="E-posta" />
            <textarea className="rounded border px-3 py-2 text-sm" rows={5} placeholder="Mesajınız" />
            <button className="rounded-md bg-primary px-5 py-2.5 text-white text-sm font-medium w-max">Gönder</button>
          </form>
          <p className="mt-4 text-gray-600 text-sm">Sormak istediğiniz başka bir şey varsa çekinmeden bize ulaşın, en kısa sürede yanıtlarız.</p>
        </div>
      </div>
    </div>
  )
}