import { getInitValue } from "@/hooks/propsMapping";
import { computed } from "vue";
import { TCommandEvent } from "@/components/types";
import { sendCommand } from "@/hooks/globals";

export function createStyleRefModel(
  styleName: string,
  extraCommandsFunc?: (value: any) => TCommandEvent[]
) {
  const initValue = getInitValue<string>(styleName);

  const model = computed({
    get: () => {
      return initValue.value;
    },
    set: (value) => {
      const defaultSetCommand: TCommandEvent = {
        action: "style",
        commandType: "set",
        values: { [styleName]: value },
      };
      const extraCommandss = extraCommandsFunc ? extraCommandsFunc(value) : [];

      sendCommand([defaultSetCommand, ...extraCommandss]);
      initValue.value = value;
    },
  });

  return model;
}
