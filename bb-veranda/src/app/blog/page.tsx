import Link from 'next/link'

const BLOG_POSTS = [
  {
    slug: 'veranda-alirken-nelere-dikkat-etmeli',
    title: 'Veranda Alırken Nelere Dikkat Etmeli?',
    excerpt: 'Potansiyel müşterilere rehber olacak ipuçları ve veranda seçiminde dikkat edilmesi gereken önemli noktalar.',
    category: 'Rehber',
    date: '2024-12-15',
    readTime: '5 dk',
    image: '[Veranda rehber görseli]'
  },
  {
    slug: '2025-bahce-trendleri',
    title: '2025 Bahçe Trendleri',
    excerpt: 'Dış mekan tasarımında yeni trendler, renkler, malzemeler ve modern bahçe tasarım yaklaşımları.',
    category: 'Trendler',
    date: '2024-12-10',
    readTime: '7 dk',
    image: '[Bahçe trend görseli]'
  },
  {
    slug: 'montaj-sureci-adim-adim-veranda-kurulumu',
    title: 'Montaj Süreci: Adım Adım Veranda Kurulumu',
    excerpt: 'Kendi sürecinizi anlatıp şeffaflık sağlamak. Veranda montajının nasıl gerçekleştiğini detaylı olarak açıklıyoruz.',
    category: 'Süreç',
    date: '2024-12-05',
    readTime: '8 dk',
    image: '[Montaj süreci görseli]'
  },
  {
    slug: 'musteri-hikayeleri-istanbul-villa-projesi',
    title: 'Müşteri Hikayeleri: İstanbul Villa Projesi',
    excerpt: 'Mutlu müşterilerin projelerini anlatan vaka çalışmaları. İstanbul\'da gerçekleştirdiğimiz villa veranda projesi.',
    category: 'Projeler',
    date: '2024-11-28',
    readTime: '6 dk',
    image: '[Villa projesi görseli]'
  },
  {
    slug: 'aluminyum-verandalarin-avantajlari',
    title: 'Alüminyum Verandaların Avantajları',
    excerpt: 'Alüminyum verandaların diğer malzemelere göre sahip olduğu üstünlükler ve neden tercih edilmesi gerektiği.',
    category: 'Teknik',
    date: '2024-11-20',
    readTime: '4 dk',
    image: '[Alüminyum avantaj görseli]'
  },
  {
    slug: 'dort-mevsim-veranda-kullanimi',
    title: 'Dört Mevsim Veranda Kullanımı',
    excerpt: 'Verandanızı tüm yıl boyunca nasıl kullanabileceğiniz ve mevsimsel değişikliklere uygun çözümler.',
    category: 'Kullanım',
    date: '2024-11-15',
    readTime: '5 dk',
    image: '[Dört mevsim görseli]'
  },
  {
    slug: 'cam-surgulu-duvarlar-guvenlik-ve-bakim',
    title: 'Cam Sürgülü Duvarlar: Güvenlik ve Bakım',
    excerpt: 'Cam sürgülü duvarların güvenlik özellikleri, bakım gereksinimleri ve uzun ömürlü kullanım için ipuçları.',
    category: 'Teknik',
    date: '2024-11-10',
    readTime: '6 dk',
    image: '[Cam duvar bakım görseli]'
  },
  {
    slug: 'eg-veranda-kalite-standartlari',
    title: 'EG Veranda Kalite Standartları',
    excerpt: 'EG Veranda\'nın uluslararası kalite standartları ve B&B Veranda olarak bu standartları nasıl uyguladığımız.',
    category: 'Kalite',
    date: '2024-11-05',
    readTime: '4 dk',
    image: '[Kalite standartları görseli]'
  }
]

const CATEGORIES = [
  { id: 'tumu', name: 'Tümü', count: BLOG_POSTS.length },
  { id: 'rehber', name: 'Rehber', count: BLOG_POSTS.filter(p => p.category === 'Rehber').length },
  { id: 'trendler', name: 'Trendler', count: BLOG_POSTS.filter(p => p.category === 'Trendler').length },
  { id: 'surec', name: 'Süreç', count: BLOG_POSTS.filter(p => p.category === 'Süreç').length },
  { id: 'projeler', name: 'Projeler', count: BLOG_POSTS.filter(p => p.category === 'Projeler').length },
  { id: 'teknik', name: 'Teknik', count: BLOG_POSTS.filter(p => p.category === 'Teknik').length },
  { id: 'kullanim', name: 'Kullanım', count: BLOG_POSTS.filter(p => p.category === 'Kullanım').length },
  { id: 'kalite', name: 'Kalite', count: BLOG_POSTS.filter(p => p.category === 'Kalite').length }
]

export default function BlogIndexPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container-site">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Veranda ve dış mekan çözümleri hakkında güncel bilgiler, trendler ve uzman tavsiyeleri
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container-site">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition-colors text-sm font-medium"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Öne Çıkan Yazı</h2>
            <Link href={`/blog/${BLOG_POSTS[0].slug}`} className="group">
              <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <div className="text-2xl mb-2">{BLOG_POSTS[0].image}</div>
                    <div className="text-sm text-gray-500">Görsel yüklenecek</div>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {BLOG_POSTS[0].category}
                    </span>
                    <span className="text-gray-500 text-sm">{BLOG_POSTS[0].readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {BLOG_POSTS[0].title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {BLOG_POSTS[0].excerpt}
                  </p>
                  <div className="text-sm text-gray-500">
                    {new Date(BLOG_POSTS[0].date).toLocaleDateString('tr-TR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Blog Grid */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Tüm Yazılar</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.slice(1).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center text-gray-600">
                      <div className="text-center">
                        <div className="text-xl mb-2">{post.image}</div>
                        <div className="text-sm text-gray-500">Görsel yüklenecek</div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString('tr-TR', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-primary rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Güncel Kalın</h3>
            <p className="text-lg mb-6 opacity-90">
              Yeni blog yazılarımızdan ve veranda trendlerinden haberdar olun
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Abone Ol
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}