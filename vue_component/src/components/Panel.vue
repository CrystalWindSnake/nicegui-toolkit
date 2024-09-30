<script setup lang="ts">
import { ref } from "vue";
import { useDraggable } from "@vueuse/core";
import { IconBug } from "@arco-design/web-vue/es/icon";

const el = ref<HTMLElement | null>(null);
const { style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
  preventDefault: true,
});
</script>

<template>
  <div :style="style" style="position: fixed" layout-tool-panel>
    <div
      ref="el"
      class="cursor-move bg-[#EDF8BB] row items-center gap-2 text-cyan-500 text-xl px-2"
      style="top: 0; left: 0; z-index: 999; height: 2rem"
    >
      <a-space class="h-full">
        <icon-bug size="24"></icon-bug>
        <span class="font-bold">toolkit</span>
      </a-space>
    </div>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<style scoped></style>
