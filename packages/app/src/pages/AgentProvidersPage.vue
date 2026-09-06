<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/AgentsHomePage.razor
 * original URL     : http://localhost:5032/agents
 * original trigger : open the providers panel
 * URL              : http://localhost:5173/agents/providers
 */

import StubPage from "@/components/StubPage.vue";
import { agentsCatalogTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Provider profiles" :tabs="agentsCatalogTabs()" selected="providers" />
</template>
