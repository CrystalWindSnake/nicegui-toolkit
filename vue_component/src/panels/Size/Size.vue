<script setup lang="ts">
import { createStyleRefModel } from "@/panels/utils";
import { computed } from "vue";
import { getGlobals } from "@/hooks/globals";
import { buildRefGetter } from "@/hooks/targetInfoGetter";

import Width from "./Width.vue";
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
          <!-- <q-item-section><Width></Width></q-item-section> -->
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
