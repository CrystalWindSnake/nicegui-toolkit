import { getContextCode } from "@/hooks/targetElementContext";

export type TModel = ReturnType<typeof useTargetContextDesc>;

export function useTargetContextDesc() {
  return {
    code: getContextCode(),
  };
}
