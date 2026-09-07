<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Resources/Pages/ResourcesPage.razor
 * original URL     : http://localhost:5032/resources
 * URL              : http://localhost:5173/resources
 * opens            : /resources/:resourceId
 * opens            : /resources/browse
 */

import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";
import { resourcesTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Resources/Pages/ResourcesPage.razor
original URL     : http://localhost:5032/resources
URL              : http://localhost:5173/resources
opens            : /resources/:resourceId
opens            : /resources/browse`;
</script>

<template>
  <StubPage title="Resources" :tabs="resourcesTabs()" selected="catalog" />
  <DevNotes :text="devNotes" />
</template>
