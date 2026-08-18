"use client";

import { useState } from "react";
import { calculateFare } from "@/lib/data";
import {
  Search,
  MapPin,
  ArrowRight,
  Globe,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";
import {
  PRAYAGRAJ_FARE_ROUTES,
  AYODHYA_FARE_ROUTES,
  VARANASI_FARE_ROUTES,
  LUCKNOW_FARE_ROUTES,
  UTTARAKHAND_FARE_ROUTES,
  MADHYAPRADESH_FARE_ROUTES,
  RAJASTHAN_FARE_ROUTES,
  BIHAR_FARE_ROUTES,
  DELHI_NCR_FARE_ROUTES,
  HIMACHAL_PRADESH_FARE_ROUTES,
  KOLKATA_FARE_ROUTES,
  DELHI_FARE_ROUTES,
  NOIDA_FARE_ROUTES,
  GURUGRAM_FARE_ROUTES,
  FARIDABAD_FARE_ROUTES,
  GHAZIABAD_FARE_ROUTES,
  BANGALORE_FARE_ROUTES,
  HYDERABAD_FARE_ROUTES,
  LUDHIANA_FARE_ROUTES,
  CHANDIGARH_FARE_ROUTES,
} from "@/lib/fareRoute";
import { useMemo } from "react";

export default function FaresClient() {
  const [searchQuery, setSearchQuery] = useState("");

  // Combine all fare routes
  const ALL_FARE_ROUTES: (TaxiRoute & { originCity?: string })[] =
    useMemo(() => {
      return [
        ...PRAYAGRAJ_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Prayagraj",
          category: "regular" as const,
        })),
        ...AYODHYA_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Ayodhya",
          category: "regular" as const,
        })),
        ...VARANASI_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Varanasi",
          category: "regular" as const,
        })),
        ...DELHI_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Delhi",
          category: "regular" as const,
        })),
        ...NOIDA_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Noida",
          category: "regular" as const,
        })),
        ...GURUGRAM_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Gurugram",
          category: "regular" as const,
        })),
        ...FARIDABAD_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Faridabad",
          category: "regular" as const,
        })),
        ...GHAZIABAD_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Ghaziabad",
          category: "regular" as const,
        })),
        ...BANGALORE_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Bangalore",
          category: "regular" as const,
        })),
        ...HYDERABAD_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Hyderabad",
          category: "regular" as const,
        })),
        ...LUDHIANA_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Ludhiana",
          category: "regular" as const,
        })),
        ...CHANDIGARH_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Chandigarh",
          category: "regular" as const,
        })),
        ...LUCKNOW_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Lucknow",
          category: "regular" as const,
        })),
        ...UTTARAKHAND_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Varanasi",
          category: "uttarakhand" as const,
        })),
        ...MADHYAPRADESH_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Varanasi",
          category: "madhyapradesh" as const,
        })),
        ...RAJASTHAN_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Varanasi",
          category: "rajasthan" as const,
        })),
        ...BIHAR_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Varanasi",
          category: "bihar" as const,
        })),
        ...DELHI_NCR_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Varanasi",
          category: "delhi-NCR" as const,
        })),
        ...HIMACHAL_PRADESH_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Varanasi",
          category: "himachal-pradesh" as const,
        })),
        ...KOLKATA_FARE_ROUTES.map((route) => ({
          ...route,
          originCity: "Varanasi",
          category: "kolkata" as const,
        })),
      ];
    }, []);

  // Calculate fare and sort
  const sortedRoutes = useMemo(() => {
    return [...ALL_FARE_ROUTES]
      .map((route) => ({
        ...route,
        fare: calculateFare(route.distance, 18),
      }))
      .sort((a, b) => a.fare - b.fare);
  }, [ALL_FARE_ROUTES]);

  // Search filter
  const filteredRoutes = sortedRoutes.filter((route) =>
    `${route.origin} ${route.destination}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

  // Group by origin city
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

  // Helper to get Varanasi sub-sections
  const getVaranasiSubSections = (routes: typeof sortedRoutes) => {
    const regular = routes.filter((r) => r.category === "regular");
    const uttarakhand = routes.filter((r) => r.category === "uttarakhand");
    const madhyaPradesh = routes.filter((r) => r.category === "madhyapradesh");
    const rajasthan = routes.filter((r) => r.category === "rajasthan");
    const bihar = routes.filter((r) => r.category === "bihar");
    const delhiNCR = routes.filter((r) => r.category === "delhi-NCR");
    const himachalPradesh = routes.filter(
      (r) => r.category === "himachal-pradesh",
    );
    const kolkata = routes.filter((r) => r.category === "kolkata");
    return {
      regular,
      uttarakhand,
      madhyaPradesh,
      rajasthan,
      bihar,
      delhiNCR,
      himachalPradesh,
      kolkata,
    };
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero & Search Section */}
      <section className="pt-24 pb-16 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-10">
          <Globe className="w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest mb-6">
            Route Directory & Search
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-10 tracking-tight">
            Search <span className="text-primary italic">Tempo Traveller</span>{" "}
            Fares
          </h1>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-12 group">
            <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400 group-focus-within:text-primary transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search for a city or route (e.g. Ayodhya, Lucknow...)"
              className="w-full pl-16 pr-6 py-6 bg-white border-2 border-transparent rounded-3xl shadow-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all outline-none text-secondary font-bold text-lg placeholder:text-slate-400 placeholder:font-medium"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
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
              <span className="text-sm font-bold">75+ Verified Routes</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-lg">
                <TrendingDown className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-bold">Fixed & Transparent</span>
            </div>
          </div>
        </div>
      </section>

      {/* Results or Main Directory */}
      <main className="max-w-7xl mx-auto px-4 py-20">
        {searchQuery ? (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-secondary">
                Found {filteredRoutes.length} Results for &quot;{searchQuery}
                &quot;
              </h2>
            </div>
            {filteredRoutes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredRoutes.map((route) => (
                  <FareCard key={route.id} route={route} />
                ))}
              </div>
            ) : (
              <div className="bg-white p-12 rounded-3xl text-center border-2 border-dashed border-slate-200">
                <p className="text-slate-500 font-bold italic">
                  No specific route found. Try searching for city names like
                  &quot;Varanasi&quot; or &quot;Lucknow&quot;.
                </p>
              </div>
            )}
          </div>
        ) : (
          // CITY-WISE FARES
          <div className="space-y-24">
            {cities.map((city) => {
              const cityRoutes = routesByCity[city];

              // Special handling for Varanasi
              if (city === "Varanasi") {
                const {
                  regular,
                  uttarakhand,
                  madhyaPradesh,
                  rajasthan,
                  bihar,
                  delhiNCR,
                  himachalPradesh,
                  kolkata,
                } = getVaranasiSubSections(cityRoutes);

                return (
                  <div key={city} className="space-y-16">
                    {regular.length > 0 && (
                      <div className="space-y-10">
                        <div className="flex items-center gap-4">
                          <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                            <MapPin className="text-primary w-8 h-8" />
                            Tempo Traveller Fares from {city}
                          </h2>
                          <div className="h-px bg-slate-200 flex-1 mt-2" />
                          <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase">
                            {regular.length} Active Routes
                          </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                          {regular.map((route) => (
                            <FareCard key={route.id} route={route} />
                          ))}
                        </div>
                      </div>
                    )}

                    {uttarakhand.length > 0 && (
                      <div className="space-y-10">
                        <div className="flex items-center gap-4">
                          <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                            <MapPin className="text-primary w-8 h-8" />
                            Varanasi to Uttarakhand Fares
                          </h2>
                          <div className="h-px bg-slate-200 flex-1 mt-2" />
                          <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase">
                            {uttarakhand.length} Active Routes
                          </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                          {uttarakhand.map((route) => (
                            <FareCard key={route.id} route={route} />
                          ))}
                        </div>
                      </div>
                    )}

                    {madhyaPradesh.length > 0 && (
                      <div className="space-y-10">
                        <div className="flex items-center gap-4">
                          <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                            <MapPin className="text-primary w-8 h-8" />
                            Varanasi to Madhya Pradesh Fares
                          </h2>
                          <div className="h-px bg-slate-200 flex-1 mt-2" />
                          <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase">
                            {madhyaPradesh.length} Active Routes
                          </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                          {madhyaPradesh.map((route) => (
                            <FareCard key={route.id} route={route} />
                          ))}
                        </div>
                      </div>
                    )}

                    {rajasthan.length > 0 && (
                      <div className="space-y-10">
                        <div className="flex items-center gap-4">
                          <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                            <MapPin className="text-primary w-8 h-8" />
                            Varanasi to Rajasthan Fares
                          </h2>
                          <div className="h-px bg-slate-200 flex-1 mt-2" />
                          <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase">
                            {rajasthan.length} Active Routes
                          </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                          {rajasthan.map((route) => (
                            <FareCard key={route.id} route={route} />
                          ))}
                        </div>
                      </div>
                    )}

                    {bihar.length > 0 && (
                      <div className="space-y-10">
                        <div className="flex items-center gap-4">
                          <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                            <MapPin className="text-primary w-8 h-8" />
                            Varanasi to Bihar Fares
                          </h2>
                          <div className="h-px bg-slate-200 flex-1 mt-2" />
                          <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase">
                            {bihar.length} Active Routes
                          </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                          {bihar.map((route) => (
                            <FareCard key={route.id} route={route} />
                          ))}
                        </div>
                      </div>
                    )}

                    {delhiNCR.length > 0 && (
                      <div className="space-y-10">
                        <div className="flex items-center gap-4">
                          <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                            <MapPin className="text-primary w-8 h-8" />
                            Varanasi to Delhi-NCR Fares
                          </h2>
                          <div className="h-px bg-slate-200 flex-1 mt-2" />
                          <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase">
                            {delhiNCR.length} Active Routes
                          </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                          {delhiNCR.map((route) => (
                            <FareCard key={route.id} route={route} />
                          ))}
                        </div>
                      </div>
                    )}

                    {himachalPradesh.length > 0 && (
                      <div className="space-y-10">
                        <div className="flex items-center gap-4">
                          <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                            <MapPin className="text-primary w-8 h-8" />
                            Varanasi to Himachal Pradesh Fares
                          </h2>
                          <div className="h-px bg-slate-200 flex-1 mt-2" />
                          <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase">
                            {himachalPradesh.length} Active Routes
                          </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                          {himachalPradesh.map((route) => (
                            <FareCard key={route.id} route={route} />
                          ))}
                        </div>
                      </div>
                    )}

                    {kolkata.length > 0 && (
                      <div className="space-y-10">
                        <div className="flex items-center gap-4">
                          <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                            <MapPin className="text-primary w-8 h-8" />
                            Varanasi to Kolkata Fares
                          </h2>
                          <div className="h-px bg-slate-200 flex-1 mt-2" />
                          <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase">
                            {kolkata.length} Active Routes
                          </span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                          {kolkata.map((route) => (
                            <FareCard key={route.id} route={route} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              // Special handling for Delhi
              if (city === "Delhi") {
                return (
                  <div key={city} className="space-y-16">
                    <div className="space-y-10">
                      <div className="flex items-center gap-4">
                        <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                          <MapPin className="text-primary w-8 h-8" />
                          Tempo Traveller Fares from {city}
                        </h2>
                        <div className="h-px bg-slate-200 flex-1 mt-2" />
                        <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase">
                          {cityRoutes.length} Active Routes
                        </span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        {cityRoutes.map((route) => (
                          <FareCard key={route.id} route={route} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Special handling for Noida
              if (city === "Noida") {
                return (
                  <div key={city} className="space-y-16">
                    <div className="space-y-10">
                      <div className="flex items-center gap-4">
                        <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                          <MapPin className="text-primary w-8 h-8" />
                          Tempo Traveller Fares from {city}
                        </h2>
                        <div className="h-px bg-slate-200 flex-1 mt-2" />
                        <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase">
                          {cityRoutes.length} Active Routes
                        </span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        {cityRoutes.map((route) => (
                          <FareCard key={route.id} route={route} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Special handling for Gurugram
              if (city === "Gurugram") {
                return (
                  <div key={city} className="space-y-16">
                    <div className="space-y-10">
                      <div className="flex items-center gap-4">
                        <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                          <MapPin className="text-primary w-8 h-8" />
                          Tempo Traveller Fares from {city}
                        </h2>
                        <div className="h-px bg-slate-200 flex-1 mt-2" />
                        <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase">
                          {cityRoutes.length} Active Routes
                        </span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        {cityRoutes.map((route) => (
                          <FareCard key={route.id} route={route} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Special handling for Faridabad
              if (city === "Faridabad") {
                return (
                  <div key={city} className="space-y-16">
                    <div className="space-y-10">
                      <div className="flex items-center gap-4">
                        <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                          <MapPin className="text-primary w-8 h-8" />
                          Tempo Traveller Fares from {city}
                        </h2>
                        <div className="h-px bg-slate-200 flex-1 mt-2" />
                        <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase">
                          {cityRoutes.length} Active Routes
                        </span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        {cityRoutes.map((route) => (
                          <FareCard key={route.id} route={route} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Special handling for Ghaziabad
              if (city === "Ghaziabad") {
                return (
                  <div key={city} className="space-y-16">
                    <div className="space-y-10">
                      <div className="flex items-center gap-4">
                        <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                          <MapPin className="text-primary w-8 h-8" />
                          Tempo Traveller Fares from {city}
                        </h2>
                        <div className="h-px bg-slate-200 flex-1 mt-2" />
                        <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase">
                          {cityRoutes.length} Active Routes
                        </span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        {cityRoutes.map((route) => (
                          <FareCard key={route.id} route={route} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Special handling for Bangalore
              if (city === "Bangalore") {
                return (
                  <div key={city} className="space-y-16">
                    <div className="space-y-10">
                      <div className="flex items-center gap-4">
                        <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                          <MapPin className="text-primary w-8 h-8" />
                          Tempo Traveller Fares from {city}
                        </h2>
                        <div className="h-px bg-slate-200 flex-1 mt-2" />
                        <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase">
                          {cityRoutes.length} Active Routes
                        </span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        {cityRoutes.map((route) => (
                          <FareCard key={route.id} route={route} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Special handling for Hyderabad
              if (city === "Hyderabad") {
                return (
                  <div key={city} className="space-y-16">
                    <div className="space-y-10">
                      <div className="flex items-center gap-4">
                        <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                          <MapPin className="text-primary w-8 h-8" />
                          Tempo Traveller Fares from {city}
                        </h2>
                        <div className="h-px bg-slate-200 flex-1 mt-2" />
                        <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase">
                          {cityRoutes.length} Active Routes
                        </span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        {cityRoutes.map((route) => (
                          <FareCard key={route.id} route={route} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Special handling for Hyderabad
              if (city === "Ludhiana") {
                return (
                  <div key={city} className="space-y-16">
                    <div className="space-y-10">
                      <div className="flex items-center gap-4">
                        <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                          <MapPin className="text-primary w-8 h-8" />
                          Tempo Traveller Fares from {city}
                        </h2>
                        <div className="h-px bg-slate-200 flex-1 mt-2" />
                        <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase">
                          {cityRoutes.length} Active Routes
                        </span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        {cityRoutes.map((route) => (
                          <FareCard key={route.id} route={route} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Special handling for Chandigarh
              if (city === "Chandigarh") {
                return (
                  <div key={city} className="space-y-16">
                    <div className="space-y-10">
                      <div className="flex items-center gap-4">
                        <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                          <MapPin className="text-primary w-8 h-8" />
                          Tempo Traveller Fares from {city}
                        </h2>
                        <div className="h-px bg-slate-200 flex-1 mt-2" />
                        <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase">
                          {cityRoutes.length} Active Routes
                        </span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-6">
                        {cityRoutes.map((route) => (
                          <FareCard key={route.id} route={route} />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Default rendering for all other cities
              return (
                <div key={city} className="space-y-16">
                  <div className="space-y-10">
                    <div className="flex items-center gap-4">
                      <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                        <MapPin className="text-primary w-8 h-8" />
                        Tempo Traveller Fares from {city}
                      </h2>
                      <div className="h-px bg-slate-200 flex-1 mt-2" />
                      <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase">
                        {cityRoutes.length} Active Routes
                      </span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      {cityRoutes.map((route) => (
                        <FareCard key={route.id} route={route} />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <FAQSection
          faqs={GLOBAL_FAQS}
          title="Tempo Traveller Fare & Booking FAQs"
        />
      </main>
    </div>
  );
}

import { FAQSection } from "../components/sections";
import { GLOBAL_FAQS } from "@/lib/faq-data";
import { TaxiRoute } from "@/lib/data";

function FareCard({ route }: { route: TaxiRoute }) {
  return (
    <a
      href={`/fare/${route.slug}`}
      className="group bg-white p-6 rounded-3xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 transition-transform">
        <ArrowRight className="w-5 h-5 text-primary" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 mb-1">
          <span className="p-1 px-2 bg-slate-50 rounded text-[9px] font-black text-slate-400 uppercase tracking-widest">
            {route.origin}
          </span>
          <ArrowRight className="w-2 h-2 text-slate-300" />
        </div>
        <h3 className="text-2xl font-black text-secondary tracking-tight group-hover:text-primary transition-colors">
          {route.destination}
        </h3>
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
              Fixed Fare Starts At
            </p>
            <p className="text-2xl font-black text-secondary group-hover:scale-110 transition-transform origin-right">
              ₹{calculateFare(route.distance, 18)}*
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
