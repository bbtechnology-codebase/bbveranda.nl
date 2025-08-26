// scripts/generate-assets-manifest.mjs
import { readdirSync, writeFileSync, statSync, mkdirSync } from 'fs';
import { join, relative } from 'path';
import { fileURLToPath } from 'url';

const ROOT = fileURLToPath(new URL('../public/products/verandas', import.meta.url));
const OUT  = fileURLToPath(new URL('../src/lib/assets-manifest.json', import.meta.url));
console.log('[manifest] ROOT =', ROOT)
console.log('[manifest] OUT  =', OUT)

const map = {};
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (/\.(jpe?g|png)$/i.test(name)) {
      const rel = relative(ROOT, p).replaceAll('\\','/');
      const parts = rel.split('/');
      // Expect structures:
      // glass: [model, 'glass', 'type-x', 'color.ext'] (len 4)
      // polycarbonate: [model, 'polycarbonate', 'color.ext'] (len 3)
      if (parts.length < 3) continue;
      const [model, roof] = parts;
      if (roof !== 'glass' && roof !== 'polycarbonate') continue;
      let key;
      if (roof === 'glass') {
        if (parts.length !== 4) continue;
        const [, , variant, colorFile] = parts;
        const color = colorFile.replace(/\.(jpe?g|png)$/i, '');
        key = `${model}__glass__${variant}__${color}`;
      } else {
        if (parts.length !== 3) continue;
        const [, , colorFile] = parts;
        const color = colorFile.replace(/\.(jpe?g|png)$/i, '');
        key = `${model}__${roof}__${color}`;
      }
      map[key] = `/products/verandas/${rel}`;
    }
  }
}
walk(ROOT);
// Ensure output directory exists
try {
  const outDir = OUT.slice(0, OUT.lastIndexOf('/'));
  mkdirSync(outDir, { recursive: true });
} catch {}

try {
  writeFileSync(OUT, JSON.stringify(map, null, 2));
  console.log('✓ assets-manifest.json:', Object.keys(map).length, 'entries');
} catch (err) {
  console.error('✗ Failed to write manifest:', err);
  process.exitCode = 1;
}


