import { Metadata } from "next";
import FaresClient from "./fares-client";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Tempo Traveller Price List | 9 to 26 Seater Fare Chart",
  description:
    "Compare tempo traveller prices and per km rates for 9, 12, 16, 20 and 26 seater vehicles. Get transparent fare estimates for Varanasi and outstation routes.",
  keywords: [
    "tempo traveller price list",
    "tempo traveller fare chart",
    "9 seater tempo traveller price",
    "12 seater tempo traveller price",
    "16 seater tempo traveller fare",
    "tempo traveller rental rates",
  ],
  alternates: {
    canonical: "/fares",
  },
  openGraph: {
    title: "Tempo Traveller Price List | 9 to 26 Seater Fare Chart",
    description:
      "Compare tempo traveller prices and per km rates by seating capacity.",
    url: "/fares",
    type: "website",
  },
};

export default function FaresPage() {
  return (
    <>
      <FaresClient />
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQPage(GLOBAL_FAQS)),
        }}
      />
    </>
  );
}

import { FAQPage } from "../components/schemas";
import { GLOBAL_FAQS } from "@/lib/faq-data";
