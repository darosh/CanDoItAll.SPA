<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Workspace/Pages/SettingsPage.razor
 * original URL     : http://localhost:5032/settings
 * original trigger : click the Data sources tab
 * URL              : http://localhost:5173/settings/data-sources
 */

import StubPage from "@/components/StubPage.vue";
import { settingsTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Data sources" :tabs="settingsTabs()" selected="data-sources" />
</template>
