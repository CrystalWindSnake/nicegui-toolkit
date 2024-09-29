<script setup lang="ts">
import * as globals from "@/hooks/globals";
const props = defineProps<{ keyId: string; label?: string }>();

const label = props.label ?? props.keyId;

const hasChanged = globals.useHasChanged(props.keyId);
</script>

<template>
  <div>
    <span
      class="item-title text-capitalize"
      :class="{ 'bg-gray-100': hasChanged }"
      >{{ label }}</span
    >
  </div>
</template>

<style scoped></style>
