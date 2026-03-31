import { notFound } from "next/navigation";
import { ROUTES, VEHICLES, calculateFare } from "@/lib/data";
import FarePageClient from "./FarePageClient";

// SEO Metadata - params is now a Promise
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Await the params Promise
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

// Page component - params is now a Promise
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // Await the params Promise
  const route = ROUTES.find((r) => r.slug === slug);

  if (!route) return notFound();

  const selectedVehicle = VEHICLES[0];
  const fare = calculateFare(route.distance, selectedVehicle.perKmRate);

  return (
    <FarePageClient
      params={{ slug }} // Pass the slug as an object
      route={route}
      fare={fare}
      selectedVehicle={selectedVehicle}
    />
  );
}
