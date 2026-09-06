<script setup lang="ts">
import type { ProjectSummary } from "@candoitall/api-client";
import { Plus } from "@lucide/vue";
import { computed, onMounted, reactive, ref } from "vue";
import { RouterLink } from "vue-router";

// import PageHeader from "@/components/PageHeader.vue";
import PageShell from "@/components/PageShell.vue";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

import { listProjects } from "./api";
import { formatProjectStatus, ProjectStatus, projectStatusTone } from "./types";

const filters = reactive({
  searchText: "",
  status: "" as "" | string,
});

const items = ref<ProjectSummary[]>([]);
const loading = ref(false);
const hasLoaded = ref(false);
const error = ref<string | null>(null);

// ListProjects has no server-side query params, so filtering below is a pure
// client-side computed — no debounce/refetch needed, unlike Prompts/Processes.
const LOADING_INDICATOR_DELAY_MS = 200;

async function load() {
  error.value = null;
  const loadingTimer = setTimeout(() => {
    loading.value = true;
  }, LOADING_INDICATOR_DELAY_MS);
  try {
    items.value = await listProjects();
  } catch (e) {
    error.value = e instanceof Error ? e.message : "The project list could not be loaded.";
  } finally {
    clearTimeout(loadingTimer);
    loading.value = false;
    hasLoaded.value = true;
  }
}

onMounted(load);

const filtered = computed(() => {
  const text = filters.searchText.trim().toLowerCase();
  const status = filters.status === "" ? null : Number(filters.status);
  return items.value.filter((project) => {
    if (status !== null && project.status !== status) return false;
    if (!text) return true;
    return (
      project.name.toLowerCase().includes(text) || project.currentPhase.toLowerCase().includes(text)
    );
  });
});
</script>

<template>
  <PageShell>
    <!--    <PageHeader-->
    <!--      title="Projects"-->
    <!--      description="Portfolio of projects, their phases, and their parent/child structure."-->
    <!--    >-->
    <!--      <template #actions>-->
    <!--      </template>-->
    <!--    </PageHeader>-->

    <div class="flex flex-wrap items-center gap-2">
      <Input v-model="filters.searchText" placeholder="Search name or current phase" class="w-72" />

      <Select
        :model-value="filters.status || 'all'"
        @update:model-value="(v) => (filters.status = v === 'all' ? '' : (v as string))"
      >
        <SelectTrigger class="w-40">
          <SelectValue placeholder="All statuses" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All statuses</SelectItem>
          <SelectItem
            v-for="status in Object.values(ProjectStatus)"
            :key="status"
            :value="String(status)"
          >
            {{ formatProjectStatus(status) }}
          </SelectItem>
        </SelectContent>
      </Select>

      <div class="grow"></div>
      <RouterLink to="/projects/new">
        <Button size="sm">
          <Plus class="size-4" />
          New project
        </Button>
      </RouterLink>
    </div>

    <div v-if="loading" class="py-12 text-center text-sm text-muted-foreground">
      Loading projects&hellip;
    </div>

    <div
      v-else-if="error"
      class="rounded-md border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive"
    >
      {{ error }}
    </div>

    <div
      v-else-if="hasLoaded && filtered.length === 0"
      class="py-12 text-center text-sm text-muted-foreground"
    >
      No projects match these filters.
    </div>

    <Table v-else-if="hasLoaded">
      <TableHeader>
        <TableRow>
          <TableHead>Project</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Current phase</TableHead>
          <TableHead>Phases</TableHead>
          <TableHead>Parents / children</TableHead>
          <TableHead>Updated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="project in filtered" :key="project.id">
          <TableCell>
            <RouterLink
              :to="`/projects/${project.id}`"
              class="font-medium text-foreground hover:underline"
            >
              {{ project.name }}
            </RouterLink>
          </TableCell>
          <TableCell>
            <Badge :variant="projectStatusTone(project.status)">{{
              formatProjectStatus(project.status)
            }}</Badge>
          </TableCell>
          <TableCell class="text-sm text-muted-foreground">{{
            project.currentPhase || "—"
          }}</TableCell>
          <TableCell class="text-sm text-muted-foreground">{{
            Number(project.phaseCount)
          }}</TableCell>
          <TableCell class="text-sm text-muted-foreground"
            >{{ Number(project.parentCount) }} / {{ Number(project.childCount) }}</TableCell
          >
          <TableCell class="text-sm text-muted-foreground">{{
            new Date(project.updatedAtUtc).toLocaleDateString()
          }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </PageShell>
</template>
