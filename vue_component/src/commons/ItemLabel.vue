<script setup lang="ts">
import * as globals from "@/hooks/globals";
import { computed, ref } from "vue";
const props = defineProps<{ keyId: string; label?: string }>();

const label = computed(() => props.label ?? props.keyId);

const hasChanged = globals.useHasChanged(props.keyId);

function reset() {
  globals.sendResetCommnad(props.keyId);
}

const divStyle = computed(() => {
  if (hasChanged.value) {
    return "pointer-events:all;cursor: pointer;";
  }

  return "pointer-events:none;cursor: none;";
});
</script>

<template>
  <a-popover popup-container="[layout-tool-panel]" trigger="click">
    <div class="w-[10ch] truncate" :style="divStyle">
      <span
        class="item-title text-capitalize"
        :class="{ 'bg-gray-300': hasChanged }"
        >{{ label }}</span
      >
    </div>

    <template #content>
      <a-button type="outline" @click="reset">reset</a-button>
    </template>
  </a-popover>
</template>

<style scoped></style>
