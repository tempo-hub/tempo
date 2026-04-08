"use client";

import { TaxiRoute } from "@/lib/data";
import { Check, X, AlertTriangle } from "lucide-react";

type Props = {
  route: TaxiRoute;
  fare: number;
};

export function RouteComparisonSection({ route, fare }: Props) {
  const data = route.comparisonTable;

  const defaultRows = [
    {
      feature: "Door to door",
      tempo: "yes",
      cab: "limited",
      train: "no",
    },
    {
      feature: "Cost for 12 people",
      tempo: "dynamic",
      cab: "dynamic",
      train: "dynamic",
    },
    {
      feature: "Privacy",
      tempo: "full",
      cab: "shared",
      train: "public",
    },
    {
      feature: "Luggage space",
      tempo: "large",
      cab: "small",
      train: "limited",
    },
    {
      feature: "Flexible stops",
      tempo: "yes",
      cab: "limited",
      train: "no",
    },
  ];

  const rows = data?.rows || defaultRows;

  const title = data?.title || "Why Tempo Traveller is the Best Choice?";
  const subtitle =
    data?.subtitle ||
    `Compare travel options from ${route.origin} to ${route.destination}`;

  const highlightNote =
    data?.highlightNote ||
    "Save up to 60% cost when traveling in a group with Tempo Traveller.";

  // Helper UI
  const renderIcon = (value: string) => {
    if (value === "yes") return <Check className="text-green-600 w-5 h-5" />;
    if (value === "no") return <X className="text-red-500 w-5 h-5" />;
    if (value === "limited")
      return <AlertTriangle className="text-yellow-500 w-5 h-5" />;
    return value;
  };

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">
          {title}
        </h2>
        <p className="text-slate-600 text-sm md:text-base">{subtitle}</p>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm md:text-base">
            <thead>
              <tr className="bg-slate-900 text-white text-left">
                <th className="p-5">Feature</th>
                <th className="p-5 text-primary font-bold">
                  🚐 Tempo Traveller
                </th>
                <th className="p-5">🚕 Local Cab</th>
                <th className="p-5">🚆 Train (3AC)</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-b last:border-none hover:bg-slate-50 transition"
                >
                  {/* Feature */}
                  <td className="p-5 font-semibold text-slate-700">
                    {row.feature}
                  </td>

                  {/* Tempo (highlighted column) */}
                  <td className="p-5 bg-primary/5 font-bold text-primary">
                    {row.tempo === "dynamic"
                      ? `₹${fare}`
                      : renderIcon(row.tempo)}
                  </td>

                  {/* Cab */}
                  <td className="p-5 text-slate-700">
                    {row.cab === "dynamic"
                      ? `₹${Math.round(fare * 1.4)}`
                      : renderIcon(row.cab)}
                  </td>

                  {/* Train */}
                  <td className="p-5 text-slate-700">
                    {row.train === "dynamic"
                      ? `₹300 + taxi`
                      : renderIcon(row.train)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Highlight Box */}
      <div className="mt-8 text-center">
        <div className="inline-block bg-gradient-to-r from-primary to-purple-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold text-sm md:text-base">
          💰 {highlightNote}
        </div>
      </div>
    </section>
  );
}
