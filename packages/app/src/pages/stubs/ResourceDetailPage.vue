<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Resources/Pages/ResourcesPage.razor
 * original URL     : http://localhost:5032/resources
 * original trigger : select a resource from the Registry tab
 * URL              : http://localhost:5173/resources/:resourceId
 */

import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Resources/Pages/ResourcesPage.razor
original URL     : http://localhost:5032/resources
original trigger : select a resource from the Registry tab
URL              : http://localhost:5173/resources/:resourceId`;
</script>

<template>
  <StubPage title="Resource detail" />
  <DevNotes :text="devNotes" />
</template>
