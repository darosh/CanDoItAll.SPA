Known gaps:

- [ ] The 13 workbench engine files stay IIFE-style pending your planned ES-module migration.
- [ ] Context actions open/connect/reconnect/summary/test/move-descendants-to-subproject and most quick-create types beyond note/decision/phase/milestone — need UI flows beyond a menu-to-REST mapping.
- [ ] ~40 other endpoints in ProjectStructureAgentApi.cs likely share the same missing-.Produces<>() gap; worth a backend audit before they're wired.
- [ ] Annotations (from ProjectStructureNodeAnnotationBuilder) not yet ported.
- [ ] canvas is based on https://konvajs.org/?
- [ ] improve agent workflow (notes bellow)
- [ ] separate all presentation level concerns in canvas (guides, minimap color...)
- [ ] design shapes/color per graph type - use same in floating windows so it works as legend as well
- [ ] design context menu, start with traditional menu, add the honeycomb vr inspired as another view option

---

## Documentation, Intent & Specification Rules (for Agents)

### 1. Goals & Features (High-level Source of Truth)

- Maintain a clear, high-level statement of the project’s goal and current feature set in the relevant README.md files.
  - Root `README.md` → overall product vision + high-level features.
  - Package / module `README.md` → specific goals and features for that part of the monorepo.
- These documents are the primary _intent_ source. Update them _before_ or _together with_ any code or specification changes.
- Agents **must** read the relevant README(s) first.

### 2. Gherkin as the Executable Source of Truth

- Gherkin scenarios (`.feature` files) are the precise, living definition of system behavior.
- Preferred structure:

```
  features/
  ├── backend/          # or api/, domain/
  ├── frontend/         # or ui/, web/
  └── shared/           # cross-cutting scenarios
```

(Adjust folder names to match the monorepo layout.)

- Rules for agents:
- Every non-trivial feature or behavior **must** have corresponding Gherkin scenarios.
- Prefer writing or updating Gherkin _before_ implementing code (specification-first).
- Gherkin scenarios drive **both backend and frontend tests**:
  - Backend: Use the scenarios as acceptance / integration / API tests (e.g. via Cucumber, Behave, pytest-bdd, Jest-Cucumber, etc.).
  - Frontend: Use the same (or linked) scenarios as end-to-end / component acceptance tests (e.g. Cypress + cucumber, Playwright + BDD, Testing Library + cucumber, etc.).
- When a scenario describes a full user journey, implement it as an E2E test that exercises both frontend and backend.
- Keep scenarios focused, readable, and independent where possible. Use Background, Scenario Outline, and tags (`@backend`, `@frontend`, `@e2e`, `@api`, etc.) for organization.
- Agents must ensure all relevant Gherkin scenarios pass before considering a change complete.

### 3. Changelog Discipline

- `CHANGELOG.md` contains only a clean, easy-to-read summary of the _unreleased_ version  
  (Keep a Changelog style: Added / Changed / Deprecated / Removed / Fixed / Security).
- Detailed change notes, migration guides, breaking-change explanations, and adoption help live in dedicated revision files  
  (e.g. `docs/revisions/unreleased.md` or `docs/revisions/vX.Y.Z.md`).
- When behavior changes, the detailed revision note should reference the affected Gherkin scenarios.

### 4. Agent Workflow (Mandatory Order)

1. Read the relevant README (goal + features).
2. Read the related Gherkin scenarios.
3. Update README and/or Gherkin **first** when intent or behavior changes.
4. Implement or update code so that the Gherkin scenarios pass  
   (backend tests + frontend tests + any E2E tests derived from the same scenarios).
5. Update the detailed revision file and the summary entry in `CHANGELOG.md`.
6. Prefer designs that allow another agent (or human) to fully re-implement the feature from:

- the README goal/features +
- the Gherkin scenarios +
- the detailed revision notes
  alone.

---

- Gherkin drives **both backend and frontend tests** (unit/integration/API + component/E2E).
- Prefer writing/updating Gherkin _before_ implementation code.
- All relevant scenarios must pass before a change is considered complete.
- Use tags (`@backend`, `@frontend`, `@e2e`, `@api`, etc.) for organization.

### 3. Changelog Discipline

- `CHANGELOG.md` → only a clean, easy-to-read summary of the _unreleased_ version (Keep a Changelog style).
- Detailed notes, migration guides, and adoption help → dedicated revision files  
  (`docs/revisions/unreleased.md` or versioned files).
- Reference affected Gherkin scenarios in the detailed revision notes when behavior changes.

### 4. Mandatory Agent Workflow

1. Read the relevant README (especially Purpose, Features, and Architecture/Implementation Decisions).
2. Read the related Gherkin scenarios.
3. Update README and/or Gherkin **first** when intent, features, or design decisions change.
4. Implement so that the Gherkin scenarios pass (backend + frontend + E2E as applicable).
5. Update the detailed revision file + summary entry in `CHANGELOG.md`.
6. Prefer solutions that remain regenerable from:

- README (Goal + Features + Architecture decisions)
- Gherkin scenarios
- Detailed revision notes
