<script setup lang="ts">
import InputWithUnitSelector from "@/commons/InputWithUnitSelector.vue";
import { useInputWithUnitSelector } from "@/commons/inputWithUnitSelector";
import { heightOptions } from "./data";
import ItemLabel from "@/commons/ItemLabel.vue";

const options = heightOptions;

const inputWithUnitSelectorModel = useInputWithUnitSelector({
  propertyName: "height",
  defaultValues: { input: undefined, select: "auto" },
  options,
  configs: {
    nonValueOptions: ["auto"],
    optionValueIfnonValue: "px",
    defaultOptionValue: "auto",
    specialProperty: "height",
  },
});
</script>

<template>
  <ItemLabel key-id="height" label="Height" class="nt-size-height-label" />
  <InputWithUnitSelector
    :model="inputWithUnitSelectorModel"
    class="nt-size-height-input"
  ></InputWithUnitSelector>
</template>

<style scoped lang="less">
.item-title {
  width: 3rem;
}
</style>
