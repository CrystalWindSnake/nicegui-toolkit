<script setup lang="ts">
import { getExecutingFlag, setExecutingFlag } from "@/hooks/globals";
import { ref } from "vue";

type TOptions = { label: string; value: string }[];
type TNonValueOptions = {
  options: string[];
  defaultValue: string;
};

const props = defineProps<{
  defaultValue: string;
  options: TOptions;
  nonValueOptions?: TNonValueOptions;
}>();

const inputRef = ref<HTMLElement | null>(null);
const inputModel = ref<string | null>(null);

const selectRef = ref<HTMLElement | null>(null);
const selectModel = ref(props.defaultValue);

// input events
function onInputUpdate(e: Event) {
  inputModel.value = (e.target as HTMLInputElement).value;
  inputRef.value?.blur();

  if (props.nonValueOptions) {
    if (
      inputModel.value.length > 0 &&
      props.nonValueOptions.options.includes(selectModel.value)
    ) {
      selectModel.value = props.nonValueOptions.defaultValue;
    }
  }
}
</script>

<template>
  <div class="cus-input">
    <q-input
      ref="inputRef"
      class="q-input"
      :model-value="inputModel"
      :placeholder="props.defaultValue"
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
          hide-dropdown-icon
          class="q-select"
          dense
          v-model="selectModel"
          :options="props.options"
          color="teal"
          options-selected-class="text-deep-orange"
          @popup-show="setExecutingFlag(true)"
          @popup-hide="setExecutingFlag(false)"
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section avatar>
                <q-icon
                  name="check"
                  v-if="selectModel.value === scope.opt.value"
                />
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
