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

import * as tbUtils from "./trackBallUtils";
import * as utils from "./utils";
import { TSelectedChangeEventArgs, type TSelectorConfig } from "./types";
import { ref, watch } from "vue";

const props = defineProps<{ selectorConfig: TSelectorConfig }>();
const emit = defineEmits<{
  (event: "hoverChange", args: { id: number | null }): void;
  (event: "selectedChange", args: TSelectedChangeEventArgs): void;
}>();

const { viewBox, styles: svgStyles } = useSvgConfigs();

const { hoverElement, rectStyles, topLine, rightLine, bottomLine, leftLine } =
  useHoverVisTarget(props.selectorConfig);

const { typeNameTagStyles, typeName } = useTypeNameTag(
  props.selectorConfig,
  hoverElement
);

const selectedElement = ref<HTMLElement | null>(null);

hookPageMouseEvent(hoverElement, selectedElement);

// events
watch(hoverElement, (target) => {
  if (target) {
    const id = utils.getElementId(target, props.selectorConfig);
    emit("hoverChange", { id });
    return;
  }

  emit("hoverChange", { id: null });
});

watch(selectedElement, (target) => {
  const flexInfo = {
    isFlex: false,
    direction: null,
  } as TSelectedChangeEventArgs["flexInfo"];

  if (target) {
    const id = utils.getElementId(target, props.selectorConfig);

    const parentBox = tbUtils.getBoxParentId(target, props.selectorConfig);

    let parentFlexInfo: TSelectedChangeEventArgs["parentFlexInfo"] = {
      isFlex: false,
      direction: null,
    };
    if (parentBox) {
      parentFlexInfo = tbUtils.getFlexInfo(parentBox.dom, props.selectorConfig);
    }

    emit("selectedChange", {
      id,
      parentBoxId: parentBox !== null ? parentBox.id : null,
      flexInfo: tbUtils.getFlexInfo(target, props.selectorConfig),
      parentFlexInfo,
    });
    return;
  }

  emit("selectedChange", {
    id: null,
    parentBoxId: null,
    flexInfo,
    parentFlexInfo: flexInfo,
  });
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
      style="
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 9999999;
      "
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

    <Aiming
      :selected-element="selectedElement"
      :selectorConfig="props.selectorConfig"
      style="z-index: 9999999"
    ></Aiming>

    <Panel style="z-index: 9999999">
      <slot></slot>
    </Panel>

    <div
      class="vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400"
      :style="typeNameTagStyles"
      style="z-index: 9999999"
    >
      {{ typeName }}
    </div>
  </Teleport>
</template>

<style scoped></style>
