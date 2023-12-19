<script setup lang="ts">
import ValueInput from "@/commons/ValueInput.vue";
import { useValueInput } from "@/commons/valueInput";
import { heightOptions } from "./data";
import { valueToStyleModel } from "./utils";

const options = heightOptions;

const valueInputModel = useValueInput(
  options,
  { selectValue: "auto" },
  {
    nonValueOptions: ["auto"],
    optionValueIfnonValue: "px",
    defaultOptionValue: "auto",
  }
);

valueToStyleModel(valueInputModel, "height", ["auto"]);
</script>

<template>
  <q-item dense>
    <q-item-section class="item-title" style="flex-grow: 0; flex-basis: auto"
      >Height</q-item-section
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
