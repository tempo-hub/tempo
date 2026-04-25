export interface FAQ {
  question: string;
  answer: string;
}

export const GLOBAL_FAQS: FAQ[] = [
  {
    question: "What is the starting fare of a tempo traveller in Varanasi?",
    answer:
      "Our tempo traveller rental fare in Varanasi starts from an affordable ₹18/km for a 9-seater vehicle. We offer fixed transparent pricing with no hidden charges, making group travel budget-friendly and convenient.",
  },
  {
    question: "Why should I book a tempo traveller instead of multiple cars?",
    answer:
      "Booking a tempo traveller is more economical, comfortable, and practical than hiring multiple cars. Your entire group travels together, luggage stays in one vehicle, and the journey becomes more enjoyable and hassle-free.",
  },
  {
    question: "Which tempo traveller is best for family trips and pilgrimages?",
    answer:
      "For family trips, temple tours, and pilgrimages, our 9-seater and 12-seater tempo travellers are the most popular choices. They offer comfortable seating, AC travel, and enough luggage space for long journeys.",
  },
  {
    question:
      "Do you provide luxury tempo travellers for weddings and VIP travel?",
    answer:
      "Yes, we provide premium Maharaja and luxury tempo travellers with push-back seats, charging points, music system, spacious interiors, and elegant comfort—ideal for weddings, corporate groups, and VIP travel.",
  },
  {
    question: "Are your tempo traveller prices fixed or negotiable?",
    answer:
      "We offer fair and competitive market rates with transparent billing. For multi-day tours, wedding bookings, and large group travel, special discounted package pricing is available.",
  },
  {
    question: "Is driver charge included in the booking fare?",
    answer:
      "Yes, standard driver allowance is included in most route packages. Any extra night stay or special itinerary charges, if applicable, are discussed clearly before booking confirmation.",
  },
  {
    question: "Are your drivers experienced and verified?",
    answer:
      "Absolutely. Our drivers are experienced, professional, route-trained, and verified. They are familiar with major tourist, pilgrimage, and outstation routes for a safe and smooth journey.",
  },
  {
    question: "Can I book a tempo traveller for one day or same-day return?",
    answer:
      "Yes, we provide one-day rental, same-day return, local sightseeing, and outstation round-trip packages according to your travel plan and group size.",
  },
  {
    question: "Do all vehicles have AC and push-back seats?",
    answer:
      "Yes, most of our tempo travellers come with powerful air conditioning, comfortable push-back seats, charging points, and clean interiors for relaxed long-distance travel.",
  },
  {
    question: "How early should I book a tempo traveller to get the best fare?",
    answer:
      "We recommend booking 3 to 7 days in advance to get the best vehicle choice and lowest fare. During wedding season, holidays, and weekends, early booking is strongly advised.",
  },
  {
    question: "Can I get doorstep pickup and drop service?",
    answer:
      "Yes, we provide convenient doorstep pickup and drop service from home, hotel, railway station, airport, or any preferred location for maximum comfort.",
  },
  {
    question: "How do I confirm my booking quickly?",
    answer:
      "Booking is simple. Share your travel date, route, and group size on WhatsApp or call us directly. Once availability is confirmed, pay a small advance to secure your vehicle instantly.",
  },
];

export function generateRouteFaqs(origin: string, destination: string): FAQ[] {
  return [
    {
      question: `What is cheapest tempo traveller fare in ${origin} to ${destination}?`,
      answer: `We offer some of the cheapest tempo traveller fares from ${origin} to ${destination} with clean vehicles, experienced drivers, and transparent pricing.`,
    },
    {
      question: `How to get lowest tempo traveller cost in ${origin} to ${destination}?`,
      answer: `To get the lowest tempo traveller cost from ${origin} to ${destination}, book early, travel on weekdays, and choose the right seating capacity for your group.`,
    },
    {
      question: `Which is budget tempo traveller in ${origin} to ${destination}?`,
      answer: `Budget tempo travellers from ${origin} to ${destination} are usually standard AC models with comfortable seating and economical pricing.`,
    },
    {
      question: `Do you provide cheap tempo traveller with driver in ${origin} to ${destination}?`,
      answer: `Yes, we provide affordable tempo traveller booking from ${origin} to ${destination} with professional driver service included.`,
    },
    {
      question: `What is minimum cheapest package for ${origin} to ${destination}?`,
      answer: `Minimum cheapest package from ${origin} to ${destination} depends on trip distance, days, and vehicle type. Contact us for current offers.`,
    },
    {
      question: `Can I book cheap tempo traveller online in ${origin} to ${destination}?`,
      answer: `Yes, you can book cheap tempo traveller online from ${origin} to ${destination} through our website or WhatsApp booking support.`,
    },
    {
      question: `Is cheap tempo traveller safe in ${origin} to ${destination}?`,
      answer: `Yes, our budget tempo traveller services from ${origin} to ${destination} are safe, sanitized, and driven by experienced chauffeurs.`,
    },
    {
      question: `Do cheapest fares include driver in ${origin} to ${destination}?`,
      answer: `Yes, most cheapest tempo traveller fare packages from ${origin} to ${destination} include driver service. Additional charges may apply for tolls or extra days.`,
    },
  ];
}
