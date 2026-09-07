<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Collaboration/Pages/CollaborationHomePage.razor
 * original URL     : http://localhost:5032/collaboration
 * original trigger : click the Threads tab
 * URL              : http://localhost:5173/collaboration/threads
 * opens            : /collaboration/threads/:threadId
 */

import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";
import { collaborationTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Collaboration/Pages/CollaborationHomePage.razor
original URL     : http://localhost:5032/collaboration
original trigger : click the Threads tab
URL              : http://localhost:5173/collaboration/threads
opens            : /collaboration/threads/:threadId`;
</script>

<template>
  <StubPage title="All threads" :tabs="collaborationTabs()" selected="threads" />
  <DevNotes :text="devNotes" />
</template>
