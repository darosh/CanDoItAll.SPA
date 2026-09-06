import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    // Fetched/generated OpenAPI specs, not hand-authored source — leave their
    // formatting alone (see packages/api-client-generator/scripts/spec:fetch).
    ignorePatterns: ["packages/api-client-generator/spec/**"],
  },
  lint: {
    jsPlugins: [{ name: "vite-plus", specifier: "vite-plus/oxlint-plugin" }],
    rules: { "vite-plus/prefer-vite-plus-imports": "error" },
    // oxlint's type-aware pass (tsgolint) has no Vue SFC language plugin, so it
    // can't resolve `.vue` imports (packages/app) — that's covered by `vue-tsc --build`
    // instead (see packages/app/package.json's `type-check`/`build` scripts).
    options: { typeAware: true, typeCheck: false },
  },
  run: {
    cache: true,
  },
});
