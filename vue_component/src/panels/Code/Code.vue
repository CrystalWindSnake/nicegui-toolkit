<script setup lang="ts">
import { useTargetContextDesc } from "./targetContextDesc";
import TargetContextDesc from "./TargetContextDesc.vue";
import ClassesList from "./ClassesList.vue";
// const props = defineProps<{ component: TComponent }>()

const targetContextDescModel = useTargetContextDesc();
</script>

<template>
  <div class="flex flex-col gap-2">
    <ClassesList></ClassesList>
    <TargetContextDesc :model="targetContextDescModel"></TargetContextDesc>
  </div>
</template>

<style scoped></style>
