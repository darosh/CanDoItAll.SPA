<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Memory/Pages/MemoryProvidersPage.razor
 * original URL     : http://localhost:5032/memory
 * original trigger : select a provider, then open its Events tab
 * URL              : http://localhost:5173/memory/:memoryId/events
 */

import { useRoute } from "vue-router";
import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";
import { memoryProviderDetailTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Memory/Pages/MemoryProvidersPage.razor
original URL     : http://localhost:5032/memory
original trigger : select a provider, then open its Events tab
URL              : http://localhost:5173/memory/:memoryId/events`;

const route = useRoute();
</script>

<template>
  <StubPage
    title="Memory provider events"
    :tabs="memoryProviderDetailTabs(String(route.params.memoryId))"
    selected="events"
  />
  <DevNotes :text="devNotes" />
</template>
