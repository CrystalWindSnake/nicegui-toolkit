<script setup lang="ts">
import InputWithUnitSelector from "@/commons/InputWithUnitSelector.vue";
import { useInputWithUnitSelector } from "@/commons/inputWithUnitSelector";

import { minWidthOptions } from "./data";
import ItemLabel from "@/commons/ItemLabel.vue";

const options = minWidthOptions;

const inputWithUnitSelectorModel = useInputWithUnitSelector({
  propertyName: "min-width",
  defaultValues: { input: "0", select: "px" },
  options,
  configs: {
    optionValueIfnonValue: "px",
    nonValueOptions: ["auto"],
    specialProperty: "width",
  },
});
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
