// Scan public/products/verandas and build a map:
// key:  model__{glass|polycarbonate}__{getint-glas|helder-glas|opaal-glas|helder-polycarbonate|opaal-polycarbonate|default}__{antraciet|creme|zwart}
// val:  "/products/verandas/relative/path.ext"

import { readdirSync, statSync, writeFileSync } from 'fs';
import { join, relative, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ROOT = join(__dirname, '../public/products/verandas');
const OUT = join(__dirname, '../src/lib/assets-manifest.json');

const extsRe = /\.(jpe?g|png)$/i;
const colorRe = /^(antraciet|creme|zwart)/i;

const map = {};

function normRoof(dirName) {
  // Some folders use "glas"; normalize to "glass"
  return dirName === 'glas' ? 'glass' : dirName;
}

function addEntry(model, roof, variant, color, relPath) {
  const key = `${model}__${roof}__${variant}__${color}`;
  map[key] = `/products/verandas/${relPath.replaceAll('\\','/')}`;
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) {
      walk(p);
      continue;
    }
    if (!extsRe.test(name)) continue;

    const rel = relative(ROOT, p);
    const parts = rel.split(/\\|\//); // [model, roof|file, maybeVariant|file, file]
    // Cases:
    // 1) model/glass|glas/<variant>/<file>
    // 2) model/polycarbonate/<variant>/<file>
    // 3) model/<file> (root-level "default" photos)

    if (parts.length === 4) {
      const [model, roofRaw, variant, file] = parts;
      const roof = normRoof(roofRaw);
      const base = basename(file);
      const m = base.match(colorRe);
      if (!m) continue;
      const color = m[1].toLowerCase();
      addEntry(model, roof, variant, color, rel);
      continue;
    }

    if (parts.length === 2) {
      // root images: model/<file>  → treat as default variant (any roof)
      const [model, file] = parts;
      const base = basename(file);
      const m = base.match(colorRe);
      if (!m) continue;
      const color = m[1].toLowerCase();
      addEntry(model, 'default', 'default', color, rel);
      continue;
    }
  }
}

walk(ROOT);
writeFileSync(OUT, JSON.stringify(map, null, 2));

// Force output to console
const entryCount = Object.keys(map).length;
process.stdout.write(`✓ assets-manifest.json generated: ${entryCount} entries\n`);
process.stdout.write('Sample entries:\n');
Object.keys(map).slice(0, 3).forEach(key => {
  process.stdout.write(`  ${key} → ${map[key]}\n`);
});


