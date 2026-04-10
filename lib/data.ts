import { generateRouteFaqs } from "./faq-data";
import { CITY_GUIDES } from "./cityGuides";

export interface VehicleFare {
  type: string;
  name: string;
  seating: string;
  capacity: number;
  perKmRate: number;
  features: string[];
  image: string;
}

export interface TaxiRoute {
  id: string;
  slug: string;
  origin: string;
  destination: string;
  distance: number;
  duration: string;
  description: string;
  routeImage?: string;
  highlights: string[];
  faqs: { question: string; answer: string }[];
  tollEstimate?: number;
  itinerary?: { time: string; activity: string }[];
  roadConditions?: string;
  bestTime?: string;
  seasonalNotes?: string;
  comparison?: { transport: string; pros: string; cons: string }[];

  // City Guide Section
  cityGuide?: {
    overview: string;
    detailedDescription: string;
    keyAttractions?: {
      title: string;
      items: string[];
      bgColor?: string;
      textColor?: string;
    };
    significance?: {
      title: string;
      items: string[];
      bgColor?: string;
      textColor?: string;
    };
    bestTimeToVisit?: string;
    idealDuration?: string;
    localFood?: string[];
    festivals?: string[];
    travelTips?: string[];
  };

  // Route Guide Section
  routeGuide?: {
    primaryRoute: string;
    distance: string;
    travelTime: string;
    roadCondition: string;
    stopovers?: {
      name: string;
      purpose: string;
      description?: string;
    }[];
    proTip?: string;
    highwayName?: string;
    nightTravelSafe?: boolean;
  };

  // Pricing Explanation (Route-specific)
  pricingDetails?: {
    perKmRateDescription?: string;
    nightHaltAllowance?: string;
    statePermitCost?: string;
    parkingCharges?: string;
    tollCharges?: string;
    includedFree?: string[];
    whyPerKmBetter?: string;
    nightStayNote?: string;
    includedNote?: string;
    volumeDiscount?: string;
    additionalCosts?: {
      name: string;
      amount: string;
    }[];
  };

  // Travel Use Cases (Route-specific recommendations)
  travelUseCases?: {
    pilgrimage?: {
      title: string;
      description: string;
      features: string[];
      recommendedSeater: string;
    };
    family?: {
      title: string;
      description: string;
      features: string[];
      recommendedSeater: string;
    };
    corporate?: {
      title: string;
      description: string;
      features: string[];
      recommendedSeater: string;
    };
    wedding?: {
      title: string;
      description: string;
      features: string[];
      recommendedSeater: string;
    };
  };

  comparisonTable?: {
    title: string;
    subtitle: string;
    rows: {
      feature: string;
      tempo: string;
      cab: string;
      train: string;
    }[];
    highlightNote: string;
  };

  relatedDestinations?: TaxiRoute[];

  media?: {
    description: string;
    mapEmbedUrl?: string;
  };
}

export const VEHICLES: VehicleFare[] = [
  {
    type: "9 Seater",
    name: "9 Seater Tempo Traveller",
    seating: "9+1",
    capacity: 9,
    perKmRate: 18,
    features: [
      "Full AC",
      "Push-back Seats",
      "Music System",
      "Professional Driver",
    ],
    image: "/vehicles/9-seater-chiku.jpg",
  },
  {
    type: "12 Seater",
    name: "12 Seater Tempo Traveller",
    seating: "12+1",
    capacity: 12,
    perKmRate: 22,
    features: [
      "Full AC",
      "Spacious Cabin",
      "Luggage Carrier",
      "Group Friendly",
    ],
    image: "/vehicles/12-seater-chiku.jpg",
  },
  {
    type: "15 Seater",
    name: "15 Seater Tempo Traveller",
    seating: "15+1",
    capacity: 15,

    perKmRate: 25,
    features: [
      "Full AC",
      "Reclining Seats",
      "Ample Legroom",
      "Best for Pilgrimage",
    ],
    image: "/vehicles/15-seater-chiku.jpg",
  },
  {
    type: "16 Seater",
    name: "16 Seater Tempo Traveller",
    seating: "16+1",
    capacity: 16,
    perKmRate: 26,
    features: [
      "Full AC",
      "Comfortable Seats",
      "Ideal for Medium Groups",
      "Professional Driver",
    ],
    image: "/vehicles/16-seater-chiku.jpg",
  },
  {
    type: "20 Seater",
    name: "20 Seater Tempo Traveller",
    seating: "20+1",
    capacity: 20,
    perKmRate: 30,
    features: [
      "Full AC",
      "Large Group Capacity",
      "Luggage Space",
      "Premium Interior",
    ],
    image: "/vehicles/20-seater-chiku.jpg",
  },
  {
    type: "26 Seater",
    name: "26 Seater Tempo Traveller",
    seating: "26+1",
    capacity: 26,
    perKmRate: 35,
    features: [
      "Full AC",
      "Maximum Capacity",
      "Long Distance Ready",
      "Premium Sound System",
    ],
    image: "/vehicles/26-seater-chiku.jpg",
  },
];

function addMediaToRoute(route: TaxiRoute) {
  route.media = {
    description: `Travel from ${route.origin} to ${route.destination} with our premium tempo traveller service. ${route.distance}km journey in ${route.duration}. Perfect for group travel.`,
    mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(route.origin + " to " + route.destination)}&output=embed`,
  };

  route.relatedDestinations = getSmartRelatedDestinations(route, ROUTES);

  route.comparisonTable = getComparisonTable(route.origin, route.destination);

  route.travelUseCases = getTravelUseCases(route.distance);

  route.pricingDetails = getPricingDetails(route.distance, true);

  route.routeGuide = getRouteGuide(
    route.origin,
    route.destination,
    route.distance,
  );

  // Add city guide dynamically
  route.cityGuide = getCityGuideForDestination(route.destination);

  return route;
}

export function getSmartRelatedDestinations(
  currentRoute: TaxiRoute,
  allRoutes: TaxiRoute[],
  maxResults: number = 4,
) {
  const currentDistance = currentRoute.distance;

  return allRoutes
    .filter((route) => {
      if (route.slug === currentRoute.slug) return false;

      const sameOrigin = route.origin === currentRoute.origin;

      const similarDistance = Math.abs(route.distance - currentDistance) <= 150;

      return sameOrigin || similarDistance;
    })
    .slice(0, maxResults);
}

function getComparisonTable(origin: string, destination: string) {
  return {
    title: "Tempo Traveller vs Cab vs Train",
    subtitle: `Compare travel options from ${origin} to ${destination}`,

    rows: [
      {
        feature: "Cost",
        tempo: "₹18/km (group sharing)",
        cab: "₹25/km",
        train: "₹200-500 per person",
      },
      {
        feature: "Comfort",
        tempo: "High (AC, spacious)",
        cab: "Medium",
        train: "Low (crowded)",
      },
      {
        feature: "Flexibility",
        tempo: "Door-to-door",
        cab: "Door-to-door",
        train: "Fixed schedule",
      },
    ],

    highlightNote:
      "For group travel, tempo traveller offers best value, comfort, and flexibility.",
  };
}

export function getTravelUseCases(distance: number) {
  return {
    pilgrimage: {
      title: "Devotees & Pilgrimage",
      description: "Religious & temple visits",
      features: [
        "Overnight journey option",
        "Early morning darshan arrival",
        "Temple-to-temple service",
        "Experienced drivers for pilgrimage routes",
      ],
      recommendedSeater: getSeater(distance),
    },

    family: {
      title: "Family Travel",
      description: "Trips with family & relatives",
      features: [
        "Comfortable for elderly & kids",
        "Ample luggage space",
        "Flexible stops for rest",
        "AC comfort throughout journey",
      ],
      recommendedSeater: getFamilySeater(distance),
    },

    corporate: {
      title: "Corporate Travel",
      description: "Offsites & business trips",
      features: [
        "Professional drivers",
        "On-time guarantee",
        "Premium comfort",
        "Wi-Fi on request",
      ],
      recommendedSeater: getCorporateSeater(distance),
    },

    wedding: {
      title: "Wedding Transport",
      description: "Group travel for wedding guests",
      features: [
        "One-way & round trip options",
        "Large group capacity",
        "Multiple vehicle booking",
        "Coordination support",
      ],
      recommendedSeater: getWeddingSeater(distance),
    },
  };
}

function getFamilySeater(distance: number) {
  if (distance < 150) return "9/12 Seater";
  if (distance < 300) return "12/16 Seater";
  return "16/20 Seater";
}

function getCorporateSeater(distance: number) {
  if (distance < 200) return "12 Seater";
  if (distance < 400) return "15 Seater";
  return "17 Seater";
}

function getWeddingSeater(distance: number) {
  if (distance < 200) return "16 Seater";
  if (distance < 400) return "20 Seater";
  return "26 Seater";
}

function getSeater(distance: number) {
  if (distance < 200) return "9/12 Seater";
  if (distance < 400) return "12/17 Seater";
  return "17/26 Seater";
}

export function getRouteGuide(
  origin: string,
  destination: string,
  distance: number,
  highwayName?: string,
) {
  return {
    primaryRoute: `${origin} → ${destination} (${highwayName || "via best available route"})`,
    distance: `${distance} km`,
    travelTime: estimateTravelTime(distance),
    roadCondition: getRoadCondition(distance),
    stopovers: getStopovers(origin, destination),
    proTip: getProTip(origin, destination),
    highwayName: highwayName || "State/Express Highway",
    nightTravelSafe: distance < 300, // simple logic
  };
}

function estimateTravelTime(distance: number) {
  const hours = distance / 50; // average speed
  const rounded = Math.round(hours * 10) / 10;
  return `${rounded} hours (including 1 break)`;
}

function getRoadCondition(distance: number) {
  if (distance > 500) return "Mix of highways and city roads. Good condition.";
  if (distance > 250) return "Mostly highways. Well maintained roads.";
  return "Excellent roads with smooth highways.";
}

function getStopovers(origin: string, destination: string) {
  return [
    {
      name: "Midway Stop",
      purpose: "Tea / Refreshment",
      description: "Clean dhabas and food joints available",
    },
    {
      name: "Local Town",
      purpose: "Food Break",
      description: "Popular restaurants and rest stops",
    },
  ];
}

function getProTip(origin: string, destination: string) {
  return `Start early from ${origin} to avoid traffic and reach ${destination} comfortably during daylight.`;
}

function getCityGuideForDestination(destination: string) {
  return CITY_GUIDES[destination] || null;
}

export function getPricingDetails(distance: number, isSameDay: boolean = true) {
  const perKmRateMin = 18;
  const perKmRateMax = 35;

  const baseFareMin = distance * perKmRateMin;
  const baseFareMax = distance * perKmRateMax;

  return {
    perKmRateDescription: `₹${perKmRateMin}-${perKmRateMax}/km (diesel + driver) – perfect for ${distance} km journey`,

    nightHaltAllowance: isSameDay
      ? "Not needed for same day return"
      : "₹800-₹1500 (depends on driver stay)",

    statePermitCost: "Included in round trip fare",

    parkingCharges: "Free parking at most temples and tourist spots",

    tollCharges: estimateToll(distance),

    includedFree: [
      "Driver charges for 10 hours",
      "Basic insurance coverage",
      "State taxes & permits",
      "Parking at temples (up to 2 hours)",
    ],

    whyPerKmBetter: `For ${distance} km journey, per-km pricing saves up to 30-40% compared to fixed rental rates.`,

    nightStayNote: isSameDay
      ? "Same day return possible. Early morning departure recommended."
      : "Overnight stay required for long-distance journeys.",

    includedNote: isSameDay
      ? "Driver allowance is included in same day trips"
      : "Driver allowance applies for overnight trips",

    volumeDiscount: "Book 2+ vehicles and get 10% off on total fare",

    estimatedFare: {
      min: Math.round(baseFareMin),
      max: Math.round(baseFareMax),
      currency: "INR",
    },
  };
}

function estimateToll(distance: number) {
  if (distance < 100) return "₹50 - ₹150";
  if (distance < 250) return "₹150 - ₹400";
  if (distance < 500) return "₹300 - ₹800";
  return "₹500 - ₹1500 (depending on route)";
}

export const ROUTES: TaxiRoute[] = [
  {
    id: "vns-ayu",
    slug: "varanasi-to-ayodhya-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Ayodhya",
    distance: 220,
    duration: "4.5 Hours",
    description:
      "Affordable tempo traveller service from Varanasi to Ayodhya. Perfect for group pilgrimages to Ram Mandir.",
    highlights: [
      "Doorstep Pickup",
      "Via Purvanchal Expressway",
      "Same Day Return Possible",
      "Verified Professional Drivers",
      "Fixed Transparent Pricing",
    ],
    faqs: [
      {
        question: "What is the distance from Varanasi to Ayodhya?",
        answer: "The road distance is approximately 220 km.",
      },
      {
        question: "Are tolls included in the fare?",
        answer: "No, tolls and parking are extra as per actuals.",
      },
    ],
    tollEstimate: 450,
  },
  {
    id: "vns-pry",
    slug: "varanasi-to-prayagraj-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Prayagraj",
    distance: 125,
    duration: "2.5 Hours",
    description:
      "Fast and comfortable tempo traveller service from Varanasi to Prayagraj for Sangam darshan, Kumbh Mela, and group trips.",

    highlights: [
      "Direct Highway Route",
      "Sangam Drop Service",
      "Same Day Return Available",
    ],

    faqs: [
      {
        question: "How long does it take from Varanasi to Prayagraj?",
        answer:
          "It takes around 2.5 to 3 hours depending on traffic and stops.",
      },
      {
        question: "Is same-day return possible?",
        answer: "Yes, you can comfortably complete a round trip in one day.",
      },
    ],

    tollEstimate: 200,
  },
  {
    id: "vns-lko",
    slug: "varanasi-to-lucknow-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Lucknow",
    distance: 320,
    duration: "6-7 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Lucknow for family trips, business travel, and tourism.",

    highlights: ["Expressway Route", "Smooth Highway Drive", "Same Day Travel"],

    faqs: [
      {
        question: "How long does it take from Varanasi to Lucknow?",
        answer: "It takes around 6 to 7 hours depending on traffic.",
      },
      {
        question: "Is this route safe for night travel?",
        answer: "Yes, it is safe with well-maintained highways.",
      },
    ],

    tollEstimate: 400,
  },
  {
    id: "vns-bodh",
    slug: "varanasi-to-bodh-gaya-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bodh Gaya",
    distance: 260,
    duration: "5-6 Hours",
    description:
      "Tempo traveller service from Varanasi to Bodh Gaya for Buddhist pilgrimage and international tourists.",

    highlights: ["Pilgrimage Route", "Temple Drop", "Comfort Travel"],

    faqs: [
      {
        question: "How long does it take?",
        answer: "Around 5-6 hours depending on traffic.",
      },
    ],

    tollEstimate: 300,
  },
  {
    id: "vns-gkp",
    slug: "varanasi-to-gorakhpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Gorakhpur",
    distance: 230,
    duration: "5 Hours",
    description:
      "Reliable tempo traveller service from Varanasi to Gorakhpur for family trips, religious visits, and group travel.",

    highlights: ["Highway Route", "Comfort Travel", "Affordable Pricing"],

    faqs: [
      {
        question: "How long does it take?",
        answer: "Around 5 hours depending on traffic.",
      },
    ],

    tollEstimate: 250,
  },
  {
    id: "vns-ghz",
    slug: "varanasi-to-ghazipur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Ghazipur",
    distance: 80,
    duration: "2 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Ghazipur for family and local trips.",

    highlights: ["Short Distance", "Quick Travel", "Affordable"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 2 hours.",
      },
    ],

    tollEstimate: 80,
  },
  {
    id: "vns-azm",
    slug: "varanasi-to-azamgarh-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Azamgarh",
    distance: 100,
    duration: "2.5 Hours",
    description:
      "Affordable tempo traveller service from Varanasi to Azamgarh for family visits and local travel.",

    highlights: ["Short Route", "Quick Travel", "Budget Friendly"],

    faqs: [
      {
        question: "How long does it take?",
        answer: "Around 2 to 3 hours.",
      },
    ],

    tollEstimate: 100,
  },
  {
    id: "vns-jnp",
    slug: "varanasi-to-jaunpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jaunpur",
    distance: 60,
    duration: "1.5 Hours",
    description:
      "Quick tempo traveller service from Varanasi to Jaunpur for heritage and local travel.",

    highlights: ["Short Route", "Historic City", "Quick Travel"],

    faqs: [
      {
        question: "How long does it take?",
        answer: "Around 1.5 hours.",
      },
    ],

    tollEstimate: 70,
  },
  {
    id: "vns-mzp",
    slug: "varanasi-to-mirzapur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Mirzapur",
    distance: 65,
    duration: "1.5 Hours",
    description:
      "Quick and comfortable tempo traveller service from Varanasi to Mirzapur for Vindhyachal temple visits.",

    highlights: ["Short Distance", "Temple Route", "Same Day Return"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 1.5 hours.",
      },
    ],

    tollEstimate: 100,
  },
  {
    id: "vns-patna",
    slug: "varanasi-to-patna-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Patna",
    distance: 250,
    duration: "5-6 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Patna for business and family trips.",

    highlights: ["Interstate Route", "Smooth Travel", "Group Friendly"],

    faqs: [
      {
        question: "Travel time?",
        answer: "5 to 6 hours.",
      },
    ],

    tollEstimate: 300,
  },
  {
    id: "vns-knp",
    slug: "varanasi-to-kanpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kanpur",
    distance: 330,
    duration: "6.5 - 7 Hours",
    description:
      "Reliable tempo traveller service from Varanasi to Kanpur for corporate travel, family trips, and group journeys with comfortable seating and experienced drivers.",

    highlights: [
      "Smooth Highway Route",
      "Corporate & Group Friendly",
      "Same Day Return Possible",
    ],

    faqs: [
      {
        question: "How long does it take from Varanasi to Kanpur?",
        answer:
          "It takes around 6.5 to 7 hours depending on traffic and road conditions.",
      },
      {
        question: "Can I do a same-day return trip?",
        answer:
          "Yes, same-day return is possible with early departure from Varanasi.",
      },
    ],

    tollEstimate: 400,
  },
  {
    id: "vns-agr",
    slug: "varanasi-to-agra-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Agra",
    distance: 600,
    duration: "10-11 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Agra for Taj Mahal tours, family trips, and group travel. Ideal for sightseeing with AC vehicles and experienced drivers.",

    highlights: [
      "Expressway Route",
      "Taj Mahal Tour Special",
      "Overnight Travel Available",
    ],

    faqs: [
      {
        question: "How long does it take from Varanasi to Agra?",
        answer:
          "It takes around 10 to 11 hours depending on traffic and road conditions.",
      },
      {
        question: "Is overnight travel a good option?",
        answer:
          "Yes, starting at night helps you reach Agra early morning for Taj Mahal visit.",
      },
    ],

    tollEstimate: 700,
  },
  {
    id: "vns-vnd",
    slug: "varanasi-to-vindhyachal-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Vindhyachal",
    distance: 70,
    duration: "1.5 - 2 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Vindhyachal for Maa Vindhyavasini Darshan, ideal for pilgrimage groups and same-day trips.",

    highlights: [
      "Same Day Return",
      "Temple Pickup & Drop",
      "Quick Highway Route",
    ],

    faqs: [
      {
        question: "How long does it take from Varanasi to Vindhyachal?",
        answer:
          "It takes around 1.5 to 2 hours depending on traffic conditions.",
      },
      {
        question: "Is same-day return possible?",
        answer:
          "Yes, Vindhyachal is perfect for a same-day pilgrimage trip from Varanasi.",
      },
    ],

    tollEstimate: 100,
  },
  {
    id: "vns-kush",
    slug: "varanasi-to-kushinagar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kushinagar",
    distance: 230,
    duration: "5-6 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Kushinagar for Buddhist pilgrimage tours, group travel, and heritage visits with experienced drivers.",

    highlights: [
      "Buddhist Circuit Route",
      "Peaceful Pilgrimage Journey",
      "Same Day Return Possible",
    ],

    faqs: [
      {
        question: "How long does it take from Varanasi to Kushinagar?",
        answer:
          "It takes around 5 to 6 hours depending on traffic and road conditions.",
      },
      {
        question: "Is Kushinagar suitable for a one-day trip?",
        answer:
          "Yes, you can visit Kushinagar and return the same day with proper planning.",
      },
    ],

    tollEstimate: 300,
  },
  {
    id: "vns-ssr",
    slug: "varanasi-to-sasaram-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Sasaram",
    distance: 150,
    duration: "3.5 Hours",
    description:
      "Reliable tempo traveller service from Varanasi to Sasaram for historical and family trips.",

    highlights: ["Historic Route", "Smooth Travel", "Affordable"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 3.5 hours.",
      },
    ],

    tollEstimate: 150,
  },
  {
    id: "vns-bxr",
    slug: "varanasi-to-buxar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Buxar",
    distance: 130,
    duration: "3 - 3.5 Hours",
    description:
      "Reliable tempo traveller service from Varanasi to Buxar for group travel, family trips, and religious visits with comfortable seating and professional drivers.",

    highlights: [
      "Short Highway Route",
      "Same Day Return Available",
      "Budget Friendly Travel",
    ],

    faqs: [
      {
        question: "How long does it take from Varanasi to Buxar?",
        answer:
          "It takes around 3 to 3.5 hours depending on traffic and road conditions.",
      },
      {
        question: "Is same-day return possible?",
        answer: "Yes, Buxar is ideal for a same-day trip from Varanasi.",
      },
    ],

    tollEstimate: 150,
  },
  {
    id: "vns-bll",
    slug: "varanasi-to-ballia-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Ballia",
    distance: 140,
    duration: "3.5 Hours",
    description:
      "Affordable tempo traveller service from Varanasi to Ballia for family trips and local travel.",

    highlights: ["Riverside Route", "Comfort Travel", "Budget Friendly"],

    faqs: [
      {
        question: "How long does it take?",
        answer: "Around 3 to 4 hours depending on traffic.",
      },
    ],

    tollEstimate: 150,
  },
  {
    id: "vns-der",
    slug: "varanasi-to-deoria-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Deoria",
    distance: 210,
    duration: "4.5 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Deoria for family and regional travel.",

    highlights: ["Smooth Route", "Affordable Travel", "Group Friendly"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 4 to 5 hours.",
      },
    ],

    tollEstimate: 200,
  },
  {
    id: "vns-mau",
    slug: "varanasi-to-mau-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Mau",
    distance: 110,
    duration: "2.5 Hours",
    description:
      "Tempo traveller service from Varanasi to Mau for quick and comfortable regional travel.",

    highlights: ["Short Route", "Quick Travel", "Affordable"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 2.5 hours.",
      },
    ],

    tollEstimate: 100,
  },
  {
    id: "vns-chd",
    slug: "varanasi-to-chandauli-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Chandauli",
    distance: 40,
    duration: "1 Hour",
    description:
      "Quick and affordable tempo traveller service from Varanasi to Chandauli for local and business travel.",

    highlights: ["Very Short Route", "Quick Travel", "Budget Friendly"],

    faqs: [
      {
        question: "How long does it take?",
        answer: "Around 1 hour.",
      },
    ],

    tollEstimate: 50,
  },
  {
    id: "vns-rbg",
    slug: "varanasi-to-robertsganj-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Robertsganj",
    distance: 95,
    duration: "2.5 Hours",
    description:
      "Tempo traveller service from Varanasi to Robertsganj for Sonbhadra region travel and business trips.",

    highlights: ["Hill Edge Route", "Smooth Travel", "Budget Friendly"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 2.5 hours.",
      },
    ],

    tollEstimate: 100,
  },
  {
    id: "vns-sln",
    slug: "varanasi-to-sultanpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Sultanpur",
    distance: 180,
    duration: "4 Hours",
    description:
      "Affordable tempo traveller service from Varanasi to Sultanpur for family and business travel.",

    highlights: ["Highway Route", "Comfort Travel", "Budget Friendly"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 4 hours.",
      },
    ],

    tollEstimate: 180,
  },
  {
    id: "vns-rbl",
    slug: "varanasi-to-raebareli-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Raebareli",
    distance: 300,
    duration: "6 Hours",
    description:
      "Tempo traveller service from Varanasi to Raebareli for business, family, and political visits.",

    highlights: ["Long Route", "Comfort Travel", "Highway Drive"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 6 hours.",
      },
    ],

    tollEstimate: 300,
  },
  {
    id: "vns-fzb",
    slug: "varanasi-to-faizabad-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Faizabad",
    distance: 210,
    duration: "4.5 Hours",
    description:
      "Tempo traveller service from Varanasi to Faizabad for religious and family travel.",

    highlights: ["Temple Route", "Smooth Travel", "Affordable"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 4.5 hours.",
      },
    ],

    tollEstimate: 200,
  },
  {
    id: "vns-raj",
    slug: "varanasi-to-rajgir-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Rajgir",
    distance: 250,
    duration: "5.5 - 6 hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Rajgir for Buddhist and Jain pilgrimage groups, offering safe and smooth travel with experienced drivers.",

    highlights: [
      "Buddhist & Jain Pilgrimage Route",
      "Safe & Comfortable Travel",
      "Same Day Return Possible",
    ],

    faqs: [
      {
        question: "How long does it take from Varanasi to Rajgir?",
        answer:
          "It takes around 5.5 to 6 hours depending on traffic and road conditions.",
      },
      {
        question: "Is Rajgir suitable for a same-day trip?",
        answer:
          "Yes, it is possible, but overnight travel is recommended for a relaxed pilgrimage experience.",
      },
    ],

    tollEstimate: 350,
  },
  {
    id: "vns-nal",
    slug: "varanasi-to-nalanda-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Nalanda",
    distance: 260,
    duration: "6 - 6.5 hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Nalanda for Buddhist pilgrimage groups, educational tours, and heritage exploration with safe and smooth travel.",

    highlights: [
      "Buddhist Heritage Route",
      "Safe & Comfortable Travel",
      "Educational & Group Tours",
    ],

    faqs: [
      {
        question: "How long does it take from Varanasi to Nalanda?",
        answer:
          "It takes around 6 to 6.5 hours depending on traffic and road conditions.",
      },
      {
        question: "Is Nalanda suitable for a same-day trip?",
        answer:
          "Yes, it can be covered in a day, but overnight stay is recommended for better exploration.",
      },
    ],

    tollEstimate: 400,
  },
  {
    id: "vns-ujj",
    slug: "varanasi-to-ujjain-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Ujjain",
    distance: 950,
    duration: "15.5 - 16 hours",
    description:
      "Comfortable long-distance tempo traveller service from Varanasi to Ujjain for Mahakaleshwar Jyotirlinga darshan, offering safe, smooth, and reliable travel for pilgrimage groups.",

    highlights: [
      "Mahakaleshwar Jyotirlinga Pilgrimage Route",
      "Night driving experienced drivers",
      "Safe & comfortable long journey",
    ],

    faqs: [
      {
        question: "How long does it take from Varanasi to Ujjain?",
        answer:
          "It takes around 15.5 to 16 hours depending on traffic, route, and road conditions.",
      },
      {
        question: "Is Ujjain suitable for a same-day trip?",
        answer:
          "No, due to the long distance, it is recommended to plan at least a 2-day trip.",
      },
    ],

    tollEstimate: 1200,
  },
  {
    id: "vns-omk",
    slug: "varanasi-to-omkareshwar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Omkareshwar",
    distance: 1050,
    duration: "17.5 - 18 hours",
    description:
      "Premium long-distance tempo traveller service from Varanasi to Omkareshwar Jyotirlinga, ideal for group pilgrimage with safe, comfortable, and reliable travel.",

    highlights: [
      "Omkareshwar Jyotirlinga Pilgrimage Route",
      "Pan-India permits available",
      "AC comfort for long journey",
    ],

    faqs: [
      {
        question: "How long does it take from Varanasi to Omkareshwar?",
        answer:
          "It takes around 17.5 to 18 hours depending on route, traffic, and stops.",
      },
      {
        question: "Is this a one-day trip?",
        answer:
          "No, due to the long distance, it is recommended to plan a 2–3 day pilgrimage trip.",
      },
    ],

    tollEstimate: 1400,
  },
  {
    id: "vns-deo",
    slug: "varanasi-to-deoghar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Deoghar",
    distance: 320,
    duration: "6.5 - 7 hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Deoghar for Baba Baidyanath Jyotirlinga pilgrimage, ensuring safe, smooth, and reliable group travel.",

    highlights: [
      "Baba Baidyanath Jyotirlinga Pilgrimage Route",
      "Comfortable & safe travel",
      "Experienced drivers for highway journey",
    ],

    faqs: [
      {
        question: "How long does it take from Varanasi to Deoghar?",
        answer:
          "It takes around 6.5 to 7 hours depending on traffic and road conditions.",
      },
      {
        question: "Is Deoghar suitable for a same-day trip?",
        answer:
          "Yes, it can be covered in a day, but an overnight stay is recommended for a relaxed pilgrimage experience.",
      },
    ],

    tollEstimate: 300,
  },
  {
    id: "vns-ntl",
    slug: "varanasi-to-nainital-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Nainital",
    distance: 900,
    duration: "16 Hours",
    description:
      "Tempo traveller service from Varanasi to Nainital for hill station trips, family vacations, and group tours.",

    highlights: ["Hill Station", "Lake View", "Cool Weather"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 15 to 16 hours.",
      },
    ],

    tollEstimate: 900,
  },
  {
    id: "vns-msr",
    slug: "varanasi-to-mussoorie-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Mussoorie",
    distance: 850,
    duration: "15 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Mussoorie for hill station vacations and group trips.",

    highlights: ["Queen of Hills", "Scenic Views", "Cool Climate"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 14 to 15 hours.",
      },
    ],

    tollEstimate: 850,
  },
  {
    id: "vns-shm",
    slug: "varanasi-to-shimla-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Shimla",
    distance: 1000,
    duration: "18 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Shimla for hill station vacations and group tours.",

    highlights: ["Hill Station", "Snow Views", "Scenic Drive"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 17 to 18 hours.",
      },
    ],

    tollEstimate: 1000,
  },
  {
    id: "vns-mnl",
    slug: "varanasi-to-manali-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Manali",
    distance: 1200,
    duration: "22 Hours",
    description:
      "Tempo traveller service from Varanasi to Manali for snow trips, honeymoon travel, and adventure tours.",

    highlights: ["Snow Destination", "Adventure Hub", "Long Drive"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 20 to 22 hours.",
      },
    ],

    tollEstimate: 1200,
  },
  {
    id: "vns-chdham",
    slug: "varanasi-to-char-dham-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Char Dham",
    distance: 1500,
    duration: "10-12 Days",
    description:
      "Complete Char Dham Yatra tempo traveller package from Varanasi covering Yamunotri, Gangotri, Kedarnath, and Badrinath.",

    highlights: ["Spiritual Yatra", "All 4 Dhams", "Group Package"],

    faqs: [
      {
        question: "How many days required?",
        answer: "10 to 12 days for full Char Dham Yatra.",
      },
    ],

    tollEstimate: 1500,
  },
  {
    id: "vns-hrd",
    slug: "varanasi-to-haridwar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Haridwar",
    distance: 820,
    duration: "14 Hours",
    description:
      "Tempo traveller service from Varanasi to Haridwar for Ganga darshan and pilgrimage trips.",

    highlights: ["Pilgrimage Route", "Ganga Aarti", "Long Journey"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 14 hours.",
      },
    ],

    tollEstimate: 800,
  },
  {
    id: "vns-rsh",
    slug: "varanasi-to-rishikesh-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Rishikesh",
    distance: 830,
    duration: "14-15 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Rishikesh for yoga retreats, adventure trips, and spiritual journeys.",

    highlights: ["Yoga Capital", "Adventure Hub", "Ganga River Views"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 14 to 15 hours depending on traffic and stops.",
      },
    ],

    tollEstimate: 800,
  },
  {
    id: "vns-del",
    slug: "varanasi-to-delhi-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Delhi",
    distance: 820,
    duration: "12-14 Hours",
    description:
      "Long-distance tempo traveller service from Varanasi to Delhi for group travel, corporate trips, and family journeys.",

    highlights: ["Long Route", "Highway Drive", "Overnight Travel"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 12 to 14 hours depending on route and stops.",
      },
    ],

    tollEstimate: 800,
  },
  {
    id: "vns-sar",
    slug: "varanasi-to-sarnath-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Sarnath",
    distance: 15,
    duration: "0.5 Hours",
    description:
      "Local group sightseeing to the historical Buddhist site of Sarnath from Varanasi.",

    highlights: ["Half-day packages", "Local guide drivers", "Quick transit"],

    faqs: [
      {
        question: "How long does it take from Varanasi to Sarnath?",
        answer: "It takes around 30 minutes depending on traffic conditions.",
      },
      {
        question: "Can Sarnath be covered in a half-day trip?",
        answer:
          "Yes, Sarnath is ideal for a half-day sightseeing trip from Varanasi.",
      },
    ],

    tollEstimate: 50,
  },
  {
    id: "vns-sbd",
    slug: "varanasi-to-sonbhadra-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Sonbhadra",
    distance: 110,
    duration: "3 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Sonbhadra for nature trips, industrial visits, and group travel.",

    highlights: ["Hill Area Route", "Scenic Travel", "Group Friendly"],

    faqs: [
      {
        question: "How long does it take?",
        answer: "Around 3 hours depending on road conditions.",
      },
    ],

    tollEstimate: 120,
  },
  {
    id: "vns-deh",
    slug: "varanasi-to-dehri-on-sone-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Dehri-on-Sone",
    distance: 180,
    duration: "4 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Dehri-on-Sone for smooth group travel across Bihar.",

    highlights: [
      "Comfortable journey",
      "Affordable group travel",
      "Experienced drivers",
    ],

    faqs: [],
    tollEstimate: 150,
  },
  {
    id: "vns-nai",
    slug: "varanasi-to-naimisharanya-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Naimisharanya",
    distance: 450,
    duration: "9 Hours",
    description:
      "Group pilgrimage from Varanasi to Naimisharanya, a sacred forest known for Hindu mythology.",

    highlights: [
      "Spiritual destination",
      "Mythological significance",
      "Comfortable travel",
    ],

    faqs: [],
    tollEstimate: 350,
  },
  {
    id: "vns-shr",
    slug: "varanasi-to-shravasti-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Shravasti",
    distance: 350,
    duration: "8 Hours",
    description:
      "Tempo traveller for Buddhist circuit pilgrimage from Varanasi to Shravasti.",

    highlights: ["Pilgrim special", "Reliable transport", "Clean vehicles"],

    faqs: [
      {
        question: "How long does it take from Varanasi to Shravasti?",
        answer:
          "It takes around 8 hours depending on traffic and road conditions.",
      },
      {
        question: "Is Shravasti a Buddhist pilgrimage site?",
        answer:
          "Yes, Shravasti is one of the major Buddhist pilgrimage destinations where Lord Buddha spent many years.",
      },
    ],

    tollEstimate: 300,
  },
  {
    id: "vns-lum",
    slug: "varanasi-to-lumbini-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Lumbini",
    distance: 300,
    duration: "6-7 Hours",
    description:
      "International pilgrimage trip from Varanasi to Lumbini, the birthplace of Lord Buddha in Nepal.",

    highlights: [
      "International travel",
      "Buddhist pilgrimage",
      "Passport required",
    ],

    faqs: [],
    tollEstimate: 600,
  },
  {
    id: "vns-kol",
    slug: "varanasi-to-kolkata-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kolkata",
    distance: 700,
    duration: "12 Hours",
    description:
      "Tempo traveller service from Varanasi to Kolkata for business, tourism, and long-distance travel.",

    highlights: ["Metro City", "Cultural Hub", "Long Drive"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 11 to 12 hours.",
      },
    ],

    tollEstimate: 700,
  },
  {
    id: "vns-jpr",
    slug: "varanasi-to-jaipur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jaipur",
    distance: 900,
    duration: "15-16 Hours",
    description:
      "Tempo traveller service from Varanasi to Jaipur for tourism, weddings, and royal Rajasthan trips.",

    highlights: ["Pink City", "Heritage Travel", "Long Drive"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 15 to 16 hours.",
      },
    ],

    tollEstimate: 900,
  },
  {
    id: "vns-mat",
    slug: "varanasi-to-mathura-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Mathura",
    distance: 600,
    duration: "10-11 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Mathura, the sacred birthplace of Lord Krishna, ideal for family and group pilgrimage.",

    highlights: [
      "Krishna Janmabhoomi pilgrimage",
      "Comfortable long-distance travel",
      "Experienced drivers",
    ],

    faqs: [
      {
        question: "How long does it take from Varanasi to Mathura?",
        answer:
          "It takes around 10 to 11 hours depending on traffic and road conditions.",
      },
      {
        question: "Is Mathura suitable for a one-day trip?",
        answer:
          "Mathura can be covered in a day, but an overnight stay is recommended for a relaxed darshan.",
      },
    ],

    tollEstimate: 700,
  },
  {
    id: "vns-khj",
    slug: "varanasi-to-khajuraho-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Khajuraho",
    distance: 420,
    duration: "9 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Khajuraho for temple visits and heritage tours.",
    highlights: ["Heritage tour", "UNESCO site visit", "Comfortable travel"],
    faqs: [],
  },
  {
    id: "vns-orc",
    slug: "varanasi-to-orchha-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Orchha",
    distance: 480,
    duration: "10 Hours",
    description:
      "Tempo traveller service from Varanasi to Orchha for exploring historical forts and temples.",
    highlights: ["Heritage destination", "Peaceful travel", "Comfort ride"],
    faqs: [],
  },
  {
    id: "vns-amk",
    slug: "varanasi-to-amarkantak-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Amarkantak",
    distance: 550,
    duration: "12 Hours",
    description:
      "Group travel from Varanasi to Amarkantak, the origin of rivers Narmada and Sone.",
    highlights: ["Spiritual destination", "Nature trip", "Group travel"],
    faqs: [],
  },
  {
    id: "vns-aul",
    slug: "varanasi-to-auli-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Auli",
    distance: 900,
    duration: "16-18 Hours",
    description:
      "Tempo traveller service from Varanasi to Auli for snow trips, skiing, and scenic Himalayan travel.",

    highlights: ["Snow Destination", "Skiing Spot", "Mountain Views"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 16 to 18 hours.",
      },
    ],

    tollEstimate: 900,
  },
  {
    id: "vns-rnk",
    slug: "varanasi-to-ranikhet-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Ranikhet",
    distance: 800,
    duration: "16 Hours",
    description:
      "Tempo traveller service from Varanasi to Ranikhet for a peaceful hill station trip.",
    highlights: ["Hill station", "Scenic journey", "Relaxing trip"],
    faqs: [],
  },
  {
    id: "vns-kus",
    slug: "varanasi-to-kausani-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kausani",
    distance: 780,
    duration: "15 Hours",
    description: "Travel from Varanasi to Kausani with scenic Himalayan views.",
    highlights: ["Himalayan views", "Nature trip", "Comfort travel"],
    faqs: [],
  },
  {
    id: "vns-udp",
    slug: "varanasi-to-udaipur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Udaipur",
    distance: 1200,
    duration: "20 Hours",
    description:
      "Tempo traveller service from Varanasi to Udaipur for luxury trips, weddings, and tourism.",

    highlights: ["Lake City", "Luxury Travel", "Destination Weddings"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 20 hours.",
      },
    ],

    tollEstimate: 1200,
  },
  {
    id: "vns-mta",
    slug: "varanasi-to-mount-abu-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Mount Abu",
    distance: 1250,
    duration: "22 Hours",
    description:
      "Long-distance tempo traveller service from Varanasi to Mount Abu hill station.",
    highlights: ["Pan-India travel", "AC comfort", "Hill station"],
    faqs: [],
  },
  {
    id: "vns-jdp",
    slug: "varanasi-to-jodhpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jodhpur",
    distance: 1100,
    duration: "19 Hours",
    description:
      "Tempo traveller service from Varanasi to Jodhpur for desert tourism and heritage travel.",

    highlights: ["Blue City", "Fort Views", "Desert Travel"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 18 to 19 hours.",
      },
    ],

    tollEstimate: 1100,
  },
  {
    id: "vns-jai",
    slug: "varanasi-to-jaisalmer-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jaisalmer",
    distance: 1400,
    duration: "24 Hours",
    description:
      "Adventure and desert trip from Varanasi to Jaisalmer, the golden city of Rajasthan.",

    highlights: ["Desert safari", "Cultural trip", "Group travel"],

    faqs: [],
    tollEstimate: 1500,
  },
  {
    id: "vns-net",
    slug: "varanasi-to-netarhat-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Netarhat",
    distance: 420,
    duration: "9 Hours",
    description:
      "Tempo traveller service from Varanasi to Netarhat, known for its sunrise and sunset points.",
    highlights: ["Hill station", "Sunrise views", "Nature trip"],
    faqs: [],
  },
  {
    id: "vns-gir",
    slug: "varanasi-to-giridih-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Giridih",
    distance: 300,
    duration: "7 Hours",
    description:
      "Tempo traveller service from Varanasi to Giridih for business and pilgrimage travel.",
    highlights: ["Affordable travel", "Reliable service", "Comfort"],
    faqs: [],
  },
  {
    id: "vns-par",
    slug: "varanasi-to-parasnath-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Parasnath",
    distance: 320,
    duration: "7 Hours",
    description:
      "Pilgrimage travel from Varanasi to Parasnath Hills for Jain धार्मिक यात्रा.",
    highlights: ["Jain pilgrimage", "Peaceful journey", "Safe travel"],
    faqs: [],
  },
  {
    id: "vns-rnc",
    slug: "varanasi-to-ranchi-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Ranchi",
    distance: 450,
    duration: "8 Hours",
    description:
      "Tempo traveller service from Varanasi to Ranchi for tourism and business travel.",

    highlights: ["Waterfalls", "Nature", "Short Trip"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 7 to 8 hours.",
      },
    ],

    tollEstimate: 400,
  },
  {
    id: "vns-shi",
    slug: "varanasi-to-shirdi-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Shirdi",
    distance: 1350,
    duration: "22-24 Hours",
    description:
      "Long-distance pilgrimage trip from Varanasi to Shirdi for Sai Baba darshan.",

    highlights: ["Sai Baba temple", "Pan-India travel", "Multi-day trip"],

    faqs: [],
    tollEstimate: 1200,
  },
  {
    id: "vns-dwk",
    slug: "varanasi-to-dwarka-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Dwarka",
    distance: 1700,
    duration: "28 Hours",
    description:
      "Tempo traveller service from Varanasi to Dwarka for Krishna pilgrimage and long-distance travel.",

    highlights: ["Jyotirlinga Route", "Krishna Dham", "Long Pilgrimage"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 28 hours.",
      },
    ],

    tollEstimate: 1700,
  },
  {
    id: "vns-smn",
    slug: "varanasi-to-somnath-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Somnath",
    distance: 1600,
    duration: "26 Hours",
    description:
      "Tempo traveller service from Varanasi to Somnath for Jyotirlinga darshan and long pilgrimage journeys.",

    highlights: ["Jyotirlinga", "Sea Temple", "Religious Tour"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 25 to 26 hours.",
      },
    ],

    tollEstimate: 1600,
  },
  {
    id: "vns-kot",
    slug: "varanasi-to-kota-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kota",
    distance: 850,
    duration: "15 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Kota for long-distance group travel.",
    highlights: ["Long-distance", "AC comfort", "Safe journey"],
    faqs: [],
  },
  {
    id: "vns-noi",
    slug: "varanasi-to-noida-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Noida",
    distance: 800,
    duration: "13-14 Hours",
    description:
      "Reliable tempo traveller service from Varanasi to Noida for group travel, corporate trips, airport transfers, and NCR visits with comfortable seating and professional drivers.",

    highlights: [
      "Expressway Route",
      "Direct NCR Connectivity",
      "Overnight Travel Available",
    ],

    faqs: [
      {
        question: "How long does it take from Varanasi to Noida?",
        answer:
          "It takes around 13 to 14 hours depending on traffic and expressway conditions.",
      },
      {
        question: "Is overnight travel recommended?",
        answer:
          "Yes, overnight travel is ideal to avoid city traffic and reach Noida early morning.",
      },
    ],

    tollEstimate: 900,
  },
  {
    id: "vns-ind",
    slug: "varanasi-to-indore-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Indore",
    distance: 1000,
    duration: "17-18 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Indore for group travel, Mahakal darshan trips, and long-distance journeys with AC vehicles and experienced drivers.",

    highlights: [
      "Mahakal Circuit Route",
      "Comfortable Long-Distance Travel",
      "Overnight Journey Available",
    ],

    faqs: [
      {
        question: "How long does it take from Varanasi to Indore?",
        answer:
          "It takes around 17 to 18 hours depending on traffic, road conditions, and stopovers.",
      },
      {
        question: "Is this route suitable for overnight travel?",
        answer:
          "Yes, overnight travel is recommended for this long-distance route to save time and reach early.",
      },
    ],

    tollEstimate: 900,
  },
  {
    id: "vns-bho",
    slug: "varanasi-to-bhopal-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bhopal",
    distance: 800,
    duration: "14-15 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Bhopal for group travel, business trips, and tourism. Ideal for long-distance journeys with AC vehicles and experienced drivers.",

    highlights: [
      "Direct Highway Route",
      "Comfortable Long-Distance Travel",
      "Same Day Overnight Journey Option",
    ],
    faqs: [
      {
        question: "How long does it take from Varanasi to Bhopal?",
        answer:
          "It usually takes around 14 to 15 hours depending on traffic, road conditions, and stopovers.",
      },
      {
        question: "Is overnight travel possible?",
        answer:
          "Yes, overnight travel is the best option for this route to save time and reach early morning.",
      },
    ],
    tollEstimate: 700,
  },
  {
    id: "lko-vns",
    slug: "lucknow-to-varanasi-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Varanasi",
    distance: 310,
    duration: "6 Hours",
    description:
      "Premium tempo traveller service from the City of Nawabs to the Spiritual Capital. Best for group tours.",
    highlights: [
      "Purvanchal Expressway",
      "Doorstep Pickup",
      "Verified Drivers",
    ],
    faqs: [],
  },
  {
    id: "lko-ayu",
    slug: "lucknow-to-ayodhya-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Ayodhya",
    distance: 135,
    duration: "2.5 Hours",
    description:
      "Quick and comfortable group travel from Lucknow to Ayodhya Ram Mandir.",
    highlights: ["Expressway route", "Same day return", "Pilgrim friendly"],
    faqs: [],
  },
  {
    id: "lko-pry",
    slug: "lucknow-to-prayagraj-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Prayagraj",
    distance: 200,
    duration: "4 Hours",
    description:
      "Reliable tempo traveller for Sangam Snan and group trips to Prayagraj.",
    highlights: ["Safe travel", "Experienced drivers", "Fixed fare"],
    faqs: [],
  },
  {
    id: "lko-del",
    slug: "lucknow-to-delhi-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Delhi",
    distance: 530,
    duration: "8 Hours",
    description:
      "Interstate group travel from Lucknow to Delhi via Agra-Lucknow Expressway.",
    highlights: ["Expressway experts", "Ample luggage space", "AC comfort"],
    faqs: [],
  },
  {
    id: "lko-knp",
    slug: "lucknow-to-kanpur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Kanpur",
    distance: 90,
    duration: "2 Hours",
    description:
      "Daily group travel service between Lucknow and Kanpur. Ideal for business and families.",
    highlights: ["Frequent service", "City to City", "AC comfort"],
    faqs: [],
  },
  {
    id: "lko-agr",
    slug: "lucknow-to-agra-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Agra",
    distance: 335,
    duration: "4.5 Hours",
    description:
      "Travel via Agra-Lucknow Expressway for the fastest group trip to Taj Mahal.",
    highlights: ["Expressway route", "Professional drivers", "Clean vehicles"],
    faqs: [],
  },
  {
    id: "lko-mth",
    slug: "lucknow-to-mathura-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Mathura",
    distance: 400,
    duration: "6 Hours",
    description:
      "Braj Bhoomi pilgrimage special. Group travel from Lucknow to Mathura/Vrindavan.",
    highlights: ["Pilgrim special", "Safe travel", "Fixed fare"],
    faqs: [
      {
        question: "What is the distance from Lucknow to Mathura?",
        answer:
          "The road distance is approximately 400 km via Agra-Lucknow Expressway.",
      },
      {
        question: "How long does it take by tempo traveller?",
        answer: "It takes about 6-7 hours depending on the number of breaks.",
      },
    ],
    tollEstimate: 850,
    itinerary: [
      { time: "05:00 AM", activity: "Early morning pickup from Lucknow" },
      {
        time: "08:30 AM",
        activity: "Breakfast break on Agra-Lucknow Expressway",
      },
      {
        time: "11:30 AM",
        activity: "Arrival in Mathura, Shri Krishna Janmabhoomi visit",
      },
      {
        time: "02:00 PM",
        activity: "Lunch and visit to Vrindavan (Banke Bihari Temple)",
      },
      { time: "05:30 PM", activity: "Evening Aarti at ISKCON or Prem Mandir" },
      { time: "07:30 PM", activity: "Overnight stay or late departure" },
    ],
    roadConditions:
      "Excellent via Agra-Lucknow Expressway and Yamuna Expressway. Fastest connectivity in UP.",
    bestTime:
      "Holi Festival (World famous), Janmashtami, and Winters (Nov-Feb).",
    seasonalNotes:
      "During Holi, book 1 month in advance. Traffic in Vrindavan narrow lanes is heavy on weekends.",
    comparison: [
      {
        transport: "Tempo Traveller",
        pros: "Agra Expressway expertise, extra luggage space for long trips, flexible for Vrindavan local sightseeing",
        cons: "Higher cost for small families",
      },
      {
        transport: "Train",
        pros: "Comfortable overnight",
        cons: "Last minute tickets impossible, local Mathura commute is difficult for groups",
      },
      {
        transport: "Bus",
        pros: "UP Roadways available",
        cons: "Very slow, no direct reach to many temples",
      },
    ],
  },
  {
    id: "lko-noi",
    slug: "lucknow-to-noida-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Noida",
    distance: 510,
    duration: "7.5 Hours",
    description:
      "Fastest group connectivity between Lucknow and Noida/NCR via Expressway.",
    highlights: ["Expressway travel", "Doorstep pickup", "Comfortable ride"],
    faqs: [],
  },
  {
    id: "lko-ghz",
    slug: "lucknow-to-ghaziabad-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Ghaziabad",
    distance: 520,
    duration: "8 Hours",
    description:
      "Direct group tempo traveller service to Ghaziabad from Lucknow.",
    highlights: ["Professional drivers", "Safe long trips", "AC comfort"],
    faqs: [],
  },
  {
    id: "lko-mrt",
    slug: "lucknow-to-meerut-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Meerut",
    distance: 480,
    duration: "7.5 Hours",
    description:
      "Group travel from the state capital to the historical city of Meerut.",
    highlights: ["Expressway route", "Reliable service", "Fixed pricing"],
    faqs: [],
  },
  {
    id: "lko-bly",
    slug: "lucknow-to-bareilly-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Bareilly",
    distance: 250,
    duration: "5 Hours",
    description:
      "Reliable tempo traveller service connecting Lucknow and Bareilly.",
    highlights: ["Highway route", "Trained drivers", "Clean seating"],
    faqs: [],
  },
  {
    id: "lko-gkp",
    slug: "lucknow-to-gorakhpur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Gorakhpur",
    distance: 270,
    duration: "5.5 Hours",
    description:
      "Direct group travel from Lucknow to Gorakhnath Temple and Gorakhpur city.",
    highlights: [
      "Expressway connectivity",
      "Same day pickup",
      "Pilgrim friendly",
    ],
    faqs: [],
  },
  {
    id: "lko-jhs",
    slug: "lucknow-to-jhansi-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Jhansi",
    distance: 300,
    duration: "6 Hours",
    description:
      "Explore the historical city of Jhansi with our group tempo traveller service.",
    highlights: ["Bundelkhand route", "Safe travel", "Comfortable buses"],
    faqs: [],
  },
  {
    id: "lko-gwl",
    slug: "lucknow-to-gwalior-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Gwalior",
    distance: 350,
    duration: "7 Hours",
    description:
      "Interstate group travel from Lucknow to Gwalior fort and city.",
    highlights: ["Trained drivers", "AC luxury", "Fixed rates"],
    faqs: [],
  },
  {
    id: "lko-jai",
    slug: "lucknow-to-jaipur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Jaipur",
    distance: 570,
    duration: "9.5 Hours",
    description:
      "Connect to the Pink City from Lucknow with our premium tempo traveller service.",
    highlights: [
      "Rajasthan tours",
      "Safe night travel",
      "Professional service",
    ],
    faqs: [],
  },
  {
    id: "lko-uda",
    slug: "lucknow-to-udaipur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Udaipur",
    distance: 950,
    duration: "16 Hours",
    description:
      "Long distance luxury group travel from Lucknow to the City of Lakes, Udaipur.",
    highlights: ["Luxury tempo travellers", "Expert drivers", "Full AC"],
    faqs: [],
  },
  {
    id: "lko-chd",
    slug: "lucknow-to-chandigarh-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Chandigarh",
    distance: 780,
    duration: "12.5 Hours",
    description:
      "Professional group travel service to Chandigarh from Lucknow.",
    highlights: ["Safe long journey", "Comfortable seating", "Fixed fare"],
    faqs: [],
  },
  {
    id: "lko-ddn",
    slug: "lucknow-to-dehradun-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Dehradun",
    distance: 550,
    duration: "10.5 Hours",
    description:
      "Group travel from Lucknow to the foothills of Himalayas in Dehradun.",
    highlights: ["Hill driving experts", "Reliable vehicles", "Clean interior"],
    faqs: [],
  },
  {
    id: "lko-hrd",
    slug: "lucknow-to-haridwar-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Haridwar",
    distance: 490,
    duration: "9 Hours",
    description:
      "Pilgrimage special tempo traveller service to Haridwar from Lucknow.",
    highlights: ["Ganga Snan special", "Doorstep pickup", "Verified drivers"],
    faqs: [],
  },
  {
    id: "lko-rsh",
    slug: "lucknow-to-rishikesh-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Rishikesh",
    distance: 510,
    duration: "10 Hours",
    description:
      "Adventure and spiritual group travel to Rishikesh from Lucknow by tempo traveller.",
    highlights: ["Yoga capital special", "Professional drivers", "AC comfort"],
    faqs: [],
  },
  {
    id: "lko-nai",
    slug: "lucknow-to-nainital-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Nainital",
    distance: 400,
    duration: "8.5 Hours",
    description:
      "Group hill station trip from Lucknow to Nainital. Safe hill driving guaranteed.",
    highlights: [
      "Hill driving experts",
      "Reliable vehicles",
      "Comfortable seating",
    ],
    faqs: [],
  },
  {
    id: "lko-pat",
    slug: "lucknow-to-patna-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Patna",
    distance: 520,
    duration: "9.5 Hours",
    description:
      "Direct group tempo traveller service between Lucknow and Patna.",
    highlights: ["Interstate experts", "Safe night travel", "AC luxury"],
    faqs: [],
  },
  {
    id: "lko-gay",
    slug: "lucknow-to-gaya-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Gaya",
    distance: 550,
    duration: "10.5 Hours",
    description: "Pilgrimage group travel from Lucknow to Gaya/Bodhgaya.",
    highlights: ["Pilgrim friendly", "Comfortable ride", "Fixed pricing"],
    faqs: [],
  },
  {
    id: "lko-ran",
    slug: "lucknow-to-ranchi-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Ranchi",
    distance: 850,
    duration: "16 Hours",
    description:
      "Long distance group travel from Lucknow to Ranchi, Jharkhand.",
    highlights: ["Safe long trips", "Professional drivers", "Regular breaks"],
    faqs: [],
  },
  {
    id: "lko-jsd",
    slug: "lucknow-to-jamshedpur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Jamshedpur",
    distance: 980,
    duration: "18 Hours",
    description:
      "Connect Lucknow to the Steel City with our reliable tempo traveller service.",
    highlights: ["Experienced drivers", "Luxury seating", "AC comfort"],
    faqs: [],
  },
  {
    id: "lko-ngp",
    slug: "lucknow-to-nagpur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Nagpur",
    distance: 850,
    duration: "16 Hours",
    description: "Interstate group travel from Lucknow to Nagpur, Maharashtra.",
    highlights: ["Safe journey", "Reliable vehicles", "Fixed rates"],
    faqs: [],
  },
  {
    id: "lko-bho",
    slug: "lucknow-to-bhopal-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Bhopal",
    distance: 590,
    duration: "11 Hours",
    description: "Group travel from Lucknow to the City of Lakes, Bhopal.",
    highlights: ["Capital to Capital", "Safe travel", "AC comfort"],
    faqs: [],
  },
  {
    id: "lko-ind",
    slug: "lucknow-to-indore-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Indore",
    distance: 780,
    duration: "14 Hours",
    description:
      "Long distance group tempo traveller service to Indore from Lucknow.",
    highlights: ["Comfortable seating", "Experienced drivers", "Fixed pricing"],
    faqs: [],
  },
  {
    id: "lko-jbp",
    slug: "lucknow-to-jabalpur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Jabalpur",
    distance: 550,
    duration: "10 Hours",
    description:
      "Connect Lucknow to Jabalpur with our professional group travel service.",
    highlights: ["Marble Rocks tour", "Safe travel", "Reliable service"],
    faqs: [],
  },
  {
    id: "lko-rew",
    slug: "lucknow-to-rewa-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Rewa",
    distance: 350,
    duration: "7 Hours",
    description:
      "Direct group tempo traveller service from Lucknow to Rewa, MP.",
    highlights: [
      "White Tiger Land special",
      "Professional drivers",
      "Fixed fare",
    ],
    faqs: [],
  },
  {
    id: "lko-stn",
    slug: "lucknow-to-satna-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Satna",
    distance: 380,
    duration: "8 Hours",
    description: "Group travel from Lucknow to Satna/Maihar Shrine.",
    highlights: ["Maihar Devi special", "Safe travel", "Verified drivers"],
    faqs: [],
  },
  {
    id: "lko-khj",
    slug: "lucknow-to-khajuraho-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Khajuraho",
    distance: 310,
    duration: "6.5 Hours",
    description:
      "Explore the temples of Khajuraho with our group tempo traveller service.",
    highlights: ["UNESCO site tour", "Comfortable buses", "Trained drivers"],
    faqs: [],
  },
  {
    id: "lko-chk",
    slug: "lucknow-to-chitrakoot-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Chitrakoot",
    distance: 230,
    duration: "5 Hours",
    description:
      "Pilgrimage group travel from Lucknow to the holy land of Chitrakoot.",
    highlights: ["Religious tour expert", "Safe travel", "AC comfort"],
    faqs: [],
  },
  {
    id: "lko-azm",
    slug: "lucknow-to-azamgarh-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Azamgarh",
    distance: 270,
    duration: "5.5 Hours",
    description:
      "Reliable group tempo traveller service from Lucknow to Azamgarh.",
    highlights: [
      "Purvanchal Expressway",
      "Experienced drivers",
      "Clean seating",
    ],
    faqs: [],
  },
  {
    id: "lko-bst",
    slug: "lucknow-to-basti-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Basti",
    distance: 200,
    duration: "4 Hours",
    description:
      "Group travel from Lucknow to Basti. Reliable and fixed price service.",
    highlights: ["Highway route", "AC comfort", "Professional drivers"],
    faqs: [],
  },
  {
    id: "lko-gnd",
    slug: "lucknow-to-gonda-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Gonda",
    distance: 120,
    duration: "3 Hours",
    description: "Reliable tempo traveller service between Lucknow and Gonda.",
    highlights: ["Fast transit", "Safe travel", "Fixed fare"],
    faqs: [],
  },
  {
    id: "lko-brh",
    slug: "lucknow-to-bahraich-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Bahraich",
    distance: 130,
    duration: "3.5 Hours",
    description:
      "Connect Lucknow to Bahraich with our professional group travel service.",
    highlights: ["Experienced drivers", "Reliable vehicles", "Clean seating"],
    faqs: [],
  },
  {
    id: "lko-stp",
    slug: "lucknow-to-sitapur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Sitapur",
    distance: 90,
    duration: "2 Hours",
    description: "Quick and easy group travel from Lucknow to Sitapur.",
    highlights: ["Frequent service", "City to City", "AC comfort"],
    faqs: [],
  },
  {
    id: "lko-hrd-dist",
    slug: "lucknow-to-hardoi-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Hardoi",
    distance: 110,
    duration: "2.5 Hours",
    description:
      "Reliable tempo traveller service connecting Lucknow and Hardoi.",
    highlights: ["Safe travel", "Trained drivers", "Fixed pricing"],
    faqs: [],
  },
  {
    id: "lko-unn",
    slug: "lucknow-to-unnao-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Unnao",
    distance: 70,
    duration: "1.5 Hours",
    description: "Fastest group connectivity between Lucknow and Unnao.",
    highlights: ["Short distance expert", "Reliable service", "AC comfort"],
    faqs: [],
  },
  {
    id: "lko-rbl",
    slug: "lucknow-to-rae-bareli-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Rae Bareli",
    distance: 80,
    duration: "2 Hours",
    description:
      "Group travel from the capital to Rae Bareli by tempo traveller.",
    highlights: ["Frequent service", "Professional drivers", "Clean vehicles"],
    faqs: [],
  },
  {
    id: "lko-amt",
    slug: "lucknow-to-amethi-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Amethi",
    distance: 140,
    duration: "3.5 Hours",
    description: "Reliable tempo traveller service between Lucknow and Amethi.",
    highlights: ["Safe long trips", "AC comfort", "Fixed pricing"],
    faqs: [],
  },
  {
    id: "lko-sln",
    slug: "lucknow-to-sultanpur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Sultanpur",
    distance: 150,
    duration: "3.5 Hours",
    description: "Direct group travel from Lucknow to Sultanpur city.",
    highlights: ["Highway route", "Reliable vehicles", "Fixed fare"],
    faqs: [],
  },
  {
    id: "lko-ptg",
    slug: "lucknow-to-pratapgarh-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Pratapgarh",
    distance: 170,
    duration: "4 Hours",
    description:
      "Connect Lucknow to Pratapgarh with our professional group travel service.",
    highlights: ["Experienced drivers", "Safe journey", "AC comfort"],
    faqs: [],
  },
  {
    id: "lko-mzp",
    slug: "lucknow-to-mirzapur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Mirzapur",
    distance: 280,
    duration: "6 Hours",
    description:
      "Direct group tempo traveller service to Mirzapur from Lucknow.",
    highlights: ["Vindhyachal special", "Professional drivers", "AC comfort"],
    faqs: [],
  },
  {
    id: "lko-jnp",
    slug: "lucknow-to-jaunpur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Jaunpur",
    distance: 250,
    duration: "5.5 Hours",
    description: "Group travel from Lucknow to the historical city of Jaunpur.",
    highlights: ["Safe travel", "Experienced drivers", "Fixed pricing"],
    faqs: [],
  },
  {
    id: "lko-gzp",
    slug: "lucknow-to-ghazipur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Ghazipur",
    distance: 340,
    duration: "6.5 Hours",
    description:
      "Reliable tempo traveller service connecting Lucknow and Ghazipur.",
    highlights: ["Purvanchal Expressway", "Trained drivers", "Clean seating"],
    faqs: [],
  },
  {
    id: "lko-bal",
    slug: "lucknow-to-ballia-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Ballia",
    distance: 400,
    duration: "8 Hours",
    description: "Group travel from Lucknow to Ballia by tempo traveller.",
    highlights: ["Long distance expert", "Safe travel", "Fixed fare"],
    faqs: [],
  },
  {
    id: "lko-mau",
    slug: "lucknow-to-mau-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Mau",
    distance: 320,
    duration: "6.5 Hours",
    description: "Direct group travel from Lucknow to Mau city.",
    highlights: ["Purvanchal Expressway", "Reliable vehicles", "AC comfort"],
    faqs: [],
  },
  {
    id: "lko-deo",
    slug: "lucknow-to-deoria-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Deoria",
    distance: 310,
    duration: "6.5 Hours",
    description: "Reliable tempo traveller service between Lucknow and Deoria.",
    highlights: ["Highway route", "Experienced drivers", "Fixed pricing"],
    faqs: [],
  },
  {
    id: "lko-ksn",
    slug: "lucknow-to-kushinagar-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Kushinagar",
    distance: 330,
    duration: "7 Hours",
    description:
      "Pilgrimage group travel from Lucknow to the holy city of Kushinagar.",
    highlights: ["Buddhist circuit expert", "Safe travel", "AC comfort"],
    faqs: [],
  },
  {
    id: "lko-alg",
    slug: "lucknow-to-aligarh-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Aligarh",
    distance: 380,
    duration: "7 Hours",
    description:
      "Direct group tempo traveller service to Aligarh from Lucknow.",
    highlights: ["Safe journey", "Reliable vehicles", "Fixed rates"],
    faqs: [],
  },
  {
    id: "lko-mzf",
    slug: "lucknow-to-muzaffarnagar-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Muzaffarnagar",
    distance: 550,
    duration: "10 Hours",
    description:
      "Connect Lucknow to Muzaffarnagar with our professional group travel service.",
    highlights: ["Interstate experts", "Safe travel", "AC comfort"],
    faqs: [],
  },
  {
    id: "lko-sah",
    slug: "lucknow-to-saharanpur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Saharanpur",
    distance: 600,
    duration: "11 Hours",
    description:
      "Reliable long distance group travel to Saharanpur from Lucknow.",
    highlights: ["Safe long trips", "Professional drivers", "Fixed pricing"],
    faqs: [],
  },
  {
    id: "lko-hpr",
    slug: "lucknow-to-hapur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Hapur",
    distance: 460,
    duration: "8 Hours",
    description: "Direct group tempo traveller service from Lucknow to Hapur.",
    highlights: ["Expressway route", "Reliable vehicles", "AC comfort"],
    faqs: [],
  },
  {
    id: "lko-bul",
    slug: "lucknow-to-bulandshahr-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Bulandshahr",
    distance: 480,
    duration: "8.5 Hours",
    description: "Group travel from Lucknow to Bulandshahr by tempo traveller.",
    highlights: ["Safe travel", "Verified drivers", "Fixed fare"],
    faqs: [],
  },
  {
    id: "pry-vns",
    slug: "prayagraj-to-varanasi-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Varanasi",
    distance: 125,
    duration: "2.5 Hours",
    description:
      "Reliable tempo traveller service from Prayagraj to the spiritual capital Varanasi.",
    highlights: ["Highway route", "Express pickup", "Fixed pricing"],
    faqs: [],
  },
  {
    id: "pry-lko",
    slug: "prayagraj-to-lucknow-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Lucknow",
    distance: 200,
    duration: "4 Hours",
    description:
      "Comfortable journey from Prayagraj to Lucknow with professional drivers.",
    highlights: ["Smooth highway", "AC vehicles", "Affordable fare"],
    faqs: [],
  },
  {
    id: "pry-ayy",
    slug: "prayagraj-to-ayodhya-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Ayodhya",
    distance: 170,
    duration: "4 Hours",
    description: "Safe and convenient ride to the holy city Ayodhya.",
    highlights: ["Pilgrimage route", "Flexible timing", "Clean vehicles"],
    faqs: [],
  },
  {
    id: "pry-knp",
    slug: "prayagraj-to-kanpur-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Kanpur",
    distance: 210,
    duration: "5 Hours",
    description: "Book tempo traveller from Prayagraj to Kanpur at best price.",
    highlights: ["Fast route", "Experienced drivers", "Door pickup"],
    faqs: [],
  },
  {
    id: "pry-mir",
    slug: "prayagraj-to-mirzapur-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Mirzapur",
    distance: 90,
    duration: "2 Hours",
    description:
      "Quick and affordable ride to Mirzapur with comfortable seating.",
    highlights: ["Short trip", "Budget friendly", "Local drivers"],
    faqs: [],
  },
  {
    id: "pry-bhd",
    slug: "prayagraj-to-bhadohi-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Bhadohi",
    distance: 100,
    duration: "2.5 Hours",
    description: "Easy ride from Prayagraj to Bhadohi.",
    highlights: ["Local route", "Affordable", "Quick travel"],
    faqs: [],
  },
  {
    id: "pry-jnp",
    slug: "prayagraj-to-jaunpur-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Jaunpur",
    distance: 110,
    duration: "3 Hours",
    description: "Comfortable travel to Jaunpur.",
    highlights: ["Smooth road", "Reliable service", "AC ride"],
    faqs: [],
  },
  {
    id: "pry-slp",
    slug: "prayagraj-to-sultanpur-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Sultanpur",
    distance: 150,
    duration: "3.5 Hours",
    description: "Affordable group travel to Sultanpur.",
    highlights: ["Budget ride", "Safe journey", "Clean vehicle"],
    faqs: [],
  },
  {
    id: "pry-fth",
    slug: "prayagraj-to-fatehpur-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Fatehpur",
    distance: 120,
    duration: "3 Hours",
    description: "Quick ride to Fatehpur.",
    highlights: ["Short route", "Affordable fare", "Comfortable seats"],
    faqs: [],
  },
  {
    id: "pry-rbl",
    slug: "prayagraj-to-raebareli-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Raebareli",
    distance: 120,
    duration: "3 Hours",
    description: "Smooth travel to Raebareli.",
    highlights: ["Reliable drivers", "Budget friendly", "Quick booking"],
    faqs: [],
  },
  {
    id: "pry-gkp",
    slug: "prayagraj-to-gorakhpur-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Gorakhpur",
    distance: 300,
    duration: "7 Hours",
    description: "Long route travel to Gorakhpur.",
    highlights: ["Comfort seats", "Safe drive", "On-time service"],
    faqs: [],
  },
  {
    id: "pry-bnd",
    slug: "prayagraj-to-banda-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Banda",
    distance: 140,
    duration: "4 Hours",
    description: "Reliable ride to Banda.",
    highlights: ["Local drivers", "Flexible stops", "Affordable"],
    faqs: [],
  },
  {
    id: "pry-ckt",
    slug: "prayagraj-to-chitrakoot-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Chitrakoot",
    distance: 130,
    duration: "3.5 Hours",
    description: "Spiritual trip to Chitrakoot.",
    highlights: ["Pilgrimage route", "Clean vehicle", "Safe ride"],
    faqs: [],
  },
  {
    id: "pry-stn",
    slug: "prayagraj-to-satna-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Satna",
    distance: 150,
    duration: "4 Hours",
    description: "Comfortable ride to Satna.",
    highlights: ["AC vehicle", "Safe travel", "Group friendly"],
    faqs: [],
  },
  {
    id: "pry-rwa",
    slug: "prayagraj-to-rewa-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Rewa",
    distance: 180,
    duration: "5 Hours",
    description: "Affordable trip to Rewa.",
    highlights: ["Budget ride", "Clean interiors", "Flexible timing"],
    faqs: [],
  },
  {
    id: "pry-dlh",
    slug: "prayagraj-to-delhi-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Delhi",
    distance: 700,
    duration: "10-12 Hours",
    description: "Long-distance travel to Delhi.",
    highlights: ["Night travel", "Pushback seats", "Experienced drivers"],
    faqs: [],
  },
  {
    id: "pry-agr",
    slug: "prayagraj-to-agra-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Agra",
    distance: 500,
    duration: "8-9 Hours",
    description: "Travel to Agra comfortably.",
    highlights: ["Tourist route", "AC comfort", "Group travel"],
    faqs: [],
  },
  {
    id: "pry-mtr",
    slug: "prayagraj-to-mathura-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Mathura",
    distance: 600,
    duration: "10 Hours",
    description: "Religious trip to Mathura.",
    highlights: ["Pilgrimage route", "Comfort ride", "Safe travel"],
    faqs: [],
  },
  {
    id: "pry-vrn",
    slug: "prayagraj-to-vrindavan-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Vrindavan",
    distance: 610,
    duration: "10 Hours",
    description: "Group travel to Vrindavan.",
    highlights: ["Temple visits", "AC vehicle", "Flexible stops"],
    faqs: [],
  },
  {
    id: "pry-hrd",
    slug: "prayagraj-to-haridwar-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Haridwar",
    distance: 800,
    duration: "14 Hours",
    description: "Spiritual journey to Haridwar.",
    highlights: ["Long route", "Safe ride", "Experienced drivers"],
    faqs: [],
  },
  {
    id: "pry-rsh",
    slug: "prayagraj-to-rishikesh-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Rishikesh",
    distance: 820,
    duration: "14 Hours",
    description: "Travel to Rishikesh with comfort.",
    highlights: ["Hill route", "Safe driving", "Group friendly"],
    faqs: [],
  },
  {
    id: "pry-jpr",
    slug: "prayagraj-to-jaipur-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Jaipur",
    distance: 750,
    duration: "12 Hours",
    description: "Travel to Jaipur with ease.",
    highlights: ["Tourist route", "Comfort ride", "Flexible stops"],
    faqs: [],
  },
  {
    id: "pry-bpl",
    slug: "prayagraj-to-bhopal-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Bhopal",
    distance: 650,
    duration: "11 Hours",
    description: "Smooth travel to Bhopal.",
    highlights: ["Long drive", "AC vehicle", "Safe ride"],
    faqs: [],
  },
  {
    id: "pry-ind",
    slug: "prayagraj-to-indore-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Indore",
    distance: 800,
    duration: "14 Hours",
    description: "Reliable travel to Indore.",
    highlights: ["Comfort seats", "Safe journey", "Flexible timing"],
    faqs: [],
  },
  {
    id: "pry-ptn",
    slug: "prayagraj-to-patna-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Patna",
    distance: 350,
    duration: "8 Hours",
    description: "Travel from Prayagraj to Patna.",
    highlights: ["Highway route", "Safe ride", "Affordable"],
    faqs: [],
  },
  {
    id: "pry-gya",
    slug: "prayagraj-to-gaya-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Gaya",
    distance: 400,
    duration: "9 Hours",
    description: "Comfortable ride to Gaya.",
    highlights: ["Religious route", "AC travel", "Safe journey"],
    faqs: [],
  },
  {
    id: "pry-rnc",
    slug: "prayagraj-to-ranchi-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Ranchi",
    distance: 600,
    duration: "12 Hours",
    description: "Long distance travel to Ranchi.",
    highlights: ["Safe ride", "Comfort seats", "Flexible stops"],
    faqs: [],
  },
  {
    id: "pry-kol",
    slug: "prayagraj-to-kolkata-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Kolkata",
    distance: 800,
    duration: "16 Hours",
    description: "Travel to Kolkata with ease.",
    highlights: ["Long route", "Comfort ride", "Experienced drivers"],
    faqs: [],
  },
  {
    id: "pry-ald-air",
    slug: "prayagraj-to-allahabad-airport-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Allahabad Airport",
    distance: 15,
    duration: "30 Minutes",
    description: "Quick and comfortable ride to Allahabad Airport.",
    highlights: ["Airport pickup", "On-time service", "Local drivers"],
    faqs: [],
  },
  {
    id: "pry-vns-air",
    slug: "prayagraj-to-varanasi-airport-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Varanasi Airport",
    distance: 140,
    duration: "3 Hours",
    description: "Reliable airport transfer to Varanasi Airport.",
    highlights: ["Highway route", "Timely drop", "Comfort ride"],
    faqs: [],
  },
  {
    id: "pry-mau",
    slug: "prayagraj-to-mau-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Mau",
    distance: 230,
    duration: "6 Hours",
    description: "Comfortable journey to Mau.",
    highlights: ["Smooth travel", "AC vehicle", "Safe ride"],
    faqs: [],
  },
  {
    id: "pry-azm",
    slug: "prayagraj-to-azamgarh-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Azamgarh",
    distance: 260,
    duration: "6-7 Hours",
    description: "Affordable travel to Azamgarh.",
    highlights: ["Budget friendly", "Reliable drivers", "Comfort seating"],
    faqs: [],
  },
  {
    id: "pry-bll",
    slug: "prayagraj-to-ballia-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Ballia",
    distance: 280,
    duration: "7 Hours",
    description: "Long route travel to Ballia.",
    highlights: ["Safe journey", "Comfort ride", "Flexible stops"],
    faqs: [],
  },
  {
    id: "pry-der",
    slug: "prayagraj-to-deoria-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Deoria",
    distance: 320,
    duration: "8 Hours",
    description: "Travel easily to Deoria.",
    highlights: ["AC travel", "Safe ride", "Affordable"],
    faqs: [],
  },
  {
    id: "pry-ghz",
    slug: "prayagraj-to-ghazipur-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Ghazipur",
    distance: 220,
    duration: "5-6 Hours",
    description: "Comfortable ride to Ghazipur.",
    highlights: ["Smooth route", "Reliable service", "Budget ride"],
    faqs: [],
  },
  {
    id: "pry-snb",
    slug: "prayagraj-to-sonbhadra-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Sonbhadra",
    distance: 250,
    duration: "6 Hours",
    description: "Travel to Sonbhadra with ease.",
    highlights: ["Hill route", "Safe driving", "Comfort seating"],
    faqs: [],
  },
  {
    id: "pry-rnk",
    slug: "prayagraj-to-renukoot-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Renukoot",
    distance: 270,
    duration: "6-7 Hours",
    description: "Reliable service to Renukoot.",
    highlights: ["Long route", "Comfort ride", "Experienced drivers"],
    faqs: [],
  },
  {
    id: "pry-obr",
    slug: "prayagraj-to-obra-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Obra",
    distance: 260,
    duration: "6 Hours",
    description: "Affordable ride to Obra.",
    highlights: ["Safe travel", "Budget fare", "Clean vehicle"],
    faqs: [],
  },
  {
    id: "pry-pry-air",
    slug: "prayagraj-to-prayagraj-airport-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Prayagraj Airport",
    distance: 15,
    duration: "30 Minutes",
    description: "Quick airport transfer within Prayagraj.",
    highlights: ["Fast pickup", "On-time drop", "Local drivers"],
    faqs: [],
  },
  {
    id: "pry-jhs",
    slug: "prayagraj-to-jhansi-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Jhansi",
    distance: 400,
    duration: "7-8 Hours",
    description: "Comfortable travel to Jhansi.",
    highlights: ["Long route", "AC vehicle", "Safe ride"],
    faqs: [],
  },
  {
    id: "pry-ltp",
    slug: "prayagraj-to-lalitpur-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Lalitpur",
    distance: 450,
    duration: "8 Hours",
    description: "Reliable journey to Lalitpur.",
    highlights: ["Smooth highway", "Comfort seats", "Flexible stops"],
    faqs: [],
  },
  {
    id: "pry-ujj",
    slug: "prayagraj-to-ujjain-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Ujjain",
    distance: 700,
    duration: "12 Hours",
    description: "Spiritual journey to Ujjain.",
    highlights: ["Temple route", "Safe ride", "Comfort travel"],
    faqs: [],
  },
  {
    id: "pry-jbp",
    slug: "prayagraj-to-jabalpur-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Jabalpur",
    distance: 350,
    duration: "7 Hours",
    description: "Smooth travel to Jabalpur.",
    highlights: ["Highway route", "Comfort ride", "Affordable"],
    faqs: [],
  },
  {
    id: "pry-ngp",
    slug: "prayagraj-to-nagpur-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Nagpur",
    distance: 800,
    duration: "14 Hours",
    description: "Long-distance travel to Nagpur.",
    highlights: ["Night travel", "Pushback seats", "Experienced drivers"],
    faqs: [],
  },
  {
    id: "pry-vdh",
    slug: "prayagraj-to-vidhyanchal-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Vidhyanchal",
    distance: 95,
    duration: "2.5 Hours",
    description: "Short spiritual trip to Vidhyanchal.",
    highlights: ["Pilgrimage route", "Quick travel", "Affordable"],
    faqs: [],
  },
  {
    id: "pry-srn",
    slug: "prayagraj-to-sarnath-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Sarnath",
    distance: 130,
    duration: "3 Hours",
    description: "Comfortable ride to Sarnath.",
    highlights: ["Tourist route", "AC vehicle", "Safe journey"],
    faqs: [],
  },
  {
    id: "pry-shr",
    slug: "prayagraj-to-shravasti-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Shravasti",
    distance: 300,
    duration: "7 Hours",
    description: "Travel to Shravasti with ease.",
    highlights: ["Religious route", "Comfort ride", "Flexible stops"],
    faqs: [],
  },
  {
    id: "pry-kus",
    slug: "prayagraj-to-kushinagar-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Kushinagar",
    distance: 350,
    duration: "8 Hours",
    description: "Reliable service to Kushinagar.",
    highlights: ["Pilgrimage route", "Safe ride", "Comfort seating"],
    faqs: [],
  },
  {
    id: "pry-hld",
    slug: "prayagraj-to-haldia-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Haldia",
    distance: 900,
    duration: "16 Hours",
    description: "Long-distance journey to Haldia.",
    highlights: ["Extended route", "Comfort travel", "Experienced drivers"],
    faqs: [],
  },
  {
    id: "pry-dhn",
    slug: "prayagraj-to-dhanbad-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Dhanbad",
    distance: 650,
    duration: "13 Hours",
    description: "Travel to Dhanbad comfortably.",
    highlights: ["Highway travel", "Safe ride", "Affordable fare"],
    faqs: [],
  },
  {
    id: "ayu-vns",
    slug: "ayodhya-to-varanasi-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Varanasi",
    distance: 220,
    duration: "4.5 Hours",
    description:
      "Group travel from the city of Ram to the city of Shiva. Pilgrimage special service.",
    highlights: ["Pilgrim friendly", "Doorstep pickup", "Comfortable ride"],
    faqs: [],
  },
  {
    id: "ayu-lko",
    slug: "ayodhya-to-lucknow-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Lucknow",
    distance: 135,
    duration: "2.5 Hours",
    description:
      "Quick transit between Ayodhya and Lucknow for groups and families.",
    highlights: ["Same day return", "Expert drivers", "Fixed price"],
    faqs: [],
  },
  {
    id: "ayu-pry",
    slug: "ayodhya-to-prayagraj-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Prayagraj",
    distance: 170,
    duration: "3.5 Hours",
    description: "Comfortable group travel from Ayodhya to Prayagraj.",
    highlights: ["AC vehicles", "Safe journey", "On-time pickup"],
    faqs: [],
  },
  {
    id: "ayu-gkp",
    slug: "ayodhya-to-gorakhpur-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Gorakhpur",
    distance: 140,
    duration: "3 Hours",
    description:
      "Smooth ride for families traveling between Ayodhya and Gorakhpur.",
    highlights: ["Clean vehicles", "Budget friendly", "Safe ride"],
    faqs: [],
  },
  {
    id: "ayu-knp",
    slug: "ayodhya-to-kanpur-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Kanpur",
    distance: 230,
    duration: "5 Hours",
    description: "Convenient travel for groups heading to Kanpur.",
    highlights: ["Comfort seats", "Affordable fares", "Safe drivers"],
    faqs: [],
  },
  {
    id: "ayu-agr",
    slug: "ayodhya-to-agra-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Agra",
    distance: 450,
    duration: "8 Hours",
    description:
      "Travel comfortably from Ayodhya to Agra for sightseeing trips.",
    highlights: ["Long distance comfort", "Luggage space", "Expert drivers"],
    faqs: [],
  },
  {
    id: "ayu-dlh",
    slug: "ayodhya-to-delhi-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Delhi",
    distance: 650,
    duration: "11 Hours",
    description: "Reliable group travel service from Ayodhya to Delhi.",
    highlights: ["Highway experts", "Safe night travel", "Spacious seating"],
    faqs: [],
  },
  {
    id: "ayu-mir",
    slug: "ayodhya-to-mirzapur-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Mirzapur",
    distance: 260,
    duration: "5.5 Hours",
    description: "Easy group trip from Ayodhya to Mirzapur.",
    highlights: ["AC vehicles", "Budget rides", "Safe journey"],
    faqs: [],
  },
  {
    id: "ayu-son",
    slug: "ayodhya-to-sonbhadra-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Sonbhadra",
    distance: 300,
    duration: "6.5 Hours",
    description: "Comfortable long-distance travel to Sonbhadra.",
    highlights: ["Hill route experts", "Smooth journey", "Spacious seats"],
    faqs: [],
  },
  {
    id: "ayu-azm",
    slug: "ayodhya-to-azamgarh-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Azamgarh",
    distance: 120,
    duration: "2.5 Hours",
    description: "Short and comfortable rides from Ayodhya.",
    highlights: ["Quick ride", "Low fares", "Doorstep pickup"],
    faqs: [],
  },

  {
    id: "ayu-blr",
    slug: "ayodhya-to-ballia-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Ballia",
    distance: 190,
    duration: "4 Hours",
    description: "Safe and affordable group travel to Ballia.",
    highlights: ["Clean vehicles", "Affordable", "Safe drivers"],
    faqs: [],
  },
  {
    id: "ayu-deo",
    slug: "ayodhya-to-deoria-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Deoria",
    distance: 180,
    duration: "3.5 Hours",
    description: "Comfortable ride options for Deoria route.",
    highlights: ["AC options", "On-time", "Budget friendly"],
    faqs: [],
  },
  {
    id: "ayu-ghz",
    slug: "ayodhya-to-ghazipur-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Ghazipur",
    distance: 210,
    duration: "4.5 Hours",
    description: "Group travel made easy from Ayodhya.",
    highlights: ["Comfort ride", "Safe journey", "Expert drivers"],
    faqs: [],
  },
  {
    id: "ayu-jnp",
    slug: "ayodhya-to-jaunpur-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Jaunpur",
    distance: 150,
    duration: "3 Hours",
    description: "Enjoy smooth travel between Ayodhya and Jaunpur.",
    highlights: ["Fast travel", "AC buses", "Low cost"],
    faqs: [],
  },
  {
    id: "ayu-sln",
    slug: "ayodhya-to-sultanpur-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Sultanpur",
    distance: 70,
    duration: "1.5 Hours",
    description: "Quick and easy travel for short trips.",
    highlights: ["Short distance", "Budget ride", "Quick booking"],
    faqs: [],
  },
  {
    id: "ayu-brb",
    slug: "ayodhya-to-barabanki-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Barabanki",
    distance: 110,
    duration: "2.5 Hours",
    description: "Reliable tempo traveller service.",
    highlights: ["Safe ride", "Comfort seats", "Affordable"],
    faqs: [],
  },
  {
    id: "ayu-fzb",
    slug: "ayodhya-to-faizabad-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Faizabad",
    distance: 10,
    duration: "30 mins",
    description: "Local travel service for city rides.",
    highlights: ["Local service", "Quick ride", "Low fare"],
    faqs: [],
  },
  {
    id: "ayu-bst",
    slug: "ayodhya-to-basti-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Basti",
    distance: 100,
    duration: "2 Hours",
    description: "Smooth travel for Ayodhya to Basti route.",
    highlights: ["Fast travel", "Comfort ride", "Safe"],
    faqs: [],
  },
  {
    id: "ayu-sdd",
    slug: "ayodhya-to-siddharthnagar-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Siddharthnagar",
    distance: 200,
    duration: "4 Hours",
    description: "Group travel to Siddharthnagar with ease.",
    highlights: ["Pilgrim route", "Comfortable", "Reliable"],
    faqs: [],
  },
  {
    id: "ayu-shr",
    slug: "ayodhya-to-shravasti-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Shravasti",
    distance: 160,
    duration: "3.5 Hours",
    description: "Spiritual journey from Ayodhya.",
    highlights: ["Pilgrim special", "AC vehicles", "Safe"],
    faqs: [],
  },

  {
    id: "ayu-lmp",
    slug: "ayodhya-to-lakhimpur-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Lakhimpur",
    distance: 220,
    duration: "5 Hours",
    description: "Long-distance group rides with comfort.",
    highlights: ["Spacious", "Safe", "Affordable"],
    faqs: [],
  },
  {
    id: "ayu-bly",
    slug: "ayodhya-to-bareilly-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Bareilly",
    distance: 350,
    duration: "7 Hours",
    description: "Convenient travel for groups heading to Bareilly.",
    highlights: ["Highway experts", "Comfort ride", "Safe"],
    faqs: [],
  },
  {
    id: "ayu-mrt",
    slug: "ayodhya-to-meerut-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Meerut",
    distance: 600,
    duration: "10 Hours",
    description: "Reliable long-distance travel service.",
    highlights: ["Night travel", "Comfortable", "Spacious"],
    faqs: [],
  },
  {
    id: "ayu-sre",
    slug: "ayodhya-to-saharanpur-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Saharanpur",
    distance: 700,
    duration: "12 Hours",
    description: "Long route travel with comfort and safety.",
    highlights: ["Experienced drivers", "Safe", "Comfort"],
    faqs: [],
  },
  {
    id: "ayu-hrd",
    slug: "ayodhya-to-haridwar-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Haridwar",
    distance: 720,
    duration: "13 Hours",
    description: "Pilgrimage travel from Ayodhya to Haridwar.",
    highlights: ["Pilgrim special", "Safe journey", "Comfort ride"],
    faqs: [],
  },
  {
    id: "ayu-rke",
    slug: "ayodhya-to-roorkee-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Roorkee",
    distance: 710,
    duration: "12.5 Hours",
    description: "Comfortable group travel for long journeys.",
    highlights: ["AC vehicles", "Safe drivers", "Spacious"],
    faqs: [],
  },
  {
    id: "ayu-ddn",
    slug: "ayodhya-to-dehradun-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Dehradun",
    distance: 750,
    duration: "13.5 Hours",
    description: "Travel to Dehradun with ease and comfort.",
    highlights: ["Hill experts", "Safe ride", "Comfort"],
    faqs: [],
  },
  {
    id: "ayu-npl",
    slug: "ayodhya-to-nepal-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Nepal Border",
    distance: 250,
    duration: "5.5 Hours",
    description: "Cross-border travel service from Ayodhya.",
    highlights: ["Border experts", "Safe travel", "Comfort"],
    faqs: [],
  },
  {
    id: "ayu-rbl",
    slug: "ayodhya-to-raebareli-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Raebareli",
    distance: 130,
    duration: "3 Hours",
    description: "Convenient ride from Ayodhya to Raebareli.",
    highlights: ["Quick travel", "Affordable", "Safe"],
    faqs: [],
  },
  {
    id: "vns-ctk",
    slug: "varanasi-to-chitrakoot-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Chitrakoot",
    distance: 270,
    duration: "6 Hours",
    description:
      "Tempo traveller service from Varanasi to Chitrakoot for spiritual and Ramayana circuit travel.",

    highlights: ["Religious Circuit", "Scenic Route", "Comfort Travel"],

    faqs: [
      {
        question: "Travel time?",
        answer: "Around 6 hours.",
      },
    ],

    tollEstimate: 300,
  },
  {
    id: "ayu-alg",
    slug: "ayodhya-to-aligarh-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Aligarh",
    distance: 550,
    duration: "9.5 Hours",
    description: "Comfortable group travel from Ayodhya to Aligarh.",
    highlights: ["Spacious seats", "Safe journey", "Affordable fares"],
    faqs: [],
  },
  {
    id: "ayu-fbd",
    slug: "ayodhya-to-faridabad-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Faridabad",
    distance: 680,
    duration: "11.5 Hours",
    description: "Reliable long-distance travel for families and groups.",
    highlights: ["Highway experts", "Comfort ride", "On-time pickup"],
    faqs: [],
  },
  {
    id: "ayu-gzb",
    slug: "ayodhya-to-ghaziabad-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Ghaziabad",
    distance: 650,
    duration: "11 Hours",
    description: "Easy group travel service from Ayodhya to Ghaziabad.",
    highlights: ["AC vehicles", "Safe drivers", "Budget friendly"],
    faqs: [],
  },
  {
    id: "ayu-nod",
    slug: "ayodhya-to-noida-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Noida",
    distance: 660,
    duration: "11 Hours",
    description: "Smooth and safe ride from Ayodhya to Noida.",
    highlights: ["Corporate travel", "Comfortable seats", "Reliable"],
    faqs: [],
  },
  {
    id: "ayu-grg",
    slug: "ayodhya-to-gurgaon-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Gurgaon",
    distance: 690,
    duration: "12 Hours",
    description: "Convenient travel option for Ayodhya to Gurgaon route.",
    highlights: ["Luxury options", "Safe travel", "Experienced drivers"],
    faqs: [],
  },
  {
    id: "ayu-jhs",
    slug: "ayodhya-to-jhansi-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Jhansi",
    distance: 400,
    duration: "7.5 Hours",
    description: "Comfortable group travel from Ayodhya to Jhansi.",
    highlights: ["Long distance comfort", "Affordable", "Safe"],
    faqs: [],
  },
  {
    id: "ayu-gwl",
    slug: "ayodhya-to-gwalior-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Gwalior",
    distance: 420,
    duration: "8 Hours",
    description: "Smooth and reliable ride to Gwalior.",
    highlights: ["Clean vehicles", "Expert drivers", "Comfort ride"],
    faqs: [],
  },
  {
    id: "ayu-bpl",
    slug: "ayodhya-to-bhopal-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Bhopal",
    distance: 650,
    duration: "12 Hours",
    description: "Long-distance group travel with full comfort.",
    highlights: ["AC vehicles", "Safe travel", "Spacious seating"],
    faqs: [],
  },
  {
    id: "ayu-ind",
    slug: "ayodhya-to-indore-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Indore",
    distance: 800,
    duration: "14 Hours",
    description: "Reliable travel option for Ayodhya to Indore route.",
    highlights: ["Luxury options", "Comfort ride", "Safe journey"],
    faqs: [],
  },
  {
    id: "ayu-jbp",
    slug: "ayodhya-to-jabalpur-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Jabalpur",
    distance: 500,
    duration: "10 Hours",
    description: "Comfortable long journey to Jabalpur.",
    highlights: ["Safe drivers", "Spacious seats", "Affordable"],
    faqs: [],
  },

  {
    id: "ayu-ptn",
    slug: "ayodhya-to-patna-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Patna",
    distance: 300,
    duration: "6 Hours",
    description: "Easy travel from Ayodhya to Patna for groups.",
    highlights: ["Fast travel", "Budget friendly", "Comfort"],
    faqs: [],
  },
  {
    id: "ayu-gya",
    slug: "ayodhya-to-gaya-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Gaya",
    distance: 350,
    duration: "7 Hours",
    description: "Pilgrimage and tourist travel made easy.",
    highlights: ["Pilgrim route", "Safe travel", "Comfort ride"],
    faqs: [],
  },
  {
    id: "ayu-dhn",
    slug: "ayodhya-to-dhanbad-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Dhanbad",
    distance: 500,
    duration: "10 Hours",
    description: "Convenient travel service to Dhanbad.",
    highlights: ["Long distance comfort", "Safe", "Affordable"],
    faqs: [],
  },
  {
    id: "ayu-rnc",
    slug: "ayodhya-to-ranchi-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Ranchi",
    distance: 600,
    duration: "11 Hours",
    description: "Smooth group travel experience to Ranchi.",
    highlights: ["Comfort seats", "Safe drivers", "Reliable"],
    faqs: [],
  },
  {
    id: "ayu-kol",
    slug: "ayodhya-to-kolkata-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Kolkata",
    distance: 900,
    duration: "16 Hours",
    description: "Long route travel with complete comfort and safety.",
    highlights: ["Luxury travel", "Experienced drivers", "Safe"],
    faqs: [],
  },
  {
    id: "ayu-viz",
    slug: "ayodhya-to-varanasi-airport-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Varanasi Airport",
    distance: 240,
    duration: "5 Hours",
    description: "Airport transfer service from Ayodhya to Varanasi Airport.",
    highlights: ["On-time pickup", "Airport service", "Comfort ride"],
    faqs: [],
  },
  {
    id: "ayu-lka",
    slug: "ayodhya-to-lucknow-airport-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Lucknow Airport",
    distance: 140,
    duration: "2.5 Hours",
    description: "Reliable airport transfer for groups and families.",
    highlights: ["On-time service", "Safe", "Comfort"],
    faqs: [],
  },
  {
    id: "ayu-prg",
    slug: "ayodhya-to-prayagraj-airport-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Prayagraj Airport",
    distance: 175,
    duration: "3.5 Hours",
    description: "Convenient airport drop and pickup service.",
    highlights: ["Airport transfer", "Reliable", "Comfort ride"],
    faqs: [],
  },
  {
    id: "ayu-gkp-air",
    slug: "ayodhya-to-gorakhpur-airport-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Gorakhpur Airport",
    distance: 145,
    duration: "3 Hours",
    description: "Smooth airport travel from Ayodhya.",
    highlights: ["Quick travel", "Safe", "Affordable"],
    faqs: [],
  },
  {
    id: "ayu-dlh-air",
    slug: "ayodhya-to-delhi-airport-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Delhi Airport",
    distance: 660,
    duration: "11.5 Hours",
    description: "Long-distance airport transfer service.",
    highlights: ["Airport service", "Comfort ride", "Safe journey"],
    faqs: [],
  },
].map((route) => ({
  ...route,
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(route.origin)}+to+${encodeURIComponent(
    route.destination,
  )}&output=embed`,
  faqs:
    route.faqs && route.faqs.length >= 10
      ? route.faqs
      : [
          ...(route.faqs || []),
          ...generateRouteFaqs(
            route.origin,
            route.destination,
            route.distance,
            route.duration,
          ),
        ].slice(0, 10),
}));

ROUTES.forEach(addMediaToRoute);

export const calculateFare = (distance: number, rate: number) => {
  const base = distance * 2 * rate;
  const surcharge = 500; // Flat service fee for tempo traveller
  return Math.round(base + surcharge);
};
