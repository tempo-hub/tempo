"use client";

import { TaxiRoute } from "@/lib/data";
import { ArrowRight } from "lucide-react";

type Props = {
  route: TaxiRoute;
  allRoutes: TaxiRoute[];
};

export function RelatedRoutesSection({ route, allRoutes }: Props) {
  const relatedRoutes = allRoutes.filter(
    (r) => r.origin === route.origin && r.slug !== route.slug,
  );

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-black mb-10 text-center">
          Popular Routes from{" "}
          <span className="text-primary">{route.origin}</span>
        </h2>

        {/* Routes Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedRoutes.map((r) => (
            <a key={r.slug} href={`/fare/${r.slug}`} className="group">
              <div className="p-5 bg-white rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                {/* Route */}
                <p className="text-sm text-slate-500">{r.origin}</p>
                <p className="text-lg font-bold flex items-center gap-2">
                  → {r.destination}
                </p>

                {/* Distance */}
                <p className="text-sm text-slate-400 mt-2">{r.distance} km</p>

                {/* CTA */}
                <div className="flex items-center gap-2 mt-4 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition">
                  View Fare <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Destination Links */}
        {route.relatedDestinations && (
          <div className="mt-14 text-center">
            <div className="flex flex-wrap justify-center gap-3">
              {route.relatedDestinations?.map((r) => (
                <a
                  key={r.slug}
                  href={`/fare/${r.slug}`}
                  className="px-4 py-2 rounded-full bg-slate-100 hover:bg-primary hover:text-white text-sm font-medium transition"
                >
                  {r.origin} → {r.destination}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
