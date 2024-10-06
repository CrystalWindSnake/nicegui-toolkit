<script setup lang="ts">
import MainPanel from "@/panels/MainPanel.vue";
import Aiming from "./Aiming.vue";
import Panel from "./Panel.vue";
import VisHover from "./VisHover.vue";
import { useTypeNameTag, getComponentExpose } from "./trackBallUtils";
import * as tbUtils from "./trackBallUtils";
import * as hookUtils from "@/hooks/utils";

import {
  type TSelectorConfig,
  TTargetContext,
  TSelectedChangeEventArgs,
  TSetCommand,
  TResetCommand,
} from "./types";
import { onMounted, watch } from "vue";
import * as globals from "@/hooks/globals";
import * as targetElementContext from "@/hooks/targetElementContext";
import { useAiming } from "./Aiming";

const props = defineProps<{
  selectorConfig: TSelectorConfig;
  currentTargetContext: TTargetContext;
  resource_path?: string;
}>();

// emits
const emit = defineEmits<{
  (event: "hoverChange", args: { id: number | null }): void;
  (event: "selectedChange", args: TSelectedChangeEventArgs): void;
  (
    event: "setCommand",
    args: {
      id: number;
      commands: TSetCommand[];
    }
  ): void;
  (
    event: "resetCommand",
    args: {
      id: number;
      commands: TResetCommand[];
    }
  ): void;
  (
    event: "jumpSourceCode",
    args: {
      id: number;
    }
  ): void;
  (event: "applyCommand"): void;
}>();

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
});

globals.initGlobals({
  selectorConfig: props.selectorConfig,
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

const { typeNameTagStyles, typeName } = useTypeNameTag(
  props.selectorConfig,
  globals.hoverElement
);

// aiming
const aimingModel = useAiming();

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
defineExpose(
  getComponentExpose(props.selectorConfig, targetElementContext.selectedTarget)
);
</script>

<template>
  <Teleport to="body">
    <VisHover></VisHover>

    <Aiming :model="aimingModel" style="z-index: 9999999"></Aiming>

    <Panel class="non-selectable" style="z-index: 9999999; width: 350px">
      <slot name="header"></slot>
      <MainPanel></MainPanel>
      <slot name="footer"></slot>
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

<style>
.arco-collapse-item-content {
  padding: 0 !important;
}

.x-unit-select .arco-select-view-suffix {
  padding-left: 0 !important;
}
</style>
