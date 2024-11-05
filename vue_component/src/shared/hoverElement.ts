import { computed, ComputedRef } from "vue";
import { useElementByPoint, useEventListener, useMouse } from "@vueuse/core";
import { TSelectorConfig } from "./types";
import * as elementTree from "@/shared/elementTree";

let hoverElement: ComputedRef<HTMLElement | null> = computed(() => null);

export function useHoverElement() {
  return hoverElement;
}

export function initHoverElement(config: TSelectorConfig) {
  const { hoverElement: _hoverElement } = useHoverElementByPoint(config);

  useEventListener(
    document.querySelector("body"),
    "mouseenter",
    (e) => {
      if (_hoverElement.value) {
        e.stopPropagation();
      }
    },
    { capture: true }
  );

  hoverElement = _hoverElement;
}

function useHoverElementByPoint(config: TSelectorConfig) {
  const { x, y } = useMouse({ type: "client" });
  const { element } = useElementByPoint({ x, y });

  const hoverElement = computed(() => {
    if (element.value === null) {
      return null;
    }

    const target = element.value.closest(config.selectors);
    const elementTreeHoverElement = elementTree.useHoverElement();

    if (target === null) {
      if (elementTreeHoverElement.value) {
        return elementTreeHoverElement.value;
      }
      return null;
    }

    // if panel child
    if (target.closest("[layout-tool-panel]")) {
      if (elementTreeHoverElement.value) {
        return elementTreeHoverElement.value;
      }
      return null;
    }

    return target as HTMLElement;
  });

  return { hoverElement } as {
    hoverElement: ComputedRef<HTMLElement | null>;
  };
}
