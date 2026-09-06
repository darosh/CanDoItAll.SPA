<script setup lang="ts">
import {
  Activity,
  CircleQuestionMark,
  Focus,
  Map as MapIcon,
  Maximize2,
  Minimize2,
  Minus,
  Plus,
  Scan,
  Settings,
} from "@lucide/vue";
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import { getCanvasWorkbench } from "./runtime/index";
import "./styles/overlay-window.css";
import "./styles/workbench/shell/01-layout-and-shell.css";
import "./styles/workbench/chrome/02-toolbar-and-windows.css";
import "./styles/workbench/panels/03-help-settings-and-preview.css";
import "./styles/workbench/scene/04-scene-and-nodes.css";
import "./styles/workbench/overlays/05-overlays-and-composer.css";
import "./styles/workbench/responsive/06-motion-and-responsive.css";
import "./styles/theme-bridge.css";
import type {
  CanvasWorkbenchAction,
  CanvasWorkbenchClipboardRequest,
  CanvasWorkbenchContextActionRequest,
  CanvasWorkbenchCreateActionRequest,
  CanvasWorkbenchNodeEditRequest,
  CanvasWorkbenchNodesMovedEventArgs,
  CanvasWorkbenchSelectionChangedEventArgs,
  CanvasWorkbenchSurface,
} from "./types";

// Vue port of CanDoItAll.Components.CanvasLib's CanvasWorkbench.razor: the toolbar chrome
// (quick-create/focus/fit/maximize/minimap/diagnostics/help/settings buttons, zoom rail, help
// overlay) plus the canvas host div the ported JS engine (./runtime) mounts into. The engine
// itself is a straight port; this component replaces the Blazor `DotNetObjectReference`/
// `[JSInvokable]` boundary with plain callbacks/emits.
//
// Intentionally not ported: the settings overlay's "Theme pack" and "Selection snapshot"
// panels in the source component are component-library internal debug/demo widgets (they
// expose CanvasThemeTokenPack/SelectionModel internals for the sandbox catalog), not
// functional canvas behavior — omitted here as out of scope for a product page.

const MIN_ZOOM_PERCENT = 15;
const MAX_ZOOM_PERCENT = 175;
const MIN_MENU_SCALE_PERCENT = 80;
const MAX_MENU_SCALE_PERCENT = 140;

const props = defineProps<{
  surface: CanvasWorkbenchSurface;
}>();

const emit = defineEmits<{
  selectionChanged: [args: CanvasWorkbenchSelectionChangedEventArgs];
  nodesMoved: [args: CanvasWorkbenchNodesMovedEventArgs];
  contextAction: [request: CanvasWorkbenchContextActionRequest];
  createAction: [request: CanvasWorkbenchCreateActionRequest];
  nodeEdited: [request: CanvasWorkbenchNodeEditRequest];
  nodeOpened: [nodeId: string];
  stateChanged: [stateJson: string];
  clipboardAction: [request: CanvasWorkbenchClipboardRequest];
  helpToggled: [isOpen: boolean];
  maximizedChanged: [isMaximized: boolean];
}>();

const host = ref<HTMLElement | null>(null);
const quickCreateButton = ref<HTMLElement | null>(null);

const isInitialized = ref(false);
const isMaximized = ref(props.surface.uiState.isMaximized);
const zoomPercent = ref(clampZoomPercent(props.surface.uiState.zoom));
const menuScalePercent = ref(clampMenuScalePercent(props.surface.uiState.menuActionScale));
const helpOpen = ref(false);
const activeHelpPage = ref<"basics" | "context-menu" | "keyboard">("basics");
const settingsOpen = ref(false);

let appliedSurfaceId: string | null = null;
let appliedDataKey: string | null = null;
let lastSelectionDispatchId = 0;
let lastStateDispatchId = 0;
let hasClipboardHandler = false;

function clampZoomPercent(zoom: number): number {
  return Math.round(Math.min(Math.max(zoom, MIN_ZOOM_PERCENT / 100), MAX_ZOOM_PERCENT / 100) * 100);
}

function clampMenuScalePercent(scale: number): number {
  return Math.round(
    Math.min(Math.max(scale, MIN_MENU_SCALE_PERCENT / 100), MAX_MENU_SCALE_PERCENT / 100) * 100,
  );
}

function dataKeyOf(surface: CanvasWorkbenchSurface): string {
  return JSON.stringify({
    surfaceId: surface.surfaceId,
    mode: surface.mode,
    dependencySourceId: surface.dependencySourceId,
    nodes: surface.nodes,
    links: surface.links,
    chrome: surface.chrome,
  });
}

function shouldAutoFitInitialView(surface: CanvasWorkbenchSurface): boolean {
  if (surface.nodes.length === 0) {
    return false;
  }

  if (Object.keys(surface.uiState.manualPositions ?? {}).length > 0) {
    return false;
  }

  return (
    Math.abs(surface.uiState.zoom - 1) < 0.001 &&
    Math.abs(surface.uiState.panX - 90) < 0.001 &&
    Math.abs(surface.uiState.panY - 110) < 0.001
  );
}

function buildRenderOptions(
  surface: CanvasWorkbenchSurface,
  fitView: boolean,
  preserveViewport: boolean,
) {
  return {
    isMaximized: isMaximized.value,
    fitView,
    preserveViewport,
    selectedNodeIds: surface.uiState.selectedNodeIds,
    primaryNodeId: surface.uiState.selectedNodeIds[0] ?? null,
    hasClipboardHandler,
  };
}

function tryAcceptDispatchId(dispatchId: number, current: number): number | null {
  if (dispatchId <= 0) {
    return current;
  }

  if (dispatchId <= current) {
    return null;
  }

  return dispatchId;
}

function createDotNetRefShim() {
  return {
    invokeMethodAsync(methodName: string, ...args: unknown[]): Promise<unknown> {
      switch (methodName) {
        case "OnSelectionChanged": {
          const [primaryNodeId, selectedNodeIdsJson, dispatchId = 0] = args as [
            string | null,
            string,
            number?,
          ];
          const accepted = tryAcceptDispatchId(dispatchId ?? 0, lastSelectionDispatchId);
          if (accepted === null) {
            break;
          }

          lastSelectionDispatchId = accepted;
          const selectedNodeIds = JSON.parse(selectedNodeIdsJson) as string[];
          emit("selectionChanged", { primaryNodeId, selectedNodeIds });
          break;
        }
        case "OnNodesMoved": {
          const [positionsJson] = args as [string];
          emit("nodesMoved", { positions: JSON.parse(positionsJson) });
          break;
        }
        case "OnContextAction": {
          const [nodeId, actionId, x, y] = args as [string | null, string, number, number];
          emit("contextAction", {
            nodeId,
            actionId,
            x,
            y,
            targetKind: "node",
            linkSourceId: null,
            linkTargetId: null,
            linkKind: null,
            linkSourcePortId: null,
            linkTargetPortId: null,
          });
          break;
        }
        case "OnContextActionRequest": {
          const [requestJson] = args as [string];
          emit("contextAction", JSON.parse(requestJson));
          break;
        }
        case "OnCreateAction": {
          const [requestJson] = args as [string];
          emit("createAction", JSON.parse(requestJson));
          break;
        }
        case "OnNodeEdited": {
          const [requestJson] = args as [string];
          emit("nodeEdited", JSON.parse(requestJson));
          break;
        }
        case "OnNodeOpened": {
          const [nodeId] = args as [string];
          emit("nodeOpened", nodeId);
          break;
        }
        case "OnStateChanged": {
          const [stateJson, dispatchId = 0] = args as [string, number?];
          const accepted = tryAcceptDispatchId(dispatchId ?? 0, lastStateDispatchId);
          if (accepted === null) {
            break;
          }

          lastStateDispatchId = accepted;
          emit("stateChanged", stateJson);
          break;
        }
        case "OnClipboardAction": {
          const [requestJson] = args as [string];
          emit("clipboardAction", JSON.parse(requestJson));
          break;
        }
        case "OnHelpToggled": {
          const [isOpen] = args as [boolean];
          helpOpen.value = isOpen;
          if (isOpen) {
            activeHelpPage.value = "basics";
          }

          emit("helpToggled", isOpen);
          break;
        }
        default:
          break;
      }

      return Promise.resolve();
    },
  };
}

function syncScene(nextSurface: CanvasWorkbenchSurface) {
  if (!host.value) {
    return;
  }

  const engine = getCanvasWorkbench();
  const nextDataKey = dataKeyOf(nextSurface);
  hasClipboardHandler = true; // ClipboardRequested always has a listener via `clipboardAction` emit

  if (!isInitialized.value) {
    engine.create(
      host.value,
      createDotNetRefShim(),
      nextSurface,
      lastSelectionDispatchId,
      lastStateDispatchId,
      buildRenderOptions(nextSurface, shouldAutoFitInitialView(nextSurface), false),
    );
    isInitialized.value = true;
    appliedSurfaceId = nextSurface.surfaceId;
    appliedDataKey = nextDataKey;
    return;
  }

  if (nextDataKey === appliedDataKey) {
    return;
  }

  const preserveViewport = appliedSurfaceId === nextSurface.surfaceId;
  engine.update(host.value, nextSurface, buildRenderOptions(nextSurface, false, preserveViewport));
  appliedSurfaceId = nextSurface.surfaceId;
  appliedDataKey = nextDataKey;
}

onMounted(() => {
  syncScene(props.surface);
});

watch(
  () => props.surface,
  (nextSurface) => {
    syncScene(nextSurface);
  },
  { deep: false },
);

onBeforeUnmount(() => {
  if (!host.value || !isInitialized.value) {
    return;
  }

  const engine = getCanvasWorkbench();
  engine.setMaximized(host.value, false);
  engine.dispose(host.value);
});

async function toggleMaximize() {
  isMaximized.value = !isMaximized.value;
  emit("maximizedChanged", isMaximized.value);
  if (host.value && isInitialized.value) {
    const engine = getCanvasWorkbench();
    engine.setMaximized(host.value, isMaximized.value);
    await publishUiState();
    engine.resize(host.value);
  }
}

async function publishUiState() {
  if (!host.value || !isInitialized.value) {
    return;
  }

  const stateJson = getCanvasWorkbench().getState(host.value);
  emit("stateChanged", stateJson);
}

function fitView() {
  if (host.value && isInitialized.value) {
    getCanvasWorkbench().fitView(host.value);
  }
}

function focusPrimaryNode() {
  if (!host.value || !isInitialized.value) {
    return;
  }

  const targetNodeId =
    props.surface.nodes.find((node) => node.family?.toLowerCase() === "root")?.id ??
    props.surface.nodes.find((node) => !node.parentId)?.id ??
    props.surface.uiState.selectedNodeIds[0] ??
    props.surface.nodes[0]?.id;
  if (!targetNodeId) {
    return;
  }

  getCanvasWorkbench().focusNode(host.value, targetNodeId);
}

function setZoomPercent(value: number) {
  zoomPercent.value = Math.min(Math.max(value, MIN_ZOOM_PERCENT), MAX_ZOOM_PERCENT);
  if (host.value && isInitialized.value) {
    getCanvasWorkbench().setZoomPercent(host.value, zoomPercent.value);
  }
}

function setMenuScalePercent(value: number) {
  menuScalePercent.value = Math.min(
    Math.max(value, MIN_MENU_SCALE_PERCENT),
    MAX_MENU_SCALE_PERCENT,
  );
  if (host.value && isInitialized.value) {
    getCanvasWorkbench().setMenuScalePercent(host.value, menuScalePercent.value);
  }
}

function onZoomSliderChange(event: Event) {
  const value = Number((event.target as HTMLInputElement).value);
  if (!Number.isNaN(value)) {
    setZoomPercent(value);
  }
}

function onMenuScaleSliderInput(event: Event) {
  const value = Number((event.target as HTMLInputElement).value);
  if (!Number.isNaN(value)) {
    setMenuScalePercent(value);
  }
}

function openQuickCreateMenu() {
  if (!host.value || !isInitialized.value || !quickCreateButton.value) {
    return;
  }

  if (
    !props.surface.chrome.showQuickCreateRail ||
    props.surface.chrome.quickCreateActions.length === 0
  ) {
    return;
  }

  getCanvasWorkbench().openQuickCreateMenu(host.value, quickCreateButton.value);
}

function toggleMinimap() {
  if (host.value && isInitialized.value) {
    getCanvasWorkbench().toggleMinimap(host.value);
  }
}

function toggleDiagnostics() {
  if (host.value && isInitialized.value) {
    getCanvasWorkbench().toggleDiagnostics(host.value);
  }
}

function toggleHelp() {
  helpOpen.value = !helpOpen.value;
  if (helpOpen.value) {
    activeHelpPage.value = "basics";
    settingsOpen.value = false;
  }

  emit("helpToggled", helpOpen.value);
}

function toggleSettings() {
  settingsOpen.value = !settingsOpen.value;
  if (settingsOpen.value) {
    helpOpen.value = false;
  }
}

async function openCreateDialog(
  action: CanvasWorkbenchAction,
  request: CanvasWorkbenchCreateActionRequest,
) {
  if (!host.value || !isInitialized.value) {
    emit("createAction", request);
    return;
  }

  if (action.requiresInput) {
    getCanvasWorkbench().openCreateComposer(host.value, action, request);
    return;
  }

  emit("createAction", request);
}

function selectNodes(nodeIds: string[], primaryNodeId?: string | null) {
  if (!host.value || !isInitialized.value || nodeIds.length === 0) {
    return;
  }

  getCanvasWorkbench().selectNodes(host.value, nodeIds, primaryNodeId ?? nodeIds[0]);
}

function getSelectedNodeIds(): string[] {
  if (!host.value || !isInitialized.value) {
    return props.surface.uiState.selectedNodeIds;
  }

  const stateJson = getCanvasWorkbench().getState(host.value);
  const state = JSON.parse(stateJson) as { selectedNodeIds?: string[] };
  return state.selectedNodeIds ?? [];
}

function getStateJson(): string | null {
  if (!host.value || !isInitialized.value) {
    return null;
  }

  return getCanvasWorkbench().getState(host.value);
}

async function captureImage(): Promise<string | null> {
  if (!host.value || !isInitialized.value) {
    return null;
  }

  return (await getCanvasWorkbench().exportImageData(host.value)) ?? null;
}

defineExpose({
  fitView,
  focusPrimaryNode,
  toggleMaximize,
  toggleMinimap,
  toggleDiagnostics,
  openCreateDialog,
  selectNodes,
  getSelectedNodeIds,
  getStateJson,
  captureImage,
});

const zoomLabel = computed(() => `${zoomPercent.value}%`);
const menuScaleLabel = computed(() => `${menuScalePercent.value}%`);
</script>

<template>
  <div class="cw-workbench-shell" :class="{ 'is-maximized': isMaximized }">
    <div class="cw-workbench-frame">
      <div class="cw-toolbar" data-cw-toolbar="true">
        <div class="cw-toolbar-group cw-toolbar-group--left">
          <button
            v-if="
              surface.chrome.showQuickCreateRail && surface.chrome.quickCreateActions.length > 0
            "
            ref="quickCreateButton"
            type="button"
            class="cw-toolbar-action cw-toolbar-action--primary"
            aria-label="Open quick create actions"
            title="Open quick create actions"
            @click="openQuickCreateMenu"
          >
            <Plus :size="18" />
            <span class="sr-only">Open quick create actions</span>
          </button>

          <button
            v-if="surface.chrome.showFocusAction"
            type="button"
            class="cw-toolbar-action cw-toolbar-action--icon"
            :aria-label="surface.chrome.focusActionLabel"
            :title="surface.chrome.focusActionLabel"
            @click="focusPrimaryNode"
          >
            <Focus :size="18" />
            <span class="sr-only">{{ surface.chrome.focusActionLabel }}</span>
          </button>

          <!-- Host-supplied toolbar buttons (e.g. floating-window toggles) — rendered here so
               they stay visible when the canvas is maximized, matching the source
               WorkflowCanvasEditor.razor's own toolbar buttons living in this same row. -->
          <slot name="toolbar-actions" />
        </div>

        <div class="cw-toolbar-group cw-toolbar-group--utility">
          <button
            type="button"
            class="cw-toolbar-action cw-toolbar-action--icon"
            aria-label="Fit canvas"
            title="Fit canvas"
            @click="fitView"
          >
            <Scan :size="18" />
            <span class="sr-only">Fit canvas</span>
          </button>
          <button
            type="button"
            class="cw-toolbar-action cw-toolbar-action--icon"
            aria-label="Toggle maximize"
            :title="isMaximized ? 'Dock canvas' : 'Maximize canvas'"
            @click="toggleMaximize"
          >
            <Minimize2 v-if="isMaximized" :size="18" />
            <Maximize2 v-else :size="18" />
            <span class="sr-only">{{ isMaximized ? "Dock canvas" : "Maximize canvas" }}</span>
          </button>
          <button
            type="button"
            class="cw-toolbar-action cw-toolbar-action--icon"
            aria-label="Toggle minimap"
            title="Toggle minimap"
            @click="toggleMinimap"
          >
            <MapIcon :size="18" />
            <span class="sr-only">Toggle minimap</span>
          </button>
          <button
            type="button"
            class="cw-toolbar-action cw-toolbar-action--icon"
            aria-label="Toggle diagnostics"
            title="Toggle diagnostics"
            @click="toggleDiagnostics"
          >
            <Activity :size="18" />
            <span class="sr-only">Toggle diagnostics</span>
          </button>
          <button
            type="button"
            class="cw-toolbar-action cw-toolbar-action--icon"
            aria-label="Toggle help"
            title="Canvas help"
            @click="toggleHelp"
          >
            <CircleQuestionMark :size="18" />
            <span class="sr-only">Canvas help</span>
          </button>
          <button
            type="button"
            class="cw-toolbar-action cw-toolbar-action--icon"
            aria-label="Toggle settings"
            title="Canvas settings"
            @click="toggleSettings"
          >
            <Settings :size="18" />
            <span class="sr-only">Canvas settings</span>
          </button>

          <div class="cw-zoom-rail">
            <button
              type="button"
              class="cw-toolbar-action cw-toolbar-action--ghost cw-toolbar-action--icon"
              aria-label="Zoom out"
              title="Zoom out"
              @click="setZoomPercent(zoomPercent - 10)"
            >
              <Minus :size="16" />
              <span class="sr-only">Zoom out</span>
            </button>
            <input
              class="cw-zoom-slider"
              type="range"
              :min="MIN_ZOOM_PERCENT"
              :max="MAX_ZOOM_PERCENT"
              step="5"
              :value="zoomPercent"
              aria-label="Canvas zoom"
              @change="onZoomSliderChange"
            />
            <button
              type="button"
              class="cw-toolbar-action cw-toolbar-action--ghost cw-toolbar-action--icon"
              aria-label="Zoom in"
              title="Zoom in"
              @click="setZoomPercent(zoomPercent + 10)"
            >
              <Plus :size="16" />
              <span class="sr-only">Zoom in</span>
            </button>
            <span class="cw-zoom-pill">{{ zoomLabel }}</span>
          </div>
        </div>
      </div>

      <div class="cw-stage-surface">
        <div ref="host" class="cw-canvas-host" tabindex="0" aria-label="Canvas workbench"></div>

        <div v-if="surface.chrome.hintText" class="cw-hint-pill">{{ surface.chrome.hintText }}</div>

        <!-- Host-supplied floating windows (OverlayWindow.vue). Rendered inside
             .cw-stage-surface because overlay-window.js's resolveContainer() looks for this
             exact class as the positioning/clamping container, and it stays part of the
             maximized fixed-position box so windows remain reachable in fullscreen. -->
        <slot name="stage-overlays" />
      </div>

      <div v-if="helpOpen" class="cw-help-overlay">
        <div
          class="cw-help-card"
          role="dialog"
          aria-modal="false"
          aria-label="Canvas shortcuts and gestures"
        >
          <div class="cw-help-card__header">
            <div>
              <p class="cw-help-kicker">Canvas help</p>
              <h3>Interaction vocabulary</h3>
            </div>
            <button
              type="button"
              class="cw-toolbar-action"
              aria-label="Close help"
              @click="toggleHelp"
            >
              Close
            </button>
          </div>

          <div class="cw-help-layout">
            <div class="cw-help-nav" aria-label="Canvas help pages">
              <button
                type="button"
                class="cw-help-nav__button"
                :class="{ 'is-active': activeHelpPage === 'basics' }"
                :aria-pressed="activeHelpPage === 'basics'"
                @click="activeHelpPage = 'basics'"
              >
                <strong>Basics</strong>
                <span>Pointer gestures, zoom, and scene movement.</span>
              </button>
              <button
                type="button"
                class="cw-help-nav__button"
                :class="{ 'is-active': activeHelpPage === 'context-menu' }"
                :aria-pressed="activeHelpPage === 'context-menu'"
                @click="activeHelpPage = 'context-menu'"
              >
                <strong>Right-click menu</strong>
                <span>Layered one-letter menu shortcuts and examples.</span>
              </button>
              <button
                type="button"
                class="cw-help-nav__button"
                :class="{ 'is-active': activeHelpPage === 'keyboard' }"
                :aria-pressed="activeHelpPage === 'keyboard'"
                @click="activeHelpPage = 'keyboard'"
              >
                <strong>Keyboard</strong>
                <span>Canvas-wide shortcuts outside the menu flow.</span>
              </button>
            </div>

            <div class="cw-help-page">
              <template v-if="activeHelpPage === 'basics'">
                <div class="cw-help-page__header">
                  <p class="cw-help-page__eyebrow">Page 1</p>
                  <h4>Interaction vocabulary</h4>
                  <p class="cw-help-page__summary">
                    Daily scene navigation and pointer-first movement across the canvas.
                  </p>
                </div>
                <div class="cw-help-grid">
                  <p><strong>Click</strong> selects the focused node.</p>
                  <p><strong>Right-click</strong> opens node-aware actions.</p>
                  <p><strong>Alt + drag</strong> draws a marquee for multi-selection.</p>
                  <p><strong>Ctrl/Cmd + drag</strong> moves the current node set.</p>
                  <p><strong>Drag empty space</strong> pans the scene.</p>
                  <p><strong>Mouse wheel</strong> zooms under the pointer.</p>
                  <p>
                    <strong>Double-click</strong>
                    {{
                      surface.chrome.collapseOnDoubleClick
                        ? "collapses groups or opens artifacts."
                        : "opens the node actions modal. Use +/- on the connector side to collapse children."
                    }}
                  </p>
                </div>
              </template>
              <template v-else-if="activeHelpPage === 'context-menu'">
                <div class="cw-help-page__header">
                  <p class="cw-help-page__eyebrow">Page 2</p>
                  <h4>Right-click menu</h4>
                  <p class="cw-help-page__summary">
                    Press the underlined letter in the active layer. If it opens a submenu, press
                    the next underlined letter there.
                  </p>
                </div>
                <p class="cw-help-callout">
                  <strong>Example:</strong> <strong>b</strong> opens Blocks and then
                  <strong>d</strong> picks Delivery.
                </p>
                <div class="cw-help-section">
                  <p class="cw-help-section__title">Quick create</p>
                  <div class="cw-help-list">
                    <p>
                      <strong>b</strong> Blocks: <code>d</code> Delivery, <code>b</code> Backlog,
                      <code>s</code> Support, <code>f</code> Feature.
                    </p>
                    <p>
                      <strong>a</strong> Assets: <code>p</code> PDF, <code>e</code> Excel,
                      <code>w</code> Word, <code>j</code> JSON, <code>t</code> Text.
                    </p>
                    <p>
                      <strong>q</strong> Meetings: <code>s</code> Onsite, <code>o</code> Online.
                      <strong>w</strong> opens Work and <code>t</code> chooses Task.
                    </p>
                    <p>
                      <strong>p</strong> People, <strong>i</strong> Infrastructure,
                      <strong>n</strong> Note, and the rest of the root layer follow the same
                      one-letter rule.
                    </p>
                  </div>
                </div>
                <div class="cw-help-section">
                  <p class="cw-help-section__title">Node actions</p>
                  <div class="cw-help-list">
                    <p>
                      <strong>m</strong> Markers: <code>q</code> Question,
                      <code>e</code> Exclamation, plus other underlined marker choices.
                    </p>
                    <p>
                      <strong>r</strong> Progress and <strong>d</strong> Priority open numeric and
                      named follow-up shortcuts in the next layer.
                    </p>
                    <p>
                      <strong>o</strong> Open, <strong>c</strong> Copy id, <strong>y</strong> Copy
                      info, <strong>t</strong> Copy subtree ids, <strong>s</strong> Summary.
                    </p>
                  </div>
                </div>
                <p class="cw-help-footnote">
                  If a group is not listed here, use the underlined one-letter hint shown inside the
                  menu item. Each sibling layer keeps those shortcuts unique.
                </p>
              </template>
              <template v-else>
                <div class="cw-help-page__header">
                  <p class="cw-help-page__eyebrow">Page 3</p>
                  <h4>Keyboard routing</h4>
                  <p class="cw-help-page__summary">
                    Canvas-wide shortcuts that stay available when the host itself has focus.
                  </p>
                </div>
                <div class="cw-help-list">
                  <p><strong>Tab</strong> creates a child note when the canvas host is focused.</p>
                  <p><strong>Enter</strong> creates a sibling note.</p>
                  <p>
                    <strong>Ctrl/Cmd + X</strong>, <strong>Ctrl/Cmd + C</strong>, and
                    <strong>Ctrl/Cmd + V</strong> use the shared canvas clipboard.
                  </p>
                  <p>
                    <strong>m</strong> toggles the minimap, <strong>d</strong> toggles diagnostics,
                    and <strong>+</strong>, <strong>-</strong>, <strong>0</strong> control zoom and
                    fit.
                  </p>
                  <p>
                    <strong>?</strong> or <strong>h</strong> opens help, and
                    <strong>Escape</strong> returns to Select mode before clearing selection.
                  </p>
                </div>
                <p class="cw-help-footnote">
                  When a right-click menu is open, its underlined letters win first so layered menu
                  navigation stays fast.
                </p>
              </template>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="settingsOpen"
        class="cw-help-overlay cw-help-overlay--settings"
        data-testid="canvas-settings-overlay"
      >
        <div
          class="cw-help-card cw-settings-card"
          role="dialog"
          aria-modal="false"
          aria-label="Canvas settings"
        >
          <div class="cw-help-card__header">
            <div>
              <p class="cw-help-kicker">Canvas settings</p>
              <h3>Radial menu tuning</h3>
            </div>
            <button
              type="button"
              class="cw-toolbar-action"
              aria-label="Close settings"
              @click="toggleSettings"
            >
              Close
            </button>
          </div>

          <div class="cw-settings-grid">
            <div class="cw-settings-group">
              <div>
                <p class="cw-settings-label">Menu item size</p>
                <p class="cw-panel-copy">
                  Tune the right-click hex size and keep the preview aligned with the live canvas
                  menu.
                </p>
              </div>
              <div class="cw-zoom-rail cw-settings-rail">
                <button
                  type="button"
                  class="cw-toolbar-action cw-toolbar-action--ghost cw-toolbar-action--icon"
                  aria-label="Decrease menu item size"
                  @click="setMenuScalePercent(menuScalePercent - 5)"
                >
                  <Minus :size="16" />
                </button>
                <input
                  class="cw-zoom-slider"
                  type="range"
                  :min="MIN_MENU_SCALE_PERCENT"
                  :max="MAX_MENU_SCALE_PERCENT"
                  step="5"
                  :value="menuScalePercent"
                  aria-label="Canvas menu item size"
                  @input="onMenuScaleSliderInput"
                />
                <button
                  type="button"
                  class="cw-toolbar-action cw-toolbar-action--ghost cw-toolbar-action--icon"
                  aria-label="Increase menu item size"
                  @click="setMenuScalePercent(menuScalePercent + 5)"
                >
                  <Plus :size="16" />
                </button>
                <span class="cw-zoom-pill">{{ menuScaleLabel }}</span>
              </div>
            </div>

            <div class="cw-settings-preview">
              <p class="cw-settings-label">Preview</p>
              <div
                class="cw-menu-preview-shell"
                :style="{ '--cw-preview-menu-scale': (menuScalePercent / 100).toFixed(2) }"
              >
                <div class="cw-menu-preview-orbit">
                  <div class="cw-menu-preview-core">
                    <span class="cw-menu-preview-core-dot"></span>
                  </div>
                  <div class="cw-menu-preview-item tone-accent">
                    <span class="cw-menu-preview-item__label">Open</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
