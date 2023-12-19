export type TAction = "style" | "props" | "classes";
export type TCommandType = "set" | "del";

export type TCommandEvent = {
  action: TAction;
  commandType: TCommandType;
  values: Record<string, any>;
};

export type TSendCommand = ReturnType<typeof registerEmit>["sendCommand"];

export function registerEmit(callback: (cmds: TCommandEvent[]) => void) {
  function sendCommand(cmds: TCommandEvent[]) {
    callback(cmds);
  }

  return { sendCommand };
}
