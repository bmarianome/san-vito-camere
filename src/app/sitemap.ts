import { i18n } from "i18n.config";

export default function sitemap() {
  const baseUrl = new URL("https://centralsanvito.it/").origin;

  const entries = i18n.locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1,
  }));

  return entries;
}


