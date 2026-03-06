"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "./ui-base"
import { motion, AnimatePresence } from "framer-motion"

export const WhatsAppButton = ({ message = "Hi YatraTempoTraveller, I want to book a taxi." }) => {
    const whatsappUrl = `https://wa.me/919999999999?text=${encodeURIComponent(message)}`

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="bg-white px-4 py-2 rounded-full shadow-lg border border-border text-sm font-medium mb-1 hidden md:block"
                >
                    Need help? <span className="text-[#25D366]">Chat with us</span>
                </motion.div>
            </AnimatePresence>

            <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <Button variant="whatsapp" className="rounded-full h-16 w-16 p-0 shadow-2xl">
                    <MessageCircle className="h-8 w-8 fill-current" />
                </Button>
            </motion.a>
        </div>
    )
}
