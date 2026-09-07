import type Konva from "konva";
import type { CreateComposerRequest } from "../../model/events.js";
import type { CanvasWorkbenchAction, ResolvedNode } from "../../model/types.js";
import type { WorkbenchExtension, WorkbenchExtensionContext } from "../extensions.js";
import { renderComposer } from "./composer.js";

export interface ContextMenuController extends WorkbenchExtension {
  openContextSubmenu(actionId: string): void;
  openQuickCreateMenu(anchorElement: HTMLElement): void;
  openCreateComposer(action: CanvasWorkbenchAction, request: CreateComposerRequest): void;
}

interface MenuTarget {
  nodeId: string | null;
  sourceNodeId: string | null;
  parentNodeId: string | null;
  x: number;
  y: number;
}

const MENU_STYLE: Partial<CSSStyleDeclaration> = {
  position: "absolute",
  zIndex: "20",
  background: "white",
  border: "1px solid #d4d4d8",
  borderRadius: "6px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
  padding: "4px",
  minWidth: "160px",
  font: "13px system-ui, sans-serif",
};

/**
 * DOM overlay extension for context menus, the quick-create rail, and the create-composer
 * dialog — plain DOM appended into the Stage's own `content` div (already position:relative,
 * sized to match the stage), not Konva shapes, matching the old engine's own approach. See the
 * plan doc's "Slice 1" section.
 */
export function createContextMenuExtension(): ContextMenuController {
  let ctx: WorkbenchExtensionContext | null = null;
  let openEl: HTMLElement | null = null;
  const disposers: (() => void)[] = [];

  function closeAll(): void {
    openEl?.remove();
    openEl = null;
  }

  function findNodeGroupFromEvent(event: Konva.KonvaEventObject<PointerEvent>): Konva.Group | null {
    const target = event.target;
    const group = target.findAncestor(".node-group", true);
    return (group as Konva.Group | undefined) ?? null;
  }

  function resolveNode(nodeId: string): ResolvedNode | undefined {
    return ctx?.store.getSurface().nodes.find((node) => node.id === nodeId);
  }

  function renderMenu(
    actions: CanvasWorkbenchAction[],
    target: MenuTarget,
    anchor: { x: number; y: number },
  ): void {
    closeAll();
    if (!ctx || actions.length === 0) return;

    const menu = document.createElement("div");
    menu.className = "cw-context-menu";
    Object.assign(menu.style, MENU_STYLE, { left: `${anchor.x}px`, top: `${anchor.y}px` });

    for (const action of actions) {
      const item = document.createElement("button");
      item.type = "button";
      item.textContent = action.label || action.actionId;
      Object.assign(item.style, {
        display: "block",
        width: "100%",
        textAlign: "left",
        padding: "6px 10px",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        borderRadius: "4px",
      });
      item.addEventListener("mouseenter", () => (item.style.background = "#f4f4f5"));
      item.addEventListener("mouseleave", () => (item.style.background = "transparent"));
      item.addEventListener("click", (domEvent) => {
        domEvent.stopPropagation();
        if (action.children && action.children.length > 0) {
          const itemRect = item.getBoundingClientRect();
          const hostRect = ctx!.stage.content.getBoundingClientRect();
          renderMenu(action.children, target, {
            x: itemRect.right - hostRect.left,
            y: itemRect.top - hostRect.top,
          });
          return;
        }
        if (action.requiresInput || action.requiresFile) {
          closeAll();
          openComposer(action, {}, target, anchor);
          return;
        }
        closeAll();
        ctx!.requestBus.emit("contextAction", {
          nodeId: target.nodeId,
          actionId: action.actionId,
          x: target.x,
          y: target.y,
        });
      });
      menu.appendChild(item);
    }

    ctx.stage.content.appendChild(menu);
    openEl = menu;
  }

  function openComposer(
    action: CanvasWorkbenchAction,
    prefill: CreateComposerRequest,
    target: MenuTarget,
    anchor: { x: number; y: number },
  ): void {
    if (!ctx) return;
    const dialog = renderComposer(
      action,
      { x: target.x, y: target.y, ...prefill },
      {
        action,
        sourceNodeId: target.sourceNodeId,
        parentNodeId: target.parentNodeId,
        x: target.x,
        y: target.y,
      },
      (request) => {
        closeAll();
        ctx!.requestBus.emit("createAction", request);
      },
      () => closeAll(),
    );
    Object.assign(dialog.style, { left: `${anchor.x}px`, top: `${anchor.y}px` });
    ctx.stage.content.appendChild(dialog);
    openEl = dialog;
  }

  function stagePointerPoint(): { x: number; y: number } {
    return ctx?.stage.getPointerPosition() ?? { x: 0, y: 0 };
  }

  function handleNodeContextMenu(event: Konva.KonvaEventObject<PointerEvent>): void {
    event.evt.preventDefault();
    const group = findNodeGroupFromEvent(event);
    if (!group || !ctx) return;
    const node = resolveNode(group.id());
    if (!node) return;
    const point = stagePointerPoint();
    renderMenu(
      node.contextActions,
      {
        nodeId: node.id,
        sourceNodeId: node.id,
        parentNodeId: node.parentId,
        x: point.x,
        y: point.y,
      },
      point,
    );
  }

  function handleBackgroundContextMenu(event: Konva.KonvaEventObject<PointerEvent>): void {
    if (!ctx) return;
    event.evt.preventDefault();
    const groupActions =
      (ctx.store.getSurface().chrome.groupContextActions as CanvasWorkbenchAction[] | undefined) ??
      [];
    const point = stagePointerPoint();
    renderMenu(
      groupActions,
      { nodeId: null, sourceNodeId: null, parentNodeId: null, x: point.x, y: point.y },
      point,
    );
  }

  return {
    id: "context-menu",

    onAttach(context) {
      ctx = context;
      const handleNodesContextMenu = (event: Konva.KonvaEventObject<PointerEvent>) =>
        handleNodeContextMenu(event);
      context.layers.nodes.on("contextmenu", handleNodesContextMenu);
      context.stage.on("contextmenu", (event) => {
        if (event.target === context.stage || event.target.hasName("background")) {
          handleBackgroundContextMenu(event);
        }
      });
      const closeOnOutsideClick = (event: MouseEvent) => {
        if (openEl && !openEl.contains(event.target as Node)) closeAll();
      };
      document.addEventListener("mousedown", closeOnOutsideClick, true);
      disposers.push(() => {
        context.layers.nodes.off("contextmenu", handleNodesContextMenu);
        document.removeEventListener("mousedown", closeOnOutsideClick, true);
      });
    },

    onDetach() {
      closeAll();
      for (const dispose of disposers) dispose();
      disposers.length = 0;
      ctx = null;
    },

    openContextSubmenu(actionId) {
      if (!ctx) return;
      const surface = ctx.store.getSurface();
      const allActions = [
        ...((surface.chrome.quickCreateActions as CanvasWorkbenchAction[] | undefined) ?? []),
        ...((surface.chrome.groupContextActions as CanvasWorkbenchAction[] | undefined) ?? []),
      ];
      const action = allActions.find((candidate) => candidate.actionId === actionId);
      if (action?.children) {
        const point = stagePointerPoint();
        renderMenu(
          action.children,
          { nodeId: null, sourceNodeId: null, parentNodeId: null, x: point.x, y: point.y },
          point,
        );
      }
    },

    openQuickCreateMenu(anchorElement) {
      if (!ctx) return;
      const actions =
        (ctx.store.getSurface().chrome.quickCreateActions as CanvasWorkbenchAction[] | undefined) ??
        [];
      const anchorRect = anchorElement.getBoundingClientRect();
      const hostRect = ctx.stage.content.getBoundingClientRect();
      const point = { x: anchorRect.left - hostRect.left, y: anchorRect.bottom - hostRect.top };
      renderMenu(
        actions,
        { nodeId: null, sourceNodeId: null, parentNodeId: null, x: point.x, y: point.y },
        point,
      );
    },

    openCreateComposer(action, request) {
      const point = stagePointerPoint();
      openComposer(
        action,
        request,
        {
          nodeId: null,
          sourceNodeId: null,
          parentNodeId: null,
          x: request.x ?? point.x,
          y: request.y ?? point.y,
        },
        point,
      );
    },
  };
}
