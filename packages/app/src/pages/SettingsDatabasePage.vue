<script setup lang="ts">
import StubPage from "@/components/StubPage.vue";
import { settingsTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Database profiles" :tabs="settingsTabs()" selected="database" />
</template>
