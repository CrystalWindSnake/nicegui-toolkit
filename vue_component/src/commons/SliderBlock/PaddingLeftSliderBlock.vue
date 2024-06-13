<script setup lang="ts">
import { onMounted, ref, watch } from "vue";

import { useSliderControl } from "../useSliderControl";
const props = defineProps<{ modelValue: number }>();

const emits = defineEmits<{
  (event: "update:modelValue", modelValue: number): void;
}>();

const value = ref(props.modelValue);
const target = ref(null);

watch(value, (v) => {
  emits("update:modelValue", v);
});

onMounted(() => {
  if (target.value) {
    useSliderControl(target.value, "left", value);
  }
});

const dstyle = {
  "clip-path": "polygon(0 0, 100% 25%, 100% 75%, 0% 100%)",
};
</script>

<template>
  <div
    ref="target"
    style="display: flex; justify-content: center; align-items: center"
    :style="dstyle"
  >
    <div class="number" style="user-select: none">{{ value }}</div>
  </div>
</template>

<style scoped></style>
