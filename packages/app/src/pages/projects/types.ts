// The generated @candoitall/api-client carries the real project response/
// request shapes (see CLAUDE.md's "API client generation" section for how the
// backend's OpenAPI annotations were fixed to make this possible). This file
// only supplies the label/enum layer the generated client can't: the backend
// serializes every project enum as a plain number with no
// `JsonStringEnumConverter`, so there are no generated string unions to import.

export const ProjectStatus = {
  Draft: 0,
  Active: 1,
  OnHold: 2,
  Completed: 3,
  Archived: 4,
} as const;
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

export const ProjectPhaseStatus = {
  Planned: 0,
  Active: 1,
  Blocked: 2,
  Completed: 3,
} as const;
export type ProjectPhaseStatus = (typeof ProjectPhaseStatus)[keyof typeof ProjectPhaseStatus];

export const ProjectOptionCategory = {
  Language: 0,
  Database: 1,
  Ui: 2,
  ExternalApi: 3,
  Storage: 4,
  Deployment: 5,
  Testing: 6,
  Other: 7,
} as const;
export type ProjectOptionCategory =
  (typeof ProjectOptionCategory)[keyof typeof ProjectOptionCategory];

// Mirrors ProjectsService.EnsureDefaultCategories on the backend — every
// project editor always carries exactly one option row per category here.
// Only "Other" supports free-form, multi-entry options.
export const DEFAULT_OPTION_CATEGORIES: ProjectOptionCategory[] = [
  ProjectOptionCategory.Language,
  ProjectOptionCategory.Database,
  ProjectOptionCategory.Ui,
  ProjectOptionCategory.ExternalApi,
  ProjectOptionCategory.Storage,
  ProjectOptionCategory.Deployment,
  ProjectOptionCategory.Testing,
];

export function formatProjectStatus(status: number): string {
  switch (status) {
    case ProjectStatus.Draft:
      return "Draft";
    case ProjectStatus.Active:
      return "Active";
    case ProjectStatus.OnHold:
      return "On hold";
    case ProjectStatus.Completed:
      return "Completed";
    case ProjectStatus.Archived:
      return "Archived";
    default:
      return `Status ${status}`;
  }
}

export function projectStatusTone(status: number): "secondary" | "success" | "warning" | "outline" {
  switch (status) {
    case ProjectStatus.Active:
      return "success";
    case ProjectStatus.OnHold:
      return "warning";
    case ProjectStatus.Completed:
    case ProjectStatus.Archived:
      return "outline";
    default:
      return "secondary";
  }
}

export function formatPhaseStatus(status: number): string {
  switch (status) {
    case ProjectPhaseStatus.Planned:
      return "Planned";
    case ProjectPhaseStatus.Active:
      return "Active";
    case ProjectPhaseStatus.Blocked:
      return "Blocked";
    case ProjectPhaseStatus.Completed:
      return "Completed";
    default:
      return `Status ${status}`;
  }
}

export function phaseStatusTone(status: number): "secondary" | "success" | "warning" | "outline" {
  switch (status) {
    case ProjectPhaseStatus.Active:
      return "success";
    case ProjectPhaseStatus.Blocked:
      return "warning";
    case ProjectPhaseStatus.Completed:
      return "outline";
    default:
      return "secondary";
  }
}

export function formatOptionCategory(category: number): string {
  switch (category) {
    case ProjectOptionCategory.Language:
      return "Language";
    case ProjectOptionCategory.Database:
      return "Database";
    case ProjectOptionCategory.Ui:
      return "UI";
    case ProjectOptionCategory.ExternalApi:
      return "External API";
    case ProjectOptionCategory.Storage:
      return "Storage";
    case ProjectOptionCategory.Deployment:
      return "Deployment";
    case ProjectOptionCategory.Testing:
      return "Testing";
    case ProjectOptionCategory.Other:
      return "Other";
    default:
      return `Category ${category}`;
  }
}

// Client-side only — ListProjects takes no server-side query parameters.
export interface ProjectCatalogFilter {
  searchText?: string;
  status?: ProjectStatus | "";
}

// The route pattern shared by the project's Details/Structure/Gantt/Files/
// Management/Processes pages — used to override that ancestor's breadcrumb
// crumb with the loaded project's display name (see SubNavTabs.vue /
// usePageTitle.ts). projectDetailTabs itself stays in lib/subNavTabs.ts,
// which already has other consumers (the stub Project*Page.vue siblings).
export const PROJECT_ENTITY_BREADCRUMB_PATTERN = "/projects/:projectId";
