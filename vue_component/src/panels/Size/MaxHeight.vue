<script setup lang="ts">
import SizeValueInput from "@/commons/SizeValueInput.vue";
import { maxHeightOptions } from "./data";

const options = maxHeightOptions;

const nonValueOption = ["none"];
</script>

<template>
  <q-item dense>
    <q-item-section class="item-title" style="flex-grow: 0; flex-basis: auto"
      >Max H</q-item-section
    >
    <q-item-section
      ><SizeValueInput
        :options="options"
        init-input-value=""
        init-select-value="none"
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
