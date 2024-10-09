import {
  useElementBounding,
  useEventListener,
  useWindowSize,
} from "@vueuse/core";
import { computed, reactive } from "vue";
import * as globals from "@/hooks/globals";

export type TModel = ReturnType<typeof useVisHover>;

export function useVisHover() {
  const { width: winWidth, height: winHeight } = useWindowSize();

  const bounding = reactive(useElementBounding(globals.hoverElement));

  useEventListener("scroll", bounding.update, true);

  const rectStyles = computed(() => {
    if (globals.hoverElement.value) {
      return {
        display: "block",
        width: bounding.width,
        height: bounding.height,
        x: bounding.left,
        y: bounding.top,
      };
    }
    return {
      display: "none",
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    };
  });

  const topLine = computed(() => {
    if (globals.hoverElement.value) {
      return {
        x1: 0,
        y1: bounding.top,
        x2: winWidth.value,
        y2: bounding.top,
      };
    }

    return {
      x1: 0,
      y1: 8,
      x2: bounding.width,
      y2: 8,
      "stroke-width": 0,
    };
  });

  const rightLine = computed(() => {
    if (globals.hoverElement.value) {
      return {
        x1: bounding.left + bounding.width,
        y1: 0,
        x2: bounding.left + bounding.width,
        y2: winHeight.value,
      };
    }

    return {
      x1: winWidth.value,
      y1: 8,
      x2: winWidth.value,
      y2: winHeight.value,
      "stroke-width": 0,
    };
  });

  const bottomLine = computed(() => {
    if (globals.hoverElement.value) {
      return {
        x1: 0,
        y1: bounding.top + bounding.height,
        x2: winWidth.value,
        y2: bounding.top + bounding.height,
      };
    }

    return {
      x1: 0,
      y1: 8,
      x2: bounding.width,
      y2: 8,
      "stroke-width": 0,
    };
  });

  const leftLine = computed(() => {
    if (globals.hoverElement.value) {
      return {
        x1: bounding.left,
        y1: 0,
        x2: bounding.left,
        y2: winHeight.value,
      };
    }

    return {
      x1: winWidth.value,
      y1: 8,
      x2: winWidth.value,
      y2: winHeight.value,
      "stroke-width": 0,
    };
  });

  return { rectStyles, topLine, rightLine, bottomLine, leftLine };
}
