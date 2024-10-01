import { Ref } from "vue";

export function sizeOnChanged(propertyModel: Ref<string | undefined>) {
  return (number: string | undefined, unit: string | undefined) => {
    if (unit === "auto") {
      propertyModel.value = "auto";
      return;
    }

    propertyModel.value = `${number}${unit}`;
  };
}
