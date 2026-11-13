
"use client";

import { useState } from "react";
import {
  Users,
  IndianRupee,
  Calculator,
  ShieldCheck,
  MapPin,
  Phone,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import type { VehicleFare } from "@/lib/data";

interface VehicleAdditionalSectionsProps {
  vehicle: VehicleFare;
  serviceAreas?: string[];
}

export default function VehicleAdditionalSections({
  vehicle,
  serviceAreas = [],
}: VehicleAdditionalSectionsProps) {
  const [distance, setDistance] = useState<number>(100);

  const totalDistance = Number(distance) || 0;
  const estimatedFare = totalDistance * vehicle.perKmRate;

  const phoneNumber = "919417184683";

  const whatsappMessage = encodeURIComponent(
    `Hello, I want to enquire about ${vehicle.name}. Please share the details and final fare.`
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

const MIN_DISTANCE = 10;
const MAX_DISTANCE = 1000;
const STEP_DISTANCE = 10;

  return (
    <div className="bg-white">
      {/* 1. VEHICLE OVERVIEW & SPECIFICATIONS */}
      <div className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-8 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Vehicle Information
            </span>

            <h2 className="mt-2 text-2xl font-extrabold text-secondary sm:text-3xl">
              {vehicle.name} Specifications
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Explore the seating capacity, rental rate and available
              features of our {vehicle.name}.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <Users className="mb-3 h-6 w-6 text-primary" />

              <p className="text-sm text-slate-500">
                Seating Capacity
              </p>

              <h3 className="mt-1 text-xl font-bold text-secondary">
                {vehicle.seating}
              </h3>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <Users className="mb-3 h-6 w-6 text-primary" />

              <p className="text-sm text-slate-500">
                Passenger Capacity
              </p>

              <h3 className="mt-1 text-xl font-bold text-secondary">
                {vehicle.capacity} Passengers
              </h3>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <IndianRupee className="mb-3 h-6 w-6 text-primary" />

              <p className="text-sm text-slate-500">
                Starting Rate
              </p>

              <h3 className="mt-1 text-xl font-bold text-secondary">
                ₹{vehicle.perKmRate}/km
              </h3>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <CheckCircle className="mb-3 h-6 w-6 text-primary" />

              <p className="text-sm text-slate-500">
                Vehicle Category
              </p>

              <h3 className="mt-1 text-xl font-bold text-secondary">
                {vehicle.type}
              </h3>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 p-5 sm:p-7">
            <h3 className="mb-4 text-lg font-bold text-secondary">
              Available Vehicle Features
            </h3>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {vehicle.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-slate-700"
                >
                  <CheckCircle className="h-4 w-4 shrink-0 text-green-600" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
{/* FARE CALCULATOR SECTION */}
<section className="bg-slate-50 py-12 sm:py-16">
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <div className="mx-auto mb-8 max-w-2xl text-center">
      <span className="text-xs font-bold uppercase tracking-wider text-primary">
        Trip Fare Estimate
      </span>

      <h2 className="mt-2 text-2xl font-extrabold text-secondary sm:text-3xl">
        Calculate {vehicle.name} Rental Fare
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        Adjust the distance slider to estimate your
        {` ${vehicle.name}`} rental fare.
      </p>
    </div>

    {/* Calculator Card */}
    <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 md:grid-cols-2">

      {/* LEFT SIDE - DISTANCE SLIDER */}
      <div>
        <div className="mb-5 flex items-center justify-between gap-3">
          <label
            htmlFor="vehicle-distance"
            className="text-sm font-semibold text-secondary"
          >
            Select Total Distance
          </label>

          <span className="rounded-lg bg-primary/10 px-3 py-2 text-sm font-bold text-primary">
            {distance} KM
          </span>
        </div>

        {/* Range Slider */}
        <input
          id="vehicle-distance"
          type="range"
          min={MIN_DISTANCE}
          max={MAX_DISTANCE}
          step={STEP_DISTANCE}
          value={distance}
          onChange={(e) => setDistance(Number(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-primary"
          aria-label="Select total travel distance in kilometres"
        />

        {/* Slider Min / Max */}
        <div className="mt-2 flex justify-between text-xs text-slate-500">
          <span>{MIN_DISTANCE} KM</span>
          <span>{MAX_DISTANCE} KM</span>
        </div>

        {/* Number Input */}
        <div className="mt-6">
          <label
            htmlFor="distance-input"
            className="mb-2 block text-sm font-semibold text-secondary"
          >
            Enter Distance Manually
          </label>

          <div className="relative">
            <input
              id="distance-input"
              type="number"
              min={MIN_DISTANCE}
              max={MAX_DISTANCE}
              step={STEP_DISTANCE}
              value={distance}
              onChange={(e) => {
                const value = Number(e.target.value);

                if (e.target.value === "") {
                  setDistance(MIN_DISTANCE);
                  return;
                }

                setDistance(
                  Math.min(
                    MAX_DISTANCE,
                    Math.max(MIN_DISTANCE, value)
                  )
                );
              }}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-14 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />

            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-slate-500">
              KM
            </span>
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="mt-5 space-y-2 rounded-xl bg-slate-50 p-4">
          <div className="flex justify-between gap-3 text-sm">
            <span className="text-slate-500">Vehicle</span>
            <span className="font-semibold text-secondary">
              {vehicle.name}
            </span>
          </div>

          <div className="flex justify-between gap-3 text-sm">
            <span className="text-slate-500">Seating Capacity</span>
            <span className="font-semibold text-secondary">
              {vehicle.seating}
            </span>
          </div>

          <div className="flex justify-between gap-3 text-sm">
            <span className="text-slate-500">Rate Per KM</span>
            <span className="font-semibold text-secondary">
              ₹{vehicle.perKmRate}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - FARE RESULT */}
      <div className="flex flex-col justify-between rounded-xl bg-primary/5 p-5 sm:p-6">

        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Calculator className="h-5 w-5" />
            </span>
            Estimated Basic Fare
          </div>

          <h3 className="mt-5 text-3xl font-extrabold text-primary sm:text-4xl">
            ₹{estimatedFare.toLocaleString("en-IN")}
          </h3>

          <p className="mt-3 text-sm text-slate-500">
            {distance} KM × ₹{vehicle.perKmRate}/KM
          </p>

          <div className="my-6 border-t border-slate-200" />

          <div className="flex justify-between gap-3 text-sm">
            <span className="text-slate-500">
              Total Distance
            </span>

            <span className="font-bold text-secondary">
              {distance} KM
            </span>
          </div>

          <div className="mt-3 flex justify-between gap-3 text-sm">
            <span className="text-slate-500">
              Per KM Rate
            </span>

            <span className="font-bold text-secondary">
              ₹{vehicle.perKmRate}
            </span>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <a
          href={`${whatsappUrl}&distance=${distance}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700"
        >
          <MessageCircle className="h-4 w-4" />
          Get Final Trip Quote
        </a>
      </div>
    </div>

    {/* Note */}
    <p className="mt-4 text-center text-xs leading-6 text-slate-500">
      Note: This is an indicative basic fare calculated using
      distance × per kilometre rate. Minimum running, driver
      allowance, toll tax, parking, state tax and other applicable
      charges are not included. Contact us for the final quotation.
    </p>

  </div>
</section>


      {/* 3. WHY CHOOSE CHIKU CABS */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-8 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Our Booking Support
            </span>

            <h2 className="mt-2 text-2xl font-extrabold text-secondary sm:text-3xl">
                Why Choose Our {vehicle.name} Rental Service?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Get assistance in selecting a suitable vehicle and
              understanding your trip rental requirements.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 p-6">
              <Users className="mb-4 h-7 w-7 text-primary" />

              <h3 className="font-bold text-secondary">
                Multiple Vehicle Options
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Explore different seating capacities for your group.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <IndianRupee className="mb-4 h-7 w-7 text-primary" />

              <h3 className="font-bold text-secondary">
                Fare Information
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Understand per kilometre rates and applicable trip charges.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <ShieldCheck className="mb-4 h-7 w-7 text-primary" />

              <h3 className="font-bold text-secondary">
                Booking Assistance
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Share your travel requirements and discuss booking details.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-6">
              <Calculator className="mb-4 h-7 w-7 text-primary" />

              <h3 className="font-bold text-secondary">
                Trip Fare Estimate
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Calculate an indicative fare using your travel distance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE AREAS */}
      {serviceAreas.length > 0 && (
        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <div className="mx-auto mb-8 max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Our Coverage
              </span>

              <h2 className="mt-2 text-2xl font-extrabold text-secondary sm:text-3xl">
                {vehicle.name} Rental Service Areas
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Explore the locations where you can enquire about
                {` ${vehicle.name}`} rental services.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />

                  <span className="text-sm font-semibold text-secondary">
                    {area}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 5. FINAL CONTACT & BOOKING CTA */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="overflow-hidden rounded-2xl bg-secondary p-6 text-white sm:p-10">

            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-white/70">
                  Plan Your Journey
                </span>

                <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                  Book Your {vehicle.name} for a Comfortable Journey
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/80">
                  Contact our team with your pickup location,
                  destination and travel date to discuss your
                  {` ${vehicle.name}`} booking.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">

                <a
                  href="tel:+919417184683"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-secondary transition hover:bg-slate-100"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Now
                </a>

              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
