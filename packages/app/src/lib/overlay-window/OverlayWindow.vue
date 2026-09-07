<script setup lang="ts">
/**
 * Fresh implementation of a draggable floating panel, replacing the old ported
 * packages/app/src/lib/canvas-workbench/OverlayWindow.vue (a Vue wrapper around a ported
 * runtime/overlay-window.js engine + hand-rolled `cw-floating-window` CSS). Built on VueUse's
 * useDraggable for the drag behavior and plain Tailwind utilities for styling — no custom CSS
 * file, no ported runtime dependency.
 *
 * No resize handle (the old engine's was rarely exercised in practice): width is fixed via the
 * `width` prop, height is content-driven with an internal scroll area capped by the viewport.
 */
import { Minus, RotateCcw, Square, X } from "@lucide/vue";
import { useDraggable } from "@vueuse/core";
import { computed, onMounted, ref } from "vue";
import { Button } from "@/components/ui/button";

const props = withDefaults(
  defineProps<{
    kicker?: string;
    title: string;
    summary?: string;
    placement?: "top-left" | "top-right";
    width?: number;
  }>(),
  {
    kicker: "",
    summary: "",
    placement: "top-right",
    width: 320,
  },
);

const emit = defineEmits<{ close: [] }>();

const MARGIN = 16;

const root = ref<HTMLElement | null>(null);
const handle = ref<HTMLElement | null>(null);
const isMinimized = ref(false);

// This root is `position: absolute` against its offsetParent (the canvas stage wrapper), not
// `position: fixed` against the viewport — but useDraggable's `x`/`y` default to viewport-relative
// client coordinates (no `containerElement` means it measures the pointer against the target's
// own `getBoundingClientRect()`, not against a container). Without `containerElement`, the first
// pointer move jumps the panel by exactly the offsetParent's own viewport offset (confirmed live:
// a jump down-and-left matching the stage wrapper's position under the app header/sidebar).
// Passing the offsetParent here makes useDraggable compute `x`/`y` relative to *it*, matching what
// `left`/`top` on an absolutely-positioned element actually mean.
const dragContainer = computed(() => root.value?.offsetParent as HTMLElement | null);
const { x, y, style, isDragging } = useDraggable(root, { handle, containerElement: dragContainer });

function homePosition(): { x: number; y: number } {
  const container = root.value?.offsetParent as HTMLElement | null;
  const containerWidth = container?.clientWidth ?? window.innerWidth;
  const homeX =
    props.placement === "top-left"
      ? MARGIN
      : Math.max(containerWidth - props.width - MARGIN, MARGIN);
  return { x: homeX, y: MARGIN };
}

function resetPosition(): void {
  const home = homePosition();
  x.value = home.x;
  y.value = home.y;
}

onMounted(resetPosition);
</script>

<template>
  <div
    ref="root"
    :style="[style, { width: `${width}px` }]"
    class="absolute z-30 flex max-h-[calc(100%-2rem)] flex-col overflow-hidden rounded-xl border border-border bg-popover shadow-lg"
    :class="{ 'shadow-xl': isDragging }"
  >
    <div
      ref="handle"
      class="flex shrink-0 cursor-grab items-start justify-between gap-3 border-b border-border px-3 py-2 active:cursor-grabbing"
    >
      <div class="min-w-0 select-none">
        <p
          v-if="kicker"
          class="text-xs font-semibold tracking-wide text-muted-foreground uppercase"
        >
          {{ kicker }}
        </p>
        <p class="truncate text-sm font-semibold text-foreground">{{ title }}</p>
        <p v-if="summary" class="truncate text-xs text-muted-foreground">{{ summary }}</p>
      </div>
      <div class="flex shrink-0 items-center gap-1">
        <Button
          size="icon-xs"
          variant="ghost"
          :title="isMinimized ? 'Restore' : 'Minimize'"
          :aria-label="isMinimized ? 'Restore' : 'Minimize'"
          @click="isMinimized = !isMinimized"
        >
          <Square v-if="isMinimized" :size="12" />
          <Minus v-else :size="14" />
        </Button>
        <Button
          size="icon-xs"
          variant="ghost"
          title="Reset position"
          aria-label="Reset position"
          @click="resetPosition"
        >
          <RotateCcw :size="14" />
        </Button>
        <Button
          size="icon-xs"
          variant="ghost"
          title="Close"
          aria-label="Close"
          @click="emit('close')"
        >
          <X :size="14" />
        </Button>
      </div>
    </div>
    <div v-if="!isMinimized" class="min-h-0 flex-1 overflow-y-auto p-3">
      <slot />
    </div>
  </div>
</template>
