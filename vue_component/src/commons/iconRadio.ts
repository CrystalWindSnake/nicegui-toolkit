import { MaybeRef, ref, computed, watch, toValue, Ref } from "vue";

type TOption = {
  label?: string;
  value: string;
  icon?: string;
  tooltip?: string;
};

export type TModel = ReturnType<typeof useIconRadio>;

export function useIconRadio(
  options: MaybeRef<TOption[]>,
  value: MaybeRef<string | undefined>,
  onValueChange?: (value: string) => void
) {
  const resultValue = ref(value);

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

  if (onValueChange) {
    watch(resultValue, (value) => {
      onValueChange(value!);
    });
  }

  return {
    value: resultValue,
    options: resultOptions,
  };
}
