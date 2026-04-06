// helper functions for translation-aware routing and slugs

// simple slugify that works for Arabic/English strings
export function slugify(text) {
  return text
    .toString()
    .normalize("NFD") // split accented letters
    .replace(/\p{Diacritic}/gu, "") // remove diacritics
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // spaces to hyphens
    .replace(/[^\w\-\u0600-\u06FF]+/g, "") // remove non-word (allow Arabic letters)
    .replace(/\-\-+/g, "-"); // collapse dashes
}

// list of top‑level route keys; used for translation and lookups
export const routeKeys = [
  "products",
  "services",
  "about",
  "news",
  "contact",
  "PrivacyPolicy",
  "TermsAndConditions",
  "FAQ",
  "AllClients",
];

export function getRoutePath(key, t, lang) {
  // returns slugified translation of path_<key>
  const p = t(`path_${key}`, lang ? { lng: lang } : undefined);
  const slug = slugify(p);
  return slug.startsWith("/") ? slug.slice(1) : slug;
}

export function getProductsBasePath(t, lang) {
  return getRoutePath("products", t, lang);
}

export function findRouteKeyFromSlug(slug, t) {
  for (const key of routeKeys) {
    const en = slugify(t(`path_${key}`, { lng: "en" }));
    const ar = slugify(t(`path_${key}`, { lng: "ar" }));
    if (slug === en || slug === ar) {
      return key;
    }
  }
  return undefined;
}

export function getProductSlug(product, lang, t) {
  // always return the English slug, regardless of language
  return product.slug;
}
