import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CITY_HUBS, CITY_HUBS_WITH_LOCATIONS } from "@/lib/data";
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
    title: `Tempo Traveller fare in ${city.name} | From ₹25/km | Book Now`,

    description:
      `Tempo Traveller on rent in ${city.name}, 9 to 26 seater from ₹25/km, 250 km/day, driver allowance ₹500. Get instant quote on WhatsApp`,

    alternates: {
      canonical: `https://yatratempotraveller.com/${city.slug}`,
    },

    openGraph: {
      title: `Tempo Traveller fare in ${city.name} @25/km | Book Now`,
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

  const city = CITY_HUBS_WITH_LOCATIONS.find(
    (item) => item.slug === slug
  );

  if (!city) {
    notFound();
  }

  return <CityTemplate city={city} />;
}