<script setup lang="ts">
import { computed } from "vue";
import Spacing from "./Spacing/Spacing.vue";
import Layout from "./Layout/Layout.vue";
import FlexItem from "./FlexItem/FlexItem.vue";
import Size from "./Size/Size.vue";
import { useElementTree } from "@/commons/elementTree";
import ElementTree from "@/commons/ElementTree.vue";
import { bindSelectTarget } from "@/hooks/propsMapping";
import { selectedTarget } from "@/hooks/targetElementContext";
import Code from "@/panels/Code/Code.vue";
import { t } from "@/hooks/language";

bindSelectTarget(selectedTarget);

const showPanels = computed(() => !!selectedTarget.value);

const elementTreeModel = useElementTree();
</script>

<template>
  <div class="bg-white/30 backdrop-blur-md">
    <a-tabs default-active-key="element-tree">
      <a-tab-pane
        key="style"
        :title="t('nt.mainPanel.style')"
        :disabled="!showPanels"
      >
        <a-collapse accordion>
          <FlexItem></FlexItem>

          <Layout></Layout>

          <Spacing></Spacing>

          <Size></Size>
        </a-collapse>
      </a-tab-pane>

      <a-tab-pane key="element-tree" :title="t('nt.mainPanel.navigator')">
        <ElementTree :model="elementTreeModel"></ElementTree>
      </a-tab-pane>

      <a-tab-pane
        key="nicegui"
        :title="t('nt.mainPanel.code')"
        class="x-panel-nicegui"
        :disabled="!showPanels"
      >
        <Code> </Code>
      </a-tab-pane>
      <a-tab-pane key="cusStyle" :title="t('nt.mainPanel.cusStyle')">
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<style scoped>
:deep(.arco-collapse-item-content) {
  padding: 2px !important;
}
</style>
