<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/AgentsHomePage.razor
 * original URL     : http://localhost:5032/agents
 * URL              : http://localhost:5173/agents
 */

import StubPage from "@/components/StubPage.vue";
import { agentsCatalogTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Agents" :tabs="agentsCatalogTabs()" selected="catalog" />
</template>
