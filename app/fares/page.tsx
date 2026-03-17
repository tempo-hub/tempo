import { Metadata } from "next"
import FaresClient from "./fares-client"

export const metadata: Metadata = {
    title: "Search Tempo Traveller Fares | Complete Route Directory",
    description: "Search and browse all tempo traveller routes. Transparent fixed pricing for Varanasi, Lucknow, Ayodhya, and more. Find your group fare instantly.",
    keywords: ["tempo traveller fares", "taxi search", "Varanasi to Ayodhya fare", "Lucknow tempo traveller rates", "taxi directory India", "yatratempotraveller"]
}

export default function FaresPage() {
    return (
        <>
            <FaresClient />
            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQPage(GLOBAL_FAQS)) }}
            />
        </>
    )
}

import { FAQPage } from "../components/schemas"
import { GLOBAL_FAQS } from "@/lib/faq-data"
