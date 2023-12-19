<script setup lang="ts">
import ValueInput from "@/commons/ValueInput.vue";
import { useValueInput } from "@/commons/valueInput";

import { widthOptions } from "./data";
import { valueToStyleModel } from "./utils";

import { getSelectTarget } from "@/components/Aiming";
import { buildRefGetter } from "@/hooks/targetInfoGetter";
import { watch } from "vue";

const options = widthOptions;

const selectTarget = getSelectTarget();
const getter = buildRefGetter(selectTarget);

const width = getter.getComputedStyle("width");
watch(width, (value) => {
  console.log("width:", value);
});

const valueInputModel = useValueInput(
  options,
  { selectValue: "auto" },
  {
    nonValueOptions: ["auto"],
    optionValueIfnonValue: "px",
    defaultOptionValue: "auto",
  }
);

valueToStyleModel(valueInputModel, "width", ["auto"]);
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
