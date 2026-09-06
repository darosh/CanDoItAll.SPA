<script setup lang="ts">
import { Moon, Sun } from "@lucide/vue";
import AppSidebar from "@/components/AppSidebar.vue";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useBreadcrumbs } from "@/composables/useBreadcrumbs";
import { useTheme } from "@/composables/useTheme";

const breadcrumbs = useBreadcrumbs();
const { theme, toggleTheme } = useTheme();
</script>

<template>
  <SidebarProvider style="--sidebar-width: 12.5rem">
    <AppSidebar />
    <SidebarInset class="h-svh">
      <header
        class="sticky top-0 z-10 flex h-12 shrink-0 items-center gap-2 border-b border-border bg-background pl-3 pr-3"
      >
        <SidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            <template v-for="(crumb, index) in breadcrumbs" :key="index">
              <BreadcrumbSeparator v-if="index > 0" />
              <BreadcrumbItem>
                <BreadcrumbLink v-if="crumb.to" as-child>
                  <RouterLink :to="crumb.to">{{ crumb.title }}</RouterLink>
                </BreadcrumbLink>
                <BreadcrumbPage v-else>{{ crumb.title }}</BreadcrumbPage>
              </BreadcrumbItem>
            </template>
          </BreadcrumbList>
        </Breadcrumb>
        <Button
          variant="ghost"
          size="icon-sm"
          class="ml-auto"
          :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
          @click="toggleTheme"
        >
          <Sun v-if="theme === 'dark'" />
          <Moon v-else />
        </Button>
      </header>
      <main class="min-h-0 flex-1 overflow-y-auto">
        <RouterView />
      </main>
    </SidebarInset>
  </SidebarProvider>
</template>
