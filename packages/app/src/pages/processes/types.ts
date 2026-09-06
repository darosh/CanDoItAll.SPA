// The generated @candoitall/api-client carries the real process-definition
// catalog/editor/role/step response shapes (new endpoints added to the backend
// for this page — see CLAUDE.md's "API client generation" section for the
// general pattern). This file only supplies the label/enum layer the generated
// client can't: these enums serialize as plain numbers with no
// `JsonStringEnumConverter`, so there are no generated string unions to import.

export const ProcessDefinitionCatalogScopeKind = {
  All: 0,
  Global: 1,
  Project: 2,
} as const;
export type ProcessDefinitionCatalogScopeKind =
  (typeof ProcessDefinitionCatalogScopeKind)[keyof typeof ProcessDefinitionCatalogScopeKind];

export const ProcessDefinitionCatalogItemStatus = {
  TemplateDefault: 0,
  Draft: 1,
  Published: 2,
  RequiresReview: 3,
} as const;
export type ProcessDefinitionCatalogItemStatus =
  (typeof ProcessDefinitionCatalogItemStatus)[keyof typeof ProcessDefinitionCatalogItemStatus];

export const ProcessDefinitionAuthoringStatus = {
  TemplateDefault: 0,
  Draft: 1,
  Published: 2,
  Archived: 3,
} as const;
export type ProcessDefinitionAuthoringStatus =
  (typeof ProcessDefinitionAuthoringStatus)[keyof typeof ProcessDefinitionAuthoringStatus];

export const ProcessDefinitionCriticalityLevel = {
  Unspecified: 0,
  Low: 1,
  Standard: 2,
  High: 3,
  MissionCritical: 4,
} as const;
export type ProcessDefinitionCriticalityLevel =
  (typeof ProcessDefinitionCriticalityLevel)[keyof typeof ProcessDefinitionCriticalityLevel];

export const ProcessDefinitionAutonomyLevel = {
  Unspecified: 0,
  Manual: 1,
  Assisted: 2,
  Guarded: 3,
  Delegated: 4,
} as const;
export type ProcessDefinitionAutonomyLevel =
  (typeof ProcessDefinitionAutonomyLevel)[keyof typeof ProcessDefinitionAutonomyLevel];

export const ProcessDefinitionOperatingModeKind = {
  Unspecified: 0,
  Manual: 1,
  AssistedExecution: 2,
  GovernedLive: 3,
} as const;
export type ProcessDefinitionOperatingModeKind =
  (typeof ProcessDefinitionOperatingModeKind)[keyof typeof ProcessDefinitionOperatingModeKind];

export const ProcessDefinitionStepKind = {
  Unspecified: 0,
  Start: 1,
  Work: 2,
  Decision: 3,
  Review: 4,
  Approval: 5,
  Delivery: 6,
} as const;
export type ProcessDefinitionStepKind =
  (typeof ProcessDefinitionStepKind)[keyof typeof ProcessDefinitionStepKind];

export const ProcessDefinitionLintSeverity = {
  Info: 0,
  Warning: 1,
  Error: 2,
} as const;
export type ProcessDefinitionLintSeverity =
  (typeof ProcessDefinitionLintSeverity)[keyof typeof ProcessDefinitionLintSeverity];

export function formatCatalogItemStatus(status: number): string {
  switch (status) {
    case ProcessDefinitionCatalogItemStatus.Draft:
      return "Draft";
    case ProcessDefinitionCatalogItemStatus.Published:
      return "Published";
    case ProcessDefinitionCatalogItemStatus.RequiresReview:
      return "Requires review";
    default:
      return "Template default";
  }
}

export function catalogItemStatusTone(
  status: number,
): "outline" | "secondary" | "success" | "warning" {
  switch (status) {
    case ProcessDefinitionCatalogItemStatus.Draft:
      return "secondary";
    case ProcessDefinitionCatalogItemStatus.Published:
      return "success";
    case ProcessDefinitionCatalogItemStatus.RequiresReview:
      return "warning";
    default:
      return "outline";
  }
}

export function formatAuthoringStatus(status: number): string {
  switch (status) {
    case ProcessDefinitionAuthoringStatus.Draft:
      return "Draft";
    case ProcessDefinitionAuthoringStatus.Published:
      return "Published";
    case ProcessDefinitionAuthoringStatus.Archived:
      return "Archived";
    default:
      return "Template default";
  }
}

export function authoringStatusTone(
  status: number,
): "outline" | "secondary" | "success" | "warning" {
  switch (status) {
    case ProcessDefinitionAuthoringStatus.Draft:
      return "secondary";
    case ProcessDefinitionAuthoringStatus.Published:
      return "success";
    case ProcessDefinitionAuthoringStatus.Archived:
      return "warning";
    default:
      return "outline";
  }
}

export function formatCriticality(level: number): string {
  switch (level) {
    case ProcessDefinitionCriticalityLevel.Low:
      return "Low";
    case ProcessDefinitionCriticalityLevel.Standard:
      return "Standard";
    case ProcessDefinitionCriticalityLevel.High:
      return "High";
    case ProcessDefinitionCriticalityLevel.MissionCritical:
      return "Mission critical";
    default:
      return "Unspecified";
  }
}

export function formatOperatingMode(mode: number): string {
  switch (mode) {
    case ProcessDefinitionOperatingModeKind.Manual:
      return "Manual";
    case ProcessDefinitionOperatingModeKind.AssistedExecution:
      return "Assisted execution";
    case ProcessDefinitionOperatingModeKind.GovernedLive:
      return "Governed live";
    default:
      return "Unspecified";
  }
}

export function formatAutonomyLevel(level: number): string {
  switch (level) {
    case ProcessDefinitionAutonomyLevel.Manual:
      return "Manual";
    case ProcessDefinitionAutonomyLevel.Assisted:
      return "Assisted";
    case ProcessDefinitionAutonomyLevel.Guarded:
      return "Guarded";
    case ProcessDefinitionAutonomyLevel.Delegated:
      return "Delegated";
    default:
      return "Unspecified";
  }
}

export function formatStepKind(kind: number): string {
  switch (kind) {
    case ProcessDefinitionStepKind.Start:
      return "Start";
    case ProcessDefinitionStepKind.Work:
      return "Work";
    case ProcessDefinitionStepKind.Decision:
      return "Decision";
    case ProcessDefinitionStepKind.Review:
      return "Review";
    case ProcessDefinitionStepKind.Approval:
      return "Approval";
    case ProcessDefinitionStepKind.Delivery:
      return "Delivery";
    default:
      return "Unspecified";
  }
}

export const ProcessStepRoleResponsibilityKind = {
  Responsible: 0,
  Reviewer: 1,
  Approver: 2,
  Observer: 3,
  Contributor: 4,
} as const;
export type ProcessStepRoleResponsibilityKind =
  (typeof ProcessStepRoleResponsibilityKind)[keyof typeof ProcessStepRoleResponsibilityKind];

export function formatResponsibilityKind(kind: number): string {
  switch (kind) {
    case ProcessStepRoleResponsibilityKind.Reviewer:
      return "Reviewer";
    case ProcessStepRoleResponsibilityKind.Approver:
      return "Approver";
    case ProcessStepRoleResponsibilityKind.Observer:
      return "Observer";
    case ProcessStepRoleResponsibilityKind.Contributor:
      return "Contributor";
    default:
      return "Responsible";
  }
}

export function lintSeverityTone(severity: number): "secondary" | "warning" | "destructive" {
  switch (severity) {
    case ProcessDefinitionLintSeverity.Warning:
      return "warning";
    case ProcessDefinitionLintSeverity.Error:
      return "destructive";
    default:
      return "secondary";
  }
}

export function lintSeverityLabel(severity: number): string {
  switch (severity) {
    case ProcessDefinitionLintSeverity.Warning:
      return "Warning";
    case ProcessDefinitionLintSeverity.Error:
      return "Error";
    default:
      return "Info";
  }
}

export interface ProcessDefinitionCatalogQuery {
  searchText?: string;
  scopeFilter?: ProcessDefinitionCatalogScopeKind;
}

// The route pattern shared by the definition's Overview/Roles/Design pages —
// used to override that ancestor's breadcrumb crumb with the loaded entity's
// display name (see SubNavTabs.vue / usePageTitle.ts).
export const PROCESS_ENTITY_BREADCRUMB_PATTERN = "/processes/:processId";

export function processDetailTabs(processId: string) {
  return [
    { key: "overview", label: "Overview", to: `/processes/${processId}` },
    { key: "roles", label: "Roles", to: `/processes/${processId}/roles` },
    { key: "design", label: "Design", to: `/processes/${processId}/design` },
    { key: "activity", label: "Activity", to: `/processes/${processId}/activity` },
  ];
}
