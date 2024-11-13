<script setup lang="ts">
import {
  getTargetContext,
  getSelectedTarget,
} from "@/shared/targetElementContext";

import EditableTag from "./EditableTag.vue";
import AddableTag from "./AddableTag.vue";
import * as emits from "@/shared/emits";
import { modifyElementClassList } from "@/shared/utils";
import { computed } from "vue";

const classes = computed(() => getTargetContext().classes);

function handleEdit(index: number, oldValue: string, newValue: string) {
  const newClasses = [...classes.value];
  newClasses[index] = newValue;
  emits.updateClasses({ classes: newClasses });

  modifyElementClassList(getSelectedTarget().value!, {
    change: { oldClass: oldValue, newClass: newValue },
  });
}

function handleRemove(index: number) {
  const newClasses = [...classes.value];
  newClasses.splice(index, 1);
  emits.updateClasses({ classes: newClasses });

  modifyElementClassList(getSelectedTarget().value!, {
    remove: classes.value[index],
  });
}

function handleAdd(value: string) {
  const newClasses = [...classes.value, value];
  emits.updateClasses({ classes: newClasses });

  modifyElementClassList(getSelectedTarget().value!, {
    add: value,
  });
}
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <EditableTag
      v-for="(classVal, index) in classes"
      :key="classVal + index"
      :tagKey="index"
      :value="classVal"
      @value-change="(e) => handleEdit(e.key as number, e.oldValue, e.newValue)"
      @remove="(e) => handleRemove(e.key as number)"
    />

    <AddableTag class="nt-classes-add-tag" @add="(e) => handleAdd(e.value)">
    </AddableTag>
  </div>
</template>

<style scoped></style>
