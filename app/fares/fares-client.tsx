"use client"

import { useState } from "react"
import { ROUTES, calculateFare } from "@/lib/data"
import { Search, MapPin, ArrowRight, ChevronRight, Globe, ShieldCheck, TrendingDown, Rocket } from "lucide-react"

export default function FaresClient() {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredRoutes = ROUTES.filter(route =>
        route.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        route.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        route.slug.toLowerCase().includes(searchQuery.toLowerCase())
    )

    // Group routes by origin city for the "All Routes" section
    const routesByCity = ROUTES.reduce((acc, route) => {
        if (!acc[route.origin]) {
            acc[route.origin] = []
        }
        acc[route.origin].push(route)
        return acc
    }, {} as Record<string, typeof ROUTES>)

    const cities = Object.keys(routesByCity).sort()

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero & Search Section */}
            <section className="pt-24 pb-16 bg-secondary text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-10">
                    <Globe className="w-96 h-96" />
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest mb-6">
                        Route Directory & Search
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-10 tracking-tight">
                        Search <span className="text-primary italic">Tempo Traveller</span> Fares
                    </h1>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative mb-12 group">
                        <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                            <Search className="h-6 w-6 text-slate-400 group-focus-within:text-primary transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for a city or route (e.g. Ayodhya, Lucknow...)"
                            className="w-full pl-16 pr-6 py-6 bg-white border-2 border-transparent rounded-3xl shadow-2xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all outline-none text-secondary font-bold text-lg placeholder:text-slate-400 placeholder:font-medium"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute inset-y-0 right-0 pr-6 text-slate-400 hover:text-primary font-bold text-sm"
                            >
                                Clear
                            </button>
                        )}
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/20 rounded-lg"><ShieldCheck className="w-5 h-5 text-primary" /></div>
                            <span className="text-sm font-bold">75+ Verified Routes</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-primary/20 rounded-lg"><TrendingDown className="w-5 h-5 text-primary" /></div>
                            <span className="text-sm font-bold">Fixed & Transparent</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results or Main Directory */}
            <main className="max-w-7xl mx-auto px-4 py-20">
                {searchQuery ? (
                    <div className="space-y-8">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-black text-secondary">
                                Found {filteredRoutes.length} Results for &quot;{searchQuery}&quot;
                            </h2>
                        </div>
                        {filteredRoutes.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredRoutes.map((route) => (
                                    <RouteCard key={route.id} route={route} />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white p-12 rounded-3xl text-center border-2 border-dashed border-slate-200">
                                <p className="text-slate-500 font-bold italic">No specific route found. Try searching for city names like &quot;Varanasi&quot; or &quot;Lucknow&quot;.</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="space-y-24">
                        {cities.map((city) => (
                            <div key={city} className="space-y-10">
                                <div className="flex items-center gap-4">
                                    <h2 className="text-3xl font-black text-secondary flex items-center gap-3 italic">
                                        <MapPin className="text-primary w-8 h-8" />
                                        Tempo Traveller from {city}
                                    </h2>
                                    <div className="h-px bg-slate-200 flex-1 mt-2" />
                                    <span className="bg-primary text-secondary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                                        {routesByCity[city].length} Active Routes
                                    </span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {routesByCity[city].sort((a, b) => a.destination.localeCompare(b.destination)).map((route) => (
                                        <RouteCard key={route.id} route={route} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </div>
    )
}

function RouteCard({ route }: { route: any }) {
    return (
        <a
            href={`/fare/${route.slug}`}
            className="group bg-white p-6 rounded-3xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0 transition-transform">
                <ArrowRight className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-2">
                <div className="flex items-center gap-2 mb-1">
                    <span className="p-1 px-2 bg-slate-50 rounded text-[9px] font-black text-slate-400 uppercase tracking-widest">{route.origin}</span>
                    <ArrowRight className="w-2 h-2 text-slate-300" />
                </div>
                <h3 className="text-2xl font-black text-secondary tracking-tight group-hover:text-primary transition-colors">
                    {route.destination}
                </h3>
                <div className="flex items-center gap-4 pt-4 border-t border-slate-50 mt-4">
                    <div>
                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-tighter">Distance</p>
                        <p className="text-sm font-black text-secondary">{route.distance} KM</p>
                    </div>
                    <div className="h-8 w-px bg-slate-100" />
                    <div className="ml-auto text-right">
                        <p className="text-[10px] uppercase font-bold text-primary tracking-tighter italic">Fixed Fare Starts At</p>
                        <p className="text-2xl font-black text-secondary group-hover:scale-110 transition-transform origin-right">₹{calculateFare(route.distance, 18)}*</p>
                    </div>
                </div>
            </div>
        </a>
    )
}
