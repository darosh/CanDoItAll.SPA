<script setup lang="ts">
/**
 * original source  : https://github.com/fyziktom/CanDoItAll/blob/main/src/Modules/CanDoItAll.Modules.Workbench/Pages/ProjectStructurePage.razor
 * original URL     : http://localhost:5032/projects/:projectId/structure
 * URL              : http://localhost:5173/projects/:projectId/structure
 * opens            : /projects/:projectId/gantt
 */

import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import SubNavTabs from "@/components/SubNavTabs.vue";
import CanvasWorkbenchToolbar from "@/lib/canvas-workbench-toolbar/CanvasWorkbenchToolbar.vue";
import { projectDetailTabs } from "@/lib/subNavTabs";
import type {
  ContextActionRequest as CanvasWorkbenchContextActionRequest,
  CreateActionRequest as CanvasWorkbenchCreateActionRequest,
  NodeEditRequest as CanvasWorkbenchNodeEditRequest,
  NodesMovedEvent as CanvasWorkbenchNodesMovedEventArgs,
  CanvasWorkbenchSurfaceInput,
} from "@candoitall/canvas-workbench";
import { buildSurface, defaultUiState } from "@/pages/project-structure/adapter";
import {
  QUICK_CREATE_OBJECT_TYPES,
  parseMarkerAction,
  parsePriorityAction,
  parseProgressAction,
} from "@/pages/project-structure/actionCatalog";
import {
  createNode,
  deleteNode,
  disconnectNode,
  editNode,
  moveNode,
  readStructure,
  setNodeMarker,
  setNodePriority,
  setNodeProgress,
} from "@/pages/project-structure/api";

// Live wiring (port plan phase 4): loads the real project-structure graph via the generated API
// client and renders it through the ported CanvasWorkbench engine.
//
// Context-menu actions and quick-create use actionCatalog.ts's generic, ported subset (see that
// file's header comment) rather than the source's full per-family action composition. Actions
// outside that subset (open, connect, reconnect, summary, test, move-descendants-to-subproject)
// are logged, not executed — they need UI flows (dependency-link picking, a summary modal, node
// pickers) beyond a context-menu-to-REST mapping.
const route = useRoute();
const projectId = computed(() => String(route.params.projectId));

const loading = ref(true);
const loadError = ref<string | null>(null);
const surface = ref<CanvasWorkbenchSurfaceInput | null>(null);

interface NodeRecord {
  title: string;
  subtitle: string;
  objectType: string;
  parentId: string | null;
}

const nodesById = new Map<string, NodeRecord>();

async function load() {
  loading.value = true;
  loadError.value = null;
  try {
    const result = await readStructure(projectId.value);
    nodesById.clear();
    for (const node of result.nodes) {
      nodesById.set(node.id, {
        title: node.title,
        subtitle: node.subtitle,
        objectType: node.objectType,
        parentId: node.parentId,
      });
    }
    surface.value = buildSurface(result, surface.value?.uiState ?? defaultUiState());
  } catch (e) {
    loadError.value = e instanceof Error ? e.message : "The project structure could not be loaded.";
  } finally {
    loading.value = false;
  }
}

async function onNodesMoved(args: CanvasWorkbenchNodesMovedEventArgs) {
  await Promise.all(
    args.positions.map((position) =>
      moveNode(projectId.value, position.nodeId, position.x, position.y),
    ),
  );
}

async function onNodeEdited(request: CanvasWorkbenchNodeEditRequest) {
  const current = nodesById.get(request.nodeId);
  await editNode(
    projectId.value,
    request.nodeId,
    request.title,
    current?.subtitle ?? "",
    request.notes,
  );
  if (current) nodesById.set(request.nodeId, { ...current, title: request.title });
}

function copyToClipboard(text: string) {
  void navigator.clipboard?.writeText(text);
}

// Matches ProjectStructureActionCatalogAdapter's "type_title:id-hash" copy-info format closely
// enough for a v1 (the source's exact hash format wasn't traced — see the port plan's phase-4
// action-catalog research notes).
function formatNodeInfo(nodeId: string): string {
  const node = nodesById.get(nodeId);
  if (!node) return nodeId;
  return `${node.objectType}_${node.title}:${nodeId}`;
}

function collectSubtreeIds(rootId: string): string[] {
  const ids = [rootId];
  const childrenByParent = new Map<string, string[]>();
  for (const [id, node] of nodesById) {
    if (!node.parentId) continue;
    const siblings = childrenByParent.get(node.parentId) ?? [];
    siblings.push(id);
    childrenByParent.set(node.parentId, siblings);
  }
  for (let i = 0; i < ids.length; i++) {
    for (const childId of childrenByParent.get(ids[i]) ?? []) ids.push(childId);
  }
  return ids;
}

async function onContextAction(request: CanvasWorkbenchContextActionRequest) {
  const { nodeId, actionId } = request;
  if (!nodeId) {
    console.warn("[project-structure] context action without a node id is not handled", request);
    return;
  }

  const progress = parseProgressAction(actionId);
  if (progress) {
    await setNodeProgress(projectId.value, nodeId, progress.progressMode, progress.progressPercent);
    return;
  }

  const marker = parseMarkerAction(actionId);
  if (marker) {
    await setNodeMarker(
      projectId.value,
      nodeId,
      marker.markerIcon,
      marker.markerTone,
      marker.markerLabel,
    );
    return;
  }

  const priority = parsePriorityAction(actionId);
  if (priority !== null) {
    await setNodePriority(projectId.value, nodeId, priority);
    return;
  }

  switch (actionId) {
    case "edit": {
      const current = nodesById.get(nodeId);
      const title = window.prompt("Title", current?.title ?? "");
      if (title === null) return;
      const notes = window.prompt("Notes", "") ?? "";
      await editNode(projectId.value, nodeId, title, current?.subtitle ?? "", notes);
      break;
    }
    case "delete":
      if (!window.confirm("Delete this node?")) return;
      await deleteNode(projectId.value, nodeId);
      break;
    case "disconnect":
      await disconnectNode(projectId.value, nodeId);
      break;
    case "copy-id":
      copyToClipboard(nodeId);
      return;
    case "copy-info":
      copyToClipboard(formatNodeInfo(nodeId));
      return;
    case "copy-subtree-ids":
      copyToClipboard(collectSubtreeIds(nodeId).map(formatNodeInfo).join("\n"));
      return;
    default:
      console.warn("[project-structure] context action is not wired yet", request);
      return;
  }

  await load();
}

async function onCreateAction(request: CanvasWorkbenchCreateActionRequest) {
  const objectType = QUICK_CREATE_OBJECT_TYPES[request.actionId];
  if (!objectType) {
    console.warn("[project-structure] create action is not wired yet", request);
    return;
  }

  const parentNodeKey = request.parentNodeId ?? `project:${projectId.value}`;
  await createNode(
    projectId.value,
    objectType,
    request.title,
    request.subtitle,
    request.notes,
    parentNodeKey,
  );
  await load();
}

onMounted(load);
</script>

<template>
  <div class="flex h-full min-h-[640px] flex-col">
    <SubNavTabs :tabs="projectDetailTabs(projectId)" selected="structure" />
    <p v-if="loading" class="p-4 text-sm text-muted-foreground">Loading&hellip;</p>
    <p v-else-if="loadError" class="p-4 text-sm text-destructive">{{ loadError }}</p>
    <CanvasWorkbenchToolbar
      v-else-if="surface"
      :surface="surface"
      class="min-h-0 flex-1"
      @nodes-moved="onNodesMoved"
      @node-edited="onNodeEdited"
      @context-action="onContextAction"
      @create-action="onCreateAction"
    />
  </div>
</template>
