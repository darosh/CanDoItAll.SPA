<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/AgentsHomePage.razor
 * original URL     : http://localhost:5032/agents
 * original trigger : open the skills / capabilities panel
 * URL              : http://localhost:5173/agents/capabilities
 */

import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";
import { agentsCatalogTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/AgentsHomePage.razor
original URL     : http://localhost:5032/agents
original trigger : open the skills / capabilities panel
URL              : http://localhost:5173/agents/capabilities`;
</script>

<template>
  <StubPage title="Capability catalog" :tabs="agentsCatalogTabs()" selected="capabilities" />
  <DevNotes :text="devNotes" />
</template>
