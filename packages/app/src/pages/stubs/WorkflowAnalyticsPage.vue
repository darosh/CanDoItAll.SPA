<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/WorkflowsPage.razor
 * original URL     : http://localhost:5032/agents/workflows
 * original trigger : click the Analytics tab
 * URL              : http://localhost:5173/workflows/analytics
 */

import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/WorkflowsPage.razor
original URL     : http://localhost:5032/agents/workflows
original trigger : click the Analytics tab
URL              : http://localhost:5173/workflows/analytics`;
</script>

<template>
  <StubPage title="Workflow analytics" />
  <DevNotes :text="devNotes" />
</template>
