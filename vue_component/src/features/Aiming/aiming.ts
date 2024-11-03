import { computed, reactive } from "vue";

import {
  useElementBounding,
  useEventListener,
  useMutationObserver,
} from "@vueuse/core";
import { selectedTarget } from "@/shared/targetElementContext";
export type TModel = ReturnType<typeof useAiming>;

export function useAiming() {
  const bounding = reactive(useElementBounding(selectedTarget));

  useMutationObserver(
    selectedTarget,
    () => {
      bounding.update();
    },
    { attributes: true }
  );

  useEventListener("scroll", bounding.update, true);

  const rectStyles = computed(() => {
    if (selectedTarget.value) {
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

  const p1 = computed(() => {
    if (selectedTarget.value) {
      return {
        cx: bounding.x,
        cy: bounding.y,
      };
    }

    return {
      r: 0,
    };
  });

  const p2 = computed(() => {
    if (selectedTarget.value) {
      return {
        cx: bounding.x + bounding.width / 2,
        cy: bounding.y,
      };
    }

    return {
      r: 0,
    };
  });

  const p3 = computed(() => {
    if (selectedTarget.value) {
      return {
        cx: bounding.x + bounding.width,
        cy: bounding.y,
      };
    }

    return {
      r: 0,
    };
  });

  const p4 = computed(() => {
    if (selectedTarget.value) {
      return {
        cx: bounding.x + bounding.width,
        cy: bounding.y + bounding.height / 2,
      };
    }

    return {
      r: 0,
    };
  });

  const p5 = computed(() => {
    if (selectedTarget.value) {
      return {
        cx: bounding.x + bounding.width,
        cy: bounding.y + bounding.height,
      };
    }

    return {
      r: 0,
    };
  });

  const p6 = computed(() => {
    if (selectedTarget.value) {
      return {
        cx: bounding.x + bounding.width / 2,
        cy: bounding.y + bounding.height,
      };
    }

    return {
      r: 0,
    };
  });

  const p7 = computed(() => {
    if (selectedTarget.value) {
      return {
        cx: bounding.x,
        cy: bounding.y + bounding.height,
      };
    }

    return {
      r: 0,
    };
  });

  const p8 = computed(() => {
    if (selectedTarget.value) {
      return {
        cx: bounding.x,
        cy: bounding.y + bounding.height / 2,
      };
    }

    return {
      r: 0,
    };
  });

  return {
    rectStyles,
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
  };
}
