export type Listener<T> = (payload: T) => void;

export interface Emitter<Events> {
  on<K extends keyof Events>(event: K, handler: Listener<Events[K]>): () => void;
  emit<K extends keyof Events>(event: K, payload: Events[K]): void;
}

/**
 * Minimal typed pub/sub used by both WorkbenchStore (state changes) and the request bus
 * (one-shot requests to the host page) — not a full event-library dependency, just enough to
 * decouple render/reconciler.ts and interaction/* from each other and from api/facade.ts.
 */
export function createEmitter<Events>(eventNames: (keyof Events)[]): Emitter<Events> {
  const listeners = new Map<keyof Events, Set<Listener<unknown>>>();
  for (const name of eventNames) listeners.set(name, new Set());

  return {
    on(event, handler) {
      const set = listeners.get(event);
      if (!set) throw new Error(`Unknown event "${String(event)}"`);
      set.add(handler as Listener<unknown>);
      return () => set.delete(handler as Listener<unknown>);
    },
    emit(event, payload) {
      const set = listeners.get(event);
      if (!set) throw new Error(`Unknown event "${String(event)}"`);
      for (const handler of set) handler(payload);
    },
  };
}
