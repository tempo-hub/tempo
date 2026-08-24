"use client";

import { Button } from "./ui-base";
import { Phone } from "lucide-react";

export const WhatsAppButton = () => {
  const openWhatsApp = () => {
    const message =
      "Hi, I want to book a Tempo Traveller. Please share availability and fare details.";
    const whatsappUrl = `https://wa.me/916280820037?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          variant="whatsapp"
          aria-label="Book on WhatsApp"
          title="Book on WhatsApp"
          className="rounded-full h-16 w-16 p-0 shadow-2xl cursor-pointer"
          onClick={openWhatsApp}
        >
          <svg viewBox="0 0 32 32" width="32" height="32" fill="white">
            <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0016.004 32C24.826 32 32 24.826 32 16.004S24.826 0 16.004 0zm9.35 22.616c-.392 1.1-1.938 2.016-3.16 2.282-.838.18-1.934.322-5.624-1.208-4.718-1.958-7.756-6.744-7.994-7.058-.228-.314-1.912-2.546-1.912-4.858 0-2.312 1.21-3.45 1.64-3.92.392-.428 1.028-.626 1.636-.626.196 0 .374.01.534.018.47.02.706.048 1.016.786.388.926 1.332 3.244 1.45 3.48.118.238.236.556.078.87-.148.322-.278.466-.516.738-.238.27-.464.478-.702.77-.22.254-.466.528-.198.998.268.466 1.194 1.966 2.562 3.186 1.762 1.572 3.248 2.058 3.71 2.288.47.236.742.198 1.016-.118.278-.318 1.186-1.382 1.502-1.856.314-.47.632-.392 1.066-.236.436.158 2.756 1.298 3.226 1.534.47.236.784.354.9.548.118.196.118 1.128-.274 2.228z" />
          </svg>
        </Button>
      </div>
      
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          variant="primary"
          aria-label="Call Yatra Tempo Traveller"
          title="Call Yatra Tempo Traveller"
          className="rounded-full h-16 w-16 p-0 shadow-2xl cursor-pointer"
          onClick={() => {
            window.location.href = "tel:+916280820037";
          }}
        >
          <Phone size={30} aria-hidden="true" />
        </Button>
      </div>
    </>
  );
};
