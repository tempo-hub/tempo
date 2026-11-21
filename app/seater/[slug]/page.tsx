import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VEHICLES } from "@/lib/data";
import VehicleTemplate from "../../components/templates/VehicleTemplate";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return VEHICLES.map((vehicle) => ({
    slug: `${vehicle.capacity}-seater-tempo-traveller`,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = VEHICLES.find(
    (item) => `${item.capacity}-seater-tempo-traveller` === slug,
  );

  if (!vehicle) {
    return { title: "Seater Tempo Traveller" };
  }

  return {
    title: `${vehicle.capacity} Seater Tempo Traveller on Rent`,
    description: `Book a ${vehicle.capacity} seater Tempo Traveller in Varanasi. AC vehicle, spacious seating and transparent fares from ₹${vehicle.perKmRate}/km.`,
    alternates: {
      canonical: `/${vehicle.slug}`,
    },
  };
}

export default async function SeaterPage({ params }: Props) {
  const { slug } = await params;
  const vehicle = VEHICLES.find(
    (item) => `${item.capacity}-seater-tempo-traveller` === slug,
  );

  if (!vehicle) {
    notFound();
  }

  return <VehicleTemplate vehicle={vehicle} />;
}
