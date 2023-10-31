
import { computed } from 'vue';

import {
    useWindowSize
} from "@vueuse/core";

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
