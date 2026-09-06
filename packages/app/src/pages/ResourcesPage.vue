<script setup lang="ts">
import StubPage from "@/components/StubPage.vue";
import { resourcesTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="Resources" :tabs="resourcesTabs()" selected="catalog" />
</template>
