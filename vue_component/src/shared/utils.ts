import { MaybeRefOrGetter, isRef, ref, toValue, computed } from "vue";
import { type TSelectorConfig } from "./types";
import { useWindowSize } from "@vueuse/core";

export function makeRef<T>(value: MaybeRefOrGetter<T>) {
  if (isRef(value)) {
    return value;
  }

  return ref(toValue(value));
}

export function getComputedStyle(target: HTMLElement, styleName: string) {
  const styles = window.getComputedStyle(target, null);
  return styles.getPropertyValue(styleName);
}

export function getWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

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

export function parseUnitStyleValue(styleValue: string) {
  const regex = /^(\d*\.?\d+)(px|%|rem|em|ex|ch|vw|vh|vmin|vmax)$|^auto$/i;

  const match = styleValue.match(regex);

  if (match) {
    const number = match[1] || "";
    const unit = match[2] || "auto";
    return { number, unit };
  } else {
    return { number: "", unit: "" };
  }
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
      return name.slice(config.elementTypePrefix.length);
    }
  }

  return null;
}

export function getElementId(
  target: HTMLElement,
  config: TSelectorConfig
): number | null {
  if (!hasLayoutToolMark(target, config)) {
    return null;
  }

  for (const name of target.classList) {
    if (name.startsWith(config.idPrefix)) {
      return parseInt(name.slice(config.idPrefix.length));
    }
  }

  return null;
}

export function getElementById(id: number, config: TSelectorConfig) {
  const targetQuery = `*.${config.idPrefix}${id}`;
  const targetElement = document.querySelector<HTMLElement>(targetQuery);
  if (!targetElement) {
    throw new Error(`target element with id ${id} not found`);
  }
  return targetElement;
}

export function getSourceCodeLink(
  target: HTMLElement,
  config: TSelectorConfig
) {
  for (const name of target.classList) {
    if (name.startsWith(config.sourceCodePrefix)) {
      return name.slice(config.sourceCodePrefix.length);
    }
  }

  throw new Error("source code link not found");
}

export function navigateTo(url: string) {
  const a = document.createElement("a");
  a.href = url;
  a.style.display = "none";

  document.body.appendChild(a);

  a.click();

  document.body.removeChild(a);
}

export function scrollElementIntoView(element: HTMLElement) {
  if (!element) {
    console.error("Element is not provided or is not a valid element.");
    return;
  }

  element.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "nearest",
  });
}

export function modifyElementClassList(
  element: HTMLElement,
  options: {
    add?: string;
    remove?: string;
    change?: {
      oldClass: string;
      newClass: string;
    };
  }
) {
  if (options.add) {
    element.classList.add(options.add);
  }

  if (options.remove) {
    element.classList.remove(options.remove);
  }

  if (options.change) {
    element.classList.replace(options.change.oldClass, options.change.newClass);
  }
}
