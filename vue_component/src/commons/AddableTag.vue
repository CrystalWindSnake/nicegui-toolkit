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
  <div class="w-fit relative">
    <a-input
      v-show="showInput"
      ref="inputRef"
      class="w-[120%] absolute top-0 left-0 h-full"
      size="mini"
      v-model.trim="inputVal"
      @keyup.enter="handleEditWithEnter"
      @blur="handleEdit"
    />
    <a-tag
      class="cursor-pointer"
      :style="{
        visibility: showInput ? 'hidden' : 'visible',
      }"
      @click="handleEditMode"
    >
      <template #icon>
        <icon-plus />
      </template>
    </a-tag>
  </div>
</template>

<style scoped></style>
