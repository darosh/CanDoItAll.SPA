<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/AgentsHomePage.razor
 * original URL     : http://localhost:5032/agents
 * original trigger : open the executions / failures panel
 * URL              : http://localhost:5173/agents/diagnostics
 */

import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { agentsCatalogTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/AgentsHomePage.razor
original URL     : http://localhost:5032/agents
original trigger : open the executions / failures panel
URL              : http://localhost:5173/agents/diagnostics`;
</script>

<template>
  <StubPage title="Diagnostics" :tabs="agentsCatalogTabs()" selected="diagnostics" />
  <DevNotes :text="devNotes" />
</template>
