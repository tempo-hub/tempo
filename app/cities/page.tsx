// app/cities/page.tsx

import type { Metadata } from "next";
import CitiesClient from "./CitiesClient";

export const metadata: Metadata = {
  title: "Tempo Traveller Hire Across India | 20+ Cities",

  description:
    "Find Yatra Tempo Traveller services in 20+ cities across India. Book luxury tempo travellers for family trips, corporate events, pilgrimages, and group tours.",

  keywords:
    "tempo traveller cities, yatra tempo traveller, tempo traveller hire, group travel India, luxury tempo traveller",

  alternates: {
    canonical: "/cities",
  },

  openGraph: {
    title: "Tempo Traveller Hire Across India | 20+ Cities",

    description:
      "Book Yatra Tempo Traveller rentals across 20+ cities in India. Premium group travel services with guaranteed comfort.",

    url: "/cities",

    siteName: "Yatra Tempo Traveller",

    images: [
      {
        url: "https://yatratempotraveller.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_IN",
    type: "website",
  },
};

export default function CitiesPage() {
  return <CitiesClient />;
}