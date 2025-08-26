import manifest from '@/lib/assets-manifest.json';

export type Model = 'primeline-plus' | 'r-plus' | 'cubo-line' | 'cubo-plus';
export type Roof = 'glass' | 'polycarbonate';
export type GlassVariant = 'type-1' | 'type-2';
export type Color = 'antrasit' | 'siyah' | 'beyaz';

export interface Selection {
  model: Model | null;
  roof: Roof | null;
  glassVariant?: GlassVariant | null;
  color: Color | null;
}

// Model display names
export const MODEL_NAMES: Record<Model, string> = {
  'primeline-plus': 'Primeline Plus',
  'r-plus': 'R-Plus',
  'cubo-line': 'Cubo Line',
  'cubo-plus': 'Cubo Plus'
};

// Roof display names
export const ROOF_NAMES: Record<Roof, string> = {
  'glass': 'Cam',
  'polycarbonate': 'Polikarbonat'
};

// Glass variant display names
export const GLASS_VARIANT_NAMES: Record<GlassVariant, string> = {
  'type-1': 'Tip 1',
  'type-2': 'Tip 2'
};

// Color display names
export const COLOR_NAMES: Record<Color, string> = {
  'antrasit': 'Antrasit',
  'siyah': 'Siyah',
  'beyaz': 'Beyaz'
};

// Assets mapping for specific overrides (optional)
export const ASSETS_MAP: Partial<Record<string, string>> = manifest as Record<string, string>;

// Generate asset map key
export function getAssetKey(selection: Selection): string {
  const { model, roof, glassVariant, color } = selection;
  if (!model || !roof || !color) return '';
  
  if (roof === 'glass' && glassVariant) {
    return `${model}__${roof}__${glassVariant}__${color}`;
  }
  return `${model}__${roof}__${color}`;
}

// Check if image exists (basic check)
export async function probeImage(src: string): Promise<boolean> {
  try {
    const response = await fetch(src, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
}

// Get veranda image path
export function getVerandaImagePath(selection: Selection): string {
  const { model, roof, glassVariant, color } = selection;
  
  // Check if all required fields are selected
  if (!model || !roof || !color) {
    return '/products/verandas/placeholder.jpg';
  }
  
  // For glass roof, glassVariant is required
  if (roof === 'glass' && !glassVariant) {
    return '/products/verandas/placeholder.jpg';
  }
  
  // Manifest-based resolution
  const assetKey = getAssetKey(selection);
  if (assetKey && ASSETS_MAP[assetKey]) {
    return ASSETS_MAP[assetKey]!;
  }

  // Fallback: try known extensions deterministically
  const base = roof === 'glass'
    ? `/products/verandas/${model}/${roof}/${glassVariant}/${color}`
    : `/products/verandas/${model}/${roof}/${color}`;
  const candidates = [
    `${base}.jpg`,
    `${base}.jpeg`,
    `${base}.png`
  ];
  for (const c of candidates) {
    // We cannot probe at build-time reliably on client; return first candidate.
    // Server will 404 if missing; UI supplies placeholder on error.
    return c;
  }
  return '/products/verandas/placeholder.jpg';
}

// Get image with fallback extensions
export async function getImageWithFallback(basePath: string): Promise<string> {
  const jpgPath = `${basePath}.jpg`;
  const jpegPath = `${basePath}.jpeg`;
  const pngPath = `${basePath}.png`;
  if (await probeImage(jpgPath)) return jpgPath;
  if (await probeImage(jpegPath)) return jpegPath;
  if (await probeImage(pngPath)) return pngPath;
  return '/products/verandas/placeholder.jpg';
}

// URL encode/decode for sharing selections
export function encodeSelection(selection: Selection): string {
  const params = new URLSearchParams();
  if (selection.model) params.set('m', selection.model);
  if (selection.roof) params.set('r', selection.roof);
  if (selection.roof === 'glass' && selection.glassVariant) params.set('g', selection.glassVariant);
  if (selection.color) params.set('c', selection.color);
  return params.toString();
}

export function decodeSelection(qs: string): Selection {
  const params = new URLSearchParams(qs.startsWith('?') ? qs.slice(1) : qs);
  const model = (params.get('m') as Model | null) ?? null;
  const roof = (params.get('r') as Roof | null) ?? null;
  const glassVariant = (params.get('g') as GlassVariant | null) ?? null;
  const color = (params.get('c') as Color | null) ?? null;
  // Enforce dependencies
  const fixed: Selection = { model, roof, glassVariant: null, color: null };
  if (roof === 'glass') {
    fixed.glassVariant = glassVariant;
  }
  if (roof === 'polycarbonate' || (roof === 'glass' && glassVariant)) {
    fixed.color = color;
  }
  return fixed;
}

// Generate alt text for image
export function getImageAltText(selection: Selection): string {
  const { model, roof, glassVariant, color } = selection;
  
  if (!model || !roof || !color) {
    return 'Lütfen model, çatı tipi ve renk seçiniz';
  }
  
  let alt = `${MODEL_NAMES[model]} – ${ROOF_NAMES[roof]}`;
  
  if (roof === 'glass' && glassVariant) {
    alt += ` ${GLASS_VARIANT_NAMES[glassVariant]}`;
  }
  
  alt += ` – ${COLOR_NAMES[color]}`;
  
  return alt;
}

// Check if selection is complete
export function isSelectionComplete(selection: Selection): boolean {
  const { model, roof, glassVariant, color } = selection;
  
  if (!model || !roof || !color) return false;
  
  if (roof === 'glass' && !glassVariant) return false;
  
  return true;
}
