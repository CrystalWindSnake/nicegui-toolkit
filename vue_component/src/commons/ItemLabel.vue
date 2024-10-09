<script setup lang="ts">
import * as globals from "@/hooks/globals";
import * as targetElementContext from "@/hooks/targetElementContext";
import * as consts from "@/consts";

import { computed } from "vue";
const props = defineProps<{ keyId: string; label?: string }>();

// emit
const emit = defineEmits<{
  (event: "reset"): void;
}>();

const label = computed(() => props.label ?? props.keyId);
const hasChanged = targetElementContext.useHasChanged(props.keyId);

function reset() {
  globals.sendResetCommnad(props.keyId);
  emit("reset");
}

const divStyle = computed(() => {
  if (hasChanged.value) {
    return "pointer-events: all; cursor: pointer;";
  }

  return "pointer-events: none; cursor: default;";
});
</script>

<template>
  <a-popconfirm
    :popup-container="consts.popupContainer.mainPanelTooltip"
    content="Do you want to reset this setting?"
    ok-text="Reset"
    cancel-text="No"
    @ok="reset"
    :style="{ 'z-index': consts.zindex.mainPanelTooltip }"
  >
    <div class="px-2" :style="divStyle">
      <span
        class="item-title text-capitalize"
        :class="{ 'bg-gray-300': hasChanged }"
        >{{ label }}</span
      >
    </div>
  </a-popconfirm>
</template>

<style scoped></style>
