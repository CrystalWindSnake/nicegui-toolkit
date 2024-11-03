<script setup lang="ts">
import { useTargetContextDesc } from "./targetContextDesc";
import TargetContextDesc from "./TargetContextDesc.vue";

import ClassesListEditorArea from "@/features/classesList/EditorArea.vue";

// import ClassesList from "./ClassesList.vue";
// const props = defineProps<{ component: TComponent }>()

const targetContextDescModel = useTargetContextDesc();
</script>

<template>
  <div class="flex flex-col gap-2">
    <div>
      <div class="text-lg mb-2 text-gray-400">classes</div>

      <Block>
        <ClassesListEditorArea></ClassesListEditorArea>
      </Block>
    </div>

    <TargetContextDesc :model="targetContextDescModel"></TargetContextDesc>
  </div>
</template>

<style scoped></style>
