# Veranda Konfigüratör - Geliştirici Dokümantasyonu

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

## Yeni Görsel Ekleme

### 1. Dosya Yerleştirme
- Görseli doğru klasör yapısına yerleştirin
- `.jpg` veya `.png` formatında olabilir
- Dosya adı tam olarak slug ile eşleşmeli

### 2. Assets Map Override (Opsiyonel)
Eğer standart dosya yolu kullanmak istemiyorsanız, `src/types/veranda.ts` dosyasındaki `ASSETS_MAP`'e ekleyebilirsiniz:

```typescript
export const ASSETS_MAP: Partial<Record<string, string>> = {
  'primeline-plus__glass__type-1__antrasit': '/custom/path/image.jpg'
};
```

## Teknik Detaylar

### Bileşenler
- `VerandaConfigurator`: Ana konfigüratör bileşeni
- `Header`: Logo ve navigasyon
- `MobileNav`: Mobil navigasyon

### State Yönetimi
- `Selection` interface ile tip güvenliği
- Bağımlı alanlar otomatik sıfırlanır
- Görsel yolları otomatik güncellenir

### Görsel Yükleme
- Next.js Image bileşeni kullanılır
- `.jpg` → `.png` fallback desteği
- Hata durumunda placeholder gösterilir
- Responsive sizing

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

## Asset Kontrol Scripti

Proje kök dizininde `check-assets.js` scripti bulunur:

```bash
node check-assets.js
```

Bu script:
- Beklenen dosya yapısını kontrol eder
- Eksik dosyaları listeler
- Dosya formatlarını doğrular

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
