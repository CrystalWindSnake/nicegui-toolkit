import { computed, reactive, MaybeRefOrGetter, toRef, ref, watch, ComputedRef } from 'vue';

import {
    useElementBounding, useEventListener, useMutationObserver
} from "@vueuse/core";

import * as utils from "./utils";
import { TSelectorConfig } from './types';


// export const useSvgConfigs = utils.useSvgConfigs


export function useSvgConfigs(target: ComputedRef<HTMLElement | null>, selectorConfig: TSelectorConfig) {
    const targetRef = computed(() => {

        if (!target.value) {
            return null
        }

        // if (target.value.getAttribute(selectorConfig.elementTypeAttr) === 'Input') {
        //     return target.value.closest('.q-input')
        // }

        return target.value

    })
    const svgConfig = utils.useSvgConfigs()

    const bounding = reactive(useElementBounding(target));

    useMutationObserver(
        targetRef,
        () => {
            bounding.update()
        },
        { attributes: true }
    );

    useEventListener("scroll", bounding.update, true);

    const rectStyles = computed(() => {

        if (targetRef.value) {
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
        if (targetRef.value) {
            return {
                cx: bounding.x,
                cy: bounding.y,
            };
        }

        return {
            r: 0
        };
    });

    const p2 = computed(() => {
        if (targetRef.value) {
            return {
                cx: bounding.x + bounding.width / 2,
                cy: bounding.y,
            };
        }

        return {
            r: 0
        };
    });

    const p3 = computed(() => {
        if (targetRef.value) {
            return {
                cx: bounding.x + bounding.width,
                cy: bounding.y,
            };
        }

        return {
            r: 0
        };
    });

    const p4 = computed(() => {
        if (targetRef.value) {
            return {
                cx: bounding.x + bounding.width,
                cy: bounding.y + bounding.height / 2,
            };
        }

        return {
            r: 0
        };
    });

    const p5 = computed(() => {
        if (targetRef.value) {
            return {
                cx: bounding.x + bounding.width,
                cy: bounding.y + bounding.height,
            };
        }

        return {
            r: 0
        };
    });

    const p6 = computed(() => {
        if (targetRef.value) {
            return {
                cx: bounding.x + bounding.width / 2,
                cy: bounding.y + bounding.height,
            };
        }

        return {
            r: 0
        };
    });

    const p7 = computed(() => {
        if (targetRef.value) {
            return {
                cx: bounding.x,
                cy: bounding.y + bounding.height,
            };
        }

        return {
            r: 0
        };
    });

    const p8 = computed(() => {
        if (targetRef.value) {
            return {
                cx: bounding.x,
                cy: bounding.y + bounding.height / 2,
            };
        }

        return {
            r: 0
        };
    });



    return {
        svgConfig,
        rectStyles,
        p1, p2, p3, p4, p5, p6, p7, p8
    }
}
