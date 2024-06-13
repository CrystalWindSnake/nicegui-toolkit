export function buildGetter(target: HTMLElement) {
  function getStyle(name: string) {
    const styles = window.getComputedStyle(target, null);

    return styles.getPropertyValue(name);
  }

  return {
    getStyle,
  };
}
