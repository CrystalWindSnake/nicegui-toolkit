<script setup lang="ts">
import InputWithUnitSelector from "@/commons/InputWithUnitSelector.vue";
import ItemLabel from "@/commons/ItemLabel.vue";
import { useInputWithUnitSelector } from "@/commons/inputWithUnitSelector";
import { widthOptions } from "./data";

const options = widthOptions;

const inputWithUnitSelectorModel = useInputWithUnitSelector({
  propertyName: "width",
  defaultValues: { input: undefined, select: "auto" },
  options,
  configs: {
    nonValueOptions: ["auto"],
    optionValueIfnonValue: "px",
    defaultOptionValue: "auto",
    specialProperty: "width",
  },
});
</script>

<template>
  <ItemLabel key-id="width" label="Width" />
  <InputWithUnitSelector
    :model="inputWithUnitSelectorModel"
  ></InputWithUnitSelector>
</template>

<style scoped lang="less">
.item-title {
  width: 3rem;
}
</style>
