<script setup lang="ts">
import { useRoute } from "vue-router";
import StubPage from "@/components/StubPage.vue";
import { projectDetailTabs } from "@/lib/subNavTabs";

const route = useRoute();
</script>

<template>
  <StubPage
    title="Project files"
    :tabs="projectDetailTabs(String(route.params.projectId))"
    selected="files"
  />
</template>
