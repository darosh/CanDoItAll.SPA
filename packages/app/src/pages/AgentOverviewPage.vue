<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/AgentsHomePage.razor
 * original URL     : http://localhost:5032/agents
 * original trigger : select an agent
 * URL              : http://localhost:5173/agents/:agentId
 */

import { useRoute } from "vue-router";
import StubPage from "@/components/StubPage.vue";
import { agentDetailTabs } from "@/lib/subNavTabs";

const route = useRoute();
</script>

<template>
  <StubPage
    title="Agent overview"
    :tabs="agentDetailTabs(String(route.params.agentId))"
    selected="overview"
  />
</template>
