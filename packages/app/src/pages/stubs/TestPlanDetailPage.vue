<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.TestLab/Pages/TestLabPage.razor
 * original URL     : http://localhost:5032/test-lab
 * original trigger : select a test plan
 * URL              : http://localhost:5173/test-lab/plans/:planId
 */

import DevNotes from "@/components/shared/DevNotes.vue";
import StubPage from "@/components/shared/StubPage.vue";

const devNotes = `original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.TestLab/Pages/TestLabPage.razor
original URL     : http://localhost:5032/test-lab
original trigger : select a test plan
URL              : http://localhost:5173/test-lab/plans/:planId`;
</script>

<template>
  <StubPage title="Test plan detail" />
  <DevNotes :text="devNotes" />
</template>
