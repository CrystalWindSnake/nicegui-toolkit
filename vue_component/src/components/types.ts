export type TSelectorConfig = {
  selectors: string;
  idPrefix: string;
  elementTypePrefix: string;
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
