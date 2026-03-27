export interface FAQ {
  question: string;
  answer: string;
}

export const GLOBAL_FAQS: FAQ[] = [
  {
    question: "What is the per km cost of a tempo traveller in Varanasi?",
    answer:
      "The per km cost starts at ₹18/km for a 9-seater tempo traveller. For larger vehicles like the 12, 17, or 26-seater models, the rates vary between ₹22/km to ₹35/km. Our pricing is fixed and transparent with no hidden commissions.",
  },
  {
    question: "How do I find the cheapest tempo traveller for a group trip?",
    answer:
      "To get the cheapest tempo traveller, always look for local service providers like YatraTempoTraveller. Renting directly from a local agency in Varanasi saves you up to 25% compared to booking through national aggregators who charge heavy commissions.",
  },
  {
    question: "Is there a budget tempo traveller option for pilgrims?",
    answer:
      "Yes, our 9-seater and 12-seater models are perfect budget tempo traveller options for family pilgrimages to Ayodhya or Prayagraj. They offer comfort and AC at a highly competitive fixed price.",
  },
  {
    question: "What are the common seating capacities available?",
    answer:
      "We offer a wide range of seating capacities including 9+1, 12+1, 15+1, 17+1, 20+1, and 26+1 seater tempo travellers to accommodate groups of all sizes.",
  },
  {
    question: "Are toll taxes and parking included in the fare?",
    answer:
      "No, to keep our base per km cost low and transparent, we do not include tolls, state entry taxes, or parking fees in the initial quote. These are charged at actuals during the journey.",
  },
  {
    question:
      "Are the drivers experienced with long-distance outstation routes?",
    answer:
      "Absolutely. All our drivers are local experts with over 8+ years of experience on North Indian highways, specifically routes connecting Varanasi to Ayodhya, Lucknow, Bodhgaya, and Nepal.",
  },
  {
    question: "Is air conditioning available in all vehicles?",
    answer:
      "Yes, every tempo traveller in our fleet is fully air-conditioned (both front and rear units) to ensures a comfortable journey even during peak summer months.",
  },
  {
    question: "How much luggage space is available in a tempo traveller?",
    answer:
      "All our vehicles come with dedicated luggage carriers on the roof and ample space in the rear cabin, making them ideal for carrying heavy bags during long group tours.",
  },
  {
    question: "Can I book a tempo traveller for a one-way trip?",
    answer:
      "While we specialize in round-trip packages to offer the best value, we do provide one-way drops on specific routes. Please WhatsApp our support team for a custom one-way quote.",
  },
  {
    question: "What is the process for booking a vehicle?",
    answer:
      "Booking is simple: Use our online fare calculator to check the price, then click the 'WhatsApp Support' button to confirm your dates and pay a small advance to secure your vehicle.",
  },
];

export function generateRouteFaqs(
  origin: string,
  destination: string,
  distance: number,
  duration: string,
): FAQ[] {
  return [
    {
      question: `What is the cheapest tempo traveller fare from ${origin} to ${destination}?`,
      answer: `The cheapest fare for a round trip from ${origin} to ${destination} starts at a fixed price calculated at ₹18/km for a 9-seater vehicle. For this ${distance}km journey, we offer the most competitive rates in the market.`,
    },
    {
      question: `How much is the per km cost for ${origin} to ${destination} group travel?`,
      answer: `The per km cost for the ${origin}-${destination} route varies from ₹18 to ₹35 depending on the vehicle size (9 to 26 seats). This rate includes fuel and driver allowance but excludes tolls.`,
    },
    {
      question: `Is a budget tempo traveller available for the ${origin} to ${destination} route?`,
      answer: `Yes, we have several budget tempo traveller options for this route. Our 12-seater model is highly popular among groups looking for a balance between comfort and cost-effectiveness for the ${duration} journey.`,
    },
    {
      question: `How long does it take to reach ${destination} from ${origin} by tempo traveller?`,
      answer: `The journey typically takes about ${duration} to cover the ${distance} km distance, depending on traffic and road conditions on the highway.`,
    },
    {
      question: `What is the best time to start the journey from ${origin} to ${destination}?`,
      answer:
        "We recommend starting early in the morning, around 5:00 AM or 6:00 AM, to beat the city traffic and reach your destination comfortably by midday.",
    },
    {
      question: `Can we stop for breaks on the way to ${destination}?`,
      answer:
        "Yes, our drivers are flexible and will stop at clean, family-friendly restaurants or dhabas for breakfast and tea breaks as per your group's preference.",
    },
    {
      question: `Are there any hidden charges for the ${origin} to ${destination} trip?`,
      answer:
        "No, YatraTempoTraveller follows a strict 'No Hidden Charges' policy. Your quote will clearly state the per km cost and what is included.",
    },
    {
      question: `How many seats should I book for a group of 10 people to ${destination}?`,
      answer:
        "For a group of 10 people, we recommend booking a 12-seater tempo traveller. This ensures everyone has a comfortable seat and there is enough room for luggage during the trip.",
    },
    {
      question: "Do the vehicles have push-back seats for long journeys?",
      answer: `Yes, all our tempo travellers for the ${origin} to ${destination} route are equipped with comfortable push-back reclining seats and ample legroom.`,
    },
    {
      question: `How do I book a tempo traveller specifically for this ${destination} route?`,
      answer: `You can book instantly by using our fare calculator on this page and connecting with us via WhatsApp to confirm the vehicle availability for your dates.`,
    },
  ];
}
