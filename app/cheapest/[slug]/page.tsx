import { notFound } from "next/navigation";
import { ROUTES, VEHICLES, calculateFare } from "@/lib/data";
import FarePageClient from "./FarePageClient";
import {
  generateCheapestSlug,
  generateCheapestRoute,
} from "@/lib/cheapestRoutes";
import {
  PRAYAGRAJ_CHEAPEST_ROUTES,
  AYODHYA_CHEAPEST_ROUTES,
  VARANASI_CHEAPEST_ROUTES,
} from "@/lib/cheapestRoute";

// SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = ROUTES.find((r) => r.slug === slug);
  if (!route) return {};

  const fare = calculateFare(route.distance, VEHICLES[0].perKmRate);

  return {
    title: `${route.origin} to ${route.destination} Tempo Traveller | ₹${fare}`,
    description: `Book tempo traveller from ${route.origin} to ${route.destination} at cheapest price ₹${fare}. No hidden charges. Call now!`,
    alternates: {
      canonical: `https://yatratempotraveller.com/cheapest/${route.slug}`,
    },
    openGraph: {
      title: `${route.origin} to ${route.destination} Tempo Traveller`,
      description: `Affordable tempo traveller booking at ₹${fare}`,
      url: `https://yatratempotraveller.com/cheapest/${route.slug}`,
      type: "website",
    },
  };
}

// Generate static params for static site generation
export async function generateStaticParams() {
  return ROUTES.map((route) => ({
    slug: route.slug,
  }));
}

// Page component
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const ALL_CHEAPEST_ROUTES = [
    ...PRAYAGRAJ_CHEAPEST_ROUTES,
    ...AYODHYA_CHEAPEST_ROUTES,
    ...VARANASI_CHEAPEST_ROUTES,
  ];

  const route = ALL_CHEAPEST_ROUTES.find((r) => r.slug === slug);

  if (!route) {
    notFound();
  }

  const data = generateCheapestRoute(route);

  const selectedVehicle = VEHICLES[0];
  const fare = calculateFare(route.distance, selectedVehicle.perKmRate);

  return (
    <FarePageClient
      route={data}
      fare={fare}
      selectedVehicle={selectedVehicle}
    />
  );
}
