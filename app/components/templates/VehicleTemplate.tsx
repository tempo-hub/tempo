import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  Users,
  MessageCircle,
  Phone,
  ChevronDown,
} from "lucide-react";
import type { VehicleFare } from "@/lib/data";
import TempoTravellerServices from "../vehicles/TempoTravellerServices";
import VehicleExtraSections from "../vehicles/VehicleExtraSections ";
import VehicleAdditionalSections from "../vehicles/VehicleAdditionalSections";

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
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#fleet"
            className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to vehicles
          </Link>

          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-md">
            {/* Image + Vehicle Content */}
            <div className="grid md:grid-cols-2">
              {/* Left Side - Vehicle Image */}
              <div className="relative min-h-[260px] bg-slate-100 sm:min-h-[350px] md:min-h-[420px]">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.seating} Seater Tempo Traveller on Rent`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />

                <span className="absolute left-4 top-4 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white shadow">
                  {vehicle.seating} Seater
                </span>
              </div>

              {/* Right Side - Vehicle Information */}
              <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
                <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
                  Tempo Traveller Rental Service
                </p>

                <h1 className="text-2xl font-extrabold leading-tight text-secondary sm:text-3xl lg:text-4xl">
                  {vehicle.name} on Rent
                </h1>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Book a comfortable {vehicle.seating} seater Tempo Traveller
                  for family trips, group tours, weddings, corporate travel and
                  outstation journeys.
                </p>

                {/* Vehicle Details */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <Users className="mb-2 h-5 w-5 text-primary" />
                    <p className="text-xs text-slate-500">Seating Capacity</p>
                    <p className="mt-1 font-bold text-secondary">
                      {vehicle.seating} Passengers
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4">
                    <CheckCircle className="mb-2 h-5 w-5 text-primary" />
                    <p className="text-xs text-slate-500">Starting Fare</p>
                    <p className="mt-1 font-bold text-secondary">
                      ₹{vehicle.perKmRate}/km
                    </p>
                  </div>
                </div>

                {/* Vehicle Features */}
                <div className="mt-6">
                  <h2 className="mb-3 text-base font-bold text-secondary">
                    Vehicle Features & Amenities
                  </h2>

                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {vehicle.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="border-t border-border bg-slate-50 p-5 sm:px-8 sm:py-6">
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h2 className="text-lg font-bold text-secondary">
                    Book Your {vehicle.seating} Seater Tempo Traveller
                  </h2>
                  <p className="mt-1 text-sm text-slate-600">
                    Get the best price for your next journey. Contact us today!
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {/* Enquire Now */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white transition hover:opacity-90"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Enquire Now
                  </a>

                  {/* Call Us */}
                  <a
                    href="tel:+919417184683"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary bg-white px-5 py-3 text-sm font-bold text-primary transition hover:bg-primary hover:text-white"
                  >
                    <Phone className="h-4 w-4" />
                    Call Us
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-slate-50 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Vehicle Features
            </span>

            <h2 className="mt-2 text-2xl font-bold text-secondary sm:text-3xl">
              Key Features of {vehicle.name}
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Explore the features available in this vehicle for your next
              journey.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {vehicle.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <CheckCircle className="h-4 w-4" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-secondary">
                    {feature}
                  </h3>
                  <p className="text-xs text-slate-500">Available feature</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Tempo Traveller Options */}
      <TempoTravellerServices currentVehicle={vehicle} />

      {/* Tempo Traveller Fare Per Km Section */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-7 text-center">
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">
              Tempo Traveller Rental Pricing
            </p>

            <h2 className="text-2xl font-extrabold text-secondary sm:text-3xl">
              {vehicle.seating} Seater Tempo Traveller Fare Per Km
            </h2>

            <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              Planning a family trip, group tour or outstation journey? Check
              the rental fare for our {vehicle.seating} seater Tempo Traveller.
              We offer comfortable travel with transparent per-kilometre pricing
              for your journey.
            </p>
          </div>

          {/* Fare Table */}
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[550px] text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-5 py-4 text-sm font-bold text-secondary">
                      Fare Details
                    </th>
                    <th className="px-5 py-4 text-sm font-bold text-secondary">
                      Pricing
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-5 py-4 text-sm text-slate-600">
                      Vehicle Type
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold text-secondary">
                      {vehicle.name}
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 text-sm text-slate-600">
                      Seating Capacity
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold text-secondary">
                      {vehicle.seating} Passengers
                    </td>
                  </tr>

                  <tr className="bg-primary/5">
                    <td className="px-5 py-4 text-sm font-semibold text-secondary">
                      Rate Per Kilometer
                    </td>
                    <td className="px-5 py-4 text-lg font-extrabold text-primary">
                      ₹{vehicle.perKmRate}/km
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 text-sm text-slate-600">
                      Minimum Running
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold text-secondary">
                      As per trip plan
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 text-sm text-slate-600">
                      Driver Allowance
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold text-secondary">
                      As applicable
                    </td>
                  </tr>

                  <tr>
                    <td className="px-5 py-4 text-sm text-slate-600">
                      Toll Tax & Parking
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold text-secondary">
                      Extra as applicable
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="border-t border-border bg-slate-50 p-5">
              <p className="text-xs leading-6 text-slate-600">
                Note: Final rental charges may vary depending on travel
                distance, route, trip duration and additional expenses. Contact
                our team for an accurate quotation.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-col items-center justify-between gap-4 rounded-xl bg-slate-50 p-5 sm:flex-row">
            <div>
              <h3 className="font-bold text-secondary">
                Get the Best Fare for Your Trip
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Contact us to get a customised travel quotation.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-green-700"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Get Fare on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Rental Inclusions, Gallery, Uses, Routes & Booking Process */}
      <VehicleExtraSections vehicle={vehicle} />

      {/* Additional Vehicle Sections */}
      <VehicleAdditionalSections vehicle={vehicle} serviceAreas={[]} />

      {/* FAQ Section */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Frequently Asked Questions
            </span>

            <h2 className="mt-2 text-2xl font-bold text-secondary sm:text-3xl">
              FAQs About {vehicle.name} Rental
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Find answers to common questions about booking, seating capacity,
              rental prices, and travel facilities.
            </p>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition open:bg-white open:shadow-sm"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-secondary marker:hidden">
                  {faq.question}

                  <ChevronDown className="h-4 w-4 shrink-0 text-primary transition-transform group-open:rotate-180" />
                </summary>

                <p className="mt-3 border-t border-slate-200 pt-3 text-sm leading-6 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
