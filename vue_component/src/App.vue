<script setup lang="ts">
import { onMounted, ref } from "vue";
import TrackBall from "./components/TrackBall.vue";
import { useMutationObserver } from "@vueuse/core";
import { TSelectedChangeEventArgs } from "./components/types";

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

function onHoverChange(e: { id: number | null }) {
  console.log(e);
}

function onSelectChange(e: TSelectedChangeEventArgs) {
  console.log(e);
}
</script>

<template>
  <div>
    <div
      style="display: flex; width: 100vw; flex-direction: column"
      class="layout-tool-mark layout-tool-id-1 layout-tool-type-Element"
    >
      <div
        class="layout-tool-mark layout-tool-id-10 layout-tool-type-Label"
        style="width: 10rem"
      >
        xxxxx
      </div>
    </div>

    <input
      type="text"
      class="layout-tool-mark layout-tool-id-2 layout-tool-type-input"
    />

    <TrackBall
      ref="ball"
      :selector-config="{
        selectors: '.layout-tool-mark',
        idAttr: 'layout-tool-id',
        elementTypeAttr: 'layout-tool-type',
      }"
      @hover-change="onHoverChange"
      @selected-change="onSelectChange"
    >
      <button type="button" @click="onclick">test method</button>
      <button @click="onclickSelectInput">select input</button>
    </TrackBall>
  </div>
</template>

<style scoped></style>
