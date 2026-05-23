"use client";

import {
  MapPin,
  ArrowRight,
  Globe,
  Search,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";
import Link from "next/link";
import { FAQSection } from "../components/sections";
import { useState } from "react";

import { TaxiRoute, calculateFare } from "@/lib/data";
import { useMemo } from "react";
import {
  PRAYAGRAJ_CHEAPEST_ROUTES,
  AYODHYA_CHEAPEST_ROUTES,
  VARANASI_CHEAPEST_ROUTES,
  UTTARAKHAND_CHEAPEST_ROUTES,
  MADHYAPRADESH_CHEAPEST_ROUTES,
  RAJASTHAN_CHEAPEST_ROUTES,
  BIHAR_CHEAPEST_ROUTES,
  DELHI_NCR_CHEAPEST_ROUTES,
} from "@/lib/cheapestRoute";

export const ALL_ROUTES = [
  ...PRAYAGRAJ_CHEAPEST_ROUTES,
  ...AYODHYA_CHEAPEST_ROUTES,
  ...VARANASI_CHEAPEST_ROUTES,
  ...UTTARAKHAND_CHEAPEST_ROUTES,
  ...MADHYAPRADESH_CHEAPEST_ROUTES,
  ...RAJASTHAN_CHEAPEST_ROUTES,
  ...BIHAR_CHEAPEST_ROUTES,
  ...DELHI_NCR_CHEAPEST_ROUTES,
];

export const URBANIA_FAQS = [
  {
    question: "What is Force Urbania fare per kilometer?",
    answer:
      "Force Urbania fare usually starts from ₹28 per kilometer depending on route, travel duration, and season.",
  },

  {
    question: "Is Force Urbania available for outstation trips?",
    answer:
      "Yes, Force Urbania booking is available for outstation family tours, weddings, religious trips, and corporate travel.",
  },

  {
    question: "How many passengers can travel in Urbania?",
    answer:
      "Force Urbania comes in multiple seating options including 12 and 17 seater luxury layouts.",
  },

  {
    question: "Is Urbania better than Tempo Traveller?",
    answer:
      "Force Urbania offers more premium interiors, better suspension, spacious seating, modern cabin design, and luxury travel experience.",
  },

  {
    question: "Can I book Urbania online?",
    answer:
      "Yes, you can book Force Urbania online through call, WhatsApp, or inquiry form.",
  },
];

export default function UrbaniaPage() {
  const [search, setSearch] = useState("");

  const ALL_ROUTES: (TaxiRoute & { originCity?: string })[] = useMemo(() => {
    return [
      ...PRAYAGRAJ_CHEAPEST_ROUTES.map((route) => ({
        ...route,
        originCity: "Prayagraj",
      })),

      ...AYODHYA_CHEAPEST_ROUTES.map((route) => ({
        ...route,
        originCity: "Ayodhya",
      })),

      ...VARANASI_CHEAPEST_ROUTES.map((route) => ({
        ...route,
        originCity: "Varanasi",
      })),

      ...UTTARAKHAND_CHEAPEST_ROUTES.map((route) => ({
        ...route,
        originCity: "Uttarakhand",
      })),

      ...MADHYAPRADESH_CHEAPEST_ROUTES.map((route) => ({
        ...route,
        originCity: "Madhya Pradesh",
      })),

      ...RAJASTHAN_CHEAPEST_ROUTES.map((route) => ({
        ...route,
        originCity: "Rajasthan",
      })),

      ...BIHAR_CHEAPEST_ROUTES.map((route) => ({
        ...route,
        originCity: "Bihar",
      })),

      ...DELHI_NCR_CHEAPEST_ROUTES.map((route) => ({
        ...route,
        originCity: "Delhi NCR",
      })),
    ];
  }, []);

  const sortedRoutes = useMemo(() => {
    return [...ALL_ROUTES]
      .map((route) => ({
        ...route,

        fare: calculateFare(route.distance, 28),

        slug: `${route.origin
          .toLowerCase()
          .replace(/\s+/g, "-")}-to-${route.destination
          .toLowerCase()
          .replace(/\s+/g, "-")}-urbania-fare`,
      }))
      .sort((a, b) => a.fare - b.fare);
  }, [ALL_ROUTES]);

  const filteredRoutes = sortedRoutes.filter((route) =>
    `${route.origin} ${route.destination}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const routesByCity = useMemo(() => {
    return sortedRoutes.reduce(
      (acc, route) => {
        const cityKey = route.originCity || route.origin;

        if (!acc[cityKey]) acc[cityKey] = [];

        acc[cityKey].push(route);

        return acc;
      },
      {} as Record<string, typeof sortedRoutes>,
    );
  }, [sortedRoutes]);

  const cities = Object.keys(routesByCity).sort();

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Force Urbania Rental Service",
    provider: {
      "@type": "Organization",
      name: "Yatra Tempo Traveller",
    },
    areaServed: "India",
    description:
      "Luxury Force Urbania rental service for weddings, outstation trips, airport transfers, and family tours.",
  };

  return (
    <div className="min-h-screen">
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <div className="min-h-screen bg-slate-50">
        {/* HERO SECTION */}
        <section className="pt-24 pb-16 bg-secondary text-white relative overflow-hidden">
          {/* BG GLOW */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-10">
            <Globe className="w-96 h-96" />
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            {/* BADGE */}
            <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest mb-6">
              Urbania Fare Directory
            </div>

            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Search Force{" "}
              <span className="text-primary italic">Urbania Fare</span>
            </h1>

            {/* DESC */}
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10">
              Explore luxury Force Urbania rental routes across Uttar Pradesh,
              Uttarakhand, Bihar, Rajasthan, Delhi NCR and more with transparent
              pricing and premium seating comfort.
            </p>

            {/* SEARCH */}
            <div className="max-w-2xl mx-auto relative mb-12 group">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400" />
              </div>

              <input
                type="text"
                placeholder="Search route like Varanasi to Ayodhya..."
                className="w-full pl-16 pr-6 py-6 bg-white border-2 border-transparent rounded-3xl shadow-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all outline-none text-secondary font-bold text-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute inset-y-0 right-0 pr-6 text-slate-400 hover:text-primary font-bold text-sm"
                >
                  Clear
                </button>
              )}
            </div>

            {/* FEATURES */}
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>

                <span className="text-sm font-bold">
                  Luxury Verified Routes
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <TrendingDown className="w-5 h-5 text-primary" />
                </div>

                <span className="text-sm font-bold">
                  Transparent Urbania Pricing
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ROUTES */}
        <main className="max-w-7xl mx-auto px-4 py-20">
          {search ? (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-secondary">
                  Found {filteredRoutes.length} Results for &ldquo;{search}
                  &rdquo;
                </h2>
              </div>

              {filteredRoutes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredRoutes.map((route) => (
                    <UrbaniaCard key={route.slug} route={route} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-12 rounded-3xl text-center border-2 border-dashed border-slate-200">
                  <p className="text-slate-500 font-bold italic">
                    No route found.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-24">
              {cities.map((city) => {
                const cityRoutes = routesByCity[city];

                return (
                  <Section
                    key={city}
                    title={`Force Urbania Fare from ${city}`}
                    routes={cityRoutes}
                  />
                );
              })}
            </div>
          )}

          {/* FAQ */}
          <FAQSection faqs={URBANIA_FAQS} title="Force Urbania Fare FAQs" />
        </main>
      </div>
    </div>
  );
}

/* SECTION */
function Section({
  title,
  routes,
}: {
  title: string;
  routes: (TaxiRoute & {
    fare: number;
    slug: string;
  })[];
}) {
  return (
    <div className="space-y-10">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
          <MapPin className="w-8 h-8 text-primary" />
          {title}
        </h2>

        <div className="h-px bg-slate-200 flex-1 mt-2" />

        <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
          {routes.length} Routes
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {routes.map((route) => (
          <UrbaniaCard key={route.slug} route={route} />
        ))}
      </div>
    </div>
  );
}

/* CARD */
function UrbaniaCard({
  route,
}: {
  route: TaxiRoute & {
    fare: number;
    slug: string;
  };
}) {
  return (
    <Link
      href={`/urbania/${route.slug}`}
      className="group bg-white p-6 rounded-3xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all">
        <ArrowRight className="w-5 h-5 text-primary" />
      </div>

      <div className="space-y-2">
        {/* ORIGIN */}
        <div className="flex items-center gap-2 mb-1">
          <span className="p-1 px-2 bg-slate-50 rounded text-[9px] font-black text-slate-400 uppercase tracking-widest">
            {route.origin}
          </span>

          <ArrowRight className="w-2 h-2 text-slate-300" />
        </div>

        {/* DESTINATION */}
        <h3 className="text-2xl font-black text-secondary tracking-tight group-hover:text-primary transition-colors">
          {route.destination}
        </h3>

        {/* DETAILS */}
        <div className="flex items-center gap-4 pt-4 border-t border-slate-50 mt-4">
          <div>
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">
              Distance
            </p>

            <p className="text-sm font-black text-secondary">
              {route.distance} KM
            </p>
          </div>

          <div className="h-8 w-px bg-slate-100" />

          <div className="ml-auto text-right">
            <p className="text-[10px] uppercase font-bold text-primary tracking-tighter italic">
              Urbania Fare
            </p>

            <p className="text-2xl font-black text-secondary">₹{route.fare}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
