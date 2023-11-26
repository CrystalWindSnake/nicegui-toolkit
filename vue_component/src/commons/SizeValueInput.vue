<script setup lang="ts">
import ValueInput from "@/commons/ValueInput.vue";
import { useValueInput } from "@/commons/valueInput";
import { computed, watch } from "vue";

const props = defineProps<{
  defaultInputValue: string;
  defaultOptionValue: string;
  nonValueOption: { label: string; value: string };
}>();

const options = [
  {
    value: "px",
  },
  {
    value: "rem",
  },
  {
    value: "em",
  },
  props.nonValueOption,
];

const defaultValueOptionsIndex = options.findIndex(
  (v) => v.value === props.defaultOptionValue
);

const nonValueOptions = {
  options: [props.nonValueOption.value],
  defaultValueOptionsIndex: options.length - 1,
};

const { inputValue, selectValue, model } = useValueInput(
  options,
  nonValueOptions,
  props.defaultInputValue,
  defaultValueOptionsIndex === -1 ? 0 : defaultValueOptionsIndex
);

const result = computed(() => {
  if (selectValue.value === props.nonValueOption.value) {
    return props.nonValueOption.value;
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
