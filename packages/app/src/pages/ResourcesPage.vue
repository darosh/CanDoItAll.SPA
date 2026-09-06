<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Resources/Pages/ResourcesPage.razor
 * original URL     : http://localhost:5032/resources
 * URL              : http://localhost:5173/resources
 */

import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { resourcesTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Resources/Pages/ResourcesPage.razor
original URL     : http://localhost:5032/resources
URL              : http://localhost:5173/resources`;
</script>

<template>
  <StubPage title="Resources" :tabs="resourcesTabs()" selected="catalog" />
  <DevNotes :text="devNotes" />
</template>
