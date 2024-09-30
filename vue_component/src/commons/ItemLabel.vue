<script setup lang="ts">
import * as globals from "@/hooks/globals";
import { computed } from "vue";
const props = defineProps<{ keyId: string; label?: string }>();

const label = computed(() => props.label ?? props.keyId);
const hasChanged = globals.useHasChanged(props.keyId);

function reset() {
  globals.sendResetCommnad(props.keyId);
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
    popup-container="[layout-tool-panel]"
    content="Do you want to reset this setting?"
    ok-text="Reset"
    cancel-text="No"
    @ok="reset"
  >
    <div class="w-[10ch] truncate" :style="divStyle">
      <span
        class="item-title text-capitalize"
        :class="{ 'bg-gray-300': hasChanged }"
        >{{ label }}</span
      >
    </div>
  </a-popconfirm>
</template>

<style scoped></style>
