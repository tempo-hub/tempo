import { ALL_ROUTES } from "./allRoutes";

export function urbaniaRoutes(slug: string) {
  const cleanedSlug = slug.replace("-urbania-fare", "");

  const [startCity, destinationCity] = cleanedSlug.split("-to-");

  const matchedRoute = ALL_ROUTES.find((route) => {
    const generatedSlug = `${route.origin
      .toLowerCase()
      .replace(/\s+/g, "-")}-to-${route.destination
      .toLowerCase()
      .replace(/\s+/g, "-")}`;

    return generatedSlug === `${startCity}-to-${destinationCity}`;
  });

  if (!matchedRoute) {
    return null;
  }

  return {
    ...matchedRoute,

    vehicle: "Force Urbania",

    slug,

    fareType: "Urbania Fare",

    pricePerKm: 28,

    description: `Book premium Force Urbania from ${matchedRoute.origin} to ${matchedRoute.destination} for weddings, family trips, corporate tours, airport transfers, and outstation travel with luxury seating and professional driver service.`,

    highlights: [
      "Luxury Pushback Seats",
      "Fully Air Conditioned",
      "Professional Driver",
      "Spacious Luggage Space",
      "Premium Interior Comfort",
    ],

    faqs: [
      {
        question: `What is the ${matchedRoute.origin} to ${matchedRoute.destination} Urbania fare?`,
        answer: `Urbania fare from ${matchedRoute.origin} to ${matchedRoute.destination} starts from ₹28 per km depending on trip type, duration, and seating capacity.`,
      },

      {
        question: "Which Urbania seating options are available?",
        answer:
          "We provide 12 Seater and 17 Seater Force Urbania rental services for family trips, weddings, corporate travel, and outstation tours.",
      },

      {
        question: "Is driver charge included in Urbania fare?",
        answer:
          "Driver allowance may be charged separately depending on night stay, route, and trip duration.",
      },

      {
        question: `Can I book Urbania from ${matchedRoute.origin} to ${matchedRoute.destination} for outstation travel?`,
        answer:
          "Yes, Force Urbania is available for outstation trips, weddings, pilgrimage tours, airport transfers, and luxury group travel.",
      },

      {
        question: "Does Urbania have AC and luxury seats?",
        answer:
          "Yes, all Force Urbania vehicles come with fully air-conditioned luxury pushback seating and premium interiors.",
      },

      {
        question: "How can I book Force Urbania online?",
        answer:
          "You can instantly book Urbania through phone call or WhatsApp support available 24/7.",
      },

      {
        question: "Is Urbania suitable for family trips?",
        answer:
          "Yes, Force Urbania is ideal for family vacations, weddings, corporate tours, and luxury travel experiences.",
      },

      {
        question: "Do you provide Urbania with driver?",
        answer:
          "Yes, all Urbania rentals include experienced professional chauffeurs for safe and comfortable journeys.",
      },

      {
        question: "What amenities are available in Urbania?",
        answer:
          "Urbania includes luxury seats, AC, charging ports, music system, spacious luggage area, and premium interiors.",
      },

      {
        question: "Is Urbania available for airport pickup and drop?",
        answer:
          "Yes, we provide Urbania rental services for airport transfers with comfortable seating and luggage space.",
      },
    ],
  };
}
