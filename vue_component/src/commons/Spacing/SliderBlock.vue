<script setup lang="ts">
import { ref, watch } from "vue";

import { TDirection, useSliderControl } from "../useSliderControl";
const props = defineProps<{
  modelValue: number;
  clipPath: string;
  direction: TDirection;
}>();

const emits = defineEmits<{
  (event: "update:modelValue", modelValue: number): void;
}>();

const value = ref(props.modelValue);
const target = ref<HTMLElement | null>(null);

watch(value, (v) => {
  emits("update:modelValue", v);
});

useSliderControl(target, props.direction, value);

const dstyle = {
  "clip-path": props.clipPath,
};

// events
function onClickNumber() {
  alert("onClickNumber");
}
</script>

<template>
  <div ref="target" class="target" style="display: flex; justify-content: center; align-items: center" :style="dstyle">
    <div @click="onClickNumber">
      <div ref="numberElement" @click.capture="onClickNumber" class="number"
        style="user-select: none; color: aliceblue; cursor: pointer">
        {{ value }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.target:hover {
  filter: brightness(1.15);
}
</style>
