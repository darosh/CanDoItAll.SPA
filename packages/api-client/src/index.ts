export * from "./generated/@typespec/http-client-js/src/index.js";

import { CanDoItAllClient } from "./generated/@typespec/http-client-js/src/index.js";

/**
 * Same-origin factory so the browser client rides the Vite dev proxy (see
 * packages/app/vite.config.ts) instead of hardcoding the backend's own port — the
 * generated client's own default endpoint is only a Node/no-CORS fallback.
 */
export function createApiClient(baseUri = ""): CanDoItAllClient {
  return new CanDoItAllClient({
    allowInsecureConnection: true,
    endpoint: baseUri || window.location.origin,
  });
}
