<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Collaboration/Pages/CollaborationHomePage.razor
 * original URL     : http://localhost:5032/collaboration
 * URL              : http://localhost:5173/collaboration
 */

import StubPage from "@/components/StubPage.vue";
import { collaborationTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Inbox" :tabs="collaborationTabs()" selected="inbox" />
</template>
