<script setup lang="ts">
import ValueInput from "@/commons/ValueInput.vue";
import { useValueInput } from "@/commons/valueInput";
import { minWidthOptions } from "./data";
import { valueToStyleModel } from "./utils";
import ItemLabel from "@/commons/ItemLabel.vue";

const options = minWidthOptions;

const valueInputModel = useValueInput(
  options,
  { inputValue: "0", selectValue: "px" },
  {
    optionValueIfnonValue: "px",
    nonValueOptions: ["auto"],
  }
);

valueToStyleModel(valueInputModel, "min-width", ["auto"]);
</script>

<template>
  <q-item dense>
    <q-item-section class="item-title" style="flex-grow: 0; flex-basis: auto"
      ><ItemLabel key-id="min-width" label="Min W"
    /></q-item-section>
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
