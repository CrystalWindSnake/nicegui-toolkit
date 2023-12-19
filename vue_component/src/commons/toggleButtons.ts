import { makeRef } from "@/hooks/utils";
import { MaybeRef, ref, computed, Ref, watch } from "vue";

type TOption = {
  label?: string;
  value: string;
  icon?: string;
  tooltip?: string;
};

export type TModel = ReturnType<typeof useToggleButtons>;

export function useToggleButtons(
  options: TOption[],
  value?: MaybeRef<string | null>
) {
  const resultValue = makeRef(value);

  const resultOptions = options.map((v) => {
    const label = v.label ?? v.value;

    return {
      value: v.value,
      label,
      icon: v.icon ?? null,
      tooltip: v.tooltip ?? label,
    };
  });

  return {
    value: resultValue,
    options: resultOptions,
  };
}
