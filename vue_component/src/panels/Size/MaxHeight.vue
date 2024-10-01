<script setup lang="ts">
import InputWithUnitSelector from "@/commons/InputWithUnitSelector.vue";
import { useInputWithUnitSelector } from "@/commons/inputWithUnitSelector";

import { maxHeightOptions } from "./data";
import ItemLabel from "@/commons/ItemLabel.vue";
import * as globals from "@/hooks/globals";
import { sizeOnChanged } from "./utils";

const options = maxHeightOptions;
const propertyModel = globals.createReactiveProperty("max-height");

const inputWithUnitSelectorModel = useInputWithUnitSelector({
  options,
  configs: {
    optionValueIfnonValue: "px",
    nonValueOptions: ["none"],
    defaultOptionValue: "none",
    specialProperty: "height",
  },
  onChanged: sizeOnChanged(propertyModel),
});
</script>

<template>
  <ItemLabel key-id="max-height" label="Max H" />
  <InputWithUnitSelector
    :model="inputWithUnitSelectorModel"
  ></InputWithUnitSelector>
</template>

<style scoped lang="less">
.item-title {
  width: 3rem;
}
</style>
