<script setup lang="ts">
import { setExecutingFlag } from "@/hooks/globals";
import { ref } from "vue";
import { type TModel } from "./valueInput";

// props
const props = defineProps<{
  model: TModel;
}>();

const model = props.model;

const inputRef = ref<HTMLElement | null>(null);
const selectRef = ref<HTMLElement | null>(null);

const {
  inputValue,
  selectValue,
  selectDisplay,
  inputPlaceholder,
  itemOptions,
  updateInput,
} = model;

// input events
function onInputUpdate(e: Event) {
  if (e.currentTarget !== e.target) {
    return;
  }
  updateInput((e.currentTarget as HTMLInputElement).value);

  inputRef.value?.blur();
}
</script>

<template>
  <div class="cus-input">
    <q-input
      ref="inputRef"
      class="q-input"
      :model-value="inputValue"
      :placeholder="inputPlaceholder"
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
          :options="itemOptions"
          color="teal"
          emit-value
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
