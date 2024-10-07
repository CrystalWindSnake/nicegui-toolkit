import { getInitValue } from "@/hooks/propsMapping";
import { computed } from "vue";
import { TSetCommand } from "@/components/types";
import { sendSetCommand } from "@/hooks/globals";

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

      sendSetCommand([defaultSetCommand, ...extraCommandss]);
      initValue.value = value;
    },
  });

  return model;
}
