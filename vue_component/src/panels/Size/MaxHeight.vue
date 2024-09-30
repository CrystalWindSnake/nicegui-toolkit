<script setup lang="ts">
import InputWithUnitSelector from "@/commons/InputWithUnitSelector.vue";
import { useInputWithUnitSelector } from "@/commons/inputWithUnitSelector";

import { maxHeightOptions } from "./data";
import { valueToStyleModel } from "./utils";
import ItemLabel from "@/commons/ItemLabel.vue";

const options = maxHeightOptions;

const inputWithUnitSelectorModel = useInputWithUnitSelector({
  options,
  configs: {
    optionValueIfnonValue: "px",
    nonValueOptions: ["none"],
    defaultOptionValue: "none",
  },
});

valueToStyleModel(inputWithUnitSelectorModel, "max-height", ["none"]);
</script>

<template>
  <div class="w-full flex flex-row">
    <ItemLabel key-id="max-height" label="Max H" />
    <InputWithUnitSelector
      :model="inputWithUnitSelectorModel"
    ></InputWithUnitSelector>
  </div>
</template>

<style scoped lang="less">
.item-title {
  width: 3rem;
}
</style>
