# B&B Veranda – Geliştirici Dokümantasyonu

## Genel Bakış

Bu proje, veranda ürünlerinin dinamik konfigürasyonunu sağlayan bir Next.js uygulamasıdır. Kullanıcılar model, çatı tipi, cam varyantı ve renk seçerek ürün görsellerini önizleyebilir.

## Dosya Yapısı

### Görsel Assets
```
public/
  products/
    verandas/
      <model-slug>/
        <roof-slug>/
          <optional-glass-variant-slug>/   # sadece çatı tipi = cam ise
            <color-slug>.(jpg|png)
```

### Slug Kuralları

#### Model
- `primeline-plus` → Primeline Plus
- `r-plus` → R-Plus  
- `cubo-line` → Cubo Line
- `cubo-plus` → Cubo Plus

#### Çatı Tipi
- `glass` → Cam
- `polycarbonate` → Polikarbonat

#### Cam Varyantı (sadece glass çatı için)
- `type-1` → Tip 1
- `type-2` → Tip 2

#### Renk
- `antrasit` → Antrasit
- `siyah` → Siyah
- `beyaz` → Beyaz

### Örnek Dosya Yolları
```
/products/verandas/primeline-plus/glass/type-1/antrasit.jpg
/products/verandas/primeline-plus/glass/type-2/beyaz.jpg
/products/verandas/primeline-plus/polycarbonate/antrasit.jpg
/products/verandas/cubo-plus/glass/type-1/siyah.jpg
```

## Asset Manifest & Kontrol

- Manifest scripti: `scripts/generate-assets-manifest.mjs` → `src/lib/assets-manifest.json`
- `predev` ve `prebuild` sırasında otomatik çalışır.
- Kökte `check-assets.js` ile manuel kontrol yapılabilir:
  - `node check-assets.js`
  - Eksik/yanlış dosya adlarını listeler

## Yeni Görsel Ekleme

### 1. Dosya Yerleştirme
- Görseli doğru klasör yapısına yerleştirin
- `.jpg` veya `.png` formatında olabilir
- Dosya adı tam olarak slug ile eşleşmeli

### 2. Assets Map Override (Opsiyonel)
Eğer standart dosya yolu kullanmak istemiyorsanız, `src/types/veranda.ts` dosyasındaki `ASSETS_MAP` manifest ile üstlenir. Gerekirse build öncesi `src/lib/assets-manifest.json` içine özel eşlemeler ekleyebilirsiniz.

## Teknik Detaylar

### Bileşenler
- `VerandaConfigurator`: Ana konfigüratör bileşeni
- `Header`: Logo ve navigasyon
- `MobileNav`: Mobil navigasyon

### State Yönetimi
- `Selection` interface ile tip güvenliği
- Bağımlı alanlar otomatik sıfırlanır
- Görsel yolları manifest ile çözümlenir, URL ile paylaşılabilir

### Görsel Yükleme
- Next.js Image bileşeni kullanılır
- Manifest ile doğru uzantı çözümü, hata durumunda placeholder
- Responsive sizing

## Teklif API ve Ortam Değişkenleri

- `POST /api/teklif`: zod doğrulama, Resend + SMTP fallback, audit log `/.data/teklif-logs.json` (opsiyonel)
- Bot koruması: Cloudflare Turnstile veya hCaptcha
- `.env.local` örneği:

```
RESEND_API_KEY=
TO_EMAIL=
FROM_EMAIL=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=

NEXT_PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
# veya
HCAPTCHA_SITE_KEY=
HCAPTCHA_SECRET_KEY=

NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_SITE_URL=https://www.bbveranda.nl
```

## i18n

- next-intl ile `/tr` varsayılan, `/nl` ikinci dil
- Mesajlar: `messages/tr.json`, `messages/nl.json`
- Locale middleware: `src/middleware.ts`

## SEO

- OG/Twitter/alternates: `app/layout.tsx`
- `app/sitemap.ts`, `app/robots.ts`
- JSON-LD Organization: `app/page.tsx`

## Analytics & Consent

- GA4 `NEXT_PUBLIC_GA_ID`
- Consent Mode v2: `CookieBanner` kabul sonrası tam izleme, öncesinde sınırlı ölçüm

## Geliştirme

### Gereksinimler
- Node.js 18+
- npm veya yarn

### Kurulum
```bash
npm install
npm run dev
```

### Build
```bash
npm run build
npm start
```

## Sorun Giderme

### Görsel Yüklenmiyor
1. Dosya yolu doğru mu kontrol edin
2. Dosya adı slug ile eşleşiyor mu
3. Dosya formatı `.jpg` veya `.png` mi
4. Placeholder dosyası mevcut mu

### TypeScript Hataları
1. `npm run build` ile build hatalarını kontrol edin
2. Tip tanımlarını güncelleyin
3. Import/export yollarını kontrol edin

### Stil Sorunları
1. Tailwind CSS kurulumunu kontrol edin
2. CSS sınıflarının doğru yazıldığından emin olun
3. Responsive breakpoint'leri kontrol edin

## Katkıda Bulunma

1. Feature branch oluşturun
2. Değişikliklerinizi commit edin
3. Pull request açın
4. Code review sonrası merge edin

## Lisans

Bu proje EG Veranda için geliştirilmiştir.
