<script setup lang="ts">
import { type TModel } from "./toggleButtons";

const props = defineProps<{
  model: TModel;
}>();

const { value, options } = props.model;

const toggleOpts = options.map((v) => ({ value: v.value, slot: v.value }));
</script>

<template>
  <q-btn-toggle
    v-model="value"
    padding="8px"
    size="sm"
    toggle-color="primary"
    :options="toggleOpts"
  >
    <template v-for="opt in options" v-slot:[opt.value]>
      <q-icon v-if="opt.icon" :name="opt.icon">
        <q-tooltip style="z-index: 99999999">
          {{ opt.tooltip }}
        </q-tooltip>
      </q-icon>

      <span v-else>{{ opt.label }}</span>
    </template>
  </q-btn-toggle>
</template>

<style scoped></style>
