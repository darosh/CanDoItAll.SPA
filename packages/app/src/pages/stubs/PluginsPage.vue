<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Plugins/Pages/PluginsPage.razor
 * original URL     : http://localhost:5032/plugins
 * URL              : http://localhost:5173/plugins
 * opens            : /plugins/:pluginId
 */

import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Plugins/Pages/PluginsPage.razor
original URL     : http://localhost:5032/plugins
URL              : http://localhost:5173/plugins
opens            : /plugins/:pluginId`;
</script>

<template>
  <StubPage title="Plugins" />
  <DevNotes :text="devNotes" />
</template>
