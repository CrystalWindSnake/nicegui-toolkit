import { MaybeRef, ref, watch } from "vue";
import * as emits from "@/shared/emits";
import * as utils from "@/shared/utils";
import { useUpdateFlag, selectedTarget } from "@/shared/targetElementContext";

type TOption = {
  checkedValue: string;
  uncheckedValue: string;
};

export type TModel = ReturnType<typeof useBooleanSwitch>;

export function useBooleanSwitch(settings: {
  propertyName: string;
  options: MaybeRef<TOption>;
}) {
  const { propertyName, options } = settings;

  const resultValue = ref(undefined as string | number | boolean | undefined);
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
    emits.setCommand({
      propertyName: settings.propertyName,
      values: { [settings.propertyName]: resultValue.value },
    });
  }

  return {
    value: resultValue,
    options,
    userEdited,
  };
}
