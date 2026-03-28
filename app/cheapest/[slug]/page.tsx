"use client";

import { ROUTES, VEHICLES, calculateFare } from "@/lib/data";
import { notFound, useParams } from "next/navigation";
import { useState, useMemo } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Shield,
  Star,
  ChevronRight,
  CheckCircle2,
  Truck,
  Users,
  Calendar,
  ArrowRight,
  Sparkles,
  Gift,
  TrendingDown,
  Zap,
} from "lucide-react";
import { FAQSection } from "@/app/components/sections";
import { VehicleGallery } from "@/app/components/vehicle-gallery";

// Main Page Component - Now a Client Component
export default function FarePage() {
  const params = useParams();
  const slug = params.slug as string;
  const route = ROUTES.find((r) => r.slug === slug);
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[0]);

  if (!route) notFound();

  // Calculate fare based on selected vehicle
  const fare = useMemo(() => {
    return calculateFare(route.distance, selectedVehicle.perKmRate);
  }, [route.distance, selectedVehicle]);

  const competitorPrice = Math.round(fare * 1.4);
  const savings = competitorPrice - fare;

  const whatsappUrl = `https://wa.me/916280820037?text=${encodeURIComponent(
    `Hi, I want to book a cab from ${route.origin} to ${route.destination} at ₹${fare}`,
  )}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Floating CTA Bar - Sticky */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
              🔥 Limited Time Offer
            </span>
            <p className="text-xs text-muted-foreground mt-1">
              Prices increasing soon
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:shadow-lg transition-all text-sm"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:shadow-lg transition-all text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section with Price Highlight */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 w-full">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                2,500+ Happy Customers
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-4">
              {route.origin} to{" "}
              <span className="text-primary">{route.destination}</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Lowest Price
              </span>
            </h1>

            {/* Price Display */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 my-6 border border-green-200 max-w-2xl mx-auto">
              <div className="flex items-baseline gap-2 justify-center flex-wrap">
                <span className="text-sm font-semibold text-green-700">
                  Starting from
                </span>
                <span className="text-5xl font-black text-green-700">
                  ₹{fare}
                </span>
                <span className="text-sm text-muted-foreground line-through">
                  ₹{competitorPrice}
                </span>
                <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-bold ml-2">
                  Save ₹{savings}
                </span>
              </div>
              <p className="text-sm text-green-700 mt-2 flex items-center justify-center gap-1">
                <Sparkles className="h-4 w-4" />
                Cheapest in India • No Hidden Charges • 100% Price Match
              </p>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-sm">
                <MapPin className="h-5 w-5 text-primary" />
                <span>
                  <strong>{route.distance} km</strong> Journey
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Clock className="h-5 w-5 text-primary" />
                <span>
                  <strong>{route.duration}</strong> Duration
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Shield className="h-5 w-5 text-primary" />
                <span>Insured Travel</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Users className="h-5 w-5 text-primary" />
                <span>9-26 Seaters</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:shadow-lg text-lg group"
              >
                <Phone className="h-5 w-5 group-hover:animate-pulse" />
                Book Now @ ₹{fare}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/5 transition-all"
              >
                <MessageCircle className="h-5 w-5" />
                Get Free Quote
              </a>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-3 justify-center mt-6 pt-6 border-t max-w-md mx-auto">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-green-600" />
                No Cancellation Fee
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-green-600" />
                Free Cancellation
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-green-600" />
                Live Tracking
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison Banner */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-bold flex items-center justify-center gap-2 flex-wrap">
            <Gift className="h-6 w-6 animate-bounce" />
            Best Price Guarantee! Found a lower price? We'll match it & give 5%
            extra off
            <Gift className="h-6 w-6 animate-bounce" />
          </p>
        </div>
      </section>

      {/* Why Choose Us - Value Props */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-12">
            Why Customers Choose Us for{" "}
            <span className="text-primary">Cheapest Rides</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingDown,
                title: "Lowest Price Guarantee",
                desc: "We offer the most competitive rates in the industry with no hidden costs",
              },
              {
                icon: Shield,
                title: "Safe & Insured",
                desc: "All vehicles are fully insured with experienced, verified drivers",
              },
              {
                icon: Zap,
                title: "Instant Booking",
                desc: "Get confirmation within 10 minutes, 24/7 customer support",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-2xl hover:shadow-xl transition-all group"
              >
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition">
                  <item.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Breakdown Table */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-4">
              Transparent Price Breakdown
            </h2>
            <p className="text-muted-foreground">
              Know exactly what you're paying for - No Surprises
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-3xl mx-auto">
            <div className="bg-primary text-white p-4">
              <h3 className="text-xl font-bold">
                {route.origin} to {route.destination} - {selectedVehicle.name}
              </h3>
            </div>
            <div className="divide-y">
              <div className="flex justify-between p-4">
                <span>Base Fare (Includes Driver Allowance)</span>
                <span className="font-bold">₹{Math.round(fare * 0.7)}</span>
              </div>
              <div className="flex justify-between p-4 bg-slate-50">
                <span>Fuel & Toll Charges</span>
                <span className="font-bold">₹{Math.round(fare * 0.2)}</span>
              </div>
              <div className="flex justify-between p-4">
                <span>Taxes & GST</span>
                <span className="font-bold">₹{Math.round(fare * 0.1)}</span>
              </div>
              <div className="flex justify-between p-4 bg-green-50 font-bold">
                <span>Total Payable Amount</span>
                <span className="text-2xl text-green-700">₹{fare}</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              Book Now & Save ₹{savings}
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Vehicle Options */}
      <section className="py-24 bg-slate-50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-secondary">
              Our Tempo Traveller Fleet
            </h2>

            <p className="text-muted-foreground">
              Pick the perfect tempo traveller for your {route.destination}{" "}
              group journey.
            </p>
          </div>

          <VehicleGallery />
        </div>
      </section>

      {/* Urgency Section */}
      <section className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black mb-4 flex items-center justify-center gap-2">
            <Calendar className="h-8 w-8" />
            Limited Slots Available!
          </h2>
          <p className="text-xl mb-6">
            Prices increase by 15% after this month. Book now to lock the lowest
            rate.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all"
          >
            <Phone className="h-5 w-5" />
            Call & Book @ ₹{fare}
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={route.faqs} />
    </div>
  );
}
