<script setup lang="ts">
import { MoreHorizontal, X } from "@lucide/vue";
import { useEventListener } from "@vueuse/core";
import { computed, onMounted, ref } from "vue";
import AppTab from "@/components/AppTab.vue";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppTabs } from "@/composables/useAppTabs";

// Single source of truth for tab width bounds — AppTab.vue takes the
// resolved pixel width as a prop rather than hardcoding it itself.
const { maxTabWidth = 240, minTabWidth = 96 } = defineProps<{
  maxTabWidth?: number;
  minTabWidth?: number;
}>();

const OVERFLOW_BUTTON_WIDTH = 32;

const { tabs, activePath, activateTab, closeTab, pinTab, promoteTab } = useAppTabs();

// The strip always spans the full window width (it's a top-level row above
// both the sidebar and header, per the layout), so measuring on mount and on
// window resize is simpler and more reliable than a ResizeObserver on the
// element — which can be slow or fail to fire at all in some environments,
// leaving width stuck at its initial 0 and collapsing every tab into overflow.
const containerRef = ref<HTMLElement | null>(null);
const containerWidth = ref(0);

function measureContainer() {
  if (containerRef.value) containerWidth.value = containerRef.value.getBoundingClientRect().width;
}

onMounted(measureContainer);
useEventListener("resize", measureContainer);

// Shrink tabs toward minTabWidth as space runs out; only once even
// minTabWidth can't fit every open tab does the least-recently-visited tab
// move into the overflow dropdown, one at a time, until the rest fit.
const layout = computed(() => {
  const total = tabs.length;
  if (total === 0) return { visibleCount: 0, tabWidth: maxTabWidth };

  for (let count = total; count >= 1; count--) {
    const hasOverflow = count < total;
    const usable = containerWidth.value - (hasOverflow ? OVERFLOW_BUTTON_WIDTH : 0);
    const width = Math.min(maxTabWidth, Math.floor(usable / count));
    if (width >= minTabWidth || count === 1) {
      return { visibleCount: count, tabWidth: Math.max(width, minTabWidth) };
    }
  }

  return { visibleCount: 1, tabWidth: minTabWidth };
});

const visibleCount = computed(() => layout.value.visibleCount);
const tabWidth = computed(() => layout.value.tabWidth);

// Pick the visibleCount most-recently-visited paths, then force the active
// tab and all pinned tabs in (trimming the least-recent picks to compensate)
// so activating an overflowed tab, or having pinned tabs, never self-overflows.
const visiblePaths = computed(() => {
  if (tabs.length <= visibleCount.value) return new Set(tabs.map((tab) => tab.path));

  const byRecency = [...tabs].sort((a, b) => b.lastVisited - a.lastVisited);
  const forced = tabs.filter((tab) => tab.pinned || tab.path === activePath.value);
  const forcedPaths = new Set(forced.map((tab) => tab.path));

  const remaining = Math.max(0, visibleCount.value - forced.length);
  const picked = byRecency.filter((tab) => !forcedPaths.has(tab.path)).slice(0, remaining);

  return new Set([...forcedPaths, ...picked.map((tab) => tab.path)]);
});

// Visible tabs render in the array's stable order, not recency order, so the
// strip doesn't reshuffle every time a tab is activated.
const visibleTabs = computed(() => tabs.filter((tab) => visiblePaths.value.has(tab.path)));
const overflowTabs = computed(() => tabs.filter((tab) => !visiblePaths.value.has(tab.path)));
const closeButtonHoverOnly = computed(() => overflowTabs.value.length > 0);
</script>

<template>
  <div ref="containerRef" class="flex h-8 items-center border-b border-border bg-muted/20">
    <!--
      Tabs scroll horizontally as a last resort — e.g. if pinned tabs alone
      (which always stay visible) exceed available width even at minTabWidth.
      The overflow trigger lives outside this div so it's never scrolled out
      of reach and always sits flush against the strip's right edge.
    -->
    <div class="flex min-w-0 flex-1 overflow-x-auto overflow-y-hidden">
      <AppTab
        v-for="tab in visibleTabs"
        :key="tab.path"
        :tab="tab"
        :active="tab.path === activePath"
        :width="tabWidth"
        :close-button-hover-only="closeButtonHoverOnly"
        @activate="activateTab"
        @close="closeTab"
        @pin="pinTab"
        @promote="promoteTab"
      />
    </div>

    <DropdownMenu v-if="overflowTabs.length > 0">
      <DropdownMenuTrigger as-child>
        <Button variant="ghost" size="icon-xs" class="mr-1 shrink-0" aria-label="More tabs">
          <MoreHorizontal class="size-3.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          v-for="tab in overflowTabs"
          :key="tab.path"
          class="flex items-center gap-2"
          @select="activateTab(tab.path)"
        >
          <component :is="tab.icon" v-if="tab.icon" class="size-3.5 shrink-0" />
          <span class="min-w-0 flex-1 truncate" :class="tab.preview ? 'italic' : ''">{{
            tab.title
          }}</span>
          <button
            type="button"
            class="flex size-4 shrink-0 items-center justify-center text-muted-foreground hover:text-foreground"
            aria-label="Close tab"
            @click.stop="closeTab(tab.path)"
          >
            <X class="size-3" />
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
