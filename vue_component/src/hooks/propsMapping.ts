import { Ref, watch, ref } from "vue";
import { buildGetter } from "@/hooks/targetInfoGetter";

const refMapping = new Map<string, Ref<any>>([["display", ref(null)]]);

export function bindSelectTarget(selectTarget: Ref<HTMLElement | null>) {
  watch(selectTarget, (target) => {
    if (!target) {
      refMapping.get("display")!.value = null;
      return;
    }

    const getter = buildGetter(target);

    refMapping.get("display")!.value = getter.getStyle("display");
  });
}

export function getInitValue<T>(name: string): Ref<T> {
  return refMapping.get(name)!;
}
