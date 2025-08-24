#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Konfigürasyon
const BASE_PATH = path.join(__dirname, 'public', 'products', 'verandas');
const PLACEHOLDER_PATH = path.join(BASE_PATH, 'placeholder.jpg');

// Slug tanımları
const MODELS = ['primeline-plus', 'r-plus', 'cubo-line', 'cubo-plus'];
const ROOFS = ['glass', 'polycarbonate'];
const GLASS_VARIANTS = ['type-1', 'type-2'];
const COLORS = ['antrasit', 'siyah', 'beyaz'];

// Dosya uzantıları
const EXTENSIONS = ['.jpg', '.png'];

// Renkli console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkFileExists(filePath) {
  return fs.existsSync(filePath);
}

function findImageFile(basePath) {
  for (const ext of EXTENSIONS) {
    const fullPath = basePath + ext;
    if (checkFileExists(fullPath)) {
      return fullPath;
    }
  }
  return null;
}

function generateExpectedPaths() {
  const paths = [];
  
  for (const model of MODELS) {
    for (const roof of ROOFS) {
      if (roof === 'glass') {
        // Cam çatı için varyant gerekli
        for (const variant of GLASS_VARIANTS) {
          for (const color of COLORS) {
            const basePath = path.join(BASE_PATH, model, roof, variant, color);
            paths.push({
              path: basePath,
              type: 'glass',
              model,
              roof,
              variant,
              color,
              expected: `${basePath}.jpg veya ${basePath}.png`
            });
          }
        }
      } else {
        // Polikarbonat çatı için varyant yok
        for (const color of COLORS) {
          const basePath = path.join(BASE_PATH, model, roof, color);
          paths.push({
            path: basePath,
            type: 'polycarbonate',
            model,
            roof,
            variant: null,
            color,
            expected: `${basePath}.jpg veya ${basePath}.png`
          });
        }
      }
    }
  }
  
  return paths;
}

function checkAssets() {
  log('🔍 Veranda Asset Kontrol Scripti Başlatılıyor...', 'cyan');
  log('', 'reset');
  
  // Base path kontrolü
  if (!checkFileExists(BASE_PATH)) {
    log(`❌ Base path bulunamadı: ${BASE_PATH}`, 'red');
    log('📁 public/products/verandas klasörünü oluşturun', 'yellow');
    return;
  }
  
  // Placeholder kontrolü
  if (!checkFileExists(PLACEHOLDER_PATH)) {
    log(`⚠️  Placeholder dosyası bulunamadı: ${PLACEHOLDER_PATH}`, 'yellow');
    log('📁 placeholder.jpg dosyasını oluşturun', 'yellow');
  } else {
    log(`✅ Placeholder dosyası mevcut: ${PLACEHOLDER_PATH}`, 'green');
  }
  
  log('', 'reset');
  
  // Beklenen yolları oluştur
  const expectedPaths = generateExpectedPaths();
  log(`📊 Toplam ${expectedPaths.length} dosya yolu kontrol edilecek`, 'blue');
  log('', 'reset');
  
  let foundCount = 0;
  let missingCount = 0;
  const missingFiles = [];
  
  // Her yolu kontrol et
  for (const item of expectedPaths) {
    const imageFile = findImageFile(item.path);
    
    if (imageFile) {
      foundCount++;
      log(`✅ ${path.relative(process.cwd(), imageFile)}`, 'green');
    } else {
      missingCount++;
      missingFiles.push(item);
      log(`❌ ${item.expected}`, 'red');
    }
  }
  
  log('', 'reset');
  log('📈 ÖZET:', 'bright');
  log(`✅ Bulunan dosyalar: ${foundCount}`, 'green');
  log(`❌ Eksik dosyalar: ${missingCount}`, 'red');
  log(`📊 Toplam: ${expectedPaths.length}`, 'blue');
  
  if (missingCount > 0) {
    log('', 'reset');
    log('📋 EKSİK DOSYALAR:', 'yellow');
    missingFiles.forEach((item, index) => {
      log(`${index + 1}. ${item.expected}`, 'red');
    });
    
    log('', 'reset');
    log('💡 ÖNERİLER:', 'cyan');
    log('• Eksik görselleri doğru klasör yapısına yerleştirin', 'yellow');
    log('• Dosya adlarının slug kurallarına uygun olduğundan emin olun', 'yellow');
    log('• .jpg veya .png formatında olduğunu kontrol edin', 'yellow');
    log('• Placeholder dosyasını oluşturun', 'yellow');
  }
  
  log('', 'reset');
  log('🎯 Asset kontrol tamamlandı!', 'cyan');
}

// Script çalıştır
if (require.main === module) {
  try {
    checkAssets();
  } catch (error) {
    log(`❌ Hata oluştu: ${error.message}`, 'red');
    process.exit(1);
  }
}

module.exports = { checkAssets, generateExpectedPaths };
