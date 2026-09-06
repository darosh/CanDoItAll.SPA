<script setup lang="ts">
import type { WorkflowNode } from "@candoitall/api-client";
import { computed, ref } from "vue";
import { resolveNodeVisualProfile } from "./nodeKindRegistry";
import { formatNodeKind } from "./types";

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
  <div class="cda-component-toolbox">
    <p class="cda-component-toolbox__copy">{{ nodes.length }} node(s)</p>
    <input v-model="search" class="cda-component-toolbox__search" placeholder="Search nodes" />
    <div class="cda-component-toolbox__body">
      <div class="cda-component-toolbox__item-list">
        <button
          v-for="node in filteredNodes"
          :key="node.id"
          type="button"
          class="cda-component-toolbox__item"
          @click="emit('select', node.id)"
        >
          <span class="cda-component-toolbox__item-icon">{{
            resolveNodeVisualProfile(node.kind).icon
          }}</span>
          <span class="cda-component-toolbox__item-body">
            <strong>{{ node.name }}</strong>
            <small>{{ formatNodeKind(node.kind) }}</small>
          </span>
        </button>
        <div v-if="!filteredNodes.length" class="cda-component-toolbox__empty">
          <strong>No nodes</strong>
          <span>No nodes match this search.</span>
        </div>
      </div>
    </div>
  </div>
</template>
