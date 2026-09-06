<script setup lang="ts">
import type { LlmCallComponent } from "@candoitall/api-client";
import { computed, onMounted, ref } from "vue";
import { listWorkflowComponents } from "./api";

// Port of the old editor's "Prepared calls" components window — browse saved LlmCallComponents
// (reusable provider/model/instructions bundles) and place one onto the canvas as a new LlmCall
// node, mirroring PromptGalleryPickerButton.Consumer="PromptGalleryConsumer.Workflow" usage but
// for whole prepared LLM components rather than raw prompts.

const emit = defineEmits<{ place: [component: LlmCallComponent] }>();

const components = ref<LlmCallComponent[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);
const search = ref("");

onMounted(async () => {
  try {
    components.value = await listWorkflowComponents();
  } catch (e) {
    error.value = e instanceof Error ? e.message : "Prepared calls could not be loaded.";
  } finally {
    loading.value = false;
  }
});

const filtered = computed(() => {
  const query = search.value.trim().toLowerCase();
  return components.value.filter(
    (component) => !query || component.name.toLowerCase().includes(query),
  );
});
</script>

<template>
  <div class="cda-component-toolbox">
    <p class="cda-component-toolbox__copy">
      {{ components.length }} prepared call(s) in the library.
    </p>
    <input
      v-model="search"
      class="cda-component-toolbox__search"
      placeholder="Search prepared calls"
    />
    <div class="cda-component-toolbox__body">
      <p v-if="error" class="text-sm text-destructive">{{ error }}</p>
      <p v-else-if="loading" class="text-sm text-muted-foreground">Loading&hellip;</p>
      <div v-else class="cda-component-toolbox__item-list">
        <button
          v-for="component in filtered"
          :key="component.id"
          type="button"
          class="cda-component-toolbox__item"
          @click="emit('place', component)"
        >
          <span class="cda-component-toolbox__item-icon">AI</span>
          <span class="cda-component-toolbox__item-body">
            <strong>{{ component.name }}</strong>
            <small>{{ component.model || "Provider default model" }}</small>
          </span>
        </button>
        <div v-if="!filtered.length" class="cda-component-toolbox__empty">
          <strong>No prepared calls</strong>
          <span>Save an LlmCall node's settings as a component to reuse it here.</span>
        </div>
      </div>
    </div>
  </div>
</template>
