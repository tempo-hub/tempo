
import Image from "next/image";
import {
  CheckCircle,
  XCircle,
  Camera,
  Users,
  MapPin,
  BriefcaseBusiness,
  Heart,
  Church,
  Plane,
  CalendarCheck,
  MessageCircle,
  Route,
} from "lucide-react";
import type { VehicleFare } from "@/lib/data";

interface VehicleExtraSectionsProps {
  vehicle: VehicleFare;
}

export default function VehicleExtraSections({
  vehicle,
}: VehicleExtraSectionsProps) {
  const phoneNumber = "919417184683";

  const message = encodeURIComponent(
    `Hi, I want to enquire about ${vehicle.name}. Please share route availability and rental details.`,
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const uses = [
    {
      icon: Users,
      title: "Family Trips",
      description:
        "Travel together with family members in a comfortable group vehicle.",
    },
    {
      icon: Church,
      title: "Pilgrimage Tours",
      description:
        "Enquire about group transportation for temple visits and religious journeys.",
    },
    {
      icon: Heart,
      title: "Wedding Functions",
      description:
        "Arrange transportation for wedding guests, family members and special events.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Corporate Outings",
      description:
        "Plan group transportation for office trips, team outings and business events.",
    },
    {
      icon: Plane,
      title: "Airport Transfers",
      description:
        "Ask about group airport pickup and drop services for your travel dates.",
    },
    {
      icon: Route,
      title: "Outstation Travel",
      description:
        "Plan weekend getaways, sightseeing and long-distance group journeys.",
    },
  ];

  const bookingSteps = [
    {
      number: "01",
      title: "Share Your Trip Details",
      description:
        "Tell us your pickup location, destination, travel date and passenger count.",
    },
    {
      number: "02",
      title: "Get a Fare Quotation",
      description:
        "Our team will share vehicle availability and applicable rental charges.",
    },
    {
      number: "03",
      title: "Confirm Your Booking",
      description:
        "Review the quotation and confirm your booking with our team.",
    },
    {
      number: "04",
      title: "Enjoy Your Journey",
      description:
        "Get ready for your trip after your booking and pickup details are confirmed.",
    },
  ];

  const inclusions = [
    `${vehicle.name} as per confirmed booking`,
    "Vehicle seating capacity as specified",
    "Driver service as per agreed booking terms",
  ];

  const exclusions = [
    "Toll tax and parking charges, if applicable",
    "State entry tax and permit charges, if applicable",
    "Driver allowance, if not included in the quotation",
    "Additional charges outside the confirmed trip plan",
  ];

  return (
    <>
      {/* Rental Inclusions & Exclusions */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Rental Information
            </span>

            <h2 className="mt-2 text-2xl font-extrabold text-secondary sm:text-3xl">
              {vehicle.name} Rental Inclusions & Exclusions
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Understand the possible inclusions and additional charges before
              booking your {vehicle.name}.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
              <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-secondary">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Rental Inclusions
              </h3>

              <ul className="space-y-4">
                {inclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-red-100 bg-white p-6 shadow-sm">
              <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-secondary">
                <XCircle className="h-5 w-5 text-red-500" />
                Additional Charges
              </h3>

              <ul className="space-y-4">
                {exclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-5 text-center text-xs leading-6 text-slate-500">
            Note: Actual inclusions and exclusions depend on your confirmed
            quotation. Please verify all charges with our booking team.
          </p>
        </div>
      </section>

      {/* Vehicle Gallery */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Vehicle Gallery
            </span>

            <h2 className="mt-2 text-2xl font-extrabold text-secondary sm:text-3xl">
              {vehicle.name} Images
            </h2>

            <p className="mt-3 text-sm text-slate-600">
              View the vehicle selected for your group travel requirements.
            </p>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
            <div className="relative aspect-[16/9]">
              <Image
                src={vehicle.image}
                alt={`${vehicle.name} rental vehicle`}
                fill
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16">
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {vehicle.name}
                </h3>
                <p className="mt-1 text-sm text-white/90">
                  Seating: {vehicle.seating}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4">
              <Camera className="h-5 w-5 text-primary" />
              <p className="text-sm text-slate-600">
                Contact our team for more vehicle photos and configuration
                details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Uses */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Travel Options
            </span>

            <h2 className="mt-2 text-2xl font-extrabold text-secondary sm:text-3xl">
              Where Can You Use a {vehicle.name}?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Hire a {vehicle.name} for different group transportation
              requirements, subject to availability.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {uses.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="font-bold text-secondary">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Routes & Destinations */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Plan Your Journey
              </span>

              <h2 className="mt-2 text-2xl font-extrabold text-secondary sm:text-3xl">
                Book {vehicle.name} for Your Preferred Route
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Planning a local trip, outstation journey, pilgrimage or group
                tour? Enquire about {vehicle.name} availability for your
                preferred pickup and destination.
              </p>

              <div className="mt-5 space-y-3">
                {[
                  "Local and city sightseeing",
                  "Intercity and outstation journeys",
                  "Religious and pilgrimage tours",
                  "Airport pickup and drop",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                Enquire About Your Route
              </a>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Route className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-bold text-secondary">
                Need a Custom Travel Plan?
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                Share your complete journey details with us. Our team can help
                you check the vehicle availability and applicable rental fare
                for your route.
              </p>

              <div className="mt-5 rounded-xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Selected Vehicle
                </p>
                <p className="mt-1 font-bold text-secondary">
                  {vehicle.name}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {vehicle.seating} seating · Starting ₹{vehicle.perKmRate}/km
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Simple Booking Process
            </span>

            <h2 className="mt-2 text-2xl font-extrabold text-secondary sm:text-3xl">
              How to Book {vehicle.name}?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Follow these simple steps to enquire about your {vehicle.name}
              booking.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bookingSteps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="text-3xl font-extrabold text-primary/25">
                  {step.number}
                </span>

                <h3 className="mt-3 font-bold text-secondary">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-secondary p-6 text-center sm:p-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
              <CalendarCheck className="h-6 w-6" />
            </div>

            <h3 className="mt-4 text-xl font-bold text-white">
              Ready to Book {vehicle.name}?
            </h3>

            <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-white/75">
              Contact our team with your travel details to enquire about
              availability and rental charges.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-secondary transition hover:bg-slate-100"
            >
              <MessageCircle className="h-4 w-4" />
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
