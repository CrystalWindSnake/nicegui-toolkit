<script setup lang="ts">
import { ref } from "vue";
import { useDraggable } from "@vueuse/core";
import {
  useHasSelectedTarget,
  useTargetTypeName,
  getSelectedTarget,
} from "@/shared/targetElementContext";
import * as recordTracker from "@/shared/recordTracker";
import * as emits from "@/shared/emits";
import * as consts from "@/shared/consts";
import * as utils from "@/shared/utils";
import { getConfigs } from "@/shared/configs";
import { t } from "@/shared/language";

const el = ref<HTMLElement | null>(null);
const { style: draggableStyle } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
  preventDefault: true,
});

const targetTypeName = useTargetTypeName();
const hasSelectedTarget = useHasSelectedTarget();

const canApplyCommand = recordTracker.hasChanged;

function jumpToSourceCode() {
  const target = getSelectedTarget().value;
  if (target) {
    const url = utils.getSourceCodeLink(target, getConfigs());
    utils.navigateTo(url);
  }
}
</script>

<template>
  <div
    class="non-selectable w-[350px]"
    :style="[draggableStyle, { zIndex: consts.zindex.panel }]"
    style="position: fixed"
    layout-tool-panel
  >
    <div
      class="flex bg-[#EDF8BB] row items-center gap-2 text-cyan-500 text-xl px-2"
      style="top: 0; left: 0; z-index: 999; height: 2rem"
    >
      <div ref="el" class="cursor-move grow">
        <a-space class="h-full">
          <div class="i-mdi-android-debug-bridge text-2xl" />
          <span class="font-bold">toolkit</span>

          <ATag color="green" v-show="hasSelectedTarget">{{
            targetTypeName
          }}</ATag>
        </a-space>
      </div>

      <a-tooltip :content="t('nt.apply_command_tooltip')">
        <a-popconfirm
          :popup-container="consts.popupContainer.mainPanelTooltip"
          :content="t('nt.apply_command_confirm')"
          ok-text="Apply"
          cancel-text="No"
          position="bottom"
          @ok="emits.applyCommand"
          :style="{ 'z-index': consts.zindex.mainPanelTooltip }"
        >
          <a-badge
            :count="9"
            dot
            :dotStyle="{ width: '10px', height: '10px' }"
            v-show="canApplyCommand"
            class="nt-apply-command"
          >
            <a-button shape="circle" size="mini">
              <div class="i-codicon-git-stash-apply text-1xl" />
            </a-button>
          </a-badge>
        </a-popconfirm>
      </a-tooltip>

      <a-tooltip :content="t('nt.jump2code')">
        <a-button
          shape="circle"
          size="mini"
          @click="jumpToSourceCode"
          v-show="hasSelectedTarget"
        >
          <div class="i-mdi-code-braces"></div>
        </a-button>
      </a-tooltip>
    </div>

    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<style scoped></style>
