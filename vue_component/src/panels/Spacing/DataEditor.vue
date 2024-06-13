<script setup lang="ts">
import ValueInput from "@/commons/ValueInput.vue";
import { useValueInput } from "@/commons/valueInput";
import { useUnitNumberDataEditor } from "@/hooks/dataModels";

import { ref, watch } from "vue";
// const props = defineProps<{ component: TComponent }>()
const unitNumber = useUnitNumberDataEditor("0px");

const options = [
  {
    value: "px",
  },
  {
    value: "rem",
  },
  {
    value: "em",
  },
  {
    value: "ch",
  },
  {
    value: "vw",
  },
  {
    value: "vh",
  },
  {
    value: "%",
  },
];

const valueInputModel = useValueInput(options, {
  input: unitNumber.number.value.toString(),
  select: "px",
});

watch(valueInputModel.inputValue, (value) => {
  if (value) {
    unitNumber.number.value = Number.parseInt(value);
  } else {
    unitNumber.number.value = 0;
  }
});

watch(valueInputModel.selectValue, (value) => {
  unitNumber.unit.value = value;
});

const { number: sliderValue } = unitNumber;
</script>

<template>
  <div>
    <div class="row gap-2 items-center no-wrap">
      <q-icon name="home"></q-icon>
      {{ unitNumber.result }}
      <q-slider :min="0" :max="200" v-model="sliderValue"></q-slider>
      <ValueInput :model="valueInputModel.model"></ValueInput>
    </div>
  </div>
</template>

<style scoped></style>
