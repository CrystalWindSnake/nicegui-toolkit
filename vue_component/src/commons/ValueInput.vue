<script setup lang="ts">
import * as globals from "@/hooks/globals";
import { ref } from "vue";
import { type TModel } from "./valueInput";

// props
const props = defineProps<{
  model: TModel;
}>();

const model = props.model;

const inputRef = ref<HTMLElement | null>(null);

const {
  inputValue,
  selectValue,
  selectDisplay,
  inputPlaceholder,
  itemOptions,
  updateInput,
  updateSelect,
} = model;

// input events
function onInputUpdate(e: Event) {
  if (e.currentTarget !== e.target) {
    return;
  }
  updateInput((e.currentTarget as HTMLInputElement).value);

  inputRef.value?.blur();
}

// select events
function updateSelectValue(value: any) {
  updateSelect(value);
}
</script>

<template>
  <div class="cus-input">
    <a-input
      ref="inputRef"
      class="w-[8em]"
      :model-value="inputValue"
      :placeholder="inputPlaceholder"
      @blur="onInputUpdate"
      @press-enter="onInputUpdate"
    >
    </a-input>

    <!-- .
 
@change="updateSelectValue"
-->

    <a-select
      class="w-[6em]"
      :model-value="selectValue"
      placeholder="Please select ..."
      popup-container="[layout-tool-panel]"
      style="z-index: 999999"
      @change="updateSelectValue"
      @popup-visible-change="(v) => globals.setExecutingFlag(v)"
    >
      <a-option
        v-for="item in itemOptions"
        :key="item.value"
        :value="item.value"
        :label="item.value"
      ></a-option>
    </a-select>
  </div>

  <!-- <div v-if="false" class="cus-input">
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
          :model-value="selectValue"
          :options="itemOptions"
          color="teal"
          emit-value
          options-selected-class="text-deep-orange"
          @popup-show="globals.setExecutingFlag(true)"
          @popup-hide="globals.setExecutingFlag(false)"
          @update:model-value="updateSelectValue"
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
  </div> -->
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
