# Veranda Configurator - Dinamik Görsel Sistemi

Bu sistem, veranda ürünlerinin dinamik olarak konfigüre edilmesini ve her kombinasyon için doğru görselin otomatik olarak yüklenmesini sağlar.

## 🚀 Özellikler

- **Otomatik Görsel Eşleştirme**: Her kombinasyon için doğru uzantılı (.jpg/.jpeg/.png) görseli bulur
- **Fallback Sistemi**: Görsel bulunamazsa placeholder gösterir
- **Temiz Başlangıç**: Her sayfa yüklendiğinde varsayılan seçimlerle başlar
- **Hataya Dayanıklı**: Dosya bulunamazsa zarifçe hata yönetimi
- **Build-time Manifest**: Dosyalar build sırasında otomatik taranır

## 📁 Dosya Yapısı

```
public/products/verandas/
├── cubo-line/
│   └── glas/
│       ├── getint-glas/
│       ├── helder-glas/
│       └── opaal-glas/
├── prime-line-plus/
│   ├── glass/
│   └── polycarbonate/
├── prime-recht-plus/
│   ├── glass/
│   └── polycarbonate/
└── placeholder.jpg
```

## 🔧 Kurulum

### 1. Manifest Oluşturma

```bash
npm run predev  # Development için
npm run prebuild  # Production için
```

### 2. Bileşen Kullanımı

```tsx
import VerandaConfigurator from '@/components/VerandaConfigurator'

export default function MyPage() {
  return (
    <div>
      <h1>Veranda Seçin</h1>
      <VerandaConfigurator />
    </div>
  )
}
```

## 🎯 Kullanım

### Model Seçenekleri
- `cubo-line` - Cubo Line
- `diamond-line` - Diamond Line  
- `prime-line-plus` - Prime Line Plus
- `prime-recht-plus` - Prime Recht Plus

### Çatı Tipleri
- `glass` - Cam (Tüm modeller)
- `polycarbonate` - Polikarbonat (Cubo Line hariç tüm modeller)

### Varyantlar
**Cam için:**
- `getint-glas` - Getint Glas
- `helder-glas` - Helder Glas
- `opaal-glas` - Opaal Glas

**Polikarbonat için:**
- `helder-polycarbonate` - Helder Polycarbonate
- `opaal-polycarbonate` - Opaal Polycarbonate

### Renkler
- `antraciet` - Antraciet
- `creme` - Creme
- `zwart` - Zwart

## 🔄 Sayfa Davranışı

Her sayfa ziyaretinde konfigüratör varsayılan seçimlerle başlar:
- **Model**: Prime Line Plus
- **Çatı**: Cam
- **Varyant**: Helder Glas
- **Renk**: Antraciet

Önceki seçimler saklanmaz, her sayfa ziyareti temiz bir başlangıç sağlar. Başka sayfaya gidip geri döndüğünüzde de seçimler sıfırlanır.

## 🛠️ Teknik Detaylar

### Manifest Sistemi

`scripts/generate-assets-manifest.mjs` dosyası build sırasında çalışır ve tüm görselleri tarar:

```javascript
// Key format: model__roof__variant__color
"prime-line-plus__glass__helder-glas__antraciet": "/products/verandas/prime-line-plus/glass/helder-glas/antraciet_primeline_glas-helder.jpg"
```

### Fallback Mantığı

1. **Exact Match**: Tam kombinasyon aranır
2. **Roof Default**: Aynı çatı tipi, default varyant
3. **Model Default**: Model seviyesi default görsel
4. **Placeholder**: Hiçbiri bulunamazsa placeholder

### Görsel Çözümleme

```typescript
import { getImagePath, Selection } from '@/types/veranda'

const selection: Selection = {
  model: 'prime-line-plus',
  roof: 'glass', 
  variant: 'helder-glas',
  color: 'antraciet'
}

const imagePath = getImagePath(selection)
// → "/products/verandas/prime-line-plus/glass/helder-glas/antraciet_primeline_glas-helder.jpg"
```

## 🧪 Test

Test sayfası: `http://localhost:3000/test-configurator`

### Test Senaryoları

1. **Model Değiştirme**: Görsel anında değişmeli
2. **Çatı Tipi**: Varyant seçenekleri güncellenmeli
3. **Renk Değiştirme**: Görsel değişmeli
4. **Sayfa Yenileme**: Varsayılan seçimlerle başlamalı
5. **Sayfa Ziyareti**: Başka sayfaya gidip geri dönünce seçimler sıfırlanmalı
6. **Hata Durumu**: Placeholder gösterilmeli

## 📊 İstatistikler

- **Toplam Kombinasyon**: 42
- **Modeller**: 4
- **Çatı Tipleri**: 2 (Cubo Line sadece cam)
- **Varyantlar**: 5
- **Renkler**: 3

## 🔄 Güncelleme

Yeni görsel eklendiğinde:

1. Dosyayı uygun klasöre yerleştir
2. `npm run predev` çalıştır
3. Manifest otomatik güncellenir

## 🐛 Sorun Giderme

### Görsel Yüklenmiyor
- Dosya yolu doğru mu?
- Dosya adı formatı uygun mu?
- Manifest güncel mi?

### Varyant Seçenekleri Görünmüyor
- Çatı tipi seçili mi?
- `getAvailableVariants()` fonksiyonu çalışıyor mu?

### Sayfa Yenilendiğinde Seçimler Sıfırlanmıyor
- `DEFAULT_SELECTION` değerleri doğru mu?
- State initialization çalışıyor mu?
