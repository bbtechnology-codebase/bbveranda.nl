"use client"

import { useState } from 'react'

const FAQ_CATEGORIES = [
  {
    id: 'genel',
    title: 'Genel Sorular',
    icon: '🏠',
    faqs: [
      {
        q: 'B&B Veranda hangi bölgelerde hizmet veriyor?',
        a: 'Türkiye genelinde hizmet veriyoruz. Özellikle İstanbul, Ankara, İzmir ve çevre illerde aktif olarak çalışmaktayız. Diğer bölgeler için de hizmet verebiliriz.'
      },
      {
        q: 'EG Veranda bayisi olduğunuzu nasıl doğrulayabilirim?',
        a: 'EG Veranda\'nın resmi web sitesinde bayiler listesinde yer almaktayız. Ayrıca EG Veranda ile doğrudan iletişime geçerek bayiliğimizi teyit edebilirsiniz.'
      },
      {
        q: 'Garanti süreniz nedir?',
        a: 'Tüm ürünlerimiz EG Veranda garantisi kapsamındadır. Alüminyum profiller 10 yıl, cam ürünler 5 yıl garanti kapsamındadır.'
      }
    ]
  },
  {
    id: 'veranda',
    title: 'Verandalar',
    icon: '🌿',
    faqs: [
      {
        q: 'Veranda ile kış bahçesi (serre) arasındaki fark nedir?',
        a: 'Veranda genellikle yanları açık sadece üstü kapalı bir yapıyken, serre yanları camla kapalı, ekstra bir yaşam alanıdır. Verandayı cam sürgülü duvarlarla kapatarak kış bahçesine dönüştürmek de mümkündür.'
      },
      {
        q: 'Veranda yapımı için izin almam gerekir mi?',
        a: 'İlgili belediye yönetmeliklerine bağlıdır. Genelde belirli ölçü ve kurallara uygun yapılarda izin gerekmez ancak yerel otoritelerden kontrol edilmelidir.'
      },
      {
        q: 'Hangi malzeme veranda için en iyisidir?',
        a: 'Her malzemenin avantajları vardır ancak alüminyum verandalar, dayanıklılık, düşük bakım ihtiyacı ve modern görünüm nedeniyle öne çıkar. EG Veranda verandaları %99 geri dönüştürülmüş alüminyumdan üretilmektedir.'
      },
      {
        q: 'Verandamı dört mevsim kullanabilir miyim?',
        a: 'Evet, eğer verandanıza cam sürgülü duvarlar eklerseniz ve gerektiğinde güneş koruması sağlarsanız, yazın serin kışın ise korunaklı bir alan olarak tüm yıl kullanabilirsiniz.'
      },
      {
        q: 'Veranda montajı ne kadar sürer?',
        a: 'Projenin büyüklüğüne ve karmaşıklığına bağlı olarak 1-3 gün arasında tamamlanır. Büyük projeler için süre uzayabilir.'
      }
    ]
  },
  {
    id: 'cam-duvarlar',
    title: 'Cam Sürgülü Duvarlar',
    icon: '🪟',
    faqs: [
      {
        q: 'Cam sürgülü duvarlar güvenli midir?',
        a: 'Evet, kullanılan temperli veya lamine camlar oldukça dayanıklıdır ve kilitleme mekanizmaları ile güvenlik sağlar.'
      },
      {
        q: 'Cam duvarların bakımı zor mu?',
        a: 'Hayır, cam sürgülü duvarların bakımı oldukça kolaydır. Düzenli temizlik ve yılda bir kez yağlama yeterlidir.'
      },
      {
        q: 'Cam duvarlar ses yalıtımı sağlar mı?',
        a: 'Evet, özel cam seçenekleri ile ses yalıtımı sağlanabilir. Çift cam veya lamine cam seçenekleri mevcuttur.'
      }
    ]
  },
  {
    id: 'fiyat-odeme',
    title: 'Fiyat ve Ödeme',
    icon: '💰',
    faqs: [
      {
        q: 'Fiyatlarınız nasıl hesaplanıyor?',
        a: 'Fiyatlar projenin büyüklüğü, kullanılan malzeme kalitesi, ek özellikler ve montaj zorluğuna göre değişir. Detaylı fiyat için ücretsiz keşif talep edebilirsiniz.'
      },
      {
        q: 'Taksitli ödeme seçenekleri var mı?',
        a: 'Evet, banka kredisi ve taksitli ödeme seçenekleri sunuyoruz. Detaylar için satış ekibimizle görüşebilirsiniz.'
      },
      {
        q: 'Keşif ücreti alıyor musunuz?',
        a: 'Hayır, keşif hizmetimiz tamamen ücretsizdir. Projenizi inceleyip size en uygun çözümü öneriyoruz.'
      }
    ]
  },
  {
    id: 'montaj-servis',
    title: 'Montaj ve Servis',
    icon: '🔧',
    faqs: [
      {
        q: 'Montaj ekibiniz deneyimli mi?',
        a: 'Evet, tüm montaj ekibimiz EG Veranda tarafından eğitilmiş ve sertifikalıdır. Yılların deneyimine sahiptir.'
      },
      {
        q: 'Montaj sonrası servis hizmeti veriyor musunuz?',
        a: 'Evet, montaj sonrası 1 yıl boyunca ücretsiz servis hizmeti veriyoruz. Garanti süresi boyunca da teknik destek sağlıyoruz.'
      },
      {
        q: 'Montaj sırasında evime zarar gelir mi?',
        a: 'Hayır, profesyonel ekibimiz ve özel ekipmanlarımız ile montaj sırasında hiçbir zarar vermeden çalışıyoruz.'
      }
    ]
  }
]

export default function SSSPage() {
  const [activeCategory, setActiveCategory] = useState('genel')
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (categoryId: string, itemIndex: number) => {
    const key = `${categoryId}-${itemIndex}`
    setOpenItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const activeCategoryData = FAQ_CATEGORIES.find(cat => cat.id === activeCategory)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container-site">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sıkça Sorulan Sorular
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Veranda ve dış mekan çözümleri hakkında merak ettiğiniz her şey
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container-site">
          <div className="max-w-6xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {FAQ_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {activeCategoryData?.faqs.map((faq, index) => {
                const itemKey = `${activeCategory}-${index}`
                const isOpen = openItems[itemKey]
                
                return (
                  <div key={index} className="border-b border-gray-100 last:border-b-0">
                    <button
                      onClick={() => toggleItem(activeCategory, index)}
                      className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 text-lg pr-4">
                        {faq.q}
                      </span>
                      <div className={`w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}>
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-8 pb-6">
                        <div className="text-gray-600 leading-relaxed">
                          {faq.a}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Aradığınız sorunun cevabını bulamadınız mı?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/iletisim"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Bize Ulaşın
                </a>
                <a
                  href="/teklif"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Teklif İsteyin
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}