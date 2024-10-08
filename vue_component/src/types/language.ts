export type TLocale = "en" | "zh";

export type TLanguageConfig = {
  locale: TLocale;
  messages: Record<TLocale, Record<string, string>>;
};
