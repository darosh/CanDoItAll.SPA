<script setup lang="ts">
import type {
  ProjectAccessListItem,
  ProjectEditorModel,
  ProjectOptionEditorModel,
  ProjectPhaseEditorModel,
  ProjectSummary,
} from "@candoitall/api-client";
import { Plus, Trash2 } from "@lucide/vue";
import { computed, onMounted, reactive, ref } from "vue";
import { RouterLink, useRoute, useRouter } from "vue-router";

import PageHeader from "@/components/PageHeader.vue";
import PageShell from "@/components/PageShell.vue";
import SubNavTabs from "@/components/SubNavTabs.vue";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { projectDetailTabs } from "@/lib/subNavTabs";

import {
  attachSubproject,
  deleteProject,
  detachSubproject,
  getProjectEditor,
  getProjectHierarchy,
  listProjectAccessItems,
  saveProject,
} from "./api";
import {
  DEFAULT_OPTION_CATEGORIES,
  formatOptionCategory,
  formatPhaseStatus,
  formatProjectStatus,
  PROJECT_ENTITY_BREADCRUMB_PATTERN,
  ProjectOptionCategory,
  ProjectPhaseStatus,
  ProjectStatus,
  projectStatusTone,
} from "./types";

const route = useRoute();
const router = useRouter();
const projectId = route.params.projectId as string;

const loading = ref(true);
const loadError = ref<string | null>(null);
const isBusy = ref(false);
const feedback = ref<{ type: "success" | "error" | "warning"; message: string } | null>(null);

const editor = reactive<{
  name: string;
  description: string;
  objective: string;
  status: number;
  currentPhase: string;
  targetDate: string;
  phases: ProjectPhaseEditorModel[];
  options: ProjectOptionEditorModel[];
}>({
  name: "",
  description: "",
  objective: "",
  status: ProjectStatus.Draft,
  currentPhase: "",
  targetDate: "",
  phases: [],
  options: [],
});

const parentProjects = ref<ProjectSummary[]>([]);
const childProjects = ref<ProjectSummary[]>([]);
const accessItems = ref<ProjectAccessListItem[]>([]);
const subprojectToAttach = ref("");

async function load(options: { silent?: boolean } = {}) {
  if (!options.silent) loading.value = true;
  loadError.value = null;
  try {
    const [model, hierarchy, access] = await Promise.all([
      getProjectEditor(projectId),
      getProjectHierarchy(projectId),
      listProjectAccessItems(),
    ]);

    editor.name = model.name ?? "";
    editor.description = model.description ?? "";
    editor.objective = model.objective ?? "";
    editor.status = model.status ?? ProjectStatus.Draft;
    editor.currentPhase = model.currentPhase ?? "";
    editor.targetDate = model.targetDateUtc
      ? new Date(model.targetDateUtc).toISOString().slice(0, 10)
      : "";
    editor.phases = (model.phases ?? []).map((phase) => ({ ...phase }));
    editor.options = (model.options ?? []).map((option) => ({ ...option }));
    for (const category of DEFAULT_OPTION_CATEGORIES) {
      if (!editor.options.some((o) => o.category === category)) {
        editor.options.push({ category, optionName: "", notes: "" });
      }
    }

    parentProjects.value = hierarchy.parentProjects;
    childProjects.value = hierarchy.childProjects;
    accessItems.value = access;
  } catch (e) {
    loadError.value = e instanceof Error ? e.message : "The project could not be loaded.";
  } finally {
    if (!options.silent) loading.value = false;
  }
}

onMounted(() => load());

const validationError = computed(() => {
  if (!editor.name.trim()) return "Name is required.";
  return null;
});

// load() seeds every DEFAULT_OPTION_CATEGORIES entry up front, so this is a
// pure lookup — safe to call from the template on every render.
function fixedOption(category: ProjectOptionCategory): ProjectOptionEditorModel {
  return (
    editor.options.find((o) => o.category === category) ?? {
      category,
      optionName: "",
      notes: "",
    }
  );
}

const otherOptions = computed(() =>
  editor.options.filter((o) => o.category === ProjectOptionCategory.Other),
);

function addOtherOption() {
  editor.options.push({ category: ProjectOptionCategory.Other, optionName: "", notes: "" });
}

function removeOption(option: ProjectOptionEditorModel) {
  editor.options = editor.options.filter((o) => o !== option);
}

function addPhase() {
  editor.phases.push({
    name: "",
    goal: "",
    status: ProjectPhaseStatus.Planned,
    startDateUtc: null,
    endDateUtc: null,
  });
}

function removePhase(index: number) {
  editor.phases.splice(index, 1);
}

function dateInputValue(value: Date | string | null | undefined): string {
  if (!value) return "";
  return new Date(value).toISOString().slice(0, 10);
}

const availableSubprojects = computed(() => {
  const existingChildIds = new Set(childProjects.value.map((p) => p.id));
  return accessItems.value.filter(
    (item) => item.id !== projectId && !existingChildIds.has(item.id),
  );
});

async function save() {
  if (isBusy.value) return;
  if (validationError.value) {
    feedback.value = { type: "error", message: validationError.value };
    return;
  }
  isBusy.value = true;
  feedback.value = null;
  try {
    const payload: ProjectEditorModel = {
      id: projectId,
      name: editor.name.trim(),
      description: editor.description.trim(),
      objective: editor.objective.trim(),
      status: editor.status,
      currentPhase: editor.currentPhase.trim(),
      targetDateUtc: editor.targetDate ? new Date(editor.targetDate) : null,
      phases: editor.phases,
      options: editor.options,
    };
    await saveProject(payload);
    await load({ silent: true });
    feedback.value = { type: "success", message: "Project saved." };
  } catch (e) {
    feedback.value = {
      type: "error",
      message: e instanceof Error ? e.message : "The project could not be saved.",
    };
  } finally {
    isBusy.value = false;
  }
}

async function attach() {
  if (!subprojectToAttach.value || isBusy.value) return;
  isBusy.value = true;
  feedback.value = null;
  try {
    await attachSubproject(projectId, subprojectToAttach.value);
    subprojectToAttach.value = "";
    await load({ silent: true });
  } catch (e) {
    feedback.value = {
      type: "error",
      message: e instanceof Error ? e.message : "The subproject could not be attached.",
    };
  } finally {
    isBusy.value = false;
  }
}

async function detachParent(parentId: string) {
  if (isBusy.value) return;
  isBusy.value = true;
  feedback.value = null;
  try {
    await detachSubproject(parentId, projectId);
    await load({ silent: true });
  } catch (e) {
    feedback.value = {
      type: "error",
      message: e instanceof Error ? e.message : "The parent project could not be detached.",
    };
  } finally {
    isBusy.value = false;
  }
}

async function detachChild(childId: string) {
  if (isBusy.value) return;
  isBusy.value = true;
  feedback.value = null;
  try {
    await detachSubproject(projectId, childId);
    await load({ silent: true });
  } catch (e) {
    feedback.value = {
      type: "error",
      message: e instanceof Error ? e.message : "The subproject could not be detached.",
    };
  } finally {
    isBusy.value = false;
  }
}

async function remove() {
  if (isBusy.value) return;
  isBusy.value = true;
  try {
    const outcome = await deleteProject(projectId);
    if (outcome.kind === "cleanup-pending") {
      feedback.value = { type: "warning", message: outcome.message };
    }
    router.push("/projects");
  } catch (e) {
    feedback.value = {
      type: "error",
      message: e instanceof Error ? e.message : "The project could not be deleted.",
    };
    isBusy.value = false;
  }
}

function cancel() {
  router.push("/projects");
}
</script>

<template>
  <PageShell>
    <template #tabs
      ><SubNavTabs
        :tabs="projectDetailTabs(projectId)"
        selected="details"
        :entity-title="editor.name"
        :entity-pattern="PROJECT_ENTITY_BREADCRUMB_PATTERN"
    /></template>

    <PageHeader v-if="editor.name" :title="editor.name" :description="editor.objective">
      <template #actions>
        <Badge :variant="projectStatusTone(editor.status)">{{
          formatProjectStatus(editor.status)
        }}</Badge>
      </template>
    </PageHeader>

    <p v-if="loading" class="text-sm text-muted-foreground">Loading&hellip;</p>
    <p v-else-if="loadError" class="text-sm text-destructive">{{ loadError }}</p>

    <template v-else>
      <div
        v-if="feedback"
        :class="[
          'rounded-md border p-4 text-sm',
          feedback.type === 'error'
            ? 'border-destructive/30 bg-destructive/5 text-destructive'
            : feedback.type === 'warning'
              ? 'border-warning/30 bg-warning/5 text-warning'
              : 'border-success/30 bg-success/5 text-success',
        ]"
      >
        {{ feedback.message }}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Identity</CardTitle>
        </CardHeader>
        <CardContent class="flex flex-col gap-4">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="flex flex-col gap-2">
              <Label for="project-name">Name</Label>
              <Input id="project-name" v-model="editor.name" maxlength="200" />
            </div>
            <div class="flex flex-col gap-2">
              <Label>Status</Label>
              <Select
                :model-value="String(editor.status)"
                @update:model-value="(v) => (editor.status = Number(v))"
              >
                <SelectTrigger class="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem
                    v-for="status in Object.values(ProjectStatus)"
                    :key="status"
                    :value="String(status)"
                  >
                    {{ formatProjectStatus(status) }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div class="flex flex-col gap-2">
              <Label for="project-phase">Current phase</Label>
              <Input id="project-phase" v-model="editor.currentPhase" maxlength="80" />
            </div>
            <div class="flex flex-col gap-2">
              <Label for="project-target-date">Target date</Label>
              <Input id="project-target-date" v-model="editor.targetDate" type="date" />
            </div>
          </div>

          <div class="flex flex-col gap-2">
            <Label for="project-description">Description</Label>
            <Textarea id="project-description" v-model="editor.description" class="min-h-24" />
          </div>

          <div class="flex flex-col gap-2">
            <Label for="project-objective">Objective</Label>
            <Textarea id="project-objective" v-model="editor.objective" class="min-h-24" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Phases</CardTitle>
        </CardHeader>
        <CardContent class="flex flex-col gap-3">
          <p v-if="editor.phases.length === 0" class="text-sm text-muted-foreground">
            No phases defined yet.
          </p>
          <Table v-else>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Goal</TableHead>
                <TableHead>Start</TableHead>
                <TableHead>End</TableHead>
                <TableHead class="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="(phase, index) in editor.phases" :key="index">
                <TableCell><Input v-model="phase.name" class="min-w-32" /></TableCell>
                <TableCell>
                  <Select
                    :model-value="String(phase.status ?? ProjectPhaseStatus.Planned)"
                    @update:model-value="(v) => (phase.status = Number(v))"
                  >
                    <SelectTrigger class="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        v-for="status in Object.values(ProjectPhaseStatus)"
                        :key="status"
                        :value="String(status)"
                      >
                        {{ formatPhaseStatus(status) }}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>
                <TableCell><Input v-model="phase.goal" class="min-w-40" /></TableCell>
                <TableCell>
                  <Input
                    type="date"
                    :model-value="dateInputValue(phase.startDateUtc)"
                    @update:model-value="
                      (v) => (phase.startDateUtc = v ? new Date(v as string) : null)
                    "
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="date"
                    :model-value="dateInputValue(phase.endDateUtc)"
                    @update:model-value="
                      (v) => (phase.endDateUtc = v ? new Date(v as string) : null)
                    "
                  />
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon-sm" @click="removePhase(index)">
                    <Trash2 class="size-3.5" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button variant="outline" size="sm" class="w-fit" @click="addPhase">
            <Plus class="size-3.5" />
            Add phase
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Stack profile</CardTitle>
        </CardHeader>
        <CardContent class="flex flex-col gap-3">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead class="w-32">Category</TableHead>
                <TableHead>Option name</TableHead>
                <TableHead>Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="category in DEFAULT_OPTION_CATEGORIES" :key="category">
                <TableCell class="text-sm font-medium">{{
                  formatOptionCategory(category)
                }}</TableCell>
                <TableCell
                  ><Input v-model="fixedOption(category).optionName" class="min-w-32"
                /></TableCell>
                <TableCell
                  ><Input v-model="fixedOption(category).notes" class="min-w-40"
                /></TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div class="mt-2 flex flex-col gap-2">
            <p class="text-sm font-medium text-foreground">Other</p>
            <div
              v-for="(option, index) in otherOptions"
              :key="index"
              class="flex flex-wrap items-center gap-2"
            >
              <Input v-model="option.optionName" placeholder="Option name" class="w-40" />
              <Input v-model="option.notes" placeholder="Notes" class="w-64" />
              <Button variant="ghost" size="icon-sm" @click="removeOption(option)">
                <Trash2 class="size-3.5" />
              </Button>
            </div>
            <Button variant="outline" size="sm" class="w-fit" @click="addOtherOption">
              <Plus class="size-3.5" />
              Add other
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hierarchy</CardTitle>
        </CardHeader>
        <CardContent class="flex flex-col gap-4">
          <div>
            <p class="mb-2 text-xs text-muted-foreground">Parent projects</p>
            <p v-if="parentProjects.length === 0" class="text-sm text-muted-foreground">
              No parent projects.
            </p>
            <div
              v-for="parent in parentProjects"
              :key="parent.id"
              class="flex items-center justify-between gap-2 py-1"
            >
              <RouterLink :to="`/projects/${parent.id}`" class="text-sm hover:underline">{{
                parent.name
              }}</RouterLink>
              <Button
                variant="outline"
                size="sm"
                :disabled="isBusy"
                @click="detachParent(parent.id)"
                >Detach</Button
              >
            </div>
          </div>

          <div>
            <p class="mb-2 text-xs text-muted-foreground">Child projects</p>
            <p v-if="childProjects.length === 0" class="text-sm text-muted-foreground">
              No subprojects.
            </p>
            <div
              v-for="child in childProjects"
              :key="child.id"
              class="flex items-center justify-between gap-2 py-1"
            >
              <RouterLink :to="`/projects/${child.id}`" class="text-sm hover:underline">{{
                child.name
              }}</RouterLink>
              <Button variant="outline" size="sm" :disabled="isBusy" @click="detachChild(child.id)"
                >Detach</Button
              >
            </div>
          </div>

          <div class="flex flex-wrap items-end gap-2">
            <div class="flex flex-col gap-1">
              <Label class="text-xs">Attach subproject</Label>
              <Select v-model="subprojectToAttach">
                <SelectTrigger class="w-64">
                  <SelectValue placeholder="Choose a project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem v-for="item in availableSubprojects" :key="item.id" :value="item.id">
                    {{ item.name }}
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              variant="outline"
              size="sm"
              :disabled="!subprojectToAttach || isBusy"
              @click="attach"
              >Attach</Button
            >
          </div>
        </CardContent>
      </Card>

      <div class="flex flex-wrap items-center justify-end gap-2">
        <Button variant="outline" :disabled="isBusy" @click="cancel">Cancel</Button>
        <AlertDialog>
          <AlertDialogTrigger as-child>
            <Button variant="destructive" :disabled="isBusy">Delete</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete this project?</AlertDialogTitle>
              <AlertDialogDescription>
                This permanently deletes "{{ editor.name }}". This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction @click="remove">Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Button :disabled="isBusy" @click="save">Save</Button>
      </div>
    </template>
  </PageShell>
</template>
