<script setup lang="ts">
import { computed, ref } from 'vue'
import Spacing from "./Spacing/Spacing.vue";
import Layout from "./Layout/Layout.vue";
import { getGlobals } from "@/hooks/globals";
import { bindSelectTarget } from "@/hooks/propsMapping";

const tab = ref('style')

const selectTarget = getGlobals().selectTarget

bindSelectTarget(selectTarget)

const showPanels = computed(() => !!selectTarget.value)

</script>

<template>
    <div>
        <q-tabs class="text-teal" v-model="tab">
            <q-tab name="style" label="style" />
            <q-tab name="cusStyle" label="cus style" />
        </q-tabs>

        <q-tab-panels v-show="showPanels" v-model="tab" keep-alive animated swipeable vertical transition-prev="jump-up"
            transition-next="jump-up">
            <q-tab-panel name="style">

                <q-list bordered>
                    <q-expansion-item expand-separator label="布局" header-class="text-red-1 bg-accent"
                        expand-icon-class="text-red-1">
                        <Layout></Layout>
                    </q-expansion-item>

                    <q-separator />
                    <q-expansion-item expand-separator label="空间" header-class="text-red-1 bg-accent"
                        expand-icon-class="text-red-1">

                        <Spacing style="width: 100%;height: 8rem;"></Spacing>

                    </q-expansion-item>


                </q-list>



            </q-tab-panel>
        </q-tab-panels>


    </div>
</template>

<style scoped></style>