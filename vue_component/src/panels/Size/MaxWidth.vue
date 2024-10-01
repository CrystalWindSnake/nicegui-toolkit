<script setup lang="ts">
import InputWithUnitSelector from "@/commons/InputWithUnitSelector.vue";
import { useInputWithUnitSelector } from "@/commons/inputWithUnitSelector";

import { maxWidthOptions } from "./data";
import { valueToStyleModel } from "./utils";
import ItemLabel from "@/commons/ItemLabel.vue";

const options = maxWidthOptions;

const inputWithUnitSelectorModel = useInputWithUnitSelector({
  options,
  configs: {
    optionValueIfnonValue: "px",
    nonValueOptions: ["none"],
    defaultOptionValue: "none",
    specialProperty: "width",
  },
});

valueToStyleModel(inputWithUnitSelectorModel, "max-width", ["none"]);
</script>

<template>
  <ItemLabel key-id="max-width" label="Max W" />
  <InputWithUnitSelector
    :model="inputWithUnitSelectorModel"
  ></InputWithUnitSelector>
</template>

<style scoped lang="less">
.item-title {
  width: 3rem;
}
</style>
