<script setup lang="ts">
import type {
  ProcessDefinitionStepDraftProjection,
  ProcessDefinitionStepEditorProjection,
} from "@candoitall/api-client";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

// import PageHeader from "@/components/PageHeader.vue";
import PageShell from "@/components/PageShell.vue";
import SubNavTabs from "@/components/SubNavTabs.vue";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getProcessDefinition, getProcessDefinitionSteps } from "./api";
import {
  formatStepKind,
  lintSeverityLabel,
  lintSeverityTone,
  PROCESS_ENTITY_BREADCRUMB_PATTERN,
  processDetailTabs,
} from "./types";

const route = useRoute();
const processId = route.params.processId as string;

const loading = ref(true);
const loadError = ref<string | null>(null);
const stepEditor = ref<ProcessDefinitionStepEditorProjection | null>(null);
const selectedStepKey = ref<string | null>(null);
const definitionName = ref<string | null>(null);

async function load() {
  loading.value = true;
  loadError.value = null;
  try {
    const [steps, definition] = await Promise.all([
      getProcessDefinitionSteps(processId),
      getProcessDefinition(processId),
    ]);
    stepEditor.value = steps;
    selectedStepKey.value = steps.selectedStepKey?.value ?? null;
    definitionName.value = definition.identity.name;
  } catch (e) {
    loadError.value = e instanceof Error ? e.message : "The process steps could not be loaded.";
  } finally {
    loading.value = false;
  }
}

onMounted(load);

const orderedSteps = computed(() =>
  [...(stepEditor.value?.steps ?? [])].sort((a, b) => Number(a.order) - Number(b.order)),
);

const selectedDraft = computed<ProcessDefinitionStepDraftProjection | undefined>(() =>
  stepEditor.value?.stepDrafts.find((draft) => draft.basic.stepKey.value === selectedStepKey.value),
);

function selectStep(stepKey: string | null | undefined) {
  if (stepKey) selectedStepKey.value = stepKey;
}
</script>

<template>
  <PageShell>
    <template #tabs
      ><SubNavTabs
        :tabs="processDetailTabs(processId)"
        selected="design"
        :entity-title="definitionName ?? undefined"
        :entity-pattern="PROCESS_ENTITY_BREADCRUMB_PATTERN"
    /></template>

    <!--    <PageHeader-->
    <!--      title="Design"-->
    <!--      description="Ordered steps for this process definition. Visual canvas view isn't available yet — showing a step list."-->
    <!--    />-->

    <p v-if="loading" class="text-sm text-muted-foreground">Loading&hellip;</p>
    <p v-else-if="loadError" class="text-sm text-destructive">{{ loadError }}</p>

    <template v-else-if="stepEditor">
      <div v-if="orderedSteps.length === 0" class="py-12 text-center text-sm text-muted-foreground">
        This process definition has no steps defined.
      </div>

      <Table v-else>
        <TableHeader>
          <TableRow>
            <TableHead class="w-10">#</TableHead>
            <TableHead>Step</TableHead>
            <TableHead>Kind</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            v-for="step in orderedSteps"
            :key="step.stepKey.value ?? ''"
            class="cursor-pointer"
            :class="{ 'bg-accent/50': step.stepKey.value === selectedStepKey }"
            @click="selectStep(step.stepKey.value)"
          >
            <TableCell class="text-sm text-muted-foreground">{{
              Number(step.order) + 1
            }}</TableCell>
            <TableCell>
              <p class="font-medium text-foreground">{{ step.title }}</p>
              <p class="text-xs text-muted-foreground">{{ step.subtitle }}</p>
            </TableCell>
            <TableCell>
              <Badge variant="outline">{{ formatStepKind(step.stepKind) }}</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Card v-if="selectedDraft">
        <CardHeader>
          <CardTitle>{{ selectedDraft.basic.title }}</CardTitle>
        </CardHeader>
        <CardContent class="flex flex-col gap-4">
          <p v-if="selectedDraft.basic.notes" class="text-sm text-muted-foreground">
            {{ selectedDraft.basic.notes }}
          </p>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <p class="text-xs text-muted-foreground">Input contract</p>
              <p class="text-sm">{{ selectedDraft.contracts.inputContractSummary || "—" }}</p>
            </div>
            <div>
              <p class="text-xs text-muted-foreground">Output contract</p>
              <p class="text-sm">{{ selectedDraft.contracts.outputContractSummary || "—" }}</p>
            </div>
            <div>
              <p class="text-xs text-muted-foreground">Evidence contract</p>
              <p class="text-sm">{{ selectedDraft.contracts.evidenceContractSummary || "—" }}</p>
            </div>
            <div>
              <p class="text-xs text-muted-foreground">Decision rights</p>
              <p class="text-sm">{{ selectedDraft.contracts.decisionRightsSummary || "—" }}</p>
            </div>
          </div>

          <div v-if="selectedDraft.branchOutcomes.length > 0">
            <p class="mb-1 text-xs text-muted-foreground">Branch outcomes</p>
            <div class="flex flex-wrap gap-1">
              <Badge
                v-for="outcome in selectedDraft.branchOutcomes"
                :key="outcome.outcomeKey.value ?? ''"
                :variant="outcome.isBackwardRoute ? 'warning' : 'outline'"
              >
                {{ outcome.title }}
              </Badge>
            </div>
          </div>

          <div v-if="selectedDraft.artifactExpectations.length > 0">
            <p class="mb-1 text-xs text-muted-foreground">Artifact expectations</p>
            <div class="flex flex-wrap gap-1">
              <Badge
                v-for="artifact in selectedDraft.artifactExpectations"
                :key="artifact.artifactKey.value ?? ''"
                :variant="artifact.isRequired ? 'secondary' : 'outline'"
              >
                {{ artifact.title }}
              </Badge>
            </div>
          </div>

          <div v-if="selectedDraft.roleBindings.length > 0">
            <p class="mb-1 text-xs text-muted-foreground">Role bindings</p>
            <div class="flex flex-wrap gap-1">
              <Badge
                v-for="binding in selectedDraft.roleBindings"
                :key="binding.roleKey.value ?? ''"
                variant="outline"
              >
                {{ binding.roleDisplayName }}
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card v-if="stepEditor.lint.issues.length > 0">
        <CardHeader>
          <CardTitle>Lint issues</CardTitle>
        </CardHeader>
        <CardContent class="space-y-2">
          <div
            v-for="issue in stepEditor.lint.issues"
            :key="issue.code"
            class="flex items-start justify-between gap-3 text-sm"
          >
            <div>
              <p>{{ issue.message }}</p>
              <p class="text-xs text-muted-foreground">{{ issue.suggestion }}</p>
            </div>
            <Badge :variant="lintSeverityTone(issue.severity)">{{
              lintSeverityLabel(issue.severity)
            }}</Badge>
          </div>
        </CardContent>
      </Card>
    </template>
  </PageShell>
</template>
