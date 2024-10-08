<script setup lang="ts">
import Width from "./Width.vue";
import Height from "./Height.vue";
import MaxWidth from "./MaxWidth.vue";
import MinWidth from "./MinWidth.vue";

import MaxHeight from "./MaxHeight.vue";
import MinHeight from "./MinHeight.vue";
import { t } from "@/hooks/language";
</script>

<template>
  <a-collapse-item :header="t('nt.style.size.header')" key="size">
    <div class="grid grid-cols-[auto_1fr_auto_1fr] items-center px-2 gap-y-2">
      <Width></Width>
      <Height></Height>

      <MinWidth></MinWidth>
      <MinHeight></MinHeight>

      <MaxWidth></MaxWidth>
      <MaxHeight></MaxHeight>
    </div>
  </a-collapse-item>
</template>

<style scoped lang="less">
.item-title {
  width: 5rem;
}
</style>
