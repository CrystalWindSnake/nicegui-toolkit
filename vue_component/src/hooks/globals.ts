import { Ref, ref } from "vue";

const globalsObject = {
  selectTarget: null as Ref<HTMLElement | null> | null,
};

type TGlobalsObject = typeof globalsObject;

type TNotNull = {
  [name in keyof TGlobalsObject]: NonNullable<TGlobalsObject[name]>;
};

export function setGlobals(selectTarget: Ref<HTMLElement | null>) {
  globalsObject.selectTarget = selectTarget;
}

export function getGlobals() {
  return globalsObject as TNotNull;
}

// target select mouse events
let EXECUTING_FLAG = ref(false);

export function setExecutingFlag(executing?: boolean) {
  EXECUTING_FLAG.value = executing ?? true;
}

export function getExecutingFlag() {
  return EXECUTING_FLAG;
}
