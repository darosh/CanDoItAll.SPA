<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Processes/Pages/ProcessesPage.razor
 * original URL     : http://localhost:5032/processes
 * original trigger : select a definition
 * URL              : http://localhost:5173/processes/:processId
 */

import type { ProcessDefinitionEditorProjection } from "@candoitall/api-client";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import PageHeader from "@/components/PageHeader.vue";
import PageShell from "@/components/PageShell.vue";
import SubNavTabs from "@/components/SubNavTabs.vue";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getProcessDefinition } from "./api";
import {
  authoringStatusTone,
  formatAuthoringStatus,
  formatAutonomyLevel,
  formatCriticality,
  formatOperatingMode,
  lintSeverityLabel,
  lintSeverityTone,
  PROCESS_ENTITY_BREADCRUMB_PATTERN,
  processDetailTabs,
} from "./types";

const route = useRoute();
const processId = route.params.processId as string;

const loading = ref(true);
const loadError = ref<string | null>(null);
const definition = ref<ProcessDefinitionEditorProjection | null>(null);

async function load() {
  loading.value = true;
  loadError.value = null;
  try {
    definition.value = await getProcessDefinition(processId);
  } catch (e) {
    loadError.value =
      e instanceof Error ? e.message : "The process definition could not be loaded.";
  } finally {
    loading.value = false;
  }
}

onMounted(load);
</script>

<template>
  <PageShell>
    <template #tabs
      ><SubNavTabs
        :tabs="processDetailTabs(processId)"
        selected="overview"
        :entity-title="definition?.identity.name"
        :entity-pattern="PROCESS_ENTITY_BREADCRUMB_PATTERN"
    /></template>

    <PageHeader
      v-if="definition"
      :title="definition.identity.name"
      :description="definition.identity.summary"
    >
      <template #actions>
        <template v-if="definition">
          <Badge :variant="authoringStatusTone(definition.status)">{{
            formatAuthoringStatus(definition.status)
          }}</Badge>
          <Badge variant="outline">{{
            formatCriticality(definition.governance.criticality)
          }}</Badge>
          <Badge variant="outline">{{
            formatOperatingMode(definition.governance.operatingMode)
          }}</Badge>
          <Badge variant="outline">{{
            formatAutonomyLevel(definition.governance.autonomyLevel)
          }}</Badge>
        </template>
      </template>
    </PageHeader>

    <p v-if="loading" class="text-sm text-muted-foreground">Loading&hellip;</p>
    <p v-else-if="loadError" class="text-sm text-destructive">{{ loadError }}</p>

    <template v-else-if="definition">
      <Card>
        <CardHeader>
          <CardTitle>Identity</CardTitle>
        </CardHeader>
        <CardContent class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <p class="text-xs text-muted-foreground">Scope</p>
            <p class="text-sm">{{ definition.identity.scopeLabel }}</p>
          </div>
          <div>
            <p class="text-xs text-muted-foreground">Customer</p>
            <p class="text-sm">{{ definition.identity.customerName || "—" }}</p>
          </div>
          <div>
            <p class="text-xs text-muted-foreground">Owner</p>
            <p class="text-sm">{{ definition.identity.ownerName || "—" }}</p>
          </div>
          <div class="md:col-span-2">
            <p class="text-xs text-muted-foreground">Value statement</p>
            <p class="text-sm">{{ definition.identity.valueStatement || "—" }}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Governance</CardTitle>
        </CardHeader>
        <CardContent class="flex flex-col gap-3">
          <div>
            <p class="text-xs text-muted-foreground">Governance policy</p>
            <p class="text-sm">{{ definition.governance.governancePolicySummary || "—" }}</p>
          </div>
          <div>
            <p class="text-xs text-muted-foreground">Manager override</p>
            <p class="text-sm">{{ definition.governance.managerOverrideSummary || "—" }}</p>
          </div>
          <div>
            <p class="text-xs text-muted-foreground">Governance notes</p>
            <p class="text-sm">{{ definition.governance.governanceNotes || "—" }}</p>
          </div>
          <div>
            <p class="text-xs text-muted-foreground">Change summary</p>
            <p class="text-sm">{{ definition.governance.changeSummary || "—" }}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contracts</CardTitle>
        </CardHeader>
        <CardContent class="flex flex-col gap-3">
          <div>
            <p class="text-xs text-muted-foreground">Interface contract</p>
            <p class="text-sm">{{ definition.contracts.interfaceContractSummary || "—" }}</p>
          </div>
          <div>
            <p class="text-xs text-muted-foreground">Constitution rules</p>
            <p class="text-sm">{{ definition.contracts.constitutionRuleSummary || "—" }}</p>
          </div>
          <div>
            <p class="text-xs text-muted-foreground">Operating mode</p>
            <p class="text-sm">{{ definition.contracts.operatingModeSummary || "—" }}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Simulation readiness</CardTitle>
        </CardHeader>
        <CardContent class="flex flex-col gap-3">
          <div class="flex flex-wrap items-center gap-2">
            <Badge :variant="definition.simulation.isReadyForSimulation ? 'success' : 'warning'">
              {{ definition.simulation.isReadyForSimulation ? "Ready" : "Not ready" }}
            </Badge>
            <span class="text-sm text-muted-foreground"
              >{{ Number(definition.simulation.stepCount) }} step(s) &middot;
              {{ Number(definition.simulation.requiredRoleCount) }} required role(s) &middot;
              {{ Number(definition.simulation.requiredArtifactExpectationCount) }} required
              artifact(s)</span
            >
          </div>
          <p class="text-sm">{{ definition.simulation.simulationReadinessSummary || "—" }}</p>
        </CardContent>
      </Card>

      <Card v-if="definition.lint.issues.length > 0">
        <CardHeader>
          <CardTitle>Lint issues</CardTitle>
        </CardHeader>
        <CardContent class="space-y-2">
          <div
            v-for="issue in definition.lint.issues"
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
