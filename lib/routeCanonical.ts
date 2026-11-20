import { ROUTES } from "./data";

const normalizeLocation = (value: string) =>
  value
    .toLowerCase()
    .replace(/\([^)]*\)/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const routeKey = (origin: string, destination: string) =>
  `${normalizeLocation(origin)}|${normalizeLocation(destination)}`;

const keyBySlug = new Map<string, string>();
const primaryByKey = new Map<string, string>();
const secondaryPairSlugs = new Set<string>();
const uniqueSlugs = new Set<string>();

for (const route of ROUTES) {
  const slug = route.slug;

  if (uniqueSlugs.has(slug)) {
    continue;
  }

  uniqueSlugs.add(slug);

  const key = routeKey(route.origin, route.destination);
  keyBySlug.set(slug, key);

  if (!primaryByKey.has(key)) {
    primaryByKey.set(key, slug);
  } else {
    secondaryPairSlugs.add(slug);
  }
}

export function isSecondaryFareSlug(slug: string): boolean {
  return secondaryPairSlugs.has(slug);
}

export function getPrimaryFareSlug(slug: string): string {
  if (!secondaryPairSlugs.has(slug)) {
    return slug;
  }

  const key = keyBySlug.get(slug);

  return key ? primaryByKey.get(key) ?? slug : slug;
}

export function getUniqueFareSlugs(): string[] {
  return [...uniqueSlugs].filter((slug) => !secondaryPairSlugs.has(slug));
}
