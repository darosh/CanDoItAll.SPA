<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Resources/Pages/ResourcesPage.razor
 * original URL     : http://localhost:5032/resources
 * original trigger : click the Browse tab
 * URL              : http://localhost:5173/resources/browse
 */

import StubPage from "@/components/StubPage.vue";
import { resourcesTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Browse resources" :tabs="resourcesTabs()" selected="browse" />
</template>
