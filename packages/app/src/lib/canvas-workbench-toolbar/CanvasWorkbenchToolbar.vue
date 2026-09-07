<script setup lang="ts">
/**
 * App-level chrome around @candoitall/canvas-workbench's thin Vue wrapper. The new package
 * deliberately ships no toolbar (that's app UI, not engine surface — see the package's plan doc's
 * migration seam section), so this reproduces the zoom/fit-view/minimap/diagnostics/maximize
 * chrome the old packages/app/src/lib/canvas-workbench/CanvasWorkbench.vue had built in, as new
 * app-owned code — styled with plain Tailwind utilities (no `cw-*` custom CSS).
 *
 * Transparent wrapper: `surface` is the only declared prop. `class`/`style` on this component
 * fall through to its own root (default Vue behavior for a single-root component — a consumer's
 * `class="min-h-0 flex-1"` sizing needs to land on the whole toolbar+stage block, not just the
 * inner canvas area). Event listeners like `@selection-changed`/`@nodes-moved` are forwarded
 * explicitly to the inner CanvasWorkbench component below (see `listeners`), so consumer pages
 * don't need to change their event bindings.
 */
import { Bug, Map, Maximize, Minimize } from "@lucide/vue";
import { computed, nextTick, ref, useAttrs, watch } from "vue";
import CanvasWorkbench from "@candoitall/canvas-workbench/src/vue/CanvasWorkbench.vue";
import type { CanvasWorkbenchSurfaceInput } from "@candoitall/canvas-workbench";
import { Button } from "@/components/ui/button";
import { useAppTabs } from "@/composables/useAppTabs";

defineProps<{
  surface: CanvasWorkbenchSurfaceInput;
}>();

// Vue's default single-root attrs fallthrough doesn't reach through <Teleport> (needed below for
// the maximize state) — inheritAttrs is turned off and both attr groups are bound explicitly
// instead: `class`/`style`/plain attrs onto this wrapper's own root, `onXxx` listeners forwarded
// to the inner CanvasWorkbench component.
defineOptions({ inheritAttrs: false });
const attrs = useAttrs();
const listeners = computed(() =>
  Object.fromEntries(Object.entries(attrs).filter(([key]) => key.startsWith("on"))),
);
const rootAttrs = computed(() =>
  Object.fromEntries(Object.entries(attrs).filter(([key]) => !key.startsWith("on"))),
);

const inner = ref<InstanceType<typeof CanvasWorkbench> | null>(null);

// Deliberately not the browser Fullscreen API (`useFullscreen`/`element.requestFullscreen()`):
// that replaces the whole tab content, hiding the app's own tab bar above this page and this
// toolbar itself. "Maximize" here expands the toolbar+stage block to cover the viewport instead,
// staying inside the page — the toolbar row stays visible, and (see `tabsVisible` below) so does
// the app's own AppTabs bar when the user has it shown.
// Rendered via `<Teleport to="body" :disabled="!isMaximized">` rather than toggling `fixed` in
// place: this component normally sits as a flex child next to a sibling panel
// (WorkflowDesignerPage's inspector), and a `position: fixed` child left in that flow doesn't
// reliably give its vacated space back to the sibling on exit (confirmed live — the sibling panel
// was left stranded off-screen). Teleporting actually detaches the DOM node from the flex layout
// while maximized and reattaches it cleanly on exit.
const isMaximized = ref(false);
function toggleMaximize(): void {
  isMaximized.value = !isMaximized.value;
}
// AppTabs (packages/app/src/components/app/AppTabs.vue) is a fixed `h-8` bar the maximized block
// must not cover — `useAppTabs()` is a module-scoped singleton, so its `tabsVisible` ref reflects
// the live app-wide toggle without any prop drilling from AppShell.
const { tabsVisible } = useAppTabs();
// Konva's stage doesn't observe its own container's size — resize() re-reads it explicitly.
// Maximizing changes the container's size outside any resize event Konva would see (a wheel
// zoom, a window resize), so this is the one extra wire this toolbar needs.
watch([isMaximized, tabsVisible], async () => {
  await nextTick();
  inner.value?.resize();
});

// The engine only exposes toggle*() methods, not a live "is this currently showing" getter (see
// the extensions' own doc comments) — safe to track locally since these buttons are the only
// thing calling toggle() for a given workbench instance.
const minimapOn = ref(true);
const diagnosticsOn = ref(false);

function toggleMinimap(): void {
  minimapOn.value = !minimapOn.value;
  inner.value?.toggleMinimap();
}
function toggleDiagnostics(): void {
  diagnosticsOn.value = !diagnosticsOn.value;
  inner.value?.toggleDiagnostics();
}

function fitView(): void {
  inner.value?.fitView();
}
function focusNode(nodeId: string): void {
  inner.value?.focusNode(nodeId);
}
function setZoomPercent(zoomPercent: number): void {
  inner.value?.setZoomPercent(zoomPercent);
}
function selectNodes(nodeIds: string[], primaryNodeId?: string | null): void {
  inner.value?.selectNodes(nodeIds, primaryNodeId);
}
function getStateJson(): string {
  return inner.value?.getStateJson() ?? "null";
}
function openQuickCreateMenu(anchorElement: HTMLElement): void {
  inner.value?.openQuickCreateMenu(anchorElement);
}
function resize(): void {
  inner.value?.resize();
}

defineExpose({
  fitView,
  focusNode,
  setZoomPercent,
  selectNodes,
  getStateJson,
  openQuickCreateMenu,
  resize,
});
</script>

<template>
  <Teleport to="body" :disabled="!isMaximized">
    <div
      v-bind="rootAttrs"
      class="flex h-full min-h-0 flex-col"
      :class="
        isMaximized
          ? ['fixed inset-x-0 bottom-0 z-50 bg-background', tabsVisible ? 'top-8' : 'top-0']
          : []
      "
    >
      <div
        class="flex flex-wrap items-center justify-between gap-2 border-b border-border px-3 py-2"
      >
        <div class="flex flex-wrap items-center gap-2">
          <Button size="sm" variant="outline" @click="fitView">Fit view</Button>
          <Button size="sm" variant="outline" @click="setZoomPercent(100)">100%</Button>
          <Button
            size="icon-sm"
            :variant="minimapOn ? 'secondary' : 'ghost'"
            :aria-pressed="minimapOn"
            title="Toggle minimap"
            aria-label="Toggle minimap"
            @click="toggleMinimap"
          >
            <Map :size="16" />
          </Button>
          <Button
            size="icon-sm"
            :variant="diagnosticsOn ? 'secondary' : 'ghost'"
            :aria-pressed="diagnosticsOn"
            title="Toggle diagnostics"
            aria-label="Toggle diagnostics"
            @click="toggleDiagnostics"
          >
            <Bug :size="16" />
          </Button>
          <Button
            size="icon-sm"
            :variant="isMaximized ? 'secondary' : 'ghost'"
            :aria-pressed="isMaximized"
            :title="isMaximized ? 'Exit maximized view' : 'Maximize'"
            :aria-label="isMaximized ? 'Exit maximized view' : 'Maximize'"
            @click="toggleMaximize"
          >
            <Minimize v-if="isMaximized" :size="16" />
            <Maximize v-else :size="16" />
          </Button>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <slot name="toolbar-actions" />
        </div>
      </div>
      <div class="relative min-h-0 flex-1 bg-background">
        <CanvasWorkbench ref="inner" :surface="surface" v-bind="listeners" />
        <slot name="stage-overlays" />
      </div>
    </div>
  </Teleport>
</template>
