<script setup lang="ts">
import { computed } from "vue";
import * as globals from "@/hooks/globals";
import { buildRefGetter } from "@/hooks/targetInfoGetter";
import { selectedTarget } from "@/hooks/targetElementContext";
import ItemLabel from "@/commons/ItemLabel.vue";
import ListItem from "@/commons/ListItem.vue";

import IconRadio from "@/commons/IconRadio.vue";
import { useIconRadio } from "@/commons/iconRadio";

const getter = buildRefGetter(selectedTarget);

const parentFlexInfo = getter.getParentFlexBoxInfo();

const alignConfigs = computed(() => {
  if (parentFlexInfo.value.direction === "row") {
    return {
      title: "vertical align",
      start: {
        icon: "vertical_align_top",
        tooltipLabel: "top",
      },

      center: {
        icon: "align_vertical_center",
        tooltipLabel: "center",
      },

      end: {
        icon: "vertical_align_bottom",
        tooltipLabel: "bottom",
      },

      stretch: {
        icon: "settings_overscan",
        tooltipLabel: "stretch",
      },
    };
  }

  return {
    title: "horizontal align",
    start: {
      icon: "align_horizontal_left",
      tooltipLabel: "left",
    },

    center: {
      icon: "align_horizontal_center",
      tooltipLabel: "center",
    },

    end: {
      icon: "align_horizontal_right",
      tooltipLabel: "right",
    },

    stretch: {
      icon: "settings_overscan",
      tooltipLabel: "stretch",
    },
  };
});

const iconRadioModel = useIconRadio({
  propertyName: "align-self",
  options: [
    { value: "flex-start", icon: "align_horizontal_left" },
    { value: "center", icon: "align_horizontal_center" },
    { value: "flex-end", icon: "align_horizontal_right" },
    { value: "stretch", icon: "settings_overscan" },
  ],
});
</script>

<template>
  <a-collapse-item
    v-if="parentFlexInfo.isFlex"
    header="FlexItem(Flex子元素)"
    key="flex-item"
  >
    <a-list size="small">
      <ListItem>
        <ItemLabel keyId="align-self" :label="alignConfigs.title"></ItemLabel>
        <IconRadio :model="iconRadioModel"></IconRadio>
      </ListItem>
    </a-list>
  </a-collapse-item>
</template>

<style scoped lang="less">
.item-title {
  width: 5rem;
}
</style>
