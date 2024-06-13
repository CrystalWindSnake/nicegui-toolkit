import { TCommnadEvent, sendCommand } from "@/hooks/events";
import { getInitValue } from "@/hooks/propsMapping";
import { computed } from "vue";

export function createStyleRefModel(
  styleName: string,
  extraCommandsFunc?: (value: any) => TCommnadEvent[]
) {
  const initValue = getInitValue<string>(styleName);

  const model = computed({
    get: () => {
      return initValue.value;
    },
    set: (value) => {
      const defaultSetCommand: TCommnadEvent = {
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
