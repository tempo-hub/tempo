import { MetadataRoute } from "next";
import { ROUTES } from "@/lib/data";
import {
  PRAYAGRAJ_CHEAPEST_ROUTES,
  AYODHYA_CHEAPEST_ROUTES,
  VARANASI_CHEAPEST_ROUTES,
  UTTARAKHAND_CHEAPEST_ROUTES,
  MADHYAPRADESH_CHEAPEST_ROUTES,
  RAJASTHAN_CHEAPEST_ROUTES,
  BIHAR_CHEAPEST_ROUTES,
  DELHI_NCR_CHEAPEST_ROUTES,
} from "@/lib/cheapestRoute";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yatratempotraveller.com";

  // Fare Routes
  const fareUrls = ROUTES.map((route) => ({
    url: `${baseUrl}/fare/${route.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Cheapest Routes
  const ALL_CHEAPEST_ROUTES = [
    ...PRAYAGRAJ_CHEAPEST_ROUTES,
    ...AYODHYA_CHEAPEST_ROUTES,
    ...VARANASI_CHEAPEST_ROUTES,
    ...UTTARAKHAND_CHEAPEST_ROUTES,
    ...MADHYAPRADESH_CHEAPEST_ROUTES,
    ...RAJASTHAN_CHEAPEST_ROUTES,
    ...BIHAR_CHEAPEST_ROUTES,
    ...DELHI_NCR_CHEAPEST_ROUTES,
  ];

  const cheapestUrls = ALL_CHEAPEST_ROUTES.map((route) => ({
    url: `${baseUrl}/cheapest/${route.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Per KM Fare URLs
  const perKmFareUrls = ALL_CHEAPEST_ROUTES.map((route) => ({
    url: `${baseUrl}/price/${route.origin
      .toLowerCase()
      .replace(/\s+/g, "-")}-to-${route.destination
      .toLowerCase()
      .replace(/\s+/g, "-")}-tempo-traveller-per-km-fare`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Urbania URLs
  const urbaniaUrls = ALL_CHEAPEST_ROUTES.map((route) => ({
    url: `${baseUrl}/urbania/${route.origin
      .toLowerCase()
      .replace(/\s+/g, "-")}-to-${route.destination
      .toLowerCase()
      .replace(/\s+/g, "-")}-urbania-fare`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Static Pages
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/fares`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cheapest`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/per-km-fare`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/urbania`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/routes`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  return [
    ...staticUrls,
    ...fareUrls,
    ...cheapestUrls,
    ...perKmFareUrls,
    ...urbaniaUrls,
  ];
}
