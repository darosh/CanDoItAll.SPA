<script setup lang="ts">
import { useRoute } from "vue-router";
import StubPage from "@/components/StubPage.vue";
import { processDetailTabs } from "@/pages/processes/types";

const route = useRoute();
</script>

<template>
  <StubPage
    title="Process activity"
    :tabs="processDetailTabs(String(route.params.processId))"
    selected="activity"
  />
</template>
