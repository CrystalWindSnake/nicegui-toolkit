<script setup lang="ts">
import SliderBlock from "./SliderBlock.vue";
import { t } from "@/hooks/language";

const config = {
  horizontalWidthPercent: 22,
  verticalHeightPercent: 22,
};

const marginConfigs = {
  left: {
    clipPath: `polygon(0 0, 100% ${config.verticalHeightPercent}%, 100% ${
      100 - config.verticalHeightPercent
    }%, 0% 100%)`,
  },

  up: {
    clipPath: `polygon(0 0, 100% 0, ${
      100 - config.horizontalWidthPercent
    }% 100%, ${config.horizontalWidthPercent}% 100%)`,
  },

  right: {
    clipPath: `polygon(0 ${
      config.verticalHeightPercent
    }%, 100% 0, 100% 100%,0 ${100 - config.verticalHeightPercent}%)`,
  },

  bottom: {
    clipPath: `polygon(${config.horizontalWidthPercent}% 0, ${
      100 - config.horizontalWidthPercent
    }% 0, 100% 100% , 0 100%)`,
  },
};

const paddingConfigs = {
  left: {
    clipPath: `polygon(0 ${config.verticalHeightPercent}%, 100% ${
      config.verticalHeightPercent * 2
    }%, 100% ${100 - config.verticalHeightPercent * 2}%, 0% ${
      100 - config.verticalHeightPercent
    }%)`,
  },

  up: {
    clipPath: `polygon(${config.horizontalWidthPercent}% 0, ${
      100 - config.horizontalWidthPercent
    }% 0, ${100 - config.horizontalWidthPercent * 2}% 100%, ${
      config.horizontalWidthPercent * 2
    }% 100%)`,
  },

  right: {
    clipPath: `polygon(0 ${config.verticalHeightPercent * 2}% , 100% ${
      config.verticalHeightPercent
    }% ,100% ${100 - config.verticalHeightPercent}%,0 ${
      100 - config.verticalHeightPercent * 2
    }%)`,
  },

  bottom: {
    clipPath: `polygon(${config.horizontalWidthPercent * 2}% 0 ,${
      100 - config.horizontalWidthPercent * 2
    }% 0 ,${100 - config.horizontalWidthPercent}% 100%,${
      config.horizontalWidthPercent
    }% 100%)`,
  },
};

const paddingFilter = (value: number) => value >= 0;
</script>

<template>
  <a-collapse-item :header="t('nt.style.spacing.header')" key="spacing">
    <div class="relative w-full" style="height: 8rem">
      <!-- labels -->
      <p
        class="m-0 p-0 absolute pointer-events-none"
        :style="{
          top: `${config.verticalHeightPercent}%`,
          left: `${config.horizontalWidthPercent}%`,
        }"
        style="font-size: 0.6rem; color: whitesmoke; z-index: 999"
      >
        padding
      </p>
      <p
        class="m-0 p-0 absolute"
        style="font-size: 0.6rem; color: whitesmoke; z-index: 999"
      >
        margin
      </p>

      <!-- margin -->
      <SliderBlock
        class="absolute h-full"
        direction="left"
        style-name="margin-left"
        :clip-path="marginConfigs.left.clipPath"
        :style="{ width: `${config.horizontalWidthPercent}%` }"
        style="background-color: #393939"
      ></SliderBlock>

      <SliderBlock
        class="absolute w-full"
        direction="up"
        style-name="margin-top"
        :clip-path="marginConfigs.up.clipPath"
        :style="{ height: `${config.verticalHeightPercent}%` }"
        style="background-color: #424242"
      ></SliderBlock>

      <SliderBlock
        class="absolute h-full right-0"
        direction="right"
        style-name="margin-right"
        :clip-path="marginConfigs.right.clipPath"
        :style="{ width: `${config.horizontalWidthPercent}%` }"
        style="background-color: #393939"
      ></SliderBlock>

      <SliderBlock
        class="absolute bottom-0 w-full"
        direction="bottom"
        style-name="margin-bottom"
        :clip-path="marginConfigs.bottom.clipPath"
        :style="{ height: `${config.verticalHeightPercent}%` }"
        style="background-color: #424242"
      ></SliderBlock>

      <!-- padding -->
      <SliderBlock
        class="absolute h-full bg-blue-500"
        direction="left"
        style-name="padding-left"
        :value-filter="paddingFilter"
        :clip-path="paddingConfigs.left.clipPath"
        :style="{
          left: `${config.horizontalWidthPercent}%`,
          width: `${config.horizontalWidthPercent}%`,
        }"
      ></SliderBlock>

      <SliderBlock
        class="absolute w-full bg-blue-500"
        direction="up"
        style-name="padding-top"
        :value-filter="paddingFilter"
        :clip-path="paddingConfigs.up.clipPath"
        :style="{
          top: `${config.verticalHeightPercent}%`,
          height: `${config.verticalHeightPercent}%`,
        }"
        style=""
      ></SliderBlock>

      <SliderBlock
        class="absolute h-full bg-blue-500"
        direction="right"
        style-name="padding-right"
        :value-filter="paddingFilter"
        :clip-path="paddingConfigs.right.clipPath"
        :style="{
          right: `${config.horizontalWidthPercent}%`,
          width: `${config.horizontalWidthPercent}%`,
        }"
      ></SliderBlock>

      <SliderBlock
        class="absolute w-full bg-blue-500"
        direction="bottom"
        style-name="padding-bottom"
        :value-filter="paddingFilter"
        :clip-path="paddingConfigs.bottom.clipPath"
        :style="{
          bottom: `${config.verticalHeightPercent}%`,
          height: `${config.verticalHeightPercent}%`,
        }"
      ></SliderBlock>
    </div>
  </a-collapse-item>
</template>

<style scoped lang="less"></style>
