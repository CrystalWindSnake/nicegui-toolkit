<script setup lang="ts">
import { ref, watch } from "vue";
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
</script>

<template>
  <ATree
    ref="el"
    :data="model.treeData"
    show-line
    block-node
    @select="handleSelectNode"
    @mouseenter.capture.stop="handleMouseEnter"
    @mouseleave.capture.stop="handleMouseLeave"
  />
</template>

<style scoped>
:deep(.arco-tree-node-selected .arco-tree-node-title) {
  border: 1px solid hotpink;
}
</style>
