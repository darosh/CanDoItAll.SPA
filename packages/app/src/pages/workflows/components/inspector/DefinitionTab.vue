<script setup lang="ts">
import type { WorkflowRuntimePolicy, WorkflowValidationResult } from "@candoitall/api-client";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { formatLifecycleStatus, WorkflowRuntimeBackendKind } from "../../types";

const name = defineModel<string>("name", { required: true });
const description = defineModel<string>("description", { required: true });
const runtimePolicy = defineModel<WorkflowRuntimePolicy>("runtimePolicy", { required: true });

defineProps<{
  status: number;
  nodeCount: number;
  edgeCount: number;
  isDirty: boolean;
  validation: WorkflowValidationResult | null;
}>();
const emit = defineEmits<{ dirty: [] }>();

function onBackendChange(value: unknown) {
  runtimePolicy.value = { ...runtimePolicy.value, preferredBackend: Number(value) };
  emit("dirty");
}
</script>

<template>
  <div class="space-y-6">
    <div class="space-y-2">
      <Label>Graph</Label>
      <div class="flex flex-wrap items-center gap-2">
        <Badge variant="outline">{{ nodeCount }} node(s)</Badge>
        <Badge variant="outline">{{ edgeCount }} edge(s)</Badge>
        <Badge v-if="isDirty" variant="warning">Unsaved changes</Badge>
        <Badge v-if="validation && validation.issues.length" variant="destructive"
          >{{ validation.issues.length }} issue(s)</Badge
        >
        <Badge v-else-if="validation" variant="success">Valid</Badge>
      </div>
    </div>
    <div class="space-y-2">
      <Label for="workflow-name">Name</Label>
      <Input id="workflow-name" v-model="name" @update:model-value="emit('dirty')" />
    </div>
    <div class="space-y-2">
      <Label for="workflow-description">Description</Label>
      <Textarea
        id="workflow-description"
        v-model="description"
        rows="4"
        @update:model-value="emit('dirty')"
      />
    </div>
    <div class="space-y-2">
      <Label>Status</Label>
      <div>
        <Badge variant="outline">{{ formatLifecycleStatus(status) }}</Badge>
      </div>
    </div>
    <div class="space-y-2">
      <Label>Runtime backend</Label>
      <RadioGroup
        :model-value="String(runtimePolicy.preferredBackend)"
        @update:model-value="onBackendChange"
      >
        <div class="flex items-center gap-2">
          <RadioGroupItem
            id="backend-inprocess"
            :value="String(WorkflowRuntimeBackendKind.InProcess)"
          />
          <Label for="backend-inprocess">InProcess</Label>
        </div>
        <div class="flex items-center gap-2 opacity-50">
          <RadioGroupItem
            id="backend-durable"
            :value="String(WorkflowRuntimeBackendKind.DurableTask)"
            disabled
          />
          <Label for="backend-durable">DurableTask (Planned)</Label>
        </div>
        <div class="flex items-center gap-2 opacity-50">
          <RadioGroupItem
            id="backend-azure"
            :value="String(WorkflowRuntimeBackendKind.AzureFunctions)"
            disabled
          />
          <Label for="backend-azure">AzureFunctions (Planned)</Label>
        </div>
      </RadioGroup>
    </div>
  </div>
</template>
