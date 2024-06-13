<script setup lang="ts">
import { createStyleRefModel } from "@/panels/utils";
import { computed, watch } from "vue";
import { getGlobals } from "@/hooks/globals";
import { buildRefGetter } from "@/hooks/targetInfoGetter";

import { useToggleButtons } from "@/commons/toggleButtons";
import ToggleButtons from "@/commons/ToggleButtons.vue";

const displayModel = createStyleRefModel("display");

// const directionModel = createStyleRefModel("flex-direction");
// const alignModel = createStyleRefModel("align-items");

// const alignConfigs = computed(() => {
//   if (directionModel.value === "row") {
//     return {
//       title: "vertical align",
//       start: {
//         icon: "vertical_align_top",
//         tooltipLabel: "top",
//       },

//       center: {
//         icon: "align_vertical_center",
//         tooltipLabel: "center",
//       },

//       end: {
//         icon: "vertical_align_bottom",
//         tooltipLabel: "bottom",
//       },
//     };
//   }

//   return {
//     title: "horizontal align",
//     start: {
//       icon: "align_horizontal_left",
//       tooltipLabel: "left",
//     },

//     center: {
//       icon: "align_horizontal_center",
//       tooltipLabel: "center",
//     },

//     end: {
//       icon: "align_horizontal_right",
//       tooltipLabel: "right",
//     },
//   };
// });

// const justifyModel = createStyleRefModel("justify-content");

// const justifyConfigs = computed(() => {
//   if (directionModel.value === "row") {
//     return {
//       title: "horizontal justify",
//       start: {
//         icon: "align_horizontal_left",
//         tooltipLabel: "left",
//       },

//       center: {
//         icon: "align_horizontal_center",
//         tooltipLabel: "center",
//       },

//       end: {
//         icon: "align_horizontal_right",
//         tooltipLabel: "right",
//       },
//     };
//   }

//   return {
//     title: "vertical justify",
//     start: {
//       icon: "vertical_align_top",
//       tooltipLabel: "top",
//     },

//     center: {
//       icon: "align_vertical_center",
//       tooltipLabel: "center",
//     },

//     end: {
//       icon: "vertical_align_bottom",
//       tooltipLabel: "bottom",
//     },
//   };
// });

const selectTarget = getGlobals().selectTarget;

const getter = buildRefGetter(selectTarget);

const flexInfo = getter.getFlexBoxInfo(displayModel);

const displayToggleButtonsModel = useToggleButtons([
  { value: "block", icon: "inbox" },
  { value: "flex", icon: "inventory_2" },
]);

const directionToggleButtonsModel = useToggleButtons([
  { value: "row", label: "Horizontal" },
  { value: "column", label: "Vertical" },
]);

// align config

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

const alignToggleButtonsModel = useToggleButtons(alignOpts);

// justify config

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

const justifyToggleButtonsModel = useToggleButtons(justifyOpts);
</script>

<template>
  <q-expansion-item
    expand-separator
    label="Layout(布局)"
    header-class="text-red-1 bg-green-8"
    expand-icon-class="text-red-1"
  >
    <div class="col no-wrap">
      <q-list bordered>
        <!-- display -->
        <q-item class="items-center gap-2 px-3 py-2">
          <span class="item-title text-capitalize">display </span>

          <toggle-buttons
            padding="4px"
            :model="displayToggleButtonsModel"
          ></toggle-buttons>
        </q-item>

        <q-separator />

        <!-- flexbox setting -->
        <div v-if="flexInfo.isFlex">
          <!-- Direction -->
          <q-item class="items-center gap-2 px-3 py-2">
            <span class="item-title text-caption text-capitalize"
              >direction</span
            >

            <toggle-buttons
              :model="directionToggleButtonsModel"
            ></toggle-buttons>
          </q-item>

          <!-- align -->
          <q-item class="items-center gap-2 px-3 py-2">
            <span class="item-title text-left text-caption text-capitalize">{{
              alignTitle
            }}</span>

            <toggle-buttons :model="alignToggleButtonsModel"></toggle-buttons>
          </q-item>

          <!-- justify -->
          <q-item class="items-center gap-2 px-3 py-2">
            <span class="item-title text-left text-caption text-capitalize">{{
              justifyTitle
            }}</span>
            <toggle-buttons :model="justifyToggleButtonsModel"></toggle-buttons>
          </q-item>
        </div>
      </q-list>
    </div>
  </q-expansion-item>
</template>

<style scoped lang="less">
.item-title {
  width: 5rem;
}
</style>
