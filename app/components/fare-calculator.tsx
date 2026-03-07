"use client"

import { useState, useMemo } from "react"
import { VEHICLES, calculateFare, TaxiRoute } from "@/lib/data"
import { Button, Card } from "./ui-base"
import { Bus, ShoppingCart, CheckCircle2, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

export const FareCalculator = ({ route }: { route: TaxiRoute }) => {
    const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[0])
    const fare = useMemo(() => {
        return calculateFare(route.distance, selectedVehicle.perKmRate)
    }, [route.distance, selectedVehicle])

    const whatsappMessage = `Hi YatraTempoTraveller, I want to book a tempo traveller from ${route.origin} to ${route.destination}. 
Vehicle: ${selectedVehicle.name} (${selectedVehicle.type})
Trip Type: Round Trip
Estimated Fare: ₹${fare}`

    const whatsappUrl = `https://api.whatsapp.com/send?phone=+916280820037&text=${encodeURIComponent(whatsappMessage)}`

    return (
        <Card className="p-6 md:p-8 lg:p-10 shadow-xl border-primary/20 bg-gradient-to-br from-white to-slate-50">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1 space-y-8">
                    <div className="text-center mb-8 space-y-4">
                        <h2 className="text-3xl font-black text-secondary">Calculate Your Fixed Fare</h2>
                        <div className="flex justify-center">
                            <div className="inline-flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-100 shadow-sm">
                                <ShieldCheck className="h-4 w-4 text-green-600" />
                                <span className="text-[10px] font-black uppercase text-green-700 tracking-wider font-sans">100% Fixed Price Guarantee</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-black text-secondary mb-2 flex items-center gap-2">
                            <ShoppingCart className="text-primary h-6 w-6" /> Tempo Traveller Fare Calculator
                        </h3>
                        <p className="text-muted-foreground text-sm">Select your tempo traveller size and trip type for an instant fixed quote.</p>
                    </div>

                    <div className="space-y-6">
                        {/* Vehicle Selection */}
                        <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                                <Bus className="h-3.5 w-3.5" /> Select Tempo Traveller
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {VEHICLES.map((vehicle) => (
                                    <button
                                        key={vehicle.type}
                                        onClick={() => setSelectedVehicle(vehicle)}
                                        className={`p-4 rounded-xl border-2 text-left transition-all ${selectedVehicle.type === vehicle.type ? 'border-primary bg-primary/5' : 'border-border bg-white hover:border-slate-300'}`}
                                    >
                                        <p className={`text-sm font-bold ${selectedVehicle.type === vehicle.type ? 'text-primary' : 'text-secondary'}`}>{vehicle.type}</p>
                                        <p className="text-[10px] text-muted-foreground">{vehicle.seating} Seats</p>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                            <ul className="space-y-2">
                                {selectedVehicle.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Pricing Display */}
                <div className="lg:w-80 bg-secondary rounded-2xl p-8 text-white flex flex-col justify-between shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Bus className="h-24 w-24" />
                    </div>

                    <div className="relative z-10">
                        <p className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-widest">Fixed Fare</p>
                        <motion.h4
                            key={fare}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-5xl font-black text-primary mb-2"
                        >
                            ₹{fare}
                        </motion.h4>
                        <div className="h-1 w-12 bg-primary/30 rounded-full mb-6" />

                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between items-center text-slate-300">
                                <span>Base Rate</span>
                                <span className="text-white font-mono">₹{selectedVehicle.perKmRate}/km</span>
                            </div>
                            <div className="flex justify-between items-center text-slate-300">
                                <span>Distance</span>
                                <span className="text-white font-mono">{route.distance} km</span>
                            </div>
                            {route.tollEstimate && (
                                <div className="flex justify-between items-center text-slate-300 border-t border-white/5 pt-2">
                                    <span>Est. Tolls</span>
                                    <span className="text-amber-400 font-bold">~₹{route.tollEstimate}</span>
                                </div>
                            )}
                            <div className="flex justify-between items-center text-slate-300">
                                <span>State Tax</span>
                                <span className="text-amber-400 font-bold">Extra</span>
                            </div>
                            <div className="flex justify-between items-center text-slate-300 border-t border-white/10 pt-4">
                                <span>Services Fee</span>
                                <span className="text-green-400 font-bold">₹0</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 relative z-10">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <Button variant="whatsapp" className="w-full h-14 rounded-xl text-lg group">
                                Book on WhatsApp
                            </Button>
                        </a>
                        <p className="text-[10px] text-center mt-3 text-slate-400">
                            *Tolls & Parking extra at actuals
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    )
}
