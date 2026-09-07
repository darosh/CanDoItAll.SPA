<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/App/CanDoItAll.Web/Components/Layout/MainLayoutDatabaseDialog.razor
 * original URL     : http://localhost:5032/
 * original trigger : open the database flyout from the shell's bottom utility bar (any page)
 * URL              : http://localhost:5173/settings/database
 */

import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";
import { settingsTabs } from "@/lib/subNavTabs";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/App/CanDoItAll.Web/Components/Layout/MainLayoutDatabaseDialog.razor
original URL     : http://localhost:5032/
original trigger : open the database flyout from the shell's bottom utility bar (any page)
URL              : http://localhost:5173/settings/database`;
</script>

<template>
  <StubPage title="Database profiles" :tabs="settingsTabs()" selected="database" />
  <DevNotes :text="devNotes" />
</template>
