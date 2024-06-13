import { setExecutingFlag } from "@/hooks/globals";
import { Ref, ref, watch } from "vue";

export type TDirection = "up" | "right" | "bottom" | "left";
function directionActions(direction: TDirection) {
  function getCursorIcon() {
    switch (direction) {
      case "up":
      case "bottom":
        return "ns-resize";
        break;

      default:
        return "ew-resize";
        break;
    }
  }

  function getMoveIncrementHandler() {
    switch (direction) {
      case "left":
        return (startPositions: TStartPositions, e: MouseEvent) => {
          return startPositions.x - e.x;
        };
        break;
      case "right":
        return (startPositions: TStartPositions, e: MouseEvent) => {
          return e.x - startPositions.x;
        };
        break;

      case "up":
        return (startPositions: TStartPositions, e: MouseEvent) => {
          return startPositions.y - e.y;
        };
        break;

      case "bottom":
        return (startPositions: TStartPositions, e: MouseEvent) => {
          return e.y - startPositions.y;
        };
        break;

      default:
        throw new Error("");
    }
  }

  return {
    getCursorIcon,
    getMoveIncrementHandler,
  };
}

type TStartPositions = {
  x: number;
  y: number;
};

export function useSliderControl(
  target: Ref<HTMLElement | null>,
  direction: TDirection,
  value?: Ref<number>
) {
  const result = value ?? ref(0);

  watch(target, (target) => {
    if (!target) {
      return;
    }

    const dirActions = directionActions(direction);

    target.style.cursor = dirActions.getCursorIcon();
    const diffHandler = dirActions.getMoveIncrementHandler();

    const startPositions = {
      x: 0,
      y: 0,
    };

    const onMousemove = (e: MouseEvent) => {
      result.value += diffHandler(startPositions, e);
      startPositions.x = e.x;
      startPositions.y = e.y;
    };

    target.addEventListener(
      "mousedown",
      (e) => {
        e.stopPropagation();
        setExecutingFlag();
        document.querySelector("body")!.style.cursor = target.style.cursor;

        startPositions.x = e.x;
        startPositions.y = e.y;

        document.addEventListener("mousemove", onMousemove);
      },
      { capture: true }
    );

    document.addEventListener(
      "mouseup",
      (e) => {
        document.removeEventListener("mousemove", onMousemove);
        document.querySelector("body")!.style.cursor = "default";

        setExecutingFlag(false);

        e.stopPropagation();
      },
      { capture: true }
    );
  });

  return result;
}
