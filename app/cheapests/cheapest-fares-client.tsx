"use client";

import { useState, useMemo } from "react";
import { ROUTES, calculateFare } from "@/lib/data";
import { Search, Globe, ShieldCheck, TrendingDown } from "lucide-react";
import { TaxiRoute } from "@/lib/data";

export default function CheapestFaresClient() {
  const [search, setSearch] = useState("");

  // Sort by cheapest fare
  const sortedRoutes = useMemo(() => {
    return [...ROUTES]
      .map((route) => ({
        ...route,
        fare: calculateFare(route.distance, 18),
      }))
      .sort((a, b) => a.fare - b.fare);
  }, []);

  // Search filter
  const filteredRoutes = sortedRoutes.filter((route) =>
    `${route.origin} ${route.destination}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );

  const routesByCity = useMemo(() => {
    return sortedRoutes.reduce(
      (acc, route) => {
        if (!acc[route.origin]) acc[route.origin] = [];
        acc[route.origin].push(route);
        return acc;
      },
      {} as Record<string, typeof sortedRoutes>,
    );
  }, [sortedRoutes]);

  const cities = Object.keys(routesByCity).sort();

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
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Cheapest{" "}
            <span className="text-primary italic">Tempo Traveller</span> Routes
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

      {/* 🚀 ROUTES SECTION */}
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {search ? (
          // SEARCH RESULT
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {filteredRoutes.length} Cheapest Routes Found
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {filteredRoutes.map((route) => (
                <CheapestCard key={route.id} route={route} />
              ))}
            </div>
          </div>
        ) : (
          // CITY-WISE CHEAPEST
          cities.map((city) => (
            <div key={city} className="space-y-6">
              <h2 className="text-3xl font-black text-green-600">
                🔥 Cheapest Tempo Traveller from {city}
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {routesByCity[city].slice(0, 6).map((route) => (
                  <CheapestCard key={route.id} route={route} />
                ))}
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}

function CheapestCard({ route }: { route: TaxiRoute & { fare: number } }) {
  return (
    <a
      href={`/cheapest/${route.slug}`}
      className="group bg-green-50 p-6 rounded-3xl border border-green-200 hover:border-green-400 hover:shadow-xl transition"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full font-bold">
          CHEAPEST
        </span>
        <span className="text-xs text-slate-400">{route.distance} KM</span>
      </div>

      <h3 className="text-xl font-black text-green-700">
        {route.origin} → {route.destination}
      </h3>

      <p className="text-2xl font-black mt-3 text-green-700">₹{route.fare}</p>
    </a>
  );
}
