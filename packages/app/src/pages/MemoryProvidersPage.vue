<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Memory/Pages/MemoryProvidersPage.razor
 * original URL     : http://localhost:5032/memory
 * URL              : http://localhost:5173/memory
 * opens            : /memory/:memoryId
 */

import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Memory/Pages/MemoryProvidersPage.razor
original URL     : http://localhost:5032/memory
URL              : http://localhost:5173/memory
opens            : /memory/:memoryId`;
</script>

<template>
  <StubPage title="Memory providers" />
  <DevNotes :text="devNotes" />
</template>
