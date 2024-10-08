<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { type TModel } from "./elementTree";
import {
  setSelectedTarget,
  getSelectedTarget,
} from "@/hooks/targetElementContext";
import {
  getSelectorConfig,
  setHoverByCode,
  resetHoverByCode,
} from "@/hooks/globals";
import * as hookUtils from "@/hooks/utils";
import { t } from "@/hooks/language";

const props = defineProps<{
  model: TModel;
}>();

const el = ref<HTMLElement | null>(null);

function handleSelectNode(selectedKeys: (string | number)[]) {
  const targetId = selectedKeys[0] as number;
  setSelectedTarget(targetId);
}

function handleMouseEnter(e: MouseEvent) {
  const target = e.target as HTMLElement;

  if (!target) {
    return;
  }

  if (!target.classList.contains("arco-tree-node-title")) {
    return;
  }

  const id = target.parentElement?.getAttribute("data-key");
  if (!id) {
    throw new Error("Cannot find key for selected element");
  }

  const key = parseInt(id);
  if (key < 0) {
    return;
  }

  setHoverByCode(key);
}

function handleMouseLeave(e: MouseEvent) {
  resetHoverByCode();
}

watch(getSelectedTarget(), (target) => {
  if (!target) {
    (el.value as any).selectAll(false);
  }

  if (el.value && target) {
    const key = hookUtils.getElementId(target, getSelectorConfig());
    if (key == null) {
      throw new Error("Cannot find key for selected element");
    }

    (el.value as any).selectNode(key, true);
  }
});

const expandTree = ref(true);

const expandIcon = computed(() => {
  return expandTree.value
    ? "i-mdi-arrow-collapse-vertical"
    : "i-mdi-arrow-expand-vertical";
});

const expandtooltipContent = computed(() => {
  return expandTree.value ? t("tree.collapse_all") : t("tree.expand_all");
});

function handleExpandTree() {
  expandTree.value = !expandTree.value;

  (el.value as any).expandAll(expandTree.value);

  if (!expandTree.value) {
    (el.value as any).expandNode(-1, !expandTree.value);
  }
}
</script>

<template>
  <AScrollbar style="height: 500px; overflow: auto">
    <div class="relative">
      <ATree
        ref="el"
        :data="model.treeData"
        show-line
        block-node
        @select="handleSelectNode"
        @mouseenter.capture.stop="handleMouseEnter"
        @mouseleave.capture.stop="handleMouseLeave"
      />

      <ATooltip
        :content="expandtooltipContent"
        popup-container="body"
        style="z-index: 9999999"
      >
        <div
          class="text-xl absolute top-0 right-5 cursor-pointer"
          :class="expandIcon"
          @click="handleExpandTree"
        ></div>
      </ATooltip>
    </div>
  </AScrollbar>
</template>

<style scoped>
:deep(.arco-tree-node-selected .arco-tree-node-title) {
  border: 1px solid hotpink;
}
</style>
