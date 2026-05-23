import { notFound } from "next/navigation";
import { urbaniaRoutes } from "@/lib/urbaniaRoutes";
import { ALL_ROUTES } from "@/lib/allRoutes";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  Users,
  Star,
  ShieldCheck,
  Snowflake,
  ChevronRight,
  CheckCircle,
} from "lucide-react";
import { FAQSection } from "@/app/components/sections";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return ALL_ROUTES.map((route) => ({
    slug:
      `${route.origin.toLowerCase().replace(/\s+/g, "-")}` +
      `-to-` +
      `${route.destination.toLowerCase().replace(/\s+/g, "-")}` +
      `-urbania-fare`,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const route = urbaniaRoutes(slug);

  if (!route) {
    return {};
  }

  return {
    title: `${route.origin} to ${route.destination} Urbania Fare`,

    description: `Book ${route.origin} to ${route.destination} Force Urbania rental service at best price.`,
  };
}

export default async function UrbaniaPage({ params }: Props) {
  const features = [
    "Luxury Pushback Seats",
    "Fully Air Conditioned",
    "LED TV & Music System",
    "Mobile Charging Ports",
    "Professional Driver",
    "Spacious Luggage Space",
  ];

  const variants = [
    {
      title: "12 Seater Urbania",
      price: "₹28/km",
      image: "/vehicles/12-seater-urbania.png",
    },
    {
      title: "17 Seater Urbania",
      price: "₹32/km",
      image: "/vehicles/17-seater-urbania.png",
    },
  ];

  const { slug } = await params;

  const route = urbaniaRoutes(slug);

  if (!route) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[white] text-black">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0B0B15] text-white">
        <div className="absolute inset-0">
          <Image
            src="/vehicles/urbania-hero-img.png"
            alt="Urbania"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              {/* BREADCRUMB */}
              <div className="flex items-center gap-2 text-sm text-gray-300 mb-8">
                <Link
                  href="/"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Home
                </Link>

                <ChevronRight size={16} className="text-gray-500" />

                <span className="text-white font-medium">Urbania Rental</span>
              </div>

              <div className="inline-flex items-center gap-2 bg-red-500/20 border border-primary px-4 py-2 rounded-full text-sm mb-6">
                <Star size={16} className="text-yellow-400" />
                Premium Urbania Rental Service
              </div>

              <h1 className="mt-8 text-4xl md:text-6xl font-bold leading-tight">
                {route.origin} to {route.destination}
                <span className="block text-primary">Urbania Fare</span>
              </h1>

              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Book luxury Force Urbania from {route.origin} to{" "}
                {route.destination} for weddings, outstation trips, family
                tours, corporate travel, and airport transfers with professional
                chauffeur service.
              </p>

              {/* PRICE CARD */}
              <div className="mt-10 rounded-3xl border border-primary/20 bg-white/5 p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <p className="text-gray-400 text-sm">Distance</p>
                    <h3 className="mt-2 text-2xl font-bold">
                      {route.distance} km
                    </h3>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">Duration</p>
                    <h3 className="mt-2 text-2xl font-bold">
                      {route.duration}
                    </h3>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">Starting Fare</p>
                    <h3 className="mt-2 text-2xl font-bold text-primary">
                      ₹{route.pricePerKm}/km
                    </h3>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">Vehicle</p>
                    <h3 className="mt-2 text-xl font-bold">Force Urbania</h3>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="tel:+916280820037"
                  className="bg-primary px-6 py-4 rounded-xl font-semibold flex items-center gap-2 transition"
                >
                  <Phone size={20} />
                  Call Now
                </a>

                <a
                  href={`https://wa.me/916280820037?text=${encodeURIComponent(
                    `Hello Yatra Tempo Traveller, I want to book Force Urbania from ${route.origin} to ${route.destination}. Please share fare details.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 px-6 py-4 rounded-xl font-semibold flex items-center gap-2 transition"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="bg-[#161625] border border-white/10 rounded-3xl p-5 shadow-2xl">
                <Image
                  src="/vehicles/urbania-hero-img.png"
                  alt="Urbania Van"
                  width={1000}
                  height={700}
                  className="rounded-2xl object-cover w-full h-[450px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS SECTION */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
              Why Choose Us
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-black leading-tight">
              Trusted Urbania Rental Service
            </h2>

            <p className="mt-5 text-lg text-gray-500 leading-relaxed">
              Experience luxury travel with professional chauffeurs,
              well-maintained vehicles, transparent pricing, and premium
              customer support.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {/* CARD */}
            <div className="group rounded-[30px] border border-black/5 bg-white p-8 text-center shadow-lg hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-500">
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20">
                <Users className="text-primary" size={32} />
              </div>

              <h3 className="mt-6 text-4xl font-bold text-black">5000+</h3>

              <p className="mt-2 text-gray-500 text-lg">Happy Travelers</p>
            </div>

            {/* CARD */}
            <div className="group rounded-[30px] border border-black/5 bg-white p-8 text-center shadow-lg hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-500">
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20">
                <ShieldCheck className="text-primary" size={32} />
              </div>

              <h3 className="mt-6 text-4xl font-bold text-black">100%</h3>

              <p className="mt-2 text-gray-500 text-lg">Safe & Secure Travel</p>
            </div>

            {/* CARD */}
            <div className="group rounded-[30px] border border-black/5 bg-white p-8 text-center shadow-lg hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-500">
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20">
                <Star className="text-primary" size={32} />
              </div>

              <h3 className="mt-6 text-4xl font-bold text-black">4.9★</h3>

              <p className="mt-2 text-gray-500 text-lg">Customer Rating</p>
            </div>

            {/* CARD */}
            <div className="group rounded-[30px] border border-black/5 bg-white p-8 text-center shadow-lg hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-500">
              <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20">
                <Phone className="text-primary" size={32} />
              </div>

              <h3 className="mt-6 text-4xl font-bold text-black">24/7</h3>

              <p className="mt-2 text-gray-500 text-lg">Booking Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROUTE CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="rounded-3xl bg-black/5 p-10">
          <h2 className="text-4xl font-bold">
            {route.origin} to {route.destination} Urbania Rental Service
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">
            {route.description}
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-10">
            {route.highlights.map((item: string, index: number) => (
              <div key={index} className="bg-black/5 rounded-2xl p-5">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URBANIA VARIANTS - WHITE THEME */}
      <section className="relative py-20 overflow-hidden bg-white">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
              Premium Urbania Fleet
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Urbania Rental Variants
            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Choose from our luxury Force Urbania collection designed for
              family trips, corporate tours, weddings, airport transfers, and
              outstation travel.
            </p>
          </div>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {variants.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-lg hover:shadow-2xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-[300px] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Price Badge */}
                  <div className="absolute top-5 right-5 bg-primary text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                    {item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 group-hover:text-primary transition">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-relaxed">
                    Premium seating, fully air-conditioned interiors, spacious
                    luggage capacity, charging ports, and luxury comfort for
                    long journeys.
                  </p>

                  {/* Features */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="bg-gray-100 border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700">
                      Luxury Seats
                    </span>

                    <span className="bg-gray-100 border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700">
                      AC
                    </span>

                    <span className="bg-gray-100 border border-gray-200 px-4 py-2 rounded-full text-sm text-gray-700">
                      Music System
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="mt-8 flex gap-4">
                    <a
                      href="tel:+916280820037"
                      className="flex-1 rounded-2xl bg-primary hover:opacity-90 py-4 text-center text-lg font-semibold text-white transition-all duration-300"
                    >
                      Call Now
                    </a>

                    <a
                      href={`https://wa.me/916280820037?text=${encodeURIComponent(
                        `Hello Yatra Tempo Traveller, I want to book Force Urbania from ${route.origin} to ${route.destination}. Please share fare details.`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 hover:bg-green-600 px-6 py-4 rounded-xl font-semibold text-white flex items-center gap-2 transition"
                    >
                      <MessageCircle size={20} />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <a
              href="tel:+916280820037"
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105"
            >
              Book Luxury Urbania Now
            </a>
          </div>
        </div>
      </section>

      {/* URBANIA VS TEMPO TRAVELLER COMPARISON SECTION */}
      <section className="relative py-24 overflow-hidden bg-white">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
              Vehicle Comparison
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-black leading-tight">
              Urbania vs Tempo Traveller
            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Compare Force Urbania and Tempo Traveller to choose the perfect
              vehicle for your family trips, corporate tours, weddings, airport
              transfers, and outstation travel.
            </p>
          </div>

          {/* Comparison Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* URBANIA CARD */}
            <div className="group relative overflow-hidden rounded-[32px] border border-primary/20 bg-white p-8 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-500">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
                Premium Choice
              </div>

              {/* Title */}
              <h3 className="mt-6 text-4xl font-bold text-black">
                Force Urbania
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Luxury premium vehicle with modern interiors, spacious seating,
                better suspension, stylish design, and premium comfort for
                long-distance travel.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {[
                  "Luxury Pushback Seats",
                  "Premium Interior Design",
                  "Spacious Cabin Space",
                  "Advanced AC Cooling",
                  "Ideal for Luxury Travel",
                  "Better Noise Insulation",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                      <CheckCircle size={18} className="text-primary" />
                    </div>

                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/10 p-5">
                <p className="text-gray-600 text-sm">Starting Price</p>

                <h4 className="mt-2 text-4xl font-bold text-black">₹28/km</h4>
              </div>
            </div>

            {/* TEMPO TRAVELLER CARD */}
            <div className="group relative overflow-hidden rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all duration-500">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
                Budget Friendly
              </div>

              {/* Title */}
              <h3 className="mt-6 text-4xl font-bold text-black">
                Tempo Traveller
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Affordable group travel vehicle suitable for family tours, local
                sightseeing, pilgrimage tours, and budget-friendly outstation
                journeys.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-4">
                {[
                  "Affordable Pricing",
                  "Good Seating Capacity",
                  "Suitable for Group Tours",
                  "AC & Non-AC Options",
                  "Best for Budget Trips",
                  "Popular for Pilgrimage Tours",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10">
                      <CheckCircle size={18} className="text-primary" />
                    </div>

                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                <p className="text-gray-600 text-sm">Starting Price</p>

                <h4 className="mt-2 text-4xl font-bold text-black">₹18/km</h4>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <a
              href={`https://wa.me/916280820037?text=${encodeURIComponent(
                `Hello Yatra Tempo Traveller, I want to book Force Urbania from ${route.origin} to ${route.destination}.`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-primary hover:opacity-90 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
            >
              Book Luxury Urbania Now
            </a>
          </div>
        </div>
      </section>

      {/* PREMIUM FEATURES SECTION */}
      <section className="relative py-24 overflow-hidden bg-[white]">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/10 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT IMAGE */}
            <div className="relative group">
              {/* Border Glow */}
              <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-primary/40 to-primary/10 blur-lg opacity-60 group-hover:opacity-100 transition duration-500" />

              <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#141421]">
                <Image
                  src="/vehicles/features-img.png"
                  alt="Luxury Urbania"
                  width={1200}
                  height={700}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute top-6 left-6 rounded-2xl border border-primary/30 bg-black/50 backdrop-blur-md px-5 py-3">
                  <p className="text-sm text-gray-300">Premium Urbania</p>
                  <h3 className="text-xl font-bold text-white">
                    Luxury Interior
                  </h3>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
                Premium Features
              </div>

              {/* Heading */}
              <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-black">
                Premium Features &
                <span className="text-primary"> Luxury Interior</span>
              </h2>

              {/* Description */}
              <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                Experience unmatched comfort with premium pushback seats, fully
                air-conditioned interiors, charging ports, spacious luggage
                capacity, ambient lighting, and modern entertainment systems for
                long-distance luxury travel.
              </p>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-5 mt-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 rounded-2xl border border-black/20 bg-[white] hover:border-primary/40 hover:bg-[white] p-5 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20">
                      <CheckCircle
                        className="text-primary group-hover:scale-110 transition-transform duration-300"
                        size={22}
                      />
                    </div>

                    {/* Text */}
                    <span className="text-black font-medium text-lg">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-12">
                <a
                  href="tel:+916280820037"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary hover:opacity-90 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
                >
                  Call Now
                </a>

                <a
                  href="https://wa.me/916280820037?text=Hello%20Yatra%20Tempo%20Traveller,%20I%20want%20to%20book%20Urbania."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-green-500/30 bg-green-500 hover:bg-green-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/20"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="relative py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-primary">
              Luxury Urbania Rental Service
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-black leading-tight">
              Force Urbania on Rent at Affordable Price
            </h2>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              Book premium Force Urbania rental service for weddings, outstation
              trips, corporate travel, airport transfers, family vacations, and
              pilgrimage tours with professional drivers and luxury seating
              comfort.
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* LEFT */}
            <div className="space-y-8">
              <div className="rounded-3xl border border-black/20 bg-[white] p-8">
                <h3 className="text-2xl font-bold text-black">
                  12 & 17 Seater Urbania Rental
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  We provide 12 Seater and 17 Seater Force Urbania rental
                  services for small and large groups. Urbania vehicles are
                  designed with spacious interiors, luxury pushback seating,
                  powerful air conditioning, charging ports, and modern
                  entertainment systems for comfortable long-distance travel.
                </p>
              </div>

              <div className="rounded-3xl border border-black/20 bg-[white] p-8">
                <h3 className="text-2xl font-bold text-black">
                  Urbania for Wedding & Family Trips
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  Force Urbania is one of the best luxury vehicles for wedding
                  transportation, family vacations, group tours, and corporate
                  travel. Our premium Urbania fleet ensures maximum comfort,
                  safety, and a luxury travel experience for every journey.
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-8">
              <div className="rounded-3xl border border-black/20 bg-[white] p-8">
                <h3 className="text-2xl font-bold text-black">
                  Urbania Rent Per km
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  Urbania rental price starts from ₹28 per km depending on
                  seating capacity, travel route, trip duration, and seasonal
                  demand. We provide transparent pricing with professional
                  chauffeur service and well-maintained luxury vehicles.
                </p>
              </div>

              <div className="rounded-3xl border border-black/20 bg-[white] p-8">
                <h3 className="text-2xl font-bold text-black">
                  Book Urbania Online
                </h3>

                <p className="mt-4 text-gray-400 leading-relaxed">
                  You can easily book Force Urbania online through phone call or
                  WhatsApp booking support. We provide Urbania rental services
                  for local travel, outstation tours, airport transfers,
                  pilgrimage journeys, and luxury group travel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQSection faqs={route.faqs} />
    </div>
  );
}
