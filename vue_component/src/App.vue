<script setup lang="ts">
import DataEditor from "@/panels/Spacing/DataEditor.vue";
import App from "@/temps/App.vue";
import { ref } from "vue";
</script>

<template>
  <div class="box">
    <!-- <DataEditor></DataEditor> -->

    <App></App>
  </div>
</template>

<style scoped lang="less">
.box {
  border: 1px solid #000;
  width: 20rem;
}
</style>
