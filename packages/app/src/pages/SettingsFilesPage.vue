<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Workspace/Pages/SettingsPage.razor
 * original URL     : http://localhost:5032/settings
 * original trigger : click the Files tab
 * URL              : http://localhost:5173/settings/files
 */

import DevNotes from "@/components/DevNotes.vue";
import StubPage from "@/components/StubPage.vue";
import { settingsTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Workspace/Pages/SettingsPage.razor
original URL     : http://localhost:5032/settings
original trigger : click the Files tab
URL              : http://localhost:5173/settings/files`;
</script>

<template>
  <StubPage title="Files" :tabs="settingsTabs()" selected="files" />
  <DevNotes :text="devNotes" />
</template>
