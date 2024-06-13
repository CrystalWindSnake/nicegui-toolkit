<script setup lang="ts">
import ValueInput from "@/commons/ValueInput.vue";
import { useValueInput } from "@/commons/valueInput";

import { widthOptions } from "./data";
import { computed, watch } from "vue";

const options = widthOptions;

const valueInputModel = useValueInput(
  options,
  { selectValue: "auto" },
  {
    nonValueOptions: ["auto"],
    optionValueIfnonValue: "px",
    defaultOptionValue: "auto",
  }
);

const widthValue = computed(() => {

  const inputValue = valueInputModel.inputValue
  const selectValue = valueInputModel.selectValue

  if (selectValue.value==='auto') {
    return 'auto'
  }

  return `${inputValue.value}${selectValue.value}`
  
})

watch(widthValue, value => {
  console.log(value);
  
})

</script>

<template>
  <q-item dense>
    <q-item-section class="item-title" style="flex-grow: 0; flex-basis: auto"
      >Width</q-item-section
    >
    <q-item-section
      ><ValueInput :model="valueInputModel"></ValueInput
    ></q-item-section>
  </q-item>
</template>

<style scoped lang="less">
.item-title {
  width: 3rem;
}
</style>
