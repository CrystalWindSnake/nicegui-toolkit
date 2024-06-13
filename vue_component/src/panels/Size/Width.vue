<script setup lang="ts">
import SizeValueInput from "@/commons/SizeValueInput.vue";
</script>

<template>
  <q-item dense>
    <q-item-section style="flex-grow: 0; flex-basis: content"
      >Width</q-item-section
    >
    <q-item-section><SizeValueInput></SizeValueInput></q-item-section>
  </q-item>
</template>

<style scoped lang="less">
.item-title {
  width: 5rem;
}
</style>
