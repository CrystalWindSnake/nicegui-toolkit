import {
  Ref,
  computed,
  MaybeRefOrGetter,
  toValue,
  WritableComputedRef,
  ComputedRef,
} from "vue";

export function buildRefGetter(
  targetRef: MaybeRefOrGetter<HTMLElement | null>
) {
  function getStyle(name: MaybeRefOrGetter<string>) {
    const result = computed(() => {
      const target = toValue(targetRef);
      if (target) {
        const styles = window.getComputedStyle(target, null);
        return styles.getPropertyValue(toValue(name));
      }

      return "";
    });

    return result;
  }

  function getFlexBoxInfo(
    displayStyle?: WritableComputedRef<string> | ComputedRef<string>
  ) {
    const displayModel = displayStyle ?? getStyle("display");

    const result = computed(() => {
      const target = toValue(targetRef);
      if (!target) {
        return {
          isFlex: false,
          direction: "",
          justifyContent: "",
          alignItem: "",
        };
      }

      return {
        isFlex: displayModel.value === "flex",
        direction: getStyle("flex-direction").value,
        justifyContent: getStyle("justify-content").value,
        alignItem: getStyle("align-items").value,
      };
    });

    return result;
  }

  function getParentFlexBoxInfo() {
    const result = computed(() => {
      const target = toValue(targetRef);

      if (!target || !target.parentElement) {
        return {
          isFlex: false,
          direction: "",
        };
      }

      const parentGetter = buildRefGetter(target.parentElement);
      const info = parentGetter.getFlexBoxInfo();

      return {
        isFlex: info.value.isFlex,
        direction: info.value.direction,
      };
    });

    return result;
  }

  return {
    getStyle,
    getFlexBoxInfo,
    getParentFlexBoxInfo,
  };
}
