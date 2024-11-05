import { ref, computed, Ref, watch } from "vue";
import * as utils from "@/shared/utils";
import * as emits from "@/shared/emits";
import { getTargetContext, useUpdateFlag } from "@/shared/targetElementContext";

type TItemOption = { label: string; value: string };
type TOption = string | TItemOption;

export type TModel = ReturnType<typeof useInputWithUnitSelector>;

type TConfigs =
  | {
      nonValueOptions?: string[];
      defaultOptionValue?: string;
      optionValueIfnonValue?: string;
      specialProperty?: "width" | "height";
    }
  | undefined;

function getStyleInContext(
  stylesMap: ReturnType<typeof getTargetContext>,
  propertyName: string
) {
  return stylesMap.styles.get(propertyName);
}

export function useInputWithUnitSelector(settings: {
  propertyName: string;
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

  const updateFlag = useUpdateFlag(settings.propertyName);

  watch(updateFlag, () => {
    const styleValue = getStyleInContext(
      getTargetContext(),
      settings.propertyName
    ) as string;

    if (styleValue === undefined) {
      inputValue.value = defaultValues.input;
      selectValue.value = defaultValues.select;
      return;
    }

    const { number, unit } = utils.parseUnitStyleValue(styleValue);

    inputValue.value = number;
    selectValue.value = unit;
  });

  function userEdited() {
    const number = inputValue.value;
    const unit = selectValue.value;

    let newValue = "";
    if (unit === "auto") {
      newValue = unit;
    } else {
      newValue = `${number}${unit}`;
    }

    emits.setCommand({
      propertyName: settings.propertyName,
      values: { [settings.propertyName]: newValue },
    });
  }

  function updateInput(text: string) {
    whenInputValueChanged(selectValue, inputValue, configs);
  }

  function updateSelect(value: string) {
    selectValue.value = value;
    whenSelectValueChanged(selectValue, inputValue, configs);
  }

  whenInputValueChanged(selectValue, inputValue, configs);
  whenSelectValueChanged(selectValue, inputValue, configs);

  return {
    inputValue,
    selectValue,
    selectItem,
    selectDisplay,
    inputPlaceholder,
    itemOptions,
    userEdited,
    updateSelect,
    updateInput,
  };
}

function whenInputValueChanged(
  selectValue: Ref<string | undefined>,
  inputValue: Ref<string | undefined>,
  configs: TConfigs
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
}

function whenSelectValueChanged(
  selectValue: Ref<string | undefined>,
  inputValue: Ref<string | undefined>,
  configs: TConfigs
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
  } else if (!inputValue.value && configs?.specialProperty) {
    const windowSize = utils.getWindowSize();

    if (configs.specialProperty === "width") {
      inputValue.value = `${windowSize.width}`;
    } else if (configs.specialProperty === "height") {
      inputValue.value = `${windowSize.height}`;
    }
  }
}
