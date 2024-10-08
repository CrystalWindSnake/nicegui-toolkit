<script setup lang="ts">
import { type TModel } from "./targetContextDesc";
import Block from "./Block.vue";
const props = defineProps<{ model: TModel }>();

const propsCode = props.model.code.props;
const stylesCode = props.model.code.styles;
</script>

<template>
  <div>
    <div class="text-lg mb-2 text-gray-400">styles</div>

    <Block>
      <ATypographyParagraph
        code
        copyable
        :code-tooltip-props="{ popupContainer: '.x-panel-nicegui' }"
        >{{ stylesCode }}</ATypographyParagraph
      >
    </Block>
  </div>
</template>

<style scoped></style>
