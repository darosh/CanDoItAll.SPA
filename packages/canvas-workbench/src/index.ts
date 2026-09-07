export { createCanvasWorkbench } from "./api/facade.js";
export type { CanvasWorkbenchHandle, CreateCanvasWorkbenchOptions } from "./api/facade.js";

export type {
  CanvasWorkbenchAction,
  CanvasWorkbenchAnnotation,
  CanvasWorkbenchChromeInput,
  CanvasWorkbenchClipboardOptions,
  CanvasWorkbenchCompactPath,
  CanvasWorkbenchConnectorAnchorOptions,
  CanvasWorkbenchDiagnosticsOptions,
  CanvasWorkbenchGroupFrameInput,
  CanvasWorkbenchInputField,
  CanvasWorkbenchInputOption,
  CanvasWorkbenchInputValue,
  CanvasWorkbenchLinkInput,
  CanvasWorkbenchMarker,
  CanvasWorkbenchMarqueeOptions,
  CanvasWorkbenchMinimapOptions,
  CanvasWorkbenchMode,
  CanvasWorkbenchNodeInput,
  CanvasWorkbenchPoint,
  CanvasWorkbenchPort,
  CanvasWorkbenchSize,
  CanvasWorkbenchSnapGuideOptions,
  CanvasWorkbenchSurfaceInput,
  CanvasWorkbenchTone,
  CanvasWorkbenchUiStateInput,
  CanvasWorkbenchUploadedFile,
  ResolvedGroupFrame,
  ResolvedLink,
  ResolvedNode,
  ResolvedSurface,
  ResolvedUiState,
} from "./model/types.js";

export type {
  ClipboardAction,
  ClipboardRequest,
  ContextActionRequest,
  CreateActionRequest,
  CreateComposerRequest,
  NodeEditRequest,
  NodePositionChange,
  NodesMovedEvent,
  SelectionChangedEvent,
  ViewportChangedEvent,
} from "./model/events.js";

export { createDefaultRegistry, NodeRendererRegistry } from "./render/registry.js";
export type { NodeRenderer, RenderContext } from "./render/registry.js";
export { resolveTone, setThemeOverrides } from "./render/theme.js";
export type { ToneTokens } from "./render/theme.js";

export { ExtensionHost } from "./interaction/extensions.js";
export type { WorkbenchExtension, WorkbenchExtensionContext } from "./interaction/extensions.js";
export { createContextMenuExtension } from "./interaction/extensions/context-menu.js";
export type { ContextMenuController } from "./interaction/extensions/context-menu.js";
export { createClipboardExtension } from "./interaction/extensions/clipboard.js";
export type { ClipboardExtensionOptions } from "./interaction/extensions/clipboard.js";
export { createDiagnosticsExtension } from "./interaction/extensions/diagnostics.js";
export type {
  DiagnosticsController,
  DiagnosticsSnapshot,
} from "./interaction/extensions/diagnostics.js";
export { createMarqueeExtension } from "./interaction/extensions/marquee.js";
export { createSnapGuidesExtension } from "./interaction/extensions/snap-guides.js";
export { createMinimapExtension } from "./interaction/extensions/minimap.js";
export type { MinimapController } from "./interaction/extensions/minimap.js";
export { createDragHooks } from "./interaction/drag.js";
export type { DragHookRegistry, DragHooks, DragMoveContext } from "./interaction/drag.js";
export { createRequestBus } from "./interaction/request-bus.js";
export type { RequestBus, RequestBusEvents } from "./interaction/request-bus.js";

export { WorkbenchStore, createWorkbenchStore } from "./state/store.js";
export { createEmitter } from "./state/emitter.js";
export type { Emitter, Listener } from "./state/emitter.js";
