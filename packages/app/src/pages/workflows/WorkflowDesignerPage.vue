<script setup lang="ts">
import type {
  LlmCallComponent,
  WorkflowDefinition,
  WorkflowEdge,
  WorkflowNode,
  WorkflowNodeSettings,
} from "@candoitall/api-client";
import { AppWindow, Layers, PanelsTopLeft } from "@lucide/vue";
import { computed, reactive, ref } from "vue";
import { useRoute } from "vue-router";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CanvasWorkbench from "@/lib/canvas-workbench/CanvasWorkbench.vue";
import OverlayWindow from "@/lib/canvas-workbench/OverlayWindow.vue";
import type {
  CanvasWorkbenchContextActionRequest,
  CanvasWorkbenchCreateActionRequest,
  CanvasWorkbenchNodesMovedEventArgs,
  CanvasWorkbenchSelectionChangedEventArgs,
  CanvasWorkbenchSurface,
  CanvasWorkbenchUiState,
} from "@/lib/canvas-workbench/types";
import SubNavTabs from "@/components/SubNavTabs.vue";
import { workflowDetailTabs } from "@/lib/subNavTabs";

import {
  duplicateNode as duplicateNodeInGraph,
  removeEdge as removeEdgeFromGraph,
  removeNode as removeNodeFromGraph,
  applyNodePositions,
  buildSurface,
  defaultUiState,
  upsertEdge as upsertEdgeInGraph,
  upsertNode as upsertNodeInGraph,
} from "./adapter";
import { QUICK_CREATE_NODE_KINDS } from "./actionCatalog";
import {
  friendlyErrorMessage,
  getWorkflowDefinition,
  saveWorkflowDefinition,
  toDraftDefinition,
  validateDraftWorkflowDefinition,
  validateSavedWorkflowDefinition,
} from "./api";
import DefinitionTab from "./inspector/DefinitionTab.vue";
import NodeSetupTab from "./inspector/NodeSetupTab.vue";
import RoutesTab from "./inspector/RoutesTab.vue";
import PreviewTab from "./inspector/PreviewTab.vue";
import ToolboxWindow from "./ToolboxWindow.vue";
import SelectionWindow from "./SelectionWindow.vue";
import ComponentsWindow from "./ComponentsWindow.vue";
import { WorkflowNodeKind } from "./types";
import type { WorkflowValidationResult } from "@candoitall/api-client";

const route = useRoute();
const workflowId = computed(() => String(route.params.workflowId));

type DraftShape = Pick<
  WorkflowDefinition,
  "name" | "description" | "status" | "graph" | "runtimePolicy" | "inputParameters"
>;

const loading = ref(true);
const loadError = ref<string | null>(null);
const loaded = ref<WorkflowDefinition | null>(null);
const draft = reactive<DraftShape>({
  name: "",
  description: "",
  status: 0,
  graph: { startNodeId: "", nodes: [], edges: [] },
  runtimePolicy: {
    preferredBackend: 0,
    allowInProcessPreviewRuns: true,
    requireDurableProductionRuns: false,
    exposeAzureFunctionsStatusEndpoint: false,
    exposeAzureFunctionsMcpTool: false,
  },
  inputParameters: [],
});
const expectedVersionId = ref<string | null>(null);
const validation = ref<WorkflowValidationResult | null>(null);
const isDirty = ref(false);
const isBusy = ref(false);
const feedback = ref<{ type: "success" | "error"; message: string } | null>(null);

const selectedNodeId = ref<string | null>(null);
const activeInspectorTab = ref("definition");
const previewRequestSeq = ref(0);

const toolboxOpen = ref(false);
const selectionWindowOpen = ref(false);
const componentsWindowOpen = ref(false);

const uiState = ref<CanvasWorkbenchUiState>(defaultUiState());
const surface = computed<CanvasWorkbenchSurface>(() => buildSurface(draft.graph, uiState.value));

const selectedNode = computed<WorkflowNode | null>(
  () => draft.graph.nodes.find((node) => node.id === selectedNodeId.value) ?? null,
);

async function load() {
  loading.value = true;
  loadError.value = null;
  try {
    const detail = await getWorkflowDefinition(workflowId.value);
    loaded.value = detail.definition;
    validation.value = detail.validation;
    draft.name = detail.definition.name;
    draft.description = detail.definition.description;
    draft.status = detail.definition.status;
    draft.graph = detail.definition.graph;
    draft.runtimePolicy = detail.definition.runtimePolicy;
    draft.inputParameters = detail.definition.inputParameters ?? [];
    expectedVersionId.value = detail.definition.versionId;
    isDirty.value = false;
    selectedNodeId.value = null;
  } catch (e) {
    loadError.value = e instanceof Error ? e.message : "The workflow could not be loaded.";
  } finally {
    loading.value = false;
  }
}

async function newDraft() {
  if (isDirty.value && !window.confirm("Discard unsaved changes and reload?")) return;
  await load();
}

async function save() {
  if (isBusy.value || !loaded.value) return;
  isBusy.value = true;
  feedback.value = null;
  try {
    const saved = await saveWorkflowDefinition({
      id: loaded.value.id,
      expectedVersionId: expectedVersionId.value,
      name: draft.name,
      description: draft.description,
      status: draft.status,
      graph: draft.graph,
      runtimePolicy: draft.runtimePolicy,
      inputParameters: draft.inputParameters,
    });
    loaded.value = saved;
    expectedVersionId.value = saved.versionId;
    isDirty.value = false;
    feedback.value = { type: "success", message: "Saved." };
  } catch (e) {
    feedback.value = {
      type: "error",
      message: friendlyErrorMessage(e, "The workflow could not be saved."),
    };
  } finally {
    isBusy.value = false;
  }
}

async function runValidate() {
  if (!loaded.value) return;
  isBusy.value = true;
  feedback.value = null;
  try {
    validation.value = isDirty.value
      ? await validateDraftWorkflowDefinition(toDraftDefinition(draft, loaded.value))
      : await validateSavedWorkflowDefinition(workflowId.value);
    activeInspectorTab.value = "preview";
  } catch (e) {
    feedback.value = { type: "error", message: friendlyErrorMessage(e, "Validation failed.") };
  } finally {
    isBusy.value = false;
  }
}

function runPreview() {
  activeInspectorTab.value = "preview";
  previewRequestSeq.value += 1;
}

function selectNode(nodeId: string | null) {
  selectedNodeId.value = nodeId;
  if (nodeId) activeInspectorTab.value = "node-setup";
}

function onSelectionChanged(args: CanvasWorkbenchSelectionChangedEventArgs) {
  selectedNodeId.value = args.primaryNodeId;
}

function onNodesMoved(args: CanvasWorkbenchNodesMovedEventArgs) {
  draft.graph = applyNodePositions(draft.graph, args.positions);
  isDirty.value = true;
}

function defaultNodeSettings(): WorkflowNodeSettings {
  return {
    componentId: null,
    agentId: null,
    subworkflowId: null,
    externalRequestKind: null,
    instructions: "",
    inputShape: null,
    resultShape: null,
    providerProfileId: null,
    model: "",
    executorId: null,
    executorSettingsJson: "",
    executionPolicy: null,
  };
}

function createNode(
  kind: number,
  name: string,
  position: { x: number; y: number },
  settingsOverrides?: Partial<WorkflowNodeSettings>,
) {
  const node: WorkflowNode = {
    id: crypto.randomUUID(),
    kind,
    name,
    ports: [],
    settings: { ...defaultNodeSettings(), ...settingsOverrides },
    canvasX: position.x,
    canvasY: position.y,
  };
  draft.graph = upsertNodeInGraph(draft.graph, node);
  isDirty.value = true;
  selectNode(node.id);
}

// Floating windows (toolbox/components) have no canvas click position to place a new node at —
// fan new nodes out from a base point so repeated adds don't stack exactly on top of each other.
function nextFloatingWindowPosition(): { x: number; y: number } {
  const index = draft.graph.nodes.length;
  return { x: 480 + (index % 5) * 48, y: 160 + Math.floor(index / 5) * 48 };
}

function onCreateAction(request: CanvasWorkbenchCreateActionRequest) {
  const kind = QUICK_CREATE_NODE_KINDS[request.actionId];
  if (kind === undefined) {
    console.warn("[workflows] create action is not wired yet", request);
    return;
  }
  createNode(kind, request.title || "New node", { x: request.x, y: request.y });
}

function onAddNodeFromToolbox(kind: number) {
  createNode(kind, "New node", nextFloatingWindowPosition());
}

function onAddExecutorNode(payload: { executorId: string; name: string }) {
  createNode(WorkflowNodeKind.Executor, payload.name, nextFloatingWindowPosition(), {
    executorId: payload.executorId,
  });
}

function onPlaceComponent(component: LlmCallComponent) {
  createNode(WorkflowNodeKind.LlmCall, component.name, nextFloatingWindowPosition(), {
    componentId: component.id,
    instructions: component.instructions,
    providerProfileId: component.providerProfileId,
    model: component.model,
    inputShape: component.inputShape,
    resultShape: component.resultShape,
  });
}

function copyToClipboard(text: string) {
  void navigator.clipboard?.writeText(text);
}

function onContextAction(request: CanvasWorkbenchContextActionRequest) {
  const { nodeId, actionId } = request;
  if (!nodeId) return;
  switch (actionId) {
    case "edit":
      selectNode(nodeId);
      return;
    case "copy-id":
      copyToClipboard(nodeId);
      return;
    case "add-route":
      selectNode(nodeId);
      activeInspectorTab.value = "routes";
      return;
    case "duplicate":
      draft.graph = duplicateNodeInGraph(draft.graph, nodeId);
      isDirty.value = true;
      return;
    case "delete":
      if (!window.confirm("Delete this node?")) return;
      draft.graph = removeNodeFromGraph(draft.graph, nodeId);
      if (selectedNodeId.value === nodeId) selectedNodeId.value = null;
      isDirty.value = true;
      return;
    default:
      console.warn("[workflows] context action is not wired yet", request);
  }
}

function upsertNode(node: WorkflowNode) {
  draft.graph = upsertNodeInGraph(draft.graph, node);
  isDirty.value = true;
}

function upsertEdge(edge: WorkflowEdge) {
  draft.graph = upsertEdgeInGraph(draft.graph, edge);
  isDirty.value = true;
}

function removeEdge(edgeId: string) {
  draft.graph = removeEdgeFromGraph(draft.graph, edgeId);
  isDirty.value = true;
}

function selectNodeOrEdge(nodeId?: string | null) {
  if (nodeId) selectNode(nodeId);
}

load();
</script>

<template>
  <div class="flex h-full min-h-[640px] flex-col">
    <SubNavTabs
      :tabs="workflowDetailTabs(workflowId)"
      selected="design"
      :entity-title="draft.name"
    />
    <p v-if="loading" class="p-4 text-sm text-muted-foreground">Loading&hellip;</p>
    <p v-else-if="loadError" class="p-4 text-sm text-destructive">{{ loadError }}</p>
    <template v-else>
      <div class="flex min-h-0 flex-1">
        <CanvasWorkbench
          :surface="surface"
          class="min-h-0 flex-1"
          @selection-changed="onSelectionChanged"
          @nodes-moved="onNodesMoved"
          @context-action="onContextAction"
          @create-action="onCreateAction"
          @node-opened="selectNode"
        >
          <template #toolbar-actions>
            <Button size="sm" variant="outline" :disabled="isBusy" @click="newDraft"
              >New draft</Button
            >
            <Button size="sm" variant="outline" :disabled="isBusy" @click="runValidate"
              >Validate</Button
            >
            <Button size="sm" variant="outline" :disabled="isBusy" @click="runPreview"
              >Run preview</Button
            >
            <Button size="sm" :disabled="isBusy || !isDirty" @click="save">Save</Button>
            <Badge variant="outline">{{ draft.graph.nodes.length }} node(s)</Badge>
            <Badge variant="outline">{{ draft.graph.edges.length }} edge(s)</Badge>
            <Badge v-if="isDirty" variant="warning">Unsaved changes</Badge>
            <Badge v-if="validation && validation.issues.length" variant="destructive"
              >{{ validation.issues.length }} issue(s)</Badge
            >
            <Badge v-else-if="validation" variant="success">Valid</Badge>
            <span
              v-if="feedback"
              :class="feedback.type === 'error' ? 'text-destructive' : 'text-success'"
              class="ml-2 whitespace-nowrap text-sm"
              >{{ feedback.message }}</span
            >
            <button
              type="button"
              class="cw-toolbar-action cw-toolbar-action--icon"
              aria-label="Toggle nodes and executors toolbox"
              title="Nodes and executors"
              @click="toolboxOpen = !toolboxOpen"
            >
              <PanelsTopLeft :size="18" />
            </button>
            <button
              type="button"
              class="cw-toolbar-action cw-toolbar-action--icon"
              aria-label="Toggle workflow nodes list"
              title="Workflow nodes"
              @click="selectionWindowOpen = !selectionWindowOpen"
            >
              <Layers :size="18" />
            </button>
            <button
              type="button"
              class="cw-toolbar-action cw-toolbar-action--icon"
              aria-label="Toggle prepared LLM calls"
              title="Prepared calls"
              @click="componentsWindowOpen = !componentsWindowOpen"
            >
              <AppWindow :size="18" />
            </button>
          </template>
          <template #stage-overlays>
            <OverlayWindow
              v-if="toolboxOpen"
              window-id="workflow-toolbox"
              kicker="Workflow"
              title="Nodes and executors"
              placement="top-left"
              @close="toolboxOpen = false"
            >
              <ToolboxWindow
                @add-node="onAddNodeFromToolbox"
                @add-executor-node="onAddExecutorNode"
              />
            </OverlayWindow>
            <OverlayWindow
              v-if="selectionWindowOpen"
              window-id="workflow-selection"
              kicker="Selection"
              title="Workflow nodes"
              @close="selectionWindowOpen = false"
            >
              <SelectionWindow :nodes="draft.graph.nodes" @select="selectNode" />
            </OverlayWindow>
            <OverlayWindow
              v-if="componentsWindowOpen"
              window-id="workflow-components"
              kicker="LLM components"
              title="Prepared calls"
              @close="componentsWindowOpen = false"
            >
              <ComponentsWindow @place="onPlaceComponent" />
            </OverlayWindow>
          </template>
        </CanvasWorkbench>
        <div class="flex w-[26rem] shrink-0 flex-col border-l border-border">
          <Tabs v-model="activeInspectorTab" class="flex min-h-0 flex-1 flex-col">
            <TabsList class="w-full">
              <TabsTrigger value="definition">Definition</TabsTrigger>
              <TabsTrigger value="node-setup">Node setup</TabsTrigger>
              <TabsTrigger value="routes">Routes</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="definition" class="min-h-0 flex-1 overflow-y-auto p-4">
              <DefinitionTab
                v-model:name="draft.name"
                v-model:description="draft.description"
                v-model:runtime-policy="draft.runtimePolicy"
                :status="draft.status"
                @dirty="isDirty = true"
              />
            </TabsContent>
            <TabsContent value="node-setup" class="min-h-0 flex-1 overflow-y-auto p-4">
              <NodeSetupTab :node="selectedNode" @update="upsertNode" />
            </TabsContent>
            <TabsContent value="routes" class="min-h-0 flex-1 overflow-y-auto p-4">
              <RoutesTab
                :nodes="draft.graph.nodes"
                :edges="draft.graph.edges"
                :preselected-node-id="selectedNodeId"
                @upsert="upsertEdge"
                @remove="removeEdge"
                @select="selectNodeOrEdge"
              />
            </TabsContent>
            <TabsContent value="preview" class="min-h-0 flex-1 overflow-y-auto p-4">
              <PreviewTab
                :workflow-id="workflowId"
                :draft="draft"
                :loaded="loaded"
                :is-dirty="isDirty"
                :validation="validation"
                :run-request-seq="previewRequestSeq"
                @select-node="selectNode"
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </template>
  </div>
</template>
