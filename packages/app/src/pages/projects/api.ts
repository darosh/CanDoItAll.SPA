import type {
  ApiErrorResponse,
  ProjectAccessListItem,
  ProjectDeletionResult,
  ProjectEditorModel,
  ProjectHierarchySnapshot,
  ProjectSummary,
} from "@candoitall/api-client";

import { apiClient } from "@/lib/api-client";

function isApiError(value: unknown): value is ApiErrorResponse {
  return !!value && typeof value === "object" && "errors" in value;
}

function unwrap<T>(result: T | ApiErrorResponse): T {
  if (isApiError(result)) {
    const message = result.errors.map((error) => error.message).join(" ") || "Request failed.";
    throw new Error(message);
  }
  return result;
}

export async function listProjects(): Promise<ProjectSummary[]> {
  return unwrap(await apiClient.listProjects());
}

export async function listProjectAccessItems(): Promise<ProjectAccessListItem[]> {
  return unwrap(await apiClient.listProjectAccessItems());
}

export async function getProjectEditor(projectId: string): Promise<ProjectEditorModel> {
  return unwrap(await apiClient.getProjectEditor(projectId));
}

export async function saveProject(editor: ProjectEditorModel): Promise<string> {
  return unwrap(await apiClient.saveProject(editor));
}

export async function getProjectHierarchy(projectId: string): Promise<ProjectHierarchySnapshot> {
  return unwrap(await apiClient.getProjectHierarchy(projectId));
}

export async function attachSubproject(parentId: string, childId: string): Promise<void> {
  unwrap(await apiClient.attachProjectSubproject(parentId, childId));
}

export async function detachSubproject(parentId: string, childId: string): Promise<void> {
  unwrap(await apiClient.detachProjectSubproject(parentId, childId));
}

// The 409 "cleanup pending" body ({code, message, recovery}) has no `errors`
// key, so isApiError() would misread it as a success value — handle it
// explicitly instead of routing deleteProject through unwrap(). The project
// row is gone either way (DeleteAsync commits before any cleanup exception is
// raised); no cleanup-recovery UI is built here, this only keeps the 409 from
// masquerading as success or throwing.
export type ProjectDeleteOutcome =
  | { kind: "deleted"; result: ProjectDeletionResult }
  | { kind: "cleanup-pending"; message: string };

export async function deleteProject(projectId: string): Promise<ProjectDeleteOutcome> {
  const result = await apiClient.deleteProject(projectId);
  if (result && typeof result === "object" && "code" in result) {
    return { kind: "cleanup-pending", message: result.message };
  }
  return { kind: "deleted", result: result as ProjectDeletionResult };
}
