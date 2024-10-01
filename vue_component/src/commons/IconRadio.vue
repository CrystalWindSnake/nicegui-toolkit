<script setup lang="ts">
import { type TModel } from "./iconRadio";

const props = defineProps<{
  model: TModel;
}>();

const { value, options, userEdited } = props.model;

function onCheck(tagValue: string) {
  value.value = tagValue;
  userEdited();
}
</script>

<template>
  <div class="flex flex-row gap-0">
    <ATag
      v-for="option in options"
      :key="option.value"
      :checked="value === option.value"
      checkable
      bordered
      color="green"
      @check="onCheck(option.value)"
      >{{ option.label }}</ATag
    >
  </div>
</template>

<style scoped></style>
