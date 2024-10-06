import { MaybeRefOrGetter, isRef, ref, toValue } from "vue";
import { type TSelectorConfig } from "@/components/types";

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

export function getElementById(id: number, config: TSelectorConfig) {
  const targetQuery = `*.${config.idPrefix}-${id}`;
  const targetElement = document.querySelector<HTMLElement>(targetQuery);
  if (!targetElement) {
    throw new Error(`target element with id ${id} not found`);
  }
  return targetElement;
}
