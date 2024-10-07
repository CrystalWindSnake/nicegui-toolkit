<script setup lang="ts">
import { computed, ref } from "vue";
import Spacing from "./Spacing/Spacing.vue";
import Layout from "./Layout/Layout.vue";
import FlexItem from "./FlexItem/FlexItem.vue";
import Size from "./Size/Size.vue";
import { useElementTree } from "@/commons/elementTree";
import ElementTree from "@/commons/ElementTree.vue";
import { useTargetContextDesc } from "@/commons/targetContextDesc";
import TargetContextDesc from "@/commons/TargetContextDesc.vue";
import { bindSelectTarget } from "@/hooks/propsMapping";
import { selectedTarget } from "@/hooks/targetElementContext";

bindSelectTarget(selectedTarget);

const showPanels = computed(() => !!selectedTarget.value);

const targetContextDescModel = useTargetContextDesc();

const elementTreeModel = useElementTree();
</script>

<template>
  <div class="bg-white/30 backdrop-blur-md">
    <a-tabs default-active-key="element-tree">
      <a-tab-pane key="style" title="style" :disabled="!showPanels">
        <a-collapse accordion>
          <FlexItem></FlexItem>

          <Layout></Layout>

          <Spacing></Spacing>

          <Size></Size>
        </a-collapse>
      </a-tab-pane>

      <a-tab-pane key="element-tree" title="navigator">
        <ElementTree :model="elementTreeModel"></ElementTree>
      </a-tab-pane>

      <a-tab-pane key="nicegui" title="nicegui" class="x-panel-nicegui">
        <TargetContextDesc :model="targetContextDescModel"></TargetContextDesc>
      </a-tab-pane>
      <a-tab-pane key="cusStyle" title="cus style"> </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style scoped>
:deep(.arco-collapse-item-content) {
  padding: 2px !important;
}
</style>
