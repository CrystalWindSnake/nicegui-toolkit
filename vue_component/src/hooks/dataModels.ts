import { computed, ref, readonly } from "vue";

export type TUnitNumber = ReturnType<typeof useUnitNumber>;

const RE_number_unit = /^(\d+(?:\.\d+)?)(.+)$/;

export function useUnitNumber(
  init: string,
  nonValueUnits: string[],
  resultDisplay: (number: number | null, unit: string) => string
) {
  const number = ref<number | null>(null);
  const unit = ref<string>("");

  function number2string() {
    return number.value?.toString() ?? "";
  }

  if (nonValueUnits.includes(init)) {
    unit.value = init;
  } else {
    const gps = init.match(RE_number_unit)!;
    number.value = Number.parseFloat(gps[1]);
    unit.value = gps[2];
  }

  const result = computed(() => resultDisplay(number.value, unit.value));

  return {
    number,
    unit,
    result,
    number2string,
  };
}

export function useUnitNumberDataEditor(init: string) {
  function resultDisplay(number: number | null, unit: string) {
    if (number === null) {
      return "0" + unit;
    }

    return `${number}${unit}`;
  }

  return useUnitNumber(init, [], resultDisplay);
}

type TValueInputOptions = {
  value: string;
  label?: string;
}[];

export function useUnitNumberValueInput(
  init: string,
  options: TValueInputOptions
) {
  function resultDisplay(number: number | null, unit: string) {
    if (number === null) {
      return "0" + unit;
    }

    return `${number}${unit}`;
  }

  return useUnitNumber(init, [], resultDisplay);
}
