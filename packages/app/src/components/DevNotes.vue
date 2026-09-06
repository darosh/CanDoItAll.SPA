<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ text: string }>();

const parts = computed(() => props.text.split(/(https?:\/\/\S+)/g).filter((part) => part !== ""));

function shorten(url: string): string {
  let u: URL;
  try {
    u = new URL(url);
  } catch {
    return url;
  }
  if (u.hostname === "localhost") return u.pathname + u.search + u.hash;
  const srcIndex = u.pathname.indexOf("/src");
  if (u.hostname === "github.com" && srcIndex !== -1) {
    return u.pathname.slice(srcIndex) + u.search + u.hash;
  }
  return url;
}
</script>

<template>
  <pre
    class="mx-6 leading-5 overflow-x-auto rounded-md border border-dashed border-border bg-muted/40 p-3 text-xs text-muted-foreground"
  ><template v-for="(part, i) in parts" :key="i"><a
      v-if="part.startsWith('http://') || part.startsWith('https://')"
      :href="part"
      target="_blank"
      rel="noopener noreferrer"
      class="text-foreground underline underline-offset-2"
    >{{ shorten(part) }}</a><template v-else>{{ part }}</template></template></pre>
</template>
