import { notFound, redirect } from "next/navigation";
import { ROUTES, calculateFare } from "@/lib/data";
import Image from "next/image";
import { FareCalculator } from "../../components/fare-calculator";
import { FareTable } from "../../components/fare-table";
import { VehicleGallery } from "../../components/vehicle-gallery";
import {
  TrustSection,
  FareInclusions,
  ExclusionsNotice,
  SafetySection,
  OfficeLocation,
  ExperienceSection,
  TestimonialsSection,
  SocialProof,
  FAQSection,
} from "../../components/sections";
import {
  BreadcrumbList,
  LocalBusiness,
  Offer,
  FAQPage,
} from "../../components/schemas";
import { MapPin, Clock, ShieldCheck, Star, Users } from "lucide-react";
import { Metadata } from "next";
import { RouteComparisonSection } from "@/app/components/sections/RouteComparisonSection";
import { RelatedRoutesSection } from "@/app/components/sections/RelatedRoutesSection";
import { RouteMediaSection } from "@/app/components/sections/RouteMediaSection";
import { CityGuideSection } from "@/app/components/sections/CityGuideSection";
import { RouteGuideSection } from "@/app/components/sections/RouteGuideSection";
import { TravelUseCasesSection } from "@/app/components/sections/TravelUseCasesSection";
import { PricingSection } from "@/app/components/sections/PricingSection";
import { generateFareFaqs } from "../../components/sections";

export const revalidate = 86400;

export async function generateStaticParams() {
  return ROUTES.map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const route = ROUTES.find((r) => r.slug === slug);

  if (!route) {
    // Fix wrong slug if someone hits cheapest format
    const fixedSlug = slug.replace(
      "-cheapest-tempo-traveller-fare",
      "-tempo-traveller-fare",
    );

    const fixedRoute = ROUTES.find((r) => r.slug === fixedSlug);

    if (fixedRoute) {
      redirect(`/fare/${fixedSlug}`);
    }

    notFound();
  }

  const fare = calculateFare(route.distance, 18);
  const title = `${route.origin} to ${route.destination} Tempo Traveller Fare | Round Trip ₹${fare}`;

  return {
    title,
    description: `Complete guide for ${route.origin} to ${route.destination} tempo traveller. Fixed price ₹${fare} for round trip. Best time to visit, route details, local tips, and travel guide.`,
    alternates: { canonical: `https://yatratempotraveller.com/fare/${slug}` },
    openGraph: {
      title,
      description: route.description,
      images: [{ url: route.routeImage || "/og-image.jpg" }],
    },
  };
}

export default async function FarePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const route = ROUTES.find((r) => r.slug === slug);

  if (!route) notFound();

  const fare = calculateFare(route.distance, 18);
  const perPersonFare9 = Math.round(fare / 9);

  const breadcrumbs = [
    { name: "Home", item: "https://yatratempotraveller.com" },
    { name: "Fares", item: "https://yatratempotraveller.com/fares" },
    {
      name: `${route.origin} to ${route.destination}`,
      item: `https://yatratempotraveller.com/fare/${route.slug}`,
    },
  ];

  // Pricing logic
  const getRatePerKm = (distance: number) => {
    if (distance > 300) return 12;
    if (distance > 200) return 14;
    if (distance > 100) return 16;
    return 18;
  };

  const ratePerKm = getRatePerKm(route.distance);
  const faqs = generateFareFaqs(route.origin, route.destination);
  FAQPage(faqs);

  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markups */}
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
              `${route.origin} to ${route.destination}`,
              `fare/${route.slug}`,
            ),
          ),
        }}
      />
      {/* ==================== HERO SECTION (Fare + CTA) ==================== */}
      <section className="pt-12 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-secondary border-b border-border relative overflow-hidden">
        {" "}
        {route.routeImage && (
          <div className="absolute inset-0 opacity-10">
            {" "}
            <Image
              src={route.routeImage}
              alt={`${route.origin} to ${route.destination}`}
              fill
              className="object-cover"
            />{" "}
          </div>
        )}{" "}
        <div className="max-w-7xl mx-auto px-4 relative">
          {" "}
          <div className="text-center mb-12 space-y-4">
            {" "}
            <div className="flex items-center justify-center gap-1 mb-2">
              {" "}
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}{" "}
              <span className="text-xs font-black text-white ml-2 uppercase tracking-widest">
                {" "}
                4.9/5 Rating (5000+ Reviews){" "}
              </span>{" "}
            </div>{" "}
            <div className="inline-block text-primary font-bold text-xs uppercase tracking-[0.2em] bg-primary/10 px-4 py-1.5 rounded-full mb-2">
              {" "}
              Tempo Traveller Fare {route.origin}{" "}
            </div>{" "}
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
              {" "}
              {route.origin} to {route.destination} Tempo Traveller Fare <br />{" "}
              <span className="text-primary italic">
                {" "}
                Round Trip Fixed Price ₹{fare}{" "}
              </span>{" "}
            </h1>{" "}
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              {" "}
              <div className="flex items-center gap-2 text-sm font-bold text-white/90">
                {" "}
                <MapPin className="h-4 w-4 text-primary" /> {route.distance}{" "}
                km{" "}
              </div>{" "}
              <div className="flex items-center gap-2 text-sm font-bold text-white/90">
                {" "}
                <Clock className="h-4 w-4 text-primary" /> {route.duration}{" "}
              </div>{" "}
              <div className="flex items-center gap-2 text-sm font-bold text-white/90">
                {" "}
                <Users className="h-4 w-4 text-primary" />₹{perPersonFare9}{" "}
                /person (9-Seater){" "}
              </div>{" "}
              <div className="flex items-center gap-2 text-sm font-bold text-white/90">
                {" "}
                <ShieldCheck className="h-4 w-4 text-primary" /> Verified
                Drivers{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <FareCalculator route={route} />{" "}
        </div>{" "}
      </section>
      {/* ==================== FARE TABLE + CALCULATOR ==================== */}
      <section className="py-10 sm:py-12 md:py-14 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-10 md:space-y-12">
          {/* Compare Section Full Width */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-secondary leading-tight">
              Compare Tempo Traveller Price from {route.origin} to{" "}
              {route.destination}
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed">
              Get transparent and affordable tempo traveller pricing for{" "}
              {route.origin} to {route.destination} with no hidden charges. Our
              fares are based on distance, trip duration, vehicle type, and
              seating capacity, ensuring you receive the best value for your
              journey. Choose from 9 seater, 12 seater, 15 seater, 16 seater, 20
              seater and 26 seater for family trips, corporate tours, weddings,
              and group travel. Every booking includes a professional driver and
              well-maintained vehicle for a safe ride. Compare all available
              fare options and book your {route.origin} to {route.destination}{" "}
              tempo traveller at the best price today.
            </p>
          </div>

          {/* Fare Table */}
          <div className="overflow-x-auto rounded-2xl border border-border">
            <FareTable route={route} />
          </div>

          <ExclusionsNotice origin={route.origin} />

          {/* Fare Inclusion Full Width */}
          <div className="bg-slate-50 p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-border">
            <h4 className="font-bold text-secondary text-lg sm:text-xl md:text-2xl mb-5 md:mb-6 text-center md:text-left">
              Fare Inclusions
            </h4>

            <FareInclusions />

            <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-border text-center md:text-left">
              <p className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-widest mb-2">
                Fixed Price Guarantee
              </p>

              <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed">
                The price shown for the vehicle is final.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* City Guide Section */}
      <CityGuideSection route={route} />
      {/* ==================== ROUTE GUIDE SECTION (DYNAMIC) ==================== */}
      <RouteGuideSection route={route} />
      {/* ==================== TRAVEL USE CASES (DYNAMIC) ==================== */}
      <TravelUseCasesSection route={route} />
      {/* ==================== PRICING EXPLANATION (DYNAMIC) ==================== */}
      <PricingSection route={route} fare={fare} ratePerKm={ratePerKm} />
      {/* ==================== COMPARISON SECTION ==================== */}
      <RouteComparisonSection route={route} fare={fare} />;
      {/* ==================== RELATED ROUTES ==================== */}
      <RelatedRoutesSection route={route} allRoutes={ROUTES} />
      {/* ==================== IMAGE + MAP SECTION ==================== */}
      <RouteMediaSection route={route} />
      {/* Existing Components */}
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
      <FAQSection faqs={faqs} />
    </div>
  );
}
