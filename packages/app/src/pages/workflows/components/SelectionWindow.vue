<script setup lang="ts">
import type { WorkflowNode } from "@candoitall/api-client";
import { computed, ref } from "vue";
import { Input } from "@/components/ui/input";
import { resolveNodeVisualProfile } from "../nodeKindRegistry";
import { formatNodeKind } from "../types";

// Port of the old editor's "Workflow nodes" selection window — a flat list of every node in the
// graph with a one-click way to open it in the inspector, useful when maximized (the canvas's own
// selection click still works, but this avoids hunting for a node visually on a large graph).

const props = defineProps<{ nodes: WorkflowNode[] }>();
const emit = defineEmits<{ select: [nodeId: string] }>();

const search = ref("");

const filteredNodes = computed(() => {
  const query = search.value.trim().toLowerCase();
  return props.nodes.filter((node) => !query || node.name.toLowerCase().includes(query));
});
</script>

<template>
  <div class="flex flex-col gap-3">
    <p class="text-xs text-muted-foreground">{{ nodes.length }} node(s)</p>
    <Input v-model="search" placeholder="Search nodes" />
    <div class="flex flex-col gap-1">
      <button
        v-for="node in filteredNodes"
        :key="node.id"
        type="button"
        class="flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent hover:text-accent-foreground"
        @click="emit('select', node.id)"
      >
        <span
          class="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-muted text-[10px] font-medium text-muted-foreground"
        >
          {{ resolveNodeVisualProfile(node.kind).icon }}
        </span>
        <span class="min-w-0 flex-1">
          <p class="truncate font-medium">{{ node.name }}</p>
          <p class="truncate text-xs text-muted-foreground">{{ formatNodeKind(node.kind) }}</p>
        </span>
      </button>
      <div
        v-if="!filteredNodes.length"
        class="rounded-md border border-dashed border-border p-3 text-center text-sm"
      >
        <p class="font-medium">No nodes</p>
        <p class="text-xs text-muted-foreground">No nodes match this search.</p>
      </div>
    </div>
  </div>
</template>
