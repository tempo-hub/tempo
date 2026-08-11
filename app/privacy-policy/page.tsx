import { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Cookie,
  Database,
  Eye,
  FileCheck2,
  Globe,
  Headphones,
  LockKeyhole,
  MapPin,
  Mail,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Yatra Tempo Traveller",
  description:
    "Read the Privacy Policy of Yatra Tempo Traveller to understand how we collect, use, protect, and manage customer information and personal data.",
};

export default function PrivacyPolicy() {
  const lastUpdated = new Date().getFullYear();

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
              Privacy <span className="italic text-primary">Policy</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Your privacy matters to us. This Privacy Policy explains how Yatra
              Tempo Traveller collects, uses, protects, and manages information
              when you use our website and services.
            </p>

            {/* Trust Cards */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                <LockKeyhole className="h-5 w-5 text-primary" />

                <div className="text-left">
                  <p className="text-sm font-bold text-white">
                    Data Protection
                  </p>

                  <p className="text-xs text-slate-400">
                    Responsible information handling
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                <UserCheck className="h-5 w-5 text-primary" />

                <div className="text-left">
                  <p className="text-sm font-bold text-white">
                    Customer Privacy
                  </p>

                  <p className="text-xs text-slate-400">
                    Respecting your information
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                <ShieldCheck className="h-5 w-5 text-primary" />

                <div className="text-left">
                  <p className="text-sm font-bold text-white">
                    Secure Practices
                  </p>

                  <p className="text-xs text-slate-400">
                    Reasonable security measures
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
                  Privacy Policy
                </span>

                <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                  Your Privacy Matters
                </h2>
              </div>
            </div>

            <div className="mt-7 space-y-5 text-[15px] leading-7 text-slate-600 sm:text-base">
              <p>
                This Privacy Policy explains how{" "}
                <strong className="text-slate-900">
                  Yatra Tempo Traveller
                </strong>
                , a part of{" "}
                <strong className="text-slate-900">
                  Chiku Mobility India Private Limited
                </strong>
                , handles information collected through our website, booking
                forms, communication channels, and related services.
              </p>

              <p>
                By accessing or using our website and services, you acknowledge
                that information may be collected and used as described in this
                Privacy Policy.
              </p>

              <p>
                We encourage customers to read this policy carefully. If you do
                not agree with any part of this policy, please contact us before
                providing personal information or using our services.
              </p>
            </div>
          </section>

          {/* =====================================================
              INFORMATION WE COLLECT
          ===================================================== */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3">
                <Database className="h-6 w-6 text-primary" />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Information Collection
                </span>

                <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                  Information We May Collect
                </h2>
              </div>
            </div>

            <p className="mt-6 leading-7 text-slate-600">
              Depending on how you interact with our website and services, we
              may collect information that you voluntarily provide to us.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {[
                {
                  title: "Contact Information",
                  text: "Name, phone number, email address, and other contact details provided when making an enquiry or booking.",
                },
                {
                  title: "Travel Information",
                  text: "Pickup location, destination, travel date, pickup time, vehicle requirements, passenger information, and related journey details.",
                },
                {
                  title: "Booking Information",
                  text: "Details associated with your booking, enquiry, cancellation request, payment status, or customer support request.",
                },
                {
                  title: "Communication Information",
                  text: "Information you provide when contacting us through phone, email, WhatsApp, website forms, or other communication channels.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>

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
              AUTOMATIC INFORMATION
          ===================================================== */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3">
                <Globe className="h-6 w-6 text-primary" />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Website Usage
                </span>

                <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                  Information Collected Automatically
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-600">
              <p>
                When you visit our website, certain technical information may be
                collected automatically by the website infrastructure or
                services used to operate the website.
              </p>

              <p>
                This may include information such as browser type, device
                information, approximate location, IP address, pages visited,
                referring pages, and general website usage information.
              </p>

              <p>
                Such information may be used for website security,
                troubleshooting, performance monitoring, analytics, and
                improving the overall user experience.
              </p>
            </div>
          </section>

          {/* =====================================================
              HOW WE USE INFORMATION
          ===================================================== */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3">
                <Eye className="h-6 w-6 text-primary" />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Use of Information
                </span>

                <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                  How We Use Your Information
                </h2>
              </div>
            </div>

            <p className="mt-6 leading-7 text-slate-600">
              Information collected from customers may be used for legitimate
              business and service-related purposes, including:
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Responding to enquiries and customer requests.",
                "Processing and managing tempo traveller bookings.",
                "Confirming travel details and communicating booking information.",
                "Providing customer support and resolving service-related issues.",
                "Processing cancellation, refund, or booking modification requests.",
                "Improving our website, services, and customer experience.",
                "Maintaining website security and preventing misuse or unauthorized activity.",
                "Complying with applicable legal, regulatory, or lawful requirements.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />

                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* =====================================================
              COOKIES
          ===================================================== */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3">
                <Cookie className="h-6 w-6 text-primary" />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Cookies
                </span>

                <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                  Cookies & Similar Technologies
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-600">
              <p>
                Our website may use cookies or similar technologies to support
                website functionality, remember certain preferences, improve
                performance, and understand how visitors interact with the
                website.
              </p>

              <p>
                Cookies may also be used by third-party services integrated into
                the website for purposes such as analytics or other
                functionality.
              </p>

              <p>
                You can manage or restrict cookies through your browser
                settings. Disabling certain cookies may affect some website
                functionality.
              </p>
            </div>
          </section>

          {/* =====================================================
              SHARING INFORMATION
          ===================================================== */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Information Sharing
                </span>

                <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                  When Information May Be Shared
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-600">
              <p>
                We do not intend to sell customers' personal information as a
                commercial product.
              </p>

              <p>
                Information may be shared with service providers, business
                partners, technology providers, payment-related providers, or
                other parties where reasonably necessary to provide, administer,
                secure, or improve our services.
              </p>

              <p>
                Information may also be disclosed where required by law,
                regulation, legal process, court order, or to protect the
                rights, safety, and security of our customers, business, or
                website.
              </p>
            </div>
          </section>

          {/* =====================================================
              PAYMENT INFORMATION
          ===================================================== */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3">
                <LockKeyhole className="h-6 w-6 text-primary" />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Payments
                </span>

                <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                  Payment Information
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-600">
              <p>
                Where online or digital payment facilities are provided, payment
                transactions may be processed through applicable payment service
                providers.
              </p>

              <p>
                Payment providers may collect and process payment information
                according to their own privacy policies and terms.
              </p>

              <p>
                Customers should avoid sharing sensitive payment credentials,
                passwords, PINs, or one-time passwords with anyone claiming to
                represent Yatra Tempo Traveller.
              </p>
            </div>
          </section>

          {/* =====================================================
              DATA SECURITY
          ===================================================== */}
          <section className="mt-8 rounded-3xl bg-slate-950 p-7 text-white shadow-sm sm:p-10">
            <div className="flex items-start gap-4">
              <div className="shrink-0 rounded-xl bg-primary/10 p-3">
                <LockKeyhole className="h-6 w-6 text-primary" />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Data Security
                </span>

                <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                  Protecting Your Information
                </h2>

                <div className="mt-5 space-y-4 leading-7 text-slate-400">
                  <p>
                    We take reasonable steps to protect personal information
                    against unauthorized access, misuse, alteration, loss, or
                    disclosure.
                  </p>

                  <p>
                    However, no website, online service, or electronic
                    transmission can be guaranteed to be completely secure.
                    Customers should therefore use reasonable caution when
                    sharing information online.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              DATA RETENTION
          ===================================================== */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3">
                <Database className="h-6 w-6 text-primary" />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Data Retention
                </span>

                <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                  How Long We Keep Information
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-600">
              <p>
                Personal information may be retained for as long as reasonably
                necessary to provide services, maintain business records,
                resolve disputes, comply with applicable legal requirements, and
                fulfill legitimate business purposes.
              </p>

              <p>
                The retention period may vary depending on the type of
                information and the purpose for which it was collected.
              </p>
            </div>
          </section>

          {/* =====================================================
              THIRD PARTY LINKS
          ===================================================== */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              External Websites
            </span>

            <h2 className="mt-2 text-3xl font-black">
              Third-Party Links & Services
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-600">
              <p>
                Our website may contain links to third-party websites,
                platforms, or services.
              </p>

              <p>
                We are not responsible for the privacy practices, security,
                content, or policies of external websites. Customers should
                review the privacy policy of any third-party website before
                providing personal information.
              </p>
            </div>
          </section>

          {/* =====================================================
              CUSTOMER RIGHTS
          ===================================================== */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3">
                <UserCheck className="h-6 w-6 text-primary" />
              </div>

              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  Your Choices
                </span>

                <h2 className="mt-1 text-2xl font-black sm:text-3xl">
                  Your Privacy Choices
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {[
                "You may contact us to ask about personal information associated with your enquiry or booking.",
                "You may request correction of information that you believe is inaccurate or incomplete.",
                "You may contact us regarding questions or concerns about how your information is handled.",
                "Where applicable, you may request that certain information no longer be used, subject to legal and legitimate business requirements.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />

                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* =====================================================
              CHILDREN'S PRIVACY
          ===================================================== */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Children's Privacy
            </span>

            <h2 className="mt-2 text-3xl font-black">
              Information Relating to Children
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-slate-600 sm:text-base">
              Our website and services are intended for customers who are able
              to make travel enquiries and bookings. We do not knowingly request
              unnecessary personal information directly from children. If you
              believe that a child has provided personal information through our
              website without appropriate authorization, please contact us so
              that we can review the matter.
            </p>
          </section>

          {/* =====================================================
              POLICY UPDATES
          ===================================================== */}
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Policy Updates
            </span>

            <h2 className="mt-2 text-3xl font-black">
              Changes to This Privacy Policy
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-600">
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes to our services, website, technology, business
                practices, or applicable requirements.
              </p>

              <p>
                Any updated version will be published on this page with the
                revised date. We encourage customers to periodically review this
                page for the latest information.
              </p>
            </div>
          </section>

          {/* =====================================================
              CONTACT
          ===================================================== */}
          <section className="mt-8 overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-amber-500 p-7 text-slate-950 shadow-lg sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-slate-800">
                  Privacy Support
                </span>

                <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                  Questions About Your Privacy?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-800/80">
                  If you have questions about this Privacy Policy or how your
                  information is handled, please contact our support team.
                </p>

                <div className="mt-6 space-y-3 text-sm font-semibold text-slate-900">
                  <p className="flex items-center gap-2">
                    <Headphones className="h-4 w-4" />

                    <span>
                      Phone:{" "}
                      <a
                        href="tel:+918448445504"
                        className="underline underline-offset-4"
                      >
                        +91 84484 45504
                      </a>
                    </span>
                  </p>

                  <p className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />

                    <span>
                      Email:{" "}
                      <a
                        href="mailto:info@yatratempotraveller.com"
                        className="underline underline-offset-4"
                      >
                        info@yatratempotraveller.com
                      </a>
                    </span>
                  </p>

                  <p className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0" />

                    <span>Sigra, Varanasi, Uttar Pradesh 221010</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="tel:+918448445504"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
                >
                  <Headphones className="h-4 w-4" />
                  Contact Support
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
