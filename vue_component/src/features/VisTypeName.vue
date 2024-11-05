<script setup lang="ts">
import { zindex } from "@/shared/consts";
import { getConfigs } from "@/shared/configs";
import { ComputedRef, computed } from "vue";
import { type TSelectorConfig } from "@/shared/types";
import { useMouse, useWindowSize } from "@vueuse/core";
import * as utils from "@/shared/utils";
import { useHoverElement } from "@/shared/hoverElement";

function useTypeNameTag(
  config: TSelectorConfig,
  hoverElement: ComputedRef<HTMLElement | null>
) {
  const { width: winWidth } = useWindowSize();
  const { x, y } = useMouse({ type: "client" });

  const typeNameTagPosition = computed(() => {
    let xValue = x.value;
    let yValue = y.value;
    if (winWidth.value - x.value < 10) {
      xValue -= 10;
    }
    if (y.value < 10) {
      yValue += 10;
    }

    return { x: xValue, y: yValue };
  });

  const typeNameTagStyles = computed(() => {
    if (hoverElement.value) {
      return {
        display: "block",
        left: `${typeNameTagPosition.value.x}px`,
        top: `${typeNameTagPosition.value.y}px`,
        transform: `translate(25%,-50%)`,
      } as Record<string, string | number>;
    }

    return {
      display: "none",
    };
  });

  const typeName = computed(() => {
    if (hoverElement.value) {
      return utils.getElementType(hoverElement.value, config);
    }

    return null;
  });

  return {
    typeName,
    typeNameTagStyles,
  };
}

const { typeNameTagStyles, typeName } = useTypeNameTag(
  getConfigs(),
  useHoverElement()
);
</script>

<template>
  <div
    class="vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400"
    :style="[typeNameTagStyles, { zIndex: zindex.visTypeName }]"
  >
    {{ typeName }}
  </div>
</template>

<style scoped></style>
