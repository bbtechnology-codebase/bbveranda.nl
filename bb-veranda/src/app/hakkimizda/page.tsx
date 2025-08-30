export default function HakkimizdaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container-site">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              B&B Veranda Hakkında
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              EG Veranda'nın Türkiye'deki yetkili bayisi olarak, kaliteli verandalar ve dış mekan çözümleri sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* EG Veranda Bayiliği */}
      <section className="py-16">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                EG Veranda Yetkili Bayisi
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                B&B Veranda, Hollanda merkezli EG Veranda'nın Türkiye'deki resmi bayisidir. 
                Global bir markanın parçası olarak, uluslararası standartlarda ürün ve hizmet sunuyoruz.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Kalite Garantisi</h3>
                    <p className="text-gray-600">%99 geri dönüştürülmüş alüminyumdan üretilen dayanıklı ürünler</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Hızlı Teslimat</h3>
                    <p className="text-gray-600">Profesyonel montaj ekibi ile güvenli ve hızlı kurulum</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Kişiye Özel Üretim</h3>
                    <p className="text-gray-600">Her projeye özel tasarım ve ölçülü üretim (Maatwerk)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 relative">
              <img src="/Fotos Website/Prime Plus Veranda_s.png" alt="EG Veranda showroom" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Misyon ve Değerler */}
      <section className="py-16 bg-gray-50">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Misyon ve Değerlerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Müşteri memnuniyeti odaklı yaklaşımımız ve kaliteli işçilik anlayışımızla fark yaratıyoruz
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Müşteri Odaklılık</h3>
              <p className="text-gray-600">
                Her müşterimizin hayalindeki dış mekan alanını gerçekleştirmek için özenle çalışıyoruz. 
                Koşulsuz müşteri memnuniyeti önceliğimizdir.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Kalite Standartları</h3>
              <p className="text-gray-600">
                EG Veranda'nın uluslararası kalite standartlarını Türkiye'de uyguluyoruz. 
                Her projede en yüksek kaliteyi hedefliyoruz.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Hızlı ve Güvenilir</h3>
              <p className="text-gray-600">
                Profesyonel ekibimiz ile hızlı teslimat ve güvenli montaj hizmeti sunuyoruz. 
                Zamanında teslim sözümüzü tutuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ekip ve Deneyim */}
      <section className="py-16">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 relative">
              <img src="/Fotos Website/Cam_1.png" alt="B&B Veranda ekip" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Uzman Ekip ve Deneyim
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Veranda ve dış mekan çözümleri konusunda uzmanlaşmış ekibimiz, 
                her projeyi titizlikle planlar ve mükemmel sonuçlar elde eder.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">10+ yıllık sektör deneyimi</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">100+ başarılı proje</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">%100 müşteri memnuniyeti</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-gray-700">Garantili hizmet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sertifikalar ve Ortaklıklar */}
      <section className="py-16 bg-gray-50">
        <div className="container-site">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sertifikalar ve Ortaklıklar</h2>
            <p className="text-lg text-gray-600">
              Kalitemizi kanıtlayan belgeler ve güvenilir iş ortaklıklarımız
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl text-gray-400">[Logo]</div>
              </div>
              <h3 className="font-semibold text-gray-900">EG Veranda</h3>
              <p className="text-sm text-gray-600">Yetkili Bayi</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl text-gray-400">[Logo]</div>
              </div>
              <h3 className="font-semibold text-gray-900">ISO 9001</h3>
              <p className="text-sm text-gray-600">Kalite Yönetimi</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl text-gray-400">[Logo]</div>
              </div>
              <h3 className="font-semibold text-gray-900">CE Belgesi</h3>
              <p className="text-sm text-gray-600">Avrupa Uyumluluğu</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl text-gray-400">[Logo]</div>
              </div>
              <h3 className="font-semibold text-gray-900">TSE</h3>
              <p className="text-sm text-gray-600">Türk Standartları</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-site">
          <div className="bg-primary rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Projenizi Birlikte Gerçekleştirelim</h2>
            <p className="text-xl mb-8 opacity-90">
              Hayalinizdeki dış mekan alanını tasarlamak için uzman ekibimizle görüşün
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/teklif" 
                className="rounded-lg bg-white px-8 py-4 text-primary font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Teklif İsteyin
              </a>
              <a 
                href="/iletisim" 
                className="rounded-lg border-2 border-white px-8 py-4 text-white font-semibold text-lg hover:bg-white hover:text-primary transition-colors"
              >
                İletişime Geçin
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}