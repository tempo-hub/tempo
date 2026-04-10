import { ROUTES } from "./data";
import { generateRouteFaqs } from "./faq-data";

export function generateCheapestSlug(origin: string, destination: string) {
  return `${origin}-to-${destination}-cheapest-tempo-traveller-fare`
    .toLowerCase()
    .replace(/\s+/g, "-");
}

// Convert route → cheapest route format
export function generateCheapestRoute(route: any) {
  return {
    ...route,
    slug: generateCheapestSlug(route.origin, route.destination),
    description: `Book cheapest tempo traveller from ${route.origin} to ${route.destination}. Best for group travel at lowest price.`,
    highlights: [
      "Lowest Price Guarantee",
      "Comfortable Travel",
      "Experienced Driver",
    ],
    faqs: generateRouteFaqs(
      route.origin,
      route.destination,
      route.distance,
      route.duration,
    ),
    tollEstimate: Math.round(route.distance * 2), // simple logic
  };
}

export function getAllCheapestRoutes() {
  return ROUTES.map(generateCheapestRoute);
}

export function getVaranasiCheapestRoutes() {
  return ROUTES.filter(
    (route) => route.origin.toLowerCase() === "varanasi",
  ).map(generateCheapestRoute);
}

export function getCheapestRouteBySlug(slug: string) {
  const route = ROUTES.find((route) => {
    const generatedSlug = generateCheapestSlug(route.origin, route.destination);
    return generatedSlug === slug;
  });

  return route ? generateCheapestRoute(route) : null;
}
