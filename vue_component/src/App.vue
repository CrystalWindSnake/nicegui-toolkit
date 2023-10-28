<script setup lang="ts">
import TrackBall from "./components/TrackBall.vue";

function onclick() {
  alert("click btn");
}
</script>

<template>
  <div>
    <div
      class="ex4ng-ng_cp"
      layout-tool-mark="true"
      layout-tool-ele-id="1"
      layout-tool-ele-type="AgGrid"
    >
      xxx
    </div>

    <button type="button" @click="onclick">test</button>

    <input
      type="text"
      class="ex4ng-ng_cp"
      layout-tool-mark="true"
      layout-tool-ele-id="2"
      layout-tool-ele-type="input"
    />

    <TrackBall
      :selector-config="{
        selectors: '[layout-tool-mark]',
        idAttr: 'layout-tool-ele-id',
        elementTypeAttr: 'layout-tool-ele-type',
      }"
    >
      <button>test1</button>
    </TrackBall>
  </div>
</template>

<style scoped></style>
