"use client"

import { useState } from 'react'

const FILTERS = [
  { id: 'tumu', name: 'Tümü', icon: '🏠' },
  { id: 'verandalar', name: 'Verandalar', icon: '🌿' },
  { id: 'bahce-odalari', name: 'Bahçe Odaları', icon: '🏡' },
  { id: 'cam-duvarlar', name: 'Cam Duvarlı Verandalar', icon: '🪟' },
  { id: 'pergolalar', name: 'Pergolalar', icon: '🌳' },
  { id: 'gunes-koruma', name: 'Güneş Koruması', icon: '☀️' },
  { id: 'louvre-catilar', name: 'Louvre Çatıları', icon: '🏗️' }
]

const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'verandalar',
    title: 'Çekmeköy Modern Veranda Projesi',
    description: 'Primeline R-Plus model, 20 m² alan',
    location: 'İstanbul, Çekmeköy',
    image: '[Veranda görseli 1]'
  },
  {
    id: 2,
    category: 'bahce-odalari',
    title: 'Kadıköy Bahçe Odası',
    description: 'Cam duvarlı tam kapalı yaşam alanı',
    location: 'İstanbul, Kadıköy',
    image: '[Bahçe oda görseli 1]'
  },
  {
    id: 3,
    category: 'cam-duvarlar',
    title: 'Beşiktaş Cam Sürgülü Duvar',
    description: 'Çift ray sistem, temperli cam',
    location: 'İstanbul, Beşiktaş',
    image: '[Cam duvar görseli 1]'
  },
  {
    id: 4,
    category: 'pergolalar',
    title: 'Sarıyer Pergola Projesi',
    description: 'Motorlu tavan sistemi, LED aydınlatma',
    location: 'İstanbul, Sarıyer',
    image: '[Pergola görseli 1]'
  },
  {
    id: 5,
    category: 'verandalar',
    title: 'Ankara Villa Veranda',
    description: 'Cubo Line model, 35 m² alan',
    location: 'Ankara, Çankaya',
    image: '[Veranda görseli 2]'
  },
  {
    id: 6,
    category: 'gunes-koruma',
    title: 'İzmir Markiz Sistemi',
    description: 'Motorlu markiz, uzaktan kumanda',
    location: 'İzmir, Karşıyaka',
    image: '[Güneş koruma görseli 1]'
  },
  {
    id: 7,
    category: 'louvre-catilar',
    title: 'Bursa Louvre Çatı',
    description: 'Akıllı sistem, hava durumuna göre otomatik',
    location: 'Bursa, Nilüfer',
    image: '[Louvre çatı görseli 1]'
  },
  {
    id: 8,
    category: 'bahce-odalari',
    title: 'Antalya Bahçe Odası',
    description: 'Ahşap duvarlı, doğal görünüm',
    location: 'Antalya, Muratpaşa',
    image: '[Bahçe oda görseli 2]'
  },
  {
    id: 9,
    category: 'verandalar',
    title: 'İstanbul Boğaz Veranda',
    description: 'Primeline Plus, boğaz manzaralı',
    location: 'İstanbul, Beykoz',
    image: '[Veranda görseli 3]'
  },
  {
    id: 10,
    category: 'cam-duvarlar',
    title: 'Eskişehir Cam Duvar Sistemi',
    description: 'Üç ray sistem, lamine cam',
    location: 'Eskişehir, Tepebaşı',
    image: '[Cam duvar görseli 2]'
  },
  {
    id: 11,
    category: 'pergolalar',
    title: 'Muğla Villa Pergola',
    description: 'Kumaş çatı, ısıtma sistemi',
    location: 'Muğla, Bodrum',
    image: '[Pergola görseli 2]'
  },
  {
    id: 12,
    category: 'gunes-koruma',
    title: 'Trabzon Tente Projesi',
    description: 'Çok fonksiyonlu tente sistemi',
    location: 'Trabzon, Ortahisar',
    image: '[Güneş koruma görseli 2]'
  }
]

export default function GaleriPage() {
  const [filter, setFilter] = useState('tumu')
  const [selectedItem, setSelectedItem] = useState<any>(null)

  const filteredItems = filter === 'tumu' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container-site">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proje Galerisi
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tamamlanmış projelerimizden ilham alın ve B&B Veranda ile neler mümkün görün
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="container-site">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {FILTERS.map((filterItem) => (
              <button
                key={filterItem.id}
                onClick={() => setFilter(filterItem.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  filter === filterItem.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{filterItem.icon}</span>
                {filterItem.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-[4/3] rounded-xl bg-gray-200 overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                    <div className="text-center">
                      <div className="text-2xl mb-2">{item.image}</div>
                      <div className="text-sm text-gray-500">Görsel yüklenecek</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{item.description}</p>
                  <p className="text-xs text-gray-500">{item.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bu kategoride henüz proje bulunmuyor</h3>
              <p className="text-gray-600">Diğer kategorileri inceleyebilir veya bizimle iletişime geçebilirsiniz.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-site">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hayalinizdeki Projeyi Gerçekleştirelim</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Galerideki projelerden ilham alarak kendi dış mekan alanınızı tasarlayalım
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/teklif"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Teklif İsteyin
              </a>
              <a
                href="/iletisim"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold text-lg hover:bg-primary hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                İletişime Geçin
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h3>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="aspect-[16/9] rounded-xl bg-gray-200 mb-6 flex items-center justify-center text-gray-600">
                <div className="text-center">
                  <div className="text-3xl mb-2">{selectedItem.image}</div>
                  <div className="text-sm text-gray-500">Büyük görsel yüklenecek</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Proje Detayları</h4>
                  <p className="text-gray-600">{selectedItem.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Konum</h4>
                  <p className="text-gray-600">{selectedItem.location}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Kategori</h4>
                  <p className="text-gray-600">
                    {FILTERS.find(f => f.id === selectedItem.category)?.name}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 flex gap-4">
                <a
                  href="/teklif"
                  className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold text-center hover:bg-primary/90 transition-colors"
                >
                  Bu Proje İçin Teklif İsteyin
                </a>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Kapat
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}