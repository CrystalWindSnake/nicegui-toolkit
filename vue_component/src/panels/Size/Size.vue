<script setup lang="ts">
import Width from "./Width.vue";
import Height from "./Height.vue";
import MaxWidth from "./MaxWidth.vue";
import MinWidth from "./MinWidth.vue";

import MaxHeight from "./MaxHeight.vue";
import MinHeight from "./MinHeight.vue";
</script>

<template>
  <q-expansion-item
    expand-separator
    label="Size(大小)"
    header-class="text-red-1 bg-green-8"
    expand-icon-class="text-red-1"
  >
    <div class="col no-wrap">
      <q-list bordered>
        <q-item class="!p-0" dense>
          <q-item-section><Width></Width></q-item-section>
          <q-item-section class="!ml-0"><Height></Height></q-item-section>
        </q-item>

        <q-item class="!p-0" dense>
          <q-item-section><MinWidth></MinWidth></q-item-section>
          <q-item-section class="!ml-0"><MinHeight></MinHeight></q-item-section>
        </q-item>

        <q-item class="!p-0" dense>
          <q-item-section><MaxWidth></MaxWidth></q-item-section>
          <q-item-section class="!ml-0"><MaxHeight></MaxHeight></q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-expansion-item>
</template>

<style scoped lang="less">
.item-title {
  width: 5rem;
}
</style>
