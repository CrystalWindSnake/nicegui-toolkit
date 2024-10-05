<script setup lang="ts">
import { ref } from "vue";
import { useDraggable } from "@vueuse/core";
import { IconBug, IconCodeBlock } from "@arco-design/web-vue/es/icon";
import { jumpToSourceCode } from "@/hooks/globals";
import { useHasSelectedTarget } from "@/hooks/targetElementContext";
import { useCanApplyCommand, applyCommand } from "@/hooks/globals";

const el = ref<HTMLElement | null>(null);
const { style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
  preventDefault: true,
});
</script>

<template>
  <div :style="style" style="position: fixed" layout-tool-panel>
    <div
      class="flex bg-[#EDF8BB] row items-center gap-2 text-cyan-500 text-xl px-2"
      style="top: 0; left: 0; z-index: 999; height: 2rem"
    >
      <div ref="el" class="cursor-move grow">
        <a-space class="h-full">
          <IconBug size="24"></IconBug>
          <span class="font-bold">toolkit</span>
        </a-space>
      </div>

      <a-badge :count="9" dot :dotStyle="{ width: '10px', height: '10px' }">
        <a-button
          shape="circle"
          size="mini"
          @click="applyCommand()"
          v-show="useCanApplyCommand"
        >
          <IconList></IconList>
        </a-button>
      </a-badge>

      <a-tooltip content="jump to code">
        <a-button
          shape="circle"
          size="mini"
          @click="jumpToSourceCode"
          v-show="useHasSelectedTarget"
        >
          <IconCodeBlock></IconCodeBlock>
        </a-button>
      </a-tooltip>
    </div>

    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<style scoped></style>
