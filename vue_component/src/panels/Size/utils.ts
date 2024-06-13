import { type TModel as TValueInputModel } from "@/commons/valueInput";
import { computed, watch } from "vue";
import { createStyleRefModel } from "@/panels/utils";

export function valueToStyleModel(
  valueInputModel: TValueInputModel,
  style: string,
  selectNoValues: string[]
) {
  const styleModel = createStyleRefModel(style);

  const resultValue = computed(() => {
    const inputValue = valueInputModel.inputValue;
    const selectValue = valueInputModel.selectValue;

    if (selectValue.value && selectNoValues.includes(selectValue.value)) {
      return selectValue.value;
    }

    return `${inputValue.value}${selectValue.value}`;
  });

  watch(resultValue, (value) => {
    styleModel.value = value;
  });
}
