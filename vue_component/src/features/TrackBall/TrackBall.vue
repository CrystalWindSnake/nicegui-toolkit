<script setup lang="ts">
import MainPanel from "@/features/panels/MainPanel.vue";
import Aiming from "@/features/Aiming/Aiming.vue";
import Panel from "@/features/Panel.vue";
import VisHover from "@/features/VisHover/VisHover.vue";
import { getComponentExpose } from "./trackBallUtils";
import * as tbUtils from "./trackBallUtils";
import * as utils from "@/shared/utils";
import { type TElementTreeData } from "@/shared/types";

import {
  type TSelectorConfig,
  TTargetContext,
  TSelectedChangeEventArgs,
} from "@/shared/types";
import { TLanguageConfig } from "@/shared/language";
import { onMounted, watch } from "vue";
import * as targetElementContext from "@/shared/targetElementContext";
import VisTypeName from "@/features/VisTypeName.vue";

import * as AppEmits from "@/shared/emits";
import * as server from "@/shared/server";
import { useHoverElement } from "@/shared/hoverElement";

const props = defineProps<{
  selectorConfig: TSelectorConfig;
  currentTargetContext: TTargetContext;
  resource_path?: string;
  elementTreeData: TElementTreeData;
  languageConfig: TLanguageConfig;
}>();

// emits
const emit = defineEmits() as AppEmits.TAppEmits;

tbUtils.initTrackBall({
  config: props.selectorConfig,
  languageConfig: props.languageConfig,
  emits: emit,
  elementTreeData: props.elementTreeData,
});

// onMounted
onMounted(async () => {
  await tbUtils.createClientStyleLinkTag(props.resource_path);
  emit("init");
});

watch(
  () => props.currentTargetContext,
  () => {
    targetElementContext.updateCurrentTargetContext(props.currentTargetContext);
  },
  {
    immediate: true,
    deep: true,
  }
);

// events
watch(useHoverElement(), (target) => {
  if (target) {
    const id = utils.getElementId(target, props.selectorConfig);
    emit("hoverChange", { id });
    return;
  }

  emit("hoverChange", { id: null });
});

watch(targetElementContext.selectedTarget, (target) => {
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

// Expose
defineExpose({
  ...getComponentExpose(
    props.selectorConfig,
    targetElementContext.selectedTarget
  ),
  twSearch: (id: number, classes: string[]) => {
    server.handleServerResponse(id, classes);
  },
});
</script>

<template>
  <Teleport to="body">
    <VisHover></VisHover>

    <Aiming></Aiming>

    <Panel>
      <slot name="header"></slot>
      <MainPanel></MainPanel>
      <slot name="footer"></slot>
    </Panel>

    <VisTypeName></VisTypeName>
  </Teleport>
</template>

<style>
.x-unit-select .arco-select-view-suffix {
  padding-left: 0 !important;
}
</style>
