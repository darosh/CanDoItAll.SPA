const mirrors = new WeakMap();

function asText(value) {
  return String(value ?? "").trim();
}

function apply(host, snapshot) {
  host.dataset.mirrorReady = "true";
  host.dataset.surfaceKind = asText(snapshot?.surfaceKind) || "canvas";
  host.dataset.itemCount = String(Array.isArray(snapshot?.items) ? snapshot.items.length : 0);
  host.dataset.primaryLabel = asText(snapshot?.liveAnnouncement);
  host.classList.toggle("is-debug", !!snapshot?.enableDiagnostics);
}

export function create(host, snapshot) {
  if (!host) {
    return;
  }

  mirrors.set(host, { snapshot });
  apply(host, snapshot);
}

export function update(host, snapshot) {
  if (!host) {
    return;
  }

  mirrors.set(host, { snapshot });
  apply(host, snapshot);
}

export function dispose(host) {
  if (!host) {
    return;
  }

  mirrors.delete(host);
  delete host.dataset.mirrorReady;
  delete host.dataset.surfaceKind;
  delete host.dataset.itemCount;
  delete host.dataset.primaryLabel;
  host.classList.remove("is-debug");
}
