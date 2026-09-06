<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/AgentsHomePage.razor
 * original URL     : http://localhost:5032/agents
 * original trigger : select an agent
 * URL              : http://localhost:5173/agents/:agentId
 * opens            : /agents/:agentId/configuration
 * opens            : /agents/:agentId/capabilities
 * opens            : /agents/:agentId/governance
 * opens            : /agents/:agentId/activity
 */

import { useRoute } from "vue-router";
import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { agentDetailTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/AgentsHomePage.razor
original URL     : http://localhost:5032/agents
original trigger : select an agent
URL              : http://localhost:5173/agents/:agentId
opens            : /agents/:agentId/configuration
opens            : /agents/:agentId/capabilities
opens            : /agents/:agentId/governance
opens            : /agents/:agentId/activity`;

const route = useRoute();
</script>

<template>
  <StubPage
    title="Agent overview"
    :tabs="agentDetailTabs(String(route.params.agentId))"
    selected="overview"
  />
  <DevNotes :text="devNotes" />
</template>
