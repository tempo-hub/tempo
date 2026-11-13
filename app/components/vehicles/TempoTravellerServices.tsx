
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Users,
} from "lucide-react";

import { VEHICLES, type VehicleFare } from "@/lib/data";

interface TempoTravellerServicesProps {
  currentVehicle: VehicleFare;
}

const WHATSAPP_NUMBER = "919417184683";

export default function TempoTravellerServices({
  currentVehicle,
}: TempoTravellerServicesProps) {

  // Exclude currently selected vehicle
  const otherVehicles = VEHICLES.filter(
    (item) => item.slug !== currentVehicle.slug
  );

  const getWhatsAppUrl = (vehicle: VehicleFare) => {
    const message = `Hello, I am interested in booking a ${vehicle.name}. Please share availability and booking details.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center">

          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
            Explore Our Fleet
          </p>

          <h2 className="text-2xl font-extrabold text-secondary sm:text-3xl lg:text-4xl">
            Tempo Traveller Services
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Explore our range of Tempo Traveller rental options.
            Whether you are planning a family vacation, pilgrimage,
            wedding or group tour, choose the right seating capacity
            for a comfortable journey.
          </p>

        </div>

        {/* Vehicle Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {otherVehicles.map((vehicle) => (

            <article
              key={vehicle.slug}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              {/* Vehicle Image */}
              <Link
                href={`/${vehicle.slug}`}
                className="relative block h-56 overflow-hidden bg-slate-100"
              >
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} on Rent`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-4 top-4 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white shadow">
                  {vehicle.type}
                </span>
              </Link>

              {/* Card Content */}
              <div className="p-5">

                <h3 className="text-lg font-extrabold text-secondary">
                  {vehicle.name}
                </h3>

                <div className="mt-2 flex items-center justify-between gap-2">

                  <p className="flex items-center gap-2 text-sm text-slate-500">
                    <Users className="h-4 w-4 text-primary" />
                    {vehicle.seating} Passengers
                  </p>

                  <p className="text-lg font-extrabold text-primary">
                    ₹{vehicle.perKmRate}
                    <span className="text-xs font-medium text-slate-500">
                      /km
                    </span>
                  </p>

                </div>

                {/* Features */}
                <div className="mt-4 border-t border-slate-100 pt-4">

                  <p className="mb-3 text-sm font-bold text-secondary">
                    Vehicle Features
                  </p>

                  <ul className="space-y-2">
                    {vehicle.features.slice(0, 4).map((feature) => (

                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                        {feature}
                      </li>

                    ))}
                  </ul>

                </div>

                {/* Buttons */}
                <div className="mt-5 grid grid-cols-2 gap-3">

                  <Link
                    href={`/${vehicle.slug}`}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-primary px-3 py-3 text-sm font-bold text-primary transition hover:bg-primary hover:text-white"
                  >
                    View Details
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <a
                    href={getWhatsAppUrl(vehicle)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl bg-green-600 px-3 py-3 text-sm font-bold text-white transition hover:bg-green-700"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Enquire Now
                  </a>

                </div>

              </div>
            </article>

          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-center sm:p-8">

          <h3 className="text-xl font-extrabold text-secondary sm:text-2xl">
            Need Help Choosing the Right Vehicle?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            Share your group size, destination and travel date.
            Our team will help you find the right Tempo Traveller
            at a suitable rental price.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Hello, I need help choosing the right Tempo Traveller. Please share available vehicles and rental fares."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3 font-bold text-white transition hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" />
            Contact Us
          </a>

        </div>

      </div>
    </section>
  );
}
