<script setup lang="ts">
import InputWithUnitSelector from "@/commons/InputWithUnitSelector.vue";
import { useInputWithUnitSelector } from "@/commons/inputWithUnitSelector";

import { heightOptions } from "./data";
import { valueToStyleModel } from "./utils";
import ItemLabel from "@/commons/ItemLabel.vue";

const options = heightOptions;

const inputWithUnitSelectorModel = useInputWithUnitSelector({
  options,
  configs: {
    nonValueOptions: ["auto"],
    optionValueIfnonValue: "px",
    defaultOptionValue: "auto",
  },
});

valueToStyleModel(inputWithUnitSelectorModel, "height", ["auto"]);
</script>

<template>
  <div class="w-full flex flex-row">
    <ItemLabel key-id="height" label="Height" />
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
