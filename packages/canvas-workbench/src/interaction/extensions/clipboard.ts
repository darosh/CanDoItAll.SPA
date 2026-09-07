import type { ClipboardAction, ClipboardRequest } from "../../model/events.js";
import { computeViewportCenter } from "../../state/viewport.js";
import type { WorkbenchExtension, WorkbenchExtensionContext } from "../extensions.js";

export interface ClipboardExtensionOptions {
  /** Mirrors the old engine's `CanvasWorkbenchCreateOptions.hasClipboardHandler` — the engine
   * never mutates scene data itself, it only *requests* the action (see the plan doc's clipboard
   * slice notes), so a host that hasn't wired a `clipboardAction` listener shouldn't have
   * keyboard shortcuts silently do nothing; require this opt-in instead. */
  hasClipboardHandler?: boolean;
}

const KEY_ACTIONS: Record<string, ClipboardAction> = {
  c: "Copy",
  x: "Cut",
  v: "Paste",
  d: "Duplicate",
};

function isEditableTarget(target: Element | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;
}

export function isActionAllowed(
  action: ClipboardAction,
  options: {
    allowCopy?: boolean;
    allowCut?: boolean;
    allowPaste?: boolean;
    allowDuplicate?: boolean;
  },
): boolean {
  switch (action) {
    case "Copy":
      return options.allowCopy !== false;
    case "Cut":
      return options.allowCut !== false;
    case "Paste":
      return options.allowPaste !== false;
    case "Duplicate":
      return options.allowDuplicate !== false;
  }
}

/**
 * Keyboard-shortcut extension (Ctrl/Cmd+C/X/V/D). Fires a `ClipboardRequest` through the request
 * bus and stops there — matching the old engine exactly, not a simplification: the engine never
 * serializes node data or mutates the scene, the host (page-level code) owns that.
 */
export function createClipboardExtension(
  options: ClipboardExtensionOptions = {},
): WorkbenchExtension {
  let ctx: WorkbenchExtensionContext | null = null;

  function handleKeyDown(event: KeyboardEvent): void {
    if (!ctx || !options.hasClipboardHandler) return;
    if (!(event.ctrlKey || event.metaKey)) return;
    const action = KEY_ACTIONS[event.key.toLowerCase()];
    if (!action) return;
    if (isEditableTarget(document.activeElement)) return;

    const surface = ctx.store.getSurface();
    const clipboardOptions = surface.chrome.clipboard ?? {};
    if (clipboardOptions.isEnabled === false) return;
    if (!isActionAllowed(action, clipboardOptions)) return;

    event.preventDefault();

    const uiState = surface.uiState;
    const needsAnchor = action === "Paste" || action === "Duplicate";
    const anchorWorld = needsAnchor
      ? computeViewportCenter(
          { zoom: uiState.zoom, panX: uiState.panX, panY: uiState.panY },
          { width: ctx.stage.width(), height: ctx.stage.height() },
        )
      : null;

    const request: ClipboardRequest = {
      action,
      surfaceId: surface.surfaceId,
      primaryNodeId: uiState.primaryNodeId,
      selectedNodeIds: uiState.selectedNodeIds,
      anchorWorld,
    };
    ctx.requestBus.emit("clipboardAction", request);
  }

  return {
    id: "clipboard",
    onAttach(context) {
      ctx = context;
      document.addEventListener("keydown", handleKeyDown);
    },
    onDetach() {
      document.removeEventListener("keydown", handleKeyDown);
      ctx = null;
    },
  };
}
