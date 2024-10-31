<script setup lang="ts">
import MainPanel from "@/panels/MainPanel.vue";
import Aiming from "./Aiming.vue";
import Panel from "./Panel.vue";
import VisHover from "./VisHover.vue";
import { getComponentExpose } from "./trackBallUtils";
import * as tbUtils from "./trackBallUtils";
import * as hookUtils from "@/hooks/utils";
import { type TElementTreeData } from "@/hooks/types";

import {
  type TSelectorConfig,
  TTargetContext,
  TSelectedChangeEventArgs,
  TSetCommand,
  TResetCommand,
} from "./types";
import { TLanguageConfig } from "@/types/language";
import { onMounted, watch } from "vue";
import * as globals from "@/hooks/globals";
import * as targetElementContext from "@/hooks/targetElementContext";
import VisTypeName from "./VisTypeName.vue";

import * as AppEmits from "@/shared/emits";
import * as server from "@/shared/server";

const props = defineProps<{
  selectorConfig: TSelectorConfig;
  currentTargetContext: TTargetContext;
  resource_path?: string;
  elementTreeData: TElementTreeData;
  languageConfig: TLanguageConfig;
}>();

// emits
const emit = defineEmits() as AppEmits.TAppEmits;
AppEmits.init(emit);

function emitSetCommnad(commands: TSetCommand[]) {
  const target = targetElementContext.selectedTarget.value;
  if (!target) {
    return;
  }
  const id = hookUtils.getElementId(target, props.selectorConfig);
  if (!id) {
    throw new Error("not found selected element");
  }
  emit("setCommand", { id: id, commands });
}

function emitResetCommnad(commands: TResetCommand[]) {
  const target = targetElementContext.selectedTarget.value;
  if (!target) {
    return;
  }
  const id = hookUtils.getElementId(target, props.selectorConfig);
  if (!id) {
    throw new Error("not found selected element");
  }
  emit("resetCommand", { id: id, commands });
}

// onMounted
onMounted(async () => {
  await tbUtils.createClientStyleLinkTag(props.resource_path);

  emit("init");
});

globals.initGlobals({
  selectorConfig: props.selectorConfig,
  languageConfig: props.languageConfig,
  elementTreeData: props.elementTreeData,
  emitSetCommandFn: emitSetCommnad,
  emitResetCommandFn: emitResetCommnad,
  emitJumpSourceCodeFn: () => {
    const target = targetElementContext.selectedTarget.value;
    if (!target) {
      return;
    }
    const id = hookUtils.getElementId(target, props.selectorConfig);
    if (!id) {
      throw new Error("not found selected element");
    }
    emit("jumpSourceCode", { id });
  },
  emitApplyCommandFn: () => {
    emit("applyCommand");
  },
  emitClassesUpdateFn: (e) => {
    emit("classesUpdate", e);
  },
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
watch(globals.hoverElement, (target) => {
  if (target) {
    const id = hookUtils.getElementId(target, props.selectorConfig);
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
    const id = hookUtils.getElementId(target, props.selectorConfig);

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
