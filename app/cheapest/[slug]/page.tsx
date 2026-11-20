import { notFound, permanentRedirect } from "next/navigation";
import { VEHICLES, calculateFare } from "@/lib/data";
import FarePageClient from "./FarePageClient";
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
    ...UTTARAKHAND_CHEAPEST_ROUTES,
    ...MADHYAPRADESH_CHEAPEST_ROUTES,
    ...RAJASTHAN_CHEAPEST_ROUTES,
    ...BIHAR_CHEAPEST_ROUTES,
    ...DELHI_NCR_CHEAPEST_ROUTES,
  ];

  const route = ALL_CHEAPEST_ROUTES.find((r) => r.slug === slug);
  if (!route) return {};

  const fare = calculateFare(route.distance, VEHICLES[0].perKmRate);

  return {
    title: `Cheapest Tempo Traveller ${route.origin} to ${route.destination} | ₹${fare}`,
    description: `Book the cheapest tempo traveller from ${route.origin} to ${route.destination} at ₹${fare}. Fixed price, no hidden charges, 9 to 26 seater AC vehicles.`,
    alternates: {
      canonical: `/cheapest/${route.slug}`,
    },
    openGraph: {
      title: `Cheapest Tempo Traveller ${route.origin} to ${route.destination} | ₹${fare}`,
      description: `Lowest fixed fare from ${route.origin} to ${route.destination} with no hidden charges.`,
      url: `/cheapest/${route.slug}`,
      type: "website",
    },
  };
}

export const dynamic = "force-dynamic";
export const dynamicParams = true;

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
    ...UTTARAKHAND_CHEAPEST_ROUTES,
    ...MADHYAPRADESH_CHEAPEST_ROUTES,
    ...RAJASTHAN_CHEAPEST_ROUTES,
    ...BIHAR_CHEAPEST_ROUTES,
    ...DELHI_NCR_CHEAPEST_ROUTES,
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
      permanentRedirect(`/cheapest/${fixedSlug}`);
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
