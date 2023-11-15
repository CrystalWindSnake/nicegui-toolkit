import { ComputedRef, Ref, computed, reactive } from 'vue';
import { TSelectedChangeEventArgs, type TSelectorConfig } from "./types";

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

    const typeName = computed(() => {
        if (hoverElement.value) {
            return utils.getElementType(hoverElement.value, config)
        }

        return null
    })

    return {
        typeName, typeNameTagStyles
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

        // if panel child
        if (target.closest('[layout-tool-panel]')) {
            return null
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


function isColorPicker(target: HTMLElement) {
    const picker = target.closest('.q-color-picker')
    if (!picker) {
        return false
    }
    return true
}

export function hookPageMouseEvent(hoverElement: ComputedRef<HTMLElement | null>, selectedElement: Ref<HTMLElement | null>) {

    useEventListener(
        document.querySelector("body"),
        "click",
        (e) => {

            const target = e.target as HTMLElement

            // click layout tool
            if (target.closest('[layout-tool-panel]')) {
                return
            }

            // click color picker
            if (isColorPicker(target)) {
                return
            }

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

export function getBoxParentId(target: HTMLElement, config: TSelectorConfig) {
    let box = target.parentElement!.closest(`${config.selectors}`) as HTMLElement

    while (box !== null) {
        const display = window.getComputedStyle(box, null).getPropertyValue('display')
        if (display === 'flex') {
            return { id: utils.getElementId(box, config), dom: box }
        }

        box = box.parentElement!.closest(`${config.selectors}`)
    }

    return null
}


const FlexCheckTargets = new Set(['Row', 'Column', 'Element'])

export function getFlexInfo(target: HTMLElement, config: TSelectorConfig): TSelectedChangeEventArgs['flexInfo'] {

    if (!FlexCheckTargets.has(utils.getElementType(target, config)!)) {
        return {
            isFlex: false,
            direction: null
        }
    }


    const cpStyle = window.getComputedStyle(target, null)
    const isFlex = cpStyle.getPropertyValue('display') === 'flex'

    let direction = null
    if (isFlex) {
        direction = cpStyle.getPropertyValue('flex-direction')
    }

    return {
        isFlex,
        direction
    }
}

function queryTarget(id: number, config: TSelectorConfig) {
    const selector = `.${config.idAttr}-${id}`
    return document.querySelector(selector)!
}

export function getComponentExpose(config: TSelectorConfig, selectedElement: Ref<HTMLElement | null>) {

    function queryStyle(id: number, styleName: string) {
        return window.getComputedStyle(queryTarget(id, config), null).getPropertyValue(styleName)
    }


    function selectTarget(id: number) {
        const target = queryTarget(id, config) as HTMLElement
        selectedElement.value = target
    }


    return { queryStyle, selectTarget }
}