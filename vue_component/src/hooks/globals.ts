import { TSelectorConfig } from "@/components/types";
import { Ref, ref, ComputedRef, computed, reactive } from "vue";

import {
  useElementBounding,
  useElementByPoint,
  useEventListener,
  useMouse,
  useMutationObserver,
  useWindowSize,
} from "@vueuse/core";

const globalsObject = {
  selectTarget: null as Ref<HTMLElement | null> | null,
};

type TGlobalsObject = typeof globalsObject;

type TNotNull = {
  [name in keyof TGlobalsObject]: NonNullable<TGlobalsObject[name]>;
};

export const SelectedTarget = ref<HTMLElement | null>(null);
export let hoverElement: ComputedRef<HTMLElement | null> = computed(() => null);

let EXECUTING_FLAG = false;

export function setExecutingFlag(executing?: boolean) {
  EXECUTING_FLAG = executing ?? true;
}

export function getExecutingFlag() {
  return EXECUTING_FLAG;
}

export function initGlobals(config: TSelectorConfig) {
  const { hoverElement: _hoverElement } = useHoverElement(config);

  // useAiming();
  hookPageMouseEvent(_hoverElement);

  hoverElement = _hoverElement;
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
      return null;
    }

    // if panel child
    if (target.closest("[layout-tool-panel]")) {
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

      SelectedTarget.value = hoverElement.value;

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
