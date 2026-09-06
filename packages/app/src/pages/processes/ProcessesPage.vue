<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Processes/Pages/ProcessesPage.razor
 * original URL     : http://localhost:5032/processes
 * URL              : http://localhost:5173/processes
 * opens            : /processes/:processId
 * opens            : /processes/:processId/activity
 * opens            : /processes/:processId/design
 * opens            : /processes/:processId/roles
 */

import { onMounted, reactive, ref, watch } from "vue";
import { RouterLink } from "vue-router";

// import PageHeader from "@/components/PageHeader.vue";
import PageShell from "@/components/PageShell.vue";
import { Badge } from "@/components/ui/badge";
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
import type { ProcessDefinitionCatalogItemProjection } from "@candoitall/api-client";

import { listProcessDefinitions } from "./api";
import {
  catalogItemStatusTone,
  formatCatalogItemStatus,
  ProcessDefinitionCatalogScopeKind,
} from "./types";

const filters = reactive({
  searchText: "",
  scopeFilter: "" as "" | string,
});

const items = ref<ProcessDefinitionCatalogItemProjection[]>([]);
const loading = ref(false);
const hasLoaded = ref(false);
const error = ref<string | null>(null);

// Template-pack-backed catalog responses are typically fast, so the loading
// indicator only appears for requests slow enough that its absence would read
// as an unresponsive UI — avoids a flash/blink on the common fast-response path.
const LOADING_INDICATOR_DELAY_MS = 200;

async function load() {
  error.value = null;
  const loadingTimer = setTimeout(() => {
    loading.value = true;
  }, LOADING_INDICATOR_DELAY_MS);
  try {
    items.value = await listProcessDefinitions({
      searchText: filters.searchText || undefined,
      scopeFilter:
        filters.scopeFilter === ""
          ? undefined
          : (Number(filters.scopeFilter) as ProcessDefinitionCatalogScopeKind),
    });
  } catch (e) {
    error.value = e instanceof Error ? e.message : "The process catalog could not be loaded.";
  } finally {
    clearTimeout(loadingTimer);
    loading.value = false;
    hasLoaded.value = true;
  }
}

let debounce: ReturnType<typeof setTimeout> | undefined;
watch(
  () => filters.searchText,
  () => {
    clearTimeout(debounce);
    debounce = setTimeout(load, 250);
  },
);

watch(
  () => filters.scopeFilter,
  () => load(),
);

onMounted(load);
</script>

<template>
  <PageShell>
    <!--    <PageHeader-->
    <!--      title="Processes"-->
    <!--      description="Process definitions available to launch, review, or extend."-->
    <!--    />-->

    <div class="flex flex-wrap items-center gap-2">
      <Input
        v-model="filters.searchText"
        placeholder="Search name, summary, or criticality"
        class="w-72"
      />

      <Select
        :model-value="filters.scopeFilter || 'all'"
        @update:model-value="(v) => (filters.scopeFilter = v === 'all' ? '' : (v as string))"
      >
        <SelectTrigger class="w-40">
          <SelectValue placeholder="All scopes" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All scopes</SelectItem>
          <SelectItem :value="String(ProcessDefinitionCatalogScopeKind.Global)">Global</SelectItem>
          <SelectItem :value="String(ProcessDefinitionCatalogScopeKind.Project)"
            >Project</SelectItem
          >
        </SelectContent>
      </Select>
    </div>

    <div v-if="loading" class="py-12 text-center text-sm text-muted-foreground">
      Searching process definitions&hellip;
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
      No process definitions match these filters.
    </div>

    <Table v-else-if="hasLoaded">
      <TableHeader>
        <TableRow>
          <TableHead>Definition</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Criticality / mode</TableHead>
          <TableHead>Updated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="item in items" :key="item.key.value ?? ''">
          <TableCell class="max-w-2xl overflow-hidden">
            <RouterLink
              :to="`/processes/${item.key.value}`"
              class="font-medium text-foreground hover:underline"
            >
              {{ item.name }}
            </RouterLink>
            <p class="mt-0.5 line-clamp-1 text-ellipsis text-xs text-muted-foreground">
              {{ item.summary }}
            </p>
          </TableCell>
          <TableCell>
            <div class="flex flex-wrap items-center gap-1">
              <Badge :variant="catalogItemStatusTone(item.status)">{{
                formatCatalogItemStatus(item.status)
              }}</Badge>
              <Badge v-if="Number(item.compatibilityIssueCount) > 0" variant="warning"
                >{{ Number(item.compatibilityIssueCount) }} review</Badge
              >
            </div>
          </TableCell>
          <TableCell>
            <div class="flex flex-wrap items-center gap-1">
              <Badge variant="outline">{{ item.criticality }}</Badge>
              <Badge variant="outline">{{ item.operatingMode }}</Badge>
            </div>
          </TableCell>
          <TableCell class="text-sm text-muted-foreground">{{
            new Date(item.updatedAtUtc).toLocaleDateString()
          }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </PageShell>
</template>
