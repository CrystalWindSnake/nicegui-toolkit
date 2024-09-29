<script setup lang="ts">
import { computed } from "vue";
import { type TModel } from "./toggleButtons";

const props = defineProps<{
  model: TModel;
}>();

const { value, options } = props.model;

const toggleOpts = computed(() =>
  options.value.map((v) => ({ value: v.value, slot: v.value }))
);
</script>

<template>
  <a-radio-group type="button" v-model="value">
    <a-radio v-for="opt in toggleOpts" :key="opt.value" :value="opt.value"
      >{{ opt.slot }}
    </a-radio>
  </a-radio-group>

  <!-- <q-btn-toggle
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
  </q-btn-toggle> -->
</template>

<style scoped></style>
