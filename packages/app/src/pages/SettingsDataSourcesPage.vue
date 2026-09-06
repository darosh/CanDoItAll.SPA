<script setup lang="ts">
import StubPage from "@/components/StubPage.vue";
import { settingsTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Data sources" :tabs="settingsTabs()" selected="data-sources" />
</template>
