export const i18n = {
  defaultLocale: "en",
  locales: ["en", "de", "it", "sk"],
} as const;

declare global {
  type Locale = (typeof i18n)["locales"][number];
}


