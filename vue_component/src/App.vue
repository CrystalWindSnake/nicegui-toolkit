<script setup lang="ts">
import { ref } from "vue";
import TrackBall from "./components/TrackBall.vue";

const ball = ref(null);

function onclick() {
  console.log(ball.value.queryHasBoxParent);

  const target = ball.value.queryHasBoxParent(10);
  console.log(target);
}
</script>

<template>
  <div>
    <div
      style="display: flex"
      class="ex4ng-ng_cp"
      layout-tool-mark="true"
      layout-tool-ele-id="1"
      layout-tool-ele-type="Element"
    >
      <div
        class="ex4ng-ng_cp"
        layout-tool-mark="true"
        layout-tool-ele-id="10"
        layout-tool-ele-type="Label"
      >
        xxxxx
      </div>
    </div>

    <input
      type="text"
      class="ex4ng-ng_cp"
      layout-tool-mark="true"
      layout-tool-ele-id="2"
      layout-tool-ele-type="input"
    />

    <TrackBall
      ref="ball"
      :selector-config="{
        selectors: '[layout-tool-mark]',
        idAttr: 'layout-tool-ele-id',
        elementTypeAttr: 'layout-tool-ele-type',
      }"
    >
      <button type="button" @click="onclick">test method</button>
    </TrackBall>
  </div>
</template>

<style scoped></style>
