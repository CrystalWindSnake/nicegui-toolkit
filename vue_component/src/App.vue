<script setup lang="ts">
import DataEditor from "@/panels/Spacing/DataEditor.vue";
import { ref } from "vue";

const text = ref("");

const oninput = (event) => {
  console.log("oninput run");

  text.value = event.target.value;
};

function onclickbtn() {
  text.value = "on btn";
}
</script>

<template>
  <div class="box">
    <!-- <DataEditor></DataEditor> -->

    <input :value="text" @change="oninput" />
    <span>{{ text }}</span>

    <button @click="onclickbtn">change</button>
  </div>
</template>

<style scoped lang="less">
.box {
  border: 1px solid #000;
  width: 20rem;
}
</style>
