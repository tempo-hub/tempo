"use client";

import { TaxiRoute } from "@/lib/data";
import {
  MapPin,
  Landmark,
  Sparkles,
  Clock,
  UtensilsCrossed,
  Calendar,
  Lightbulb,
  Compass,
  Star,
  TrendingUp,
  Shield,
  Heart,
} from "lucide-react";
import { useState } from "react";
import { VEHICLES, calculateFare } from "@/lib/data";
import { useMemo } from "react";

export function CityGuideSection({ route }: { route: TaxiRoute }) {
  const guide = route.cityGuide;
  const [activeTab, setActiveTab] = useState<"attractions" | "significance">(
    "attractions",
  );
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[0]);
  const fare = useMemo(() => {
    return calculateFare(route.distance, selectedVehicle.perKmRate);
  }, [route.distance, selectedVehicle]);

  const whatsappMessage = `Hi YatraTempoTraveller, I want to book a tempo traveller from ${route.origin} to ${route.destination}. 
  Vehicle: ${selectedVehicle.name} (${selectedVehicle.type})
  Trip Type: Round Trip
  Estimated Fare: ₹${fare}`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=+916280820037&text=${encodeURIComponent(whatsappMessage)}`;

  if (!guide) return null;

  const ICONS = {
    bestTime: Calendar,
    duration: Clock,
    food: UtensilsCrossed,
    festivals: Calendar,
  };

  const quickInfoItems = [
    {
      label: "Best Time",
      value: guide.bestTimeToVisit,
      icon: ICONS.bestTime,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Ideal Duration",
      value: guide.idealDuration,
      icon: ICONS.duration,
      color: "from-emerald-500 to-teal-500",
    },
    {
      label: "Famous Food",
      value: guide.localFood?.join(", "),
      icon: ICONS.food,
      color: "from-orange-500 to-red-500",
    },
    {
      label: "Festivals",
      value: guide.festivals?.join(", "),
      icon: ICONS.festivals,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header with Decorative Elements */}
        <div className="relative text-center mb-16">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <Compass className="w-64 h-64" />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                City Guide
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
              Explore{" "}
              <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-3 h-3 bg-primary/30 -z-10"></span>
                <span className="text-primary italic">{route.destination}</span>
              </span>
            </h2>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Your complete travel companion for an unforgettable journey
              through
              <span className="font-semibold text-slate-800">
                {" "}
                {route.destination}
              </span>
            </p>
          </div>
        </div>

        {/* Modern Overview Card with Gradient Accent */}
        <div className="relative mb-12 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-primary/40"></div>
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-xl">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Overview</h3>
              </div>

              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p className="text-lg font-medium text-slate-700">
                  {guide.overview}
                </p>
                <p className="border-l-4 border-primary/30 pl-4 italic">
                  {guide.detailedDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabbed Attractions & Significance Section */}
        <div className="mb-12">
          <div className="flex gap-2 mb-8 border-b border-slate-200">
            <button
              onClick={() => setActiveTab("attractions")}
              className={`px-6 py-3 font-semibold transition-all relative ${
                activeTab === "attractions"
                  ? "text-primary"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Key Attractions
              </span>
              {activeTab === "attractions" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
              )}
            </button>

            <button
              onClick={() => setActiveTab("significance")}
              className={`px-6 py-3 font-semibold transition-all relative ${
                activeTab === "significance"
                  ? "text-primary"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <span className="flex items-center gap-2">
                <Landmark className="w-4 h-4" />
                Cultural Significance
              </span>
              {activeTab === "significance" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
              )}
            </button>
          </div>

          <div className="animate-fadeIn">
            {activeTab === "attractions" ? (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {guide.keyAttractions?.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Star className="w-4 h-4 text-primary" />
                        </div>
                        <h4 className="font-bold text-slate-800 group-hover:text-primary transition-colors">
                          {item}
                        </h4>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <TrendingUp className="w-3 h-3" />
                        <span>Must visit</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {guide.significance?.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-primary/20"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-amber-50 rounded-xl group-hover:bg-amber-100 transition-colors">
                        <Heart className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
                          {item}
                        </p>
                        {idx < 2 && (
                          <span className="inline-block mt-3 text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Quick Info Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickInfoItems.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                ></div>
                <div className="p-6 text-center relative z-10">
                  <Icon
                    className={`w-6 h-6 mx-auto mb-3 bg-gradient-to-br ${item.color} bg-clip-text`}
                  />
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-slate-800 line-clamp-2">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modern Travel Tips with Gradient Background */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 p-8 md:p-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>

          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white rounded-xl shadow-md">
                <Lightbulb className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">
                Pro Travel Tips
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {guide.travelTips?.map((tip, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white transition-all group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-slate-700 group-hover:text-slate-900 transition-colors">
                    {tip}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-amber-200/50">
              <div className="flex items-center gap-2 text-xs text-amber-700">
                <Shield className="w-4 h-4" />
                <span>
                  Local insights to make your trip smoother and more enjoyable
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
              <Compass className="w-5 h-5" />
              Start Your Journey to {route.destination}
              <span className="text-xl">→</span>
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
