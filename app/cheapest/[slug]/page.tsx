import { notFound, redirect } from "next/navigation";
import { VEHICLES, calculateFare } from "@/lib/data";
import FarePageClient from "./FarePageClient";
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

  const ALL_CHEAPEST_ROUTES = [
    ...PRAYAGRAJ_CHEAPEST_ROUTES,
    ...AYODHYA_CHEAPEST_ROUTES,
    ...VARANASI_CHEAPEST_ROUTES,
  ];

  const route = ALL_CHEAPEST_ROUTES.find((r) => r.slug === slug);
  if (!route) return {};

  const fare = calculateFare(route.distance, VEHICLES[0].perKmRate);

  return {
    title: `${route.origin} to ${route.destination} Tempo Traveller | ₹${fare}`,
    description: `Book tempo traveller from ${route.origin} to ${route.destination} at cheapest price ₹${fare}. No hidden charges.`,
    alternates: {
      canonical: `https://yatratempotraveller.com/cheapest/${route.slug}`,
    },
  };
}

// Generate static params for static site generation
export async function generateStaticParams() {
  const ALL_CHEAPEST_ROUTES = [
    ...PRAYAGRAJ_CHEAPEST_ROUTES,
    ...AYODHYA_CHEAPEST_ROUTES,
    ...VARANASI_CHEAPEST_ROUTES,
  ];

  return ALL_CHEAPEST_ROUTES.map((route) => ({
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
    // Fix old slug automatically
    const fixedSlug = slug.replace(
      "-tempo-traveller-fare",
      "-cheapest-tempo-traveller-fare",
    );

    const fixedRoute = ALL_CHEAPEST_ROUTES.find((r) => r.slug === fixedSlug);

    if (fixedRoute) {
      redirect(`/cheapest/${fixedSlug}`);
    }

    notFound();
  }

  const selectedVehicle = VEHICLES[0];
  const fare = calculateFare(route.distance, selectedVehicle.perKmRate);

  return (
    <FarePageClient
      route={route}
      fare={fare}
      selectedVehicle={selectedVehicle}
    />
  );
}
