export type TLocale = "en" | "zh" | "auto";

export type TLanguageConfig = {
  locale: TLocale;
  messages: Record<TLocale, Record<string, string>>;
};
