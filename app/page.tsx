import { ROUTES } from "@/lib/data"
import { HowItWorks, SafetySection, OfficeLocation, ExperienceSection, SocialProof } from "./components/sections"
import { VehicleGallery } from "./components/vehicle-gallery"
import { Button, Card } from "./components/ui-base"
import Link from "next/link"
import { ArrowRight, Star, Shield, Zap, MapPin, Users } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-8 pb-20 lg:pt-12 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-border shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground italic">Varanasi&apos;s #1 Tempo Traveller Service</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-secondary leading-[1.1]">
                Group Travel. <br />
                <span className="text-primary italic">Fixed Prices.</span> <br />
                Tempo Traveller.
              </h1>
              <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                Book 9 to 26 seater tempo travellers from Varanasi to Ayodhya, Prayagraj, and beyond for pilgrimages, weddings & group tours at fixed fares.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/fares">
                  <Button size="lg" className="group h-14 rounded-xl">
                    View Tempo Traveller Fares <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="tel:+919999999999">
                  <Button variant="outline" size="lg" className="h-14 rounded-xl px-10">
                    Call to Book
                  </Button>
                </a>
              </div>

              {/* Trust Stars */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden" />
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                  </div>
                  <p className="text-sm font-semibold text-secondary">4.9/5 from 800+ group trips</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              {/* Quick Route Selector Card */}
              <Card className="p-8 shadow-2xl scale-105 border-primary/20 bg-white/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-secondary flex items-center gap-2">
                  <MapPin className="text-primary h-6 w-6" /> Tempo Traveller Fare Check
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-muted-foreground">Pickup Location</label>
                    <div className="p-4 bg-white border border-border rounded-lg text-secondary font-medium">Varanasi (Airport/Hotel/Ghat)</div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-muted-foreground">Drop Destination</label>
                    <div className="grid grid-cols-2 gap-3">
                      {ROUTES.slice(0, 4).map(route => (
                        <Link key={route.id} href={`/fare/${route.slug}`}>
                          <div className="p-3 bg-slate-50 border border-border rounded-lg text-sm font-bold text-secondary hover:border-primary hover:text-primary transition-all text-center">
                            {route.destination}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link href="/calculator" className="block w-full">
                    <Button className="w-full h-14 text-lg">Calculate Tempo Traveller Fare</Button>
                  </Link>
                  <p className="text-[11px] text-center text-muted-foreground">
                    * No personal data required for fare check
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="bg-white py-12 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Fixed Price", desc: "No surge pricing ever" },
              { icon: Zap, title: "Fast Booking", desc: "WhatsApp in 60s" },
              { icon: Users, title: "9–26 Seater", desc: "All group sizes" },
              { icon: MapPin, title: "VNS Local", desc: "Expert drivers" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-bold text-secondary">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Vehicle Fleet Section */}
      <section id="fleet" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-extrabold text-secondary tracking-tight">Our Tempo Traveller Fleet</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Pick the perfect tempo traveller for your Kashi group journey. Premium, clean, and reliable vehicles for all group sizes.</p>
        </div>

        <VehicleGallery />
      </section>

      <ExperienceSection origin="Varanasi" />

      <SafetySection origin="Varanasi" />

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-extrabold text-secondary tracking-tight">What Our Travelers Say</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Real stories from groups who trusted YatraTempoTraveller for their journey.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Pilgrim Group from Delhi",
                text: "Booked a 15 seater tempo traveller for our Varanasi to Ayodhya pilgrimage. The driver was very polite and the vehicle was spacious with great AC. Fixed price was a huge relief for our group.",
                stars: 5
              },
              {
                name: "Anjali Sharma",
                role: "Wedding Party from Mumbai",
                text: "We booked a 26 seater for our baraat. The tempo traveller was decorated and the driver managed the entire route perfectly. Highly recommend for wedding groups.",
                stars: 5
              },
              {
                name: "Vikram Singh",
                role: "Corporate Group Trip",
                text: "YatraTempoTraveller is our go-to for corporate outings. We took a 12 seater to Prayagraj. On time, transparent billing, and comfortable seats. The team loves it.",
                stars: 5
              }
            ].map((t, i) => (
              <Card key={i} className="p-8 border-primary/10 hover:border-primary/30 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => <Star key={j} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="text-slate-600 italic mb-6">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-slate-200" />
                  <div>
                    <p className="font-bold text-secondary text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <OfficeLocation origin="Varanasi" />

      {/* Social Proof / EEAT Section short */}
      <SocialProof origin="Varanasi" />
    </main>
  );
}
