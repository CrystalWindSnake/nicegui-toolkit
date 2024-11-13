<script setup lang="ts">
import { nextTick, ref } from "vue";
import * as server from "@/shared/server";
import * as consts from "@/shared/consts";
import { modifyElementClassList } from "@/shared/utils";
import { getSelectedTarget } from "@/shared/targetElementContext";

import { watchDebounced } from "@vueuse/core";
import AInput from "@arco-design/web-vue/es/input";
import ADropdown from "@arco-design/web-vue/es/dropdown";

const props = withDefaults(defineProps<{ clearValueWhenConfirm?: boolean }>(), {
  clearValueWhenConfirm: true,
});

const visible = ref(false);

// set to true when show
let isConfirm = false;

const emits = defineEmits<{
  (event: "confirm", item?: string): void;
}>();

const promptOptions = ref([] as string[]);
const optionPanelVisible = ref(false);
const root = ref<HTMLDivElement>();
const dropdownRef = ref<HTMLDivElement>();
const inputRef = ref<InstanceType<typeof AInput>>();
const inputVal = defineModel("inputVal", { default: "" });

const serverQuery = server.createQuery(
  consts.serverQueryMethods.tailwindSearch,
  (result) => {
    promptOptions.value = result;
  }
);

watchDebounced(
  inputVal,
  (input) => {
    serverQuery.query({ query: input });
  },
  { debounce: 600 }
);

const methods = {
  show() {
    visible.value = true;
    nextTick(() => {
      inputRef.value?.focus();
    });
    isConfirm = false;
  },
  hide() {
    visible.value = false;
  },
};

document.addEventListener(
  "click",
  (event: MouseEvent) => {
    if (!visible.value) {
      return;
    }

    const target = event.target as HTMLElement;
    const isDropdown = dropdownRef.value?.contains(target);

    const isOutside = !root.value?.contains(target) && !isDropdown;

    if (!isOutside) {
      return;
    }

    handleEdit(inputVal.value);
  },
  {
    capture: true,
  }
);

const handleEdit = (value?: string) => {
  emits("confirm", value);
  isConfirm = true;

  if (props.clearValueWhenConfirm) {
    inputVal.value = "";
    tempClassStore = "";
  }

  methods.hide();
};

const handleEditWithEnter = () => {
  handleEdit(inputVal.value);
};

function handlePromptBoardSelect(item?: string | any) {
  if (item !== undefined) {
    inputVal.value = item;
  }

  optionPanelVisible.value = false;
  handleEdit(item === undefined ? inputVal.value : item);
}

function handleFocus() {
  optionPanelVisible.value = true;
}

let tempClassStore = inputVal.value;

function handleItemMouseEnter(item: string) {
  modifyElementClassList(getSelectedTarget().value!, {
    add: item,
  });

  tempClassStore = item;
}

function handleItemMouseLeave(item: string) {
  if (isConfirm) {
    return;
  }

  modifyElementClassList(getSelectedTarget().value!, {
    remove: item,
  });
}

defineExpose(methods);
</script>

<template>
  <div class="nt-tw-options-panel" ref="root">
    <a-dropdown
      @select="handlePromptBoardSelect"
      :popup-visible="optionPanelVisible"
      position="bottom"
      auto-fit-position
      trigger="contextMenu"
      :hide-on-select="false"
      :popup-container="consts.popupContainer.trackBallPanel"
      :style="{
        zindex: consts.zindex.panel,
      }"
    >
      <a-input
        ref="inputRef"
        v-show="visible"
        class="w-[10ch] absolute top-0 left-0 h-full"
        size="mini"
        v-model.trim="inputVal"
        @keyup.enter="handleEditWithEnter"
        @focus="handleFocus"
      />

      <template #content>
        <div ref="dropdownRef">
          <a-doption
            v-for="item in promptOptions"
            :key="item"
            @mouseenter="handleItemMouseEnter(item)"
            @mouseleave="handleItemMouseLeave(item)"
            >{{ item }}</a-doption
          >
        </div>
      </template>
    </a-dropdown>
  </div>
</template>

<style scoped></style>
