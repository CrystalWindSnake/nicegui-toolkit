<script setup lang="ts">
import { computed, ref } from "vue";
import { TDirection, useSliderControl } from "../useSliderControl";
import { createStyleRefModel } from "@/features/panels/utils";

const props = defineProps<{
  styleName: string;
  clipPath: string;
  direction: TDirection;
  valueFilter?: (value: number) => boolean;
}>();

const styleModel = createStyleRefModel(props.styleName);

const initValue = computed(() => {
  if (!styleModel.value) {
    return {
      value: 0,
      unit: "px",
    };
  }

  const regex = /(-?\d+)([a-zA-Z%]+)/;
  const result = styleModel.value.match(regex)!;

  const value = parseFloat(result[1]);
  const unit = result[2];
  return { value, unit };
});

let tempValue = initValue.value.value;
let tempUnit = initValue.value.unit;

const value = computed({
  get: () => {
    return initValue.value.value;
  },
  set: (value) => {
    tempValue = value;
    styleModel.value = `${tempValue}${tempUnit}`;
  },
});

const unit = computed({
  get: () => {
    return initValue.value.unit;
  },
  set: (value) => {
    tempUnit = value;
    styleModel.value = `${tempValue}${tempUnit}`;
  },
});
const target = ref<HTMLElement | null>(null);

useSliderControl(target, props.direction, value, props.valueFilter);

const dstyle = {
  "clip-path": props.clipPath,
};

// events
function onClickNumber() {
  // alert("onClickNumber");
}
</script>

<template>
  <div
    ref="target"
    class="target"
    style="display: flex; justify-content: center; align-items: center"
    :style="dstyle"
  >
    <div @click="onClickNumber">
      <div
        ref="numberElement"
        class="number"
        style="user-select: none; color: aliceblue; cursor: pointer"
      >
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
