<script setup lang="ts">
import ValueInput from "@/commons/ValueInput.vue";
import { useValueInput } from "@/commons/valueInput";
import { minHeightOptions } from "./data";

const options = minHeightOptions;

const valueInputModel = useValueInput(
  options,
  { inputValue: "0", selectValue: "px" },
  {
    optionValueIfnonValue: "px",
    nonValueOptions: ["auto"],
  }
);
</script>

<template>
  <q-item dense>
    <q-item-section class="item-title" style="flex-grow: 0; flex-basis: auto"
      >Min H</q-item-section
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
