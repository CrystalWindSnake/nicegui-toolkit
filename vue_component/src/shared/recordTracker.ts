import { readonly, ref } from "vue";

const _hasChanged = ref(false);

export const hasChanged = readonly(_hasChanged);

export function setHasChanged(value: boolean) {
  _hasChanged.value = value;
}
