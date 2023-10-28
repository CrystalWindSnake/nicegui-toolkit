<script setup lang="ts">
// import { ref } from "vue";
import { useHoverVisTarget, useSvgConfigs, hookPageMouseEvent } from "./utils";
import { type TSelectorConfig } from "./types";
import { ref, watch } from "vue";

const props = defineProps<{ selectorConfig: TSelectorConfig }>();
const emit = defineEmits<{
  (event: "hoverChange", id: number | null): void;
  (event: "selectedChange", id: number | null): void;
}>();

const { viewBox, styles: svgStyles } = useSvgConfigs();

const { hoverSelectId, rectStyles, topLine, rightLine, bottomLine, leftLine } =
  useHoverVisTarget(props.selectorConfig);

const selectedId = ref<string | null>(null);

hookPageMouseEvent(hoverSelectId, selectedId);

// events
watch(hoverSelectId, (value) => {
  const id = value === null ? null : parseInt(value);
  emit("hoverChange", id);
});

watch(selectedId, (value) => {
  const id = value === null ? null : parseInt(value);
  emit("selectedChange", id);
});
</script>

<template>
  <svg
    :viewBox="viewBox"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style="position: absolute; top: 0; left: 0; pointer-events: none"
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
