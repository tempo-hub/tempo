import {
  PRAYAGRAJ_CHEAPEST_ROUTES,
  AYODHYA_CHEAPEST_ROUTES,
  VARANASI_CHEAPEST_ROUTES,
  UTTARAKHAND_CHEAPEST_ROUTES,
  MADHYAPRADESH_CHEAPEST_ROUTES,
  RAJASTHAN_CHEAPEST_ROUTES,
  BIHAR_CHEAPEST_ROUTES,
  DELHI_NCR_CHEAPEST_ROUTES,
} from "./cheapestRoute";

export function parsePerKmFareRoute(slug: string) {
  const cleanedSlug = slug.replace("-tempo-traveller-per-km-fare", "");

  const [startCity, destinationCity] = cleanedSlug.split("-to-");

  const ALL_ROUTES = [
    ...PRAYAGRAJ_CHEAPEST_ROUTES,
    ...AYODHYA_CHEAPEST_ROUTES,
    ...VARANASI_CHEAPEST_ROUTES,
    ...UTTARAKHAND_CHEAPEST_ROUTES,
    ...MADHYAPRADESH_CHEAPEST_ROUTES,
    ...RAJASTHAN_CHEAPEST_ROUTES,
    ...BIHAR_CHEAPEST_ROUTES,
    ...DELHI_NCR_CHEAPEST_ROUTES,
  ];

  const matchedRoute = ALL_ROUTES.find((route) => {

    const generatedSlug =
      `${route.origin.toLowerCase().replace(/\s+/g, "-")}-to-${route.destination
        .toLowerCase()
        .replace(/\s+/g, "-")}`;

    return generatedSlug === `${startCity}-to-${destinationCity}`;
  });

  if (!matchedRoute) {
    return null;
  }

  return {
    ...matchedRoute,

    origin:
      matchedRoute.origin,

    destination:
      matchedRoute.destination,

    vehicle:
      "Tempo Traveller",

    slug,
  };
}
