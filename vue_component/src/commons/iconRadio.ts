import { MaybeRef, ref, computed, watch, toValue, Ref } from "vue";
import * as utils from "@/hooks/utils";
import * as globals from "@/hooks/globals";
import { useUpdateFlag, selectedTarget } from "@/hooks/targetElementContext";

type TOption = {
  label?: string;
  value: string;
  icon?: string;
  tooltip?: string;
};

export type TModel = ReturnType<typeof useIconRadio>;

export function useIconRadio(settings: {
  propertyName: string;
  options: MaybeRef<TOption[]>;
}) {
  const { propertyName, options } = settings;

  const resultValue = ref(undefined as string | undefined);

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

  const updateFlag = useUpdateFlag(settings.propertyName);

  watch(
    updateFlag,
    () => {
      if (!selectedTarget.value) {
        return;
      }

      const newValue = utils.getComputedStyle(
        selectedTarget.value!,
        propertyName
      );

      resultValue.value = newValue;
    },
    { immediate: true }
  );

  function userEdited() {
    globals.sendSetCommand({
      propertyName: settings.propertyName,
      values: { [settings.propertyName]: resultValue.value },
    });
  }

  return {
    value: resultValue,
    options: resultOptions,
    userEdited,
  };
}

export function _useIconRadio(
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
