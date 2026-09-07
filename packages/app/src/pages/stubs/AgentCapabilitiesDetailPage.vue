<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/AgentsHomePage.razor
 * original URL     : http://localhost:5032/agents
 * original trigger : select an agent, then open its capabilities
 * URL              : http://localhost:5173/agents/:agentId/capabilities
 */

import { useRoute } from "vue-router";
import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";
import { agentDetailTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/AgentsHomePage.razor
original URL     : http://localhost:5032/agents
original trigger : select an agent, then open its capabilities
URL              : http://localhost:5173/agents/:agentId/capabilities`;

const route = useRoute();
</script>

<template>
  <StubPage
    title="Agent capabilities"
    :tabs="agentDetailTabs(String(route.params.agentId))"
    selected="capabilities"
  />
  <DevNotes :text="devNotes" />
</template>
