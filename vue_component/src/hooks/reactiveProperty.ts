import { Ref, ref, watch, nextTick } from "vue";
import * as utils from "./utils";
import * as globals from "@/hooks/globals";
import { pausableWatch } from "@vueuse/core";

export function builder(selectedTarget: Ref<HTMLElement | null>) {
  const propertyTriggers = new Map<string, Ref<boolean>>();

  function createReactiveProperty(propertyName: string) {
    if (propertyTriggers.has(propertyName)) {
      throw new Error(`Property ${propertyName} already exists`);
    }

    // Allow external forced triggering
    const forceTrigger = ref(false);
    propertyTriggers.set(propertyName, forceTrigger);

    const refValue = ref<string | undefined>(undefined);

    watch([selectedTarget, forceTrigger], async ([selectedTarget, _]) => {
      if (!selectedTarget) {
        return;
      }

      const newValue = utils.getComputedStyle(selectedTarget, propertyName);

      valueWatcher.pause();
      refValue.value = newValue;

      await nextTick();
      valueWatcher.resume();
    });

    const valueWatcher = pausableWatch(refValue, (newValue) => {
      if (!selectedTarget.value) {
        return;
      }
      globals.sendSetCommand({
        propertyName: propertyName,
        values: { [propertyName]: newValue },
      });
    });

    return refValue;
  }

  function triggerPropertyUpdate(propertyName: string) {
    const refValue = propertyTriggers.get(propertyName);

    if (!refValue) {
      throw new Error(`Property ${propertyName} does not exist`);
    }

    refValue.value = !refValue.value;
  }

  return { createReactiveProperty, triggerPropertyUpdate };
}
