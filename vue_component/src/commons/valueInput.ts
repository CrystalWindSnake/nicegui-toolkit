import { ref, readonly } from "vue";

export type TValueInputReturn = ReturnType<typeof useValueInput>;

type TOptions = {
  value: string;
  label?: string;
}[];

type TNonValueOptions = string[];

type TInit = {
  input: string;
  select: string;
};

export function useValueInput(
  options: TOptions,
  initValue: TInit,
  nonValueOptions?: TNonValueOptions,
  defaultValueOption?: string
) {
  const inputValue = ref(initValue.input);
  const selectValue = ref(initValue.select);

  function updateValue(input: string, select: string) {
    inputValue.value = input;
    selectValue.value = select;
  }

  return {
    inputValue: readonly(inputValue),
    selectValue: readonly(selectValue),
    model: {
      updateValue,
      initValue,
      options,
      nonValueOptions,
      defaultValueOption,
    },
  };
}
