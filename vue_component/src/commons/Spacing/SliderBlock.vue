<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { TDirection, useSliderControl } from "../useSliderControl";
import { sendCommand } from "@/hooks/events";
import { getInitValue } from "@/hooks/propsMapping";

type TInitValue = {
  value: number
  unit: string
} | null

const props = defineProps<{
  styleName: string
  clipPath: string;
  direction: TDirection;
}>();


const initValue = getInitValue(props.styleName) as TInitValue ?? { value: 0, unit: 'px' }

const value = ref(initValue.value);
const unit = ref(initValue.unit)
const target = ref<HTMLElement | null>(null);

const resultValue = computed(() => `${value.value}${unit.value}`)

watch(resultValue, (v) => {
  sendCommand([{ action: 'style', commandType: 'set', values: { [props.styleName]: v } }])
});

useSliderControl(target, props.direction, value);

const dstyle = {
  "clip-path": props.clipPath,
};

// events
function onClickNumber() {
  // alert("onClickNumber");
}
</script>

<template>
  <div ref="target" class="target" style="display: flex; justify-content: center; align-items: center" :style="dstyle">
    <div @click="onClickNumber">
      <div ref="numberElement" class="number" style="user-select: none; color: aliceblue; cursor: pointer">
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
