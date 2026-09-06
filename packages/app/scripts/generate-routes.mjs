// One-off generator: scaffolds stub page components + a router manifest from a
// declarative route table. Re-run any time the nav proposal's route table changes;
// it will not touch pages that were hand-built (prompts list/detail are skipped here
// and wired manually in router/index.ts).
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const pagesDir = join(root, "..", "src", "pages");

// [group, path, title, componentName]
const routes = [
  // Workspace
  ["workspace", "/", "Dashboard", "DashboardPage"],
  ["workspace", "/projects", "Projects", "ProjectsPage"],
  ["workspace", "/projects/:projectId", "Project details", "ProjectDetailPage"],
  ["workspace", "/projects/:projectId/structure", "Project structure", "ProjectStructurePage"],
  ["workspace", "/projects/:projectId/gantt", "Project gantt", "ProjectGanttPage"],
  ["workspace", "/projects/:projectId/files", "Project files", "ProjectFilesPage"],
  ["workspace", "/projects/:projectId/management", "Project management", "ProjectManagementPage"],
  ["workspace", "/projects/:projectId/processes", "Project processes", "ProjectProcessesPage"],
  ["workspace", "/collaboration/inbox", "Inbox", "CollaborationInboxPage"],
  ["workspace", "/collaboration/threads", "All threads", "CollaborationThreadsPage"],
  [
    "workspace",
    "/collaboration/threads/:threadId",
    "Thread detail",
    "CollaborationThreadDetailPage",
  ],
  ["workspace", "/collaboration/escalations", "Escalations", "CollaborationEscalationsPage"],
  ["workspace", "/crm-hr", "CRM / HR", "CrmHrPage"],
  ["workspace", "/crm-hr/directory", "Directory", "CrmDirectoryPage"],
  ["workspace", "/crm-hr/directory/:partyId", "Party detail", "CrmPartyDetailPage"],
  ["workspace", "/crm-hr/accounts", "Accounts", "CrmAccountsPage"],
  ["workspace", "/crm-hr/accounts/:partyId", "Account detail", "CrmAccountDetailPage"],
  [
    "workspace",
    "/crm-hr/opportunities/:opportunityId",
    "Opportunity detail",
    "CrmOpportunityDetailPage",
  ],
  ["workspace", "/crm-hr/workforce", "Workforce", "CrmWorkforcePage"],
  ["workspace", "/crm-hr/workforce/:partyId", "Workforce profile", "CrmWorkforceProfilePage"],
  ["workspace", "/crm-hr/recruiting", "Recruiting", "CrmRecruitingPage"],
  [
    "workspace",
    "/crm-hr/recruiting/:applicationId",
    "Application detail",
    "CrmApplicationDetailPage",
  ],
  ["workspace", "/crm-hr/agents", "Business-facing agents", "CrmAgentsPage"],
  ["workspace", "/crm-hr/agents/:partyId", "Business-facing agent detail", "CrmAgentDetailPage"],
  ["workspace", "/crm-hr/assignments", "Assignments", "CrmAssignmentsPage"],
  [
    "workspace",
    "/crm-hr/assignments/:assignmentId",
    "Assignment detail",
    "CrmAssignmentDetailPage",
  ],
  [
    "workspace",
    "/crm-hr/staffing-requests/:requestId",
    "Staffing request detail",
    "CrmStaffingRequestDetailPage",
  ],

  // Execution
  ["execution", "/processes/runs", "Process runs", "ProcessRunsPage"],
  ["execution", "/processes/runs/:runId", "Process run detail", "ProcessRunDetailPage"],
  ["execution", "/workflows/runs", "Workflow runs", "WorkflowRunsPage"],
  [
    "execution",
    "/workflows/:workflowId/runs",
    "Workflow runs (single workflow)",
    "WorkflowRunsForWorkflowPage",
  ],
  ["execution", "/workflows/runs/:runId", "Workflow run detail", "WorkflowRunDetailPage"],
  ["execution", "/workflows/analytics", "Workflow analytics", "WorkflowAnalyticsPage"],
  ["execution", "/agents/chats", "Agent chats", "AgentChatsPage"],
  ["execution", "/agents/sessions", "Agent sessions", "AgentSessionsPage"],
  ["execution", "/agents/:agentId/chats", "Agent chat sessions", "AgentChatSessionsPage"],
  ["execution", "/scheduler/history", "Schedule history", "SchedulerHistoryPage"],
  ["execution", "/scheduler/schedules/:scheduleId", "Schedule detail", "ScheduleDetailPage"],

  // Library
  ["library", "/agents", "Agents", "AgentsPage"],
  ["library", "/agents/:agentId", "Agent overview", "AgentOverviewPage"],
  ["library", "/agents/:agentId/configuration", "Agent configuration", "AgentConfigurationPage"],
  ["library", "/agents/:agentId/capabilities", "Agent capabilities", "AgentCapabilitiesDetailPage"],
  ["library", "/agents/:agentId/governance", "Agent governance", "AgentGovernancePage"],
  ["library", "/agents/:agentId/activity", "Agent activity", "AgentActivityPage"],
  ["library", "/agents/teams/:teamId", "Team overview", "AgentTeamOverviewPage"],
  ["library", "/agents/providers", "Provider profiles", "AgentProvidersPage"],
  ["library", "/agents/capabilities", "Capability catalog", "AgentCapabilityCatalogPage"],
  ["library", "/agents/diagnostics", "Diagnostics", "AgentDiagnosticsPage"],
  ["library", "/workflows", "Workflows", "WorkflowsPage"],
  ["library", "/workflows/:workflowId", "Workflow overview", "WorkflowOverviewPage"],
  ["library", "/workflows/:workflowId/design", "Workflow designer", "WorkflowDesignerPage"],
  ["library", "/processes", "Processes", "ProcessesPage"],
  ["library", "/processes/:processId", "Process overview", "ProcessOverviewPage"],
  ["library", "/processes/:processId/design", "Process design", "ProcessDesignPage"],
  ["library", "/processes/:processId/roles", "Process roles", "ProcessRolesPage"],
  ["library", "/processes/:processId/activity", "Process activity", "ProcessActivityPage"],
  ["library", "/resources", "Resources", "ResourcesPage"],
  ["library", "/resources/browse", "Browse resources", "ResourcesBrowsePage"],
  ["library", "/resources/:resourceId", "Resource detail", "ResourceDetailPage"],
  ["library", "/plugins", "Plugins", "PluginsPage"],
  ["library", "/plugins/:pluginId", "Plugin detail", "PluginDetailPage"],
  ["library", "/scheduler", "Scheduler", "SchedulerPage"],
  ["library", "/scheduler/schedules", "Schedules", "SchedulesPage"],
  ["library", "/test-lab", "Test Lab", "TestLabPage"],
  ["library", "/test-lab/plans/:planId", "Test plan detail", "TestPlanDetailPage"],

  // Settings
  ["settings", "/settings", "Settings", "SettingsPage"],
  ["settings", "/settings/workspace", "Workspace settings", "SettingsWorkspacePage"],
  ["settings", "/settings/data-sources", "Data sources", "SettingsDataSourcesPage"],
  ["settings", "/settings/storage", "Storage", "SettingsStoragePage"],
  ["settings", "/settings/files", "Files", "SettingsFilesPage"],
  ["settings", "/settings/secrets", "Secrets", "SettingsSecretsPage"],
  ["settings", "/settings/database", "Database profiles", "SettingsDatabasePage"],
];

// Pages built by hand elsewhere — do not stub-generate these.
const handBuilt = new Set(["/prompts", "/prompts/:promptId"]);

for (const [, path, title, componentName] of routes) {
  if (handBuilt.has(path)) continue;
  const file = join(pagesDir, `${componentName}.vue`);
  if (existsSync(file)) continue; // never clobber a page that's been fleshed out
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(
    file,
    `<script setup lang="ts">
import StubPage from "@/components/StubPage.vue";
</script>

<template>
  <StubPage title="${title.replace(/"/g, '\\"')}" />
</template>
`,
  );
}

const manifestLines = routes
  .map(([group, path, title, componentName]) => {
    const importPath = handBuilt.has(path) ? null : `@/pages/${componentName}.vue`;
    return `  { group: ${JSON.stringify(group)}, path: ${JSON.stringify(path)}, title: ${JSON.stringify(title)}, component: ${
      importPath ? `() => import(${JSON.stringify(importPath)})` : "null"
    } },`;
  })
  .join("\n");

writeFileSync(
  join(root, "..", "src", "router", "routes.generated.ts"),
  `// Generated by scripts/generate-routes.mjs — do not hand-edit. Re-run the script
// after changing the route table in that file.
export interface GeneratedRoute {
  group: "workspace" | "execution" | "library" | "settings";
  path: string;
  title: string;
  component: (() => Promise<unknown>) | null;
}

export const generatedRoutes: GeneratedRoute[] = [
${manifestLines}
];
`,
);

console.log(`Generated ${routes.length - handBuilt.size} stub pages + routes manifest.`);
