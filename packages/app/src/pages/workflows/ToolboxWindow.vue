<script setup lang="ts">
import type { WorkflowExecutorDescriptor } from "@candoitall/api-client";
import { computed, onMounted, ref } from "vue";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { QUICK_CREATE_NODE_KINDS } from "./actionCatalog";
import { listWorkflowExecutorCatalog } from "./api";
import { resolveNodeVisualProfile } from "./nodeKindRegistry";
import { formatNodeKind } from "./types";

// Port of the old editor's "Nodes and executors" toolbox window (WorkflowCanvasEditor.razor's
// OverlayComponentToolbox) — searchable list of addable node kinds plus the executor catalog, so
// nodes can be added without the canvas's own quick-create radial menu (useful when maximized,
// where this window is the only way to reach the toolbox alongside the canvas).

const emit = defineEmits<{
  addNode: [kind: number];
  addExecutorNode: [payload: { executorId: string; name: string }];
}>();

const search = ref("");
const executors = ref<WorkflowExecutorDescriptor[]>([]);

onMounted(async () => {
  try {
    executors.value = await listWorkflowExecutorCatalog();
  } catch {
    executors.value = [];
  }
});

const nodeKinds = Object.values(QUICK_CREATE_NODE_KINDS);

const filteredKinds = computed(() => {
  const query = search.value.trim().toLowerCase();
  return Object.values(QUICK_CREATE_NODE_KINDS).filter(
    (kind) => !query || formatNodeKind(kind).toLowerCase().includes(query),
  );
});

const filteredExecutors = computed(() => {
  const query = search.value.trim().toLowerCase();
  return executors.value.filter(
    (executor) => !query || executor.name.toLowerCase().includes(query),
  );
});
</script>

<template>
  <div class="flex flex-col gap-3">
    <p class="text-xs text-muted-foreground">
      {{ nodeKinds.length }} node kinds · {{ executors.length }} executors
    </p>
    <Input v-model="search" placeholder="Search nodes, executors" />

    <div class="flex flex-col gap-1">
      <div class="flex items-center justify-between gap-2 px-1">
        <div class="min-w-0">
          <p class="text-sm font-medium">Node kinds</p>
          <p class="text-xs text-muted-foreground">Add a typed node to the canvas.</p>
        </div>
        <Badge variant="outline">{{ filteredKinds.length }}</Badge>
      </div>
      <button
        v-for="kind in filteredKinds"
        :key="kind"
        type="button"
        class="flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent hover:text-accent-foreground"
        @click="emit('addNode', kind)"
      >
        <span
          class="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-muted text-[10px] font-medium text-muted-foreground"
        >
          {{ resolveNodeVisualProfile(kind).icon }}
        </span>
        <span class="min-w-0 flex-1 truncate font-medium">{{ formatNodeKind(kind) }}</span>
      </button>
    </div>

    <div class="flex flex-col gap-1">
      <div class="flex items-center justify-between gap-2 px-1">
        <div class="min-w-0">
          <p class="text-sm font-medium">Executors</p>
          <p class="text-xs text-muted-foreground">Add an Executor node preset to this executor.</p>
        </div>
        <Badge variant="outline">{{ filteredExecutors.length }}</Badge>
      </div>
      <button
        v-for="executor in filteredExecutors"
        :key="executor.id"
        type="button"
        class="flex items-start gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent hover:text-accent-foreground"
        @click="emit('addExecutorNode', { executorId: executor.id, name: executor.name })"
      >
        <span
          class="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-muted text-[10px] font-medium text-muted-foreground"
          >EX</span
        >
        <span class="min-w-0 flex-1">
          <p class="truncate font-medium">{{ executor.name }}</p>
          <p class="truncate text-xs text-muted-foreground">{{ executor.description }}</p>
        </span>
      </button>
      <div
        v-if="!filteredExecutors.length"
        class="rounded-md border border-dashed border-border p-3 text-center text-sm"
      >
        <p class="font-medium">No executors</p>
        <p class="text-xs text-muted-foreground">No executors match this search.</p>
      </div>
    </div>
  </div>
</template>
