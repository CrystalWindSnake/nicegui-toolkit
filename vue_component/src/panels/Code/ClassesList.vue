<script setup lang="ts">
import {
  getTargetContext,
  getSelectedTarget,
} from "@/hooks/targetElementContext";

import EditableTag from "@/commons/EditableTag.vue";
import AddableTag from "@/commons/AddableTag.vue";
import Block from "./Block.vue";
import { updateClasses } from "@/hooks/globals";
import { modifyElementClassList } from "@/hooks/utils";
import { computed } from "vue";

const classes = computed(() => getTargetContext().classes);

function handleEdit(index: number, oldValue: string, newValue: string) {
  const newClasses = [...classes.value];
  newClasses[index] = newValue;
  updateClasses({ classes: newClasses });

  modifyElementClassList(getSelectedTarget().value!, {
    change: { oldClass: oldValue, newClass: newValue },
  });
}

function handleRemove(index: number) {
  const newClasses = [...classes.value];
  newClasses.splice(index, 1);
  updateClasses({ classes: newClasses });

  modifyElementClassList(getSelectedTarget().value!, {
    remove: classes.value[index],
  });
}

function handleAdd(value: string) {
  const newClasses = [...classes.value, value];
  updateClasses({ classes: newClasses });

  modifyElementClassList(getSelectedTarget().value!, {
    add: value,
  });
}
</script>

<template>
  <div>
    <div class="text-lg mb-2 text-gray-400">classes</div>

    <Block>
      <div class="flex flex-wrap gap-4">
        <EditableTag
          v-for="(classVal, index) in classes"
          :tagKey="index"
          :value="classVal"
          @value-change="(e) => handleEdit(e.key as number, e.oldValue, e.newValue)"
          @remove="(e) => handleRemove(e.key as number)"
        />

        <AddableTag @add="(e) => handleAdd(e.value)"> </AddableTag>
      </div>
    </Block>
  </div>
</template>

<style scoped></style>
