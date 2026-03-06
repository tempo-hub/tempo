"use client"

import { VEHICLES, calculateFare, TaxiRoute } from "@/lib/data"
import { Button } from "./ui-base"
import { Info, ArrowUpRight } from "lucide-react"

export const FareTable = ({ route }: { route: TaxiRoute }) => {
    return (
        <div className="w-full overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-border">
                            <th className="px-6 py-5 text-xs font-black uppercase tracking-widest text-secondary">Tempo Traveller</th>
                            <th className="px-6 py-5 text-xs font-black uppercase tracking-widest text-secondary">Distance</th>
                            <th className="px-6 py-5 text-xs font-black uppercase tracking-widest text-secondary">Round-Trip Fare</th>
                            <th className="px-6 py-5 text-xs font-black uppercase tracking-widest text-secondary">Est. Tolls/Tax</th>
                            <th className="px-6 py-5 text-xs font-black uppercase tracking-widest text-secondary">Total (Approx)</th>
                            <th className="px-6 py-5 text-xs font-black uppercase tracking-widest text-secondary">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {VEHICLES.map((v) => {
                            const fare = calculateFare(route.distance, v.perKmRate)
                            const isCheapest = v.type === "9 Seater"
                            return (
                                <tr key={v.type} className={`hover:bg-slate-50/80 transition-colors ${isCheapest ? 'bg-primary/5' : ''}`}>
                                    <td className="px-6 py-6">
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-1.5">
                                                <span className="font-bold text-secondary">{v.type}</span>
                                                <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                                            </div>
                                            <span className="text-[11px] text-muted-foreground">{v.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 font-mono text-sm">{route.distance} km</td>
                                    <td className="px-6 py-6">
                                        <div className="flex flex-col">
                                            <span className="text-lg font-black text-secondary">₹{fare}</span>
                                            <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Fixed Round-Trip</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-amber-600">~₹{route.tollEstimate || '450'}</span>
                                            <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Paid at Tolls</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <div className="flex flex-col">
                                            <span className="text-lg font-black text-secondary">₹{fare + (route.tollEstimate || 450)}</span>
                                            {isCheapest && <span className="text-[10px] text-green-600 font-bold uppercase tracking-tighter">Lowest Price</span>}
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <a href={`https://wa.me/919999999999?text=Booking ${v.type} tempo traveller Round-Trip for ${route.origin} to ${route.destination}`} target="_blank" rel="noopener noreferrer">
                                            <Button size="sm" variant={isCheapest ? "primary" : "secondary"} className="h-9 px-4 rounded-lg group">
                                                Book <ArrowUpRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </Button>
                                        </a>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="bg-slate-50 p-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground font-medium">
                    <Info className="h-3.5 w-3.5 text-primary" />
                    <span>Last Updated: 25 February 2026</span>
                </div>
                <p className="text-[10px] text-muted-foreground italic">* Prices inclusive of GST. Toll, State Tax & Parking extra.</p>
            </div>
        </div>
    )
}
