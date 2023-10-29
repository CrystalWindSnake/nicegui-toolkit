<script setup lang="ts">
// import { ref } from "vue";

import Aiming from "./Aiming.vue";
import Panel from "./Panel.vue";

import {
  useHoverVisTarget,
  useSvgConfigs,
  hookPageMouseEvent,
  useTypeNameTag,
  getComponentExpose,
} from "./trackBallUtils";

import * as utils from "./trackBallUtils";
import { type TSelectorConfig } from "./types";
import { ref, watch } from "vue";

const props = defineProps<{ selectorConfig: TSelectorConfig }>();
const emit = defineEmits<{
  (event: "hoverChange", args: { id: number | null }): void;
  (
    event: "selectedChange",
    args: { id: number | null; parentBoxId: number | null }
  ): void;
}>();

const { viewBox, styles: svgStyles } = useSvgConfigs();

const { hoverElement, rectStyles, topLine, rightLine, bottomLine, leftLine } =
  useHoverVisTarget(props.selectorConfig);

const { typeNameTagStyles, message: typeName } = useTypeNameTag(
  props.selectorConfig,
  hoverElement
);

const selectedElement = ref<HTMLElement | null>(null);

hookPageMouseEvent(hoverElement, selectedElement);

// events
watch(hoverElement, (target) => {
  if (target) {
    const id = parseInt(target.getAttribute(props.selectorConfig.idAttr)!);
    emit("hoverChange", { id });
    return;
  }

  emit("hoverChange", { id: null });
});

watch(selectedElement, (target) => {
  if (target) {
    const id = parseInt(target.getAttribute(props.selectorConfig.idAttr)!);

    emit("selectedChange", {
      id,
      parentBoxId: utils.getBoxParentId(target, props.selectorConfig),
    });
    return;
  }

  emit("selectedChange", { id: null, parentBoxId: null });
});

defineExpose(getComponentExpose(props.selectorConfig, selectedElement));
</script>

<template>
  <Teleport to="body">
    <svg
      class="vis-hover"
      :viewBox="viewBox"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style="position: absolute; top: 0; left: 0; pointer-events: none"
      :style="svgStyles"
    >
      <rect
        fill="none"
        stroke="red"
        stroke-width="1"
        :style="rectStyles"
      ></rect>

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

    <Aiming :selected-element="selectedElement"></Aiming>

    <Panel>
      <slot></slot>
    </Panel>

    <div
      class="vis-type-name fixed top-0 left-0 pointer-events-none shadow z-9999 rounded p-1 bg-green-400"
      :style="typeNameTagStyles"
    >
      {{ typeName }}
    </div>
  </Teleport>
</template>

<style scoped></style>
