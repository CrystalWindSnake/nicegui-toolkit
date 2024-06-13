import { ref, readonly } from "vue";

export type TValueInputReturn = ReturnType<typeof useValueInput>;

type TOptions = {
  value: string;
  label?: string;
}[];

type TNonValueOptions = {
  options: string[];
  defaultValueOptionsIndex: number;
};

export function useValueInput(
  options: TOptions,
  nonValueOptions?: TNonValueOptions,
  initInputValue?: string,
  initSelectValueOptionsIndex?: number
) {
  const initItem = options[initSelectValueOptionsIndex ?? 0];
  const initSelectValue = initItem.label ?? initItem.value;
  const initValues = {
    initInputValue: initInputValue ?? "",
    initSelectItem: initItem,
  };

  const inputValue = ref(initValues.initInputValue);
  const selectValue = ref(initSelectValue);

  function updateValue(input: string, select: string) {
    inputValue.value = input;
    selectValue.value = select;
  }

  return {
    inputValue: readonly(inputValue),
    selectValue: readonly(selectValue),
    model: {
      updateValue,
      initValues,
      options,
      nonValueOptions,
    },
  };
}
