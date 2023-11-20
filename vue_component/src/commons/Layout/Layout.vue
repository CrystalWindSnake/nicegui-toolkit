<script setup lang="ts">
import { computed } from "vue";
import { TCommnadEvent, sendCommand } from "@/hooks/events";
import { getInitValue } from "@/hooks/propsMapping";

function createStyleRefModel(
    styleName: string,
    extraCommandsFunc?: (value: any) => TCommnadEvent[]
) {
    const initValue = getInitValue<string>(styleName);

    const model = computed({
        get: () => {
            return initValue.value;
        },
        set: (value) => {
            const defaultSetCommand: TCommnadEvent = {
                action: "style",
                commandType: "set",
                values: { [styleName]: value },
            };
            const extraCommandss = extraCommandsFunc ? extraCommandsFunc(value) : [];

            sendCommand([defaultSetCommand, ...extraCommandss]);
            initValue.value = value;
        },
    });

    return model;
}

const layoutModel = createStyleRefModel("display");
</script>

<template>
    <div class="row no-wrap items-center gap-2 px-3 py-2">
        <span>display </span>
        <q-btn-toggle size="sm" padding="4px" v-model="layoutModel" toggle-color="primary" :options="[
            { value: 'block', slot: 'block' },
            { value: 'flex', slot: 'flex' },
        ]">
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
    </div>
</template>

<style scoped></style>
