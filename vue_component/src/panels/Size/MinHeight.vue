<script setup lang="ts">
import InputWithUnitSelector from "@/commons/InputWithUnitSelector.vue";
import { useInputWithUnitSelector } from "@/commons/inputWithUnitSelector";

import { minHeightOptions } from "./data";
import { valueToStyleModel } from "./utils";
import ItemLabel from "@/commons/ItemLabel.vue";

const options = minHeightOptions;

const inputWithUnitSelectorModel = useInputWithUnitSelector({
  options,
  defaultValues: {
    input: "0",
    select: "px",
  },
  configs: {
    optionValueIfnonValue: "px",
    nonValueOptions: ["auto"],
    specialProperty: "height",
  },
});

valueToStyleModel(inputWithUnitSelectorModel, "min-height", ["auto"]);
</script>

<template>
  <ItemLabel key-id="min-height" label="Min H" />
  <InputWithUnitSelector
    :model="inputWithUnitSelectorModel"
  ></InputWithUnitSelector>
</template>

<style scoped lang="less">
.item-title {
  width: 3rem;
}
</style>
