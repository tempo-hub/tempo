import { notFound } from "next/navigation";
import { ROUTES, VEHICLES, calculateFare } from "@/lib/data";
import FarePageClient from "./FarePageClient";

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
  const route = ROUTES.find((r) => r.slug === slug);

  if (!route) {
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
