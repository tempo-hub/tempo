import Link from "next/link"
import { MapPin, Phone, Mail, Bus, ShieldCheck, Clock, CreditCard } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-primary p-2 rounded-lg">
                                <Bus className="text-white h-6 w-6" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight">
                                Yatra<span className="text-primary">Tempo</span>Traveller
                            </span>
                        </div>
                        <p className="text-slate-400 leading-relaxed">
                            Yatra Tempo Traveller is the most trusted tempo traveller booking service. Providing transparent, fixed-price tempo travellers for group pilgrimages, weddings & tours.
                        </p>
                        <div className="flex gap-4">
                            {[ShieldCheck, Clock, CreditCard].map((Icon, i) => (
                                <div key={i} className="bg-white/10 p-2 rounded-lg">
                                    <Icon className="h-5 w-5 text-primary" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-primary">Popular Routes</h4>
                        <ul className="space-y-4">
                            {["Varanasi to Ayodhya", "Varanasi to Prayagraj", "Varanasi to Lucknow", "Varanasi to Bodh Gaya"].map((route) => (
                                <li key={route}>
                                    <Link href={`/fare/${route.toLowerCase().replace(/ /g, "-")}-tempo-traveller-fare`} className="text-slate-400 hover:text-white transition-colors">
                                        {route} Tempo Traveller
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/calculator" className="text-primary font-bold hover:text-white transition-colors">
                                    Fare Calculator
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-primary">Trust YatraTempoTraveller</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li>Fixed Pricing Policy</li>
                            <li>Verified Drivers</li>
                            <li>No Advance Required</li>
                            <li>24/7 Helpline</li>
                            <li>E-E-A-T Certified</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-primary">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-slate-400">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>Sigra, Varanasi, Uttar Pradesh 221010</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <a href="tel:+919999999999" className="hover:text-white">+91 99999 99999</a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <a href="mailto:info@yatratempotraveller.com" className="hover:text-white">info@yatratempotraveller.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© 2026 YatraTempoTraveller.com. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
