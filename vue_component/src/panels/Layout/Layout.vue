<script setup lang="ts">
import { computed, Ref } from "vue";
import { buildRefGetter } from "@/hooks/targetInfoGetter";
import { selectedTarget } from "@/hooks/targetElementContext";
import IconRadio from "@/commons/IconRadio.vue";
import { useIconRadio } from "@/commons/iconRadio";

import ItemLabel from "@/commons/ItemLabel.vue";

const getter = buildRefGetter(selectedTarget);

const displayIconRadioModel = useIconRadio({
  propertyName: "display",
  options: [{ value: "block" }, { value: "flex" }],
});

const flexInfo = getter.getFlexBoxInfo(
  displayIconRadioModel.value as Ref<string>
);

// direction
const directionIconRadioModel = useIconRadio({
  propertyName: "flex-direction",
  options: [
    { value: "row", label: "Horizontal", icon: "i-mdi-arrow-right-thin" },
    { value: "column", label: "Vertical", icon: "i-mdi-arrow-down-thin" },
  ],
});

// align config
const alignTitle = computed(() =>
  directionIconRadioModel.value.value === "row"
    ? "vertical align"
    : "horizontal align"
);

const alignOpts = computed(() => {
  if (directionIconRadioModel.value.value === "row") {
    return [
      { value: "start", icon: "i-mdi-align-vertical-top", tooltip: "top" },

      {
        value: "center",
        icon: "i-mdi-align-vertical-center",
        tooltip: "center",
      },

      { value: "end", icon: "i-mdi-align-vertical-bottom", tooltip: "bottom" },
    ];
  }

  return [
    { value: "start", icon: "i-mdi-align-horizontal-left", tooltip: "left" },

    {
      value: "center",
      icon: "i-mdi-align-horizontal-center",
      tooltip: "center",
    },

    { value: "end", icon: "i-mdi-align-horizontal-right", tooltip: "right" },
  ];
});

const alignIconRadioModel = useIconRadio({
  propertyName: "align-items",
  options: alignOpts,
});

// justify config

const justifyTitle = computed(() =>
  directionIconRadioModel.value.value === "row"
    ? "vertical justify"
    : "horizontal justify"
);

const justifyOpts = computed(() => {
  if (directionIconRadioModel.value.value === "row") {
    return [
      { value: "start", icon: "i-mdi-align-horizontal-left", tooltip: "left" },

      {
        value: "center",
        icon: "i-mdi-align-horizontal-center",
        tooltip: "center",
      },

      { value: "end", icon: "i-mdi-align-horizontal-right", tooltip: "right" },
    ];
  }

  return [
    { value: "start", icon: "i-mdi-align-vertical-top", tooltip: "top" },

    { value: "center", icon: "i-mdi-align-vertical-center", tooltip: "center" },

    { value: "end", icon: "i-mdi-align-vertical-bottom", tooltip: "bottom" },
  ];
});

const justifyIconRadioModel = useIconRadio({
  propertyName: "justify-content",
  options: justifyOpts,
});
</script>

<template>
  <a-collapse-item header="Layout(布局)" key="layout">
    <div
      class="grid grid-cols-[minmax(18ch,auto)_auto] gap-y-2 items-center justify-start"
    >
      <!-- display -->

      <ItemLabel keyId="display" label="Display"></ItemLabel>
      <IconRadio :model="displayIconRadioModel"></IconRadio>

      <!-- flexbox setting -->
      <template v-if="flexInfo.isFlex">
        <!-- Direction -->

        <ItemLabel keyId="flex-direction" label="direction"></ItemLabel>
        <IconRadio :model="directionIconRadioModel"></IconRadio>

        <!-- align -->

        <ItemLabel keyId="align-items" :label="alignTitle"></ItemLabel>

        <IconRadio :model="alignIconRadioModel"></IconRadio>

        <!-- justify -->

        <ItemLabel keyId="justify-content" :label="justifyTitle"></ItemLabel>

        <IconRadio :model="justifyIconRadioModel"></IconRadio>
      </template>
    </div>
  </a-collapse-item>
</template>

<style scoped lang="less">
.item-title {
  width: 5rem;
}
</style>
