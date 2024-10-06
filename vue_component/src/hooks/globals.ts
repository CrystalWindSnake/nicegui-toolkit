import {
  TSelectorConfig,
  TSetCommand,
  TResetCommand,
} from "@/components/types";
import { ComputedRef, computed, ref } from "vue";
import { useElementByPoint, useEventListener, useMouse } from "@vueuse/core";
import { updateTargetElement } from "@/hooks/targetElementContext";
import { type TElementTreeData } from "@/hooks/types";
import * as hookUtils from "@/hooks/utils";

const hoverByCode = ref(null as HTMLElement | null);
export let hoverElement: ComputedRef<HTMLElement | null> = computed(() => null);

let selectorConfig: TSelectorConfig;
let elementTreeData: TElementTreeData;
let emitSetCommandFn: (commands: TSetCommand[]) => void;
let emitResetCommandFn: (commands: TResetCommand[]) => void;
let emitJumpSourceCodeFn: () => void;
let emitApplyCommandFn: () => void;
let EXECUTING_FLAG = false;

export function getSelectorConfig() {
  return selectorConfig;
}

export function setHoverByCode(elementId: number) {
  hoverByCode.value = hookUtils.getElementById(elementId, selectorConfig);
}

export function resetHoverByCode() {
  hoverByCode.value = null;
}

export function getElementTreeData() {
  return elementTreeData;
}

export function setExecutingFlag(executing?: boolean) {
  EXECUTING_FLAG = executing ?? true;
}

export function getExecutingFlag() {
  return EXECUTING_FLAG;
}

export function initGlobals(config: {
  selectorConfig: TSelectorConfig;
  elementTreeData: TElementTreeData;
  emitSetCommandFn: (commands: TSetCommand[]) => void;
  emitResetCommandFn: (commands: TResetCommand[]) => void;
  emitJumpSourceCodeFn: () => void;
  emitApplyCommandFn: () => void;
}) {
  emitSetCommandFn = config.emitSetCommandFn;
  emitResetCommandFn = config.emitResetCommandFn;
  emitJumpSourceCodeFn = config.emitJumpSourceCodeFn;
  emitApplyCommandFn = config.emitApplyCommandFn;
  selectorConfig = config.selectorConfig;
  elementTreeData = config.elementTreeData;

  const { hoverElement: _hoverElement } = useHoverElement(
    config.selectorConfig
  );

  hookPageMouseEvent(_hoverElement);

  hoverElement = _hoverElement;
}

export function jumpToSourceCode() {
  emitJumpSourceCodeFn();
}

export function applyCommand() {
  emitApplyCommandFn();
}

export function useCanApplyCommand() {
  return computed(() => true);
}

export function sendSetCommand(commands: TSetCommand | TSetCommand[]) {
  if (!Array.isArray(commands)) {
    commands = [commands];
  }
  emitSetCommandFn(commands);
}

export function sendResetCommnad(
  propertyName: string,
  type: TResetCommand["type"] = "style"
) {
  emitResetCommandFn([{ propertyName, type }]);
}

function useHoverElement(config: TSelectorConfig) {
  const { x, y } = useMouse({ type: "client" });
  const { element } = useElementByPoint({ x, y });

  const hoverElement = computed(() => {
    if (element.value === null) {
      return null;
    }

    const target = element.value.closest(config.selectors);
    if (target === null) {
      if (hoverByCode.value) {
        return hoverByCode.value;
      }
      return null;
    }

    // if panel child
    if (target.closest("[layout-tool-panel]")) {
      if (hoverByCode.value) {
        return hoverByCode.value;
      }
      return null;
    }

    return target as HTMLElement;
  });

  return { hoverElement };
}

function hookPageMouseEvent(hoverElement: ComputedRef<HTMLElement | null>) {
  useEventListener(
    document.querySelector("body"),
    "click",
    (e) => {
      if (getExecutingFlag()) {
        return;
      }

      const target = e.target as HTMLElement;

      // click layout tool
      if (target.closest("[layout-tool-panel]")) {
        return;
      }

      // click color picker
      // if (isColorPicker(target)) {
      //   return;
      // }

      if (hoverElement.value === null) {
        return;
      }

      updateTargetElement(hoverElement.value);

      e.stopPropagation();
    },
    { capture: true }
  );

  useEventListener(
    document.querySelector("body"),
    "mouseenter",
    (e) => {
      if (hoverElement.value) {
        e.stopPropagation();
      }
    },
    { capture: true }
  );
}
