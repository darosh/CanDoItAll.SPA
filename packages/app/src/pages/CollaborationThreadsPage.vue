<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Collaboration/Pages/CollaborationHomePage.razor
 * original URL     : http://localhost:5032/collaboration
 * original trigger : click the Threads tab
 * URL              : http://localhost:5173/collaboration/threads
 */

import StubPage from "@/components/StubPage.vue";
import { collaborationTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="All threads" :tabs="collaborationTabs()" selected="threads" />
</template>
