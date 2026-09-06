// Sidebar structure per docs/navigation-proposal-menu.md, "Option C-revised — add a
// peer Execution section". Only top-level catalog/landing entries appear in the nav;
// detail routes (`/agents/:id`, run detail, etc.) are reached by drilling in, not
// listed here.
import type { Component } from "vue";
import {
  Bot,
  Calendar,
  ChartLine,
  CirclePlay,
  ClipboardClock,
  Contact,
  FlaskConical,
  FolderKanban,
  GitBranch,
  Inbox,
  LayoutDashboard,
  Library,
  ListChecks,
  ListTodo,
  Puzzle,
  Settings,
  Workflow,
  Terminal,
} from "@lucide/vue";

export interface NavLink {
  title: string;
  to: string;
  icon: Component;
}

export interface NavGroup {
  id: "workspace" | "execution" | "library";
  label: string;
  items: NavLink[];
}

export const navGroups: NavGroup[] = [
  {
    id: "workspace",
    label: "Workspace",
    items: [
      { title: "Dashboard", to: "/", icon: LayoutDashboard },
      { title: "Projects", to: "/projects", icon: FolderKanban },
      { title: "Collaboration", to: "/collaboration", icon: Inbox },
      { title: "CRM / HR", to: "/crm-hr", icon: Contact },
    ],
  },
  {
    id: "execution",
    label: "Execution",
    items: [
      { title: "Process runs", to: "/processes/runs", icon: ListChecks },
      { title: "Workflow runs", to: "/workflows/runs", icon: GitBranch },
      { title: "Workflow analytics", to: "/workflows/analytics", icon: ChartLine },
      { title: "Agent sessions", to: "/agents/sessions", icon: CirclePlay },
      { title: "Schedule history", to: "/scheduler/history", icon: ClipboardClock },
    ],
  },
  {
    id: "library",
    label: "Library",
    items: [
      { title: "Agents", to: "/agents", icon: Bot },
      { title: "Workflows", to: "/workflows", icon: Workflow },
      { title: "Processes", to: "/processes", icon: ListTodo },
      { title: "Prompts", to: "/prompts", icon: Terminal },
      { title: "Resources", to: "/resources", icon: Library },
      { title: "Plugins", to: "/plugins", icon: Puzzle },
      { title: "Scheduler", to: "/scheduler", icon: Calendar },
      { title: "Test Lab", to: "/test-lab", icon: FlaskConical },
    ],
  },
];

export const settingsLink: NavLink = { title: "Settings", to: "/settings", icon: Settings };
