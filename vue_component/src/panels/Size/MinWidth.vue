<script setup lang="ts">
import InputWithUnitSelector from "@/commons/InputWithUnitSelector.vue";
import { useInputWithUnitSelector } from "@/commons/inputWithUnitSelector";

import { minWidthOptions } from "./data";
import ItemLabel from "@/commons/ItemLabel.vue";
import * as globals from "@/hooks/globals";
import { sizeOnChanged } from "./utils";

const options = minWidthOptions;
const propertyModel = globals.createReactiveProperty("min-width");

const inputWithUnitSelectorModel = useInputWithUnitSelector({
  options,
  defaultValues: {
    input: "0",
    select: "px",
  },
  configs: {
    optionValueIfnonValue: "px",
    nonValueOptions: ["auto"],
    specialProperty: "width",
  },
  onChanged: sizeOnChanged(propertyModel),
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
