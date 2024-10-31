<script setup lang="ts">
import { ref } from "vue";
import PromptBoard from "./PromptBoard.vue";

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

const promptBoard = ref<InstanceType<typeof PromptBoard>>();
const showPromptBoard = ref(false);
const inputVal = ref(props.value);

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

let inputValPrev = props.value;

const handleRemove = () => {
  emits("remove", { key: props.tagKey });
};

function handlePromptBoardSelect(item: string) {
  methods.hidePromptBoard();
  emits("valueChange", {
    key: props.tagKey,
    oldValue: inputValPrev,
    newValue: item,
  });

  inputValPrev = item;
}
</script>

<template>
  <div class="w-fit relative">
    <PromptBoard
      ref="promptBoard"
      v-model:input-val="inputVal"
      :clear-value-when-confirm="false"
      @confirm="handlePromptBoardSelect"
    >
    </PromptBoard>
    <a-tag
      class="cursor-pointer"
      :style="{
        visibility: showPromptBoard ? 'hidden' : 'visible',
      }"
      color="arcoblue"
      closable
      @click="methods.showPromptBoard"
      @close="handleRemove"
      >{{ inputVal }}</a-tag
    >
  </div>
</template>

<style scoped></style>
