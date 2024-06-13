<script setup lang="ts">
import SizeValueInput from "@/commons/SizeValueInput.vue";
const nonValueOption = {
  label: "-",
  value: "auto",
};
</script>

<template>
  <q-item dense>
    <q-item-section class="item-title" style="flex-grow: 0; flex-basis: auto"
      >Min W</q-item-section
    >
    <q-item-section
      ><SizeValueInput
        default-option-value="px"
        default-input-value="0"
        :non-value-option="nonValueOption"
      ></SizeValueInput
    ></q-item-section>
  </q-item>
</template>

<style scoped lang="less">
.item-title {
  width: 3rem;
}
</style>
