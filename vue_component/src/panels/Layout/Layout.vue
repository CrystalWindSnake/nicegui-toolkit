<script setup lang="ts">
import { createStyleRefModel } from "@/panels/utils";
import { computed, Ref } from "vue";
import * as globals from "@/hooks/globals";
import { buildRefGetter } from "@/hooks/targetInfoGetter";

import { useToggleButtons } from "@/commons/toggleButtons";
import ToggleButtons from "@/commons/ToggleButtons.vue";

import ItemLabel from "@/commons/ItemLabel.vue";
import ListItem from "@/commons/ListItem.vue";

const displayModel = createStyleRefModel("display");

const selectTarget = globals.SelectedTarget;

const getter = buildRefGetter(selectTarget);

const displayToggleButtonsModel = useToggleButtons(
  [
    { value: "block", icon: "inbox" },
    { value: "flex", icon: "inventory_2" },
  ],
  displayModel
);

const flexInfo = getter.getFlexBoxInfo(
  displayToggleButtonsModel.value as Ref<string>
);

// direction
const directionModel = createStyleRefModel("flex-direction");

const directionToggleButtonsModel = useToggleButtons(
  [
    { value: "row", label: "Horizontal" },
    { value: "column", label: "Vertical" },
  ],
  directionModel
);

// align config
const alignModel = createStyleRefModel("align-items");

const alignTitle = computed(() =>
  directionToggleButtonsModel.value.value === "row"
    ? "vertical align"
    : "horizontal align"
);

const alignOpts = computed(() => {
  if (directionToggleButtonsModel.value.value === "row") {
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

const alignToggleButtonsModel = useToggleButtons(alignOpts, alignModel);

// justify config

const justifyModel = createStyleRefModel("justify-content");

const justifyTitle = computed(() =>
  directionToggleButtonsModel.value.value === "row"
    ? "vertical justify"
    : "horizontal justify"
);

const justifyOpts = computed(() => {
  if (directionToggleButtonsModel.value.value === "row") {
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

const justifyToggleButtonsModel = useToggleButtons(justifyOpts, justifyModel);
</script>

<template>
  <a-collapse-item header="Layout(布局)" key="layout">
    <a-list size="small">
      <!-- display -->

      <ListItem>
        <ItemLabel keyId="display" label="Display"></ItemLabel>

        <toggle-buttons
          padding="4px"
          :model="displayToggleButtonsModel"
        ></toggle-buttons>
      </ListItem>

      <!-- flexbox setting -->
      <template v-if="flexInfo.isFlex">
        <!-- Direction -->
        <ListItem>
          <span class="item-title text-caption text-capitalize">direction</span>

          <toggle-buttons :model="directionToggleButtonsModel"></toggle-buttons>
        </ListItem>

        <!-- align -->
        <ListItem>
          <span class="item-title text-left text-caption text-capitalize">{{
            alignTitle
          }}</span>

          <toggle-buttons :model="alignToggleButtonsModel"></toggle-buttons>
        </ListItem>

        <!-- justify -->
        <ListItem>
          <span class="item-title text-left text-caption text-capitalize">{{
            justifyTitle
          }}</span>
          <toggle-buttons :model="justifyToggleButtonsModel"></toggle-buttons>
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
