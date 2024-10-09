<script setup lang="ts">
import { nextTick, ref, watch } from "vue";

type TKey = string | number;

const props = defineProps<{
  tagKey: TKey;
  value: string;
}>();

// emits:
const emits = defineEmits<{
  (
    event: "valueChange",
    args: { key: TKey; oldValue: string; newValue: string }
  ): void;
  (event: "remove", args: { key: TKey }): void;
}>();

const inputRef = ref(null);
const inputVal = ref(props.value);
let inputValPrev = props.value;
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
  emits("valueChange", {
    key: props.tagKey,
    oldValue: inputValPrev,
    newValue: inputVal.value,
  });

  inputValPrev = inputVal.value;
};

const handleEditWithEnter = () => {
  (inputRef.value as any).blur();
};

const handleRemove = () => {
  emits("remove", { key: props.tagKey });
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
      color="arcoblue"
      closable
      @click="handleEditMode"
      @close="handleRemove"
      >{{ inputVal }}</a-tag
    >
  </div>
</template>

<style scoped></style>
