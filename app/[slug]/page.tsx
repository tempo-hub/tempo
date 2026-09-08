import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CITY_HUBS } from "@/lib/data";
import CityTemplate from "../components/templates/CityTemplate";

interface CityPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return CITY_HUBS.map((city) => ({
    slug: city.slug,
  }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { slug } = await params;

  const city = CITY_HUBS.find(
    (item) => item.slug === slug
  );

  if (!city) {
    return {
      title: "Tempo Traveller | Yatra Tempo Traveller",
    };
  }

  return {
    title: `Tempo Traveller in ${city.name} | Yatra Tempo Traveller`,

    description:
      `Hire a Tempo Traveller in ${city.name}, ${city.state} for family trips, sightseeing, pilgrimage tours, weddings, corporate travel and outstation journeys.`,

    alternates: {
      canonical: `https://yatratempotraveller.com/${city.slug}`,
    },

    openGraph: {
      title: `Tempo Traveller in ${city.name} | Yatra Tempo Traveller`,
      description: city.desc,
      url: `https://yatratempotraveller.com/${city.slug}`,
      siteName: "Yatra Tempo Traveller",
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function CityPage({
  params,
}: CityPageProps) {
  const { slug } = await params;

  const city = CITY_HUBS.find(
    (item) => item.slug === slug
  );

  if (!city) {
    notFound();
  }

  return <CityTemplate city={city} />;
}