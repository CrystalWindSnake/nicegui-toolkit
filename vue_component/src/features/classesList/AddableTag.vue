<script setup lang="ts">
import { ref } from "vue";
import PromptBoard from "./PromptBoard.vue";

const promptBoard = ref<InstanceType<typeof PromptBoard>>();
const showPromptBoard = ref(false);

// emits:
const emits = defineEmits<{
  (event: "add", args: { value: string }): void;
}>();

// methods:
const methods = {
  showPromptBoard() {
    promptBoard.value?.show();
    showPromptBoard.value = true;
  },
  hidePromptBoard() {
    promptBoard.value?.hide();
    showPromptBoard.value = false;
  },
};

function handlePromptBoardSelect(item?: string) {
  methods.hidePromptBoard();
  if (item) {
    emits("add", { value: item });
  }
}
</script>

<template>
  <div class="w-fit relative flex items-center">
    <PromptBoard ref="promptBoard" @confirm="handlePromptBoardSelect">
    </PromptBoard>

    <div
      class="cursor-pointer bg-gray-200 hover:bg-gray-300 rounded-full p-1"
      :style="{
        visibility: showPromptBoard ? 'hidden' : 'visible',
      }"
      @click="methods.showPromptBoard"
    >
      <div class="i-mdi-plus"></div>
    </div>
  </div>
</template>

<style scoped></style>
