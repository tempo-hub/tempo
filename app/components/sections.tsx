import { ChevronDown, ShieldCheck, Award, ThumbsUp, MapPin, Info, Check, Fuel, Shield, Search, PhoneCall, CalendarCheck, Home, Zap, Users } from "lucide-react"
import Image from "next/image"

export const HowItWorks = () => (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl font-black text-secondary uppercase tracking-tight">How to Book in 60 Seconds</h2>
                <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
            </div>
            <div className="grid md:grid-cols-3 gap-12">
                {[
                    { icon: Search, title: "1. Check Fare", desc: "Select your route and tempo traveller size on our calculator to see the fixed price." },
                    { icon: PhoneCall, title: "2. WhatsApp Us", desc: "Click the book button to share your group trip details with our team instantly." },
                    { icon: CalendarCheck, title: "3. Get Confirmation", desc: "Receive driver and tempo traveller details 4 hours before your journey starts." }
                ].map((step, i) => (
                    <div key={i} className="flex flex-col items-center text-center gap-4 relative">
                        {i < 2 && <div className="hidden lg:block absolute top-10 -right-1/4 w-1/2 h-px border-t-2 border-dashed border-slate-200" />}
                        <div className="h-20 w-20 rounded-full bg-slate-50 flex items-center justify-center border-2 border-primary/20 shadow-sm relative z-10">
                            <step.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h4 className="text-xl font-bold text-secondary">{step.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export const SafetySection = () => (
    <section className="py-20 bg-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-5 rotate-12">
            <Shield className="h-64 w-64" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                        <Shield className="h-4 w-4 text-primary" />
                        <span className="text-xs font-black uppercase text-primary tracking-widest">Safety First</span>
                    </div>
                    <h2 className="text-4xl font-black leading-tight">Your Search for a Reliable <br /><span className="text-primary italic">Varanasi Tempo Traveller Ends Here.</span></h2>
                    <p className="text-slate-400 text-lg">We don&apos;t just provide vehicles; we provide peace of mind. Every group trip is monitored for safety and punctuality.</p>
                    <div className="grid sm:grid-cols-2 gap-8">
                        {[
                            { title: "Background Checks", desc: "Every driver is local and police verified with zero criminal record." },
                            { title: "Real-time Tracking", desc: "All our tempo travellers are GPS enabled and tracked from our Sigra office." },
                            { title: "No Sleepy Drivers", desc: "Strict 10-hour daily driving limit to ensure driver alertness." },
                            { title: "Direct Contact", desc: "Direct access to our 24/7 emergency support helpline." }
                        ].map((item, i) => (
                            <div key={i} className="space-y-2">
                                <h4 className="font-bold text-primary flex items-center gap-2">
                                    <Check className="h-4 w-4" /> {item.title}
                                </h4>
                                <p className="text-sm text-slate-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative flex justify-center lg:justify-end">
                    <div className="h-[400px] w-full max-w-md bg-slate-800 rounded-3xl border border-white/10 shadow-3xl p-8 flex flex-col justify-center gap-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-6 opacity-10">
                            <MapPin className="h-24 w-24" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-primary font-black uppercase text-xs tracking-[0.2em]">Verified Professional</p>
                            <h3 className="text-2xl font-bold">Driver Badge #481</h3>
                        </div>
                        <div className="flex items-center gap-4 py-4 border-y border-white/10">
                            <div className="h-16 w-16 rounded-full bg-slate-700" />
                            <div>
                                <p className="text-xl font-bold">Vivek Pandey</p>
                                <p className="text-sm text-slate-400 italic">8+ Years Experience</p>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-500">Language</span>
                                <span className="font-bold">Hindi, English</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-500">Route Expertise</span>
                                <span className="font-bold">VNS-AYO, VNS-PRY</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-slate-500">Rating</span>
                                <span className="text-primary font-black">4.9/5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export const OfficeLocation = () => (
    <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <h2 className="text-3xl font-black text-secondary">Visit Our Local Office</h2>
                    <p className="text-slate-600 leading-relaxed text-lg">We aren&apos;t just an app. We are a locally registered business with a physical presence and tempo traveller garage in the heart of Varanasi. Visit us for tea and bookings!</p>
                    <div className="space-y-4">
                        <div className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-border shadow-sm">
                            <Home className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold text-secondary">Registered Address</h4>
                                <p className="text-sm text-muted-foreground">YatraTempoTraveller.com, 2nd Floor, Mahmoorganj Crossing, Near Sigra, Varanasi, UP - 221010</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-border shadow-sm">
                            <PhoneCall className="h-6 w-6 text-primary shrink-0" />
                            <div>
                                <h4 className="font-bold text-secondary">Emergency Support</h4>
                                <p className="text-sm text-muted-foreground">+91 99999 99999 (Available 24/7)</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="aspect-[16/10] bg-slate-200 rounded-3xl overflow-hidden border border-border shadow-inner flex items-center justify-center relative">
                    <div className="text-center space-y-2">
                        <MapPin className="h-12 w-12 text-primary mx-auto animate-bounce" />
                        <p className="text-[11px] font-bold text-secondary uppercase tracking-widest">Mahmoorganj, Varanasi</p>
                    </div>
                    {/* Placeholder for Interactive Map */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] bg-cover" />
                </div>
            </div>
        </div>
    </section>
)

export const FareInclusions = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
            { icon: Fuel, title: "Fuel Charges", detail: "Included in base price" },
            { icon: Award, title: "Driver Allowance", detail: "Day/Night allowance included" },
            { icon: ShieldCheck, title: "GST (5%)", detail: "No extra tax on portal" },
            { icon: ThumbsUp, title: "Clean Vehicle", detail: "Sanitized before pickup" }
        ].map((item, i) => (
            <div key={i} className="p-4 bg-white rounded-2xl border border-border flex flex-col items-center text-center gap-2 group hover:border-primary/50 transition-colors">
                <div className="p-2 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h5 className="text-xs font-black text-secondary uppercase tracking-tight">{item.title}</h5>
                <p className="text-[10px] text-muted-foreground">{item.detail}</p>
            </div>
        ))}
    </div>
)

export const ExclusionsNotice = () => (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-start">
        <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center shrink-0">
            <Info className="h-5 w-5 text-amber-600" />
        </div>
        <div className="space-y-2">
            <h4 className="font-bold text-amber-900">What is NOT included in this fare?</h4>
            <p className="text-sm text-amber-800 leading-relaxed">
                To keep our fares the lowest in Varanasi, we don&apos;t include variable costs like <span className="font-bold">Toll Taxes, State Entry Taxes, and Parking Fees</span>. These must be paid by the customer directly at the toll plazas or added to the final bill at actuals.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-700">
                    <Check className="h-3 w-3" /> Pay at Toll Booths
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-700">
                    <Check className="h-3 w-3" /> Digital Receipt Provided
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-700">
                    <Check className="h-3 w-3" /> No Overcharging
                </div>
            </div>
        </div>
    </div>
)
export const TrustSection = () => (
    <section className="py-20 bg-slate-50 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-black text-secondary mb-6">Why Our Tempo Traveller Fare is Cheaper & More Transparent?</h2>
                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="bg-white p-3 rounded-xl shadow-sm border border-border shrink-0">
                            <ShieldCheck className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-bold text-secondary">Zero Commission Model</h4>
                            <p className="text-sm text-muted-foreground">Unlike other apps that take 25%, we charge owners a flat fee of ₹500. This saving is passed directly to your group.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-white p-3 rounded-xl shadow-sm border border-border shrink-0">
                            <Award className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-bold text-secondary">Varanasi Local Expertise</h4>
                            <p className="text-sm text-muted-foreground">We aren&apos;t a tech company in Bangalore; we are based in Sigra, Varanasi. We know every shortcut and toll.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-white p-3 rounded-xl shadow-sm border border-border shrink-0">
                            <ThumbsUp className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h4 className="font-bold text-secondary">100% Fixed Price Guarantee</h4>
                            <p className="text-sm text-muted-foreground">The price you see is what your group pays. No hidden service taxes or &quot;advance booking&quot; confusion.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary p-8 rounded-3xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
                    <MapPin className="h-32 w-32" />
                </div>
                <div className="relative z-10">
                    <span className="text-primary font-black text-4xl mb-4 block italic">&quot;Perfect for Groups&quot;</span>
                    <p className="text-slate-300 italic mb-8">&quot;Our 20-person pilgrim group saved ₹5,000 on our Varanasi to Ayodhya trip compared to booking two separate taxis. The 24 seater was spacious and the driver was excellent.&quot;</p>
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-slate-700" />
                        <div>
                            <p className="font-bold">Rahul Sharma</p>
                            <p className="text-xs text-slate-500">Group Pilgrimage to Ayodhya</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export const FAQSection = ({ faqs }: { faqs: { question: string; answer: string }[] }) => (
    <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-black text-secondary text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <details key={i} className="group border border-border rounded-xl px-6 py-4 [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-secondary">
                            <h3 className="text-lg font-bold">{faq.question}</h3>
                            <ChevronDown className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180" />
                        </summary>
                        <p className="mt-4 leading-relaxed text-muted-foreground">{faq.answer}</p>
                    </details>
                ))}
            </div>
        </div>
    </section>
)

export const TrustBadges = () => (
    <section className="bg-white py-12 border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
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
)

export const ExperienceSection = () => (
    <section className="py-24 bg-slate-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                            src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1000"
                            alt="Varanasi Tempo Traveller Service"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-border">
                        <p className="text-4xl font-black text-primary">10+</p>
                        <p className="text-xs font-bold text-secondary uppercase tracking-wider">Years Experience</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <h2 className="text-4xl font-extrabold text-secondary tracking-tight">Varanasi&apos;s Homegrown <br /><span className="text-primary italic">Tempo Traveller Experts</span></h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Started as a small local transport service near Dashashwamedh Ghat, YatraTempoTraveller has grown into Varanasi&apos;s most trusted tempo traveller provider. We understand the unique needs of pilgrim groups visiting Kashi, Ayodhya, and Prayagraj.
                    </p>
                    <div className="space-y-4">
                        {[
                            "Verified Professional Drivers with Local Knowledge",
                            "Fixed & Transparent Pricing - No Hidden Charges",
                            "9 to 26 Seater Tempo Travellers Available",
                            "Modern, Clean & Sanitized Fleet"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                    <Check className="h-3.5 w-3.5 text-primary" />
                                </div>
                                <span className="font-semibold text-secondary">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export const TestimonialsSection = () => (
    <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl font-extrabold text-secondary tracking-tight">Real Traveler Stories</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">Verified experiences from groups who booked their tempo traveller with us.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        name: "Rajesh Kumar", role: "Pilgrim Group (Delhi)",
                        text: "Booked a 15 seater tempo traveller for our Varanasi to Ayodhya pilgrimage. The driver was very polite. Fixed price was a huge relief.",
                        stars: 5
                    },
                    {
                        name: "Anjali Sharma", role: "Wedding Party (Mumbai)",
                        text: "We booked a 26 seater for our baraat. The tempo traveller managed the entire route perfectly. Highly recommend for wedding groups.",
                        stars: 5
                    },
                    {
                        name: "Vikram Singh", role: "Corporate Group Trip",
                        text: "YatraTempoTraveller is our go-to for corporate outings. We took a 12 seater to Prayagraj. On time, transparent billing.",
                        stars: 5
                    }
                ].map((t, i) => (
                    <div key={i} className="p-8 border border-border rounded-3xl hover:border-primary/30 transition-all bg-slate-50/50">
                        <div className="flex gap-1 mb-4">
                            {[...Array(t.stars)].map((_, j) => <ThumbsUp key={j} className="h-4 w-4 text-primary" />)}
                        </div>
                        <p className="text-slate-600 italic mb-6">&quot;{t.text}&quot;</p>
                        <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                            <div className="h-10 w-10 rounded-full bg-slate-200" />
                            <div>
                                <p className="font-bold text-secondary text-sm">{t.name}</p>
                                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)

export const SocialProof = () => (
    <section className="bg-secondary py-20 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
                <h2 className="text-4xl font-extrabold tracking-tight">Kashi&apos;s Most Trusted Group Transport</h2>
                <p className="text-slate-400 text-lg">We help over 300+ groups every month travel safely from Varanasi to different parts of UP and Bihar.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10">
                    <div>
                        <p className="text-3xl font-black text-primary">800+</p>
                        <p className="text-sm text-slate-400">Monthly Group Trips</p>
                    </div>
                    <div>
                        <p className="text-3xl font-black text-primary">₹2M+</p>
                        <p className="text-sm text-slate-400">Group Savings</p>
                    </div>
                    <div>
                        <p className="text-3xl font-black text-primary">4.9/5</p>
                        <p className="text-sm text-slate-400">Google Rating</p>
                    </div>
                    <div>
                        <p className="text-3xl font-black text-primary">Verified</p>
                        <p className="text-sm text-slate-400">Local Drivers</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
