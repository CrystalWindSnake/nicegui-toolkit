<script setup lang="ts">
import { computed, ref } from "vue";
import Spacing from "./Spacing/Spacing.vue";
import Layout from "./Layout/Layout.vue";
import FlexItem from "./FlexItem/FlexItem.vue";
import { getGlobals } from "@/hooks/globals";
import { bindSelectTarget } from "@/hooks/propsMapping";

const tab = ref("style");

const selectTarget = getGlobals().selectTarget;

bindSelectTarget(selectTarget);

const showPanels = computed(() => !!selectTarget.value);
</script>

<template>
  <div>
    <q-tabs class="bg-secondary-5" v-model="tab" :align="`left`" dense no-caps>
      <q-tab name="style" label="style" />
      <q-tab name="cusStyle" label="cus style" />
    </q-tabs>

    <q-tab-panels
      v-show="showPanels"
      v-model="tab"
      keep-alive
      animated
      swipeable
      vertical
      transition-prev="jump-up"
      transition-next="jump-up"
    >
      <q-tab-panel name="style" style="padding: 0">
        <q-list bordered>
          <FlexItem></FlexItem>

          <Layout></Layout>

          <q-separator />
          <Spacing></Spacing>
        </q-list>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<style scoped></style>
