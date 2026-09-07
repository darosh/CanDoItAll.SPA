import { describe, expect, it } from "vite-plus/test";
import {
  normalizeRect,
  rectContains,
  rectsIntersect,
  resolveMarqueeSelection,
} from "../../src/state/marquee.js";

describe("normalizeRect", () => {
  it("normalizes a rect regardless of drag direction", () => {
    expect(normalizeRect({ x: 100, y: 100 }, { x: 20, y: 40 })).toEqual({
      x: 20,
      y: 40,
      width: 80,
      height: 60,
    });
    expect(normalizeRect({ x: 20, y: 40 }, { x: 100, y: 100 })).toEqual({
      x: 20,
      y: 40,
      width: 80,
      height: 60,
    });
  });
});

describe("rectsIntersect", () => {
  it("detects overlap", () => {
    const a = { x: 0, y: 0, width: 100, height: 100 };
    const b = { x: 50, y: 50, width: 100, height: 100 };
    expect(rectsIntersect(a, b)).toBe(true);
  });

  it("detects no overlap", () => {
    const a = { x: 0, y: 0, width: 10, height: 10 };
    const b = { x: 100, y: 100, width: 10, height: 10 };
    expect(rectsIntersect(a, b)).toBe(false);
  });
});

describe("rectContains", () => {
  it("is true only when inner is fully inside outer", () => {
    const outer = { x: 0, y: 0, width: 200, height: 200 };
    const fullyInside = { x: 50, y: 50, width: 50, height: 50 };
    const partiallyInside = { x: 150, y: 150, width: 100, height: 100 };
    expect(rectContains(outer, fullyInside)).toBe(true);
    expect(rectContains(outer, partiallyInside)).toBe(false);
  });
});

describe("resolveMarqueeSelection", () => {
  const boxes = new Map([
    ["a", { x: 0, y: 0, width: 50, height: 50 }],
    ["b", { x: 200, y: 200, width: 50, height: 50 }],
  ]);
  const marquee = { x: 0, y: 0, width: 100, height: 100 };

  it("defaults to intersect mode", () => {
    expect(resolveMarqueeSelection(boxes, marquee, "Intersect")).toEqual(["a"]);
  });

  it("respects Contain mode", () => {
    const containingMarquee = { x: -10, y: -10, width: 1000, height: 1000 };
    expect(resolveMarqueeSelection(boxes, containingMarquee, "Contain").sort()).toEqual(["a", "b"]);
    expect(resolveMarqueeSelection(boxes, marquee, "Contain")).toEqual(["a"]);
  });

  it("returns an empty array when nothing matches", () => {
    expect(
      resolveMarqueeSelection(boxes, { x: 500, y: 500, width: 10, height: 10 }, "Intersect"),
    ).toEqual([]);
  });
});
