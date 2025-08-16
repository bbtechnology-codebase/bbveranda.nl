"use client"

import { useState } from 'react'

const PRODUCTS = [
  { id: 'veranda', name: 'Veranda', models: ['Primeline Plus', 'R-Plus', 'Cubo Line'] },
  { id: 'cam-duvar', name: 'Cam Sürgülü Duvar', models: ['Tek Ray', 'Çift Ray', 'Üç Ray'] },
  { id: 'ic-kapi', name: 'İç Kapı', models: ['Menteşeli Kapı', 'Pivot Kapı', 'Sürgülü Kapı'] },
  { id: 'gunes-koruma', name: 'Güneş Koruması', models: ['Markiz', 'Tente', 'Pergola'] },
  { id: 'louvre-cati', name: 'Louvre Çatısı', models: ['Manuel', 'Motorlu', 'Akıllı Sistem'] },
  { id: 'bahce-odasi', name: 'Bahçe Odası', models: ['Cam Duvarlı', 'Ahşap Duvarlı', 'Karma Sistem'] },
]

const COLORS = ['Antrasit', 'Beyaz', 'Kahverengi', 'Gri', 'Siyah', 'Özel Renk']
const ROOF_TYPES = ['Cam Çatı', 'Polikarbonat', 'Louvre Çatı', 'Kumaş Çatı']

export default function TeklifPage() {
  const [step, setStep] = useState(1)
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [selectedModel, setSelectedModel] = useState('')
  const [options, setOptions] = useState<Record<string, string>>({})
  const [contact, setContact] = useState({ ad: '', soyad: '', email: '', telefon: '' })
  const [note, setNote] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const canNext1 = selectedProduct !== null
  const canNext2 = selectedModel !== ''
  const canNext3 = contact.ad && contact.soyad && /.+@.+\..+/.test(contact.email) && contact.telefon

  function next() { setStep((s) => Math.min(4, s + 1)) }
  function prev() { setStep((s) => Math.max(1, s - 1)) }

  function submit() {
    // Placeholder submit
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="container-site py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Teşekkürler!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Teklif talebiniz başarıyla alınmıştır. Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.
          </p>
          <div className="bg-gray-50 rounded-lg p-6 text-left">
            <h3 className="font-semibold mb-2">Talebiniz Özeti:</h3>
            <p><span className="font-medium">Ürün:</span> {selectedProduct?.name} - {selectedModel}</p>
            {options.boyut && <p><span className="font-medium">Boyut:</span> {options.boyut}</p>}
            {options.renk && <p><span className="font-medium">Renk:</span> {options.renk}</p>}
            <p><span className="font-medium">İletişim:</span> {contact.ad} {contact.soyad}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container-site py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Teklif Al</h1>
          <p className="text-lg text-gray-600">
            Hayalinizdeki dış mekan alanını gerçekleştirmek için birkaç adımda teklif alın
          </p>
        </div>

        {/* Adım Göstergesi */}
        <div className="mb-12">
          <div className="flex items-center justify-center">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= stepNumber 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step > stepNumber ? 'bg-primary' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 text-sm text-gray-600">
            {step === 1 && 'Ürün Seçimi'}
            {step === 2 && 'Özellik Tercihleri'}
            {step === 3 && 'İletişim Bilgileri'}
            {step === 4 && 'Onay & Gönderim'}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Ürün Seçimi</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {PRODUCTS.map((product) => (
                  <button
                    key={product.id}
                    className={`p-6 rounded-xl border-2 text-left transition-all ${
                      selectedProduct?.id === product.id 
                        ? 'border-primary bg-primary/5 ring-2 ring-primary/20' 
                        : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedProduct(product)}
                  >
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600">
                      {product.models.length} farklı model seçeneği
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">
                Özellik Tercihleri - {selectedProduct?.name}
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block font-medium mb-3">Model Seçimi</label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedProduct?.models.map((model: string) => (
                      <button
                        key={model}
                        className={`p-4 rounded-lg border text-left ${
                          selectedModel === model 
                            ? 'border-primary bg-primary/5' 
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedModel(model)}
                      >
                        {model}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium mb-2">Boyut/Ölçü</label>
                    <input
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Örn: 4m x 3m"
                      value={options.boyut || ''}
                      onChange={(e) => setOptions({ ...options, boyut: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <label className="block font-medium mb-2">Renk Tercihi</label>
                    <select
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      value={options.renk || ''}
                      onChange={(e) => setOptions({ ...options, renk: e.target.value })}
                    >
                      <option value="">Renk seçin</option>
                      {COLORS.map((color) => (
                        <option key={color} value={color}>{color}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {selectedProduct?.id === 'veranda' && (
                  <div>
                    <label className="block font-medium mb-2">Çatı Tipi</label>
                    <select
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20"
                      value={options.catiTipi || ''}
                      onChange={(e) => setOptions({ ...options, catiTipi: e.target.value })}
                    >
                      <option value="">Çatı tipi seçin</option>
                      {ROOF_TYPES.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block font-medium mb-2">Ek Özellikler</label>
                  <textarea
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    rows={3}
                    placeholder="LED aydınlatma, ısıtma sistemi, özel istekler..."
                    value={options.ekOzellikler || ''}
                    onChange={(e) => setOptions({ ...options, ekOzellikler: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-medium mb-2">Ad *</label>
                  <input
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Adınız"
                    value={contact.ad}
                    onChange={(e) => setContact({ ...contact, ad: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Soyad *</label>
                  <input
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Soyadınız"
                    value={contact.soyad}
                    onChange={(e) => setContact({ ...contact, soyad: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">E-posta *</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="ornek@email.com"
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block font-medium mb-2">Telefon *</label>
                  <input
                    type="tel"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="05XX XXX XX XX"
                    value={contact.telefon}
                    onChange={(e) => setContact({ ...contact, telefon: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Onay & Gönderim</h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Teklif Talebiniz Özeti</h3>
                <div className="space-y-3 text-sm">
                  <div><span className="font-medium">Ürün:</span> {selectedProduct?.name}</div>
                  <div><span className="font-medium">Model:</span> {selectedModel}</div>
                  {options.boyut && <div><span className="font-medium">Boyut:</span> {options.boyut}</div>}
                  {options.renk && <div><span className="font-medium">Renk:</span> {options.renk}</div>}
                  {options.catiTipi && <div><span className="font-medium">Çatı Tipi:</span> {options.catiTipi}</div>}
                  {options.ekOzellikler && <div><span className="font-medium">Ek Özellikler:</span> {options.ekOzellikler}</div>}
                  <div className="border-t pt-3 mt-3">
                    <span className="font-medium">İletişim:</span> {contact.ad} {contact.soyad}<br />
                    <span className="text-gray-600">{contact.email} • {contact.telefon}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block font-medium mb-2">Ek Notlar / Açıklamalar</label>
                <textarea
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  rows={4}
                  placeholder="Projeniz hakkında ek bilgiler, özel istekler, keşif talebi..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            <button 
              disabled={step === 1} 
              onClick={prev} 
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Geri
            </button>
            
            <div className="flex gap-3">
              {step < 4 && (
                <button
                  onClick={next}
                  disabled={(step === 1 && !canNext1) || (step === 2 && !canNext2) || (step === 3 && !canNext3)}
                  className="px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  İleri
                </button>
              )}
              {step === 4 && (
                <button 
                  onClick={submit} 
                  className="px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90"
                >
                  Teklif Gönder
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}