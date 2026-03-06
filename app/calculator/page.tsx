import { Metadata } from "next"
import CalculatorClient from "./calculator-client"

export const metadata: Metadata = {
    title: "Tempo Traveller Fare Calculator | Instant Fixed Price Check",
    description: "Calculate the exact fixed fare for your group trip from Varanasi. Select your vehicle size and distance for a transparent, no-advance quote.",
    keywords: ["fare calculator", "taxi fare estimator", "Varanasi tempo traveller rate", "group travel price", "fixed cab fares"]
}

export default function CalculatorPage() {
    return <CalculatorClient />
}
