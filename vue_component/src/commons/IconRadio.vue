<script setup lang="ts">
import { type TModel } from "./iconRadio";

const props = defineProps<{
  model: TModel;
}>();

const { value, options, userEdited } = props.model;

const hasIcon = options.value.some((option) => option.icon);

function onCheck(tagValue: string) {
  value.value = tagValue;
  userEdited();
}
</script>

<template>
  <div class="flex flex-row gap-0">
    <template v-if="hasIcon">
      <a-tooltip
        :content="option.label"
        v-for="option in options"
        :key="option.value"
        popup-container="[layout-tool-panel]"
      >
        <AButton
          size="small"
          type="outline"
          :status="value === option.value ? 'success' : undefined"
          @click="onCheck(option.value)"
        >
          <template #icon>
            <span :class="option.icon"></span>
          </template>
        </AButton>
      </a-tooltip>
    </template>

    <template v-else>
      <ATag
        v-for="option in options"
        :key="option.value"
        :checked="value === option.value"
        checkable
        bordered
        color="green"
        @check="onCheck(option.value)"
        >{{ option.label }}</ATag
      >
    </template>
  </div>
</template>

<style scoped></style>
