import { computed, reactive, readonly, Ref, ref } from "vue";
import { TTargetContext } from "@/components/types";

export const selectedTarget = ref<HTMLElement | null>(null);

const targetElementContext: {
  props: Map<string, any>;
  styles: Map<string, any>;
  propsCode: string | null;
  stylesCode: string | null;
} = {
  props: reactive(new Map()),
  styles: reactive(new Map()),
  propsCode: null,
  stylesCode: null,
};

const updateFlagMap = new Map<string, Ref<Symbol>>();

export function getSelectedTarget() {
  return readonly(selectedTarget);
}

export function updateTargetElement(element: HTMLElement | null) {
  selectedTarget.value = element;
  triggerAllUpdateFlags();
}

export function useUpdateFlag(propertyName: string) {
  if (updateFlagMap.has(propertyName)) {
    throw new Error(`update flag for ${propertyName} already exists`);
  }

  const updateFlag = ref(Symbol(propertyName));
  updateFlagMap.set(propertyName, updateFlag);

  return readonly(updateFlag);
}

export function triggerUpdateFlag(propertyName: string) {
  const updateFlag = updateFlagMap.get(propertyName);
  if (!updateFlag) {
    throw new Error(`update flag for ${propertyName} does not exist`);
  }

  updateFlag.value = Symbol(propertyName);
}

export function getTargetContext() {
  return readonly(targetElementContext);
}

type TUpdateTargetContext = Partial<TTargetContext>;

export function updateCurrentTargetContext(context: TUpdateTargetContext) {
  targetElementContext.props.clear();
  targetElementContext.styles.clear();

  if (context.props) {
    for (const [key, value] of Object.entries(context.props)) {
      targetElementContext.props.set(key, value);
    }
  }

  if (context.styles) {
    for (const [key, value] of Object.entries(context.styles)) {
      targetElementContext.styles.set(key, value);
    }
  }

  if (context.propsCode) {
    targetElementContext.propsCode = context.propsCode;
  }

  if (context.stylesCode) {
    targetElementContext.stylesCode = context.stylesCode;
  }

  triggerAllUpdateFlags();
}

export function getContextCode() {
  return {
    props: targetElementContext.propsCode,
    styles: targetElementContext.stylesCode,
  };
}

export function useHasChanged(key: string) {
  return computed(() => targetElementContext.styles.has(key));
}

function triggerAllUpdateFlags() {
  for (const updateFlag of updateFlagMap.values()) {
    updateFlag.value = Symbol(updateFlag.value.description);
  }
}
