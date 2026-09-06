<script setup lang="ts">
import StubPage from "@/components/StubPage.vue";
import { settingsTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Secrets" :tabs="settingsTabs()" selected="secrets" />
</template>
