<script setup lang="ts">
import { useSvgConfigs } from "./aimingUtils";
import { computed } from "vue";
import { TSelectorConfig } from "./types";

const props = defineProps<{
  selectedElement: HTMLElement | null;
  selectorConfig: TSelectorConfig;
}>();

const selectedElement = computed(() => props.selectedElement);

const {
  svgConfig: { viewBox, styles },
  rectStyles,
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
} = useSvgConfigs(selectedElement, props.selectorConfig);
</script>

<template>
  <svg
    class="vis-aiming"
    :viewBox="viewBox"
    version="1.1"
    style="position: fixed; top: 0; left: 0; pointer-events: none"
    :style="styles"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      stroke="hotpink"
      fill="none"
      width="100%"
      height="100%"
      :style="rectStyles"
    ></rect>
    <circle stroke="hotpink" fill="white" v-bind="p1" r="2"></circle>
    <circle fill="hotpink" v-bind="p2" r="2"></circle>
    <circle stroke="hotpink" fill="white" v-bind="p3" r="2"></circle>
    <circle fill="hotpink" v-bind="p4" r="2"></circle>
    <circle stroke="hotpink" fill="white" v-bind="p5" r="2"></circle>
    <circle fill="hotpink" v-bind="p6" r="2"></circle>
    <circle stroke="hotpink" fill="white" v-bind="p7" r="2"></circle>
    <circle fill="hotpink" v-bind="p8" r="2"></circle>
  </svg>
</template>

<style scoped></style>
