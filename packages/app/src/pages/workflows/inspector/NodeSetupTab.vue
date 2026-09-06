<script setup lang="ts">
import type {
  WorkflowExecutorDescriptor,
  WorkflowNode,
  WorkflowValueShape,
} from "@candoitall/api-client";
import { computed, onMounted, ref } from "vue";
import { Badge } from "@/components/ui/badge";
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
import { Textarea } from "@/components/ui/textarea";
import PromptGalleryPickerButton from "../PromptGalleryPickerButton.vue";
import ProviderModelSelector from "../ProviderModelSelector.vue";
import { listWorkflowExecutorCatalog } from "../api";
import type { PromptGallerySelection } from "../types";
import {
  formatExecutorAvailability,
  formatExternalRequestKind,
  formatNodeKind,
  formatSideEffectKind,
  formatValueShapeKind,
  WorkflowExternalRequestKind,
  WorkflowNodeKind,
  WorkflowValueShapeKind,
} from "../types";
import ExecutorSettingsForm from "./ExecutorSettingsForm.vue";

const props = defineProps<{ node: WorkflowNode | null }>();
const emit = defineEmits<{ update: [node: WorkflowNode] }>();

const executors = ref<WorkflowExecutorDescriptor[]>([]);
const executorsError = ref<string | null>(null);

onMounted(async () => {
  try {
    executors.value = await listWorkflowExecutorCatalog();
  } catch (e) {
    executorsError.value = e instanceof Error ? e.message : "Executors could not be loaded.";
  }
});

const selectedExecutor = computed(
  () => executors.value.find((executor) => executor.id === props.node?.settings.executorId) ?? null,
);

function patchNode(partial: Partial<WorkflowNode>) {
  if (!props.node) return;
  emit("update", { ...props.node, ...partial });
}

function patchSettings(partial: Partial<WorkflowNode["settings"]>) {
  if (!props.node) return;
  emit("update", { ...props.node, settings: { ...props.node.settings, ...partial } });
}

function shapeOrDefault(shape: WorkflowValueShape | null | undefined): WorkflowValueShape {
  return shape ?? { kind: WorkflowValueShapeKind.Text, schemaJson: "", description: "" };
}

function patchInputShape(partial: Partial<WorkflowValueShape>) {
  patchSettings({ inputShape: { ...shapeOrDefault(props.node?.settings.inputShape), ...partial } });
}

function patchResultShape(partial: Partial<WorkflowValueShape>) {
  patchSettings({
    resultShape: { ...shapeOrDefault(props.node?.settings.resultShape), ...partial },
  });
}

function onPromptSelected(selection: PromptGallerySelection) {
  patchSettings({ instructions: selection.instructions, componentId: selection.artifactId });
}

const llmProviderProfileId = computed<string | null>({
  get: () => props.node?.settings.providerProfileId ?? null,
  set: (value) => patchSettings({ providerProfileId: value }),
});

const llmModel = computed<string>({
  get: () => props.node?.settings.model ?? "",
  set: (value) => patchSettings({ model: value }),
});

const executionPolicy = computed(
  () =>
    props.node?.settings.executionPolicy ?? {
      timeoutSeconds: null,
      maxRetryAttempts: null,
      retryDelayMilliseconds: null,
      captureOutputArtifact: false,
    },
);

function patchExecutionPolicy(partial: Partial<typeof executionPolicy.value>) {
  patchSettings({ executionPolicy: { ...executionPolicy.value, ...partial } });
}
</script>

<template>
  <p v-if="!node" class="text-sm text-muted-foreground">
    Select a node on the canvas to edit its settings.
  </p>
  <div v-else class="space-y-6">
    <div class="space-y-2">
      <Label>Id</Label>
      <p class="font-mono text-xs text-muted-foreground">{{ node.id }}</p>
    </div>
    <div class="space-y-2">
      <Label for="node-name">Name</Label>
      <Input
        id="node-name"
        :model-value="node.name"
        @update:model-value="(v) => patchNode({ name: String(v) })"
      />
    </div>
    <div class="space-y-2">
      <Label>Kind</Label>
      <div>
        <Badge variant="outline">{{ formatNodeKind(node.kind) }}</Badge>
      </div>
    </div>

    <div class="space-y-2 border-t pt-4">
      <Label for="node-instructions">Instructions</Label>
      <Textarea
        id="node-instructions"
        :model-value="node.settings.instructions"
        rows="5"
        :readonly="node.kind === WorkflowNodeKind.LlmCall && !!node.settings.componentId"
        @update:model-value="(v) => patchSettings({ instructions: String(v) })"
      />
    </div>

    <template v-if="node.kind === WorkflowNodeKind.LlmCall">
      <div class="space-y-2 border-t pt-4">
        <Label>Prompt</Label>
        <PromptGalleryPickerButton @select="onPromptSelected" />
      </div>
      <div class="space-y-2">
        <Label>Provider / model</Label>
        <ProviderModelSelector
          v-model:provider-profile-id="llmProviderProfileId"
          v-model:model="llmModel"
        />
      </div>
    </template>

    <template v-else-if="node.kind === WorkflowNodeKind.Executor">
      <div class="space-y-2 border-t pt-4">
        <Label for="node-executor">Executor</Label>
        <p v-if="executorsError" class="text-sm text-destructive">{{ executorsError }}</p>
        <Select
          :model-value="node.settings.executorId ?? ''"
          @update:model-value="(v) => patchSettings({ executorId: String(v) || null })"
        >
          <SelectTrigger class="w-full"
            ><SelectValue placeholder="Choose an executor"
          /></SelectTrigger>
          <SelectContent>
            <SelectItem v-for="executor in executors" :key="executor.id" :value="executor.id"
              >{{ executor.name
              }}<template v-if="!executor.isImplemented"> (Planned)</template></SelectItem
            >
          </SelectContent>
        </Select>
      </div>
      <div v-if="selectedExecutor" class="flex flex-wrap gap-2">
        <Badge v-if="selectedExecutor.availability" variant="outline">{{
          formatExecutorAvailability(selectedExecutor.availability.kind)
        }}</Badge>
        <Badge v-if="selectedExecutor.sideEffects" variant="outline">{{
          formatSideEffectKind(selectedExecutor.sideEffects.kind)
        }}</Badge>
        <Badge v-if="selectedExecutor.sideEffects?.supportsPreview" variant="outline"
          >Supports preview</Badge
        >
        <Badge v-if="selectedExecutor.sideEffects?.supportsDryRun" variant="outline"
          >Supports dry-run</Badge
        >
        <Badge v-if="selectedExecutor.sideEffects?.allowsIdempotentRetry" variant="outline"
          >Retry-safe</Badge
        >
      </div>
      <div v-if="selectedExecutor" class="grid grid-cols-2 gap-3">
        <div class="space-y-2">
          <Label for="policy-timeout">Timeout (s)</Label>
          <Input
            id="policy-timeout"
            type="number"
            :model-value="String(executionPolicy.timeoutSeconds ?? '')"
            @update:model-value="
              (v) => patchExecutionPolicy({ timeoutSeconds: v === '' ? null : Number(v) })
            "
          />
        </div>
        <div class="space-y-2">
          <Label for="policy-retries">Max retries</Label>
          <Input
            id="policy-retries"
            type="number"
            :model-value="String(executionPolicy.maxRetryAttempts ?? '')"
            @update:model-value="
              (v) => patchExecutionPolicy({ maxRetryAttempts: v === '' ? null : Number(v) })
            "
          />
        </div>
        <div class="space-y-2">
          <Label for="policy-retry-delay">Retry delay (ms)</Label>
          <Input
            id="policy-retry-delay"
            type="number"
            :model-value="String(executionPolicy.retryDelayMilliseconds ?? '')"
            @update:model-value="
              (v) => patchExecutionPolicy({ retryDelayMilliseconds: v === '' ? null : Number(v) })
            "
          />
        </div>
        <div class="flex items-center gap-2 pt-6">
          <Checkbox
            id="policy-capture-artifact"
            :model-value="executionPolicy.captureOutputArtifact"
            @update:model-value="(v) => patchExecutionPolicy({ captureOutputArtifact: !!v })"
          />
          <Label for="policy-capture-artifact">Capture output as artifact</Label>
        </div>
      </div>
      <div v-if="selectedExecutor" class="border-t pt-4">
        <ExecutorSettingsForm
          :schema="selectedExecutor.configurationSchema"
          :presentation-mode="selectedExecutor.settingsPresentationMode"
          :model-value="node.settings.executorSettingsJson ?? ''"
          @update:model-value="(v) => patchSettings({ executorSettingsJson: v })"
        />
      </div>
    </template>

    <template v-else-if="node.kind === WorkflowNodeKind.HumanInput">
      <div class="space-y-2 border-t pt-4">
        <Label for="node-request-kind">Request kind</Label>
        <Select
          :model-value="
            String(node.settings.externalRequestKind ?? WorkflowExternalRequestKind.HumanInput)
          "
          @update:model-value="(v) => patchSettings({ externalRequestKind: Number(v) })"
        >
          <SelectTrigger class="w-full"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem
              v-for="kind in [
                WorkflowExternalRequestKind.HumanInput,
                WorkflowExternalRequestKind.Approval,
                WorkflowExternalRequestKind.ToolApproval,
              ]"
              :key="kind"
              :value="String(kind)"
              >{{ formatExternalRequestKind(kind) }}</SelectItem
            >
          </SelectContent>
        </Select>
      </div>
    </template>

    <template v-else-if="node.kind === WorkflowNodeKind.AgentStep">
      <div class="space-y-2 border-t pt-4">
        <Label for="node-agent-id">Agent id</Label>
        <Input
          id="node-agent-id"
          :model-value="node.settings.agentId ?? ''"
          @update:model-value="(v) => patchSettings({ agentId: String(v) || null })"
        />
      </div>
    </template>

    <template v-else-if="node.kind === WorkflowNodeKind.Subworkflow">
      <div class="space-y-2 border-t pt-4">
        <Label for="node-subworkflow-id">Subworkflow id</Label>
        <Input
          id="node-subworkflow-id"
          :model-value="node.settings.subworkflowId ?? ''"
          @update:model-value="(v) => patchSettings({ subworkflowId: String(v) || null })"
        />
      </div>
    </template>

    <div class="grid grid-cols-1 gap-4 border-t pt-4 sm:grid-cols-2">
      <div class="space-y-2">
        <Label for="input-shape-kind">Input shape</Label>
        <Select
          :model-value="String(shapeOrDefault(node.settings.inputShape).kind)"
          @update:model-value="(v) => patchInputShape({ kind: Number(v) })"
        >
          <SelectTrigger class="w-full"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem v-for="kind in [0, 1, 2, 3, 4, 5, 6]" :key="kind" :value="String(kind)">{{
              formatValueShapeKind(kind)
            }}</SelectItem>
          </SelectContent>
        </Select>
        <Input
          :model-value="shapeOrDefault(node.settings.inputShape).description"
          placeholder="Description"
          @update:model-value="(v) => patchInputShape({ description: String(v) })"
        />
      </div>
      <div class="space-y-2">
        <Label for="result-shape-kind">Result shape</Label>
        <Select
          :model-value="String(shapeOrDefault(node.settings.resultShape).kind)"
          @update:model-value="(v) => patchResultShape({ kind: Number(v) })"
        >
          <SelectTrigger class="w-full"><SelectValue /></SelectTrigger>
          <SelectContent>
            <SelectItem v-for="kind in [0, 1, 2, 3, 4, 5, 6]" :key="kind" :value="String(kind)">{{
              formatValueShapeKind(kind)
            }}</SelectItem>
          </SelectContent>
        </Select>
        <Input
          :model-value="shapeOrDefault(node.settings.resultShape).description"
          placeholder="Description"
          @update:model-value="(v) => patchResultShape({ description: String(v) })"
        />
      </div>
    </div>
  </div>
</template>
