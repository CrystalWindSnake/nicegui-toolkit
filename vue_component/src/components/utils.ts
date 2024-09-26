import { computed } from "vue";

import { useWindowSize } from "@vueuse/core";
import { TSelectorConfig } from "./types";

export function useSvgConfigs() {
  const { width: winWidth, height: winHeight } = useWindowSize();

  const viewBox = computed(() => `0 0 ${winWidth.value} ${winHeight.value}`);

  const styles = computed(() => {
    return {
      width: winWidth.value,
      height: winHeight.value,
    };
  });

  return {
    viewBox,
    styles,
  };
}

export function hasLayoutToolMark(
  target: HTMLElement,
  config: TSelectorConfig
) {
  return target.classList.contains(config.selectors.slice(1));
}

export function getElementType(target: HTMLElement, config: TSelectorConfig) {
  if (!hasLayoutToolMark(target, config)) {
    return null;
  }

  for (const name of target.classList) {
    if (name.startsWith(config.elementTypePrefix)) {
      return name.slice(config.elementTypePrefix.length + 1);
    }
  }

  return null;
}

export function getElementId(target: HTMLElement, config: TSelectorConfig) {
  if (!hasLayoutToolMark(target, config)) {
    return null;
  }

  for (const name of target.classList) {
    if (name.startsWith(config.idPrefix)) {
      return parseInt(name.slice(config.idPrefix.length + 1));
    }
  }

  return null;
}
