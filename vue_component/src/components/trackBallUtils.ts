import { ComputedRef, Ref, computed } from "vue";
import { TSelectedChangeEventArgs, type TSelectorConfig } from "./types";
import { useMouse, useWindowSize } from "@vueuse/core";

import * as utils from "./utils";
import * as globals from "@/hooks/globals";

export function useTypeNameTag(
  config: TSelectorConfig,
  hoverElement: ComputedRef<HTMLElement | null>
) {
  const { width: winWidth } = useWindowSize();
  const { x, y } = useMouse({ type: "client" });

  const typeNameTagPosition = computed(() => {
    let xValue = x.value;
    let yValue = y.value;
    if (winWidth.value - x.value < 10) {
      xValue -= 10;
    }
    if (y.value < 10) {
      yValue += 10;
    }

    return { x: xValue, y: yValue };
  });

  const typeNameTagStyles = computed(() => {
    if (hoverElement.value) {
      return {
        display: "block",
        left: `${typeNameTagPosition.value.x}px`,
        top: `${typeNameTagPosition.value.y}px`,
        transform: `translate(25%,-50%)`,
      } as Record<string, string | number>;
    }

    return {
      display: "none",
    };
  });

  const typeName = computed(() => {
    if (hoverElement.value) {
      return utils.getElementType(hoverElement.value, config);
    }

    return null;
  });

  return {
    typeName,
    typeNameTagStyles,
  };
}

function isColorPicker(target: HTMLElement) {
  const picker = target.closest(".q-color-picker");
  if (!picker) {
    return false;
  }
  return true;
}

export function getBoxParentId(target: HTMLElement, config: TSelectorConfig) {
  let box = target.parentElement!.closest(
    `${config.selectors}`
  ) as HTMLElement | null;

  while (box !== null) {
    const display = window
      .getComputedStyle(box, null)
      .getPropertyValue("display");
    if (display === "flex") {
      return { id: utils.getElementId(box, config), dom: box };
    }

    box = box.parentElement!.closest(`${config.selectors}`);
  }

  return null;
}

const FlexCheckTargets = new Set(["Row", "Column", "Element"]);

export function getFlexInfo(
  target: HTMLElement,
  config: TSelectorConfig
): TSelectedChangeEventArgs["flexInfo"] {
  if (!FlexCheckTargets.has(utils.getElementType(target, config)!)) {
    return {
      isFlex: false,
      direction: null,
    };
  }

  const cpStyle = window.getComputedStyle(target, null);
  const isFlex = cpStyle.getPropertyValue("display") === "flex";

  let direction = null;
  if (isFlex) {
    direction = cpStyle.getPropertyValue("flex-direction");
  }

  return {
    isFlex,
    direction,
  };
}

function queryTarget(id: number, config: TSelectorConfig) {
  const selector = `.${config.idPrefix}-${id}`;
  return document.querySelector(selector)!;
}

export function getComponentExpose(
  config: TSelectorConfig,
  selectedElement: Ref<HTMLElement | null>
) {
  function queryStyle(id: number, styleName: string) {
    return window
      .getComputedStyle(queryTarget(id, config), null)
      .getPropertyValue(styleName);
  }

  function selectTarget(id: number) {
    const target = queryTarget(id, config) as HTMLElement;
    selectedElement.value = target;
  }

  function onServerResetCommand(propertyName: string) {
    globals.triggerPropertyUpdate(propertyName);
  }

  return { queryStyle, selectTarget, onServerResetCommand };
}

export async function createClientStyleLinkTag(resource_path?: string) {
  if (!resource_path) {
    return;
  }

  // @ts-ignore
  const { loadResource } = await import("../../static/utils/resources.js");
  const path_prefix = (window as any).path_prefix;
  await loadResource(path_prefix + `${resource_path}/trackBall.css`);
}
