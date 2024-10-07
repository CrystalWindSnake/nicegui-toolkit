<script setup lang="ts">
import ValueInput from "@/commons/ValueInput.vue";
import { useValueInput } from "@/commons/valueInput";
import { computed, watch } from "vue";

const props = defineProps<{
  options: {
    value: string;
    label?: string;
  }[];
  initInputValue: string;
  initSelectValue: string;
  nonValueOptions: string[];
  defaultValueOption: string;
}>();

const { inputValue, selectValue, model } = useValueInput(
  props.options,
  { input: props.initInputValue, select: props.initSelectValue },
  props.nonValueOptions,
  props.defaultValueOption
);

const result = computed(() => {
  const nonValue = props.nonValueOptions.find((v) => v === selectValue.value);

  if (nonValue) {
    return props.options.find((v) => v.value === nonValue)!.value;
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
