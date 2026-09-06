<script setup lang="ts">
import { EyeOff, RotateCcw } from "@lucide/vue";
import { onBeforeUnmount, onMounted, ref } from "vue";
import * as overlayWindowEngine from "./runtime/overlay-window.js";
import "./styles/overlay-window.css";

// Thin Vue wrapper around the ported (but previously unconsumed) overlay-window.js engine —
// the same draggable/resizable floating-window chrome CanDoItAll.Components.CanvasLib uses for
// WorkflowCanvasEditor.razor's Toolbox/Selection/Components windows. Must be rendered inside
// CanvasWorkbench's `stage-overlays` slot: overlay-window.js's resolveContainer() specifically
// looks for an ancestor with the `.cw-stage-surface` class to clamp position/size against, and
// that element stays part of the maximized fixed-position box, so windows mounted here remain
// reachable in fullscreen (unlike a page-level fixed overlay, which resolveContainer wouldn't
// recognize as the stage at all).

const props = withDefaults(
  defineProps<{
    windowId: string;
    kicker?: string;
    title: string;
    summary?: string;
    placement?: "top-left" | "top-right";
    defaultWidth?: number;
    defaultHeight?: number;
    minWidth?: number;
    minHeight?: number;
  }>(),
  {
    kicker: "",
    summary: "",
    placement: "top-right",
    defaultWidth: 360,
    defaultHeight: 480,
    minWidth: 280,
    minHeight: 180,
  },
);

const emit = defineEmits<{ close: [] }>();

const host = ref<HTMLElement | null>(null);
const isMinimized = ref(false);
let lastGeometry: { left: number; top: number; width: number; height: number } | null = null;

const dotNetRefShim = {
  invokeMethodAsync: async (methodName: string, ...args: unknown[]) => {
    if (methodName === "OnGeometryChanged") {
      const [left, top, width, height] = args as [number, number, number, number];
      lastGeometry = { left, top, width, height };
    }
  },
};

function currentOptions(overrides?: { isMinimized?: boolean }) {
  return {
    windowId: props.windowId,
    placement: props.placement,
    defaultWidth: props.defaultWidth,
    defaultHeight: props.defaultHeight,
    minWidth: props.minWidth,
    minHeight: props.minHeight,
    state: {
      ...lastGeometry,
      isMinimized: overrides?.isMinimized ?? isMinimized.value,
    },
  };
}

onMounted(() => {
  if (host.value) overlayWindowEngine.create(host.value, dotNetRefShim, currentOptions());
});

onBeforeUnmount(() => {
  if (host.value) overlayWindowEngine.dispose(host.value);
});

function toggleMinimize() {
  isMinimized.value = !isMinimized.value;
  if (host.value) overlayWindowEngine.update(host.value, currentOptions());
}

function resetPosition() {
  lastGeometry = null;
  if (host.value) overlayWindowEngine.update(host.value, currentOptions());
}
</script>

<template>
  <div ref="host" class="cw-floating-window" :class="{ 'is-minimized': isMinimized }">
    <div class="cw-floating-window__header">
      <div class="cw-floating-window__drag" data-cda-overlay-drag>
        <p v-if="kicker" class="cw-panel-kicker">{{ kicker }}</p>
        <p class="cw-floating-window__title">{{ title }}</p>
        <p v-if="summary" class="cw-floating-window__summary">{{ summary }}</p>
      </div>
      <div class="cw-floating-window__actions">
        <button
          type="button"
          class="cw-floating-window__action"
          :aria-label="isMinimized ? 'Restore' : 'Minimize'"
          :title="isMinimized ? 'Restore' : 'Minimize'"
          @click="toggleMinimize"
        >
          <span aria-hidden="true">{{ isMinimized ? "▢" : "–" }}</span>
        </button>
        <button
          type="button"
          class="cw-floating-window__action"
          aria-label="Reset position"
          title="Reset position"
          @click="resetPosition"
        >
          <RotateCcw :size="14" />
        </button>
        <button
          type="button"
          class="cw-floating-window__action"
          aria-label="Close"
          title="Close"
          @click="emit('close')"
        >
          <EyeOff :size="14" />
        </button>
      </div>
    </div>
    <div v-if="!isMinimized" class="cw-floating-window__body">
      <slot />
    </div>
  </div>
</template>
