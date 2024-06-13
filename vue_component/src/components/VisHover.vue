<script setup lang="ts">
import { useVisHover } from "./VisHover";
import { useSvgConfigs } from "./trackBallUtils";

// const props = defineProps<{ model: TModel }>();

const { viewBox, styles: svgStyles } = useSvgConfigs();

const { rectStyles, topLine, rightLine, bottomLine, leftLine } = useVisHover();
</script>

<template>
  <svg
    class="vis-hover"
    :viewBox="viewBox"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style="
      position: fixed;
      top: 0;
      left: 0;
      pointer-events: none;
      z-index: 9999999;
    "
    :style="svgStyles"
  >
    <rect fill="none" stroke="red" stroke-width="1" :style="rectStyles"></rect>

    <line
      class="top"
      v-bind="topLine"
      stroke="red"
      stroke-dasharray="3 2"
    ></line>
    <line
      class="right"
      v-bind="rightLine"
      stroke="red"
      stroke-dasharray="3 2"
    ></line>
    <line
      class="bottom"
      v-bind="bottomLine"
      stroke="red"
      stroke-dasharray="3 2"
    ></line>
    <line
      class="left"
      v-bind="leftLine"
      stroke="red"
      stroke-dasharray="3 2"
    ></line>
  </svg>
</template>

<style scoped></style>
