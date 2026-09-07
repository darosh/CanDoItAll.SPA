import { describe, expect, it } from "vite-plus/test";
import { resolveSnapAdjustment } from "../../src/state/snap-guides.js";

describe("resolveSnapAdjustment", () => {
  it("returns no adjustment when nothing is within tolerance", () => {
    const dragged = { x: 0, y: 0, width: 100, height: 100 };
    const stationary = [{ x: 1000, y: 1000, width: 100, height: 100 }];
    const result = resolveSnapAdjustment(dragged, stationary, 18);
    expect(result).toEqual({ dx: 0, dy: 0, guides: [] });
  });

  it("snaps the X axis when centers are within tolerance", () => {
    // dragged center x = 50; stationary center x = 55 -> within tolerance 18
    const dragged = { x: 0, y: 0, width: 100, height: 100 };
    const stationary = [{ x: 5, y: 500, width: 100, height: 100 }];
    const result = resolveSnapAdjustment(dragged, stationary, 18);
    expect(result.dx).toBe(5);
    expect(result.dy).toBe(0);
    expect(result.guides).toEqual([{ orientation: "vertical", value: 55 }]);
  });

  it("snaps both axes independently against different stationary nodes", () => {
    const dragged = { x: 0, y: 0, width: 100, height: 100 }; // center (50, 50)
    const stationary = [
      { x: 6, y: 900, width: 100, height: 100 }, // center x = 56 (close on X)
      { x: 900, y: 4, width: 100, height: 100 }, // center y = 54 (close on Y)
    ];
    const result = resolveSnapAdjustment(dragged, stationary, 18);
    expect(result.dx).toBe(6);
    expect(result.dy).toBe(4);
    expect(result.guides).toHaveLength(2);
  });

  it("picks the closest candidate on an axis when multiple are within tolerance", () => {
    const dragged = { x: 0, y: 0, width: 100, height: 100 }; // center x = 50
    const stationary = [
      { x: -50, y: 500, width: 100, height: 100 }, // center x = 0, distance 50 (out of tolerance for 60)
      { x: 8, y: 900, width: 100, height: 100 }, // center x = 58, distance 8
      { x: -2, y: 900, width: 100, height: 100 }, // center x = 48, distance 2 (closer)
    ];
    const result = resolveSnapAdjustment(dragged, stationary, 60);
    expect(result.dx).toBe(-2);
  });
});
