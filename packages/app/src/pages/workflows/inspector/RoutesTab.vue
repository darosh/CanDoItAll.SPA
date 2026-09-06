<script setup lang="ts">
import type { WorkflowEdge, WorkflowNode } from "@candoitall/api-client";
import { computed, reactive, watch } from "vue";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  formatEdgeKind,
  formatRouteKind,
  formatRouteOperator,
  WorkflowEdgeKind,
  WorkflowRouteKind,
  WorkflowRouteOperator,
  WorkflowRouteValueKind,
} from "../types";

// The only edge-authoring surface in the designer — CanvasWorkbench.vue has no "edge created"
// emit, so all route CRUD goes through this form rather than a canvas drag gesture.

const props = defineProps<{
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  preselectedNodeId: string | null;
}>();
const emit = defineEmits<{
  upsert: [edge: WorkflowEdge];
  remove: [edgeId: string];
  select: [nodeId: string];
}>();

const EDGE_KINDS = [
  WorkflowEdgeKind.Direct,
  WorkflowEdgeKind.Conditional,
  WorkflowEdgeKind.FanOut,
  WorkflowEdgeKind.FanIn,
];
const ROUTE_KINDS = [
  WorkflowRouteKind.Predicate,
  WorkflowRouteKind.SwitchCase,
  WorkflowRouteKind.SwitchDefault,
  WorkflowRouteKind.FanOutSelector,
];
const ROUTE_OPERATORS = Object.values(WorkflowRouteOperator);

function blankForm() {
  return reactive({
    editingId: null as string | null,
    sourceNodeId: props.preselectedNodeId ?? "",
    targetNodeId: "",
    edgeKind: WorkflowEdgeKind.Direct as number,
    label: "",
    conditionExpression: "",
    routeKind: WorkflowRouteKind.Predicate as number,
    jsonPath: "",
    operator: WorkflowRouteOperator.Exists as number,
    expectedValueJson: "",
    expectedValueKind: WorkflowRouteValueKind.String as number,
    caseSensitive: false,
    fanOutTargetIndex: 0,
  });
}

const form = blankForm();

watch(
  () => props.preselectedNodeId,
  (nodeId) => {
    if (nodeId && !form.editingId) form.sourceNodeId = nodeId;
  },
);

function nodeName(nodeId: string): string {
  return props.nodes.find((node) => node.id === nodeId)?.name ?? nodeId;
}

function loadEdge(edge: WorkflowEdge) {
  form.editingId = edge.id;
  form.sourceNodeId = edge.sourceNodeId;
  form.targetNodeId = edge.targetNodeId;
  form.edgeKind = edge.kind;
  form.label = edge.routing?.label ?? "";
  form.conditionExpression = edge.conditionExpression ?? "";
  form.routeKind = edge.routing?.kind ?? WorkflowRouteKind.Predicate;
  form.jsonPath = edge.routing?.jsonPath ?? "";
  form.operator = edge.routing?.operator ?? WorkflowRouteOperator.Exists;
  form.expectedValueJson = edge.routing?.expectedValueJson ?? "";
  form.expectedValueKind = edge.routing?.expectedValueKind ?? WorkflowRouteValueKind.String;
  form.caseSensitive = edge.routing?.caseSensitive ?? false;
  form.fanOutTargetIndex = Number(edge.routing?.fanOutTargetIndex ?? 0);
}

function resetForm() {
  Object.assign(form, blankForm());
}

const canSubmit = computed(() => !!form.sourceNodeId && !!form.targetNodeId);

function submit() {
  if (!canSubmit.value) return;
  const edge: WorkflowEdge = {
    id: form.editingId ?? crypto.randomUUID(),
    sourceNodeId: form.sourceNodeId,
    sourcePortId: null,
    targetNodeId: form.targetNodeId,
    targetPortId: null,
    kind: form.edgeKind,
    conditionExpression: form.conditionExpression,
    routing:
      form.edgeKind === WorkflowEdgeKind.Conditional
        ? {
            kind: form.routeKind,
            label: form.label,
            jsonPath: form.jsonPath,
            operator: form.operator,
            expectedValueJson: form.expectedValueJson,
            expectedValueKind: form.expectedValueKind,
            caseSensitive: form.caseSensitive,
            fanOutTargetIndex:
              form.routeKind === WorkflowRouteKind.FanOutSelector ? form.fanOutTargetIndex : null,
            routingLanguage: "jsonpath",
          }
        : {
            kind: WorkflowRouteKind.Always,
            label: form.label,
            jsonPath: "",
            operator: 0,
            expectedValueJson: "",
            expectedValueKind: 0,
            caseSensitive: false,
            fanOutTargetIndex: null,
            routingLanguage: "",
          },
  };
  emit("upsert", edge);
  resetForm();
}
</script>

<template>
  <div class="space-y-6">
    <div class="space-y-4">
      <p class="text-sm font-semibold">{{ form.editingId ? "Edit route" : "Add route" }}</p>
      <div class="grid grid-cols-2 gap-3">
        <div class="space-y-2">
          <Label for="route-source">Source node</Label>
          <Select v-model="form.sourceNodeId">
            <SelectTrigger id="route-source" class="w-full"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem v-for="node in nodes" :key="node.id" :value="node.id">{{
                node.name
              }}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div class="space-y-2">
          <Label for="route-target">Target node</Label>
          <Select v-model="form.targetNodeId">
            <SelectTrigger id="route-target" class="w-full"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem v-for="node in nodes" :key="node.id" :value="node.id">{{
                node.name
              }}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div class="space-y-2">
        <Label for="route-edge-kind">Edge kind</Label>
        <Select
          :model-value="String(form.edgeKind)"
          @update:model-value="(v) => (form.edgeKind = Number(v))"
        >
          <SelectTrigger id="route-edge-kind" class="w-full"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem v-for="kind in EDGE_KINDS" :key="kind" :value="String(kind)">{{
              formatEdgeKind(kind)
            }}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="space-y-2">
        <Label for="route-label">Label</Label>
        <Input id="route-label" v-model="form.label" />
      </div>

      <template v-if="form.edgeKind === WorkflowEdgeKind.Conditional">
        <div class="space-y-2">
          <Label for="route-mode">Route mode</Label>
          <Select
            :model-value="String(form.routeKind)"
            @update:model-value="(v) => (form.routeKind = Number(v))"
          >
            <SelectTrigger id="route-mode" class="w-full"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem v-for="kind in ROUTE_KINDS" :key="kind" :value="String(kind)">{{
                formatRouteKind(kind)
              }}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div v-if="form.routeKind === WorkflowRouteKind.Predicate" class="space-y-3">
          <div class="space-y-2">
            <Label for="route-json-path">JSON path</Label>
            <Input id="route-json-path" v-model="form.jsonPath" placeholder="$.field" />
          </div>
          <div class="space-y-2">
            <Label for="route-operator">Operator</Label>
            <Select
              :model-value="String(form.operator)"
              @update:model-value="(v) => (form.operator = Number(v))"
            >
              <SelectTrigger id="route-operator" class="w-full"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem
                  v-for="operator in ROUTE_OPERATORS"
                  :key="operator"
                  :value="String(operator)"
                  >{{ formatRouteOperator(operator) }}</SelectItem
                >
              </SelectContent>
            </Select>
          </div>
          <div class="space-y-2">
            <Label for="route-expected-value">Expected value (JSON)</Label>
            <Input id="route-expected-value" v-model="form.expectedValueJson" />
          </div>
          <div class="flex items-center gap-2">
            <Checkbox id="route-case-sensitive" v-model="form.caseSensitive" />
            <Label for="route-case-sensitive">Case sensitive</Label>
          </div>
        </div>

        <div v-else-if="form.routeKind === WorkflowRouteKind.SwitchCase" class="space-y-2">
          <Label for="route-case-value">Case value (JSON)</Label>
          <Input id="route-case-value" v-model="form.expectedValueJson" />
        </div>

        <div v-else-if="form.routeKind === WorkflowRouteKind.FanOutSelector" class="space-y-2">
          <Label for="route-fan-out-index">Fan-out target index</Label>
          <Input id="route-fan-out-index" v-model.number="form.fanOutTargetIndex" type="number" />
        </div>
      </template>

      <div class="space-y-2">
        <Label for="route-condition">Condition expression</Label>
        <Input id="route-condition" v-model="form.conditionExpression" />
      </div>

      <div class="flex gap-2">
        <Button size="sm" :disabled="!canSubmit" @click="submit">{{
          form.editingId ? "Update route" : "Add route"
        }}</Button>
        <Button v-if="form.editingId" size="sm" variant="outline" @click="resetForm">Cancel</Button>
      </div>
    </div>

    <div class="space-y-2 border-t pt-4">
      <p class="text-sm font-semibold">Existing routes</p>
      <ul class="space-y-1">
        <li
          v-for="edge in edges"
          :key="edge.id"
          class="flex items-center justify-between gap-2 rounded-md border px-3 py-2 text-sm"
        >
          <span class="min-w-0 flex-1 truncate">
            <button
              type="button"
              class="hover:underline"
              @click="emit('select', edge.sourceNodeId)"
            >
              {{ nodeName(edge.sourceNodeId) }}
            </button>
            →
            <button
              type="button"
              class="hover:underline"
              @click="emit('select', edge.targetNodeId)"
            >
              {{ nodeName(edge.targetNodeId) }}
            </button>
            <Badge variant="outline" class="ml-2">{{ formatEdgeKind(edge.kind) }}</Badge>
          </span>
          <span class="flex shrink-0 gap-2">
            <Button size="sm" variant="outline" @click="loadEdge(edge)">Edit</Button>
            <Button size="sm" variant="outline" @click="emit('remove', edge.id)">Remove</Button>
          </span>
        </li>
        <li v-if="!edges.length" class="px-3 py-2 text-sm text-muted-foreground">No routes yet.</li>
      </ul>
    </div>
  </div>
</template>
