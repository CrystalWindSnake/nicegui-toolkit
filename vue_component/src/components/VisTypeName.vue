<script setup lang="ts">
import { useTypeNameTag } from "./trackBallUtils";
import * as globals from "@/hooks/globals";
import { zindex } from "@/consts";

const { typeNameTagStyles, typeName } = useTypeNameTag(
  globals.getSelectorConfig(),
  globals.hoverElement
);
</script>

<template>
  <div
    class="vis-type-name fixed top-0 left-0 pointer-events-none shadow rounded p-1 bg-green-400"
    :style="[typeNameTagStyles, { zIndex: zindex.visTypeName }]"
  >
    {{ typeName }}
  </div>
</template>

<style scoped></style>
