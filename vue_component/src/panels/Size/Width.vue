<script setup lang="ts">
import ValueInput from "@/commons/ValueInput.vue";
import { useValueInput } from "@/commons/valueInput";

import { widthOptions } from "./data";
import { valueToStyleModel } from "./utils";

import { buildRefGetter } from "@/hooks/targetInfoGetter";
import { toRef, watch } from "vue";
import * as globals from "@/hooks/globals";

import ItemLabel from "@/commons/ItemLabel.vue";

const options = widthOptions;

const selectTarget = globals.SelectedTarget;
const getter = buildRefGetter(selectTarget);

// const width = getter.getStyle("width");
// watch(width, (value) => {
//   console.log("width:", value === null);

//   const dto = buildInputValueDto(value);

//   const { number, unit } = dto.splitTo();
// });

const unit = toRef("auto");
const widthValue = toRef(undefined);

const valueInputModel = useValueInput(
  options,
  { selectValue: unit, inputValue: widthValue },
  {
    nonValueOptions: ["auto"],
    optionValueIfnonValue: "px",
    defaultOptionValue: "auto",
  }
);

valueToStyleModel(valueInputModel, "width", ["auto"]);
</script>

<template>
  <div class="w-full flex flex-row">
    <ItemLabel key-id="width" label="Width" />
    <ValueInput :model="valueInputModel"></ValueInput>
  </div>
  <!-- 
  <q-item dense>
    <q-item-section class="item-title" style="flex-grow: 0; flex-basis: auto"
      ><ItemLabel key-id="width" label="Width"
    /></q-item-section>
    <q-item-section
      ><ValueInput :model="valueInputModel"></ValueInput
    ></q-item-section>
  </q-item> -->
</template>

<style scoped lang="less">
.item-title {
  width: 3rem;
}
</style>
