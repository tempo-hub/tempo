"use client";

import { VEHICLES, calculateFare, TaxiRoute } from "@/lib/data";
import { Button } from "./ui-base";
import { Info, ArrowUpRight, Phone, ShieldCheck } from "lucide-react";
import { useState } from "react";
import BookingModal from "./shared/BookingModal";

export const FareTable = ({ route }: { route: TaxiRoute }) => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <div className="w-full overflow-hidden rounded-2xl border border-border bg-white shadow-xl">
        {/* Header */}
        <div className="border-b border-border bg-gradient-to-r from-primary/5 to-white px-4 sm:px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h2 className="text-lg sm:text-xl font-black text-secondary">
                Tempo Traveller Fare List
              </h2>
              <p className="text-sm text-muted-foreground">
                {route.origin} → {route.destination} • Best Prices • Instant
                Booking
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs bg-green-50 text-green-700 px-3 py-2 rounded-xl font-semibold w-fit">
              <ShieldCheck className="h-4 w-4" />
              Verified Pricing
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-[1000px] w-full text-left">
            {/* Sticky Header */}
            <thead className="sticky top-0 z-10 bg-slate-50 border-b border-border">
              <tr>
                <th className="px-4 sm:px-6 py-4 text-xs font-black uppercase tracking-wider text-secondary">
                  Vehicle
                </th>
                <th className="px-4 sm:px-6 py-4 text-xs font-black uppercase tracking-wider text-secondary">
                  Distance
                </th>
                <th className="px-4 sm:px-6 py-4 text-xs font-black uppercase tracking-wider text-secondary">
                  Base Fare
                </th>
                <th className="px-4 sm:px-6 py-4 text-xs font-black uppercase tracking-wider text-secondary">
                  Toll / Tax
                </th>
                <th className="px-4 sm:px-6 py-4 text-xs font-black uppercase tracking-wider text-secondary">
                  Total Fare
                </th>
                <th className="px-4 sm:px-6 py-4 text-xs font-black uppercase tracking-wider text-secondary">
                  Booking
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border">
              {VEHICLES.map((v) => {
                const fare = calculateFare(route.distance, v.perKmRate);
                const total = fare + (route.tollEstimate || 450);
                const isCheapest = v.type === "9 Seater";

                return (
                  <tr
                    key={v.type}
                    className={`transition-all hover:bg-slate-50 hover:shadow-sm ${
                      isCheapest
                        ? "bg-green-50/70 border-l-4 border-green-500"
                        : ""
                    }`}
                  >
                    {/* Vehicle */}
                    <td className="px-4 sm:px-6 py-5">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-secondary text-sm sm:text-base">
                            {v.type}
                          </span>

                          {isCheapest && (
                            <span className="text-[10px] bg-green-600 text-white px-2 py-0.5 rounded-full font-bold uppercase">
                              Best Deal
                            </span>
                          )}
                        </div>

                        <span className="text-xs text-muted-foreground">
                          {v.name}
                        </span>
                      </div>
                    </td>

                    {/* Distance */}
                    <td className="px-4 sm:px-6 py-5 whitespace-nowrap font-medium">
                      {route.distance} km
                    </td>

                    {/* Fare */}
                    <td className="px-4 sm:px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-lg font-black text-secondary">
                          ₹{fare}
                        </span>
                        <span className="text-[10px] uppercase text-muted-foreground">
                          Fixed Fare
                        </span>
                      </div>
                    </td>

                    {/* Toll */}
                    <td className="px-4 sm:px-6 py-5">
                      <span className="font-bold text-amber-600">
                        ₹{route.tollEstimate || 450}
                      </span>
                    </td>

                    {/* Total */}
                    <td className="px-4 sm:px-6 py-5">
                      <div className="flex flex-col">
                        <span className="text-lg font-black text-secondary">
                          ₹{total}
                        </span>

                        {isCheapest && (
                          <span className="text-[10px] text-green-600 font-bold uppercase">
                            Lowest Price
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Action */}
                    <td className="px-4 sm:px-6 py-5">
                      <div className="flex flex-col sm:flex-row gap-2 min-w-[180px]">
                        <Button
                          size="sm"
                          variant={isCheapest ? "primary" : "secondary"}
                          className="h-10 px-4 rounded-xl w-full font-semibold"
                          onClick={() => setIsBookingOpen(true)}
                        >
                          Book Now
                          <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Button>

                        <a href="tel:8448445504">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-10 px-4 rounded-xl w-full"
                          >
                            <Phone className="mr-1 h-4 w-4" />
                            Call
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

        {/* Bottom Trust Section */}
        <div className="border-t border-border bg-slate-50 px-4 sm:px-6 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium">
              <Info className="h-4 w-4 text-primary" />
              Last Updated: 25 February 2026
            </div>

            <p className="text-[11px] text-muted-foreground text-center lg:text-right">
              * GST Included. Toll, State Tax & Parking extra as applicable.
            </p>
          </div>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};
