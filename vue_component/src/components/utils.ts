import { Ref, computed, reactive, ref, watchEffect } from 'vue'
import { type TSelectorConfig } from "./types";

import {
    useElementBounding,
    useElementByPoint,
    useEventListener,
    useMouse,
    useWindowSize
} from "@vueuse/core";


export function useHoverVisTarget(config: TSelectorConfig) {
    const { x, y } = useMouse({ type: "client" });
    const { element } = useElementByPoint({ x, y });
    const { width: winWidth, height: winHeight } = useWindowSize();
    const hoverSelectId = ref<string | null>(null)

    const targetElement = computed(() => {
        if (element.value === null) {
            return null;
        }

        const target = element.value.closest(config.selectors);
        if (target === null) {
            return null;
        }

        return target;
    });

    watchEffect(() => {
        if (targetElement.value) {
            hoverSelectId.value = targetElement.value.getAttribute(
                config.idAttr
            )!;
            return;
        }

        hoverSelectId.value = null;
    });

    const bounding = reactive(useElementBounding(targetElement));

    useEventListener("scroll", bounding.update, true);

    const rectStyles = computed(() => {
        if (targetElement.value) {
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
        if (targetElement.value) {
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
        };
    });

    const rightLine = computed(() => {
        if (targetElement.value) {
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
        };
    });

    const bottomLine = computed(() => {
        if (targetElement.value) {
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
        };
    });

    const leftLine = computed(() => {
        if (targetElement.value) {
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
        };
    });

    return { hoverSelectId, rectStyles, topLine, rightLine, bottomLine, leftLine };
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


export function hookPageMouseEvent(hoverSelectId: Ref<string | null>, selectedId: Ref<string | null>) {

    useEventListener(
        document.querySelector("body"),
        "click",
        (e) => {
            selectedId.value = hoverSelectId.value;

            e.stopPropagation();
        },
        { capture: true }
    );

    useEventListener(
        document.querySelector("body"),
        "mouseenter",
        (e) => {
            if (hoverSelectId.value) {
                e.stopPropagation();
            }
        },
        { capture: true }
    );

}