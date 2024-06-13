export type TAction = "style" | "props" | "classes";
export type TCommandType = "set" | "del";

export type TCommandEvent = {
  action: TAction;
  commandType: TCommandType;
  values: Record<string, any>;
};

type TCallback = (cmds: TCommandEvent[]) => void;

const callbacks: TCallback[] = [];

export function register(callback: (cmds: TCommandEvent[]) => void) {
  callbacks.push(callback);
}

export function sendCommand(cmds: TCommandEvent[]) {
  callbacks.forEach((cb) => cb(cmds));
}
