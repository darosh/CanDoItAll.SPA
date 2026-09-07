<script setup lang="ts">
/**
 * Thin optional Vue wrapper over the framework-agnostic `createCanvasWorkbench()` facade.
 * Deliberately narrower than the old packages/app/src/lib/canvas-workbench/CanvasWorkbench.vue:
 * no maximize/minimap/diagnostics/help toolbar here — that was app-level UI, not engine surface,
 * and gets rebuilt in packages/app around this wrapper once a cutover happens (see the plan doc's
 * migration seam section). Excluded from this package's own tsconfig (see ../../tsconfig.json)
 * since it needs vue-tsc, not plain tsc, to type-check — packages/app's own `vue-tsc --build`
 * covers it once something there imports it.
 */
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import { createCanvasWorkbench, type CanvasWorkbenchHandle } from "../api/facade.js";
import type { NodesMovedEvent, SelectionChangedEvent } from "../model/events.js";
import type { CanvasWorkbenchSurfaceInput } from "../model/types.js";

const props = defineProps<{
  surface: CanvasWorkbenchSurfaceInput;
}>();

const emit = defineEmits<{
  selectionChanged: [payload: SelectionChangedEvent];
  nodesMoved: [payload: NodesMovedEvent];
}>();

const host = ref<HTMLElement | null>(null);
let handle: CanvasWorkbenchHandle | null = null;

onMounted(() => {
  if (!host.value) return;
  handle = createCanvasWorkbench(host.value, props.surface);
  handle.on("selectionChanged", (payload) => emit("selectionChanged", payload));
  handle.on("nodesMoved", (payload) => emit("nodesMoved", payload));
});

onBeforeUnmount(() => {
  handle?.dispose();
  handle = null;
});

watch(
  () => props.surface,
  (surface) => handle?.update(surface),
  { deep: true },
);

function fitView(): void {
  handle?.fitView();
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

defineExpose({ fitView, focusNode, selectNodes, getStateJson });
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
