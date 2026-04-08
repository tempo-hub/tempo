"use client";

import { TaxiRoute } from "@/lib/data";
import {
  Car,
  Fuel,
  Shield,
  Clock,
  Route as RouteIcon,
  IndianRupee,
  CheckCircle2,
} from "lucide-react";

type Props = {
  route: TaxiRoute;
  fare: number;
  ratePerKm: number;
};

export function PricingSection({ route, fare, ratePerKm }: Props) {
  const includedItems = route.pricingDetails?.includedFree || [
    "Driver charges included",
    "Fuel and toll taxes",
    "24/7 customer support",
    "Clean and sanitized cars",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No hidden charges, no surge pricing. What you see is what you pay.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Fare Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <IndianRupee className="w-5 h-5" />
                Total Fare
              </h3>
            </div>

            <div className="p-6">
              <div className="mb-6">
                <div className="text-5xl font-bold text-slate-900 mb-2">
                  ₹{fare.toLocaleString()}
                </div>
                <p className="text-slate-500 text-sm">
                  Inclusive of all taxes and charges
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Base Fare</span>
                  <span className="font-semibold text-slate-900">
                    ₹{ratePerKm.toFixed(2)}/km
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-600">Total Distance</span>
                  <span className="font-semibold text-slate-900">
                    {route.distance} km
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                  <span className="font-semibold text-slate-900">
                    Final Amount
                  </span>
                  <span className="text-xl font-bold text-blue-600">
                    ₹{fare.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Calculation Breakdown */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-4">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <RouteIcon className="w-5 h-5" />
                Fare Breakdown
              </h3>
            </div>

            <div className="p-6">
              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <div className="text-sm text-blue-800 font-medium mb-2">
                  Calculation Method
                </div>
                <div className="text-2xl font-bold text-blue-900">
                  {route.distance} km × ₹{ratePerKm}/km
                </div>
                <div className="text-lg font-semibold text-blue-700 mt-2">
                  = ₹{fare}
                </div>
                <p className="text-xs text-blue-600 mt-2">
                  {route.pricingDetails?.perKmRateDescription ||
                    `Standard rate applies for ${route.distance} km journey`}
                </p>
              </div>

              <div className="text-sm text-slate-500 flex items-center justify-between">
                <span>Per kilometer rate</span>
                <span className="font-mono font-semibold">₹{ratePerKm}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Included Items Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <div className="px-6 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700">
            <h3 className="text-white font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              What's Included
            </h3>
          </div>

          <div className="p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {includedItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Car, label: "Clean & Sanitized", color: "blue" },
            { icon: Fuel, label: "Fuel Included", color: "orange" },
            { icon: Shield, label: "Safe & Secure", color: "green" },
            { icon: Clock, label: "On-time Service", color: "purple" },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-3 text-center border border-slate-100 shadow-sm"
            >
              <feature.icon
                className={`w-5 h-5 text-${feature.color}-600 mx-auto mb-2`}
              />
              <p className="text-xs font-medium text-slate-600">
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
