// Port of CanDoItAll/src/Modules/CanDoItAll.Modules.Workbench/ProjectNodes/ProjectNodeKindRegistry.cs's
// visual-profile table. The backend's /api/project-structure/.../structure/read response doesn't
// carry a node's icon/accent color/palette key on the wire — those are resolved server-side, in
// the Blazor app, from (objectType, objectSubtype, status) via this registry. Ported here (per
// the port plan's phase-4 decision) rather than extending the backend response, since the
// mapping is a pure, mechanical function of fields that already are on the wire.
//
// Only the visual-profile slice of the source file is ported — its role/reclassification/
// metadata-normalization logic has no equivalent need in a read-and-render SPA page.
//
// Keep this in sync with the source file's `BuildDescriptors()` table if the backend adds new
// object types/subtypes or changes a color/icon.

export interface ProjectObjectVisualProfile {
  /** Two-to-four letter monogram shown on the node (maps to CanvasWorkbenchNode.icon). */
  icon: string;
  accentColor: string;
  /** Human-readable type label (maps to CanvasWorkbenchNode.kind via the source's accentBadge field). */
  label: string;
  paletteKey: "primary" | "secondary" | "success" | "info" | "warning" | "danger" | "neutral";
}

function profile(
  accentColor: string,
  icon: string,
  label: string,
  paletteKey: ProjectObjectVisualProfile["paletteKey"],
): ProjectObjectVisualProfile {
  return { icon, accentColor, label, paletteKey };
}

type ProfileOrStatusFn =
  | ProjectObjectVisualProfile
  | ((status: string) => ProjectObjectVisualProfile);

function contains(status: string, needle: string): boolean {
  return status.toLowerCase().includes(needle.toLowerCase());
}

const processRunProfile = (status: string): ProjectObjectVisualProfile => {
  if (contains(status, "Active")) return profile("#0f766e", "RN", "Run", "success");
  if (contains(status, "Completed")) return profile("#16a34a", "RN", "Run", "success");
  if (contains(status, "Blocked") || contains(status, "Failed"))
    return profile("#dc2626", "RN", "Run", "danger");
  return profile("#0284c7", "RN", "Run", "info");
};

const workflowDefinitionProfile = (status: string): ProjectObjectVisualProfile =>
  contains(status, "Active")
    ? profile("#0f766e", "WF", "Workflow", "success")
    : profile("#7c3aed", "WF", "Workflow", "secondary");

const workflowRunProfile = (status: string): ProjectObjectVisualProfile => {
  if (contains(status, "Completed")) return profile("#16a34a", "WR", "Run", "success");
  if (contains(status, "Failed") || contains(status, "Cancelled"))
    return profile("#dc2626", "WR", "Run", "danger");
  if (contains(status, "Running") || contains(status, "Waiting"))
    return profile("#0f766e", "WR", "Run", "success");
  return profile("#0284c7", "WR", "Run", "info");
};

const validationRunProfile = (status: string): ProjectObjectVisualProfile =>
  contains(status, "Approved")
    ? profile("#16a34a", "VL", "Validate", "success")
    : profile("#dc2626", "VL", "Validate", "danger");

// Keyed by `${ProjectObjectType}::${ObjectSubtype}` ("" subtype is each family's fallback entry).
const descriptors: Record<string, ProfileOrStatusFn> = {
  "ProjectRoot::": profile("#0f172a", "PR", "Project", "primary"),
  "Phase::": profile("#2563eb", "PH", "Phase", "info"),
  "Milestone::": profile("#d97706", "MS", "Milestone", "warning"),
  "Note::": profile("#d97706", "NT", "Note", "warning"),
  "Decision::": profile("#ea580c", "DC", "Decision", "warning"),
  "PromptFlow::": profile("#0f766e", "PF", "Prompt", "success"),
  "PromptSession::": profile("#0f766e", "PF", "Prompt", "success"),
  "PromptStep::": profile("#14b8a6", "ST", "Step", "success"),
  "ProcessDefinition::": profile("#0f766e", "PR", "Process", "success"),
  "ProcessRun::": processRunProfile,
  "WorkflowDefinition::": workflowDefinitionProfile,
  "WorkflowRun::": workflowRunProfile,
  "ValidationRun::": validationRunProfile,
  "TestPlan::": profile("#7c3aed", "TS", "Test", "secondary"),
  "TestEvidence::": profile("#7c3aed", "TS", "Test", "secondary"),
  "SecretReference::": profile("#be123c", "SC", "Secret", "danger"),

  "ProjectBlock::feature": profile("#2563eb", "FB", "Feature", "info"),
  "ProjectBlock::architecture": profile("#4f46e5", "AR", "Architecture", "secondary"),
  "ProjectBlock::implementation": profile("#0f766e", "IM", "Implementation", "success"),
  "ProjectBlock::revision": profile("#f97316", "RB", "Revision", "warning"),
  "ProjectBlock::testing": profile("#7c3aed", "TB", "Testing", "secondary"),
  "ProjectBlock::prompting": profile("#0f766e", "PB", "Prompting", "success"),
  "ProjectBlock::research": profile("#0891b2", "RS", "Research", "info"),
  "ProjectBlock::financial": profile("#16a34a", "FN", "Financial", "success"),
  "ProjectBlock::marketing": profile("#db2777", "MK", "Marketing", "danger"),
  "ProjectBlock::operations": profile("#475569", "OP", "Operations", "neutral"),
  "ProjectBlock::delivery": profile("#d97706", "DL", "Delivery", "warning"),
  "ProjectBlock::risk": profile("#dc2626", "RK", "Risk", "danger"),
  "ProjectBlock::compliance": profile("#7c2d12", "CP", "Compliance", "warning"),
  "ProjectBlock::support": profile("#0284c7", "SP", "Support", "info"),
  "ProjectBlock::deployment": profile("#2563eb", "DP", "Deployment", "info"),
  "ProjectBlock::repos": profile("#0284c7", "RP", "Repos", "info"),
  "ProjectBlock::dockers": profile("#2563eb", "DK", "Dockers", "info"),
  "ProjectBlock::task-flow": profile("#2563eb", "TF", "Task flow", "info"),
  "ProjectBlock::backlog": profile("#7c3aed", "BG", "Backlog", "secondary"),
  "ProjectBlock::server": profile("#b91c1c", "SV", "Server", "danger"),
  "ProjectBlock::computer": profile("#334155", "PC", "Computer", "neutral"),
  "ProjectBlock::router": profile("#2563eb", "RT", "Router", "info"),
  "ProjectBlock::wifi": profile("#0ea5e9", "WF", "WiFi", "info"),
  "ProjectBlock::": profile("#334155", "BL", "Block", "primary"),

  "Meeting::online": profile("#0ea5e9", "ME", "Meeting", "info"),
  "Meeting::onsite": profile("#d97706", "ME", "Onsite", "warning"),
  "Meeting::": profile("#0ea5e9", "ME", "Meeting", "info"),

  "Recording::": profile("#8b5cf6", "RC", "Recording", "secondary"),
  "Transcript::": profile("#14b8a6", "TR", "Transcript", "success"),

  "Participant::hr": profile("#38bdf8", "HR", "HR", "info"),
  "Participant::team-block": profile("#2563eb", "TB", "Team", "info"),
  "Participant::team-section": profile("#1d4ed8", "TS", "Section", "info"),
  "Participant::freelancer": profile("#a855f7", "FR", "Freelancer", "secondary"),
  "Participant::partner": profile("#16a34a", "PA", "Partner", "success"),
  "Participant::ai-agent": profile("#0f766e", "AI", "AI", "success"),
  "Participant::": profile("#475569", "PT", "Participant", "primary"),

  "WorkItem::task": profile("#d97706", "TK", "Task", "warning"),
  "WorkItem::issue": profile("#dc2626", "IS", "Issue", "danger"),
  "WorkItem::revision": profile("#8b5cf6", "RV", "Revision", "secondary"),
  "WorkItem::feedback": profile("#0284c7", "FB", "Feedback", "info"),
  "WorkItem::payment": profile("#16a34a", "PM", "Payment", "success"),
  "WorkItem::send": profile("#2563eb", "SD", "Send", "primary"),
  "WorkItem::": profile("#475569", "WK", "Work", "neutral"),

  "Repository::remote": profile("#0f766e", "GH", "Remote", "success"),
  "Repository::local": profile("#0891b2", "RE", "Local", "info"),
  "Repository::folder": profile("#2563eb", "FD", "Folder", "primary"),
  "Repository::": profile("#0891b2", "RE", "Repo", "info"),

  "File::folder": profile("#2563eb", "FD", "Folder", "primary"),
  "File::pdf": profile("#dc2626", "PDF", "PDF", "danger"),
  "File::excel": profile("#16a34a", "XLS", "Excel", "success"),
  "File::docx": profile("#2563eb", "DOC", "Docx", "info"),
  "File::text": profile("#64748b", "TXT", "Text", "neutral"),
  "File::json": profile("#64748b", "JS", "JSON", "neutral"),
  "File::markdown": profile("#0284c7", "MD", "Markdown", "info"),
  "File::mermaid": profile("#7c3aed", "MMD", "Mermaid", "secondary"),
  "File::screenshot": profile("#db2777", "SS", "Screenshot", "danger"),
  "File::log": profile("#475569", "LOG", "Log", "neutral"),
  "File::archive": profile("#4338ca", "ZIP", "Archive", "primary"),
  "File::audio": profile("#0f766e", "AUD", "Audio", "success"),
  "File::": profile("#14b8a6", "FI", "File", "info"),
  "ImageAsset::": profile("#ec4899", "IM", "Image", "danger"),
  "VideoAsset::": profile("#7c3aed", "VD", "Video", "secondary"),

  "Script::powershell": profile("#2563eb", "PS", "PowerShell", "info"),
  "Script::posix-shell": profile("#334155", "SH", "POSIX shell", "neutral"),
  "Script::console": profile("#0f766e", "CS", "Console", "success"),
  "Script::ef-migration": profile("#d97706", "EF", "Migration", "warning"),
  "Script::tailwind-watch": profile("#0ea5e9", "TW", "Tailwind", "info"),
  "Script::": profile("#475569", "SC", "Script", "neutral"),

  "Environment::python": profile("#16a34a", "PY", "Python", "success"),
  "Environment::dotnet-runtime": profile("#2563eb", ".NET", "Runtime", "info"),
  "Environment::dotnet-watch": profile("#0ea5e9", "DW", "Watch", "info"),
  "Environment::dotnet-release": profile("#d97706", "REL", "Release", "warning"),
  "Environment::": profile("#475569", "ENV", "Environment", "neutral"),

  "Infrastructure::remote-server": profile("#b91c1c", "SV", "Server", "danger"),
  "Infrastructure::domain": profile("#0284c7", "DNS", "Domain", "info"),
  "Infrastructure::dns-record": profile("#0ea5e9", "DNS", "DNS", "info"),
  "Infrastructure::docker-mode": profile("#2563eb", "DK", "Docker", "info"),
  "Infrastructure::database": profile("#7c3aed", "DB", "Database", "secondary"),
  "Infrastructure::deployment-folder": profile("#2563eb", "FD", "Folder", "info"),
  "Infrastructure::storage-system": profile("#0f766e", "ST", "Storage", "success"),
  "Infrastructure::key-reference": profile("#be123c", "KEY", "Key", "danger"),
  "Infrastructure::ai-link": profile("#0f766e", "AI", "AI", "success"),
  "Infrastructure::": profile("#475569", "INF", "Infrastructure", "neutral"),

  "Link::": profile("#38bdf8", "LN", "Link", "info"),
  "Connector::": profile("#8b5cf6", "CN", "Connector", "secondary"),
};

const fallbackProfile = profile("#d97706", "NT", "Note", "warning");

export function resolveVisualProfile(
  objectType: string,
  objectSubtype: string | undefined,
  status: string | undefined,
): ProjectObjectVisualProfile {
  const normalizedSubtype = (objectSubtype ?? "").trim().toLowerCase();
  const exact = descriptors[`${objectType}::${normalizedSubtype}`];
  const entry = exact ?? descriptors[`${objectType}::`] ?? fallbackProfile;
  return typeof entry === "function" ? entry(status ?? "") : entry;
}
