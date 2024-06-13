<script setup lang="ts">
import { setExecutingFlag } from "@/hooks/globals";
import { computed, ref, watch } from "vue";
import { type TValueInputReturn } from "./valueInput";

// props
const props = defineProps<{
  model: TValueInputReturn["model"];
}>();

const model = props.model;

const inputRef = ref<HTMLElement | null>(null);
const selectRef = ref<HTMLElement | null>(null);

let lastInvaildInputValue: string | null = null;

const initSelectValueItem = model.options.find(
  (item) => item.value === model.initValue.select
)!;

const inputValue = ref(model.initValue.input);
const selectValue = ref(initSelectValueItem);

const selectDisplay = computed(
  () => selectValue.value.label ?? selectValue.value.value
);

watch(inputValue, (value) => {
  if (model.nonValueOptions) {
    // input : 10 ,select: auto -> select:rem
    if (
      value.length > 0 &&
      model.nonValueOptions.includes(selectValue.value.value)
    ) {
      selectValue.value = model.options.find(
        (item) => item.value === model.defaultValueOption
      )!;
    }
  }

  // current: 10rem -> input value clear -> select value change to auto
  if (
    !value &&
    model.nonValueOptions &&
    !model.nonValueOptions.includes(selectValue.value.value)
  ) {
    selectValue.value = initSelectValueItem;
  }

  if (!!value) {
    lastInvaildInputValue = value;
  }

  model.updateValue(value, selectValue.value.value);
});

watch(selectValue, (value) => {
  // input: 10,select:auto -> input : ''
  if (model.nonValueOptions && model.nonValueOptions.includes(value.value)) {
    inputValue.value = "";

    // input:'',select: auto to rem -> input: '10'
  } else if (!inputValue.value && lastInvaildInputValue !== null) {
    inputValue.value = lastInvaildInputValue;
  }

  model.updateValue(inputValue.value, value.value);
});

// input events
function onInputUpdate(e: Event) {
  if (e.currentTarget !== e.target) {
    return;
  }
  inputValue.value = (e.currentTarget as HTMLInputElement).value;

  inputRef.value?.blur();
}
</script>

<template>
  <div class="cus-input">
    <q-input
      ref="inputRef"
      class="q-input"
      :model-value="inputValue"
      :placeholder="selectValue.value"
      square
      outlined
      dense
      mask="#"
      reverse-fill-mask
      @blur="onInputUpdate"
      @keyup.enter="onInputUpdate"
    >
      <template v-slot:append>
        <q-select
          ref="selectRef"
          :display-value="selectDisplay"
          hide-dropdown-icon
          class="q-select"
          dense
          options-cover
          v-model="selectValue"
          :options="model.options"
          color="teal"
          options-selected-class="text-deep-orange"
          @popup-show="setExecutingFlag(true)"
          @popup-hide="setExecutingFlag(false)"
          popup-content-style="z-index:9999999"
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section avatar>
                <q-icon name="check" v-if="selectValue === scope.opt.value" />
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ scope.opt.value }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </template>
    </q-input>
  </div>
</template>

<style scoped lang="less">
.cus-input :deep(.q-field__control) {
  padding-right: 0;
}

.cus-input {
  .q-input {
    width: 6em;
  }

  .q-select {
    width: 2.5em;

    :deep(.q-field__native) {
      justify-content: center;
    }
  }
}
</style>
