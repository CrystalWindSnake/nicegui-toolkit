import { MaybeRefOrGetter, isRef, ref, toValue } from "vue";

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
