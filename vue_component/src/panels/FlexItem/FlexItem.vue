<script setup lang="ts">
import { createStyleRefModel } from "@/panels/utils";
import { computed } from "vue";
import * as globals from "@/hooks/globals";
import { buildRefGetter } from "@/hooks/targetInfoGetter";
import IconRadio from "@/commons/IconRadio.vue";
import { useIconRadio } from "@/commons/iconRadio";

const getter = buildRefGetter(globals.SelectedTarget);

const parentFlexInfo = getter.getParentFlexBoxInfo();

const alignModel = createStyleRefModel("align-self");

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

const iconRadioModel = useIconRadio([
  { value: "flex-start", icon: "align_horizontal_left" },
  { value: "center", icon: "align_horizontal_center" },
  { value: "flex-end", icon: "align_horizontal_right" },
  { value: "stretch", icon: "settings_overscan" },
]);
</script>

<template>
  <a-collapse-item
    v-if="parentFlexInfo.isFlex"
    header="FlexItem(Flex子元素)"
    key="flex-item"
  >
    <div class="col no-wrap outline">
      <!-- align -->

      <span class="item-title text-left text-caption text-capitalize">{{
        alignConfigs.title
      }}</span>

      <IconRadio :model="iconRadioModel"></IconRadio>

      <!-- <a-radio-group type="button" v-model="alignModel">
        <a-radio value="flex-start">flex-start</a-radio>
        <a-radio value="center">center</a-radio>
        <a-radio value="flex-end">flex-end</a-radio>
        <a-radio value="stretch">stretch</a-radio>
      </a-radio-group> -->

      <!-- <q-btn-toggle
        v-model="alignModel"
        padding="8px"
        size="sm"
        toggle-color="primary"
        :options="[
          { value: 'flex-start', slot: 'start' },
          { value: 'center', slot: 'center' },
          { value: 'flex-end', slot: 'end' },
          { value: 'stretch', slot: 'stretch' },
        ]"
      >
        <template v-slot:start>
          <q-icon :name="alignConfigs.start.icon">
            <q-tooltip style="z-index: 99999999">
              {{ alignConfigs.start.tooltipLabel }}
            </q-tooltip>
          </q-icon>
        </template>

        <template v-slot:center>
          <q-icon :name="alignConfigs.center.icon">
            <q-tooltip style="z-index: 99999999">
              {{ alignConfigs.center.tooltipLabel }}
            </q-tooltip>
          </q-icon>
        </template>

        <template v-slot:end>
          <q-icon :name="alignConfigs.end.icon">
            <q-tooltip style="z-index: 99999999">
              {{ alignConfigs.end.tooltipLabel }}
            </q-tooltip>
          </q-icon>
        </template>

        <template v-slot:stretch>
          <q-icon :name="alignConfigs.stretch.icon">
            <q-tooltip style="z-index: 99999999">
              {{ alignConfigs.stretch.tooltipLabel }}
            </q-tooltip>
          </q-icon>
        </template>
      </q-btn-toggle> -->
    </div>
  </a-collapse-item>
</template>

<style scoped lang="less">
.item-title {
  width: 5rem;
}
</style>
