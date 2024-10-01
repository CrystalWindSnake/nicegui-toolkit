import { computed, reactive } from "vue";

const targetElementContext: {
  props: Map<string, any>;
  styles: Map<string, any>;
} = {
  props: reactive(new Map()),
  styles: reactive(new Map()),
};

export function updateCurrentTargetContext(context: {
  props?: Record<string, any>;
  styles?: Record<string, any>;
}) {
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
}

export function useHasChanged(key: string) {
  return computed(() => targetElementContext.styles.has(key));
}
