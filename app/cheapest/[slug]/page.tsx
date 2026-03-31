import FarePage from "./FarePage";
import { calculateFare, ROUTES, VEHICLES } from "@/lib/data";

export default function Page({ params }: { params: { slug: string } }) {
  return <FarePage params={params} />;
}

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
    description: `Book tempo traveller from ${route.origin} to ${route.destination} at ₹${fare}.`,
  };
}
