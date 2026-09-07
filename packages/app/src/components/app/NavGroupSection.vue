<script setup lang="ts">
import type { NavGroup } from "@/router/nav";
import { ChevronRight } from "@lucide/vue";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { isNavItemActive } from "@/composables/useNavActive";

const { group } = defineProps<{ group: NavGroup }>();

const route = useRoute();
const { state } = useSidebar();
const localOpen = ref(true);

// While the whole sidebar is collapsed to an icon rail, every group must keep
// rendering its items regardless of the user's per-group toggle — otherwise a
// manually-collapsed group would have no visible icons and no way to reopen.
const isOpen = computed({
  get: () => state.value === "collapsed" || localOpen.value,
  set: (value) => {
    localOpen.value = value;
  },
});
</script>

<template>
  <SidebarGroup>
    <Collapsible v-model:open="isOpen">
      <CollapsibleTrigger as-child>
        <SidebarGroupLabel class="group/label cursor-pointer">
          {{ group.label }}
          <ChevronRight
            class="ml-auto transition-transform group-data-[state=open]/label:rotate-90"
          />
        </SidebarGroupLabel>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in group.items" :key="item.to">
              <SidebarMenuButton
                as-child
                :is-active="isNavItemActive(route.path, item.to)"
                :tooltip="item.title"
              >
                <RouterLink :to="item.to">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </CollapsibleContent>
    </Collapsible>
  </SidebarGroup>
</template>
