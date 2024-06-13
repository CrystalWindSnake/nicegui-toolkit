<script setup lang="ts">
import MainPanel from "@/panels/MainPanel.vue";
import Aiming from "./Aiming.vue";
import Panel from "./Panel.vue";
import VisHover from "./VisHover.vue";

import {
  useHoverVisTarget,
  hookPageMouseEvent,
  useTypeNameTag,
  getComponentExpose,
} from "./trackBallUtils";

import * as tbUtils from "./trackBallUtils";
import * as utils from "./utils";
import { type TSelectorConfig, TSelectedChangeEventArgs } from "./types";
import { onMounted, ref, watch } from "vue";
import { TCommandEvent, register as registerCommand } from "@/hooks/command";
import { setGlobals } from "@/hooks/globals";

const props = defineProps<{
  selectorConfig: TSelectorConfig;
  styleUrl?: string;
}>();

// emits
const emit = defineEmits<{
  (event: "hoverChange", args: { id: number | null }): void;
  (event: "selectedChange", args: TSelectedChangeEventArgs): void;
  (
    event: "command",
    args: {
      id: number;
      commands: TCommandEvent[];
    }
  ): void;
}>();

function emitCommnad(commands: TCommandEvent[]) {
  const target = selectedElement.value;
  if (!target) {
    // throw new Error("No components are selected");
    return;
  }
  const id = utils.getElementId(target, props.selectorConfig);
  if (!id) {
    throw new Error("not found selected element");
  }
  emit("command", { id: id, commands });
  console.log("send cmd:", commands);
}

registerCommand(emitCommnad);

// onMounted
onMounted(() => {
  tbUtils.createClientStyleLinkTag(props.styleUrl);
});

const { hoverElement } = useHoverVisTarget(props.selectorConfig);

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

// Expose
defineExpose(getComponentExpose(props.selectorConfig, selectedElement));

// setGlobals
setGlobals(selectedElement);
</script>

<template>
  <Teleport to="body">
    <VisHover></VisHover>

    <Aiming
      :selected-element="selectedElement"
      :selectorConfig="props.selectorConfig"
      style="z-index: 9999999"
    ></Aiming>

    <Panel class="non-selectable" style="z-index: 9999999; width: 350px">
      <MainPanel></MainPanel>
      <template v-slot:footer>
        <slot name="footer"></slot>
      </template>
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
