<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Collaboration/Pages/CollaborationHomePage.razor
 * original URL     : http://localhost:5032/collaboration
 * original trigger : click the Escalations tab
 * URL              : http://localhost:5173/collaboration/escalations
 */

import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { collaborationTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Collaboration/Pages/CollaborationHomePage.razor
original URL     : http://localhost:5032/collaboration
original trigger : click the Escalations tab
URL              : http://localhost:5173/collaboration/escalations`;
</script>

<template>
  <StubPage title="Escalations" :tabs="collaborationTabs()" selected="escalations" />
  <DevNotes :text="devNotes" />
</template>
