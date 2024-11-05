<script setup lang="ts">
import InputWithUnitSelector from "@/commons/InputWithUnitSelector.vue";
import { useInputWithUnitSelector } from "@/commons/inputWithUnitSelector";

import { maxHeightOptions } from "./data";
import ItemLabel from "@/commons/ItemLabel.vue";

const options = maxHeightOptions;

const inputWithUnitSelectorModel = useInputWithUnitSelector({
  propertyName: "max-height",
  defaultValues: { input: undefined, select: "none" },
  options,
  configs: {
    optionValueIfnonValue: "px",
    nonValueOptions: ["none"],
    defaultOptionValue: "none",
    specialProperty: "height",
  },
});
</script>

<template>
  <ItemLabel
    key-id="max-height"
    label="Max H"
    class="nt-size-max-height-label"
  />
  <InputWithUnitSelector
    :model="inputWithUnitSelectorModel"
    class="nt-size-max-height-input"
  ></InputWithUnitSelector>
</template>

<style scoped lang="less">
.item-title {
  width: 3rem;
}
</style>
