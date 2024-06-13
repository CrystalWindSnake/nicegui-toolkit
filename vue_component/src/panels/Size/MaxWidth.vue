<script setup lang="ts">
import ValueInput from "@/commons/ValueInput.vue";
import { useValueInput } from "@/commons/valueInput";
import { maxWidthOptions } from "./data";

const options = maxWidthOptions;

const valueInputModel = useValueInput(
  options,
  { selectValue: "none" },
  {
    optionValueIfnonValue: "px",
    nonValueOptions: ["none"],
    defaultOptionValue: "none",
  }
);
</script>

<template>
  <q-item dense>
    <q-item-section class="item-title" style="flex-grow: 0; flex-basis: auto"
      >Max W</q-item-section
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
