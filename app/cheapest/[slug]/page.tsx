import { ROUTES, calculateFare } from "@/lib/data";
import { notFound } from "next/navigation";
import { FareCalculator } from "../../components/fare-calculator";
import { FareTable } from "../../components/fare-table";
import { VehicleGallery } from "../../components/vehicle-gallery";
import {
  TrustSection,
  FAQSection,
  FareInclusions,
  ExclusionsNotice,
  SafetySection,
  HowItWorks,
  OfficeLocation,
  TrustBadges,
  ExperienceSection,
  TestimonialsSection,
  SocialProof,
} from "../../components/sections";

import {
  BreadcrumbList,
  LocalBusiness,
  Offer,
  FAQPage,
} from "../../components/schemas";

import { MapPin, Clock, ShieldCheck, Star, Phone } from "lucide-react";

import { Metadata } from "next";

export const revalidate = 86400;

// Static Routes Generation
export async function generateStaticParams() {
  return ROUTES.map((route) => ({
    slug: route.slug,
  }));
}

// SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = ROUTES.find((r) => r.slug === slug);

  if (!route) return {};

  const fare = calculateFare(route.distance, 18);

  const title = `Cheapest ${route.origin} to ${route.destination} Tempo Traveller Fare @ ₹${fare} | Book Now`;

  const description = `Book cheapest tempo traveller from ${route.origin} to ${route.destination} starting at ₹${fare}. AC vehicles, experienced drivers, no hidden charges. Call now for best deals.`;

  return {
    title,
    description,
    keywords: [
      `${route.origin} to ${route.destination} tempo traveller`,
      `tempo traveller fare ${route.origin}`,
      `tempo traveller booking ${route.destination}`,
      `cheap tempo traveller india`,
    ],
    alternates: {
      canonical: `https://yatratempotraveller.com/cheapest/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://yatratempotraveller.com/cheapest/${slug}`,
      siteName: "Yatra Tempo Traveller",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
  };
}

// Main Page
export default async function FarePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = ROUTES.find((r) => r.slug === slug);

  if (!route) notFound();

  const fare = calculateFare(route.distance, 18);

  const breadcrumbs = [
    { name: "Home", item: "https://yatratempotraveller.com" },
    {
      name: "Cheapest Routes",
      item: "https://yatratempotraveller.com/cheapest",
    },
    {
      name: `${route.origin} to ${route.destination}`,
      item: `https://yatratempotraveller.com/cheapest/${route.slug}`,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(BreadcrumbList(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQPage(route.faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            Offer(
              fare,
              `${route.origin} to ${route.destination} Tempo Traveller`,
            ),
          ),
        }}
      />

      {/* HERO SECTION */}
      <section className="pt-12 pb-20 bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mx-auto px-4 text-center space-y-6">
            {/* Rating */}
            <div className="flex justify-center items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
              <span className="text-xs font-bold ml-2">
                4.9/5 Customer Rating
              </span>
            </div>

            {/* Badge */}
            <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-bold">
              Cheapest Price Guarantee
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              {route.origin} to {route.destination}
              <br />
              <span className="text-primary">Tempo Traveller Fare ₹{fare}</span>
            </h1>

            {/* Info */}
            <div className="flex flex-wrap justify-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-sm font-bold">
                <MapPin className="h-4 w-4 text-primary" />
                {route.distance} km
              </div>

              <div className="flex items-center gap-2 text-sm font-bold">
                <Clock className="h-4 w-4 text-primary" />
                {route.duration}
              </div>

              <div className="flex items-center gap-2 text-sm font-bold">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Verified Drivers
              </div>
            </div>

            {/* CTA BUTTON */}
            <div className="flex justify-center gap-4 pt-4">
              <a
                href="tel:+919999999999"
                className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="border px-6 py-3 rounded-xl font-bold hover:bg-gray-100"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-10">
            <FareCalculator route={route} />
          </div>
        </div>
      </section>

      {/* TRUST */}
      <TrustBadges origin={route.origin} />
      <HowItWorks />

      {/* FARE SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-3xl font-black">Tempo Traveller Price List</h2>
            <p className="text-muted-foreground mt-2">
              Transparent pricing from {route.origin} to {route.destination}
            </p>
          </div>

          <FareTable route={route} />
          <ExclusionsNotice origin={route.origin} />
        </div>

        {/* Sidebar */}
        <div className="bg-slate-50 p-8 rounded-3xl border space-y-6">
          <h4 className="text-xl font-bold">Fare Includes</h4>
          <FareInclusions />

          <div className="border-t pt-4 text-sm">
            <p className="font-bold text-primary">No Hidden Charges</p>
            <p className="text-muted-foreground">
              What you see is what you pay.
            </p>
          </div>
        </div>
      </section>

      {/* EXTRA SECTIONS */}
      <ExperienceSection origin={route.origin} />
      <SafetySection origin={route.origin} />

      <section className="py-24 bg-slate-50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-secondary">
              Our Tempo Traveller Fleet
            </h2>

            <p className="text-muted-foreground">
              Pick the perfect tempo traveller for your {route.destination}{" "}
              group journey.
            </p>
          </div>

          <VehicleGallery />
        </div>
      </section>

      <SocialProof origin={route.origin} />
      <TrustSection origin={route.origin} />
      <TestimonialsSection origin={route.origin} />
      <OfficeLocation origin={route.origin} />

      {/* FAQ */}
      <FAQSection faqs={route.faqs} />
    </div>
  );
}
