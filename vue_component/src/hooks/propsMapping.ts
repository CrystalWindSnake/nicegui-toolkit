import { Ref, watch, ref } from "vue";
import { buildGetter } from "@/hooks/targetInfoGetter";

const refMapping = new Map<string, Ref<any>>([
  ["display", ref(null)],
  ["padding-left", ref(null)],
  ["padding-top", ref(null)],
  ["padding-right", ref(null)],
  ["padding-bottom", ref(null)],
  ["margin-left", ref(null)],
  ["margin-top", ref(null)],
  ["margin-right", ref(null)],
  ["margin-bottom", ref(null)],
]);

export function bindSelectTarget(selectTarget: Ref<HTMLElement | null>) {
  watch(selectTarget, (target) => {
    if (!target) {
      refMapping.forEach((value) => {
        value.value = null;
      });

      return;
    }

    const getter = buildGetter(target);

    refMapping.forEach((value, key) => {
      value.value = getter.getStyle(key);
    });
  });
}

export function getInitValue<T>(name: string): Ref<T> {
  if (!refMapping.has(name)) {
    refMapping.set(name, ref(null));
  }
  return refMapping.get(name)!;
}
