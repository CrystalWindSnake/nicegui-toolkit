type TElementTreeItem = {
  key: string | number;
  title: string;
  children?: TElementTreeItem[];
};

export type TElementTreeData = TElementTreeItem[];
