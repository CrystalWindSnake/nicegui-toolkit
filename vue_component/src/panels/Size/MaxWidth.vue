<script setup lang="ts">
import InputWithUnitSelector from "@/commons/InputWithUnitSelector.vue";
import { useInputWithUnitSelector } from "@/commons/inputWithUnitSelector";

import { maxWidthOptions } from "./data";
import ItemLabel from "@/commons/ItemLabel.vue";
import * as globals from "@/hooks/globals";
import { sizeOnChanged } from "./utils";

const options = maxWidthOptions;
const propertyModel = globals.createReactiveProperty("max-width");

const inputWithUnitSelectorModel = useInputWithUnitSelector({
  options,
  configs: {
    optionValueIfnonValue: "px",
    nonValueOptions: ["none"],
    defaultOptionValue: "none",
    specialProperty: "width",
  },
  onChanged: sizeOnChanged(propertyModel),
});
</script>

<template>
  <ItemLabel key-id="max-width" label="Max W" />
  <InputWithUnitSelector
    :model="inputWithUnitSelectorModel"
  ></InputWithUnitSelector>
</template>

<style scoped lang="less">
.item-title {
  width: 3rem;
}
</style>
