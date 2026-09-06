import { apiClient } from "@/lib/api-client";

// Thin wrapping layer over the generated project-structure operations, following the same
// convention as pages/prompts/api.ts. Unlike prompt-gallery, these endpoints don't return an
// ApiErrorResponse union on failure — they throw (see createRestError in the generated
// operations file) — so no unwrap() is needed here.

export async function readStructure(projectId: string) {
  return apiClient.postApiProjectStructureProjectsProjectIdStructureRead(
    projectId,
    "application/json",
    {
      includeLinks: true,
      includeLayout: true,
      includeMetadata: false,
      includeNotes: true,
    },
  );
}

export async function moveNode(
  projectId: string,
  nodeId: string,
  x: number,
  y: number,
): Promise<void> {
  await apiClient.postApiProjectStructureProjectsProjectIdNodesMove(projectId, { nodeId, x, y });
}

// The edit endpoint requires the full title/subtitle/notes triplet (there's no partial-update
// variant), but CanvasWorkbenchNodeEditRequest only carries title+notes — callers must look up
// the node's current subtitle themselves (e.g. from the last-loaded surface) and pass it through
// so this call doesn't silently blank it out.
export async function editNode(
  projectId: string,
  nodeId: string,
  title: string,
  subtitle: string,
  notes: string,
): Promise<void> {
  await apiClient.putApiProjectStructureProjectsProjectIdNodesNodeId(
    projectId,
    nodeId,
    "application/json",
    {
      title,
      subtitle,
      notes,
    },
  );
}

export async function deleteNode(projectId: string, nodeId: string): Promise<void> {
  await apiClient.postApiProjectStructureProjectsProjectIdNodesNodeIdDelete(projectId, nodeId, {
    managedStorageDisposition: "DeleteOwnedManagedFiles",
  });
}

export async function setNodeProgress(
  projectId: string,
  nodeId: string,
  progressMode: string,
  progressPercent: number,
): Promise<void> {
  await apiClient.postApiProjectStructureProjectsProjectIdNodesNodeIdProgress(projectId, nodeId, {
    progressMode,
    progressPercent,
  });
}

export async function setNodeMarker(
  projectId: string,
  nodeId: string,
  markerIcon: string,
  markerTone: string,
  markerLabel: string,
): Promise<void> {
  await apiClient.postApiProjectStructureProjectsProjectIdNodesNodeIdMarkers(projectId, nodeId, {
    markerIcon,
    markerTone,
    markerLabel,
  });
}

export async function setNodePriority(
  projectId: string,
  nodeId: string,
  priority: number,
): Promise<void> {
  await apiClient.postApiProjectStructureProjectsProjectIdNodesNodeIdPriority(projectId, nodeId, {
    priority,
  });
}

export async function disconnectNode(projectId: string, nodeId: string): Promise<void> {
  await apiClient.postApiProjectStructureProjectsProjectIdNodesNodeIdReparent(projectId, nodeId, {
    parentNodeKey: null,
  });
}

export async function createNode(
  projectId: string,
  objectType: string,
  title: string,
  subtitle: string,
  notes: string,
  parentNodeKey: string | null,
): Promise<void> {
  await apiClient.postApiProjectStructureProjectsProjectIdNodes(projectId, "application/json", {
    objectType,
    title,
    subtitle,
    notes,
    parentNodeKey,
  });
}
