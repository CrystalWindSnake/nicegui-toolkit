import { TSelectorConfig, TCommandEvent, TAction } from "@/components/types";
import { ref, ComputedRef, computed, reactive } from "vue";
import { useElementByPoint, useEventListener, useMouse } from "@vueuse/core";

export const SelectedTarget = ref<HTMLElement | null>(null);
export let hoverElement: ComputedRef<HTMLElement | null> = computed(() => null);

const targetElementContext: {
  props: Map<string, any>;
  styles: Map<string, any>;
} = {
  props: reactive(new Map()),
  styles: reactive(new Map()),
};

let emitCommandFn: (commands: TCommandEvent[]) => void;
let EXECUTING_FLAG = false;

export function setExecutingFlag(executing?: boolean) {
  EXECUTING_FLAG = executing ?? true;
}

export function getExecutingFlag() {
  return EXECUTING_FLAG;
}

export function initGlobals(config: {
  selectorConfig: TSelectorConfig;
  emitCommandFn: (commands: TCommandEvent[]) => void;
}) {
  emitCommandFn = config.emitCommandFn;

  const { hoverElement: _hoverElement } = useHoverElement(
    config.selectorConfig
  );

  hookPageMouseEvent(_hoverElement);

  hoverElement = _hoverElement;
}

export function sendCommand(commands: TCommandEvent[]) {
  emitCommandFn(commands);
}

export function resetCommnad(key: string, action: TAction = "style") {
  sendCommand([{ commandType: "del", action, values: { [key]: undefined } }]);
}

export function updateCurrentTargetContext(context: {
  props?: Record<string, any>;
  styles?: Record<string, any>;
}) {
  targetElementContext.props.clear();
  targetElementContext.styles.clear();

  if (context.props) {
    for (const [key, value] of Object.entries(context.props)) {
      targetElementContext.props.set(key, value);
    }
  }

  if (context.styles) {
    for (const [key, value] of Object.entries(context.styles)) {
      targetElementContext.styles.set(key, value);
    }
  }
}

export function useHasChanged(key: string) {
  return computed(() => targetElementContext.styles.has(key));
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
