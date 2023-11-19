<script setup lang="ts">
import { ref, watch } from 'vue'
import { sendCommand } from "@/hooks/events";

const layoutModel = ref('block')

watch(layoutModel, value => {
    sendCommand('style', 'set', { 'display': value })
})

</script>

<template>
    <div class="row no-wrap	items-center gap-2 px-3 py-2">

        <span>display </span>
        <q-btn-toggle size="sm" padding="4px" v-model="layoutModel" toggle-color="primary" :options="[
            { value: 'block', slot: 'block' },
            { value: 'flex', slot: 'flex' },
        ]">
            <template v-slot:block>
                <q-icon name="inbox">
                    <q-tooltip style="z-index: 99999999;">
                        block
                    </q-tooltip>
                </q-icon>
            </template>

            <template v-slot:flex>
                <q-icon name="inventory_2">
                    <q-tooltip style="z-index: 99999999;">
                        flex box
                    </q-tooltip>
                </q-icon>
            </template>


        </q-btn-toggle>
    </div>
</template>

<style scoped></style>