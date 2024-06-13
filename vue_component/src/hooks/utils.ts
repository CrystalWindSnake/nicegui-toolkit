import { MaybeRefOrGetter, isRef, ref, toValue } from "vue";

export function makeRef<T>(value: MaybeRefOrGetter<T>) {
  if (isRef(value)) {
    return value;
  }

  return ref(toValue(value));
}
