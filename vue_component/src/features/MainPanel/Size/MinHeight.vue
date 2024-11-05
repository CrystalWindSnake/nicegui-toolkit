<script setup lang="ts">
import InputWithUnitSelector from "@/commons/InputWithUnitSelector.vue";
import { useInputWithUnitSelector } from "@/commons/inputWithUnitSelector";

import { minHeightOptions } from "./data";
import ItemLabel from "@/commons/ItemLabel.vue";

const options = minHeightOptions;

const inputWithUnitSelectorModel = useInputWithUnitSelector({
  propertyName: "min-height",
  defaultValues: { input: "0", select: "px" },
  options,
  configs: {
    optionValueIfnonValue: "px",
    nonValueOptions: ["auto"],
    specialProperty: "height",
  },
});
</script>

<template>
  <ItemLabel
    key-id="min-height"
    label="Min H"
    class="nt-size-min-height-label"
  />
  <InputWithUnitSelector
    :model="inputWithUnitSelectorModel"
    class="nt-size-min-height-input"
  ></InputWithUnitSelector>
</template>

<style scoped lang="less">
.item-title {
  width: 3rem;
}
</style>
