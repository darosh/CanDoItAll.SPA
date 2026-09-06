<script setup lang="ts">
import type {
  WorkflowCatalogItem,
  WorkflowDefinitionDetail,
  WorkflowTemplateCatalogItem,
} from "@candoitall/api-client";
import { Boxes, CirclePlus, ExternalLink, FileStack, Search, Workflow } from "@lucide/vue";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import PageShell from "@/components/PageShell.vue";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { apiClient } from "@/lib/api-client";

type CatalogSelection =
  | { kind: "workflow"; item: WorkflowCatalogItem }
  | {
      kind: "template";
      item: WorkflowTemplateCatalogItem;
    };
const router = useRouter();
const definitions = ref<WorkflowCatalogItem[]>([]);
const templates = ref<WorkflowTemplateCatalogItem[]>([]);
const selection = ref<CatalogSelection | null>(null);
const detail = ref<WorkflowDefinitionDetail | null>(null);
const search = ref("");
const loading = ref(true);
const loadingDetail = ref(false);
const addingTemplate = ref(false);
const error = ref<string | null>(null);
const query = computed(() => search.value.trim().toLocaleLowerCase());
const matches = (item: { name: string; description: string }) =>
  !query.value || `${item.name} ${item.description}`.toLocaleLowerCase().includes(query.value);
const drafts = computed(() =>
  definitions.value.filter((item) => item.status === 0 && matches(item)),
);
const active = computed(() =>
  definitions.value.filter((item) => item.status !== 0 && matches(item)),
);
const filteredTemplates = computed(() => templates.value.filter(matches));
const selectionTitle = computed(
  () => selection.value?.item.name ?? "Select a workflow or template",
);
const selectionDescription = computed(
  () =>
    selection.value?.item.description ??
    "Choose an item in the catalogue to inspect its configuration.",
);
const validationIssues = computed(() => detail.value?.validation.issues ?? []);
const statusLabel = (status: number) =>
  status === 0 ? "Draft" : status === 1 ? "Active" : status === 2 ? "Suspended" : "Archived";
const statusVariant = (status: number) =>
  status === 0 ? "success" : status === 1 ? "default" : status === 2 ? "warning" : "secondary";
const isWorkflowList = (value: unknown): value is WorkflowCatalogItem[] => Array.isArray(value);

async function load() {
  loading.value = true;
  error.value = null;
  try {
    const [workflowItems, templateItems] = await Promise.all([
      apiClient.listWorkflowDefinitions(),
      apiClient.listWorkflowTemplates(),
    ]);
    if (!isWorkflowList(workflowItems))
      throw new Error("The workflow catalogue could not be loaded.");

    definitions.value = workflowItems;
    templates.value = templateItems;
    if (!selection.value) {
      const first = workflowItems[0];
      if (first) {
        await selectWorkflow(first);
      } else if (templateItems[0]) {
        selectTemplate(templateItems[0]);
      }
    }
  } catch (cause) {
    error.value =
      cause instanceof Error ? cause.message : "The workflow catalogue could not be loaded.";
  } finally {
    loading.value = false;
  }
}

async function selectWorkflow(item: WorkflowCatalogItem) {
  selection.value = { kind: "workflow", item };
  detail.value = null;
  loadingDetail.value = true;
  try {
    const response = await apiClient.getWorkflowDefinition(item.id);
    detail.value = "definition" in response ? response : null;
  } catch (cause) {
    error.value =
      cause instanceof Error ? cause.message : "The workflow definition could not be loaded.";
  } finally {
    loadingDetail.value = false;
  }
}

function selectTemplate(item: WorkflowTemplateCatalogItem) {
  selection.value = { kind: "template", item };
  detail.value = null;
}

function openWorkflow() {
  if (selection.value?.kind === "workflow") router.push(`/workflows/${selection.value.item.id}`);
}

async function addToDrafts() {
  if (selection.value?.kind !== "template") return;
  addingTemplate.value = true;
  error.value = null;
  try {
    const response = await apiClient.addWorkflowTemplateToDrafts(selection.value.item.key);
    if (!("id" in response)) throw new Error("The workflow template could not be added to drafts.");
    const workflowItems = await apiClient.listWorkflowDefinitions();
    if (!isWorkflowList(workflowItems))
      throw new Error("The workflow catalogue could not be refreshed.");
    definitions.value = workflowItems;
    const added = workflowItems.find((item) => item.id === response.id);
    if (added) await selectWorkflow(added);
  } catch (cause) {
    error.value =
      cause instanceof Error
        ? cause.message
        : "The workflow template could not be added to drafts.";
  } finally {
    addingTemplate.value = false;
  }
}

onMounted(load);
</script>

<template>
  <PageShell>
    <div class="flex flex-wrap items-start justify-between gap-4">
      <!--      <div><p class="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Automation</p>-->
      <!--        <h1 class="mt-1 text-2xl font-semibold tracking-tight">Workflows</h1>-->
      <!--        <p class="mt-1 text-sm text-muted-foreground">Browse saved workflows and reusable starting points in one-->
      <!--          catalogue.</p></div>-->
      <div class="relative">
        <Search
          class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        />
        <Input v-model="search" class="pl-9 w-68" placeholder="Search workflows and templates" />
      </div>
      <Button variant="outline" :disabled="loading" @click="load">
        <Search data-icon />
        Refresh catalogue
      </Button>
    </div>
    <Card v-if="error" class="border-destructive/40">
      <CardHeader>
        <CardTitle>Workflow catalogue unavailable</CardTitle>
        <CardDescription>{{ error }}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button size="sm" variant="outline" @click="load">Try again</Button>
      </CardContent>
    </Card>
    <div v-else class="grid min-h-[calc(100vh-10rem)] gap-0.5 xl:grid-cols-[23rem_minmax(0,1fr)]">
      <Card class="min-h-0 rounded-tr-none rounded-br-none py-0">
        <!--        <CardHeader class="gap-4">-->
        <!--          <div class="flex items-start justify-between gap-3">-->
        <!--            <div><p class="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Catalogue</p>-->
        <!--              <CardTitle class="mt-1">Workflow definitions</CardTitle>-->
        <!--            </div>-->
        <!--            <Badge variant="outline">{{ definitions.length + templates.length }}</Badge>-->
        <!--          </div>-->
        <!--        </CardHeader>-->
        <CardContent class="max-h-[calc(100vh-10rem)] space-y-5 overflow-y-auto py-6">
          <section v-if="drafts.length">
            <div class="mb-2 flex items-center gap-2 text-sm font-semibold">
              <FileStack class="size-4 text-muted-foreground" />
              Draft workflows
              <Badge variant="secondary">{{ drafts.length }}</Badge>
            </div>
            <div class="space-y-1">
              <button
                v-for="item in drafts"
                :key="item.id"
                type="button"
                class="w-full rounded-md border px-3 py-2.5 text-left transition hover:bg-accent"
                :class="
                  selection?.kind === 'workflow' && selection.item.id === item.id
                    ? 'border-primary bg-accent'
                    : 'border-transparent'
                "
                @click="selectWorkflow(item)"
              >
                <span class="block truncate text-sm font-medium">{{ item.name }}</span
                ><span class="mt-1 block truncate text-xs text-muted-foreground">{{
                  item.description || "No description"
                }}</span>
              </button>
              <p v-if="!drafts.length" class="px-3 py-2 text-sm text-muted-foreground">
                No matching drafts.
              </p>
            </div>
          </section>
          <section v-if="active.length">
            <div class="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Workflow class="size-4 text-muted-foreground" />
              Active workflows
              <Badge variant="secondary">{{ active.length }}</Badge>
            </div>
            <div class="space-y-1">
              <button
                v-for="item in active"
                :key="item.id"
                type="button"
                class="w-full rounded-md border px-3 py-2.5 text-left transition hover:bg-accent"
                :class="
                  selection?.kind === 'workflow' && selection.item.id === item.id
                    ? 'border-primary bg-accent'
                    : 'border-transparent'
                "
                @click="selectWorkflow(item)"
              >
                <span class="flex items-center justify-between gap-2"
                  ><span class="truncate text-sm font-medium">{{ item.name }}</span
                  ><Badge :variant="statusVariant(item.status)" class="shrink-0">{{
                    statusLabel(item.status)
                  }}</Badge></span
                ><span class="mt-1 block truncate text-xs text-muted-foreground">{{
                  item.description || "No description"
                }}</span>
              </button>
              <p v-if="!active.length" class="px-3 py-2 text-sm text-muted-foreground">
                No matching active workflows.
              </p>
            </div>
          </section>
          <section v-if="templates.length">
            <div class="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Boxes class="size-4 text-muted-foreground" />
              Templates
              <Badge variant="secondary">{{ filteredTemplates.length }}</Badge>
            </div>
            <div class="space-y-1">
              <button
                v-for="item in filteredTemplates"
                :key="item.key"
                type="button"
                class="w-full rounded-md border px-3 py-2.5 text-left transition hover:bg-accent"
                :class="
                  selection?.kind === 'template' && selection.item.key === item.key
                    ? 'border-primary bg-accent'
                    : 'border-transparent'
                "
                @click="selectTemplate(item)"
              >
                <span class="block truncate text-sm font-medium">{{ item.name }}</span
                ><span class="mt-1 block truncate text-xs text-muted-foreground">{{
                  item.description
                }}</span>
              </button>
              <p v-if="!filteredTemplates.length" class="px-3 py-2 text-sm text-muted-foreground">
                No matching templates.
              </p>
            </div>
          </section>
        </CardContent>
      </Card>
      <Card class="min-h-0 rounded-tl-none rounded-bl-none">
        <CardHeader>
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {{ selection?.kind === "template" ? "Template preview" : "Definition" }}
              </p>
              <CardTitle class="mt-1">{{ selectionTitle }}</CardTitle>
              <CardDescription class="mt-2 max-w-3xl text-sm leading-6">{{
                selectionDescription
              }}</CardDescription>
            </div>
            <Button v-if="selection?.kind === 'workflow'" size="sm" @click="openWorkflow">
              <ExternalLink data-icon />
              Open
            </Button>
            <Button
              v-else-if="selection?.kind === 'template'"
              size="sm"
              :disabled="addingTemplate"
              @click="addToDrafts"
            >
              <CirclePlus data-icon />
              {{ addingTemplate ? "Adding…" : "Add to drafts" }}
            </Button>
          </div>
        </CardHeader>
        <CardContent v-if="loading" class="text-sm text-muted-foreground"
          >Loading catalogue…</CardContent
        >
        <CardContent v-else-if="!selection" class="text-sm text-muted-foreground"
          >Select an item from the catalogue.
        </CardContent>
        <CardContent v-else-if="selection.kind === 'template'" class="space-y-6">
          <div class="grid gap-3 sm:grid-cols-4">
            <div
              v-for="stat in [
                { label: 'Nodes', value: selection.item.nodeCount },
                { label: 'Edges', value: selection.item.edgeCount },
                { label: 'Inputs', value: selection.item.inputCount },
                {
                  label: 'Backend',
                  value: selection.item.preferredBackend === 0 ? 'InProcess' : 'Durable',
                },
              ]"
              :key="stat.label"
              class="rounded-lg border bg-muted/30 p-4"
            >
              <p class="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {{ stat.label }}
              </p>
              <p class="mt-2 text-xl font-semibold">{{ stat.value }}</p>
            </div>
          </div>
          <div class="border-t pt-5">
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Flow shape
            </p>
            <p class="mt-2 text-sm leading-6 text-muted-foreground">
              {{ selection.item.flowShape }}
            </p>
          </div>
        </CardContent>
        <CardContent v-else class="space-y-6"
          ><p v-if="loadingDetail" class="text-sm text-muted-foreground">
            Loading definition details…
          </p>
          <template v-else-if="detail">
            <div class="flex flex-wrap gap-2">
              <Badge :variant="statusVariant(detail.definition.status)"
                >Status {{ statusLabel(detail.definition.status) }}
              </Badge>
              <Badge variant="outline"
                >Backend
                {{
                  detail.definition.runtimePolicy.preferredBackend === 0 ? "InProcess" : "Durable"
                }}
              </Badge>
              <Badge variant="outline">{{ detail.definition.graph.nodes.length }} node(s)</Badge>
              <Badge variant="outline">{{ detail.definition.graph.edges.length }} edge(s)</Badge>
            </div>
            <div class="border-t pt-5">
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Validation
              </p>
              <p v-if="!validationIssues.length" class="mt-2 text-sm text-muted-foreground">
                Definition is valid for the current component library and settings.
              </p>
              <ul v-else class="mt-3 space-y-2">
                <li
                  v-for="issue in validationIssues"
                  :key="`${issue.code}-${issue.message}`"
                  class="rounded-md border border-warning/40 bg-warning/10 px-3 py-2 text-sm"
                >
                  {{ issue.message }}
                </li>
              </ul>
            </div>
            <div class="border-t pt-5">
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Settings
              </p>
              <p class="mt-2 text-sm text-muted-foreground">
                Preferred backend is
                {{
                  detail.definition.runtimePolicy.preferredBackend === 0 ? "InProcess" : "Durable"
                }}. {{ detail.definition.inputParameters?.length ?? 0 }} input parameter(s) are
                configured.
              </p>
            </div>
          </template>
        </CardContent>
      </Card>
    </div>
  </PageShell>
</template>
