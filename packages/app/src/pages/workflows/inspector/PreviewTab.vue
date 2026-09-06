<script setup lang="ts">
import type {
  WorkflowDefinition,
  WorkflowTestRunResult,
  WorkflowValidationResult,
} from "@candoitall/api-client";
import { ref, watch } from "vue";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { friendlyErrorMessage, runWorkflowTest, toDraftDefinition } from "../api";

type DraftShape = Pick<
  WorkflowDefinition,
  "name" | "description" | "status" | "graph" | "runtimePolicy" | "inputParameters"
>;

const props = defineProps<{
  workflowId: string;
  draft: DraftShape;
  loaded: WorkflowDefinition | null;
  isDirty: boolean;
  validation: WorkflowValidationResult | null;
  runRequestSeq: number;
}>();
const emit = defineEmits<{ "select-node": [nodeId: string] }>();

const inputJson = ref("{}");
const running = ref(false);
const error = ref<string | null>(null);
const result = ref<WorkflowTestRunResult | null>(null);

async function runTest() {
  if (!props.loaded || running.value) return;
  running.value = true;
  error.value = null;
  try {
    // HTTP 200 (succeeded) and 400 (failed validation/run) both carry the same
    // WorkflowTestRunResult body — only a thrown exception is a real transport error.
    result.value = await runWorkflowTest({
      workflowId: props.loaded.id,
      versionId: null,
      draftDefinition: toDraftDefinition(props.draft, props.loaded),
      inputJson: inputJson.value,
      requestedBackend: null,
      validateOnly: false,
    });
  } catch (e) {
    error.value = friendlyErrorMessage(e, "The preview run could not be started.");
  } finally {
    running.value = false;
  }
}

watch(
  () => props.runRequestSeq,
  (seq) => {
    if (seq > 0) runTest();
  },
);
</script>

<template>
  <div class="space-y-6">
    <div class="space-y-2">
      <p class="text-sm font-semibold">Validation</p>
      <p v-if="!validation || !validation.issues.length" class="text-sm text-muted-foreground">
        Definition is valid for the current component library and settings.
      </p>
      <ul v-else class="space-y-2">
        <li
          v-for="(issue, index) in validation.issues"
          :key="`${issue.code}-${index}`"
          class="rounded-md border border-warning/40 bg-warning/10 px-3 py-2 text-sm"
        >
          <button
            v-if="issue.nodeId"
            type="button"
            class="text-left hover:underline"
            @click="emit('select-node', String(issue.nodeId))"
          >
            {{ issue.message }}
          </button>
          <span v-else>{{ issue.message }}</span>
        </li>
      </ul>
    </div>

    <div class="space-y-2 border-t pt-4">
      <p class="text-sm font-semibold">Run preview</p>
      <label class="block space-y-2 text-sm">
        <span class="text-muted-foreground">Input JSON</span>
        <Textarea v-model="inputJson" rows="4" class="font-mono text-xs" />
      </label>
      <Button size="sm" :disabled="running" @click="runTest">{{
        running ? "Running…" : "Run"
      }}</Button>
      <p v-if="error" class="text-sm text-destructive">{{ error }}</p>

      <div v-if="result" class="space-y-3 rounded-md border p-3">
        <Badge :variant="result.succeeded ? 'success' : 'destructive'">{{
          result.succeeded ? "Succeeded" : "Failed"
        }}</Badge>
        <p v-if="result.errorMessage" class="text-sm text-destructive">{{ result.errorMessage }}</p>
        <div v-if="result.validation.issues.length" class="space-y-1">
          <p class="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Validation
          </p>
          <p v-for="(issue, index) in result.validation.issues" :key="index" class="text-sm">
            {{ issue.message }}
          </p>
        </div>
        <div v-if="result.events.length" class="space-y-1">
          <p class="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Events</p>
          <p
            v-for="(event, index) in result.events"
            :key="index"
            class="text-xs text-muted-foreground"
          >
            {{ event.kind }} — {{ event.message }}
          </p>
        </div>
        <div v-if="result.artifacts.length" class="space-y-1">
          <p class="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Artifacts
          </p>
          <p
            v-for="artifact in result.artifacts"
            :key="artifact.id"
            class="text-xs text-muted-foreground"
          >
            {{ artifact.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
