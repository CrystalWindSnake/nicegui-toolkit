<script setup lang="ts">
import InputWithUnitSelector from "@/commons/InputWithUnitSelector.vue";
import { useInputWithUnitSelector } from "@/commons/inputWithUnitSelector";

import { maxHeightOptions } from "./data";
import { valueToStyleModel } from "./utils";
import ItemLabel from "@/commons/ItemLabel.vue";

const options = maxHeightOptions;

const inputWithUnitSelectorModel = useInputWithUnitSelector({
  options,
  configs: {
    optionValueIfnonValue: "px",
    nonValueOptions: ["none"],
    defaultOptionValue: "none",
    specialProperty: "height",
  },
});

valueToStyleModel(inputWithUnitSelectorModel, "max-height", ["none"]);
</script>

<template>
  <ItemLabel key-id="max-height" label="Max H" />
  <InputWithUnitSelector
    :model="inputWithUnitSelectorModel"
  ></InputWithUnitSelector>
</template>

<style scoped lang="less">
.item-title {
  width: 3rem;
}
</style>
