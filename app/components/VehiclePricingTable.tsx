"use client";

import { VEHICLES } from "@/lib/data";
import { Button } from "./ui-base";
import { ArrowUpRight, Info } from "lucide-react";

export const VehiclePricingTable = () => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-border">
              <th className="px-6 py-5 text-xs font-black uppercase tracking-widest text-secondary">
                Vehicle Type
              </th>
              <th className="px-6 py-5 text-xs font-black uppercase tracking-widest text-secondary">
                Seating
              </th>
              <th className="px-6 py-5 text-xs font-black uppercase tracking-widest text-secondary">
                Price / KM
              </th>
              <th className="px-6 py-5 text-xs font-black uppercase tracking-widest text-secondary">
                Best For
              </th>
              <th className="px-6 py-5 text-xs font-black uppercase tracking-widest text-secondary">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {VEHICLES.map((v) => {
              const isPopular = v.type === "12 Seater";

              return (
                <tr
                  key={v.type}
                  className={`hover:bg-slate-50/80 transition-colors ${
                    isPopular ? "bg-primary/5" : ""
                  }`}
                >
                  {/* Vehicle */}
                  <td className="px-6 py-6">
                    <div className="flex flex-col">
                      <span className="font-bold text-secondary">{v.type}</span>
                      <span className="text-[11px] text-muted-foreground">
                        {v.name}
                      </span>
                    </div>
                  </td>

                  {/* Seating */}
                  <td className="px-6 py-6 font-medium">{v.seating} People</td>

                  {/* Price */}
                  <td className="px-6 py-6">
                    <div className="flex flex-col">
                      <span className="text-lg font-black text-green-600">
                        ₹{v.perKmRate}/km
                      </span>
                      <span className="text-[10px] text-muted-foreground uppercase font-bold">
                        All Inclusive
                      </span>
                    </div>
                  </td>

                  {/* Best For */}
                  <td className="px-6 py-6">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        v.capacity <= 12
                          ? "bg-green-100 text-green-700"
                          : v.capacity <= 17
                            ? "bg-blue-100 text-blue-700"
                            : "bg-purple-100 text-purple-700"
                      }`}
                    >
                      {v.capacity <= 12
                        ? "Small Family"
                        : v.capacity <= 17
                          ? "Medium Group"
                          : "Large Group"}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-6 py-6">
                    <div className="flex gap-2">
                      <a
                        href={`https://api.whatsapp.com/send?phone=+916280820037&text=Booking ${v.type} tempo traveller`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant={isPopular ? "primary" : "secondary"}
                          className="h-9 px-4 rounded-lg group"
                        >
                          Book
                          <ArrowUpRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Button>
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="bg-slate-50 p-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-medium">
          <Info className="h-3.5 w-3.5 text-primary" />
          <span>Updated Pricing for 2026</span>
        </div>
        <p className="text-[10px] text-muted-foreground italic">
          * Prices may vary depending on route, season & availability.
        </p>
      </div>
    </div>
  );
};
