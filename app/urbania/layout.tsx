import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Force Urbania on Rent | 12 & 17 Seater Urbania Rental Service",

  description:
    "Book Force Urbania on rent at affordable price. Luxury 12 and 17 seater Urbania rental service for weddings, outstation trips, airport transfers, family tours, and corporate travel.",

  keywords: [
    "Force Urbania on rent",
    "Urbania rental service",
    "12 seater Urbania",
    "17 seater Urbania",
    "Urbania rent per km",
    "Luxury Urbania booking",
    "Urbania for wedding",
    "Urbania for outstation",
  ],
};

export default function UrbaniaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
