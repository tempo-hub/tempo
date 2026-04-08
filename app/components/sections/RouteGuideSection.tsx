"use client";

import { TaxiRoute } from "@/lib/data";
import { MapPin, Navigation, AlertTriangle, Info } from "lucide-react";

export function RouteGuideSection({ route }: { route: TaxiRoute }) {
  const { routeGuide } = route;
  
  if (!routeGuide) return null;

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            <Navigation className="w-4 h-4" />
            <span>Route Information</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            Route Guide
          </h2>
          <div className="flex items-center justify-center gap-3 text-lg text-slate-600">
            <span className="font-semibold">{route.origin}</span>
            <span className="text-primary">→</span>
            <span className="font-semibold">{route.destination}</span>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Primary Route - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Route Card */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="border-b border-slate-200 bg-slate-50/50 px-6 py-4">
                <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Primary Route
                </h3>
              </div>
              <div className="p-6">
                <p className="text-slate-700 leading-relaxed">
                  {routeGuide.primaryRoute}
                </p>
              </div>
            </div>

            {/* Road Conditions Card */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="border-b border-slate-200 bg-slate-50/50 px-6 py-4">
                <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  Road Conditions
                </h3>
              </div>
              <div className="p-6">
                <p className="text-slate-700 leading-relaxed">
                  {routeGuide.roadCondition}
                </p>
              </div>
            </div>
          </div>

          {/* Stopovers Sidebar */}
          {routeGuide.stopovers && routeGuide.stopovers.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 sticky top-6">
                <div className="border-b border-slate-200 bg-slate-50/50 px-6 py-4">
                  <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary" />
                    Stopover Points
                    <span className="ml-auto text-sm font-normal text-slate-500">
                      {routeGuide.stopovers.length} locations
                    </span>
                  </h3>
                </div>
                <div className="divide-y divide-slate-100">
                  {routeGuide.stopovers.map((stopover, index) => (
                    <div key={index} className="p-6 hover:bg-slate-50 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-slate-900 mb-1">
                            {stopover.name}
                          </h4>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {stopover.purpose}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}