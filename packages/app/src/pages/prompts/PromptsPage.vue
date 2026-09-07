<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Prompts/Pages/PromptGalleryPage.razor
 * original URL     : http://localhost:5032/prompt-gallery
 * URL              : http://localhost:5173/prompts
 * opens            : /prompts/:promptId
 */

import { Star } from "@lucide/vue";
import { computed, onMounted, reactive, ref, watch } from "vue";
import { RouterLink } from "vue-router";

// import PageHeader from "@/components/shared/PageHeader.vue";
import PageShell from "@/components/shared/PageShell.vue";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { searchPrompts, setFavorite } from "./api";
import { PromptKind, PromptStatus, totalPages, type PromptGallerySearchItem } from "./types";

const filters = reactive({
  text: "",
  kind: "" as "" | string,
  status: "" as "" | string,
  favoritesOnly: false,
});

const items = ref<PromptGallerySearchItem[]>([]);
const pageIndex = ref(0);
const pageSize = 25;
const totalCount = ref(0);
const loading = ref(false);
const hasLoaded = ref(false);
const error = ref<string | null>(null);
const favoriteBusyId = ref<string | null>(null);

const pageCount = computed(() => totalPages(totalCount.value, pageSize));

// Prompts responses are typically much faster than this, so the loading
// indicator only appears for requests slow enough that its absence would read
// as an unresponsive UI — avoids a flash/blink on the common fast-response path.
const LOADING_INDICATOR_DELAY_MS = 200;

async function load() {
  error.value = null;
  const loadingTimer = setTimeout(() => {
    loading.value = true;
  }, LOADING_INDICATOR_DELAY_MS);
  try {
    const result = await searchPrompts({
      text: filters.text || undefined,
      kind: filters.kind === "" ? undefined : (Number(filters.kind) as PromptKind),
      status: filters.status === "" ? undefined : (Number(filters.status) as PromptStatus),
      favoritesOnly: filters.favoritesOnly,
      pageIndex: pageIndex.value,
      pageSize,
    });
    items.value = result.items;
    totalCount.value = Number(result.totalCount);
  } catch (e) {
    error.value = e instanceof Error ? e.message : "The prompts search failed.";
  } finally {
    clearTimeout(loadingTimer);
    loading.value = false;
    hasLoaded.value = true;
  }
}

let debounce: ReturnType<typeof setTimeout> | undefined;
watch(
  () => filters.text,
  () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      pageIndex.value = 0;
      load();
    }, 250);
  },
);

watch(
  () => [filters.kind, filters.status, filters.favoritesOnly],
  () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      pageIndex.value = 0;
      load();
    }, 0);
  },
);

onMounted(load);

async function toggleFavorite(item: PromptGallerySearchItem) {
  if (favoriteBusyId.value) return;
  favoriteBusyId.value = item.id;
  const next = !item.isFavorite;
  try {
    await setFavorite(item.id, next);
    item.isFavorite = next;
  } catch {
    // Optimistic UI would misrepresent state on failure — leave it be and let the user retry.
  } finally {
    favoriteBusyId.value = null;
  }
}

function kindLabel(kind: PromptGallerySearchItem["kind"]) {
  return kind === PromptKind.FullPrompt ? "Full prompt" : "Prompt part";
}

function statusTone(item: PromptGallerySearchItem): "warning" | "success" | "secondary" {
  if (item.isArchived) return "warning";
  return item.status === PromptStatus.Final ? "success" : "secondary";
}

function statusLabel(item: PromptGallerySearchItem) {
  if (item.isArchived) return "Archived";
  return item.status === PromptStatus.Final ? "Final" : "Draft";
}

function modelSummary(item: PromptGallerySearchItem) {
  const preferred = item.supportedModels.find((m) => m.isPreferred);
  if (preferred) return `${preferred.provider} · ${preferred.model} · preferred`;
  if (item.supportedModels.length === 0) return "Any provider / model";
  if (item.supportedModels.length === 1)
    return `${item.supportedModels[0]!.provider} · ${item.supportedModels[0]!.model}`;
  return `${item.supportedModels.length} supported models`;
}
</script>

<template>
  <PageShell>
    <!--    <PageHeader-->
    <!--      title="Prompts"-->
    <!--      description="Canonical prompts and prompt parts reused by workflows, agents, processes, and chat."-->
    <!--    />-->

    <div class="flex flex-wrap items-center gap-2">
      <Input v-model="filters.text" placeholder="Search names, prompt text, or tags" class="w-72" />

      <Select
        :model-value="filters.kind || 'all'"
        @update:model-value="(v) => (filters.kind = v === 'all' ? '' : (v as string))"
      >
        <SelectTrigger class="w-40">
          <SelectValue placeholder="All kinds" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All kinds</SelectItem>
          <SelectItem :value="String(PromptKind.FullPrompt)">Full prompt</SelectItem>
          <SelectItem :value="String(PromptKind.Part)">Prompt part</SelectItem>
        </SelectContent>
      </Select>

      <Select
        :model-value="filters.status || 'all'"
        @update:model-value="(v) => (filters.status = v === 'all' ? '' : (v as string))"
      >
        <SelectTrigger class="w-36">
          <SelectValue placeholder="All statuses" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All statuses</SelectItem>
          <SelectItem :value="String(PromptStatus.Draft)">Draft</SelectItem>
          <SelectItem :value="String(PromptStatus.Final)">Final</SelectItem>
        </SelectContent>
      </Select>

      <label class="flex items-center gap-2 ml-1 text-sm text-muted-foreground">
        <Checkbox v-model="filters.favoritesOnly" />
        Favorites only
      </label>
    </div>

    <div v-if="loading" class="py-12 text-center text-sm text-muted-foreground">
      Searching prompts&hellip;
    </div>

    <div
      v-else-if="error"
      class="rounded-md border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive"
    >
      {{ error }}
    </div>

    <div
      v-else-if="hasLoaded && items.length === 0"
      class="py-12 text-center text-sm text-muted-foreground"
    >
      No prompt items match these filters.
    </div>

    <Table v-else-if="hasLoaded">
      <TableHeader>
        <TableRow>
          <TableHead>Prompt item</TableHead>
          <TableHead>Kind / status</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead>Model guidance</TableHead>
          <TableHead class="w-10"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="item in items" :key="item.id">
          <TableCell class="max-w-xl overflow-hidden">
            <RouterLink
              :to="`/prompts/${item.id}`"
              class="font-medium text-foreground hover:underline"
            >
              {{ item.title }}
            </RouterLink>
            <p class="mt-0.5 line-clamp-1 text-ellipsis text-xs text-muted-foreground">
              {{ item.contentPreview || item.summary || "No prompt content provided." }}
            </p>
          </TableCell>
          <TableCell>
            <div class="flex flex-wrap items-center gap-1">
              <Badge variant="outline">{{ kindLabel(item.kind) }}</Badge>
              <Badge :variant="statusTone(item)">{{ statusLabel(item) }}</Badge>
              <Badge v-if="Number(item.currentVersionNumber) > 0" variant="secondary"
                >v{{ item.currentVersionNumber }}</Badge
              >
            </div>
          </TableCell>
          <TableCell>
            <div class="flex flex-wrap gap-1">
              <Badge v-for="tag in item.tags.slice(0, 4)" :key="tag" variant="outline">{{
                tag
              }}</Badge>
              <Badge v-if="item.tags.length > 4" variant="secondary"
                >+{{ item.tags.length - 4 }}</Badge
              >
            </div>
          </TableCell>
          <TableCell class="text-sm text-muted-foreground">{{ modelSummary(item) }}</TableCell>
          <TableCell>
            <Button
              variant="ghost"
              size="icon-sm"
              :disabled="favoriteBusyId === item.id"
              :aria-pressed="item.isFavorite"
              :aria-label="item.isFavorite ? 'Remove favorite' : 'Mark favorite'"
              @click="toggleFavorite(item)"
            >
              <Star
                :class="item.isFavorite ? 'fill-warning text-warning' : 'text-muted-foreground'"
                class="size-4"
              />
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <div v-if="!loading && !error && items.length > 0" class="flex items-center gap-4">
      <p class="text-sm text-right text-muted-foreground flex-1">
        Page {{ pageIndex + 1 }} of {{ Math.max(pageCount, 1) }} &middot;
        {{ totalCount.toLocaleString() }} item(s)
      </p>
      <div class="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          :disabled="pageIndex <= 0"
          @click="
            pageIndex--;
            load();
          "
          >Previous</Button
        >
        <Button
          variant="outline"
          size="sm"
          :disabled="pageIndex + 1 >= pageCount"
          @click="
            pageIndex++;
            load();
          "
          >Next</Button
        >
      </div>
    </div>
  </PageShell>
</template>
