<script setup lang="ts">
import { createStyleRefModel } from "@/commons/utils";
import { computed } from "vue";
import { getGlobals } from "@/hooks/globals";
import { buildRefGetter } from "@/hooks/targetInfoGetter";

const displayModel = createStyleRefModel("display");

const directionModel = createStyleRefModel("flex-direction");
const alignModel = createStyleRefModel("align-items");

const alignConfigs = computed(() => {
  if (directionModel.value === "row") {
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

const justifyModel = createStyleRefModel("justify-content");

const justifyConfigs = computed(() => {
  if (directionModel.value === "row") {
    return {
      title: "horizontal justify",
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
  }

  return {
    title: "vertical justify",
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
});

const selectTarget = getGlobals().selectTarget;

const getter = buildRefGetter(selectTarget);

const flexInfo = getter.getFlexBoxInfo(displayModel);
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
          <q-btn-toggle
            size="sm"
            padding="4px"
            v-model="displayModel"
            toggle-color="primary"
            :options="[
              { value: 'block', slot: 'block' },
              { value: 'flex', slot: 'flex' },
            ]"
          >
            <template v-slot:block>
              <q-icon name="inbox">
                <q-tooltip style="z-index: 99999999"> block </q-tooltip>
              </q-icon>
            </template>

            <template v-slot:flex>
              <q-icon name="inventory_2">
                <q-tooltip style="z-index: 99999999"> flex box </q-tooltip>
              </q-icon>
            </template>
          </q-btn-toggle>
        </q-item>

        <q-separator />

        <!-- flexbox setting -->
        <div v-if="flexInfo.isFlex">
          <!-- Direction -->
          <q-item class="items-center gap-2 px-3 py-2">
            <span class="item-title text-caption text-capitalize"
              >direction</span
            >
            <q-btn-toggle
              v-model="directionModel"
              padding="8px"
              size="sm"
              toggle-color="primary"
              :options="[
                { value: 'row', label: 'Horizontal' },
                { value: 'column', label: 'Vertical' },
              ]"
            >
            </q-btn-toggle>
          </q-item>

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
                { value: 'start', slot: 'start' },
                { value: 'center', slot: 'center' },
                { value: 'end', slot: 'end' },
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

          <!-- justify -->
          <q-item class="items-center gap-2 px-3 py-2">
            <span class="item-title text-left text-caption text-capitalize">{{
              justifyConfigs.title
            }}</span>
            <q-btn-toggle
              v-model="justifyModel"
              padding="8px"
              size="sm"
              toggle-color="primary"
              :options="[
                { value: 'start', slot: 'start' },
                { value: 'center', slot: 'center' },
                { value: 'end', slot: 'end' },
              ]"
            >
              <template v-slot:start>
                <q-icon :name="justifyConfigs.start.icon">
                  <q-tooltip style="z-index: 99999999">
                    {{ justifyConfigs.start.tooltipLabel }}
                  </q-tooltip>
                </q-icon>
              </template>

              <template v-slot:center>
                <q-icon :name="justifyConfigs.center.icon">
                  <q-tooltip style="z-index: 99999999">
                    {{ justifyConfigs.center.tooltipLabel }}
                  </q-tooltip>
                </q-icon>
              </template>

              <template v-slot:end>
                <q-icon :name="justifyConfigs.end.icon">
                  <q-tooltip style="z-index: 99999999">
                    {{ justifyConfigs.end.tooltipLabel }}
                  </q-tooltip>
                </q-icon>
              </template>
            </q-btn-toggle>
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
