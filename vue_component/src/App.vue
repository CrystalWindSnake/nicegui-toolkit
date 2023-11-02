<script setup lang="ts">
import { onMounted, ref } from "vue";
import TrackBall from "./components/TrackBall.vue";
import { useMutationObserver } from "@vueuse/core";

const ball = ref(null);

function onclick() {
  const item = document.querySelector(
    '[layout-tool-ele-id="10"]'
  )! as HTMLElement;

  selectTarter.value = item;

  const curValue = item.style.alignSelf;
  item.style.alignSelf = curValue == "center" ? "start" : "center";
}

function onclickSelectInput() {
  const item = document.querySelector(
    '[layout-tool-ele-id="2"]'
  )! as HTMLElement;

  selectTarter.value = item;

  const curValue = item.style.alignSelf;
  item.style.alignSelf = curValue == "center" ? "start" : "center";
}

const selectTarter = ref(null as HTMLElement | null);

// useMutationObserver(
//   selectTarter,
//   (ms) => {
//     console.log("MutationObserver:", ms);
//   },
//   { attributes: true }
// );

onMounted(() => {
  const item = document.querySelector(
    '[layout-tool-ele-id="10"]'
  )! as HTMLElement;

  selectTarter.value = item;
});
</script>

<template>
  <div>
    <div
      style="display: flex; width: 100vw; flex-direction: column"
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
        style="width: 10rem"
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
      <button @click="onclickSelectInput">select input</button>
    </TrackBall>
  </div>
</template>

<style scoped></style>
