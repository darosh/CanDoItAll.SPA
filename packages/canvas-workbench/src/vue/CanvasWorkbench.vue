<script setup lang="ts">
/**
 * Thin optional Vue wrapper over the framework-agnostic `createCanvasWorkbench()` facade.
 * Deliberately narrower than the old packages/app/src/lib/canvas-workbench/CanvasWorkbench.vue:
 * no maximize/help toolbar here — that was app-level UI, not engine surface, and gets rebuilt in
 * packages/app around this wrapper once a cutover happens (see the plan doc's migration seam
 * section). Diagnostics and the minimap are the exception: both panels are engine-owned DOM (see
 * interaction/extensions/{diagnostics,minimap}.ts), so this wrapper exposes
 * `toggleDiagnostics()`/`toggleMinimap()` — an app-level toolbar button just needs to call them,
 * not build the panels itself. Excluded from this package's own tsconfig (see ../../tsconfig.json)
 * since it needs vue-tsc, not plain tsc, to type-check — packages/app's own `vue-tsc --build`
 * covers it once something there imports it.
 */
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { createCanvasWorkbench, type CanvasWorkbenchHandle } from "../api/facade.js";
import type {
  ClipboardRequest,
  ContextActionRequest,
  CreateActionRequest,
  CreateComposerRequest,
  NodesMovedEvent,
  SelectionChangedEvent,
} from "../model/events.js";
import type { DiagnosticsSnapshot } from "../interaction/extensions/diagnostics.js";
import type { CanvasWorkbenchAction, CanvasWorkbenchSurfaceInput } from "../model/types.js";

const props = defineProps<{
  surface: CanvasWorkbenchSurfaceInput;
  /** See interaction/extensions/clipboard.ts — required before Ctrl/Cmd+C/X/V/D shortcuts fire. */
  hasClipboardHandler?: boolean;
}>();

const emit = defineEmits<{
  selectionChanged: [payload: SelectionChangedEvent];
  nodesMoved: [payload: NodesMovedEvent];
  contextAction: [payload: ContextActionRequest];
  createAction: [payload: CreateActionRequest];
  nodeOpened: [nodeId: string];
  clipboardAction: [payload: ClipboardRequest];
}>();

const host = ref<HTMLElement | null>(null);
let handle: CanvasWorkbenchHandle | null = null;

onMounted(() => {
  if (!host.value) return;
  handle = createCanvasWorkbench(host.value, props.surface, {
    hasClipboardHandler: props.hasClipboardHandler,
  });
  handle.on("selectionChanged", (payload) => emit("selectionChanged", payload));
  handle.on("nodesMoved", (payload) => emit("nodesMoved", payload));
  handle.on("contextAction", (payload) => emit("contextAction", payload));
  handle.on("createAction", (payload) => emit("createAction", payload));
  handle.on("nodeOpened", (nodeId) => emit("nodeOpened", nodeId));
  handle.on("clipboardAction", (payload) => emit("clipboardAction", payload));
});

onBeforeUnmount(() => {
  handle?.dispose();
  handle = null;
});

watch(
  () => props.surface,
  // `preserveViewport: true` — without it, `update()`/`normalizeSurface()` resets zoom/pan to
  // their defaults on every call, and a `surface` prop rebuilt from reactive app state (as
  // `WorkflowDesignerPage.vue` does) recomputes on every node edit, including a node drag
  // committing its new position — so panning/zooming got silently wiped mid-interaction (confirmed
  // live: dragging a node snapped the camera back to 100%/origin). The one case that *should*
  // reset the camera — loading a genuinely different graph — is the host's call to `fitView()`
  // after that load, not an implicit side effect of every prop update.
  (surface) => handle?.update(surface, { preserveViewport: true }),
  { deep: true },
);

function fitView(): void {
  handle?.fitView();
}
function setZoomPercent(zoomPercent: number): void {
  handle?.setZoomPercent(zoomPercent);
}
function focusNode(nodeId: string): void {
  handle?.focusNode(nodeId);
}
function selectNodes(nodeIds: string[], primaryNodeId?: string | null): void {
  handle?.selectNodes(nodeIds, primaryNodeId);
}
function getStateJson(): string {
  return JSON.stringify(handle?.getState() ?? null);
}
function openContextSubmenu(actionId: string): void {
  handle?.openContextSubmenu(actionId);
}
function openQuickCreateMenu(anchorElement: HTMLElement): void {
  handle?.openQuickCreateMenu(anchorElement);
}
function openCreateComposer(action: CanvasWorkbenchAction, request: CreateComposerRequest): void {
  handle?.openCreateComposer(action, request);
}
function toggleDiagnostics(): void {
  handle?.toggleDiagnostics();
}
function getDiagnostics(): DiagnosticsSnapshot | null {
  return handle?.getDiagnostics() ?? null;
}
function toggleMinimap(): void {
  handle?.toggleMinimap();
}
function resize(): void {
  handle?.resize();
}

defineExpose({
  fitView,
  focusNode,
  setZoomPercent,
  selectNodes,
  getStateJson,
  openContextSubmenu,
  openQuickCreateMenu,
  openCreateComposer,
  toggleDiagnostics,
  getDiagnostics,
  toggleMinimap,
  resize,
});
</script>

<template>
  <div ref="host" class="cw-workbench-host" />
</template>

<style scoped>
.cw-workbench-host {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
</style>
