import { computed, reactive, readonly, Ref, ref } from "vue";
import { TTargetContext } from "@/components/types";
import * as hookUtils from "@/hooks/utils";
import * as globals from "@/hooks/globals";

export const selectedTarget = ref<HTMLElement | null>(null);

const targetElementContext: {
  props: Map<string, any>;
  styles: Map<string, any>;
  propsCode: Ref<string | null>;
  stylesCode: Ref<string | null>;
  classes: Ref<string[]>;
} = {
  props: reactive(new Map()),
  styles: reactive(new Map()),
  propsCode: ref(null),
  stylesCode: ref(null),
  classes: ref([] as string[]),
};

const updateFlagMap = new Map<string, Ref<Symbol>>();

export function getSelectedTarget() {
  return selectedTarget;
}

export function setSelectedTarget(elementId: number) {
  const target = hookUtils.getElementById(
    elementId,
    globals.getSelectorConfig()
  );

  selectedTarget.value = target;

  hookUtils.scrollElementIntoView(target);
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

  if (context.propsCode !== undefined) {
    targetElementContext.propsCode.value = context.propsCode;
  }

  if (context.stylesCode !== undefined) {
    targetElementContext.stylesCode.value = context.stylesCode;
  }

  if (context.classes !== undefined) {
    targetElementContext.classes.value = context.classes;
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

export function useHasSelectedTarget() {
  return computed(() => selectedTarget.value !== null);
}

export function useTargetTypeName() {
  return computed(() => {
    if (selectedTarget.value === null) {
      return null;
    }

    return hookUtils.getElementType(
      selectedTarget.value,
      globals.getSelectorConfig()
    );
  });
}

function triggerAllUpdateFlags() {
  for (const updateFlag of updateFlagMap.values()) {
    updateFlag.value = Symbol(updateFlag.value.description);
  }
}
