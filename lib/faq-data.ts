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

export function generateRouteFaqs(
  origin: string,
  destination: string,
  distance: number,
  duration: string,
): FAQ[] {
  return [
    {
      question: `What is the cheapest tempo traveller fare from ${origin} to ${destination}?`,
      answer: `The cheapest fare from ${origin} to ${destination} starts from ₹18/km for a 9-seater vehicle. For ${distance} km travel, we provide one of the best market prices.`,
    },
    {
      question: `What is the budget tempo traveller fare from ${origin} to ${destination}?`,
      answer: `Budget travellers for the ${origin} to ${destination} route are available in 9-seater and 12-seater options with affordable fixed pricing and comfortable AC travel.`,
    },
    {
      question: `What is the luxury tempo traveller fare from ${origin} to ${destination}?`,
      answer: `Luxury Maharaja and premium tempo travellers for ${origin} to ${destination} come with push-back seats, charging points, music system, and extra comfort. Fare depends on seating capacity.`,
    },
    {
      question: `What is the 9 seater tempo traveller fare from ${origin} to ${destination}?`,
      answer: `The 9-seater fare from ${origin} to ${destination} starts from ₹18/km and is ideal for small family trips or pilgrim groups.`,
    },
    {
      question: `What is the 12 seater tempo traveller fare from ${origin} to ${destination}?`,
      answer: `The 12-seater fare for ${origin} to ${destination} starts from ₹22/km and is one of the most popular choices for medium-size groups.`,
    },
    {
      question: `What is the 17 seater tempo traveller fare from ${origin} to ${destination}?`,
      answer: `The 17-seater traveller fare for ${origin} to ${destination} starts from ₹26/km and is suitable for wedding groups and tours.`,
    },
    {
      question: `What is the 26 seater tempo traveller fare from ${origin} to ${destination}?`,
      answer: `The 26-seater fare for ${origin} to ${destination} starts from ₹35/km and is best for large groups, school tours, and events.`,
    },
    {
      question: `How much is the per km fare from ${origin} to ${destination}?`,
      answer: `The per km fare from ${origin} to ${destination} ranges between ₹18/km to ₹35/km depending on the vehicle type and seating capacity.`,
    },
    {
      question: `How long does it take to reach ${destination} from ${origin}?`,
      answer: `The journey from ${origin} to ${destination} usually takes around ${duration} for ${distance} km depending on traffic and road conditions.`,
    },
    {
      question: `How do I book cheapest fare for ${origin} to ${destination}?`,
      answer: `You can instantly book the cheapest fare for ${origin} to ${destination} through our website fare calculator or WhatsApp support.`,
    },
  ];
}
