<script setup lang="ts">
import { type TModel } from "./targetContextDesc";
const props = defineProps<{ model: TModel }>();

const propsCode = props.model.code.props;
const stylesCode = props.model.code.styles;
</script>

<template>
  <ARow>
    <ATag>props:</ATag>

    <ATypographyParagraph
      code
      copyable
      :code-tooltip-props="{ popupContainer: '.x-panel-nicegui' }"
      >{{ propsCode }}</ATypographyParagraph
    >
  </ARow>

  <ARow>
    <ATag>styles:</ATag>

    <ATypographyParagraph
      code
      copyable
      :code-tooltip-props="{ popupContainer: '.x-panel-nicegui' }"
      >{{ stylesCode }}</ATypographyParagraph
    >
  </ARow>
</template>

<style scoped></style>
