<script setup lang="ts">
import { computed } from "vue";
import { buildRefGetter } from "@/shared/targetInfoGetter";
import { selectedTarget } from "@/shared/targetElementContext";
import ItemLabel from "@/commons/ItemLabel.vue";
import IconRadio from "@/commons/IconRadio.vue";
import { useIconRadio } from "@/commons/iconRadio";
import { t } from "@/shared/language";

const getter = buildRefGetter(selectedTarget);

const parentFlexInfo = getter.getParentFlexBoxInfo();

const alignConfigs = computed(() => {
  if (parentFlexInfo.value.direction === "row") {
    return {
      title: t("nt.style.flexitem.title.vertical"),
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
    title: t("nt.style.flexitem.title.horizontal"),
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
    { value: "flex-start", icon: "i-mdi-align-horizontal-left" },
    { value: "center", icon: "i-mdi-align-horizontal-center" },
    { value: "flex-end", icon: "i-mdi-align-horizontal-right" },
    { value: "stretch", icon: "i-mdi-arrow-expand-horizontal" },
  ],
});
</script>

<template>
  <a-collapse-item
    v-if="parentFlexInfo.isFlex"
    :header="t('nt.style.flexitem.header')"
    key="flex-item"
  >
    <div
      class="grid grid-cols-[minmax(18ch,auto)_auto] gap-y-2 items-center justify-start"
    >
      <ItemLabel keyId="align-self" :label="alignConfigs.title"></ItemLabel>
      <IconRadio :model="iconRadioModel"></IconRadio>
    </div>
  </a-collapse-item>
</template>

<style scoped lang="less">
.item-title {
  width: 5rem;
}
</style>
