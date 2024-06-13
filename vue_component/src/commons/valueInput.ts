import { makeRef } from "@/hooks/utils";
import { MaybeRef, ref, computed, Ref, watch } from "vue";

type TItemOption = { label: string; value: string };
type TOption = string | TItemOption;

export type TModel = ReturnType<typeof useValueInput>;

type TConfigs =
  | {
      nonValueOptions?: string[];
      defaultOptionValue?: string;
      optionValueIfnonValue?: string;
    }
  | undefined;

export function useValueInput(
  options: TOption[],
  values?: {
    inputValue?: MaybeRef<string | null>;
    selectValue?: MaybeRef<string | null>;
  },
  configs?: TConfigs
) {
  values = values ?? {};

  const itemOptions = options.map((opt) => {
    if (typeof opt === "string") {
      return { value: opt, label: opt };
    }

    return opt;
  });

  function getItemFromOptions(value: string) {
    return itemOptions.find((v) => v.value === value);
  }

  const inputValue = makeRef(values.inputValue ?? null);
  const selectValue = makeRef(values.selectValue ?? null);

  const cache = {
    lastInvaildInputValue: inputValue.value,
  };

  whenInputValueChanged(selectValue, inputValue, configs, cache);
  whenSelectValueChanged(selectValue, inputValue, configs, cache);

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
  }

  function updateSelect(value: string) {
    selectValue.value = value;
  }

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
  selectValue: Ref<string | null>,
  inputValue: Ref<string | null>,
  configs: TConfigs,
  cache: {
    lastInvaildInputValue: string | null;
  }
) {
  const { nonValueOptions, defaultOptionValue, optionValueIfnonValue } =
    configs ?? {};

  watch(inputValue, (value) => {
    if (value === null) {
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
  });
}

function whenSelectValueChanged(
  selectValue: Ref<string | null>,
  inputValue: Ref<string | null>,
  configs: TConfigs,
  cache: {
    lastInvaildInputValue: string | null;
  }
) {
  const { nonValueOptions } = configs ?? {};

  watch(selectValue, (value) => {
    if (value === null) {
      return;
    }
    // input: 10,select:auto -> input : ''
    if (nonValueOptions && nonValueOptions.includes(value)) {
      inputValue.value = "";

      // input:'',select: auto to rem -> input: '10'
    } else if (!inputValue.value && cache.lastInvaildInputValue !== null) {
      inputValue.value = cache.lastInvaildInputValue;
    }
  });
}
