import { Metadata } from "next";
import CheapestFaresClient from "./cheapest-fares-client";
import { FAQPage } from "../components/schemas";
import { GLOBAL_FAQS } from "@/lib/faq-data";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Cheapest Tempo Traveller Fares by Route | Compare & Book",
  description:
    "Compare cheapest tempo traveller fares for 300+ routes across Varanasi, Prayagraj, Ayodhya, Lucknow and more. Find the lowest fixed price for your group.",
  keywords: [
    "cheapest tempo traveller fares",
    "lowest tempo traveller price",
    "tempo traveller route fares",
    "cheap tempo traveller booking",
    "Varanasi to Ayodhya cheapest fare",
    "Prayagraj to Varanasi tempo traveller fare",
  ],
  alternates: {
    canonical: "/cheapests",
  },
  openGraph: {
    title: "Cheapest Tempo Traveller Fares by Route | Compare & Book",
    description:
      "Search and compare the cheapest tempo traveller fares across 300+ routes in India.",
    url: "/cheapests",
    type: "website",
  },
};

export default function CheapestFaresPage() {
  return (
    <>
      <CheapestFaresClient />
      
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
