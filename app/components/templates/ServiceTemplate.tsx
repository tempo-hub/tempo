import React from "react";
import Link from "next/link";
import {
  Star,
  MapPin,
  Clock,
  IndianRupee,
  ShieldCheck,
  Users,
  Wifi,
  Coffee,
  Luggage,
  CreditCard,
  Phone,
  MessageCircle,
  CheckCircle,
  Heart,
} from "lucide-react";
import PerKmFareSection from "../shared/PerKmFareSection";
import { FAQSection } from "../sections";
import { generatePerKmFareFAQs } from "@/lib/faq-data";

interface RouteProps {
  origin: string;
  destination: string;
  vehicle: string;
  slug: string;
  distance: number;
  duration: string;
  routeImage?: string;
}

interface ServiceTemplateProps {
  route: RouteProps | null;
}

const ServiceTemplate = ({ route }: ServiceTemplateProps) => {
  if (!route) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Route not found
      </div>
    );
  }

  const faqs = generatePerKmFareFAQs(
    route.origin,
    route.destination,
    route.vehicle,
  );

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${route.origin} to ${route.destination} Tempo Traveller Service`,
    description: `Book affordable Tempo Traveller from ${route.origin} to ${route.destination} with per km fare starting at ₹18/km. Professional drivers, clean vehicles, 24/7 support.`,
    brand: {
      "@type": "Brand",
      name: "Tempo Traveller Rental",
    },
    offers: {
      "@type": "Offer",
      price: "18",
      priceCurrency: "INR",
      priceValidUntil: "2024-12-31",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "5000",
    },
  };

  // Vehicle options data
  const vehicleOptions = [
    { seats: 9, price: 18, bestFor: "Small groups, families", icon: Users },
    { seats: 12, price: 22, bestFor: "Medium groups, tours", icon: Users },
    { seats: 15, price: 25, bestFor: "Large families, events", icon: Users },
    { seats: 16, price: 26, bestFor: "Corporate, weddings", icon: Users },
    { seats: 20, price: 30, bestFor: "Big groups, parties", icon: Users },
    { seats: 26, price: 35, bestFor: "Large events", icon: Users },
  ];

  // Features data
  const features = [
    {
      icon: Users,
      title: "Comfortable Seating",
      description:
        "Spacious push-back seats with ample legroom for relaxed journeys",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description:
        "Stay connected throughout your journey with complimentary WiFi",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Coffee,
      title: "Refreshments",
      description: "Complimentary water bottles and refreshments on board",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: ShieldCheck,
      title: "Safety Assured",
      description:
        "GPS tracking, first-aid kit, and emergency contact available 24/7",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Luggage,
      title: "Ample Luggage Space",
      description: "Dedicated luggage compartment for all your bags",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Cash, Card, UPI, or NetBanking - choose your convenience",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  // Reviews data
  const reviews = [
    {
      name: "Rajesh Sharma",
      location: "Delhi",
      rating: 5,
      comment:
        "Excellent service! The tempo was clean and driver was very professional. Booking process was smooth.",
      date: "2 days ago",
      verified: true,
    },
    {
      name: "Priya Singh",
      location: "Mumbai",
      rating: 5,
      comment:
        "Best tempo traveller service I've used. On-time pickup, comfortable seating, reasonable pricing.",
      date: "5 days ago",
      verified: true,
    },
    {
      name: "Amit Kumar",
      location: "Bangalore",
      rating: 4,
      comment:
        "Good experience overall. Vehicle was in great condition. Would recommend for group travel.",
      date: "1 week ago",
      verified: true,
    },
  ];

  return (
    <div>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative overflow-hidden border-b border-border bg-linear-to-br from-slate-950 via-slate-900 to-secondary pt-16 pb-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm text-white/60 font-medium mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/per-km-fare"
              className="hover:text-primary transition-colors"
            >
              Price
            </Link>
            <span>/</span>
            <span className="text-primary" aria-current="page">
              {route.origin} to {route.destination}
            </span>
          </nav>

          {/* Hero Content */}
          <div className="text-center max-w-5xl mx-auto">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-xs md:text-sm font-semibold text-white">
                4.9/5 Rating • 5000+ Happy Customers
              </span>
            </div>

            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] mb-6">
              Tempo Traveller Per km Fare
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-white">
              {route.origin} to {route.destination}
              <br />
              <span className="text-primary italic">
                Tempo Traveller Per km Fare
              </span>
            </h1>

            {/* SEO Paragraph */}
            <p className="mt-6 text-base md:text-xl leading-relaxed text-slate-300 max-w-4xl mx-auto">
              Book affordable AC Tempo Traveller from{" "}
              <span className="text-white font-bold">{route.origin}</span> to{" "}
              <span className="text-white font-bold">{route.destination}</span>{" "}
              with transparent pricing starting at just{" "}
              <span className="text-primary font-bold">₹18/km</span>. Experience
              comfortable seating, verified drivers, and luxury travel options
              perfect for family trips, weddings, corporate tours, and group
              travel.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    Distance
                  </p>
                  <p className="text-sm md:text-base font-black text-white">
                    {route.distance} KM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-sm">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    Duration
                  </p>
                  <p className="text-sm md:text-base font-black text-white">
                    {route.duration}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-sm">
                <IndianRupee className="h-5 w-5 text-primary shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    Starting Fare
                  </p>
                  <p className="text-sm md:text-base font-black text-white">
                    ₹18 / KM
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-sm">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    Drivers
                  </p>
                  <p className="text-sm md:text-base font-black text-white">
                    Verified Drivers
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <a
                href="tel:+916280820037"
                className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-white font-black px-8 py-4 rounded-2xl shadow-xl flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>

              <a
                href="https://wa.me/916280820037"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 hover:scale-105 transition-all duration-300 text-white font-black px-8 py-4 rounded-2xl shadow-xl flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-1">
                ✓ No hidden charges
              </span>
              <span className="flex items-center gap-1">
                ✓ Transparent pricing
              </span>
              <span className="flex items-center gap-1">✓ Clean vehicles</span>
              <span className="flex items-center gap-1">✓ 24/7 support</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FARE CARDS SECTION ==================== */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Ride
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select from our range of comfortable tempo travellers based on
              your group size
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicleOptions.map((vehicle, index) => {
              const estimatedFare = route.distance * 2 * vehicle.price;

              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="bg-linear-to-r from-primary to-primary/80 p-4 text-white">
                    <div className="flex justify-between items-center">
                      <vehicle.icon className="h-8 w-8" />
                      <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full">
                        Popular Choice
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mt-4">
                      {vehicle.seats}-Seater
                    </h3>
                    <p className="text-sm opacity-90">{vehicle.bestFor}</p>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-primary">
                        ₹{vehicle.price}
                      </span>
                      <span className="text-gray-600">/km</span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        AC Vehicle
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Push-back Seats
                      </li>
                      <li className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Entertainment System
                      </li>
                    </ul>

                    <a
                      key={vehicle.seats}
                      href={`https://wa.me/916280820037?text=${encodeURIComponent(
                        `Hi YatraTempoTraveller, I want to book a tempo traveller from ${route.origin} to ${route.destination}.

Vehicle: ${vehicle.seats} Seater Tempo Traveller

Trip Type: Round Trip

Per KM Fare: ₹${vehicle.price}/KM

Estimated Fare: ₹${estimatedFare}`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 text-white font-black py-4 rounded-2xl shadow-xl flex items-center justify-center gap-2"
                    >
                      Book {vehicle.seats} Seater
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Per KM Fare Section */}
      <PerKmFareSection
        fromCity={route.origin}
        toCity={route.destination}
        fare={18}
      />

      {/* ==================== WHY CHOOSE US SECTION ==================== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Service?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience comfort, safety, and reliability with our premium tempo
              traveller services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 bg-linear-to-r ${feature.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-red-500 to-orange-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INCLUDED & EXCLUDED SECTION ==================== */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Included */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  What&apos;s Included
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Professional driver with route knowledge",
                  "Fuel, toll taxes, and parking charges",
                  "Clean and sanitized vehicle",
                  "24/7 customer support",
                  "GPS tracking for safety",
                  "Basic insurance coverage",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Excluded */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <div className="h-6 w-6 text-red-600 text-xl font-bold">
                    ✕
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  What&apos;s Excluded
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  "Driver overnight allowance (if applicable)",
                  "State entry taxes (if any)",
                  "Personal expenses and tips",
                  "Extra stops beyond agreed route",
                  "Night travel charges (10 PM - 6 AM)",
                  "Any damage to vehicle",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="h-5 w-5 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                      <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CUSTOMER REVIEWS SECTION ==================== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Join 5000+ satisfied customers who trust us for their travel needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < review.rating ? "fill-primary text-primary" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  &ldquo;{review.comment}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  {review.verified && (
                    <div className="flex items-center gap-1 text-green-600 text-xs">
                      <CheckCircle className="h-3 w-3" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-3">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SEO CONTENT SECTION ==================== */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              About {route.origin} to {route.destination} Tempo Traveller
              Service
            </h2>

            <div className="space-y-6 text-gray-700">
              <p>
                Planning a trip from <strong>{route.origin}</strong> to{" "}
                <strong>{route.destination}</strong>? Our Tempo Traveller
                service offers the perfect solution for group travel. Covering a
                distance of
                <strong> {route.distance} km</strong> in approximately{" "}
                <strong>{route.duration}</strong>, our comfortable vehicles
                ensure a pleasant journey for all passengers.
              </p>

              <p>
                Whether you&apos;re traveling for a family vacation, corporate event,
                wedding guest transportation, or a pilgrimage tour, our fleet of
                well-maintained tempo travellers provides the ideal balance of
                comfort and affordability. With prices starting at just{" "}
                <strong>₹18 per kilometer</strong>, we offer transparent pricing
                with no hidden charges.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Why Book Tempo Traveller from {route.origin} to{" "}
                {route.destination}?
              </h3>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Cost-effective:</strong> Split costs among group
                  members for budget-friendly travel
                </li>
                <li>
                  <strong>Convenient:</strong> Door-to-door service without the
                  hassle of changing vehicles
                </li>
                <li>
                  <strong>Comfortable:</strong> Push-back seats, AC, and
                  entertainment systems
                </li>
                <li>
                  <strong>Safe:</strong> Professional drivers and GPS-tracked
                  vehicles
                </li>
                <li>
                  <strong>Flexible:</strong> Customize your itinerary as per
                  your needs
                </li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Best Time to Travel from {route.origin} to {route.destination}
              </h3>

              <p>
                The route from {route.origin} to {route.destination} is
                accessible throughout the year. However, the best time to travel
                depends on your preferences. Winter months (October to March)
                offer pleasant weather, while summer months (April to June) are
                suitable for early morning trips. Monsoon season (July to
                September) brings lush greenery but requires careful driving.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                Booking Tips for Best Deals
              </h3>

              <ul className="list-disc pl-6 space-y-2">
                <li>Book at least 7-10 days in advance for better rates</li>
                <li>Consider round trips for discounted pricing</li>
                <li>
                  Group bookings of 10+ people get special corporate discounts
                </li>
                <li>
                  Early morning or late night bookings may have additional
                  charges
                </li>
                <li>
                  Ask about package deals that include multiple destinations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <FAQSection
        faqs={faqs}
        title={`${route.vehicle} Per km Fare FAQs from ${route.origin} to ${route.destination}`}
      />

      {/* ==================== CTA BANNER SECTION ==================== */}
      <section className="relative overflow-hidden bg-linear-to-r from-primary via-primary/90 to-primary py-20">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Heart className="h-4 w-4 text-white" />
            <span className="text-white text-sm font-semibold">
              Limited Time Offer
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Book Your Tempo Traveller?
          </h2>

          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get instant confirmation, best price guarantee, and 24/7 support.
            Don&apos;t wait - secure your vehicle now!
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/916280820037?text=Hello%20I%20want%20to%20book%20Tempo%20Traveller%20from%20${encodeURIComponent(route.origin)}%20to%20${encodeURIComponent(route.destination)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-2xl hover:shadow-xl transition-all hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Book on WhatsApp
            </a>

            <a
              href="tel:+916280820037"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white hover:text-primary transition-all"
            >
              <Phone className="h-5 w-5" />
              Call for Enquiry
            </a>
          </div>

          <p className="mt-6 text-white/80 text-sm">
            ✓ Free cancellation up to 24 hours before trip • ✓ No booking fees •
            ✓ Best price guarantee
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServiceTemplate;
