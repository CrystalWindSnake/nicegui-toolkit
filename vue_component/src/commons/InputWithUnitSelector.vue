<script setup lang="ts">
import { ref } from "vue";
import { type TModel } from "./inputWithUnitSelector";

// props
const props = defineProps<{
  model: TModel;
}>();

const {
  inputValue,
  selectValue,
  inputPlaceholder,
  updateInput,
  updateSelect,
  itemOptions,
} = props.model;
const inputRef = ref<HTMLElement | null>(null);

// input events
function onInputUpdate(e: Event) {
  if (e.currentTarget !== e.target) {
    return;
  }
  updateInput((e.currentTarget as HTMLInputElement).value);

  inputRef.value?.blur();
}

// select events
function updateSelectValue(value: any) {
  updateSelect(value);
}
</script>

<template>
  <div class="grid gap-0 grid-cols-[auto_auto] ring-offset-1 ring-1">
    <AInput
      ref="inputRef"
      size="mini"
      :model-value="inputValue"
      :placeholder="inputPlaceholder"
      @blur="onInputUpdate"
      @press-enter="onInputUpdate"
    ></AInput>
    <ASelect
      popup-container="[layout-tool-panel]"
      size="mini"
      :options="itemOptions"
      :model-value="selectValue"
      @change="updateSelectValue"
      class="x-unit-select p-0 min-w-[4ch]"
      :trigger-props="{ contentClass: 'w-[8ch]' }"
    >
      <template #arrow-icon></template>
    </ASelect>
  </div>
</template>

<style scoped></style>
