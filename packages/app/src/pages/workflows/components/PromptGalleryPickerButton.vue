<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { getPrompt, searchPrompts } from "@/pages/prompts/api";
import type { PromptGallerySearchItem } from "@candoitall/api-client";
import type { PromptGallerySelection } from "../types";

// Opens a dialog to pick a prompt for an LlmCall node. Mirrors the old .NET app's
// PromptGalleryPickerButton/PromptGallerySelection: returns a full content snapshot (not just an
// id) so the caller can copy it straight into the node's `instructions` field.

const emit = defineEmits<{ select: [selection: PromptGallerySelection] }>();

const open = ref(false);
const query = ref("");
const loading = ref(false);
const error = ref<string | null>(null);
const results = ref<PromptGallerySearchItem[]>([]);

async function search() {
  loading.value = true;
  error.value = null;
  try {
    const page = await searchPrompts({ text: query.value, pageIndex: 0, pageSize: 20 });
    results.value = page.items ?? [];
  } catch (e) {
    error.value = e instanceof Error ? e.message : "Prompts could not be loaded.";
  } finally {
    loading.value = false;
  }
}

async function pick(item: PromptGallerySearchItem) {
  loading.value = true;
  error.value = null;
  try {
    const details = await getPrompt(item.id);
    emit("select", {
      artifactId: details.id,
      versionId: null,
      title: details.title,
      instructions: details.draftContent,
      supportedModels: details.supportedModels.map((model) => model.model),
    });
    open.value = false;
  } catch (e) {
    error.value = e instanceof Error ? e.message : "The prompt could not be loaded.";
  } finally {
    loading.value = false;
  }
}

function onOpenChange(value: boolean) {
  open.value = value;
  if (value && results.value.length === 0) search();
}
</script>

<template>
  <Dialog :open="open" @update:open="onOpenChange">
    <DialogTrigger as-child>
      <Button type="button" variant="outline" size="sm">Pick from Prompt Gallery</Button>
    </DialogTrigger>
    <DialogContent class="max-h-[80vh] max-w-2xl overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Pick a prompt</DialogTitle>
      </DialogHeader>
      <div class="space-y-3">
        <Input v-model="query" placeholder="Search prompts" @keyup.enter="search" />
        <p v-if="error" class="text-sm text-destructive">{{ error }}</p>
        <p v-if="loading" class="text-sm text-muted-foreground">Loading&hellip;</p>
        <ul v-else class="space-y-1">
          <li v-for="item in results" :key="item.id">
            <button
              type="button"
              class="w-full rounded-md border border-transparent px-3 py-2 text-left transition hover:border-primary hover:bg-accent"
              @click="pick(item)"
            >
              <span class="truncate text-sm font-medium">{{ item.title }}</span>
              <span class="mt-1 block truncate text-xs text-muted-foreground">{{
                item.summary
              }}</span>
            </button>
          </li>
          <li v-if="!results.length" class="px-3 py-2 text-sm text-muted-foreground">
            No prompts found.
          </li>
        </ul>
      </div>
    </DialogContent>
  </Dialog>
</template>
