<script setup lang="ts">
import type { ProcessDefinitionRoleEditorProjection } from "@candoitall/api-client";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

// import PageHeader from "@/components/PageHeader.vue";
import PageShell from "@/components/PageShell.vue";
import SubNavTabs from "@/components/SubNavTabs.vue";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getProcessDefinition, getProcessDefinitionRoles } from "./api";
import {
  formatResponsibilityKind,
  lintSeverityLabel,
  lintSeverityTone,
  PROCESS_ENTITY_BREADCRUMB_PATTERN,
  processDetailTabs,
} from "./types";

const route = useRoute();
const processId = route.params.processId as string;

const loading = ref(true);
const loadError = ref<string | null>(null);
const roleEditor = ref<ProcessDefinitionRoleEditorProjection | null>(null);
const definitionName = ref<string | null>(null);

async function load() {
  loading.value = true;
  loadError.value = null;
  try {
    const [roles, definition] = await Promise.all([
      getProcessDefinitionRoles(processId),
      getProcessDefinition(processId),
    ]);
    roleEditor.value = roles;
    definitionName.value = definition.identity.name;
  } catch (e) {
    loadError.value = e instanceof Error ? e.message : "The process roles could not be loaded.";
  } finally {
    loading.value = false;
  }
}

onMounted(load);
</script>

<template>
  <PageShell>
    <template #tabs
      ><SubNavTabs
        :tabs="processDetailTabs(processId)"
        selected="roles"
        :entity-title="definitionName ?? undefined"
        :entity-pattern="PROCESS_ENTITY_BREADCRUMB_PATTERN"
    /></template>

    <!--    <PageHeader-->
    <!--      title="Roles"-->
    <!--      description="Roles and staffing intent for this process definition."-->
    <!--    />-->

    <p v-if="loading" class="text-sm text-muted-foreground">Loading&hellip;</p>
    <p v-else-if="loadError" class="text-sm text-destructive">{{ loadError }}</p>

    <template v-else-if="roleEditor">
      <div
        v-if="roleEditor.roles.length === 0"
        class="py-12 text-center text-sm text-muted-foreground"
      >
        This process definition has no roles defined.
      </div>

      <Table v-else>
        <TableHeader>
          <TableRow>
            <TableHead>Role</TableHead>
            <TableHead>Summary</TableHead>
            <TableHead>Executor</TableHead>
            <TableHead>Step bindings</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="role in roleEditor.roles" :key="role.roleKey.value ?? ''">
            <TableCell class="font-medium text-foreground">{{ role.displayName }}</TableCell>
            <TableCell class="max-w-xs truncate text-sm text-muted-foreground">{{
              role.summary
            }}</TableCell>
            <TableCell class="max-w-xs truncate text-sm text-muted-foreground">{{
              role.draft.staffingIntent || "Unspecified"
            }}</TableCell>
            <TableCell class="text-sm text-muted-foreground">{{
              Number(role.stepBindingCount)
            }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Card v-if="roleEditor.stepRoleBindings.length > 0">
        <CardHeader>
          <CardTitle>Step role bindings</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Step</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Responsibility</TableHead>
                <TableHead>Required</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow
                v-for="binding in roleEditor.stepRoleBindings"
                :key="`${binding.stepKey.value}:${binding.roleKey.value}`"
              >
                <TableCell>{{ binding.stepTitle }}</TableCell>
                <TableCell>{{ binding.roleDisplayName }}</TableCell>
                <TableCell>
                  <Badge variant="outline">{{
                    formatResponsibilityKind(binding.responsibilityKind)
                  }}</Badge>
                </TableCell>
                <TableCell>
                  <Badge :variant="binding.isRequired ? 'secondary' : 'outline'">{{
                    binding.isRequired ? "Required" : "Optional"
                  }}</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card v-if="roleEditor.lint.issues.length > 0">
        <CardHeader>
          <CardTitle>Lint issues</CardTitle>
        </CardHeader>
        <CardContent class="space-y-2">
          <div
            v-for="issue in roleEditor.lint.issues"
            :key="issue.code"
            class="flex items-start justify-between gap-3 text-sm"
          >
            <div>
              <p>{{ issue.message }}</p>
              <p class="text-xs text-muted-foreground">{{ issue.suggestion }}</p>
            </div>
            <Badge :variant="lintSeverityTone(issue.severity)">{{
              lintSeverityLabel(issue.severity)
            }}</Badge>
          </div>
        </CardContent>
      </Card>
    </template>
  </PageShell>
</template>
