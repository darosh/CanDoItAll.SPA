<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/WorkflowsPage.razor
 * original URL     : http://localhost:5032/agents/workflows
 * original trigger : click the History tab for a specific workflow
 * URL              : http://localhost:5173/workflows/:workflowId/runs
 * opens            : /workflows/runs/:runId
 */

import { useRoute } from "vue-router";
import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { workflowDetailTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/WorkflowsPage.razor
original URL     : http://localhost:5032/agents/workflows
original trigger : click the History tab for a specific workflow
URL              : http://localhost:5173/workflows/:workflowId/runs
opens            : /workflows/runs/:runId`;

const route = useRoute();
</script>

<template>
  <StubPage
    title="Workflow runs (single workflow)"
    :tabs="workflowDetailTabs(String(route.params.workflowId))"
    selected="runs"
  />
  <DevNotes :text="devNotes" />
</template>
