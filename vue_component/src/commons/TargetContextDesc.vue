<script setup lang="ts">
import { type TModel } from "./targetContextDesc";
const props = defineProps<{ model: TModel }>();
</script>

<template>
  <ARow>
    <ATag>props:</ATag>

    <ATypographyParagraph
      code
      copyable
      :code-tooltip-props="{ popupContainer: '.x-panel-nicegui' }"
      >{{ props.model.code.props }}</ATypographyParagraph
    >
  </ARow>

  <ARow>
    <ATag>styles:</ATag>

    <ATypographyParagraph
      code
      copyable
      :code-tooltip-props="{ popupContainer: '.x-panel-nicegui' }"
      >{{ props.model.code.styles }}</ATypographyParagraph
    >
  </ARow>
</template>

<style scoped></style>
