"use client";

import { ROUTES, VEHICLES, calculateFare } from "@/lib/data";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Shield,
  Star,
  ChevronRight,
  CheckCircle2,
  Users,
  Calendar,
  ArrowRight,
  Sparkles,
  Gift,
  TrendingDown,
  Zap,
} from "lucide-react";
import { FAQSection } from "@/app/components/sections";
import { VehicleGallery } from "@/app/components/vehicle-gallery";
import Link from "next/link";
import { VehiclePricingTable } from "@/app/components/VehiclePricingTable";
import { Offer } from "@/app/components/schemas";

// Define proper types
interface RouteType {
  slug: string;
  origin: string;
  destination: string;
  distance: number;
  duration: string;
  faqs: Array<{ question: string; answer: string }>;
}

interface VehicleType {
  type: string;
  name: string;
  seating: string;
  capacity: number;
  perKmRate: number;
  features: string[];
  image: string;
}

interface FarePageClientProps {
  route: RouteType;
  fare: number;
  selectedVehicle: VehicleType;
}

// Helper component for Structured Data
function StructuredData({ route, fare }: { route: RouteType; fare: number }) {
  const canonicalUrl = `https://yatratempotraveller.com/cheapest/${route.slug}`;

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://yatratempotraveller.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tempo Traveller Fare",
        item: "https://yatratempotraveller.com/fares",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${route.origin} to ${route.destination}`,
        item: canonicalUrl,
      },
    ],
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: route.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const productData = Offer(
    fare,
    `${route.origin} to ${route.destination}`,
    `cheapest/${route.slug}`,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
      />
    </>
  );
}

// Main Page Component - Client Component
export default function FarePageClient({
  route,
  fare,
  selectedVehicle,
}: FarePageClientProps) {
  const competitorPrice = Math.round(fare * 1.4);
  const savings = competitorPrice - fare;

  const whatsappUrl = `https://wa.me/916280820037?text=${encodeURIComponent(
    `Hi, I want to book a cab from ${route.origin} to ${route.destination} at ₹${fare}`,
  )}`;

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
        {/* Structured Data */}
        <StructuredData route={route} fare={fare} />

        {/* Breadcrumbs with Internal Linking */}
        <div className="max-w-7xl mx-auto px-4 pt-4 text-sm">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-muted-foreground">
              <li>
                <Link
                  href="/cheapests"
                  className="hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <span className="text-primary">/</span>
              </li>
              <li>
                <Link
                  href={`/cheapest/${route.slug}`}
                  className="text-primary font-medium hover:underline"
                >
                  Cheapest Tempo Traveller from {route.origin} to{" "}
                  {route.destination}
                </Link>
              </li>
            </ol>
          </nav>
        </div>

        {/* Hero Section with Price Highlight */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 w-full">
            <div className="max-w-4xl mx-auto text-center">
              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  2,500+ Happy Customers
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-4">
                Cheapest Tempo Traveller from {route.origin} to{" "}
                <span className="text-primary">{route.destination}</span>
              </h1>

              {/* Price Display */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 my-6 border border-green-200 max-w-2xl mx-auto">
                <div className="flex items-baseline gap-2 justify-center flex-wrap">
                  <span className="text-sm font-semibold text-green-700">
                    Starting from
                  </span>
                  <span className="text-5xl font-black text-green-700">
                    ₹{fare}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{competitorPrice}
                  </span>
                  <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold ml-2">
                    Save ₹{savings}
                  </span>
                </div>
                <p className="text-sm text-green-700 mt-2 flex items-center justify-center gap-1">
                  <Sparkles className="h-4 w-4" />
                  Cheapest in India • No Hidden Charges • 100% Price Match
                </p>
              </div>

              {/* Key Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span>
                    <strong>{route.distance} km</strong> Journey
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span>
                    <strong>{route.duration}</strong> Duration
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span>Insured Travel</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                  <span>9-26 Seaters</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:shadow-lg text-lg group"
                  aria-label={`Book ${route.origin} to ${route.destination} tempo traveller at ₹${fare}`}
                >
                  <Phone
                    className="h-5 w-5 group-hover:animate-pulse"
                    aria-hidden="true"
                  />
                  Book Now @ ₹{fare}
                  <ArrowRight
                    className="h-5 w-5 group-hover:translate-x-1 transition"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/5 transition-all"
                  aria-label="Get free quote for tempo traveller"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Get Free Quote
                </a>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-3 justify-center mt-6 pt-6 border-t max-w-md mx-auto">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <CheckCircle2
                    className="h-3 w-3 text-green-600"
                    aria-hidden="true"
                  />
                  No Cancellation Fee
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <CheckCircle2
                    className="h-3 w-3 text-green-600"
                    aria-hidden="true"
                  />
                  Free Cancellation
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <CheckCircle2
                    className="h-3 w-3 text-green-600"
                    aria-hidden="true"
                  />
                  Live Tracking
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Price Comparison Banner */}
        <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-lg font-bold flex items-center justify-center gap-2 flex-wrap">
              <Gift className="h-6 w-6 animate-bounce" aria-hidden="true" />
              Best Price Guarantee! Found a lower price? We&apos;ll match it &
              give 5% extra off
              <Gift className="h-6 w-6 animate-bounce" aria-hidden="true" />
            </p>
          </div>
        </section>

        {/* Price Comparison Table - Professional & SEO Optimized */}
        <section
          className="py-16 bg-white"
          aria-labelledby="price-comparison-heading"
        >
          <div className="max-w-5xl mx-auto px-4">
            {/* Schema.org markup for rich search results */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Table",
                  about: {
                    "@type": "Service",
                    name: `Tempo Traveller from ${route.origin} to ${route.destination}`,
                    provider: {
                      "@type": "Organization",
                      name: "Yatra Tempo Traveller",
                    },
                  },
                  mainEntity: {
                    "@type": "ItemList",
                    itemListElement: [
                      {
                        "@type": "ListItem",
                        position: 1,
                        name: "Yatra Tempo Traveller",
                        price: `₹${fare}`,
                      },
                      {
                        "@type": "ListItem",
                        position: 2,
                        name: "Local Operator",
                        price: `₹${competitorPrice}`,
                      },
                      {
                        "@type": "ListItem",
                        position: 3,
                        name: "Other Platforms",
                        price: `₹${competitorPrice + 500}`,
                      },
                    ],
                  },
                }),
              }}
            />

            <h2
              id="price-comparison-heading"
              className="text-3xl font-bold text-center mb-4"
            >
              Compare Tempo Traveller Price from {route.origin} to{" "}
              {route.destination}
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground my-4 leading-relaxed">
              Find the cheapest tempo traveller fare for {route.origin} to{" "}
              {route.destination} without compromising on comfort and safety. We
              offer budget-friendly pricing with clean vehicles, experienced
              drivers, and transparent charges for every trip. Choose from 9
              seater, 12 seater, 15 seater, 16 seater, 20 seater, 26 seater and
              group travel options perfect for family tours, pilgrimages,
              weddings, and corporate journeys. Our lowest fare packages are
              designed to give maximum value with reliable service and no hidden
              costs. Compare all affordable options and book your {route.origin}{" "}
              to {route.destination} tempo traveller at the best cheapest price
              today.
            </p>

            <div className="overflow-x-auto shadow-lg rounded-xl border border-gray-200">
              <table className="w-full text-sm md:text-base border-collapse">
                <caption className="sr-only">
                  Comparison of tempo traveller prices from {route.origin} to{" "}
                  {route.destination}
                </caption>

                <thead>
                  <tr className="bg-gradient-to-r from-primary to-primary/90 text-white">
                    <th
                      scope="col"
                      className="px-5 py-4 text-left font-semibold"
                    >
                      Provider
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-left font-semibold"
                    >
                      Total Price (incl. taxes)
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-left font-semibold"
                    >
                      Hidden Charges
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-left font-semibold"
                    >
                      Cancellation Policy
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-4 text-left font-semibold"
                    >
                      Best For
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {/* Best Value Row - highlighted */}
                  <tr className="bg-green-50/80 border-l-4 border-green-600 hover:bg-green-100 transition-colors">
                    <th
                      scope="row"
                      className="px-5 py-4 font-bold text-gray-900"
                    >
                      Yatra Tempo Traveller
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                        Best Value
                      </span>
                    </th>
                    <td className="px-5 py-4">
                      <span className="text-xl font-bold text-green-700">
                        ₹{fare.toLocaleString("en-IN")}
                      </span>
                      <span className="text-gray-500 text-xs ml-1">
                        incl. all taxes
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1 text-green-700">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        No hidden charges
                      </span>
                    </td>
                    <td className="px-5 py-4 text-green-700 font-medium">
                      Free cancellation • 24h notice
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      Budget + flexibility
                    </td>
                  </tr>

                  {/* Competitor 1 */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <th
                      scope="row"
                      className="px-5 py-4 font-medium text-gray-900"
                    >
                      Local Operator
                    </th>
                    <td className="px-5 py-4">
                      <span className="font-bold text-gray-900">
                        ₹{competitorPrice.toLocaleString("en-IN")}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1 text-red-600">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Extra ₹500–1000
                      </span>
                    </td>
                    <td className="px-5 py-4 text-red-600">Paid (₹300 fee)</td>
                    <td className="px-5 py-4 text-gray-600">Local routes</td>
                  </tr>

                  {/* Competitor 2 */}
                  <tr className="hover:bg-gray-50 transition-colors">
                    <th
                      scope="row"
                      className="px-5 py-4 font-medium text-gray-900"
                    >
                      Other Aggregators
                    </th>
                    <td className="px-5 py-4">
                      <span className="font-bold text-gray-900">
                        ₹{(competitorPrice + 500).toLocaleString("en-IN")}
                      </span>
                      <span className="text-red-500 text-xs ml-1 line-through">
                        ₹
                        {Math.round(
                          (competitorPrice + 500) * 1.15,
                        ).toLocaleString("en-IN")}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1 text-red-600">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                        Platform fee + GST
                      </span>
                    </td>
                    <td className="px-5 py-4 text-red-600">
                      Strict / Non-refundable
                    </td>
                    <td className="px-5 py-4 text-gray-600">
                      Last-minute booking
                    </td>
                  </tr>
                </tbody>

                <tfoot className="bg-gray-50 text-xs text-gray-500">
                  <tr>
                    <td colSpan={5} className="px-5 py-3">
                      * Prices are dynamic and subject to change based on
                      availability and season. Updated daily.
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Additional trust signals */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>No hidden fees guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>24/7 customer support</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <span>Price match guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Value Props */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-black text-center mb-12">
              Why Customers Choose Us for{" "}
              <span className="text-primary">Cheapest Rides</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingDown,
                  title: "Lowest Price Guarantee",
                  desc: "We offer the most competitive rates in the industry with no hidden costs",
                },
                {
                  icon: Shield,
                  title: "Safe & Insured",
                  desc: "All vehicles are fully insured with experienced, verified drivers",
                },
                {
                  icon: Zap,
                  title: "Instant Booking",
                  desc: "Get confirmation within 10 minutes, 24/7 customer support",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="text-center p-6 rounded-2xl hover:shadow-xl transition-all group"
                >
                  <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition">
                    <item.icon
                      className="h-10 w-10 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Price Breakdown Table */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black mb-4">
                Transparent Price Breakdown
              </h2>
              <p className="text-muted-foreground">
                Know exactly what you&apos;re paying for - No Surprises
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-3xl mx-auto">
              <div className="bg-primary text-white p-4">
                <h3 className="text-xl font-bold">
                  {route.origin} to {route.destination} - {selectedVehicle.name}
                </h3>
              </div>
              <div className="divide-y">
                <div className="flex justify-between p-4">
                  <span>Base Fare (Includes Driver Allowance)</span>
                  <span className="font-bold">₹{Math.round(fare * 0.7)}</span>
                </div>
                <div className="flex justify-between p-4 bg-slate-50">
                  <span>Fuel & Toll Charges</span>
                  <span className="font-bold">₹{Math.round(fare * 0.2)}</span>
                </div>
                <div className="flex justify-between p-4">
                  <span>Taxes & GST</span>
                  <span className="font-bold">₹{Math.round(fare * 0.1)}</span>
                </div>
                <div className="flex justify-between p-4 bg-green-50 font-bold">
                  <span>Total Payable Amount</span>
                  <span className="text-2xl text-green-700">₹{fare}</span>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
              >
                Book Now & Save ₹{savings}
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Vehicle Options */}
        <section className="py-24 bg-slate-50 border-y border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black text-secondary">
                Our Tempo Traveller Fleet
              </h2>
              <p className="text-muted-foreground mt-2">
                Pick the perfect tempo traveller for your {route.destination}{" "}
                group journey.
              </p>
            </div>

            <VehicleGallery />
          </div>
        </section>

        {/* vehicle pricing table */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-black text-center mb-8">
              {route.origin} to {route.destination} Tempo Traveller Pricing (Per
              k.m)
            </h2>

            <VehiclePricingTable />
          </div>
        </section>

        {/* Related Routes - Internal Linking */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-black text-center mb-12">
              Popular Routes from{" "}
              <span className="text-primary">{route.origin}</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ROUTES.filter(
                (r) =>
                  r.origin === route.origin &&
                  r.destination !== route.destination,
              )
                .slice(0, 4)
                .map((relatedRoute) => {
                  const cheapestRoute = Math.min(
                    ...VEHICLES.map((v) => v.perKmRate),
                  );
                  const cheapestPrice = calculateFare(
                    relatedRoute.distance,
                    cheapestRoute,
                  );
                  return (
                    <Link
                      key={relatedRoute.slug}
                      href={`/cheapest/${relatedRoute.slug}`}
                      className="group p-4 border rounded-xl hover:shadow-lg transition-all hover:border-primary"
                    >
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {relatedRoute.origin} to {relatedRoute.destination}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {relatedRoute.distance} km • ₹{cheapestPrice}
                      </p>
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-black mb-4 flex items-center justify-center gap-2">
              <Calendar className="h-8 w-8" aria-hidden="true" />
              Limited Slots Available!
            </h2>
            <p className="text-xl mb-6">
              Prices increase by 15% after this month. Book now to lock the
              lowest rate.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all"
              aria-label={`Call to book ${route.origin} to ${route.destination} at ₹${fare}`}
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call & Book @ ₹{fare}
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={route.faqs} />
      </div>
    </div>
  );
}
