import {
  TSelectedChangeEventArgs,
  TSetCommand,
  TResetCommand,
  TSelectorConfig,
} from "./types";
import * as targetElementContext from "./targetElementContext";
import * as utils from "./utils";
import { getConfigs } from "@/shared/configs";

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

export function init(
  emit: TAppEmits,
  configs: {
    selectorConfig: TSelectorConfig;
  }
) {
  emits = emit;
  configs = configs;
}

export function applyCommand() {
  emits("applyCommand");
}

export function setCommand(commands: TSetCommand | TSetCommand[]) {
  if (!Array.isArray(commands)) {
    commands = [commands];
  }

  const target = targetElementContext.selectedTarget.value;
  if (!target) {
    return;
  }
  const id = utils.getElementId(target, getConfigs());
  if (!id) {
    throw new Error("not found selected element");
  }
  emits("setCommand", { id: id, commands });
}

export function resetCommand(
  propertyName: string,
  type: TResetCommand["type"] = "style"
) {
  const commands: TResetCommand[] = [{ propertyName, type }];

  const target = targetElementContext.selectedTarget.value;
  if (!target) {
    return;
  }
  const id = utils.getElementId(target, getConfigs());
  if (!id) {
    throw new Error("not found selected element");
  }
  emits("resetCommand", { id: id, commands });
}

export function updateClasses(options: {
  targetId?: number;
  classes: string[];
}) {
  const { targetId, classes } = options;
  let id = targetId;
  const selectedTarget = targetElementContext.selectedTarget;

  if (id === undefined && selectedTarget.value) {
    id = utils.getElementId(selectedTarget.value, getConfigs())!;
  }

  emits("classesUpdate", { targetId: id!, classes });
}
