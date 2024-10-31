import { emits } from "./emits";

let instanceId = 0;
const handlers: Map<number, (data: any) => void> = new Map();

function createId() {
  const result = instanceId;
  instanceId++;
  return result;
}

export function createQuery(method: string, handler: (data: any) => void) {
  const id = createId();
  handlers.set(id, handler);

  function query(params: Record<string, any>) {
    emits("serverQuery", { method, handlerId: id, params });
  }

  return {
    query,
  };
}

export function handleServerResponse(handlerId: number, data: any) {
  const handler = handlers.get(handlerId);
  if (handler) {
    handler(data);
  }

  throw new Error(`No handler found for id ${handlerId}`);
}
