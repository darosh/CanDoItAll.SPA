import { describe, expect, it } from "vite-plus/test";
import { normalizeNode } from "../../src/model/normalize.js";
import { resolveAllPositions, resolveNodePosition } from "../../src/state/positions.js";

describe("resolveNodePosition", () => {
  it("falls back to the node's own x/y when there is no manual override", () => {
    const node = normalizeNode({ id: "a", x: 10, y: 20 });
    expect(resolveNodePosition(node, {})).toEqual({ x: 10, y: 20 });
  });

  it("prefers a manualPositions overlay over the node's own x/y", () => {
    const node = normalizeNode({ id: "a", x: 10, y: 20 });
    expect(resolveNodePosition(node, { a: { x: 99, y: 88 } })).toEqual({ x: 99, y: 88 });
  });
});

describe("resolveAllPositions", () => {
  it("resolves a position per node, keyed by id", () => {
    const nodes = [normalizeNode({ id: "a", x: 0, y: 0 }), normalizeNode({ id: "b", x: 5, y: 5 })];
    const positions = resolveAllPositions(nodes, { b: { x: 50, y: 50 } });
    expect(positions.get("a")).toEqual({ x: 0, y: 0 });
    expect(positions.get("b")).toEqual({ x: 50, y: 50 });
  });
});
