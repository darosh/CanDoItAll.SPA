<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Memory/Pages/MemoryProvidersPage.razor
 * original URL     : http://localhost:5032/memory
 * original trigger : select a provider, then open its Operations tab
 * URL              : http://localhost:5173/memory/:memoryId/operations
 */

import { useRoute } from "vue-router";
import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { memoryProviderDetailTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Memory/Pages/MemoryProvidersPage.razor
original URL     : http://localhost:5032/memory
original trigger : select a provider, then open its Operations tab
URL              : http://localhost:5173/memory/:memoryId/operations`;

const route = useRoute();
</script>

<template>
  <StubPage
    title="Memory provider operations"
    :tabs="memoryProviderDetailTabs(String(route.params.memoryId))"
    selected="operations"
  />
  <DevNotes :text="devNotes" />
</template>
