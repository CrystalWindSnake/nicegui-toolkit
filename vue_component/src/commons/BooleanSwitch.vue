<script setup lang="ts">
import { type TModel } from "./booleanSwitch";
const props = defineProps<{ model: TModel }>();
const { value, options, userEdited } = props.model;
</script>

<template>
  <ASwitch
    class="justify-self-start"
    v-model="value"
    :checked-value="options.checkedValue"
    :unchecked-value="options.uncheckedValue"
    @change="userEdited"
  ></ASwitch>
</template>

<style scoped></style>
