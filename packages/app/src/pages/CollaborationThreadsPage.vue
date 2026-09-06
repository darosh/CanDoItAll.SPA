<script setup lang="ts">
import StubPage from "@/components/StubPage.vue";
import { collaborationTabs } from "@/lib/subNavTabs";
</script>

<template>
  <StubPage title="All threads" :tabs="collaborationTabs()" selected="threads" />
</template>
