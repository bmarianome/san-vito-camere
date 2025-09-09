export default function robots() {
  const baseUrl = new URL("https://centralsanvito.it/").origin;

  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  } as const;
}


