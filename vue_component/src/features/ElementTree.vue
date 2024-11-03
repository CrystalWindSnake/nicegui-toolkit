<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { type TModel } from "@/shared/elementTree";
import {
  setSelectedTarget,
  getSelectedTarget,
} from "@/shared/targetElementContext";
import * as utils from "@/shared/utils";
import { t } from "@/shared/language";
import * as consts from "@/shared/consts";
import * as elementTree from "@/shared/elementTree";
import { getConfigs } from "@/shared/configs";

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

  elementTree.setHoverElement(key);
}

function handleMouseLeave(e: MouseEvent) {
  elementTree.resetHoverElement();
}

watch(getSelectedTarget(), (target) => {
  if (!target) {
    (el.value as any).selectAll(false);
  }

  if (el.value && target) {
    const key = utils.getElementId(target, getConfigs());
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
        :popup-container="consts.popupContainer.mainPanelTooltip"
        :style="{ 'z-index': consts.zindex.mainPanelTooltip }"
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
