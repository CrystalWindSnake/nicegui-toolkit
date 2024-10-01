<script setup lang="ts">
import InputWithUnitSelector from "@/commons/InputWithUnitSelector.vue";
import { useInputWithUnitSelector } from "@/commons/inputWithUnitSelector";
import { heightOptions } from "./data";
import ItemLabel from "@/commons/ItemLabel.vue";
import * as globals from "@/hooks/globals";
import { sizeOnChanged } from "./utils";

const options = heightOptions;

const propertyModel = globals.createReactiveProperty("height");

const inputWithUnitSelectorModel = useInputWithUnitSelector({
  options,
  configs: {
    nonValueOptions: ["auto"],
    optionValueIfnonValue: "px",
    defaultOptionValue: "auto",
    specialProperty: "height",
  },
  onChanged: sizeOnChanged(propertyModel),
});
</script>

<template>
  <ItemLabel key-id="height" label="Height" />
  <InputWithUnitSelector
    :model="inputWithUnitSelectorModel"
  ></InputWithUnitSelector>
</template>

<style scoped lang="less">
.item-title {
  width: 3rem;
}
</style>
