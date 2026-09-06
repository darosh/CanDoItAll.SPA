<script setup lang="ts">
import { Pin, X } from "@lucide/vue";
import { computed, ref } from "vue";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import type { AppTab } from "@/composables/useAppTabs";

const { tab, active, closeButtonHoverOnly, width } = defineProps<{
  tab: AppTab;
  active: boolean;
  closeButtonHoverOnly: boolean;
  width: number;
}>();

const emit = defineEmits<{
  activate: [path: string];
  close: [path: string];
  pin: [path: string];
  promote: [path: string];
}>();

const isHovered = ref(false);

const breadcrumbTrail = computed(() =>
  tab.breadcrumbs.length > 0 ? tab.breadcrumbs.map((crumb) => crumb.title).join(" / ") : tab.title,
);
</script>

<template>
  <div
    class="group flex h-8 shrink-0 cursor-pointer items-center gap-1.5 border-r border-border pl-2 pr-1"
    :style="{ width: `${width}px` }"
    :class="
      active
        ? 'bg-background text-foreground'
        : 'bg-muted/40 text-muted-foreground hover:bg-muted/70'
    "
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @click="emit('activate', tab.path)"
    @dblclick="tab.preview && emit('promote', tab.path)"
  >
    <button
      v-if="tab.preview && isHovered"
      type="button"
      class="flex size-3.5 p-0 m-0 shrink-0 items-center justify-center text-muted-foreground hover:text-foreground"
      aria-label="Pin tab"
      @click.stop="emit('pin', tab.path)"
    >
      <Pin class="size-3.5" />
    </button>
    <component :is="tab.icon" v-else-if="tab.icon" class="size-3.5 shrink-0" />

    <Tooltip>
      <TooltipTrigger as-child>
        <span class="min-w-0 flex-1 truncate text-xs" :class="tab.preview ? 'italic' : ''">
          {{ tab.title }}
        </span>
      </TooltipTrigger>
      <TooltipContent side="bottom">{{ breadcrumbTrail }}</TooltipContent>
    </Tooltip>

    <Button
      variant="ghost"
      size="icon-xs"
      class="shrink-0"
      :class="closeButtonHoverOnly ? 'opacity-0 group-hover:opacity-100' : ''"
      aria-label="Close tab"
      @click.stop="emit('close', tab.path)"
    >
      <X class="size-3" />
    </Button>
  </div>
</template>
