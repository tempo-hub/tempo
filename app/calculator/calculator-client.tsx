"use client"

import { useState } from "react"
import { calculateFare } from "@/lib/data"
import { Calculator, MapPin, Bus, ArrowRight, ShieldCheck, CheckCircle2, PhoneCall } from "lucide-react"
import { Button, Card } from "../components/ui-base"

export default function CalculatorClient() {
    const [distance, setDistance] = useState<number>(100)
    const [vehicleSize, setVehicleSize] = useState<number>(18) // Default rate for 17-20 seater

    const fare = calculateFare(distance, vehicleSize)

    const vehicleTypes = [
        { name: "9-12 Seater", rate: 16, desc: "Small groups & families" },
        { name: "13-20 Seater", rate: 18, desc: "Medium pilgrims groups" },
        { name: "21-26 Seater", rate: 24, desc: "Large groups & events" },
    ]

    return (
        <div className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-12 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                        <Calculator className="h-4 w-4 text-primary" />
                        <span className="text-xs font-black uppercase text-primary tracking-widest text-[10px]">Instant Fare Check</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-secondary tracking-tight">
                        Tempo Traveller <span className="text-primary italic">Fare Calculator</span>
                    </h1>
                    <p className="text-slate-500 max-w-lg mx-auto font-medium">
                        Calculate the exact fixed fare for your group trip in seconds. No hidden charges, no surprises.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-8 items-start">
                    <Card className="md:col-span-3 p-8 shadow-xl border-border bg-white space-y-8">
                        {/* Distance Slider */}
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-black text-secondary uppercase tracking-wider">Estimated Distance</label>
                                <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg font-black">{distance} KM</span>
                            </div>
                            <input
                                type="range"
                                min="50"
                                max="2000"
                                step="10"
                                value={distance}
                                onChange={(e) => setDistance(parseInt(e.target.value))}
                                className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary"
                            />
                            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase">
                                <span>50 KM</span>
                                <span>2000 KM</span>
                            </div>
                        </div>

                        {/* Vehicle Selection */}
                        <div className="space-y-4">
                            <label className="text-sm font-black text-secondary uppercase tracking-wider">Select Tempo Traveller Size</label>
                            <div className="grid grid-cols-1 gap-3">
                                {vehicleTypes.map((type) => (
                                    <button
                                        key={type.name}
                                        onClick={() => setVehicleSize(type.rate)}
                                        className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left ${vehicleSize === type.rate
                                            ? "border-primary bg-primary/5 shadow-inner"
                                            : "border-border bg-white hover:border-slate-300"
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-2 rounded-lg ${vehicleSize === type.rate ? "bg-primary text-white" : "bg-slate-50 text-slate-400"}`}>
                                                <Bus className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-secondary">{type.name}</p>
                                                <p className="text-xs text-slate-500">{type.desc}</p>
                                            </div>
                                        </div>
                                        {vehicleSize === type.rate && (
                                            <CheckCircle2 className="h-5 w-5 text-primary" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </Card>

                    <Card className="md:col-span-2 p-8 shadow-2xl bg-secondary text-white space-y-8 relative overflow-hidden border-none text-center">
                        <div className="absolute top-0 right-0 p-8 opacity-10 -mr-10 -mt-10">
                            <ShieldCheck className="h-40 w-40" />
                        </div>

                        <div className="relative z-10 space-y-6">
                            <p className="text-primary font-black uppercase text-xs tracking-[0.2em] italic">Your Estimated Fare</p>
                            <div className="space-y-1">
                                <span className="text-5xl font-black text-white">₹{fare.toLocaleString()}</span>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">* Fixed Round Trip Price</p>
                            </div>

                            <div className="space-y-4 py-6 border-y border-white/10 text-left">
                                {[
                                    "GST & Driver Allowance Included",
                                    "Fuel Charges Included",
                                    "Verified Professional Drivers"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4">
                                <a href={`https://wa.me/919999999999?text=Hi, I want to book a ${vehicleSize} seater tempo traveller for a ${distance} KM round trip.`}>
                                    <Button className="w-full h-14 text-lg font-bold gap-3 rounded-xl shadow-lg shadow-primary/20">
                                        <PhoneCall className="h-5 w-5" /> Book on WhatsApp
                                    </Button>
                                </a>
                                <p className="text-[10px] text-slate-500 italic">
                                    Toll and parking extra at actuals.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* FAQ or Info Section */}
                <div className="mt-20 max-w-2xl mx-auto space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="h-px bg-slate-200 flex-1" />
                        <h2 className="text-xl font-black text-secondary uppercase tracking-tight italic">Why Fixed Pricing?</h2>
                        <div className="h-px bg-slate-200 flex-1" />
                    </div>
                    <p className="text-center text-slate-600 leading-relaxed text-sm font-medium">
                        At YatraTempoTraveller, we believe in radical transparency. Most offline travel agents in Varanasi give vague estimates. Our calculator uses real-time distance metrics and vehicle utility rates to give you a quote that won&apos;t change after you book.
                    </p>
                </div>
            </div>
        </div>
    )
}
