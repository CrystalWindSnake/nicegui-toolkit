<script setup lang="ts">
import * as emits from "@/shared/emits";
import * as targetElementContext from "@/shared/targetElementContext";
import * as consts from "@/shared/consts";
import { t } from "@/shared/language";

import { computed } from "vue";
const props = defineProps<{ keyId: string; label?: string }>();

// emit
const emit = defineEmits<{
  (event: "reset"): void;
}>();

const label = computed(() => props.label ?? props.keyId);
const hasChanged = targetElementContext.useHasChanged(props.keyId);

function reset() {
  emits.resetCommand(props.keyId);
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
    :content="t('nt.property-reset-confirm')"
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
