import { makeRef } from "@/hooks/utils";
import { MaybeRef, ref, computed, Ref, toValue } from "vue";

type TOption = {
  label?: string;
  value: string;
  icon?: string;
  tooltip?: string;
};

export type TModel = ReturnType<typeof useIconRadio>;

export function useIconRadio(
  options: MaybeRef<TOption[]>,
  defaultValue?: string | undefined
) {
  const resultValue = ref(defaultValue ?? undefined);

  const resultOptions = computed(() => {
    return toValue(options).map((v) => {
      const label = v.label ?? v.value;
      return {
        value: v.value,
        label,
        icon: v.icon ?? null,
        tooltip: v.tooltip ?? label,
      };
    });
  });

  return {
    value: resultValue,
    options: resultOptions,
  };
}
