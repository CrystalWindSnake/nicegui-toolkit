export type TSelectorConfig = {
  selectors: string;
  idPrefix: string;
  elementTypePrefix: string;
};

export type TTargetContext = {
  props: Record<string, any>;
  styles: Record<string, any>;
};

type TFlexInfo = {
  isFlex: boolean;
  direction: string | null;
};

export type TSelectedChangeEventArgs = {
  id: number | null;
  parentBoxId: number | null;
  flexInfo: TFlexInfo;
  parentFlexInfo: TFlexInfo;
};

export type TAction = "style" | "props" | "classes";
export type TCommandType = "set" | "del";

export type TCommandEvent = {
  action: TAction;
  commandType: TCommandType;
  values: Record<string, any>;
};
