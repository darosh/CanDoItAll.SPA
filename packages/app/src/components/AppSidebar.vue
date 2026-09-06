<script setup lang="ts">
import { useRoute } from "vue-router";
import NavGroupSection from "@/components/NavGroupSection.vue";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { isNavItemActive } from "@/composables/useNavActive";
import { navGroups, settingsLink } from "@/router/nav";

const route = useRoute();
</script>

<template>
  <Sidebar collapsible="icon">
    <SidebarContent>
      <NavGroupSection v-for="group in navGroups" :key="group.id" :group="group" />
    </SidebarContent>

    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            as-child
            :is-active="isNavItemActive(route.path, settingsLink.to)"
            :tooltip="settingsLink.title"
          >
            <RouterLink :to="settingsLink.to">
              <component :is="settingsLink.icon" />
              <span>{{ settingsLink.title }}</span>
            </RouterLink>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>

    <SidebarRail />
  </Sidebar>
</template>
