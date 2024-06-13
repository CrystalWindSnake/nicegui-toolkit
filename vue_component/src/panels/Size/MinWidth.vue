<script setup lang="ts">
import SizeValueInput from "@/commons/SizeValueInput.vue";
import { minWidthOptions } from "./data";

const options = minWidthOptions;

const nonValueOption = ["auto"];
</script>

<template>
  <q-item dense>
    <q-item-section class="item-title" style="flex-grow: 0; flex-basis: auto"
      >Min W</q-item-section
    >
    <q-item-section
      ><SizeValueInput
        :options="options"
        init-input-value="0"
        init-select-value="px"
        :non-value-options="nonValueOption"
        default-value-option="px"
      ></SizeValueInput
    ></q-item-section>
  </q-item>
</template>

<style scoped lang="less">
.item-title {
  width: 3rem;
}
</style>
