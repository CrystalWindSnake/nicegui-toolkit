export type TSelectorConfig = {
  selectors: string;
  idPrefix: string;
  elementTypePrefix: string;
  sourceCodePrefix: string;
};

export type TTargetContext = {
  props: Record<string, any>;
  styles: Record<string, any>;
  propsCode: string;
  stylesCode: string;
  classes: string[];
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

export type TSetCommand = {
  propertyName: string;
  values: Record<string, any>;
};

export type TResetCommand = {
  propertyName: string;
  type: "style" | "props" | "classes";
};

type TElementTreeItem = {
  key: string | number;
  title: string;
  children?: TElementTreeItem[];
};

export type TElementTreeData = TElementTreeItem[];
