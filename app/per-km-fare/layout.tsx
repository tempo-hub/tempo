import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tempo Traveller Per Km Fare | 9 to 26 Seater Rates",
  description:
    "Check tempo traveller per km fare for 9, 12, 16, 20 and 26 seater vehicles. Compare route-wise per kilometre rates and book with transparent pricing.",
  keywords: [
    "tempo traveller per km fare",
    "tempo traveller per km rate",
    "tempo traveller per kilometer price",
    "9 seater tempo traveller per km rate",
    "12 seater tempo traveller per km rate",
    "tempo traveller rate per km Varanasi",
  ],
  alternates: {
    canonical: "/per-km-fare",
  },
  openGraph: {
    title: "Tempo Traveller Per Km Fare | 9 to 26 Seater Rates",
    description:
      "Compare route-wise tempo traveller per kilometre fares for all seating capacities.",
    url: "/per-km-fare",
    type: "website",
  },
};

export default function PerKmFareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
