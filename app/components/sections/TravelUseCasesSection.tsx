"use client";

import { TaxiRoute } from "@/lib/data";
import {
  Briefcase,
  Users,
  CheckCircle2,
  Sparkles,
  TrendingUp,
  Crown,
} from "lucide-react";
import { useState } from "react";
import BookingModal from "../shared/BookingModal";

const iconMap = {
  business: Briefcase,
  family: Users,
  luxury: Crown,
  budget: TrendingUp,
  default: Sparkles,
};

export function TravelUseCasesSection({ route }: { route: TaxiRoute }) {
  const cases = route.travelUseCases || {};
  const values = Object.values(cases);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  if (values.length === 0) return null;

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Travel Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Perfect For Every Travel Need
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the perfect ride tailored to your specific requirements
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map(
              (
                useCase: {
                  type?: string;
                  title: string;
                  description: string;
                  features?: string[];
                  recommendedSeater?: string;
                },
                index,
              ) => {
                const Icon =
                  iconMap[useCase.type as keyof typeof iconMap] ||
                  iconMap.default;

                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-primary/20 overflow-hidden"
                  >
                    {/* Decorative gradient bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/40 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                    <div className="p-6">
                      {/* Icon with gradient background */}
                      <div className="mb-5 inline-flex p-3 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                        {useCase.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {useCase.description}
                      </p>

                      {/* Features List */}
                      {useCase.features && useCase.features.length > 0 && (
                        <div className="mb-4">
                          <div className="space-y-2">
                            {useCase.features.map(
                              (feature: string, idx: number) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-slate-600">
                                    {feature}
                                  </span>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      )}

                      {/* Recommended Seater Badge */}
                      {useCase.recommendedSeater && (
                        <div className="mt-4 pt-4 border-t border-slate-100">
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-lg">
                            <Users className="w-3.5 h-3.5 text-primary" />
                            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                              Recommended
                            </span>
                            <span className="text-sm font-bold text-primary ml-1">
                              {useCase.recommendedSeater}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>
                );
              },
            )}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-lg cursor-pointer"
            >
              <span>Book Your Ride Now</span>
              <TrendingUp className="w-4 h-4" />
            </button>
            <p className="text-sm text-slate-500 mt-3">
              Free cancellation • 24/7 support • Best price guarantee
            </p>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
