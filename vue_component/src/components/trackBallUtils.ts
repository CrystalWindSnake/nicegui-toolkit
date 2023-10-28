import { ComputedRef, Ref, computed, reactive, ref, watchEffect } from 'vue'
import { type TSelectorConfig } from "./types";

import {
    useElementBounding,
    useElementByPoint,
    useEventListener,
    useMouse,
    useWindowSize
} from "@vueuse/core";

import * as utils from "./utils";


export const useSvgConfigs = utils.useSvgConfigs

export function useTypeNameTag(config: TSelectorConfig, hoverElement: ComputedRef<HTMLElement | null>) {
    const { width: winWidth } = useWindowSize();
    const { x, y } = useMouse({ type: "client" });

    const typeNameTagPosition = computed(() => {
        let xValue = x.value
        let yValue = y.value
        if (winWidth.value - x.value < 10) {
            xValue -= 10
        }
        if (y.value < 10) {
            yValue += 10
        }

        return { x: xValue, y: yValue }
    })

    const typeNameTagStyles = computed(() => {

        if (hoverElement.value) {
            return {
                display: 'block',
                left: `${typeNameTagPosition.value.x}px`,
                top: `${typeNameTagPosition.value.y}px`,
                transform: `translate(25%,-50%)`,
            } as Record<string, string | number>
        }

        return {
            display: 'none',
        }

    })

    const message = computed(() => {
        if (hoverElement.value) {
            return hoverElement.value.getAttribute(config.elementTypeAttr)
        }

        return null
    })

    return {
        message, typeNameTagStyles
    }
}

export function useHoverVisTarget(config: TSelectorConfig) {
    const { width: winWidth, height: winHeight } = useWindowSize();

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

        return target as HTMLElement;
    });

    const bounding = reactive(useElementBounding(hoverElement));

    useEventListener("scroll", bounding.update, true);

    const rectStyles = computed(() => {
        if (hoverElement.value) {
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
        if (hoverElement.value) {
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
            'stroke-width': 0
        };
    });

    const rightLine = computed(() => {
        if (hoverElement.value) {
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
            'stroke-width': 0
        };
    });

    const bottomLine = computed(() => {
        if (hoverElement.value) {
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
            'stroke-width': 0
        };
    });

    const leftLine = computed(() => {
        if (hoverElement.value) {
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
            'stroke-width': 0
        };
    });

    return { hoverElement, rectStyles, topLine, rightLine, bottomLine, leftLine };
}



export function hookPageMouseEvent(hoverElement: ComputedRef<HTMLElement | null>, selectedElement: Ref<HTMLElement | null>) {

    useEventListener(
        document.querySelector("body"),
        "click",
        (e) => {
            selectedElement.value = hoverElement.value;

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