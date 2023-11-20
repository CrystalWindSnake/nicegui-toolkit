export function buildGetter(target: HTMLElement) {
  function getStyle(name: string) {
    const styles = window.getComputedStyle(target, null);

    return styles.getPropertyValue(name);
  }

  function getFlexBoxInfo() {
    const result = {
      isFlex: false,
      direction: "",
      justifyContent: "",
      alignItem: "",
    };

    if (!target) {
      return result;
    }

    result.isFlex = getStyle("display") === "flex";

    result.direction = getStyle("flex-direction");

    return result;
  }

  return {
    getStyle,
    getFlexBoxInfo,
  };
}
