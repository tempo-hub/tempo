import { ROUTES, VEHICLES, calculateFare } from "@/lib/data"
import { notFound } from "next/navigation"
import { FareCalculator } from "../../components/fare-calculator"
import { FareTable } from "../../components/fare-table"
import { VehicleGallery } from "../../components/vehicle-gallery"
import { RouteMap } from "../../components/route-map"
import { TrustSection, FAQSection, FareInclusions, ExclusionsNotice, SafetySection, HowItWorks, OfficeLocation, TrustBadges, ExperienceSection, TestimonialsSection, SocialProof } from "../../components/sections"
import { BreadcrumbList, LocalBusiness, Offer, FAQPage } from "../../components/schemas"
import { ArrowRight, MapPin, Clock, ShieldCheck, Star, Info } from "lucide-react"
import { Metadata } from "next"

export const revalidate = 86400

export async function generateStaticParams() {
    return ROUTES.map((route) => ({
        slug: route.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const route = ROUTES.find((r) => r.slug === slug)
    if (!route) return {}

    const fare = calculateFare(route.distance, 18)
    const title = `${route.origin} to ${route.destination} Tempo Traveller Fare | Round Trip ₹${fare}`

    return {
        title,
        description: `Best ${route.origin} to ${route.destination} tempo traveller fare. Exclusive Round-trip @ ₹${fare}. Fixed price, verified drivers.`,
        alternates: { canonical: `https://yatratempotraveller.com/fare/${slug}` },
        openGraph: {
            title,
            description: route.description,
            images: [{ url: '/og-image.jpg' }],
        }
    }
}

export default function FarePage({ params }: { params: { slug: string } }) {
    const { slug } = params
    const route = ROUTES.find((r) => r.slug === slug)
    if (!route) notFound()

    const fare = calculateFare(route.distance, 18)
    const breadcrumbs = [
        { name: "Home", item: "https://yatratempotraveller.com" },
        { name: "Fares", item: "https://yatratempotraveller.com/fares" },
        { name: `${route.origin} to ${route.destination}`, item: `https://yatratempotraveller.com/fare/${route.slug}` }
    ]

    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LocalBusiness) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BreadcrumbList(breadcrumbs)) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQPage(route.faqs)) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(Offer(fare, `${route.origin} to ${route.destination}`)) }} />

            <section className="pt-12 pb-20 bg-slate-50 border-b border-border">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12 space-y-4">
                        <div className="flex items-center justify-center gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                            <span className="text-xs font-black text-secondary ml-2 uppercase tracking-widest">4.9/5 Rating</span>
                        </div>
                        <div className="inline-block text-primary font-bold text-xs uppercase tracking-[0.2em] bg-primary/5 px-4 py-1.5 rounded-full mb-2">
                            Tempo Traveller Fare {route.origin}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-secondary tracking-tight leading-tight">
                            {route.origin} to {route.destination} Tempo Traveller Fare <br />
                            <span className="text-primary italic">Round Trip Fixed Price ₹{fare}</span>
                        </h1>
                        <div className="flex flex-wrap justify-center gap-6 pt-4">
                            <div className="flex items-center gap-2 text-sm font-bold text-secondary">
                                <MapPin className="h-4 w-4 text-primary" /> {route.distance} km
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold text-secondary">
                                <Clock className="h-4 w-4 text-primary" /> {route.duration}
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold text-secondary">
                                <ShieldCheck className="h-4 w-4 text-primary" /> Verified Tempo Traveller
                            </div>
                        </div>
                    </div>
                    <FareCalculator route={route} />
                </div>
            </section>

            <TrustBadges />
            <HowItWorks />

            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-3xl font-black text-secondary">Compare All Tempo Traveller Fares</h2>
                            <p className="text-muted-foreground mt-2">Transparent pricing for {route.origin} to {route.destination} - No surprise charges.</p>
                        </div>
                        <FareTable route={route} />
                        <ExclusionsNotice />
                    </div>
                    <div className="space-y-8">
                        <div className="bg-slate-50 p-8 rounded-3xl border border-border">
                            <h4 className="font-bold text-secondary text-xl mb-4">Fare Inclusions</h4>
                            <FareInclusions />
                            <div className="mt-8 pt-6 border-t border-border">
                                <p className="text-xs font-black text-primary uppercase tracking-widest mb-2">Fixed Price Guarantee</p>
                                <p className="text-xs text-muted-foreground">The price shown for the vehicle is final. No surge pricing or hidden service charges.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-4 border-t border-border">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black text-secondary leading-tight">Expert Travel Guide: <br /> {route.origin} to {route.destination}</h2>
                            <p className="text-lg text-slate-600 leading-relaxed">{route.description}</p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-secondary flex items-center gap-3">
                                <Clock className="text-primary h-6 w-6" /> Suggested Group Itinerary
                            </h3>
                            <div className="space-y-0 relative border-l-2 border-primary/20 ml-3">
                                {(route.itinerary || [
                                    { time: "06:00 AM", activity: `Pickup from ${route.origin} (Home/Hotel)` },
                                    { time: "09:00 AM", activity: "Breakfast break at a premium highway food court" },
                                    { time: "01:00 PM", activity: `Arrival at ${route.destination} & Sightseeing` },
                                    { time: "05:00 PM", activity: `Departure from ${route.destination}` },
                                    { time: "09:00 PM", activity: `Drop back at ${route.origin}` }
                                ]).map((item, i) => (
                                    <div key={i} className="pl-8 pb-8 relative">
                                        <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-white shadow-sm" />
                                        <p className="text-xs font-black text-primary uppercase tracking-wider">{item.time}</p>
                                        <p className="text-slate-700 font-medium mt-1">{item.activity}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 rounded-2xl border border-border">
                                <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
                                    <MapPin className="h-4 w-4 text-primary" /> Road Conditions
                                </h4>
                                <p className="text-sm text-slate-600">{route.roadConditions || "Generally excellent highway connectivity. 4-lane roads with multiple food and fuel stops along the route."}</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl border border-border">
                                <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-primary" /> Best Time to Travel
                                </h4>
                                <p className="text-sm text-slate-600">{route.bestTime || "October to March is ideal for pleasant weather. We recommend a 5:00 AM or 6:00 AM start to beat local traffic."}</p>
                            </div>
                        </div>

                        {route.seasonalNotes ? (
                            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                                <h4 className="font-bold text-primary mb-2 flex items-center gap-2 uppercase tracking-wide text-xs">
                                    <ShieldCheck className="h-4 w-4" /> Seasonal Travel Note
                                </h4>
                                <p className="text-sm text-secondary font-medium">{route.seasonalNotes}</p>
                            </div>
                        ) : (
                            <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                                <h4 className="font-bold text-blue-700 mb-2 flex items-center gap-2 uppercase tracking-wide text-xs">
                                    <Info className="h-4 w-4" /> Travel Tip
                                </h4>
                                <p className="text-sm text-slate-600">This is a popular route for pilgrim groups. Pre-book at least 7 days in advance for weekend travel to ensure availability of your preferred vehicle.</p>
                            </div>
                        )}
                    </div>

                    <div className="space-y-12">
                        <div className="sticky top-28 space-y-12">
                            <RouteMap origin={route.origin} destination={route.destination} />

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-secondary">Why Tempo Traveller?</h3>
                                <div className="space-y-4">
                                    {(route.comparison || [
                                        {
                                            transport: "Tempo Traveller",
                                            pros: "Door-to-door, group stays together, luxury pushback seats, ample luggage space for pilgrims",
                                            cons: "Requires group size of 6+"
                                        },
                                        {
                                            transport: "Bus / Train",
                                            pros: "Cheaper for solo travelers",
                                            cons: "Fixed timings, no privacy, struggle with luggage, station transfers needed"
                                        }
                                    ]).map((c, i) => (
                                        <div key={i} className="p-5 bg-white rounded-2xl border border-border shadow-sm">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className={`text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider ${c.transport === 'Tempo Traveller' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'
                                                    }`}>
                                                    {c.transport}
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-[10px] font-bold text-emerald-600 uppercase mb-1">Pros</p>
                                                    <p className="text-xs text-slate-600">{c.pros}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-bold text-rose-600 uppercase mb-1">Cons</p>
                                                    <p className="text-xs text-slate-600">{c.cons}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ExperienceSection />
            <SafetySection />

            <section className="py-24 bg-slate-50 border-y border-border">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-black text-secondary">Our Tempo Traveller Fleet</h2>
                        <p className="text-muted-foreground">Pick the perfect tempo traveller for your {route.destination} group journey.</p>
                    </div>
                    <VehicleGallery />
                </div>
            </section>

            <SocialProof />
            <TrustSection />
            <TestimonialsSection />
            <OfficeLocation />

            <FAQSection faqs={route.faqs && route.faqs.length > 0 ? route.faqs : [
                { question: `What is the distance from ${route.origin} to ${route.destination}?`, answer: `The road distance is approximately ${route.distance} km.` },
                { question: "Are tolls and parking included?", answer: "No, tolls, parking, and state taxes are extra as per actual receipts." },
                { question: "Is the price fixed?", answer: "Yes, our quoted fare for the vehicle is fixed. No surge pricing." }
            ]} />

            <section className="py-20 bg-secondary text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-8">Other Tempo Traveller Routes From {route.origin}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {ROUTES.filter(r => r.origin === route.origin && r.id !== route.id).slice(0, 12).map(r => (
                            <a key={r.id} href={`/fare/${r.slug}`} className="p-4 rounded-xl border border-white/10 hover:border-primary/50 transition-colors group">
                                <p className="text-sm font-bold group-hover:text-primary">{r.origin} to {r.destination}</p>
                                <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest font-bold">Best Fare ₹{calculateFare(r.distance, 18)}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
