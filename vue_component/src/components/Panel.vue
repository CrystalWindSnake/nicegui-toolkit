<script setup lang="ts">
import { ref } from "vue";
import { useDraggable } from "@vueuse/core";

// const props = defineProps<{}>();

const el = ref<HTMLElement | null>(null);
const { style } = useDraggable(el, {
  initialValue: { x: 40, y: 40 },
});
</script>

<template>
  <div ref="el" :style="style" style="position: fixed" layout-tool-panel>
    <slot></slot>
  </div>
</template>

<style scoped></style>
