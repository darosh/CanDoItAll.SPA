<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/LlmChatsCompatibilityRedirect.razor
 * original URL     : http://localhost:5032/chats
 * original trigger : select an agent's chat session
 * URL              : http://localhost:5173/agents/:agentId/chats
 */

import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.AgentFramework/Pages/LlmChatsCompatibilityRedirect.razor
original URL     : http://localhost:5032/chats
original trigger : select an agent's chat session
URL              : http://localhost:5173/agents/:agentId/chats`;
</script>

<template>
  <StubPage title="Agent chat sessions" />
  <DevNotes :text="devNotes" />
</template>
