<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/AgentsHomePage.razor
 * original URL     : http://localhost:5032/agents
 * URL              : http://localhost:5173/agents
 * opens            : /agents/:agentId
 * opens            : /agents/capabilities
 * opens            : /agents/diagnostics
 * opens            : /agents/providers
 */

import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";
import { agentsCatalogTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/AgentsHomePage.razor
original URL     : http://localhost:5032/agents
URL              : http://localhost:5173/agents
opens            : /agents/:agentId
opens            : /agents/capabilities
opens            : /agents/diagnostics
opens            : /agents/providers`;
</script>

<template>
  <StubPage title="Agents" :tabs="agentsCatalogTabs()" selected="catalog" />
  <DevNotes :text="devNotes" />
</template>
