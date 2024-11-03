<script setup lang="ts">
import { computed, Ref } from "vue";
import { buildRefGetter } from "@/hooks/targetInfoGetter";
import { selectedTarget } from "@/shared/targetElementContext";
import IconRadio from "@/commons/IconRadio.vue";
import { useIconRadio } from "@/commons/iconRadio";
import BooleanSwitch from "@/commons/BooleanSwitch.vue";
import { useBooleanSwitch } from "@/commons/booleanSwitch";
import ItemLabel from "@/commons/ItemLabel.vue";
import { t } from "@/shared/language";

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
    ? t("nt.style.layout.align-title-byRow")
    : t("nt.style.layout.align-title-byCol")
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
    ? t("nt.style.layout.justify-title-byRow")
    : t("nt.style.layout.justify-title-byCol")
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

// flex-wrap
const wrapBooleanSwitchModel = useBooleanSwitch({
  propertyName: "flex-wrap",
  options: {
    checkedValue: "wrap",
    uncheckedValue: "nowrap",
  },
});
</script>

<template>
  <a-collapse-item :header="t('nt.style.layout.header')" key="layout">
    <div
      class="grid grid-cols-[minmax(18ch,auto)_auto] gap-y-2 items-center justify-start"
    >
      <!-- display -->

      <ItemLabel
        keyId="display"
        :label="t('nt.style.layout.display-label')"
      ></ItemLabel>
      <IconRadio :model="displayIconRadioModel"></IconRadio>

      <!-- flexbox setting -->
      <template v-if="flexInfo.isFlex">
        <!-- Direction -->

        <ItemLabel
          keyId="flex-direction"
          :label="t('nt.style.layout.direction')"
        ></ItemLabel>
        <IconRadio :model="directionIconRadioModel"></IconRadio>

        <!-- wrap -->
        <ItemLabel
          keyId="flex-wrap"
          :label="t('nt.style.layout.wrap-label')"
        ></ItemLabel>
        <BooleanSwitch :model="wrapBooleanSwitchModel"></BooleanSwitch>

        <!-- justify -->
        <ItemLabel keyId="justify-content" :label="justifyTitle"></ItemLabel>
        <IconRadio :model="justifyIconRadioModel"></IconRadio>

        <!-- align -->
        <ItemLabel keyId="align-items" :label="alignTitle"></ItemLabel>
        <IconRadio :model="alignIconRadioModel"></IconRadio>
      </template>
    </div>
  </a-collapse-item>
</template>

<style scoped lang="less">
.item-title {
  width: 5rem;
}
</style>
