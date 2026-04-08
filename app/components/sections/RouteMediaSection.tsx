"use client";

import { TaxiRoute, calculateFare, VEHICLES } from "@/lib/data";
import { MapPin, ShieldCheck, Star } from "lucide-react";
import { useMemo, useState } from "react";

type Props = {
  route: TaxiRoute;
};

export function RouteMediaSection({ route }: Props) {
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[0]);
  const fare = useMemo(() => {
    return calculateFare(route.distance, selectedVehicle.perKmRate);
  }, [route.distance, selectedVehicle]);

  const whatsappMessage = `Hi YatraTempoTraveller, I want to book a tempo traveller from ${route.origin} to ${route.destination}. 
      Vehicle: ${selectedVehicle.name} (${selectedVehicle.type})
      Trip Type: Round Trip
      Estimated Fare: ₹${fare}`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=+916280820037&text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      {/* Heading */}
      <div className="text-center mb-14 px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
          Journey Preview
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Experience a smooth ride from {route.origin} to {route.destination}{" "}
          with comfort, safety, and flexibility.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto px-4 items-center">
        {/* LEFT SIDE - CONTENT CARD */}
        <div className="relative bg-white rounded-3xl shadow-xl border border-slate-200 p-8 md:p-10">
          {/* Badge */}
          <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
            🚐 Premium Travel Experience
          </span>

          {/* Description */}
          <p className="text-base md:text-lg leading-relaxed text-slate-700 mb-6">
            {route.media?.description ||
              "Enjoy a smooth and comfortable journey with our premium tempo traveller service. Spacious seating, AC comfort, and flexible stops ensure a stress-free travel experience."}
          </p>

          {/* Highlights */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-slate-700">
              <MapPin className="w-5 h-5 text-primary" />
              Door-to-door pickup & drop
            </div>

            <div className="flex items-center gap-3 text-slate-700">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              Safe & verified drivers
            </div>

            <div className="flex items-center gap-3 text-slate-700">
              <Star className="w-5 h-5 text-yellow-500" />
              Highly rated by travelers
            </div>
          </div>

          {/* CTA */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <button className="mt-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition cursor-pointer">
              Book Your Ride →
            </button>
          </a>
        </div>

        {/* RIGHT SIDE - MAP CARD */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-2xl rounded-3xl"></div>

          <div className="relative w-full h-[320px] md:h-[380px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
            {route.media?.mapEmbedUrl ? (
              <iframe
                src={route.media.mapEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${route.origin} to ${route.destination} route map`}
              />
            ) : (
              <div className="h-full flex items-center justify-center bg-slate-200 text-slate-600">
                Map not available
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
