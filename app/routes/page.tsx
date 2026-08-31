import { ROUTES, calculateFare } from "@/lib/data";
import { GLOBAL_FAQS } from "@/lib/faq-data";
import Link from "next/link";
import { Card, Button } from "../components/ui-base";
import { ArrowRight, MapPin, Clock, Search, Bus } from "lucide-react";
import { Metadata } from "next";
import { FAQSection } from "../components/sections";
import { FAQPage } from "../components/schemas";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Varanasi Tempo Traveller Routes | Budget & Cheapest Options",
  description:
    "Explore all 24+ tempo traveller routes from Varanasi. Discover the cheapest tempo traveller for group tours with transparent per km cost. Book your budget tempo traveller today.",
};

export default function RoutesPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            <Bus className="h-4 w-4 text-primary" />
            <span className="text-xs font-black uppercase text-primary tracking-widest">
              Our Network
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-black text-secondary tracking-tight">
            Varanasi Tempo Traveller{" "}
            <span className="text-primary italic">Route Directory</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We connect the spiritual capital to all major cities across Uttar
            Pradesh, Bihar, and beyond. Choose your destination and see fixed
            group fares.
          </p>
        </div>

        {/* Filter/Search Placeholder */}
        <div className="max-w-xl mx-auto mb-12 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search for a destination (e.g. Ayodhya)"
            className="w-full pl-12 pr-4 py-4 bg-white border border-border rounded-2xl shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-secondary font-medium"
          />
        </div>

        {/* Routes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROUTES.map((route) => {
            return (
              <Link
                key={route.id}
                href={`/fare/${route.slug}`}
                className="group"
              >
                <Card className="p-6 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-primary/5 hover:border-primary/20">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-primary/10 transition-colors">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-muted-foreground block mb-1">
                        Round Trip From
                      </span>
                      <p className="text-2xl font-black text-secondary">
                        ₹{calculateFare(route.distance, 18)}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">
                      Varanasi to {route.destination}
                    </h3>
                    <p className="text-sm text-slate-500 flex items-center gap-2">
                      <Clock className="h-4 w-4" /> {route.distance} km •{" "}
                      {route.duration}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 line-clamp-2 mb-6 leading-relaxed">
                    {route.description}
                  </p>

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                      Fixed Price Guarantee
                    </span>
                    <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* SEO Content Section */}
        <div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 border border-border shadow-sm">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-secondary">
              Affordable & Transparent Outstation Travel
            </h2>
            <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
              <p>
                Planning a group trip from Varanasi doesn&apos;t have to be
                expensive. We understand the importance of clear pricing, which
                is why we offer a completely transparent{" "}
                <strong>per km cost</strong> starting at just ₹18/km. There are
                no hidden charges, making it easier for you to plan your travel
                budget accurately.
              </p>
              <p>
                Whether you&apos;re organizing a spiritual pilgrimage to
                Ayodhya, a family reunion in Lucknow, or a historic tour to
                Bodhgaya, finding the <strong>cheapest tempo traveller</strong>{" "}
                without compromising on quality is our priority. Our diverse
                fleet of well-maintained vehicles ensures that you get the best
                value for your money.
              </p>
              <p>
                For travelers looking for cost-effective solutions, our{" "}
                <strong>budget tempo traveller</strong> options provide
                comfortable seating, ample luggage space, and air-conditioned
                interiors. You can enjoy a premium travel experience across
                North India while staying comfortably within your budget.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-secondary rounded-3xl p-10 lg:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5 rotate-12">
            <Bus className="h-48 w-48" />
          </div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-black">
              Don&apos;t see your destination?
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              We provide custom tempo traveller packages for group tours across
              entire North India.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href="tel:+919818022327">
                <Button size="lg" className="h-14 px-10 rounded-xl shadow-xl">
                  Call for Custom Quote
                </Button>
              </a>
              <a href="https://wa.me/919818022327?text=Hi!%20Custom%20Quote%20for%20Tempo%20Traveller">
                <Button
                  variant="whatsapp"
                  size="lg"
                  className="h-14 px-10 rounded-xl"
                >
                  WhatsApp Support
                </Button>
              </a>
            </div>
          </div>
        </div>

        <FAQSection faqs={GLOBAL_FAQS} title="Tempo Traveller Fare FAQs" />
      </div>
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(FAQPage(GLOBAL_FAQS)),
        }}
      />
    </main>
  );
}
