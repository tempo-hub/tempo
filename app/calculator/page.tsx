import { Metadata } from "next";
import CalculatorClient from "./calculator-client";

export const metadata: Metadata = {
  title: "Tempo Traveller Fare Calculator | Varanasi",
  description:
    "Use our Tempo Traveller Fare Calculator to estimate your group trip cost from Varanasi. Select your vehicle seating capacity and travel distance to calculate an estimated fare.",

  keywords: [
    "tempo traveller fare calculator",
    "tempo traveller trip cost calculator",
    "tempo traveller rental cost calculator",
    "Varanasi group travel fare calculator",
  ],

  alternates: {
    canonical: "/calculator",
  },

  openGraph: {
    title: "Tempo Traveller Fare Calculator | Varanasi",
    description:
      "Estimate your Tempo Traveller rental cost from Varanasi based on vehicle capacity and travel distance.",
    url: "/calculator",
    type: "website",
  },
};

export default function CalculatorPage() {
  return (
    <>
      <CalculatorClient />

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
