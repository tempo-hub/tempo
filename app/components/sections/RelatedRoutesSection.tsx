"use client";

import { useState } from "react";
import { TaxiRoute } from "@/lib/data";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

type Props = {
  route: TaxiRoute;
  allRoutes: TaxiRoute[];
};

export function RelatedRoutesSection({ route, allRoutes }: Props) {
  const [showAll, setShowAll] = useState(false);

  const relatedRoutes = allRoutes.filter(
    (r) => r.origin === route.origin && r.slug !== route.slug,
  );

  const visibleRoutes = showAll ? relatedRoutes : relatedRoutes.slice(0, 6);

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-black mb-10 text-center">
          Popular Routes from{" "}
          <span className="text-primary capitalize">{route.origin}</span>
        </h2>

        {/* Routes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleRoutes.map((r) => (
            <a key={r.slug} href={`/fare/${r.slug}`} className="group">
              <div className="p-5 bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <p className="text-sm text-slate-500 capitalize">{r.origin}</p>

                <p className="text-lg font-bold flex items-center gap-2">
                  → {r.destination}
                </p>

                <p className="text-sm text-slate-400 mt-2">{r.distance} km</p>

                <div className="flex items-center gap-2 mt-4 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition">
                  View Fare <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Read More Button */}
        {relatedRoutes.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:scale-105 transition"
            >
              {showAll ? "Show Less" : "Read More Routes"}

              {showAll ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
