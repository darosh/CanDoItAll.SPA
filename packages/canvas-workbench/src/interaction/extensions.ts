import type Konva from "konva";
import type { WorkbenchStore } from "../state/store.js";
import type { WorkbenchLayers } from "../render/stage.js";

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
}

export interface WorkbenchExtension {
  id: string;
  onAttach(ctx: WorkbenchExtensionContext): void;
  onDetach?(): void;
}

export class ExtensionHost {
  private readonly extensions = new Map<string, WorkbenchExtension>();

  constructor(private readonly ctx: WorkbenchExtensionContext) {}

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
