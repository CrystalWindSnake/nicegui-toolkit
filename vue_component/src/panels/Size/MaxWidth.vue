<script setup lang="ts">
import SizeValueInput from "@/commons/SizeValueInput.vue";
import { maxWidthOptions } from "./data";

const options = maxWidthOptions;

const nonValueOption = ["none"];
</script>

<template>
  <q-item dense>
    <q-item-section class="item-title" style="flex-grow: 0; flex-basis: auto"
      >Max W</q-item-section
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
