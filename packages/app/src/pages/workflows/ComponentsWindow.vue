<script setup lang="ts">
import type { LlmCallComponent } from "@candoitall/api-client";
import { computed, onMounted, ref } from "vue";
import { Input } from "@/components/ui/input";
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
  <div class="flex flex-col gap-3">
    <p class="text-xs text-muted-foreground">
      {{ components.length }} prepared call(s) in the library.
    </p>
    <Input v-model="search" placeholder="Search prepared calls" />
    <p v-if="error" class="text-sm text-destructive">{{ error }}</p>
    <p v-else-if="loading" class="text-sm text-muted-foreground">Loading&hellip;</p>
    <div v-else class="flex flex-col gap-1">
      <button
        v-for="component in filtered"
        :key="component.id"
        type="button"
        class="flex items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-accent hover:text-accent-foreground"
        @click="emit('place', component)"
      >
        <span
          class="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-muted text-[10px] font-medium text-muted-foreground"
          >AI</span
        >
        <span class="min-w-0 flex-1">
          <p class="truncate font-medium">{{ component.name }}</p>
          <p class="truncate text-xs text-muted-foreground">
            {{ component.model || "Provider default model" }}
          </p>
        </span>
      </button>
      <div
        v-if="!filtered.length"
        class="rounded-md border border-dashed border-border p-3 text-center text-sm"
      >
        <p class="font-medium">No prepared calls</p>
        <p class="text-xs text-muted-foreground">
          Save an LlmCall node's settings as a component to reuse it here.
        </p>
      </div>
    </div>
  </div>
</template>
