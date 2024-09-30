import { ref, computed, Ref } from "vue";

type TItemOption = { label: string; value: string };
type TOption = string | TItemOption;

export type TModel = ReturnType<typeof useInputWithUnitSelector>;

type TConfigs =
  | {
      nonValueOptions?: string[];
      defaultOptionValue?: string;
      optionValueIfnonValue?: string;
    }
  | undefined;

export function useInputWithUnitSelector(settings: {
  options: TOption[];
  defaultValues?: { input?: string | undefined; select?: string | undefined };
  configs?: TConfigs;
}) {
  const {
    defaultValues = { input: undefined, select: undefined },
    options,
    configs,
  } = settings;

  const inputValue = ref<string | undefined>(defaultValues.input);
  const selectValue = ref<string | undefined>(
    defaultValues.select ?? configs?.defaultOptionValue
  );

  const itemOptions = options.map((opt) => {
    if (typeof opt === "string") {
      return { value: opt, label: opt };
    }

    return opt;
  });

  function getItemFromOptions(value: string) {
    return itemOptions.find((v) => v.value === value);
  }

  const cache = {
    lastInvaildInputValue: inputValue.value,
  };

  const selectItem = ref<TItemOption | null>(null);

  const selectDisplay = computed(() => {
    if (selectValue.value) {
      return getItemFromOptions(selectValue.value)?.label;
    }

    return "";
  });

  const inputPlaceholder = computed(() => {
    if (selectValue.value) {
      const item = getItemFromOptions(selectValue.value);
      return item?.value ?? item?.label;
    }

    return "";
  });

  function updateInput(text: string) {
    inputValue.value = text;
    whenInputValueChanged(selectValue, inputValue, configs, cache);
  }

  function updateSelect(value: string) {
    selectValue.value = value;
    whenSelectValueChanged(selectValue, inputValue, configs, cache);
  }

  whenInputValueChanged(selectValue, inputValue, configs, cache);
  whenSelectValueChanged(selectValue, inputValue, configs, cache);

  return {
    inputValue,
    selectValue,
    selectItem,
    selectDisplay,
    inputPlaceholder,
    itemOptions,
    updateInput,
    updateSelect,
  };
}

function whenInputValueChanged(
  selectValue: Ref<string | undefined>,
  inputValue: Ref<string | undefined>,
  configs: TConfigs,
  cache: {
    lastInvaildInputValue: string | undefined;
  }
) {
  const { nonValueOptions, defaultOptionValue, optionValueIfnonValue } =
    configs ?? {};

  const value = inputValue.value;

  if (!value) {
    return;
  }

  if (
    nonValueOptions &&
    defaultOptionValue &&
    value.length > 0 &&
    selectValue.value &&
    nonValueOptions.includes(selectValue.value)
  ) {
    // input : 10 ,select: auto -> select:rem
    selectValue.value = defaultOptionValue;
    // if (value.length > 0 && selectValue.value) {
    //   if (nonValueOptions.includes(selectValue.value)) {
    //     selectValue.value = defaultOptionValue;
    //   } else if (optionValueIfnonValue) {
    //     selectValue.value = optionValueIfnonValue;
    //   }
    // }
  }

  if (
    optionValueIfnonValue &&
    nonValueOptions &&
    !!value &&
    selectValue.value &&
    nonValueOptions.includes(selectValue.value)
  ) {
    selectValue.value = optionValueIfnonValue;
  }

  // current: 10rem -> input value clear -> select value change to auto
  if (!value && nonValueOptions) {
    selectValue.value = nonValueOptions[0];
  }

  if (!!value) {
    cache.lastInvaildInputValue = value;
  }
}

function whenSelectValueChanged(
  selectValue: Ref<string | undefined>,
  inputValue: Ref<string | undefined>,
  configs: TConfigs,
  cache: {
    lastInvaildInputValue: string | undefined;
  }
) {
  const { nonValueOptions } = configs ?? {};
  const value = selectValue.value;

  if (!value) {
    return;
  }
  // input: 10,select:auto -> input : ''
  if (nonValueOptions && nonValueOptions.includes(value)) {
    inputValue.value = undefined;

    // input:'',select: auto to rem -> input: '10'
  } else if (!inputValue.value && cache.lastInvaildInputValue !== null) {
    inputValue.value = cache.lastInvaildInputValue;
  }
}
