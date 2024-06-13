import { Ref, watch, ref } from "vue";
import { buildRefGetter } from "@/hooks/targetInfoGetter";

const refMapping = new Map<string, Ref<any>>();

export function bindSelectTarget(selectTarget: Ref<HTMLElement | null>) {
  watch(selectTarget, (target) => {
    if (!target) {
      refMapping.forEach((value) => {
        value.value = null;
      });

      return;
    }

    const getter = buildRefGetter(target);

    refMapping.forEach((value, key) => {
      value.value = getter.getComputedStyle(key).value;
    });
  });
}

export function getInitValue<T>(name: string): Ref<T> {
  if (!refMapping.has(name)) {
    refMapping.set(name, ref(null));
  }
  return refMapping.get(name)!;
}
