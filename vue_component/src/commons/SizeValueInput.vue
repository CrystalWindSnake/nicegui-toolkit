<script setup lang="ts">
import ValueInput from "@/commons/ValueInput.vue";
import { useValueInput } from "@/commons/valueInput";
import { computed, watch } from "vue";

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
  defaultValueOptionsIndex: 0,
};

const { inputValue, selectValue, model } = useValueInput(
  options,
  nonValueOptions,
  "",
  options.length - 1
);

const result = computed(() => {
  if (selectValue.value === "auto") {
    return "auto";
  }

  return `${inputValue.value}${selectValue.value}`;
});

watch(result, (result) => {
  console.log(result);
});
</script>

<template>
  <ValueInput :model="model"></ValueInput>
</template>

<style scoped lang="less"></style>
