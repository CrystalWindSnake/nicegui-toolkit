<script setup lang="ts">
import { useVisHover } from "./VisHover";
import { useSvgConfigs } from "./utils";
import { zindex } from "@/consts";

const strokeColor = "red";

const { viewBox, styles: svgStyles } = useSvgConfigs();
const { rectStyles, topLine, rightLine, bottomLine, leftLine } = useVisHover();
</script>

<template>
  <svg
    class="vis-hover"
    :viewBox="viewBox"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style="position: fixed; top: 0; left: 0; pointer-events: none"
    :style="[svgStyles, { 'z-index': zindex.visHover }]"
  >
    <rect
      fill="none"
      :stroke="strokeColor"
      stroke-width="1"
      :style="rectStyles"
    ></rect>

    <line
      class="top"
      v-bind="topLine"
      :stroke="strokeColor"
      stroke-dasharray="3 2"
    ></line>
    <line
      class="right"
      v-bind="rightLine"
      :stroke="strokeColor"
      stroke-dasharray="3 2"
    ></line>
    <line
      class="bottom"
      v-bind="bottomLine"
      :stroke="strokeColor"
      stroke-dasharray="3 2"
    ></line>
    <line
      class="left"
      v-bind="leftLine"
      :stroke="strokeColor"
      stroke-dasharray="3 2"
    ></line>
  </svg>
</template>

<style scoped></style>
