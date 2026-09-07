import type Konva from "konva";
import type { WorkbenchStore } from "../state/store.js";
import type { WorkbenchLayers } from "../render/stage.js";
import type { DragHookRegistry } from "./drag.js";
import type { RequestBus } from "./request-bus.js";

/**
 * The extension seam every deferred feature slice plugs into: minimap, diagnostics HUD, marquee
 * selection, snap guides, context-menu/composer dialogs, accessibility mirror, and hot-zones/
 * simulateDrag all attach through this interface rather than requiring changes to render/ or
 * the core interaction/ modules. See render/stage.ts's `overlay` layer for where extensions draw
 * Konva content, and packages/canvas-workbench's plan doc for the concrete mapping of each slice.
 */
export interface WorkbenchExtensionContext {
  stage: Konva.Stage;
  layers: WorkbenchLayers;
  store: WorkbenchStore;
  /** The host element passed to createCanvasWorkbench() — context-menu/composer/diagnostics/
   * marquee overlays are plain DOM, positioned relative to this, not drawn as Konva shapes
   * (matching the old engine's own approach). */
  host: HTMLElement;
  /** Live node id -> mounted Konva.Group, for slices that need to enumerate node bounds
   * (minimap, marquee hit-testing). Call fresh each time — the map is mutated in place as
   * nodes mount/unmount. */
  nodeGroups: () => Map<string, Konva.Group>;
  /** One-shot requests to the host page (context menus, clipboard, composer) — see
   * request-bus.ts. Separate from `store`, which models canvas state, not host-facing events. */
  requestBus: RequestBus;
  /** Register-only view of this workbench instance's drag-move/drag-end hooks — see drag.ts.
   * Instance-scoped (not a module-level registry) so multiple workbenches on one page never
   * cross-react to each other's drags. */
  dragHooks: DragHookRegistry;
}

export interface WorkbenchExtension {
  id: string;
  onAttach(ctx: WorkbenchExtensionContext): void;
  onDetach?(): void;
}

export class ExtensionHost {
  private readonly extensions = new Map<string, WorkbenchExtension>();
  private readonly ctx: WorkbenchExtensionContext;

  constructor(ctx: WorkbenchExtensionContext) {
    this.ctx = ctx;
  }

  register(extension: WorkbenchExtension): void {
    if (this.extensions.has(extension.id)) {
      throw new Error(`Extension "${extension.id}" is already registered.`);
    }
    this.extensions.set(extension.id, extension);
    extension.onAttach(this.ctx);
  }

  unregister(id: string): void {
    const extension = this.extensions.get(id);
    if (!extension) return;
    extension.onDetach?.();
    this.extensions.delete(id);
  }

  destroy(): void {
    for (const id of this.extensions.keys()) this.unregister(id);
  }
}
