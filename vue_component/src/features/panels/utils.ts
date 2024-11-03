import { getInitValue } from "@/hooks/propsMapping";
import { computed } from "vue";
import { TSetCommand } from "@/shared/types";
import * as emits from "@/shared/emits";

export function createStyleRefModel(
  styleName: string,
  extraCommandsFunc?: (value: any) => TSetCommand[]
) {
  const initValue = getInitValue<string>(styleName);

  const model = computed({
    get: () => {
      return initValue.value;
    },
    set: (value) => {
      const defaultSetCommand: TSetCommand = {
        propertyName: styleName,
        values: { [styleName]: value },
      };
      const extraCommandss = extraCommandsFunc ? extraCommandsFunc(value) : [];

      emits.setCommand([defaultSetCommand, ...extraCommandss]);
      initValue.value = value;
    },
  });

  return model;
}
