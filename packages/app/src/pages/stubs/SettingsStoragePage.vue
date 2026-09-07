<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Workspace/Pages/SettingsPage.razor
 * original URL     : http://localhost:5032/settings
 * original trigger : click the Storage tab
 * URL              : http://localhost:5173/settings/storage
 */

import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";
import { settingsTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Workspace/Pages/SettingsPage.razor
original URL     : http://localhost:5032/settings
original trigger : click the Storage tab
URL              : http://localhost:5173/settings/storage`;
</script>

<template>
  <StubPage title="Storage" :tabs="settingsTabs()" selected="storage" />
  <DevNotes :text="devNotes" />
</template>
