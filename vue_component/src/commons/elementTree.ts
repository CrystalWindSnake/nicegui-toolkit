import { getElementTreeData } from "@/hooks/globals";

export type TModel = ReturnType<typeof useElementTree>;

export function useElementTree() {
  return {
    treeData: getElementTreeData(),
  };
}
