<script setup lang="ts">
import { ref } from "vue";
import { useDraggable } from "@vueuse/core";
import { jumpToSourceCode } from "@/hooks/globals";
import {
  useHasSelectedTarget,
  useTargetTypeName,
} from "@/hooks/targetElementContext";
import { useCanApplyCommand, applyCommand } from "@/hooks/globals";
import { t } from "@/hooks/language";
import * as consts from "@/consts";

const el = ref<HTMLElement | null>(null);
const { style: draggableStyle } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
  preventDefault: true,
});

const targetTypeName = useTargetTypeName();
const hasSelectedTarget = useHasSelectedTarget();
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
          @ok="applyCommand"
          :style="{ 'z-index': consts.zindex.mainPanelTooltip }"
        >
          <a-badge :count="9" dot :dotStyle="{ width: '10px', height: '10px' }">
            <a-button shape="circle" size="mini" v-show="useCanApplyCommand">
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
