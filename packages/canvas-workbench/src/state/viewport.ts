export interface Viewport {
  zoom: number;
  panX: number;
  panY: number;
}

export const MIN_ZOOM = 0.15;
export const MAX_ZOOM = 1.75;

export function clampZoom(zoom: number): number {
  return Math.min(Math.max(zoom, MIN_ZOOM), MAX_ZOOM);
}

/**
 * Rescale around a fixed screen-space pointer position, keeping the world point under the
 * pointer stationary. `factor` multiplies the current zoom (e.g. 1.05 per wheel tick).
 */
export function zoomAtPoint(
  viewport: Viewport,
  pointer: { x: number; y: number },
  factor: number,
): Viewport {
  const nextZoom = clampZoom(viewport.zoom * factor);
  const worldX = (pointer.x - viewport.panX) / viewport.zoom;
  const worldY = (pointer.y - viewport.panY) / viewport.zoom;
  return {
    zoom: nextZoom,
    panX: pointer.x - worldX * nextZoom,
    panY: pointer.y - worldY * nextZoom,
  };
}

export interface WorldBounds {
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
}

/** Computes the viewport that fits `bounds` inside `viewportSize`, centered, with `padding` px of breathing room. */
export function computeFitView(
  bounds: WorldBounds,
  viewportSize: { width: number; height: number },
  padding = 64,
): Viewport {
  const contentWidth = Math.max(bounds.maxX - bounds.minX, 1);
  const contentHeight = Math.max(bounds.maxY - bounds.minY, 1);
  const availableWidth = Math.max(viewportSize.width - padding * 2, 1);
  const availableHeight = Math.max(viewportSize.height - padding * 2, 1);
  const zoom = clampZoom(Math.min(availableWidth / contentWidth, availableHeight / contentHeight));

  const contentCenterX = (bounds.minX + bounds.maxX) / 2;
  const contentCenterY = (bounds.minY + bounds.maxY) / 2;

  return {
    zoom,
    panX: viewportSize.width / 2 - contentCenterX * zoom,
    panY: viewportSize.height / 2 - contentCenterY * zoom,
  };
}

/** Re-centers the viewport on a single world point without changing zoom. */
export function computeFocusNode(
  point: { x: number; y: number },
  viewportSize: { width: number; height: number },
  zoom: number,
): Viewport {
  return {
    zoom,
    panX: viewportSize.width / 2 - point.x * zoom,
    panY: viewportSize.height / 2 - point.y * zoom,
  };
}
