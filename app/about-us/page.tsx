import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Headphones,
  MapPin,
  ShieldCheck,
  Star,
  TrendingDown,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Yatra Tempo Traveller",
  description:
    "Learn about Yatra Tempo Traveller, a trusted group travel service offering comfortable and reliable tempo traveller rentals for family trips, corporate travel, weddings, tours, and outstation journeys across India.",
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-secondary text-white">
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_30%)]" /> */}

        <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-10">
          <Globe className="w-96 h-96" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-4xl text-center">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              <MapPin className="h-4 w-4" />
              About Yatra Tempo Traveller
            </div>

            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Making Group Travel
              <span className="block italic text-primary">
                Comfortable & Convenient
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Yatra Tempo Traveller provides comfortable, reliable, and
              convenient tempo traveller rental services for families, friends,
              corporate groups, wedding parties, pilgrims, and tour groups
              travelling across India.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                <ShieldCheck className="h-5 w-5 text-primary" />

                <div className="text-left">
                  <p className="text-sm font-bold text-white">
                    Safety Focused
                  </p>
                  <p className="text-xs text-slate-400">
                    Comfortable group travel
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                <TrendingDown className="h-5 w-5 text-primary" />

                <div className="text-left">
                  <p className="text-sm font-bold text-white">
                    Transparent Pricing
                  </p>
                  <p className="text-xs text-slate-400">
                    Clear fare information
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                <Users className="h-5 w-5 text-primary" />

                <div className="text-left">
                  <p className="text-sm font-bold text-white">
                    Group Friendly
                  </p>
                  <p className="text-xs text-slate-400">
                    Families & large groups
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">

              <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                Who We Are
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Your Partner for
                <span className="text-primary"> Group Journeys</span>
              </h2>

              <div className="mt-7 space-y-5 text-[15px] leading-7 text-slate-600 sm:text-base">

                <p>
                  Welcome to{" "}
                  <strong className="text-slate-900">
                    Yatra Tempo Traveller
                  </strong>
                  , a group travel service from{" "}
                  <strong className="text-slate-900">
                    Chiku Mobility India Private Limited
                  </strong>
                  .
                </p>

                <p>
                  We understand that travelling with family, friends,
                  colleagues, or a large group is different from travelling
                  alone. Finding a vehicle that can accommodate everyone
                  comfortably while keeping the journey convenient and
                  organized can be challenging.
                </p>

                <p>
                  Yatra Tempo Traveller is designed to make group transportation
                  easier. We provide tempo traveller rental options for
                  outstation trips, weekend getaways, family vacations,
                  corporate outings, weddings, religious tours, sightseeing
                  trips, and long-distance journeys.
                </p>

                <p>
                  Our focus is simple: help customers plan their journeys with
                  comfortable vehicles, dependable service, experienced
                  drivers, and clear fare information.
                </p>

              </div>
            </div>


            {/* COMPANY CARD */}
            <div className="rounded-3xl bg-gradient-to-br from-primary to-amber-500 p-7 text-slate-950 shadow-xl sm:p-8">

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/30">
                <Star className="h-6 w-6 fill-current" />
              </div>

              <h3 className="text-2xl font-black">
                Travel Together. Travel Better.
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-800/80">
                Whether it is a short weekend trip or a multi-day journey
                across states, our goal is to make group transportation
                comfortable and hassle-free.
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm font-semibold">
                    Comfortable group transportation
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm font-semibold">
                    Suitable for short and long journeys
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm font-semibold">
                    Experienced driver support
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                  <span className="text-sm font-semibold">
                    Clear route and fare information
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              What We Do
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Tempo Traveller Services for Every Journey
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              From family holidays to corporate travel, we help groups travel
              together comfortably and conveniently.
            </p>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Family Trips",
                text: "Comfortable transportation for family vacations, reunions, and weekend getaways.",
                icon: Users,
              },
              {
                title: "Corporate Travel",
                text: "Convenient group transportation for meetings, events, conferences, and team outings.",
                icon: CheckCircle2,
              },
              {
                title: "Wedding Travel",
                text: "Tempo travellers for wedding guests, family groups, ceremonies, and related events.",
                icon: Star,
              },
              {
                title: "Pilgrimage Tours",
                text: "Group transportation for religious and pilgrimage journeys across popular destinations.",
                icon: MapPin,
              },
              {
                title: "Outstation Trips",
                text: "Plan intercity and interstate journeys with comfortable group transportation.",
                icon: Globe,
              },
              {
                title: "Sightseeing Tours",
                text: "Explore destinations comfortably with your family, friends, or travel group.",
                icon: Headphones,
              },
            ].map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {service.text}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                Our Approach
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                More Than Just
                <span className="text-primary"> Transportation</span>
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                We believe group travel should be enjoyable from the moment
                you start planning until you reach your destination. That is
                why we focus on the complete travel experience rather than
                simply providing a vehicle.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Our service philosophy is built around three important
                principles: safety, comfort, and reliability. We aim to provide
                practical travel solutions that suit different group sizes,
                destinations, and trip requirements.
              </p>
            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <ShieldCheck className="h-7 w-7 text-primary" />

                <h3 className="mt-4 font-bold">
                  Safety
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  We prioritize safe and responsible travel for every group.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Star className="h-7 w-7 text-primary" />

                <h3 className="mt-4 font-bold">
                  Comfort
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Comfortable travel makes long journeys easier and more
                  enjoyable.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <TrendingDown className="h-7 w-7 text-primary" />

                <h3 className="mt-4 font-bold">
                  Transparency
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  We aim to keep route and fare information straightforward.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Headphones className="h-7 w-7 text-primary" />

                <h3 className="mt-4 font-bold">
                  Customer Support
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  We help customers make informed travel arrangements.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* WHY YATRA */}
      <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">

          <div className="mx-auto max-w-2xl text-center">

            <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Why Yatra Tempo Traveller
            </span>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Designed for the way groups travel
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              We combine convenient group transportation with a simple,
              customer-focused booking experience.
            </p>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Comfortable vehicles for group travel",
              "Experienced driver support",
              "Outstation and interstate travel",
              "Family and corporate group solutions",
              "Wedding and event transportation",
              "Pilgrimage and sightseeing trips",
              "Clear route and fare information",
              "Customer-focused service",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                <span className="text-sm leading-6 text-slate-300">
                  {item}
                </span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ROUTE DIRECTORY */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">

            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Explore Routes
                </span>

                <h2 className="mt-3 text-3xl font-black tracking-tight">
                  Find Tempo Traveller Fares for Your Route
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-500">
                  Our route directory helps you explore tempo traveller fare
                  information for popular destinations and travel routes
                  across India. Search your route and start planning your
                  next group journey.
                </p>
              </div>

              <a
                href="/fares"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-primary/90"
              >
                Explore Fares
                <ArrowRight className="h-4 w-4" />
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* PARENT COMPANY */}
      <section className="border-t border-slate-200 bg-slate-100 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
            Part of Chiku Mobility India Private Limited
          </span>

          <h2 className="mt-3 text-3xl font-black">
            A Travel Service You Can Rely On
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
            Yatra Tempo Traveller is part of Chiku Mobility India Private
            Limited. For more information about our parent organization and
            wider mobility services, visit our main website.
          </p>

          <a
            href="https://chikucab.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            Visit Chiku Cab
            <ArrowRight className="h-4 w-4" />
          </a>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-amber-500 px-6 py-12 text-center text-slate-950 sm:px-10 lg:py-16">

          <h2 className="text-3xl font-black sm:text-4xl">
            Planning a Group Trip?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-800/80">
            Explore tempo traveller fare information and find a convenient
            travel option for your family, friends, colleagues, or group.
          </p>

          <a
            href="/fares"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Find Your Route
            <ArrowRight className="h-4 w-4" />
          </a>

        </div>
      </section>
    </div>
  );
}
