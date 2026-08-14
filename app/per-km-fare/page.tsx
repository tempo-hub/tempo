"use client";

import { useState, useMemo } from "react";

export const dynamic = "force-dynamic";
import Link from "next/link";
import {
  Search,
  Globe,
  ShieldCheck,
  TrendingDown,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { TaxiRoute, calculateFare } from "@/lib/data";

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

import { FAQSection } from "../components/sections";

const PER_KM_FARE_FAQS = [
  {
    question: "What is the starting per km fare for Tempo Traveller?",
    answer:
      "Tempo Traveller per km fare usually starts from ₹18 per kilometer depending on vehicle type, seating capacity, route, and travel season.",
  },

  {
    question: "How is Tempo Traveller fare calculated?",
    answer:
      "Tempo Traveller fare is calculated based on total travel distance, minimum running kilometers, toll tax, parking charges, driver allowance, and state taxes if applicable.",
  },

  {
    question: "Which Tempo Traveller variants are available?",
    answer:
      "We provide 9 seater, 12 seater, 14 seater, 17 seater, 20 seater Maharaja Tempo Traveller and Force Urbania options for local and outstation travel.",
  },

  {
    question: "Is outstation Tempo Traveller booking available?",
    answer:
      "Yes, outstation Tempo Traveller booking is available for family trips, religious tours, corporate travel, weddings, group vacations, and long-distance journeys across multiple cities.",
  },

  {
    question: "Can I book Tempo Traveller for one-way trips?",
    answer:
      "Yes, one-way Tempo Traveller booking is available on selected routes. Pricing may vary depending on return availability and route demand.",
  },

  {
    question: "How can I book Tempo Traveller online?",
    answer:
      "You can book Tempo Traveller online through WhatsApp, phone call, or inquiry form by sharing your pickup city, destination, travel date, and passenger count.",
  },
];

export default function PerKmFarePage() {
  const [search, setSearch] = useState("");

  const ALL_ROUTES: (TaxiRoute & { originCity?: string })[] = useMemo(() => {
    return [
      ...PRAYAGRAJ_CHEAPEST_ROUTES.map((route) => ({
        ...route,
        originCity: "Prayagraj",
        category: "regular" as const,
      })),

      ...AYODHYA_CHEAPEST_ROUTES.map((route) => ({
        ...route,
        originCity: "Ayodhya",
        category: "regular" as const,
      })),

      ...VARANASI_CHEAPEST_ROUTES.map((route) => ({
        ...route,
        originCity: "Varanasi",
        category: "regular" as const,
      })),

      ...UTTARAKHAND_CHEAPEST_ROUTES.map((route) => ({
        ...route,
        originCity: "Varanasi",
        category: "uttarakhand" as const,
      })),

      ...MADHYAPRADESH_CHEAPEST_ROUTES.map((route) => ({
        ...route,
        originCity: "Varanasi",
        category: "madhyapradesh" as const,
      })),

      ...RAJASTHAN_CHEAPEST_ROUTES.map((route) => ({
        ...route,
        originCity: "Varanasi",
        category: "rajasthan" as const,
      })),

      ...BIHAR_CHEAPEST_ROUTES.map((route) => ({
        ...route,
        originCity: "Varanasi",
        category: "bihar" as const,
      })),

      ...DELHI_NCR_CHEAPEST_ROUTES.map((route) => ({
        ...route,
        originCity: "Varanasi",
        category: "delhi-NCR" as const,
      })),
    ];
  }, []);

  const sortedRoutes = useMemo(() => {
    return [...ALL_ROUTES]
      .map((route) => ({
        ...route,

        // PER KM FARE
        fare: calculateFare(route.distance, 18),

        // DYNAMIC SLUG
        slug: `${route.origin
          .toLowerCase()
          .replace(/\s+/g, "-")}-to-${route.destination
          .toLowerCase()
          .replace(/\s+/g, "-")}-tempo-traveller-per-km-fare`,
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

  const getVaranasiSubSections = (routes: typeof sortedRoutes) => {
    const regular = routes.filter((r) => r.category === "regular");

    const uttarakhand = routes.filter((r) => r.category === "uttarakhand");

    const madhyaPradesh = routes.filter((r) => r.category === "madhyapradesh");

    const rajasthan = routes.filter((r) => r.category === "rajasthan");

    const bihar = routes.filter((r) => r.category === "bihar");

    const delhiNCR = routes.filter((r) => r.category === "delhi-NCR");

    return {
      regular,
      uttarakhand,
      madhyaPradesh,
      rajasthan,
      bihar,
      delhiNCR,
    };
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO SECTION */}
      <section className="pt-24 pb-16 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-10">
          <Globe className="w-96 h-96" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest mb-6">
            Per k.m Fare Directory
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Search Tempo Traveller{" "}
            <span className="text-primary italic">Per k.m Fare</span>{" "}
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10">
            Search affordable and transparent tempo traveller per kilometer fare
            routes across Uttar Pradesh, Uttarakhand, Bihar, Rajasthan, Delhi
            NCR and more.
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

          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>

              <span className="text-sm font-bold">Verified Fare Routes</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <TrendingDown className="w-5 h-5 text-primary" />
              </div>

              <span className="text-sm font-bold">
                Cheapest Per k.m Pricing
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
                Found {filteredRoutes.length} Results for &ldquo;{search}&rdquo;
              </h2>
            </div>

            {filteredRoutes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRoutes.map((route) => (
                  <PerKmCard key={route.slug} route={route} />
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

              if (city === "Varanasi") {
                const {
                  regular,
                  uttarakhand,
                  madhyaPradesh,
                  rajasthan,
                  bihar,
                  delhiNCR,
                } = getVaranasiSubSections(cityRoutes);

                return (
                  <div key={city} className="space-y-16">
                    {/* REGULAR */}
                    {regular.length > 0 && (
                      <Section
                        title={`Tempo Traveller Per k.m Fare from ${city}`}
                        routes={regular}
                      />
                    )}

                    {/* UTTARAKHAND */}
                    {uttarakhand.length > 0 && (
                      <Section
                        title="From Varanasi to Uttarakhand"
                        routes={uttarakhand}
                      />
                    )}

                    {/* MP */}
                    {madhyaPradesh.length > 0 && (
                      <Section
                        title="From Varanasi to Madhya Pradesh"
                        routes={madhyaPradesh}
                      />
                    )}

                    {/* RAJASTHAN */}
                    {rajasthan.length > 0 && (
                      <Section
                        title="From Varanasi to Rajasthan"
                        routes={rajasthan}
                      />
                    )}

                    {/* BIHAR */}
                    {bihar.length > 0 && (
                      <Section title="From Varanasi to Bihar" routes={bihar} />
                    )}

                    {/* DELHI NCR */}
                    {delhiNCR.length > 0 && (
                      <Section
                        title="From Varanasi to Delhi NCR"
                        routes={delhiNCR}
                      />
                    )}
                  </div>
                );
              }

              return (
                <Section
                  key={city}
                  title={`Tempo Traveller Per k.m Fare from ${city}`}
                  routes={cityRoutes}
                />
              );
            })}
          </div>
        )}

        <FAQSection
          faqs={PER_KM_FARE_FAQS}
          title="Tempo Traveller Per k.m Fare FAQs"
        />
      </main>
    </div>
  );
}

/* SECTION COMPONENT */
function Section({ title, routes }: { title: string; routes: (TaxiRoute & { fare: number; slug: string })[] }) {
  return (
    <div className="space-y-10">
      <div className="flex items-center gap-4">
        <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
          <MapPin className="text-primary w-8 h-8" />
          {title}
        </h2>

        <div className="h-px bg-slate-200 flex-1 mt-2" />

        <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
          {routes.length} Routes
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {routes.map((route) => (
          <PerKmCard key={route.slug} route={route} />
        ))}
      </div>
    </div>
  );
}

/* CARD */
function PerKmCard({
  route,
}: {
  route: TaxiRoute & {
    fare: number;
    slug: string;
  };
}) {
  return (
    <Link
      href={`/price/${route.slug}`}
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

        {/* BOTTOM */}
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
              Per KM Fare
            </p>

            <p className="text-2xl font-black text-secondary group-hover:scale-110 transition-transform origin-right">
              ₹{route.fare}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
