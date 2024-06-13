<script setup lang="ts">
import { ref } from "vue";
import { useDraggable } from "@vueuse/core";

// const props = defineProps<{}>();

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
      class="cursor-move bg-secondary row items-center gap-2 text-cyan-1 text-h6 text-weight-bolder px-2"
      style="width: 100%; top: 0; left: 0; z-index: 999; height: 2rem"
    >
      <q-icon name="gps_fixed"></q-icon>
      <span>toolkit</span>
    </div>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<style scoped></style>
