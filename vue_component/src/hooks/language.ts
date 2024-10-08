import { computed, ref } from "vue";
import { TLocale } from "@/types/language";

const locale = ref("en" as TLocale);

const messageDict: Map<TLocale, Record<string, string>> = new Map();

const currentMessage = computed(() => {
  const message = messageDict.get(locale.value);
  if (message == undefined) {
    throw new Error(`No message found for locale ${locale.value}`);
  }
  return message;
});

export function setLocale(localeValue: TLocale) {
  locale.value = localeValue;
}

export function addMessage(
  localeValue: TLocale,
  message: Record<string, string>
) {
  messageDict.set(localeValue, message);
}

export function t(key: string) {
  // fallback to english if key is not found in current locale
  if (!currentMessage.value.hasOwnProperty(key)) {
    console.warn(`No message found for key ${key} in locale ${locale.value}`);
    return messageDict.get("en")?.[key] || "";
  }

  return currentMessage.value[key];
}
