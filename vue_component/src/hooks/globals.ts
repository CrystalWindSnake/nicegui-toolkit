import { Ref } from "vue";

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
