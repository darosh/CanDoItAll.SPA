import type Konva from "konva";

/** Thin wrapper over Konva's native hit-graph/bounds APIs — replaces the old engine's hand-rolled
 * hit-testing entirely. Later slices (hot-zones, simulateDrag) build on these same primitives:
 * tag a shape/group with `.name()`/`.id()` and query it with `stage.findOne()`. */
export function getWorldClientRect(
  node: Konva.Node,
  relativeTo: Konva.Container,
): { x: number; y: number; width: number; height: number } {
  return node.getClientRect({ relativeTo });
}

export function findNodeGroup(stage: Konva.Stage, nodeId: string): Konva.Group | undefined {
  const found = stage.findOne(`#${cssEscape(nodeId)}`);
  return found?.getClassName() === "Group" ? (found as Konva.Group) : undefined;
}

function cssEscape(value: string): string {
  return value.replace(/[^a-zA-Z0-9_-]/g, (char) => `\\${char}`);
}
