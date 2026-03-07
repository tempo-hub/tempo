"use client"

import Link from "next/link"
import { Phone, Menu, X, Bus } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui-base"
import { motion, AnimatePresence } from "framer-motion"

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Fare Calculator", href: "/calculator" },
        { name: "All Fares", href: "/fares" },
    ]

    return (
        <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform">
                            <Bus className="text-white h-6 w-6" />
                        </div>
                        <div>
                            <span className="text-2xl font-bold tracking-tight text-secondary">
                                Yatra<span className="text-primary">Tempo</span>Traveller
                            </span>
                            <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold -mt-1">
                                Tempo Traveller Booking
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-secondary hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a href="tel:8448445504">
                            <Button size="sm" className="flex gap-2">
                                <Phone className="h-4 w-4" /> Call Now
                            </Button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-secondary hover:text-primary transition-colors"
                        >
                            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-border overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-lg font-medium text-secondary"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a href="tel:8448445504" className="block pt-2">
                                <Button className="w-full flex gap-3">
                                    <Phone className="h-5 w-5" /> Call 8448445504
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
