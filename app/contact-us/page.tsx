import { Metadata } from "next";
import ContactForm from "./ContactForm";
import {
  ArrowRight,
  Globe,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Yatra Tempo Traveller",
  description:
    "Contact Yatra Tempo Traveller for tempo traveller bookings, group travel, family trips, corporate travel, weddings, pilgrimages, and outstation journeys across India.",
};

export default function ContactUs() {
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
              <Phone className="h-4 w-4" />
              Yatra Tempo Traveller
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Contact <span className="italic text-primary">Us</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Have a question about your tempo traveller booking? Need help
              choosing the right vehicle for your group? Our team is here to
              help you plan a comfortable and convenient journey.
            </p>

            {/* Hero Actions */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {/* Call */}
              <a
                href="tel:+919818022327"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:opacity-90"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919818022327"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
            QUICK CONTACT CARDS
      ========================================================= */}
      <section className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {/* Phone */}
          <a
            href="tel:+919818022327"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Call Us
                </p>

                <h2 className="mt-1 text-lg font-black text-slate-900">
                  +91 84484 45504
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Booking & customer support
                </p>
              </div>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@yatratempotraveller.com"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Email Us
                </p>

                <h2 className="mt-1 break-all text-lg font-black text-slate-900">
                  info@yatratempotraveller.com
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  General enquiries & bookings
                </p>
              </div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919818022327"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/10 p-3">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  WhatsApp
                </p>

                <h2 className="mt-1 text-lg font-black text-slate-900">
                  +91 84484 45504
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Quick booking assistance
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* =========================================================
          CONTACT FORM + INFO
      ========================================================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* =====================================================
              CONTACT FORM
          ===================================================== */}
          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="mb-8">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                Send a Message
              </span>

              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                How Can We Help?
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
                Send us your travel requirements and our team will get back to
                you with the relevant information.
              </p>
            </div>

            <ContactForm />
          </section>

          {/* =====================================================
              CONTACT INFORMATION
          ===================================================== */}
          <div className="space-y-6">
            {/* Booking */}
            <section className="rounded-3xl bg-slate-950 p-7 text-white shadow-sm sm:p-8">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                For New Bookings
              </span>

              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                Planning a Group Trip?
              </h2>

              <p className="mt-4 text-sm leading-6 text-slate-400">
                Contact our booking team for tempo traveller rentals, outstation
                journeys, family vacations, corporate travel, weddings,
                pilgrimages, and group tours.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href="tel:+919818022327"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <Phone className="h-5 w-5 text-primary" />

                  <div>
                    <p className="text-xs text-slate-500">Call / Booking</p>

                    <p className="font-bold">+91 98180 22327</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919818022327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <MessageCircle className="h-5 w-5 text-primary" />

                  <div>
                    <p className="text-xs text-slate-500">WhatsApp</p>

                    <p className="font-bold">+91 98180 22327</p>
                  </div>
                </a>

                <a
                  href="mailto:info@yatratempotraveller.com"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <Mail className="h-5 w-5 text-primary" />

                  <div>
                    <p className="text-xs text-slate-500">Email</p>

                    <p className="break-all font-bold">
                      info@yatratempotraveller.com
                    </p>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* =========================================================
          OFFICE / LOCATION
      ========================================================= */}
      <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Our Office
            </span>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Visit Yatra Tempo Traveller
            </h2>

            <p className="mt-4 text-slate-500">
              Our services are supported by Chiku Mobility India Private
              Limited, based in Varanasi, Uttar Pradesh.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Varanasi */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-7 sm:p-8">
              <h3 className="text-2xl font-black text-slate-900">Varanasi</h3>

              <p className="mt-5 text-lg font-bold text-slate-700">
                CHIKU MOBILITY INDIA PRIVATE LIMITED
              </p>

              <div className="mt-5 space-y-4 text-[16px] leading-7 text-slate-600">
                <p>
                  <strong className="font-bold text-slate-700">
                    Office 1 :
                  </strong>{" "}
                  D 63/59 Shivpurwa Mahmoorganj Pin 221010 Varanasi
                </p>

                <p>
                  <strong className="font-bold text-slate-700">
                    Office 2 :
                  </strong>{" "}
                  D 65/426 D 1 A Baulia Lahartara Near Manik Nagar Colony
                  Varanasi
                </p>

                <p>
                  <strong className="font-bold text-slate-700">
                    Contact No :
                  </strong>{" "}
                  <a href="tel:+919818022327" className="hover:text-primary">
                    98180 22327
                  </a>
                </p>

                <p>
                  <strong className="font-bold text-slate-700">
                    Working Hours :
                  </strong>{" "}
                  10 AM to 7 PM (Monday to Saturday)
                </p>
              </div>
            </div>

            {/* Lucknow */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-7 sm:p-8">
              <h3 className="text-2xl font-black text-slate-900">Lucknow</h3>

              <p className="mt-5 text-lg font-bold text-slate-700">
                CHIKU MOBILITY INDIA PRIVATE LIMITED
              </p>

              <div className="mt-5 space-y-4 text-[16px] leading-7 text-slate-600">
                <p>
                  <strong className="font-bold text-slate-700">
                    Office 1 :
                  </strong>{" "}
                  First floor, C3/96, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar
                  Pradesh 226010
                </p>

                <p>
                  <strong className="font-bold text-slate-700">
                    Contact No :
                  </strong>{" "}
                  <a href="tel:+919818022327" className="hover:text-primary">
                    98180 22327
                  </a>
                </p>

                <p>
                  <strong className="font-bold text-slate-700">
                    Working Hours :
                  </strong>{" "}
                  10 AM to 7 PM (Monday to Saturday)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY CONTACT US
      ========================================================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Why Contact Us
            </span>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Travel Planning Made Easier
            </h2>

            <p className="mt-4 text-slate-500">
              From choosing the right vehicle to planning your route, our team
              can help make your group journey simpler.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: "Group Travel",
                text: "Tempo travellers for families, friends, corporate groups, and tours.",
              },
              {
                icon: ShieldCheck,
                title: "Reliable Service",
                text: "Support for planning comfortable and convenient journeys.",
              },
              {
                icon: MapPin,
                title: "Multiple Routes",
                text: "Outstation and intercity travel across destinations in India.",
              },
              {
                icon: Headphones,
                title: "Easy Support",
                text: "Get assistance with bookings, changes, and travel queries.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="inline-flex rounded-xl bg-primary/10 p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="mt-5 text-lg font-black">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-amber-500 p-7 text-slate-950 shadow-lg sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-slate-800">
                Ready to Travel?
              </span>

              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                Let Us Help Plan Your Journey
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-800/80">
                Tell us your route, travel date, group size, and vehicle
                requirement. Our team can help you find the right tempo
                traveller for your journey.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="tel:+919818022327"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>

              <a
                href="https://wa.me/919818022327"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-950/20 bg-white/40 px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-white/60"
              >
                WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
