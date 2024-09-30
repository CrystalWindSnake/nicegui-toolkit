<script setup lang="ts">
import { createStyleRefModel } from "@/panels/utils";
import { computed, Ref } from "vue";
import * as globals from "@/hooks/globals";
import { buildRefGetter } from "@/hooks/targetInfoGetter";

import IconRadio from "@/commons/IconRadio.vue";
import { useIconRadio } from "@/commons/iconRadio";

import ItemLabel from "@/commons/ItemLabel.vue";
import ListItem from "@/commons/ListItem.vue";

const displayModel = createStyleRefModel("display");

const selectTarget = globals.SelectedTarget;

const getter = buildRefGetter(selectTarget);

const displayIconRadioModel = useIconRadio(
  [
    { value: "block", icon: "inbox" },
    { value: "flex", icon: "inventory_2" },
  ],
  displayModel.value,
  (value) => (displayModel.value = value)
);

const flexInfo = getter.getFlexBoxInfo(
  displayIconRadioModel.value as Ref<string>
);

// direction
const directionModel = createStyleRefModel("flex-direction");

const directionIconRadioModel = useIconRadio(
  [
    { value: "row", label: "Horizontal" },
    { value: "column", label: "Vertical" },
  ],
  directionModel.value,
  (value) => (directionModel.value = value)
);

// align config
const alignModel = createStyleRefModel("align-items");

const alignTitle = computed(() =>
  directionIconRadioModel.value.value === "row"
    ? "vertical align"
    : "horizontal align"
);

const alignOpts = computed(() => {
  if (directionIconRadioModel.value.value === "row") {
    return [
      { value: "start", icon: "vertical_align_top", tooltip: "top" },

      { value: "center", icon: "align_vertical_center", tooltip: "center" },

      { value: "end", icon: "vertical_align_bottom", tooltip: "bottom" },
    ];
  }

  return [
    { value: "start", icon: "align_horizontal_left", tooltip: "left" },

    { value: "center", icon: "align_horizontal_center", tooltip: "center" },

    { value: "end", icon: "align_horizontal_right", tooltip: "right" },
  ];
});

const alignIconRadioModel = useIconRadio(
  alignOpts,
  alignModel.value,
  (value) => (alignModel.value = value)
);

// justify config

const justifyModel = createStyleRefModel("justify-content");

const justifyTitle = computed(() =>
  directionIconRadioModel.value.value === "row"
    ? "vertical justify"
    : "horizontal justify"
);

const justifyOpts = computed(() => {
  if (directionIconRadioModel.value.value === "row") {
    return [
      { value: "start", icon: "align_horizontal_left", tooltip: "left" },

      { value: "center", icon: "align_horizontal_center", tooltip: "center" },

      { value: "end", icon: "align_horizontal_right", tooltip: "right" },
    ];
  }

  return [
    { value: "start", icon: "vertical_align_top", tooltip: "top" },

    { value: "center", icon: "align_vertical_center", tooltip: "center" },

    { value: "end", icon: "vertical_align_bottom", tooltip: "bottom" },
  ];
});

const justifyIconRadioModel = useIconRadio(
  justifyOpts,
  justifyModel.value,
  (value) => (justifyModel.value = value)
);
</script>

<template>
  <a-collapse-item header="Layout(布局)" key="layout">
    <a-list size="small">
      <!-- display -->

      <ListItem>
        <ItemLabel keyId="display" label="Display"></ItemLabel>
        <IconRadio :model="displayIconRadioModel"></IconRadio>
      </ListItem>

      <!-- flexbox setting -->
      <template v-if="flexInfo.isFlex">
        <!-- Direction -->
        <ListItem>
          <ItemLabel keyId="flex-direction" label="direction"></ItemLabel>
          <IconRadio :model="directionIconRadioModel"></IconRadio>
        </ListItem>

        <!-- align -->
        <ListItem>
          <ItemLabel keyId="align-items" :label="alignTitle"></ItemLabel>

          <IconRadio :model="alignIconRadioModel"></IconRadio>
        </ListItem>

        <!-- justify -->
        <ListItem>
          <ItemLabel keyId="justify-content" :label="justifyTitle"></ItemLabel>

          <IconRadio :model="justifyIconRadioModel"></IconRadio>
        </ListItem>
      </template>
    </a-list>
  </a-collapse-item>
</template>

<style scoped lang="less">
.item-title {
  width: 5rem;
}
</style>
