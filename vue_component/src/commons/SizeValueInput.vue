<script setup lang="ts">
import ValueInput from "@/commons/ValueInput.vue";

const defaultValue = "auto";

const options = [
  {
    label: "rem",
    value: "rem",
  },
  {
    label: "em",
    value: "em",
  },
  {
    label: "-",
    value: "auto",
  },
];

const nonValueOptions = {
  options: ["auto"],
  defaultValue: "rem",
};
</script>

<template>
  <ValueInput
    :options="options"
    :default-value="defaultValue"
    :non-value-options="nonValueOptions"
  ></ValueInput>
</template>

<style scoped lang="less"></style>
