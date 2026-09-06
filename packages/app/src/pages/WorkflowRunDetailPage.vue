<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/WorkflowsPage.razor
 * original URL     : http://localhost:5032/agents/workflows
 * original trigger : click the History tab, then select a run
 * URL              : http://localhost:5173/workflows/runs/:runId
 */

import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/WorkflowsPage.razor
original URL     : http://localhost:5032/agents/workflows
original trigger : click the History tab, then select a run
URL              : http://localhost:5173/workflows/runs/:runId`;
</script>

<template>
  <StubPage title="Workflow run detail" />
  <DevNotes :text="devNotes" />
</template>
