<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Collaboration/Pages/CollaborationHomePage.razor
 * original URL     : http://localhost:5032/collaboration
 * URL              : http://localhost:5173/collaboration
 * opens            : /collaboration/escalations
 * opens            : /collaboration/threads
 * opens            : /collaboration/threads/:threadId
 */

import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { collaborationTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Collaboration/Pages/CollaborationHomePage.razor
original URL     : http://localhost:5032/collaboration
URL              : http://localhost:5173/collaboration
opens            : /collaboration/escalations
opens            : /collaboration/threads
opens            : /collaboration/threads/:threadId`;
</script>

<template>
  <StubPage title="Inbox" :tabs="collaborationTabs()" selected="inbox" />
  <DevNotes :text="devNotes" />
</template>
