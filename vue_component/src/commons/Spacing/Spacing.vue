<script setup lang="ts">
import { ref, watch } from "vue";
import SliderBlock from './SliderBlock.vue';
import { sendCommand } from "@/hooks/events";

const config = {
  horizontalWidthPercent: 22,
  verticalHeightPercent: 22
}

const marginConfigs = {
  left: {
    clipPath: `polygon(0 0, 100% ${config.verticalHeightPercent}%, 100% ${100 - config.verticalHeightPercent}%, 0% 100%)`
  },

  up: {
    clipPath: `polygon(0 0, 100% 0, ${100 - config.horizontalWidthPercent}% 100%, ${config.horizontalWidthPercent}% 100%)`
  },

  right: {
    clipPath: `polygon(0 ${config.verticalHeightPercent}%, 100% 0, 100% 100%,0 ${100 - config.verticalHeightPercent}%)`
  },

  bottom: {
    clipPath: `polygon(${config.horizontalWidthPercent}% 0, ${100 - config.horizontalWidthPercent}% 0, 100% 100% , 0 100%)`
  },
}


const paddingConfigs = {
  left: {
    clipPath: `polygon(0 ${config.verticalHeightPercent}%, 100% ${config.verticalHeightPercent * 2}%, 100% ${100 - config.verticalHeightPercent * 2}%, 0% ${100 - config.verticalHeightPercent}%)`
  },

  up: {
    clipPath: `polygon(${config.horizontalWidthPercent}% 0, ${100 - config.horizontalWidthPercent}% 0, ${100 - config.horizontalWidthPercent * 2}% 100%, ${config.horizontalWidthPercent * 2}% 100%)`
  },

  right: {
    clipPath: `polygon(0 ${config.verticalHeightPercent * 2}% , 100% ${config.verticalHeightPercent}% ,100% ${100 - config.verticalHeightPercent}%,0 ${100 - config.verticalHeightPercent * 2}%)`
  },

  bottom: {
    clipPath: `polygon(${config.horizontalWidthPercent * 2}% 0 ,${100 - config.horizontalWidthPercent * 2}% 0 ,${100 - config.horizontalWidthPercent}% 100%,${config.horizontalWidthPercent}% 100%)`
  },
}

const marginLeft = ref(0);
const marginRight = ref(0);

const marginUp = ref(0);
const marginBottom = ref(0);

const paddingLeft = ref(0);
const paddingRight = ref(0);

const paddingUp = ref(0);
const paddingBottom = ref(0);

watch(marginLeft, v => {
  sendCommand('style', 'set', { 'margin-left': v })
})

</script>

<template>
  <div class="relative w-full h-full">

    <!-- labels -->
    <p class="m-0 p-0 absolute pointer-events-none"
      :style="{ top: `${config.verticalHeightPercent}%`, left: `${config.horizontalWidthPercent}%` }"
      style="font-size: 0.6rem; color: whitesmoke;  z-index: 999;">
      padding</p>
    <p class="m-0 p-0 absolute" style="font-size: 0.6rem;color: whitesmoke;z-index: 999;">
      margin</p>

    <!-- margin -->
    <SliderBlock class="absolute h-full" direction="left" style-name="margin-left"
      :clip-path="marginConfigs.left.clipPath" :style="{ width: `${config.horizontalWidthPercent}%` }" style="
          background-color: #393939;
        "></SliderBlock>

    <SliderBlock class="absolute w-full" direction="up" style-name="margin-top" v-model="marginUp"
      :clip-path="marginConfigs.up.clipPath" :style="{ height: `${config.verticalHeightPercent}%` }" style="
          background-color: #424242;
        "></SliderBlock>

    <SliderBlock class=" absolute h-full right-0" direction="right" style-name="margin-right" v-model="marginRight"
      :clip-path="marginConfigs.right.clipPath" :style="{ width: `${config.horizontalWidthPercent}%` }" style="
          background-color: #393939;
        "></SliderBlock>

    <SliderBlock class="absolute bottom-0 w-full" direction="bottom" style-name="margin-bottom" v-model="marginBottom"
      :clip-path="marginConfigs.bottom.clipPath" :style="{ height: `${config.verticalHeightPercent}%` }" style="
          background-color: #424242;
        "></SliderBlock>

    <!-- padding -->
    <SliderBlock class="absolute h-full" direction="left" style-name="padding-left" v-model="paddingLeft"
      :clip-path="paddingConfigs.left.clipPath"
      :style="{ left: `${config.horizontalWidthPercent}%`, width: `${config.horizontalWidthPercent}%` }" style="
          background-color: #c84848;
        "></SliderBlock>

    <SliderBlock class="absolute w-full" direction="up" style-name="padding-top" v-model="paddingUp"
      :clip-path="paddingConfigs.up.clipPath"
      :style="{ top: `${config.verticalHeightPercent}%`, height: `${config.verticalHeightPercent}%` }" style="
          background-color: #c84848;
        "></SliderBlock>

    <SliderBlock class=" absolute h-full" direction="right" style-name="padding-right" v-model="paddingRight"
      :clip-path="paddingConfigs.right.clipPath"
      :style="{ right: `${config.horizontalWidthPercent}%`, width: `${config.horizontalWidthPercent}%` }" style="
          background-color: #c84848;
        "></SliderBlock>

    <SliderBlock class=" absolute w-full" direction="bottom" style-name="padding-bottom" v-model="paddingBottom"
      :clip-path="paddingConfigs.bottom.clipPath"
      :style="{ bottom: `${config.verticalHeightPercent}%`, height: `${config.verticalHeightPercent}%` }" style="
          background-color: #c84848;
        "></SliderBlock>
  </div>
</template>

<style scoped lang="less"></style>
