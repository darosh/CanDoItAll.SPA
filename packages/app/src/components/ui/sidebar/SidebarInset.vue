<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <!-- min-w-0: a flex item defaults to min-width:auto, so wide fixed-size content further down
       (e.g. a canvas with an explicit pixel width) can force this row wider than the viewport
       instead of shrinking — confirmed live via the workflow canvas's maximize toggle. -->
  <main
    data-slot="sidebar-inset"
    :class="
      cn(
        'bg-background relative flex w-full min-w-0 flex-1 flex-col',
        'md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2',
        props.class,
      )
    "
  >
    <slot />
  </main>
</template>
