import { getContextCode } from "@/shared/targetElementContext";

export type TModel = ReturnType<typeof useTargetContextDesc>;

export function useTargetContextDesc() {
  return {
    code: getContextCode(),
  };
}
