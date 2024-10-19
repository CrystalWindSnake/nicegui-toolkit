<script setup lang="ts">
import { nextTick, ref } from "vue";

const props = defineProps<{}>();

// emits:
const emits = defineEmits<{
  (event: "add", args: { value: string }): void;
}>();

const inputRef = ref(null);
const inputVal = ref("");
const showInput = ref(false);

const handleEditMode = () => {
  showInput.value = true;

  nextTick(() => {
    if (inputRef.value) {
      (inputRef.value as any).focus();
    }
  });
};

const handleEdit = () => {
  showInput.value = false;
  if (!inputVal.value) {
    return;
  }
  emits("add", { value: inputVal.value });
  inputVal.value = "";
};

const handleEditWithEnter = () => {
  (inputRef.value as any).blur();
};
</script>

<template>
  <div class="w-fit relative flex items-center">
    <a-input
      v-show="showInput"
      ref="inputRef"
      class="w-[10ch] absolute top-0 left-0 h-full"
      size="mini"
      v-model.trim="inputVal"
      @keyup.enter="handleEditWithEnter"
      @blur="handleEdit"
    />
    <div
      class="cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full p-1"
      :style="{
        visibility: showInput ? 'hidden' : 'visible',
      }"
      @click="handleEditMode"
    >
      <div class="i-mdi-plus"></div>
    </div>
  </div>
</template>

<style scoped></style>
