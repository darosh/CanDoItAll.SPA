// Sub-nav tab lists for stub pages that have real siblings — either several
// detail views of one entity (id-scoped) or several peer catalog pages under
// one nav item (static). See SubNavTabs.vue for the rendering side and
// pages/processes/types.ts's processDetailTabs for the original entity-detail
// pattern this mirrors.

export function projectDetailTabs(projectId: string) {
  return [
    { key: "details", label: "Details", to: `/projects/${projectId}` },
    { key: "structure", label: "Structure", to: `/projects/${projectId}/structure` },
    { key: "gantt", label: "Gantt", to: `/projects/${projectId}/gantt` },
    { key: "files", label: "Files", to: `/projects/${projectId}/files` },
    { key: "management", label: "Management", to: `/projects/${projectId}/management` },
    { key: "processes", label: "Processes", to: `/projects/${projectId}/processes` },
  ];
}

export function agentDetailTabs(agentId: string) {
  return [
    { key: "overview", label: "Overview", to: `/agents/${agentId}` },
    { key: "configuration", label: "Configuration", to: `/agents/${agentId}/configuration` },
    { key: "capabilities", label: "Capabilities", to: `/agents/${agentId}/capabilities` },
    { key: "governance", label: "Governance", to: `/agents/${agentId}/governance` },
    { key: "activity", label: "Activity", to: `/agents/${agentId}/activity` },
  ];
}

export function workflowDetailTabs(workflowId: string) {
  return [
    { key: "overview", label: "Overview", to: `/workflows/${workflowId}` },
    { key: "design", label: "Design", to: `/workflows/${workflowId}/design` },
    { key: "runs", label: "Runs", to: `/workflows/${workflowId}/runs` },
  ];
}

export function memoryProviderDetailTabs(memoryId: string) {
  return [
    { key: "overview", label: "Overview", to: `/memory/${memoryId}` },
    { key: "operations", label: "Operations", to: `/memory/${memoryId}/operations` },
    { key: "events", label: "Events", to: `/memory/${memoryId}/events` },
    { key: "feedback", label: "Feedback", to: `/memory/${memoryId}/feedback` },
    { key: "query", label: "Query", to: `/memory/${memoryId}/query` },
    { key: "ingestion", label: "Ingestion", to: `/memory/${memoryId}/ingestion` },
    { key: "provider-ui", label: "Provider UI", to: `/memory/${memoryId}/provider-ui` },
  ];
}

export function collaborationTabs() {
  return [
    { key: "inbox", label: "Inbox", to: "/collaboration" },
    { key: "threads", label: "All threads", to: "/collaboration/threads" },
    { key: "escalations", label: "Escalations", to: "/collaboration/escalations" },
  ];
}

export function crmHrTabs() {
  return [
    { key: "overview", label: "Overview", to: "/crm-hr" },
    { key: "directory", label: "Directory", to: "/crm-hr/directory" },
    { key: "accounts", label: "Accounts", to: "/crm-hr/accounts" },
    { key: "workforce", label: "Workforce", to: "/crm-hr/workforce" },
    { key: "recruiting", label: "Recruiting", to: "/crm-hr/recruiting" },
    { key: "agents", label: "Agents", to: "/crm-hr/agents" },
    { key: "assignments", label: "Assignments", to: "/crm-hr/assignments" },
  ];
}

export function resourcesTabs() {
  return [
    { key: "catalog", label: "Catalog", to: "/resources" },
    { key: "browse", label: "Browse", to: "/resources/browse" },
  ];
}

export function schedulerLibraryTabs() {
  return [
    { key: "catalog", label: "Catalog", to: "/scheduler" },
    { key: "schedules", label: "Schedules", to: "/scheduler/schedules" },
  ];
}

export function agentsCatalogTabs() {
  return [
    { key: "catalog", label: "Catalog", to: "/agents" },
    { key: "providers", label: "Providers", to: "/agents/providers" },
    { key: "capabilities", label: "Capability catalog", to: "/agents/capabilities" },
    { key: "diagnostics", label: "Diagnostics", to: "/agents/diagnostics" },
  ];
}

export function settingsTabs() {
  return [
    { key: "workspace", label: "Workspace", to: "/settings" },
    { key: "data-sources", label: "Data sources", to: "/settings/data-sources" },
    { key: "storage", label: "Storage", to: "/settings/storage" },
    { key: "files", label: "Files", to: "/settings/files" },
    { key: "secrets", label: "Secrets", to: "/settings/secrets" },
    { key: "database", label: "Database", to: "/settings/database" },
    {
      key: "runtime-capabilities",
      label: "Runtime capabilities",
      to: "/settings/runtime-capabilities",
    },
    { key: "api-access", label: "API access", to: "/settings/api-access" },
  ];
}
