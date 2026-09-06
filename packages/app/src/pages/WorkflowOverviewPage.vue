<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/WorkflowsPage.razor
 * original URL     : http://localhost:5032/agents/workflows
 * original trigger : click the Workflows tab, then select a workflow
 * URL              : http://localhost:5173/workflows/:workflowId
 */

import { useRoute } from "vue-router";
import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { workflowDetailTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/WorkflowsPage.razor
original URL     : http://localhost:5032/agents/workflows
original trigger : click the Workflows tab, then select a workflow
URL              : http://localhost:5173/workflows/:workflowId`;

const route = useRoute();
</script>

<template>
  <StubPage
    title="Workflow overview"
    :tabs="workflowDetailTabs(String(route.params.workflowId))"
    selected="overview"
  />
  <DevNotes :text="devNotes" />
</template>
