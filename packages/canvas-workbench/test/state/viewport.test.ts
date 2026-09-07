import { describe, expect, it } from "vite-plus/test";
import {
  clampZoom,
  computeFitView,
  computeFocusNode,
  MAX_ZOOM,
  MIN_ZOOM,
  zoomAtPoint,
} from "../../src/state/viewport.js";

describe("clampZoom", () => {
  it("clamps to [MIN_ZOOM, MAX_ZOOM]", () => {
    expect(clampZoom(0)).toBe(MIN_ZOOM);
    expect(clampZoom(100)).toBe(MAX_ZOOM);
    expect(clampZoom(1)).toBe(1);
  });
});

describe("zoomAtPoint", () => {
  it("keeps the world point under the pointer stationary", () => {
    const viewport = { zoom: 1, panX: 0, panY: 0 };
    const pointer = { x: 100, y: 100 };
    const next = zoomAtPoint(viewport, pointer, 2);

    const worldXBefore = (pointer.x - viewport.panX) / viewport.zoom;
    const worldXAfter = (pointer.x - next.panX) / next.zoom;
    expect(worldXAfter).toBeCloseTo(worldXBefore);
  });

  it("clamps the resulting zoom", () => {
    const next = zoomAtPoint({ zoom: MAX_ZOOM, panX: 0, panY: 0 }, { x: 0, y: 0 }, 5);
    expect(next.zoom).toBe(MAX_ZOOM);
  });
});

describe("computeFitView", () => {
  it("centers content and picks a zoom that fits both dimensions", () => {
    const bounds = { minX: 0, minY: 0, maxX: 800, maxY: 400 };
    const viewport = computeFitView(bounds, { width: 800, height: 600 }, 0);
    expect(viewport.zoom).toBeCloseTo(1); // 800/800 vs 600/400 -> min is 1
    expect(viewport.panX).toBeCloseTo(0); // content center (400) * zoom 1 = 400 = half of 800
    expect(viewport.panY).toBeCloseTo(100); // 300 - 200*1 = 100
  });
});

describe("computeFocusNode", () => {
  it("centers the viewport on the given point at the given zoom", () => {
    const viewport = computeFocusNode({ x: 50, y: 50 }, { width: 800, height: 600 }, 1);
    expect(viewport).toEqual({ zoom: 1, panX: 350, panY: 250 });
  });
});
