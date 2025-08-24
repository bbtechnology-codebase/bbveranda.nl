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
export const ASSETS_MAP: Partial<Record<string, string>> = {
  // key: `${model}__${roof}${glassVariant ? '__'+glassVariant : ''}__${color}`
  // value: absolute public path
  // Example:
  // 'primeline-plus__glass__type-1__antrasit': '/products/verandas/primeline-plus/glass/type-1/antrasit.png'
};

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
  
  // Check assets map first
  const assetKey = getAssetKey(selection);
  if (ASSETS_MAP[assetKey]) {
    return ASSETS_MAP[assetKey];
  }
  
  // Generate path based on rules
  let path: string;
  if (roof === 'glass') {
    path = `/products/verandas/${model}/${roof}/${glassVariant}/${color}`;
  } else {
    path = `/products/verandas/${model}/${roof}/${color}`;
  }
  
  return path;
}

// Get image with fallback extensions
export async function getImageWithFallback(basePath: string): Promise<string> {
  // Try .jpg first, then .png
  const jpgPath = `${basePath}.jpg`;
  const pngPath = `${basePath}.png`;
  
  if (await probeImage(jpgPath)) {
    return jpgPath;
  }
  
  if (await probeImage(pngPath)) {
    return pngPath;
  }
  
  // Return placeholder if neither exists
  return '/products/verandas/placeholder.jpg';
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
