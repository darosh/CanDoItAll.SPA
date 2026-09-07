<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Memory/Pages/MemoryProvidersPage.razor
 * original URL     : http://localhost:5032/memory
 * original trigger : select a provider, then open its Feedback tab
 * URL              : http://localhost:5173/memory/:memoryId/feedback
 */

import { useRoute } from "vue-router";
import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";
import { memoryProviderDetailTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Memory/Pages/MemoryProvidersPage.razor
original URL     : http://localhost:5032/memory
original trigger : select a provider, then open its Feedback tab
URL              : http://localhost:5173/memory/:memoryId/feedback`;

const route = useRoute();
</script>

<template>
  <StubPage
    title="Memory provider feedback"
    :tabs="memoryProviderDetailTabs(String(route.params.memoryId))"
    selected="feedback"
  />
  <DevNotes :text="devNotes" />
</template>
