import { Metadata } from "next";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Globe,
  Headphones,
  IndianRupee,
  MapPin,
  Phone,
  RefreshCcw,
  ShieldCheck,
  XCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Yatra Tempo Traveller",
  description:
    "Read the Refund and Cancellation Policy of Yatra Tempo Traveller, including booking cancellations, date changes, refund eligibility, processing, and customer support.",
};

export default function RefundAndCancellation() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-secondary text-white">

        {/* Decorative Globe */}
        <div className="absolute right-0 top-0 -mr-20 -mt-20 opacity-10">
          <Globe className="h-96 w-96" />
        </div>

        <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-slate-950/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-24">

          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <ShieldCheck className="h-4 w-4" />
              Yatra Tempo Traveller
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Refund & Cancellation
              <span className="block italic text-primary">
                Policy
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              We aim to keep our booking, cancellation, and refund process
              transparent and straightforward. Please review the information
              below before making changes to your travel plans.
            </p>

            {/* Trust Cards */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                <ShieldCheck className="h-5 w-5 text-primary" />

                <div className="text-left">
                  <p className="text-sm font-bold text-white">
                    Transparent Terms
                  </p>

                  <p className="text-xs text-slate-400">
                    Clear booking conditions
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                <RefreshCcw className="h-5 w-5 text-primary" />

                <div className="text-left">
                  <p className="text-sm font-bold text-white">
                    Refund Process
                  </p>

                  <p className="text-xs text-slate-400">
                    Subject to booking terms
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                <Headphones className="h-5 w-5 text-primary" />

                <div className="text-left">
                  <p className="text-sm font-bold text-white">
                    Customer Support
                  </p>

                  <p className="text-xs text-slate-400">
                    Assistance when you need it
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-5xl">
          {/* =====================================================
              INTRODUCTION
          ===================================================== */}
          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">

            <div className="flex items-start gap-4">

              <div className="shrink-0 rounded-2xl bg-primary/10 p-3">
                <FileCheck2 className="h-6 w-6 text-primary" />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Policy Overview
                </span>

                <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                  Refund & Cancellation Policy
                </h2>
              </div>

            </div>

            <div className="mt-7 space-y-5 text-[15px] leading-7 text-slate-600 sm:text-base">

              <p>
                <strong className="text-slate-900">
                  Yatra Tempo Traveller
                </strong>{" "}
                operates as a part of{" "}
                <strong className="text-slate-900">
                  Chiku Mobility India Private Limited
                </strong>
                .
              </p>

              <p>
                Any bookings, trips, or reservations made through Yatra Tempo
                Traveller are subject to the applicable refund and cancellation
                policies of the parent organization.
              </p>

              <p>
                We aim to provide transparent and fair procedures concerning
                booking cancellations, travel-date changes, refund requests,
                and related booking adjustments.
              </p>

              <p>
                Because booking systems and policies may be updated from time
                to time, customers should refer to the applicable terms
                communicated for their booking and the current policies
                published by our parent organization.
              </p>

            </div>
          </section>

          {/* =====================================================
              CANCELLATION POLICY
          ===================================================== */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-primary/10 p-3">
                <XCircle className="h-6 w-6 text-primary" />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Cancellation
                </span>

                <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                  Cancelling Your Booking
                </h2>
              </div>

            </div>

            <p className="mt-6 leading-7 text-slate-600">
              Travel plans can change. If you need to cancel your tempo
              traveller booking, please contact our support team as early as
              possible and provide your booking details.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">

              {[
                {
                  title: "Submit Cancellation Request",
                  text: "Contact our team with your booking reference, registered phone number, journey date, and cancellation request.",
                },
                {
                  title: "Booking Verification",
                  text: "Our team will verify your booking and review the cancellation terms applicable to your reservation.",
                },
                {
                  title: "Cancellation Charges",
                  text: "Any applicable cancellation charges will be determined according to the terms applicable to your booking.",
                },
                {
                  title: "Refund Eligibility",
                  text: "If your booking qualifies for a refund, the eligible amount will be processed according to the applicable refund terms.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex gap-3">

                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {item.text}
                      </p>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </section>

          {/* =====================================================
              REFUND POLICY
          ===================================================== */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-primary/10 p-3">
                <IndianRupee className="h-6 w-6 text-primary" />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Refunds
                </span>

                <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                  Refund Eligibility & Processing
                </h2>
              </div>

            </div>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-600">

              <p>
                Refund eligibility depends on the terms associated with the
                specific booking. Factors such as cancellation timing, booking
                type, travel date, vehicle availability, and applicable
                booking conditions may affect the refund.
              </p>

              <p>
                Where a refund is approved, the eligible amount will be
                processed according to the applicable refund procedure and
                payment method.
              </p>

              <p>
                The time required for a refund to appear in the customer&apos;s
                account may vary depending on the payment provider, bank, or
                financial institution involved.
              </p>

            </div>

            {/* Refund Steps */}
            <div className="mt-8 grid gap-5 md:grid-cols-3">

              {[
                {
                  number: "01",
                  title: "Request",
                  text: "Submit your cancellation or refund request with the relevant booking details.",
                },
                {
                  number: "02",
                  title: "Review",
                  text: "Our team reviews the booking and determines eligibility according to the applicable terms.",
                },
                {
                  number: "03",
                  title: "Processing",
                  text: "Approved refunds are processed through the applicable payment channel.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <span className="text-3xl font-black text-primary">
                    {step.number}
                  </span>

                  <h3 className="mt-4 font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {step.text}
                  </p>
                </div>
              ))}

            </div>
          </section>

          {/* =====================================================
              DATE CHANGE
          ===================================================== */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-primary/10 p-3">
                <Clock3 className="h-6 w-6 text-primary" />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Date Changes
                </span>

                <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                  Changing Your Travel Date
                </h2>
              </div>

            </div>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-600">

              <p>
                If your travel plans change but you still wish to use the
                service, contact our team to discuss whether your booking can
                be moved to another date.
              </p>

              <p>
                Date changes are subject to vehicle availability and the terms
                applicable to the original booking. Additional charges or
                fare differences may apply where applicable.
              </p>

              <p>
                We recommend requesting a date change as early as possible to
                improve the possibility of accommodating your preferred new
                travel date.
              </p>

            </div>
          </section>

          {/* =====================================================
              NO SHOW
          ===================================================== */}
          <section className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-7 sm:p-10">

            <div className="flex items-start gap-4">

              <div className="shrink-0 rounded-xl bg-amber-100 p-3">
                <AlertCircle className="h-6 w-6 text-amber-600" />
              </div>

              <div>

                <span className="text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
                  Important
                </span>

                <h2 className="mt-1 text-2xl font-black text-slate-900">
                  No-Show & Late Cancellation
                </h2>

                <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600">

                  <p>
                    If a customer does not use the booked service without
                    providing an appropriate cancellation request, the booking
                    may be treated as a no-show according to the applicable
                    booking terms.
                  </p>

                  <p>
                    Late cancellation and no-show situations may have
                    different refund or cancellation conditions. Customers
                    should contact our support team as soon as possible if
                    they are unable to travel.
                  </p>

                </div>

              </div>
            </div>
          </section>

          {/* =====================================================
              IF YATRA CANCELS
          ===================================================== */}
          <section className="mt-8 rounded-3xl bg-slate-950 p-7 text-white shadow-sm sm:p-10">

            <div className="flex items-start gap-4">

              <div className="shrink-0 rounded-xl bg-primary/10 p-3">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>

              <div>

                <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Service Cancellation
                </span>

                <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                  If We Need to Cancel Your Booking
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                  In the unlikely event that Yatra Tempo Traveller is unable
                  to provide the booked service because of operational,
                  vehicle, safety, availability, or other unavoidable
                  circumstances, our team will communicate with the customer
                  and provide the applicable resolution according to the
                  booking terms and parent-company policies.
                </p>

              </div>

            </div>
          </section>

          {/* =====================================================
              IMPORTANT TERMS
          ===================================================== */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">

            <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Important Terms
            </span>

            <h2 className="mt-2 text-3xl font-black">
              Before Cancelling Your Booking
            </h2>

            <div className="mt-7 space-y-4">

              {[
                "Cancellation and refund conditions may vary by booking.",
                "The terms communicated at the time of booking may apply to your reservation.",
                "Refund eligibility should be confirmed with our support team before assuming that a payment is refundable.",
                "Customers should retain their booking confirmation and cancellation acknowledgement.",
                "Refund processing times may vary depending on the payment provider or bank.",
                "The latest policies published by our parent organization should be considered for the most current applicable terms.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />

                  <p className="text-sm leading-6 text-slate-600">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </section>

          {/* =====================================================
              PARENT COMPANY
          ===================================================== */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm sm:p-10">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Globe className="h-7 w-7 text-primary" />
            </div>

            <span className="mt-5 block text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Parent Organization
            </span>

            <h2 className="mt-2 text-2xl font-black sm:text-3xl">
              Chiku Mobility India Private Limited
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              Yatra Tempo Traveller operates as a part of Chiku Mobility India
              Private Limited. For the most accurate and up-to-date
              organizational refund, cancellation, terms, and related
              policies, please refer to the parent organization&apos;s website.
            </p>

            <a
              href="https://chikucab.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Visit Parent Website
              <ArrowRight className="h-4 w-4" />
            </a>

          </section>

          {/* =====================================================
              CONTACT SUPPORT
          ===================================================== */}
          <section className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-amber-500 p-7 text-slate-950 shadow-lg sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-slate-800">
                  Need Assistance?
                </span>

                <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                  Have a Refund or Cancellation Question?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-800/80">
                  Contact our support team with your booking details. We can
                  help you understand the applicable cancellation and refund
                  process for your reservation.
                </p>

                <div className="mt-6 space-y-2 text-sm font-semibold text-slate-900">

                  <p>
                    Phone:{" "}
                    <a
                      href="tel:+919818022327"
                      className="underline underline-offset-4"
                    >
                      +91 98180 22327
                    </a>
                  </p>

                  <p>
                    Email:{" "}
                    <a
                      href="mailto:info@yatratempotraveller.com"
                      className="underline underline-offset-4"
                    >
                      info@yatratempotraveller.com
                    </a>
                  </p>

                  <p className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                    Sigra, Varanasi, Uttar Pradesh 221010
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="tel:+919818022327"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
                >
                  <Phone className="h-4 w-4" />
                  Call Support
                </a>

                <a
                  href="mailto:info@yatratempotraveller.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-950/20 bg-white/40 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-white/60"
                >
                  Email Us
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
