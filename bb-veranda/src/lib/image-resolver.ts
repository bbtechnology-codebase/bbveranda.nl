import manifest from '@/lib/assets-manifest.json';

export type Model =
  | 'cubo-line'
  | 'diamond-line'
  | 'prime-line-plus'
  | 'prime-recht-plus';

export type Roof = 'glass' | 'polycarbonate';
export type Variant =
  | 'getint-glas'
  | 'helder-glas'
  | 'opaal-glas'
  | 'helder-polycarbonate'
  | 'opaal-polycarbonate'
  | 'default';

export type Color = 'antraciet' | 'creme' | 'zwart';

export interface Selection {
  model: Model;
  roof: Roof;
  variant: Variant;
  color: Color;
}

// If your UI uses Turkish labels (Antrasit/Krem/Siyah), adapt with this map:
export const TR_TO_SLUG_COLOR: Record<string, Color> = {
  antrasit: 'antraciet',
  krem: 'creme',
  siyah: 'zwart',
};

function keysFor(sel: Selection): string[] {
  // 1) exact
  const k1 = `${sel.model}__${sel.roof}__${sel.variant}__${sel.color}`;
  // 2) same roof, but default variant (if any)
  const k2 = `${sel.model}__${sel.roof}__default__${sel.color}`;
  // 3) model-level default photo
  const k3 = `${sel.model}__default__default__${sel.color}`;
  return [k1, k2, k3];
}

export function getImagePath(sel: Selection): string {
  const m = manifest as Record<string, string>;
  for (const k of keysFor(sel)) {
    const p = m[k];
    if (p) return p;
  }
  return '/products/verandas/placeholder.jpg';
}

export function encodeSelection(sel: Selection): string {
  const params = new URLSearchParams({
    m: sel.model,
    r: sel.roof,
    v: sel.variant,
    c: sel.color,
  });
  return params.toString();
}

export function decodeSelection(qs: string): Partial<Selection> {
  const p = new URLSearchParams(qs);
  return {
    model: p.get('m') as Selection['model'] | null,
    roof: p.get('r') as Selection['roof'] | null,
    variant: p.get('v') as Selection['variant'] | null,
    color: p.get('c') as Selection['color'] | null,
  } as Partial<Selection>;
}

export function imageAlt(sel: Selection): string {
  // e.g., "prime-line-plus, glass, helder-glas, antraciet"
  return `${sel.model}, ${sel.roof}, ${sel.variant}, ${sel.color}`;
}
