import manifest from '@/lib/assets-manifest.json';

export type Model = 'cubo-line' | 'diamond-line' | 'prime-line-plus' | 'prime-recht-plus';
export type Roof = 'glass' | 'polycarbonate';
export type Variant = 'getint-glas' | 'helder-glas' | 'opaal-glas' | 'helder-polycarbonate' | 'opaal-polycarbonate' | 'default';
export type Color = 'antraciet' | 'creme' | 'zwart';

export interface Selection {
  model: Model | null;
  roof: Roof | null;
  variant: Variant | null;
  color: Color | null;
}

// Model display names
export const MODEL_NAMES: Record<Model, string> = {
  'cubo-line': 'Cubo Line',
  'diamond-line': 'Diamond Line',
  'prime-line-plus': 'Prime Line Plus',
  'prime-recht-plus': 'Prime Recht Plus'
};

// Roof display names
export const ROOF_NAMES: Record<Roof, string> = {
  'glass': 'Cam',
  'polycarbonate': 'Polikarbonat'
};

// Variant display names
export const VARIANT_NAMES: Record<Variant, string> = {
  'getint-glas': 'Getint Glas',
  'helder-glas': 'Helder Glas',
  'opaal-glas': 'Opaal Glas',
  'helder-polycarbonate': 'Helder Polycarbonate',
  'opaal-polycarbonate': 'Opaal Polycarbonate',
  'default': 'Varsayılan'
};

// Color display names
export const COLOR_NAMES: Record<Color, string> = {
  'antraciet': 'Antraciet',
  'creme': 'Creme',
  'zwart': 'Zwart'
};

// Assets mapping
export const ASSETS_MAP: Record<string, string> = manifest as Record<string, string>;

// Generate asset map key
export function getAssetKey(selection: Selection): string {
  const { model, roof, variant, color } = selection;
  if (!model || !roof || !variant || !color) return '';
  
  return `${model}__${roof}__${variant}__${color}`;
}

// Get veranda image path with fallback logic
export function getVerandaImagePath(selection: Selection): string {
  const { model, roof, variant, color } = selection;
  
  // Check if all required fields are selected
  if (!model || !roof || !variant || !color) {
    return '/products/verandas/placeholder.jpg';
  }
  
  // Try exact match first
  const exactKey = getAssetKey(selection);
  if (ASSETS_MAP[exactKey]) {
    return ASSETS_MAP[exactKey]!;
  }
  
  // Try fallback keys
  const fallbackKeys = [
    `${model}__${roof}__default__${color}`,
    `${model}__default__default__${color}`
  ];
  
  for (const key of fallbackKeys) {
    if (ASSETS_MAP[key]) {
      return ASSETS_MAP[key]!;
    }
  }
  
  return '/products/verandas/placeholder.jpg';
}

// URL encode/decode for sharing selections
export function encodeSelection(selection: Selection): string {
  const params = new URLSearchParams();
  if (selection.model) params.set('m', selection.model);
  if (selection.roof) params.set('r', selection.roof);
  if (selection.variant) params.set('v', selection.variant);
  if (selection.color) params.set('c', selection.color);
  return params.toString();
}

export function decodeSelection(qs: string): Selection {
  const params = new URLSearchParams(qs.startsWith('?') ? qs.slice(1) : qs);
  const model = (params.get('m') as Model | null) ?? null;
  const roof = (params.get('r') as Roof | null) ?? null;
  const variant = (params.get('v') as Variant | null) ?? null;
  const color = (params.get('c') as Color | null) ?? null;
  
  return { model, roof, variant, color };
}

// Generate alt text for image
export function getImageAltText(selection: Selection): string {
  const { model, roof, variant, color } = selection;
  
  if (!model || !roof || !variant || !color) {
    return 'Lütfen model, çatı tipi, varyant ve renk seçiniz';
  }
  
  return `${MODEL_NAMES[model]} – ${ROOF_NAMES[roof]} – ${VARIANT_NAMES[variant]} – ${COLOR_NAMES[color]}`;
}

// Check if selection is complete
export function isSelectionComplete(selection: Selection): boolean {
  const { model, roof, variant, color } = selection;
  
  return !!(model && roof && variant && color);
}

// Get available roof types for a given model
export function getAvailableRoofs(model: Model): Roof[] {
  if (model === 'cubo-line') {
    return ['glass']; // Cubo Line sadece cam çatı destekler
  }
  return ['glass', 'polycarbonate']; // Diğer modeller her iki çatı tipini destekler
}

// Get available variants for a given roof type
export function getAvailableVariants(roof: Roof): Variant[] {
  if (roof === 'glass') {
    return ['getint-glas', 'helder-glas', 'opaal-glas'];
  } else if (roof === 'polycarbonate') {
    return ['helder-polycarbonate', 'opaal-polycarbonate'];
  }
  return [];
}
