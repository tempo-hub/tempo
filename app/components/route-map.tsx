"use client"

import { useEffect, useState } from 'react'
import { MapPin } from 'lucide-react'

export const RouteMap = ({ origin, destination }: { origin: string, destination: string }) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return <div className="h-[400px] w-full bg-slate-100 animate-pulse rounded-2xl" />

    return (
        <div className="relative h-[450px] w-full rounded-2xl overflow-hidden border border-border shadow-md bg-slate-50">
            <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY_PLACEHOLDER&origin=${encodeURIComponent(origin + ", Uttar Pradesh")}&destination=${encodeURIComponent(destination + ", Uttar Pradesh")}&mode=driving`}
                title={`Route from ${origin} to ${destination}`}
                className="grayscale-[20%] contrast-[1.1]"
            ></iframe>
            {/* Overlay if API key is missing/placeholder */}
            <div className="absolute top-4 left-4 right-4 md:right-auto md:w-64 p-4 bg-white/95 backdrop-blur-sm rounded-xl border border-border shadow-xl z-10">
                <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <p className="font-bold text-secondary text-sm">{origin} to {destination}</p>
                </div>
                <div className="space-y-1">
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Fastest Route</p>
                    <p className="text-xs text-slate-600">Via NH & Expressways</p>
                </div>
            </div>
        </div>
    )
}
