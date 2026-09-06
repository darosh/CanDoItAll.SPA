// Barrel for the ported CanvasWorkbench engine.
//
// Each file under ./workbench and ./services is copied from CanDoItAll.Components.CanvasLib
// (and its BaseLib/OverlayLib dependencies), converted to plain ES modules: every file imports
// exactly what it needs and exports what it defines, so the load order that used to be enforced
// by a `window.CanDoItAll` global and "must load before" runtime checks is now just the ordinary
// ES module import graph.
import type { CanvasWorkbenchApi } from "../types";

// runtime-entry.js is plain, untyped JS (see the file header above for why); its sibling
// runtime-entry.d.ts hand-declares just the one export this barrel needs.
import { canvasWorkbench } from "./workbench/runtime-entry.js";

/**
 * Returns the ported engine's public API, built by ./workbench/runtime-entry.js.
 */
export function getCanvasWorkbench(): CanvasWorkbenchApi {
  return canvasWorkbench;
}
