<script setup lang="ts">
import InputWithUnitSelector from "@/commons/InputWithUnitSelector.vue";
import ItemLabel from "@/commons/ItemLabel.vue";
import { useInputWithUnitSelector } from "@/commons/inputWithUnitSelector";
import { widthOptions } from "./data";
import * as globals from "@/hooks/globals";
import { sizeOnChanged } from "./utils";

const options = widthOptions;

const propertyModel = globals.createReactiveProperty("width");

const inputWithUnitSelectorModel = useInputWithUnitSelector({
  options,
  configs: {
    nonValueOptions: ["auto"],
    optionValueIfnonValue: "px",
    defaultOptionValue: "auto",
    specialProperty: "width",
  },
  onChanged: sizeOnChanged(propertyModel),
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
