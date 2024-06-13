<script setup lang="ts">
import { createStyleRefModel } from "@/commons/utils";
import { computed, watch } from "vue";
import { getGlobals } from "@/hooks/globals";
import { buildRefGetter } from "@/hooks/targetInfoGetter";

const getter = buildRefGetter(getGlobals().selectTarget);

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
  };
});
</script>

<template>
  <q-expansion-item
    v-if="parentFlexInfo.isFlex"
    expand-separator
    label="FlexItem(Flex子元素)"
    header-class="text-red-1 bg-green-8"
    expand-icon-class="text-red-1"
  >
    <div class="col no-wrap">
      <q-list bordered>
        <!-- align -->
        <q-item class="items-center gap-2 px-3 py-2">
          <span class="item-title text-left text-caption text-capitalize">{{
            alignConfigs.title
          }}</span>
          <q-btn-toggle
            v-model="alignModel"
            padding="8px"
            size="sm"
            toggle-color="primary"
            :options="[
              { value: 'flex-start', slot: 'start' },
              { value: 'center', slot: 'center' },
              { value: 'flex-end', slot: 'end' },
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
          </q-btn-toggle>
        </q-item>
      </q-list>
    </div>
  </q-expansion-item>
</template>

<style scoped lang="less">
.item-title {
  width: 5rem;
}
</style>
