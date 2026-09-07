export interface MinimapTransform {
  scale: number;
  offsetX: number;
  offsetY: number;
}

export interface WorldBounds {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

/** Same centering formula as state/viewport.ts's computeFitView — scale-to-fit `bounds` inside
 * `size`, centered, with `padding` px of breathing room. */
export function computeMinimapTransform(
  bounds: WorldBounds,
  size: { width: number; height: number },
  padding = 8,
): MinimapTransform {
  const contentWidth = Math.max(bounds.maxX - bounds.minX, 1);
  const contentHeight = Math.max(bounds.maxY - bounds.minY, 1);
  const availableWidth = Math.max(size.width - padding * 2, 1);
  const availableHeight = Math.max(size.height - padding * 2, 1);
  const scale = Math.min(availableWidth / contentWidth, availableHeight / contentHeight);

  const contentCenterX = (bounds.minX + bounds.maxX) / 2;
  const contentCenterY = (bounds.minY + bounds.maxY) / 2;

  return {
    scale,
    offsetX: size.width / 2 - contentCenterX * scale,
    offsetY: size.height / 2 - contentCenterY * scale,
  };
}

export function worldToMinimap(
  point: { x: number; y: number },
  transform: MinimapTransform,
): { x: number; y: number } {
  return {
    x: point.x * transform.scale + transform.offsetX,
    y: point.y * transform.scale + transform.offsetY,
  };
}

export function minimapToWorld(
  point: { x: number; y: number },
  transform: MinimapTransform,
): { x: number; y: number } {
  return {
    x: (point.x - transform.offsetX) / transform.scale,
    y: (point.y - transform.offsetY) / transform.scale,
  };
}
