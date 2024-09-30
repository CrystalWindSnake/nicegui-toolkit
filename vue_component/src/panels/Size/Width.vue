<script setup lang="ts">
import InputWithUnitSelector from "@/commons/InputWithUnitSelector.vue";
import { useInputWithUnitSelector } from "@/commons/inputWithUnitSelector";

import { widthOptions } from "./data";

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

const inputWithUnitSelectorModel = useInputWithUnitSelector({
  options,
  configs: {
    nonValueOptions: ["auto"],
    optionValueIfnonValue: "px",
    defaultOptionValue: "auto",
  },
});

// valueToStyleModel(valueInputModel, "width", ["auto"]);
</script>

<template>
  <div class="w-full flex flex-row">
    <ItemLabel key-id="width" label="Width" />
    <InputWithUnitSelector
      :model="inputWithUnitSelectorModel"
    ></InputWithUnitSelector>
  </div>
</template>

<style scoped lang="less">
.item-title {
  width: 3rem;
}
</style>
