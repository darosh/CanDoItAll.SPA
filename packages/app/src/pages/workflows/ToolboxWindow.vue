<script setup lang="ts">
import type { WorkflowExecutorDescriptor } from "@candoitall/api-client";
import { computed, onMounted, ref } from "vue";
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
  <div class="cda-component-toolbox">
    <p class="cda-component-toolbox__copy">
      {{ nodeKinds.length }} node kinds · {{ executors.length }} executors
    </p>
    <input
      v-model="search"
      class="cda-component-toolbox__search"
      placeholder="Search nodes, executors"
    />
    <div class="cda-component-toolbox__body">
      <div class="cda-component-toolbox__sections">
        <div class="cda-component-toolbox__section">
          <div class="cda-component-toolbox__section-summary">
            <div class="cda-component-toolbox__section-copy">
              <strong>Node kinds</strong>
              <small>Add a typed node to the canvas.</small>
            </div>
            <span class="cda-component-toolbox__section-badge tone-info">{{
              filteredKinds.length
            }}</span>
          </div>
          <div class="cda-component-toolbox__item-list">
            <button
              v-for="kind in filteredKinds"
              :key="kind"
              type="button"
              class="cda-component-toolbox__item"
              @click="emit('addNode', kind)"
            >
              <span class="cda-component-toolbox__item-icon">{{
                resolveNodeVisualProfile(kind).icon
              }}</span>
              <span class="cda-component-toolbox__item-body">
                <strong>{{ formatNodeKind(kind) }}</strong>
              </span>
            </button>
          </div>
        </div>

        <div class="cda-component-toolbox__section">
          <div class="cda-component-toolbox__section-summary">
            <div class="cda-component-toolbox__section-copy">
              <strong>Executors</strong>
              <small>Add an Executor node preset to this executor.</small>
            </div>
            <span class="cda-component-toolbox__section-badge tone-warn">{{
              filteredExecutors.length
            }}</span>
          </div>
          <div class="cda-component-toolbox__item-list">
            <button
              v-for="executor in filteredExecutors"
              :key="executor.id"
              type="button"
              class="cda-component-toolbox__item"
              @click="emit('addExecutorNode', { executorId: executor.id, name: executor.name })"
            >
              <span class="cda-component-toolbox__item-icon">EX</span>
              <span class="cda-component-toolbox__item-body">
                <strong>{{ executor.name }}</strong>
                <small>{{ executor.description }}</small>
              </span>
            </button>
            <div v-if="!filteredExecutors.length" class="cda-component-toolbox__empty">
              <strong>No executors</strong>
              <span>No executors match this search.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
