export interface SnapBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface SnapGuide {
  orientation: "vertical" | "horizontal";
  value: number;
}

export interface SnapResult {
  /** Adjustment to add to the dragged box's x/y to align it — 0 on an axis with no snap. */
  dx: number;
  dy: number;
  guides: SnapGuide[];
}

function centerX(box: SnapBox): number {
  return box.x + box.width / 2;
}

function centerY(box: SnapBox): number {
  return box.y + box.height / 2;
}

/**
 * Pure node-to-node center-alignment (not a grid, matching the old engine): compares the dragged
 * box's center to every stationary box's center on each axis independently, and snaps to the
 * closest one within `tolerance` (already in the same units as the boxes — see
 * interaction/extensions/snap-guides.ts for the screen-px-to-world-units conversion, since
 * `tolerance` is configured in screen pixels but boxes here are in world coordinates).
 */
export function resolveSnapAdjustment(
  dragged: SnapBox,
  stationary: SnapBox[],
  tolerance: number,
): SnapResult {
  const draggedCenterX = centerX(dragged);
  const draggedCenterY = centerY(dragged);

  let bestX: { value: number; distance: number } | null = null;
  let bestY: { value: number; distance: number } | null = null;

  for (const box of stationary) {
    const dxCandidate = Math.abs(centerX(box) - draggedCenterX);
    if (dxCandidate <= tolerance && (!bestX || dxCandidate < bestX.distance)) {
      bestX = { value: centerX(box), distance: dxCandidate };
    }
    const dyCandidate = Math.abs(centerY(box) - draggedCenterY);
    if (dyCandidate <= tolerance && (!bestY || dyCandidate < bestY.distance)) {
      bestY = { value: centerY(box), distance: dyCandidate };
    }
  }

  const guides: SnapGuide[] = [];
  let dx = 0;
  let dy = 0;
  if (bestX) {
    dx = bestX.value - draggedCenterX;
    guides.push({ orientation: "vertical", value: bestX.value });
  }
  if (bestY) {
    dy = bestY.value - draggedCenterY;
    guides.push({ orientation: "horizontal", value: bestY.value });
  }
  return { dx, dy, guides };
}
