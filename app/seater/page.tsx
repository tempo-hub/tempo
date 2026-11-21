import type { Metadata } from "next";
import Link from "next/link";
import { VEHICLES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Tempo Traveller Seater Options",
  description:
    "Choose from 9, 12, 15, 16, 20 and 26 seater Tempo Travellers for family, wedding, corporate and outstation travel.",
  alternates: { canonical: "/seater" },
};

export default function SeaterIndexPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-extrabold text-secondary sm:text-4xl">
          Tempo Traveller by Seating Capacity
        </h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Select a seating option to view vehicle details and request a fare.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VEHICLES.map((vehicle) => (
            <Link
              key={vehicle.slug}
              href={`/${vehicle.slug}`}
              className="rounded-xl border border-border bg-white p-6 shadow-sm transition hover:border-primary"
            >
              <p className="text-sm font-bold text-primary">
                {vehicle.type}
              </p>
              <h2 className="mt-2 text-xl font-bold text-secondary">
                {vehicle.name}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Starting from ₹{vehicle.perKmRate}/km
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
