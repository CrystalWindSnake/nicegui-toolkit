export type TAction = "style" | "props" | "classes";
export type TCommandType = "set" | "del";

export type TCommandEmit = typeof sendCommand;

let commandEmit: TCommandEmit | null = null;

export function registerEmit(emit: TCommandEmit) {
  commandEmit = emit;
}

export function sendCommand(
  action: TAction,
  command: TCommandType,
  values: Record<string, any>
) {
  commandEmit!(action, command, values);
}
