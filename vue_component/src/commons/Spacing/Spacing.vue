<script setup lang="ts">
import { ref } from "vue";
import SliderBlock from './SliderBlock.vue';

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

</script>

<template>
  <div class="box" style="
        position: relative;
        width: 100%;
        height: 100%;
      ">

    <!-- labels -->
    <p class="label" :style="{ top: `${config.verticalHeightPercent}%`, left: `${config.horizontalWidthPercent}%` }"
      style="margin: 0;padding: 0;">padding</p>

    <p class="label" style="margin: 0;padding: 0;top: 0;left: 0;">
      margin</p>


    <!-- margin -->
    <SliderBlock class="box margin-left" direction="left" v-model="marginLeft" :clip-path="marginConfigs.left.clipPath"
      :style="{ width: `${config.horizontalWidthPercent}%` }" style="
          position: absolute;
          height: 100%;
          background-color: #393939;
        "></SliderBlock>

    <SliderBlock class="box margin-up" direction="up" v-model="marginUp" :clip-path="marginConfigs.up.clipPath"
      :style="{ height: `${config.verticalHeightPercent}%` }" style="
          position: absolute;
          width: 100%;
          background-color: #424242;
        "></SliderBlock>

    <SliderBlock class="box margin-right" direction="right" v-model="marginRight"
      :clip-path="marginConfigs.right.clipPath" :style="{ width: `${config.horizontalWidthPercent}%` }" style="
          position: absolute;
          right: 0;
          height: 100%;
          background-color: #393939;
        "></SliderBlock>

    <SliderBlock class="box margin-bottom" direction="bottom" v-model="marginBottom"
      :clip-path="marginConfigs.bottom.clipPath" :style="{ height: `${config.verticalHeightPercent}%` }" style="
          position: absolute;
          bottom: 0;
          width: 100%;
          background-color: #424242;
        "></SliderBlock>

    <!-- padding -->
    <SliderBlock class="box padding-left" direction="left" v-model="paddingLeft" :clip-path="paddingConfigs.left.clipPath"
      :style="{ left: `${config.horizontalWidthPercent}%`, width: `${config.horizontalWidthPercent}%` }" style="
          position: absolute;
          height: 100%;
          background-color: #c84848;
        "></SliderBlock>

    <SliderBlock class="box padding-up" direction="up" v-model="paddingUp" :clip-path="paddingConfigs.up.clipPath"
      :style="{ top: `${config.verticalHeightPercent}%`, height: `${config.verticalHeightPercent}%` }" style="
          position: absolute;
          width: 100%;
          background-color: #c84848;
        "></SliderBlock>

    <SliderBlock class="box padding-right" direction="right" v-model="paddingRight"
      :clip-path="paddingConfigs.right.clipPath"
      :style="{ right: `${config.horizontalWidthPercent}%`, width: `${config.horizontalWidthPercent}%` }" style="
          position: absolute;
          height: 100%;
          background-color: #c84848;
        "></SliderBlock>

    <SliderBlock class="box padding-bottom" direction="bottom" v-model="paddingBottom"
      :clip-path="paddingConfigs.bottom.clipPath"
      :style="{ bottom: `${config.verticalHeightPercent}%`, height: `${config.verticalHeightPercent}%` }" style="
          position: absolute;
          width: 100%;
          background-color: #c84848;
        "></SliderBlock>
  </div>
</template>

<style scoped lang="less">
.label {
  font-size: 0.6rem;
  user-select: none;
  color: whitesmoke;
  z-index: 999;
  position: absolute;
  pointer-events: none;
}
</style>
