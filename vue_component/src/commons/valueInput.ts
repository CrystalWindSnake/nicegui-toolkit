import { ref, readonly, watch, effect } from "vue";
import { type TUnitNumber } from "@/hooks/dataModels";

export type TValueInputReturn = ReturnType<typeof useValueInput>;

type TOption = {
  value: string;
  label?: string;
};

type TNonValueOptions = string[];

type TInit = {
  input: string;
  select: string;
};

export function useValueInput(
  options: TOption[],
  unitNumber: TUnitNumber,
  nonValueOptions?: TNonValueOptions,
  defaultValueOption?: string
) {
  const initSelectValueItem = options.find(
    (item) => item.value === unitNumber.unit.value
  )!;

  const inputValue = ref("");
  const selectValue = ref(initSelectValueItem);

  const modelValueRefs = {
    inputValue,
    selectValue,
  };

  effect(() => {
    inputValue.value = unitNumber.number2string();
    selectValue.value = { value: unitNumber.unit.value };
  });

  function updateValue(input: string, select: string) {
    inputValue.value = input;
    selectValue.value = { value: select };

    if (input) {
      unitNumber.number.value = Number.parseFloat(input);
    } else {
      unitNumber.number.value = null;
    }

    unitNumber.unit.value = select;
  }

  return {
    inputValue: readonly(inputValue),
    selectValue: readonly(selectValue),
    model: {
      updateValue,
      unitNumber,
      modelValueRefs,
      options,
      nonValueOptions,
      defaultValueOption,
    },
  };
}
