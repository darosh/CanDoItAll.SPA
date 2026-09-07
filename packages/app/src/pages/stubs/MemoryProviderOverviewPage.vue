<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Memory/Pages/MemoryProvidersPage.razor
 * original URL     : http://localhost:5032/memory
 * original trigger : select a provider
 * URL              : http://localhost:5173/memory/:memoryId
 * opens            : /memory/:memoryId/operations
 * opens            : /memory/:memoryId/events
 * opens            : /memory/:memoryId/feedback
 * opens            : /memory/:memoryId/query
 * opens            : /memory/:memoryId/ingestion
 * opens            : /memory/:memoryId/provider-ui
 */

import { useRoute } from "vue-router";
import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";
import { memoryProviderDetailTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Memory/Pages/MemoryProvidersPage.razor
original URL     : http://localhost:5032/memory
original trigger : select a provider
URL              : http://localhost:5173/memory/:memoryId
opens            : /memory/:memoryId/operations
opens            : /memory/:memoryId/events
opens            : /memory/:memoryId/feedback
opens            : /memory/:memoryId/query
opens            : /memory/:memoryId/ingestion
opens            : /memory/:memoryId/provider-ui`;

const route = useRoute();
</script>

<template>
  <StubPage
    title="Memory provider overview"
    :tabs="memoryProviderDetailTabs(String(route.params.memoryId))"
    selected="overview"
  />
  <DevNotes :text="devNotes" />
</template>
