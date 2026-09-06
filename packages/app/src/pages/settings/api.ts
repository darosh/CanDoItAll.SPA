import type { HostCapabilitySnapshot } from "@candoitall/api-client";

import { apiClient } from "@/lib/api-client";

export function getRuntimeCapabilities(): Promise<HostCapabilitySnapshot> {
  return apiClient.getApiRuntimeCapabilities();
}
