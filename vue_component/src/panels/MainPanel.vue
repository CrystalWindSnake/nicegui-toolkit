<script setup lang="ts">
import { computed, ref } from "vue";
import Spacing from "./Spacing/Spacing.vue";
import Layout from "./Layout/Layout.vue";
import FlexItem from "./FlexItem/FlexItem.vue";
import Size from "./Size/Size.vue";
import { bindSelectTarget } from "@/hooks/propsMapping";
import { selectedTarget } from "@/hooks/targetElementContext";

bindSelectTarget(selectedTarget);

const showPanels = computed(() => !!selectedTarget.value);
</script>

<template>
  <div>
    <a-tabs :hide-content="!showPanels">
      <a-tab-pane key="style" title="style">
        <a-collapse accordion>
          <FlexItem></FlexItem>

          <Layout></Layout>

          <Spacing></Spacing>

          <Size></Size>
        </a-collapse>
      </a-tab-pane>

      <a-tab-pane key="cusStyle" title="cus style"> </a-tab-pane>
    </a-tabs>

    <!-- <q-tabs class="bg-secondary-5" v-model="tab" :align="`left`" dense no-caps>
      <q-tab name="style" label="style" />
      <q-tab name="cusStyle" label="cus style" />
    </q-tabs> -->

    <!-- <q-tab-panels
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

          <q-separator />
          <Size></Size>
        </q-list>
      </q-tab-panel>
    </q-tab-panels> -->
  </div>
</template>

<style scoped></style>
