import { TElementTreeData } from "./types";
import * as utils from "./utils";
import { getConfigs } from "./configs";
import { ref, readonly } from "vue";

let treeData: TElementTreeData;
const hoverElement = ref(null as HTMLElement | null);

export type TModel = ReturnType<typeof useElementTree>;
export function init(data: TElementTreeData) {
  treeData = data;
}

export function useElementTree() {
  return {
    treeData,
  };
}

export function useHoverElement() {
  return readonly(hoverElement);
}

export function setHoverElement(elementId: number) {
  hoverElement.value = utils.getElementById(elementId, getConfigs());
}

export function resetHoverElement() {
  hoverElement.value = null;
}
