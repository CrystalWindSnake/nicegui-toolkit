import { TSelectedChangeEventArgs, TSetCommand, TResetCommand } from "./types";

export type TAppEmits = {
  (event: "init"): void;
  (event: "hoverChange", args: { id: number | null }): void;
  (event: "selectedChange", args: TSelectedChangeEventArgs): void;
  (
    event: "setCommand",
    args: {
      id: number;
      commands: TSetCommand[];
    }
  ): void;
  (
    event: "resetCommand",
    args: {
      id: number;
      commands: TResetCommand[];
    }
  ): void;
  (
    event: "jumpSourceCode",
    args: {
      id: number;
    }
  ): void;
  (event: "applyCommand"): void;
  (event: "classesUpdate", args: { targetId: number; classes: string[] }): void;
  (
    event: "serverQuery",
    args: { method: string; handlerId: number; params: Record<string, any> }
  ): void;
};

export let emits: TAppEmits;

export function init(emit: TAppEmits) {
  emits = emit;
}
