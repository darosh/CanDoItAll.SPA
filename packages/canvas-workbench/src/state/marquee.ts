export interface MarqueeRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function normalizeRect(
  a: { x: number; y: number },
  b: { x: number; y: number },
): MarqueeRect {
  return {
    x: Math.min(a.x, b.x),
    y: Math.min(a.y, b.y),
    width: Math.abs(b.x - a.x),
    height: Math.abs(b.y - a.y),
  };
}

export function rectsIntersect(a: MarqueeRect, b: MarqueeRect): boolean {
  return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
}

export function rectContains(outer: MarqueeRect, inner: MarqueeRect): boolean {
  return (
    inner.x >= outer.x &&
    inner.y >= outer.y &&
    inner.x + inner.width <= outer.x + outer.width &&
    inner.y + inner.height <= outer.y + outer.height
  );
}

/** Node ids whose bounds match the marquee under the given selection mode ("Contain" requires the
 * node fully inside the marquee; anything else — including the default "Intersect" — matches on
 * any overlap). */
export function resolveMarqueeSelection(
  nodeBoxes: Map<string, MarqueeRect>,
  marqueeBounds: MarqueeRect,
  mode: string,
): string[] {
  const matched: string[] = [];
  for (const [nodeId, box] of nodeBoxes) {
    const isMatch =
      mode === "Contain" ? rectContains(marqueeBounds, box) : rectsIntersect(marqueeBounds, box);
    if (isMatch) matched.push(nodeId);
  }
  return matched;
}
