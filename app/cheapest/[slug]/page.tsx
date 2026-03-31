import { notFound } from "next/navigation";
import { ROUTES, VEHICLES, calculateFare } from "@/lib/data";
import FarePageClient from "./FarePageClient";

// SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const route = ROUTES.find((r) => r.slug === params.slug);
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

export default function Page({ params }: { params: { slug: string } }) {
  const route = ROUTES.find((r) => r.slug === params.slug);

  if (!route) return notFound();

  const selectedVehicle = VEHICLES[0];
  const fare = calculateFare(route.distance, selectedVehicle.perKmRate);

  return (
    <FarePageClient 
      params={params}
      route={route}
      fare={fare}
      selectedVehicle={selectedVehicle}
    />
  );
}