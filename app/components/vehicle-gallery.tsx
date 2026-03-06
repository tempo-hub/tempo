"use client"

import { VEHICLES } from "@/lib/data"
import { Button, Card } from "./ui-base"
import { Users, Briefcase, Snowflake, ShieldCheck, CheckCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export const VehicleGallery = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VEHICLES.map((v, i) => (
                <motion.div
                    key={v.type}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                >
                    <Card className="h-full group hover:border-primary/50 transition-colors">
                        <div className="aspect-video relative overflow-hidden bg-slate-100">
                            <Image
                                src={v.image}
                                alt={v.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase px-2 py-1 rounded">
                                {v.type}
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-secondary text-[10px] font-black uppercase px-2 py-1 rounded border border-border flex items-center gap-1">
                                <ShieldCheck className="h-3 w-3 text-primary" /> Verified Tempo
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <h4 className="text-xl font-bold text-secondary">{v.name}</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <Users className="h-4 w-4 text-primary" /> {v.seating} Seats
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <Snowflake className="h-4 w-4 text-primary" /> Full AC
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <Briefcase className="h-4 w-4 text-primary" /> Luggage Space
                                </div>
                                <div className="flex items-center gap-2 text-sm text-slate-600">
                                    <CheckCircle className="h-4 w-4 text-primary" /> 24/7 Verified
                                </div>
                            </div>
                            <Button className="w-full group/btn bg-green-600 hover:bg-green-700 text-white rounded-xl h-12">
                                <span className="flex items-center gap-2">
                                    Book {v.type} <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                        </div>
                    </Card>
                </motion.div>
            ))}
        </div>
    )
}
