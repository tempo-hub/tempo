import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceTemplate from "@/app/components/templates/ServiceTemplate";
import { parsePerKmFareRoute } from "@/lib/parsePerKmFareRoute";

type PricePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PricePageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = parsePerKmFareRoute(slug);

  if (!route) {
    return {
      title: "Tempo Traveller Per Km Fare",
      robots: { index: false, follow: true },
    };
  }

  const title = `${route.origin} to ${route.destination} Tempo Traveller Per Km Fare`;
  const description = `Check the per km fare for a Tempo Traveller from ${route.origin} to ${route.destination}. Transparent per kilometre rates for 9 to 26 seater AC vehicles, with driver allowance and toll details.`;

  return {
    title,
    description,
    keywords: [
      `tempo traveller per km fare ${route.origin} to ${route.destination}`,
      `${route.origin} to ${route.destination} tempo traveller per km rate`,
      `${route.origin} to ${route.destination} tempo traveller price per km`,
      `${route.origin} to ${route.destination} tempo traveller booking`,
    ],
    alternates: {
      canonical: `/price/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/price/${slug}`,
      type: "website",
    },
  };
}

export default async function Page({ params }: PricePageProps) {
  const { slug } = await params;

  const route =
    parsePerKmFareRoute(slug);

  if (!route) {
    notFound();
  }

  return (
    <ServiceTemplate
      route={route}
    />
  );
}
