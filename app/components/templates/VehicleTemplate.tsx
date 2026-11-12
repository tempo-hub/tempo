import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  Users,
  MessageCircle,
  Phone,
  ShieldCheck,
  MapPin,
  Star,
  CalendarCheck,
  CarFront,
  ChevronDown,
} from "lucide-react";
import type { VehicleFare } from "@/lib/data";
import { Button } from "../ui-base";

interface VehicleTemplateProps {
  vehicle: VehicleFare;
}

export default function VehicleTemplate({ vehicle }: VehicleTemplateProps) {
  const bookingMessage = encodeURIComponent(
    `Hi, I would like to book a ${vehicle.name}. Please share availability and fare details.`,
  );
  const whatsappUrl = `https://wa.me/919417184683?text=${bookingMessage}`;
  const faqs = [
    {
      question: `How many people can travel in a ${vehicle.name}?`,
      answer: `The ${vehicle.name} offers comfortable seating for ${vehicle.seating} passengers. It is suitable for family trips, group tours, corporate travel, and outstation journeys.`,
    },
    {
      question: `What is the rental price of ${vehicle.name}?`,
      answer: `The starting rental price of ${vehicle.name} is ₹${vehicle.perKmRate} per kilometre. The final fare depends on travel distance, journey duration, route, and applicable additional charges.`,
    },
    {
      question: `How can I book ${vehicle.name} online?`,
      answer: `You can book ${vehicle.name} by contacting our team through WhatsApp or phone. Share your pickup location, destination, travel date, and passenger count to receive a booking quotation.`,
    },
    {
      question: `Is ${vehicle.name} available for outstation trips?`,
      answer: `Yes, you can enquire about booking ${vehicle.name} for outstation travel, weekend getaways, family vacations, sightseeing tours, and long-distance journeys.`,
    },
    {
      question: `Can I hire ${vehicle.name} for a wedding?`,
      answer: `Yes, ${vehicle.name} can be hired for wedding functions, family gatherings, guest transportation, and special occasions, subject to availability.`,
    },
    {
      question: `Is ${vehicle.name} suitable for family trips?`,
      answer: `Yes, ${vehicle.name} is a practical choice for family holidays and group journeys. Its ${vehicle.seating}-passenger seating capacity makes travelling together convenient.`,
    },
    {
      question: `Does the rental fare include driver charges?`,
      answer: `Driver allowance and other applicable charges depend on the booking package. Please confirm the complete fare breakdown with our team before confirming your journey.`,
    },
    {
      question: `Are toll tax and parking charges included in the rental price?`,
      answer: `Toll tax, parking fees, state taxes, and other applicable charges may be additional to the basic rental fare. Please confirm these details while requesting your quotation.`,
    },
    {
      question: `Can I book ${vehicle.name} for a one-day trip?`,
      answer: `Yes, you can enquire about hiring ${vehicle.name} for a one-day local trip, sightseeing tour, or outstation journey. Availability and applicable minimum kilometre conditions will depend on your booking.`,
    },
    {
      question: `Does ${vehicle.name} have luggage storage space?`,
      answer: `Luggage capacity depends on the vehicle configuration and passenger count. Share your luggage requirements with our team to confirm whether the vehicle is suitable for your journey.`,
    },
    {
      question: `Can I hire ${vehicle.name} for religious tours?`,
      answer: `Yes, you can enquire about hiring ${vehicle.name} for religious tours, temple visits, pilgrimage journeys, and family trips to popular destinations.`,
    },
    {
      question: `Is ${vehicle.name} available for corporate outings?`,
      answer: `Yes, ${vehicle.name} can be considered for corporate outings, office transportation, team trips, business events, and group travel requirements.`,
    },
    {
      question: `How can I check ${vehicle.name} availability?`,
      answer: `Contact our booking team through WhatsApp or call 9417184683. Share your travel date, pickup point, destination, and passenger count to check availability.`,
    },
    {
      question: `Can I hire ${vehicle.name} for local sightseeing?`,
      answer: `Yes, you can enquire about ${vehicle.name} for local sightseeing, city tours, shopping trips, and visits to popular tourist attractions.`,
    },
    {
      question: `What details are required to book ${vehicle.name}?`,
      answer: `To request a booking, share your travel date, pickup location, destination, number of passengers, trip duration, and luggage requirements. Our team can then provide availability and fare details.`,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Vehicle Details / Hero Section */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#fleet"
            className="mb-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to vehicles
          </Link>

          <div className="grid overflow-hidden rounded-2xl border border-border bg-white shadow-sm md:grid-cols-2">
            <div className="relative min-h-72 bg-slate-100 md:min-h-[28rem]">
              <Image
                src={vehicle.image}
                alt={vehicle.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center gap-6 p-6 sm:p-10">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
                  Tempo Traveller on Rent
                </p>

                <h1 className="text-3xl font-extrabold text-secondary sm:text-4xl">
                  {vehicle.name}
                </h1>

                <p className="mt-4 flex items-center gap-2 text-slate-600">
                  <Users className="h-5 w-5 text-primary" />
                  {vehicle.seating} Seats
                </p>
              </div>

              <p className="text-2xl font-bold text-secondary">
                From ₹{vehicle.perKmRate}/km
              </p>

              <ul className="grid gap-3 sm:grid-cols-2">
                {vehicle.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-slate-700"
                  >
                    <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full rounded-xl bg-green-600 text-white hover:bg-green-700">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Book on WhatsApp
                  </Button>
                </a>

                <a href="tel:+919417184683" className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full rounded-xl border-primary/20 text-secondary"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call 9417184683
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Overview Section */}
      <section className="bg-white py-16" aria-label="Vehicle overview">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-semibold uppercase tracking-wider text-primary">
              Vehicle Overview
            </span>

            <h2 className="mt-3 text-3xl font-bold text-secondary">
              Explore Our {vehicle.name} Rental Service
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Looking for a comfortable and convenient group travel option? Our{" "}
              {vehicle.name} is designed for group journeys, family holidays,
              sightseeing, and outstation travel. With seating capacity for{" "}
              {vehicle.seating} passengers, it provides a practical travel
              solution for your journey. Book your vehicle with us and get
              rental details according to your travel requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="font-semibold uppercase tracking-wider text-primary">
              Vehicle Features
            </span>

            <h2 className="mt-3 text-3xl font-bold text-secondary">
              Key Features of {vehicle.name}
            </h2>

            <p className="mt-4 text-slate-600">
              Explore the features available in this vehicle for your next
              journey.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vehicle.features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <CheckCircle className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="font-semibold text-secondary">{feature}</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Available feature
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="font-semibold uppercase tracking-wider text-primary">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-3xl font-bold text-secondary">
              Why Book {vehicle.name} With Us?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: "Group Travel",
                desc: `Suitable for journeys with up to ${vehicle.seating} passengers.`,
              },
              {
                icon: ShieldCheck,
                title: "Booking Assistance",
                desc: "Get assistance with your vehicle booking and travel enquiry.",
              },
              {
                icon: MapPin,
                title: "Flexible Routes",
                desc: "Enquire about local sightseeing and outstation journeys.",
              },
              {
                icon: Star,
                title: "Fare Transparency",
                desc: "Get fare details and applicable charges before confirming.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 p-6 text-center transition hover:shadow-lg"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-5 font-bold text-secondary">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Best Occasions Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="font-semibold uppercase tracking-wider text-primary">
              Travel Occasions
            </span>

            <h2 className="mt-3 text-3xl font-bold text-secondary">
              Perfect for Every Group Journey
            </h2>

            <p className="mt-4 text-slate-600">
              Hire {vehicle.name} for different travel occasions.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Family Trips",
                desc: "Plan family holidays and memorable group journeys.",
              },
              {
                title: "Wedding Functions",
                desc: "Arrange group transportation for wedding functions and celebrations.",
              },
              {
                title: "Corporate Travel",
                desc: "Enquire about transportation for office outings and corporate events.",
              },
              {
                title: "Religious Tours",
                desc: "Plan group visits to temples, pilgrimage destinations, and religious places.",
              },
              {
                title: "Outstation Trips",
                desc: "Explore destinations outside your city with a group travel option.",
              },
              {
                title: "Local Sightseeing",
                desc: "Explore popular attractions and sightseeing destinations.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <CalendarCheck className="h-8 w-8 text-primary" />

                <h3 className="mt-4 font-bold text-secondary">{item.title}</h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Specifications Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <span className="font-semibold uppercase tracking-wider text-primary">
              Specifications
            </span>

            <h2 className="mt-3 text-3xl font-bold text-secondary">
              {vehicle.name} Rental Details
            </h2>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200">
            {[
              ["Vehicle Type", vehicle.name],
              ["Seating Capacity", `${vehicle.seating} Passengers`],
              ["Starting Rate", `₹${vehicle.perKmRate} / km`],
              ["Booking Mode", "Phone & WhatsApp"],
              ["Travel Type", "Local & Outstation - Enquiry"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-2 gap-4 border-b border-slate-200 p-5 last:border-0"
              >
                <span className="font-semibold text-secondary">{label}</span>

                <span className="text-right text-slate-600">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="font-semibold uppercase tracking-wider text-primary">
              Easy Booking
            </span>

            <h2 className="mt-3 text-3xl font-bold text-secondary">
              How to Book {vehicle.name}?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Share Your Details",
                desc: "Send your pickup location, destination, travel date, and passenger count.",
                icon: MessageCircle,
              },
              {
                number: "02",
                title: "Get Fare Details",
                desc: "Our team will share vehicle availability and your estimated rental fare.",
                icon: CarFront,
              },
              {
                number: "03",
                title: "Confirm Booking",
                desc: "Discuss the booking terms with our team and confirm your journey.",
                icon: CheckCircle,
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="rounded-xl border border-slate-200 bg-white p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-extrabold text-primary/20">
                      {step.number}
                    </span>

                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-secondary">
                    {step.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="font-semibold uppercase tracking-wider text-primary">
              Frequently Asked Questions
            </span>

            <h2 className="mt-3 text-3xl font-bold text-secondary">
              FAQs About {vehicle.name} Rental
            </h2>

            <p className="mt-4 text-slate-600">
              Find answers to common questions about booking, seating capacity,
              rental prices, and travel facilities.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-slate-50 p-5 transition open:bg-white open:shadow-sm"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-secondary marker:hidden">
                  {faq.question}

                  <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>

                <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final Booking CTA */}
      <section className="bg-secondary py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Book Your {vehicle.name} Today!
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/80">
            Planning a family trip, group tour, or outstation journey? Contact
            our team to check availability and get the best possible rental
            quotation for your travel requirements.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="w-full rounded-xl bg-green-600 px-8 text-white hover:bg-green-700">
                <MessageCircle className="mr-2 h-5 w-5" />
                Enquire on WhatsApp
              </Button>
            </a>

            <a href="tel:+919417184683">
              <Button
                variant="outline"
                className="w-full rounded-xl border-white bg-transparent px-8 text-white hover:bg-white hover:text-secondary"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
