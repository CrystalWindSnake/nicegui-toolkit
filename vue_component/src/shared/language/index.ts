import { computed, ref } from "vue";
import { TLocale } from "./types";
export * from "./types";

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
  if (localeValue === "auto") {
    localeValue = getNavigatorLanguage();
  }

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
    return messageDict.get("en")?.[key] || key.split(".").pop() || "";
  }

  return currentMessage.value[key];
}

function getNavigatorLanguage() {
  const browserLanguage = navigator.language;

  // 如果包含 zh 或 CN 等字眼，则认为是中文，否则为英文
  if (browserLanguage.includes("zh") || browserLanguage.includes("CN")) {
    return "zh";
  }

  return "en";
}
