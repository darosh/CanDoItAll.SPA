<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Collaboration/Pages/CollaborationHomePage.razor
 * original URL     : http://localhost:5032/collaboration
 * URL              : http://localhost:5173/collaboration
 * opens            : /collaboration/escalations
 * opens            : /collaboration/threads
 * opens            : /collaboration/threads/:threadId
 */

import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";
import { collaborationTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Collaboration/Pages/CollaborationHomePage.razor
original URL     : http://localhost:5032/collaboration
URL              : http://localhost:5173/collaboration
opens            : /collaboration/escalations
opens            : /collaboration/threads
opens            : /collaboration/threads/:threadId`;
</script>

<template>
  <StubPage title="Collaboration" :tabs="collaborationTabs()" selected="inbox" />
  <DevNotes :text="devNotes" />
</template>
