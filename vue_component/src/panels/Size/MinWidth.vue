<script setup lang="ts">
import InputWithUnitSelector from "@/commons/InputWithUnitSelector.vue";
import { useInputWithUnitSelector } from "@/commons/inputWithUnitSelector";

import { minWidthOptions } from "./data";
import { valueToStyleModel } from "./utils";
import ItemLabel from "@/commons/ItemLabel.vue";

const options = minWidthOptions;

const inputWithUnitSelectorModel = useInputWithUnitSelector({
  options,
  defaultValues: {
    input: "0",
    select: "px",
  },
  configs: {
    optionValueIfnonValue: "px",
    nonValueOptions: ["auto"],
    specialProperty: "width",
  },
});

valueToStyleModel(inputWithUnitSelectorModel, "min-width", ["auto"]);
</script>

<template>
  <ItemLabel key-id="min-width" label="Min W" />
  <InputWithUnitSelector
    :model="inputWithUnitSelectorModel"
  ></InputWithUnitSelector>
</template>

<style scoped lang="less">
.item-title {
  width: 3rem;
}
</style>
