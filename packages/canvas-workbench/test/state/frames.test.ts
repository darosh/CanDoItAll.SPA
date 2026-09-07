import { describe, expect, it } from "vite-plus/test";
import { normalizeGroupFrame } from "../../src/model/normalize.js";
import { computeFrameBounds } from "../../src/state/frames.js";

describe("computeFrameBounds", () => {
  const boxes = new Map([
    ["a", { x: 0, y: 0, width: 100, height: 50 }],
    ["b", { x: 200, y: 100, width: 100, height: 50 }],
  ]);

  it("returns null when no anchor node has a resolved box", () => {
    const frame = normalizeGroupFrame({ id: "f1", anchorNodeIds: ["missing"] });
    expect(computeFrameBounds(frame, boxes)).toBeNull();
  });

  it("wraps the union of anchor node boxes with padding", () => {
    const frame = normalizeGroupFrame({ id: "f1", anchorNodeIds: ["a", "b"] });
    const bounds = computeFrameBounds(frame, boxes, 10);
    expect(bounds).toEqual({ x: -10, y: -10, width: 320, height: 170 });
  });

  it("skips anchor ids with no resolved box instead of failing", () => {
    const frame = normalizeGroupFrame({ id: "f1", anchorNodeIds: ["a", "missing"] });
    const bounds = computeFrameBounds(frame, boxes, 0);
    expect(bounds).toEqual({ x: 0, y: 0, width: 100, height: 50 });
  });
});
