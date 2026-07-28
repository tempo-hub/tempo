import { generateRouteFaqs, GLOBAL_FAQS } from "./faq-data";
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
  tehsils?: string[];
  category?:
    | "regular"
    | "uttarakhand"
    | "madhyapradesh"
    | "rajasthan"
    | "bihar"
    | "delhi-NCR"
    | "himachal-pradesh"
    | "kolkata";

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

  route.faqs = [...GLOBAL_FAQS];

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
    stopovers: getStopovers(),
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

function getStopovers() {
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

export const getCalculatedDistance = (distance: number) => {
  return distance < 250 ? 250 : distance;
};

export function getPricingDetails(distance: number, isSameDay: boolean = true) {
  const perKmRateMin = 18;
  const perKmRateMax = 35;

  const calculatedDistance = getCalculatedDistance(distance);

  const baseFareMin = calculatedDistance * 2 * perKmRateMin + 500;
  const baseFareMax = calculatedDistance * 2 * perKmRateMax + 500;

  return {
    perKmRateDescription: `₹${perKmRateMin}-${perKmRateMax}/km (diesel + driver) – perfect for ${calculatedDistance} km journey`,

    nightHaltAllowance: isSameDay
      ? "Not needed for same day return"
      : "₹800-₹1500 (depends on driver stay)",

    statePermitCost: "Included in round trip fare",

    parkingCharges: "Free parking at most temples and tourist spots",

    tollCharges: estimateToll(calculatedDistance),

    includedFree: [
      "Driver charges for 10 hours",
      "Basic insurance coverage",
      "State taxes & permits",
      "Parking at temples (up to 2 hours)",
    ],

    whyPerKmBetter: `For ${calculatedDistance} km journey, per-km pricing saves up to 30-40% compared to fixed rental rates.`,

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
    tollEstimate: 400,
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
    tollEstimate: 100,
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
    tollEstimate: 300,
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
    tollEstimate: 400,
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
    tollEstimate: 300,
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
    tollEstimate: 1500,
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
    tollEstimate: 600,
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
    tollEstimate: 700,
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
    tollEstimate: 1600,
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
    tollEstimate: 850,
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

  // ================= UTTARAKHAND ROUTES FROM VARANASI =================
  {
    id: "vns-ddn",
    slug: "varanasi-to-dehradun-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Dehradun",
    distance: 820,
    duration: "15 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Dehradun. Covers tehsils: Dehradun, Rishikesh, Vikasnagar, Doiwala.",
    highlights: [
      "Hill Travel",
      "Scenic Route",
      "Experienced Drivers",
      "Group Friendly",
      "Comfortable Seating",
    ],
    tehsils: ["Dehradun", "Rishikesh", "Vikasnagar", "Doiwala"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Dehradun?",
        answer:
          "It takes around 15 hours depending on traffic and road conditions.",
      },
      {
        question: "Is overnight travel recommended?",
        answer:
          "Yes, overnight travel is recommended to reach Dehradun early morning.",
      },
    ],
    tollEstimate: 1500,
  },
  {
    id: "vns-hrw",
    slug: "varanasi-to-haridwar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Haridwar",
    distance: 900,
    duration: "15.5 Hours",
    description:
      "Affordable tempo traveller service from Varanasi to Haridwar. Covers tehsils: Haridwar, Roorkee, Laksar, Bhagwanpur.",
    highlights: [
      "Pilgrimage Route",
      "Ganga Aarti",
      "Comfort Travel",
      "Safe Ride",
      "Reliable Service",
    ],
    tehsils: ["Haridwar", "Roorkee", "Laksar", "Bhagwanpur"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Haridwar?",
        answer:
          "It takes around 15.5 hours depending on traffic and road conditions.",
      },
      {
        question: "Is overnight travel available?",
        answer: "Yes, overnight travel is available with experienced drivers.",
      },
    ],
    tollEstimate: 1700,
  },
  {
    id: "vns-rsk",
    slug: "varanasi-to-rishikesh-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Rishikesh",
    distance: 850,
    duration: "14.5 Hours",
    description:
      "Cheapest tempo traveller from Varanasi to Rishikesh. Covers tehsils: Rishikesh, Dehradun, Kalsi.",
    highlights: [
      "Yoga Capital",
      "Ganga Aarti",
      "Adventure Activities",
      "Comfort Ride",
      "Group Friendly",
    ],
    tehsils: ["Rishikesh", "Dehradun", "Kalsi"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Rishikesh?",
        answer:
          "It takes around 14.5 hours depending on traffic and road conditions.",
      },
      {
        question: "Can we do river rafting in Rishikesh?",
        answer:
          "Yes, Rishikesh is famous for river rafting and adventure sports.",
      },
    ],
    tollEstimate: 1550,
  },
  {
    id: "vns-nnl",
    slug: "varanasi-to-nainital-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Nainital",
    distance: 700,
    duration: "13 Hours",
    description:
      "Affordable tempo traveller from Varanasi to Nainital. Covers tehsils: Nainital, Haldwani, Ramnagar, Kaladhungi.",
    highlights: [
      "Hill Station",
      "Naini Lake",
      "Boating",
      "Comfort Travel",
      "Scenic Views",
    ],
    tehsils: ["Nainital", "Haldwani", "Ramnagar", "Kaladhungi"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Nainital?",
        answer:
          "It takes around 13 hours depending on traffic and road conditions.",
      },
      {
        question: "Is Nainital good for a family trip?",
        answer:
          "Yes, Nainital is perfect for family vacations with beautiful lakes and hills.",
      },
    ],
    tollEstimate: 1300,
  },
  {
    id: "vns-mus",
    slug: "varanasi-to-mussoorie-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Mussoorie",
    distance: 850,
    duration: "15.5 Hours",
    description:
      "Cheapest tempo traveller from Varanasi to Mussoorie. Covers tehsils: Dehradun, Dhanaulti, Landour.",
    highlights: [
      "Queen of Hills",
      "Mall Road",
      "Kempty Falls",
      "Scenic Route",
      "Comfort Ride",
    ],
    tehsils: ["Dehradun", "Dhanaulti", "Landour"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Mussoorie?",
        answer:
          "It takes around 15.5 hours depending on traffic and road conditions.",
      },
      {
        question: "What is the best time to visit Mussoorie?",
        answer:
          "Summer (March to June) and Winter (December to February) are best.",
      },
    ],
    tollEstimate: 1600,
  },
  {
    id: "vns-hldw",
    slug: "varanasi-to-haldwani-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Haldwani",
    distance: 680,
    duration: "12.5 Hours",
    description:
      "Affordable tempo traveller from Varanasi to Haldwani. Covers tehsils: Haldwani, Nainital, Kaladhungi, Betalghat.",
    highlights: [
      "Gateway to Kumaon",
      "Commercial Hub",
      "Comfort Travel",
      "Safe Ride",
      "Budget Friendly",
    ],
    tehsils: ["Haldwani", "Nainital", "Kaladhungi", "Betalghat"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Haldwani?",
        answer:
          "It takes around 12.5 hours depending on traffic and road conditions.",
      },
      {
        question: "Is Haldwani a good stopover?",
        answer:
          "Yes, Haldwani is a great stopover before heading to Nainital and other hill stations.",
      },
    ],
    tollEstimate: 1250,
  },
  {
    id: "vns-rdr",
    slug: "varanasi-to-rudrapur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Rudrapur",
    distance: 650,
    duration: "12 Hours",
    description:
      "Cheapest tempo traveller from Varanasi to Rudrapur. Covers tehsils: Rudrapur, Kichha, Gadarpur, Kashipur.",
    highlights: [
      "Industrial Hub",
      "Comfort Ride",
      "Safe Travel",
      "Affordable Pricing",
      "Group Friendly",
    ],
    tehsils: ["Rudrapur", "Kichha", "Gadarpur", "Kashipur"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Rudrapur?",
        answer:
          "It takes around 12 hours depending on traffic and road conditions.",
      },
    ],
    tollEstimate: 1200,
  },
  {
    id: "vns-ksp",
    slug: "varanasi-to-kashipur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kashipur",
    distance: 620,
    duration: "11.5 Hours",
    description:
      "Affordable tempo traveller from Varanasi to Kashipur. Covers tehsils: Kashipur, Jaspur, Bajpur, Kichha.",
    highlights: [
      "Industrial City",
      "Educational Hub",
      "Comfort Travel",
      "Safe Ride",
      "Budget Friendly",
    ],
    tehsils: ["Kashipur", "Jaspur", "Bajpur", "Kichha"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Kashipur?",
        answer:
          "It takes around 11.5 hours depending on traffic and road conditions.",
      },
    ],
    tollEstimate: 1150,
  },
  {
    id: "vns-alm",
    slug: "varanasi-to-almora-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Almora",
    distance: 750,
    duration: "14 Hours",
    description:
      "Cheapest tempo traveller from Varanasi to Almora. Covers tehsils: Almora, Ranikhet, Dwarahat, Someshwar.",
    highlights: [
      "Cultural Heritage",
      "Scenic Hills",
      "Kasar Devi Temple",
      "Comfort Ride",
      "Experienced Drivers",
    ],
    tehsils: ["Almora", "Ranikhet", "Dwarahat", "Someshwar"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Almora?",
        answer:
          "It takes around 14 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Almora famous for?",
        answer:
          "Almora is famous for its cultural heritage, scenic beauty, and Kasar Devi Temple.",
      },
    ],
    tollEstimate: 1400,
  },
  {
    id: "vns-ptg",
    slug: "varanasi-to-pithoragarh-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Pithoragarh",
    distance: 850,
    duration: "16 Hours",
    description:
      "Affordable tempo traveller from Varanasi to Pithoragarh. Covers tehsils: Pithoragarh, Didihat, Gangolihat, Berinag.",
    highlights: [
      "Himalayan Views",
      "Offbeat Destination",
      "Scenic Route",
      "Comfort Travel",
      "Group Friendly",
    ],
    tehsils: ["Pithoragarh", "Didihat", "Gangolihat", "Berinag"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Pithoragarh?",
        answer:
          "It takes around 16 hours depending on traffic and road conditions.",
      },
    ],
    tollEstimate: 1600,
  },
  {
    id: "vns-jos",
    slug: "varanasi-to-joshimath-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Joshimath",
    distance: 950,
    duration: "18 Hours",
    description:
      "Cheapest tempo traveller from Varanasi to Joshimath. Covers tehsils: Joshimath, Chamoli, Karnaprayag, Badrinath.",
    highlights: [
      "Badrinath Route",
      "Himalayan Adventure",
      "Auli Skiing",
      "Comfort Ride",
      "Pilgrimage Stop",
    ],
    tehsils: ["Joshimath", "Chamoli", "Karnaprayag", "Badrinath"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Joshimath?",
        answer:
          "It takes around 18 hours depending on traffic and road conditions.",
      },
      {
        question: "Is Joshimath a stopover for Badrinath?",
        answer: "Yes, Joshimath is the gateway to Badrinath and Auli.",
      },
    ],
    tollEstimate: 1800,
  },
  {
    id: "vns-ktw",
    slug: "varanasi-to-kotdwar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kotdwar",
    distance: 750,
    duration: "14 Hours",
    description:
      "Affordable tempo traveller from Varanasi to Kotdwar. Covers tehsils: Kotdwar, Lansdowne, Pauri, Satpuli.",
    highlights: [
      "Garhwal Region",
      "Scenic Route",
      "Lansdowne View",
      "Comfort Travel",
      "Budget Friendly",
    ],
    tehsils: ["Kotdwar", "Lansdowne", "Pauri", "Satpuli"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Kotdwar?",
        answer:
          "It takes around 14 hours depending on traffic and road conditions.",
      },
    ],
    tollEstimate: 1400,
  },

  // ================= MADHYA PRADESH ROUTES FROM VARANASI =================
  {
    id: "vns-bpl",
    slug: "varanasi-to-bhopal-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bhopal",
    distance: 720,
    duration: "13 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Bhopal. Covers tehsils: Bhopal, Huzur, Berasia, Phanda.",
    highlights: [
      "City of Lakes",
      "Capital City",
      "Comfort Ride",
      "Safe Travel",
      "Group Friendly",
    ],
    tehsils: ["Bhopal", "Huzur", "Berasia", "Phanda"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Bhopal?",
        answer:
          "It takes around 13 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Bhopal famous for?",
        answer:
          "Bhopal is famous for its lakes, Upper Lake, Lower Lake, and Taj-ul-Masjid.",
      },
    ],
    tollEstimate: 1300,
  },
  {
    id: "vns-idr",
    slug: "varanasi-to-indore-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Indore",
    distance: 850,
    duration: "15 Hours",
    description:
      "Affordable tempo traveller from Varanasi to Indore. Covers tehsils: Indore, Mhow, Depalpur, Sanwer.",
    highlights: [
      "Commercial Capital",
      "Cleanest City",
      "Food Capital",
      "Comfort Travel",
      "Budget Friendly",
    ],
    tehsils: ["Indore", "Mhow", "Depalpur", "Sanwer"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Indore?",
        answer:
          "It takes around 15 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Indore famous for?",
        answer:
          "Indore is famous for its street food, Sarafa Bazar, and Rajwada Palace.",
      },
    ],
    tollEstimate: 1550,
  },
  {
    id: "vns-jbp",
    slug: "varanasi-to-jabalpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jabalpur",
    distance: 420,
    duration: "9 Hours",
    description:
      "Cheapest tempo traveller from Varanasi to Jabalpur. Covers tehsils: Jabalpur, Panagar, Sihora, Patan.",
    highlights: [
      "Marble Rocks",
      "Narmada River",
      "Bhedaghat",
      "Comfort Ride",
      "Scenic Views",
    ],
    tehsils: ["Jabalpur", "Panagar", "Sihora", "Patan"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Jabalpur?",
        answer:
          "It takes around 9 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Jabalpur famous for?",
        answer:
          "Jabalpur is famous for Marble Rocks at Bhedaghat and Dhuandhar Falls.",
      },
    ],
    tollEstimate: 750,
  },
  {
    id: "vns-gwl",
    slug: "varanasi-to-gwalior-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Gwalior",
    distance: 550,
    duration: "10 Hours",
    description:
      "Affordable tempo traveller from Varanasi to Gwalior. Covers tehsils: Gwalior, Dabra, Bhitarwar, Morar.",
    highlights: [
      "Gwalior Fort",
      "Scindia Heritage",
      "Tansen Tomb",
      "Comfort Travel",
      "Safe Ride",
    ],
    tehsils: ["Gwalior", "Dabra", "Bhitarwar", "Morar"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Gwalior?",
        answer:
          "It takes around 10 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Gwalior famous for?",
        answer:
          "Gwalior is famous for Gwalior Fort, Jai Vilas Palace, and Tansen's Tomb.",
      },
    ],
    tollEstimate: 950,
  },
  {
    id: "vns-ujn",
    slug: "varanasi-to-ujjain-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Ujjain",
    distance: 780,
    duration: "14 Hours",
    description:
      "Cheapest tempo traveller from Varanasi to Ujjain. Covers tehsils: Ujjain, Mahidpur, Tarana, Ghatiya.",
    highlights: [
      "Mahakaleshwar Jyotirlinga",
      "Simhastha Kumbh",
      "Pilgrimage",
      "Comfort Ride",
      "Safe Travel",
    ],
    tehsils: ["Ujjain", "Mahidpur", "Tarana", "Ghatiya"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Ujjain?",
        answer:
          "It takes around 14 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Ujjain famous for?",
        answer:
          "Ujjain is famous for Mahakaleshwar Jyotirlinga, one of the 12 Jyotirlingas.",
      },
    ],
    tollEstimate: 1400,
  },
  {
    id: "vns-rwa",
    slug: "varanasi-to-rewa-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Rewa",
    distance: 260,
    duration: "6 Hours",
    description:
      "Affordable tempo traveller from Varanasi to Rewa. Covers tehsils: Rewa, Mauganj, Sirmaur, Teonthar.",
    highlights: [
      "White Tiger Safari",
      "Govindgarh Palace",
      "Vindhya Range",
      "Comfort Travel",
      "Budget Friendly",
    ],
    tehsils: ["Rewa", "Mauganj", "Sirmaur", "Teonthar"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Rewa?",
        answer:
          "It takes around 6 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Rewa famous for?",
        answer: "Rewa is famous for White Tiger Safari and Govindgarh Palace.",
      },
    ],
    tollEstimate: 400,
  },
  {
    id: "vns-stn",
    slug: "varanasi-to-satna-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Satna",
    distance: 280,
    duration: "6.5 Hours",
    description:
      "Cheapest tempo traveller from Varanasi to Satna. Covers tehsils: Satna, Nagod, Ramnagar, Maihar.",
    highlights: [
      "Maihar Devi Temple",
      "Cement City",
      "Comfort Ride",
      "Safe Travel",
      "Pilgrimage Route",
    ],
    tehsils: ["Satna", "Nagod", "Ramnagar", "Maihar"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Satna?",
        answer:
          "It takes around 6.5 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Satna famous for?",
        answer: "Satna is famous for Maihar Devi Temple and cement industry.",
      },
    ],
    tollEstimate: 450,
  },
  {
    id: "vns-kti",
    slug: "varanasi-to-katni-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Katni",
    distance: 380,
    duration: "8 Hours",
    description:
      "Affordable tempo traveller from Varanasi to Katni. Covers tehsils: Katni, Barhi, Vijayraghavgarh, Bahoriband.",
    highlights: [
      "Railway Junction",
      "Marble City",
      "Comfort Travel",
      "Safe Ride",
      "Budget Friendly",
    ],
    tehsils: ["Katni", "Barhi", "Vijayraghavgarh", "Bahoriband"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Katni?",
        answer:
          "It takes around 8 hours depending on traffic and road conditions.",
      },
    ],
    tollEstimate: 650,
  },
  {
    id: "vns-sgr",
    slug: "varanasi-to-sagar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Sagar",
    distance: 500,
    duration: "10 Hours",
    description:
      "Cheapest tempo traveller from Varanasi to Sagar. Covers tehsils: Sagar, Rehli, Banda, Deori.",
    highlights: [
      "Rajharshi Lake",
      "University Town",
      "Comfort Ride",
      "Safe Travel",
      "Group Friendly",
    ],
    tehsils: ["Sagar", "Rehli", "Banda", "Deori"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Sagar?",
        answer:
          "It takes around 10 hours depending on traffic and road conditions.",
      },
    ],
    tollEstimate: 850,
  },
  {
    id: "vns-dew",
    slug: "varanasi-to-dewas-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Dewas",
    distance: 820,
    duration: "14.5 Hours",
    description:
      "Affordable tempo traveller from Varanasi to Dewas. Covers tehsils: Dewas, Kannod, Sonkatch, Khategaon.",
    highlights: [
      "Industrial City",
      "Devi Vindhyavasini Temple",
      "Comfort Travel",
      "Safe Ride",
      "Budget Friendly",
    ],
    tehsils: ["Dewas", "Kannod", "Sonkatch", "Khategaon"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Dewas?",
        answer:
          "It takes around 14.5 hours depending on traffic and road conditions.",
      },
    ],
    tollEstimate: 1500,
  },
  {
    id: "vns-kjr",
    slug: "varanasi-to-khajuraho-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Khajuraho",
    distance: 420,
    duration: "9 Hours",
    description:
      "Cheapest tempo traveller from Varanasi to Khajuraho. Covers tehsils: Chhatarpur, Bijawar, Bada Malhera, Gaurihar.",
    highlights: [
      "UNESCO World Heritage",
      "Temple City",
      "Kandariya Mahadev",
      "Comfort Ride",
      "Cultural Tour",
    ],
    tehsils: ["Chhatarpur", "Bijawar", "Bada Malhera", "Gaurihar"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Khajuraho?",
        answer:
          "It takes around 9 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Khajuraho famous for?",
        answer:
          "Khajuraho is famous for its UNESCO World Heritage temples with intricate carvings.",
      },
    ],
    tollEstimate: 750,
  },
  {
    id: "vns-chw",
    slug: "varanasi-to-chhindwara-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Chhindwara",
    distance: 650,
    duration: "12 Hours",
    description:
      "Affordable tempo traveller from Varanasi to Chhindwara. Covers tehsils: Chhindwara, Sausar, Parasia, Mohkhed.",
    highlights: [
      "Tribal District",
      "Cotton City",
      "Patalkot Valley",
      "Comfort Travel",
      "Safe Ride",
    ],
    tehsils: ["Chhindwara", "Sausar", "Parasia", "Mohkhed"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Chhindwara?",
        answer:
          "It takes around 12 hours depending on traffic and road conditions.",
      },
    ],
    tollEstimate: 1150,
  },
  {
    id: "vns-bur",
    slug: "varanasi-to-burhanpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Burhanpur",
    distance: 880,
    duration: "16 Hours",
    description:
      "Cheapest tempo traveller from Varanasi to Burhanpur. Covers tehsils: Burhanpur, Nepanagar, Shahpur, Bhikangaon.",
    highlights: [
      "Historical City",
      "Tapti River",
      "Shahi Qila",
      "Comfort Travel",
      "Group Friendly",
    ],
    tehsils: ["Burhanpur", "Nepanagar", "Shahpur", "Bhikangaon"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Burhanpur?",
        answer:
          "It takes around 16 hours depending on traffic and road conditions.",
      },
    ],
    tollEstimate: 1600,
  },
  {
    id: "vns-svp",
    slug: "varanasi-to-shivpuri-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Shivpuri",
    distance: 600,
    duration: "11 Hours",
    description:
      "Affordable tempo traveller from Varanasi to Shivpuri. Covers tehsils: Shivpuri, Kolaras, Narwar, Pichhore.",
    highlights: [
      "George Castle",
      "Madhav National Park",
      "Chhatris",
      "Comfort Travel",
      "Safe Ride",
    ],
    tehsils: ["Shivpuri", "Kolaras", "Narwar", "Pichhore"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Shivpuri?",
        answer:
          "It takes around 11 hours depending on traffic and road conditions.",
      },
    ],
    tollEstimate: 1050,
  },
  {
    id: "vns-rtl",
    slug: "varanasi-to-ratlam-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Ratlam",
    distance: 880,
    duration: "16 Hours",
    description:
      "Cheapest tempo traveller from Varanasi to Ratlam. Covers tehsils: Ratlam, Sailana, Tal, Piploda.",
    highlights: [
      "Malwa Region",
      "Golden Tobacco",
      "Ratlami Sev",
      "Comfort Travel",
      "Safe Ride",
    ],
    tehsils: ["Ratlam", "Sailana", "Tal", "Piploda"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Ratlam?",
        answer:
          "It takes around 16 hours depending on traffic and road conditions.",
      },
    ],
    tollEstimate: 1600,
  },

  // ================= RAJASTHAN ROUTES FROM VARANASI =================
  {
    id: "vns-jai",
    slug: "varanasi-to-jaipur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jaipur",
    distance: 890,
    duration: "15 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Jaipur. Covers tehsils: Jaipur, Amber, Sanganer, Chomu, Phulera.",
    highlights: [
      "Pink City",
      "Royal Trip",
      "Safe Ride",
      "AC Travel",
      "Group Friendly",
    ],
    tehsils: ["Jaipur", "Amber", "Sanganer", "Chomu", "Phulera"],
    tollEstimate: 1800,
  },
  {
    id: "vns-jdh",
    slug: "varanasi-to-jodhpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jodhpur",
    distance: 1080,
    duration: "18 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Jodhpur. Covers tehsils: Jodhpur, Balesar, Bhopalgarh, Luni, Osian.",
    highlights: [
      "Blue City",
      "Fort Tour",
      "Comfort Ride",
      "Safe Travel",
      "Group Friendly",
    ],
    tehsils: ["Jodhpur", "Balesar", "Bhopalgarh", "Luni", "Osian"],
    tollEstimate: 2300,
  },
  {
    id: "vns-udp",
    slug: "varanasi-to-udaipur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Udaipur",
    distance: 980,
    duration: "17 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Udaipur. Covers tehsils: Girwa, Mavli, Vallabhnagar, Kherwara, Nathdwara.",
    highlights: [
      "Lake City",
      "Palace Tour",
      "Safe Ride",
      "Luxury Trip",
      "Family Friendly",
    ],
    tehsils: ["Girwa", "Mavli", "Vallabhnagar", "Kherwara", "Nathdwara"],
    tollEstimate: 2100,
  },
  {
    id: "vns-kot",
    slug: "varanasi-to-kota-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kota",
    distance: 760,
    duration: "13 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Kota. Covers tehsils: Kota, Ladpura, Sangod, Ramganj Mandi, Digod.",
    highlights: [
      "Education Hub",
      "Comfort Ride",
      "Safe Travel",
      "Budget Trip",
      "Group Friendly",
    ],
    tehsils: ["Kota", "Ladpura", "Sangod", "Ramganj Mandi", "Digod"],
    tollEstimate: 1500,
  },
  {
    id: "vns-ajm",
    slug: "varanasi-to-ajmer-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Ajmer",
    distance: 910,
    duration: "15 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Ajmer. Covers tehsils: Ajmer, Pushkar, Kishangarh, Nasirabad, Beawar.",
    highlights: [
      "Ajmer Sharif",
      "Pushkar Tour",
      "Safe Ride",
      "Comfort Travel",
      "Group Friendly",
    ],
    tehsils: ["Ajmer", "Pushkar", "Kishangarh", "Nasirabad", "Beawar"],
    tollEstimate: 1850,
  },
  {
    id: "vns-bkn",
    slug: "varanasi-to-bikaner-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bikaner",
    distance: 1180,
    duration: "20 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Bikaner. Covers tehsils: Bikaner, Nokha, Khajuwala, Lunkaransar, Kolayat.",
    highlights: [
      "Desert City",
      "Camel Culture",
      "Safe Ride",
      "Comfort Trip",
      "Group Friendly",
    ],
    tehsils: ["Bikaner", "Nokha", "Khajuwala", "Lunkaransar", "Kolayat"],
    tollEstimate: 2500,
  },
  {
    id: "vns-alw",
    slug: "varanasi-to-alwar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Alwar",
    distance: 760,
    duration: "13 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Alwar. Covers tehsils: Alwar, Rajgarh, Ramgarh, Thanagazi, Behror.",
    highlights: [
      "Historic City",
      "Nature Trip",
      "Safe Ride",
      "Comfort Travel",
      "Group Friendly",
    ],
    tehsils: ["Alwar", "Rajgarh", "Ramgarh", "Thanagazi", "Behror"],
    tollEstimate: 1550,
  },
  {
    id: "vns-brt",
    slug: "varanasi-to-bharatpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bharatpur",
    distance: 720,
    duration: "12 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Bharatpur. Covers tehsils: Bharatpur, Bayana, Weir, Nadbai, Rupbas.",
    highlights: [
      "Bird Sanctuary",
      "Nature Tour",
      "Safe Ride",
      "Comfort Travel",
      "Family Friendly",
    ],
    tehsils: ["Bharatpur", "Bayana", "Weir", "Nadbai", "Rupbas"],
    tollEstimate: 1450,
  },
  {
    id: "vns-skr",
    slug: "varanasi-to-sikar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Sikar",
    distance: 900,
    duration: "15 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Sikar. Covers tehsils: Sikar, Danta Ramgarh, Fatehpur, Neem Ka Thana.",
    highlights: [
      "Shekhawati Region",
      "Safe Ride",
      "Comfort Travel",
      "Budget Trip",
      "Group Friendly",
    ],
    tehsils: ["Sikar", "Danta Ramgarh", "Fatehpur", "Neem Ka Thana"],
    tollEstimate: 1800,
  },
  {
    id: "vns-pli",
    slug: "varanasi-to-pali-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Pali",
    distance: 1030,
    duration: "17 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Pali. Covers tehsils: Pali, Sojat, Sumerpur, Bali, Desuri, Rani.",
    highlights: [
      "Industrial City",
      "Comfort Ride",
      "Safe Travel",
      "Long Trip",
      "Group Friendly",
    ],
    tehsils: ["Pali", "Sojat", "Sumerpur", "Bali", "Desuri", "Rani"],
    tollEstimate: 2200,
  },
  {
    id: "vns-mab",
    slug: "varanasi-to-mount-abu-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Mount Abu",
    distance: 1080,
    duration: "18 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Mount Abu. Covers tehsils: Abu Road, Pindwara, Sirohi, Reodar.",
    highlights: [
      "Hill Station",
      "Cool Weather",
      "Comfort Ride",
      "Safe Travel",
      "Family Friendly",
    ],
    tehsils: ["Abu Road", "Pindwara", "Sirohi", "Reodar"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Mount Abu?",
        answer:
          "It takes around 18 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Mount Abu famous for?",
        answer:
          "Mount Abu is famous for Dilwara Temples, Nakki Lake, and pleasant hill station weather.",
      },
    ],
    tollEstimate: 2300,
  },
  {
    id: "vns-jsm",
    slug: "varanasi-to-jaisalmer-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jaisalmer",
    distance: 1280,
    duration: "21 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Jaisalmer. Covers tehsils: Jaisalmer, Pokaran, Ramgarh, Fatehgarh.",
    highlights: [
      "Golden City",
      "Desert Safari",
      "Comfort Ride",
      "Safe Travel",
      "Group Friendly",
    ],
    tehsils: ["Jaisalmer", "Pokaran", "Ramgarh", "Fatehgarh"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Jaisalmer?",
        answer:
          "It takes around 21 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Jaisalmer famous for?",
        answer:
          "Jaisalmer is famous for Jaisalmer Fort, sand dunes, desert camps, and camel safari.",
      },
    ],
    tollEstimate: 2700,
  },
  {
    id: "vns-bhl",
    slug: "varanasi-to-bhilwara-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bhilwara",
    distance: 920,
    duration: "16 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Bhilwara. Covers tehsils: Bhilwara, Mandal, Asind, Shahpura, Mandalgarh.",
    highlights: [
      "Textile City",
      "Business Hub",
      "Comfort Ride",
      "Safe Travel",
      "Group Friendly",
    ],
    tehsils: ["Bhilwara", "Mandal", "Asind", "Shahpura", "Mandalgarh"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Bhilwara?",
        answer:
          "It takes around 16 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Bhilwara famous for?",
        answer:
          "Bhilwara is famous for textile industries and historic temples nearby.",
      },
    ],
    tollEstimate: 2000,
  },
  {
    id: "vns-ctg",
    slug: "varanasi-to-chittorgarh-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Chittorgarh",
    distance: 860,
    duration: "15 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Chittorgarh. Covers tehsils: Chittorgarh, Nimbahera, Kapasan, Begun.",
    highlights: [
      "Historic Fort",
      "Royal Heritage",
      "Comfort Ride",
      "Safe Travel",
      "Family Friendly",
    ],
    tehsils: ["Chittorgarh", "Nimbahera", "Kapasan", "Begun"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Chittorgarh?",
        answer:
          "It takes around 15 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Chittorgarh famous for?",
        answer:
          "Chittorgarh is famous for Chittorgarh Fort, Vijay Stambh, and Rajput history.",
      },
    ],
    tollEstimate: 1850,
  },
  {
    id: "vns-hnm",
    slug: "varanasi-to-hanumangarh-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Hanumangarh",
    distance: 980,
    duration: "17 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Hanumangarh. Covers tehsils: Hanumangarh, Nohar, Bhadra, Pilibanga.",
    highlights: [
      "Canal Region",
      "Historic Land",
      "Comfort Ride",
      "Safe Travel",
      "Group Friendly",
    ],
    tehsils: ["Hanumangarh", "Nohar", "Bhadra", "Pilibanga"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Hanumangarh?",
        answer:
          "It takes around 17 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Hanumangarh famous for?",
        answer:
          "Hanumangarh is famous for agriculture, Ghaggar region, and Kalibangan archaeological site.",
      },
    ],
    tollEstimate: 2100,
  },
  {
    id: "vns-khatu",
    slug: "varanasi-to-khatu-shyam-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Khatu Shyam Ji",
    distance: 980,
    duration: "16-18 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Khatu Shyam Ji. Ideal for family trips, religious tours, and group pilgrimages with experienced drivers and spacious seating.",
    highlights: [
      "Doorstep Pickup",
      "Experienced Drivers",
      "Outstation Permit Included",
      "Flexible Stopovers",
      "Fixed Transparent Pricing",
    ],
    tollEstimate: 1800,
  },
  {
    id: "vns-salasar",
    slug: "varanasi-to-salasar-balaji-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Salasar Balaji",
    distance: 1020,
    duration: "18 Hours",
    description:
      "Tempo traveller service from Varanasi to Salasar Balaji Temple for family pilgrimages and religious group tours.",
    highlights: [
      "Hanuman Temple",
      "Pilgrimage Tour",
      "AC Travel",
      "Group Friendly",
      "Experienced Drivers",
    ],
    tollEstimate: 2100,
  },
  {
    id: "vns-pushkar",
    slug: "varanasi-to-pushkar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Pushkar",
    distance: 940,
    duration: "16 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Pushkar for Brahma Temple darshan and Pushkar Lake visits.",
    highlights: [
      "Brahma Temple",
      "Holy Lake",
      "Pilgrimage Tour",
      "Safe Travel",
      "Family Friendly",
    ],
    tollEstimate: 1900,
  },
  {
    id: "vns-nathdwara",
    slug: "varanasi-to-nathdwara-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Nathdwara",
    distance: 1080,
    duration: "19 Hours",
    description:
      "Book a tempo traveller from Varanasi to Nathdwara for Shrinathji Temple darshan and family pilgrimage tours.",
    highlights: [
      "Shrinathji Temple",
      "Religious Tour",
      "Comfort Ride",
      "Family Travel",
      "Group Friendly",
    ],
    tollEstimate: 2300,
  },
  {
    id: "vns-ranakpur",
    slug: "varanasi-to-ranakpur-jain-temple-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Ranakpur Jain Temple",
    distance: 1150,
    duration: "20 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Ranakpur Jain Temple for religious and heritage tours.",
    highlights: [
      "Jain Pilgrimage",
      "Historic Temple",
      "Comfort Travel",
      "Family Friendly",
      "Group Tours",
    ],
    tollEstimate: 2500,
  },
  {
    id: "vns-eklingji",
    slug: "varanasi-to-eklingji-temple-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Eklingji Temple",
    distance: 1050,
    duration: "18 Hours",
    description:
      "Reliable tempo traveller service from Varanasi to Eklingji Temple near Udaipur.",
    highlights: [
      "Shiva Temple",
      "Pilgrimage Tour",
      "AC Travel",
      "Safe Ride",
      "Group Friendly",
    ],
    tollEstimate: 2200,
  },
  {
    id: "vns-amerfort",
    slug: "varanasi-to-amer-fort-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Amer Fort",
    distance: 890,
    duration: "15 Hours",
    description:
      "Book tempo traveller from Varanasi to Amer Fort for royal Rajasthan heritage tours.",
    highlights: [
      "UNESCO Site",
      "Historic Fort",
      "Royal Heritage",
      "Family Tour",
      "Comfort Ride",
    ],
    tollEstimate: 1800,
  },
  {
    id: "vns-kumbhalgarh",
    slug: "varanasi-to-kumbhalgarh-fort-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kumbhalgarh Fort",
    distance: 1120,
    duration: "19 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Kumbhalgarh Fort.",
    highlights: [
      "UNESCO Heritage",
      "Historic Fort",
      "Scenic Route",
      "Family Friendly",
      "Group Travel",
    ],
    tollEstimate: 2400,
  },
  {
    id: "vns-mehandipur",
    slug: "varanasi-to-mehandipur-balaji-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Mehandipur Balaji",
    distance: 820,
    duration: "14 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Mehandipur Balaji Temple for pilgrimage and family travel.",
    highlights: [
      "Balaji Temple",
      "Religious Tour",
      "Group Travel",
      "AC Tempo Traveller",
      "Safe Journey",
    ],
    tollEstimate: 1700,
  },
  {
    id: "vns-karni",
    slug: "varanasi-to-karni-mata-temple-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Karni Mata Temple",
    distance: 1190,
    duration: "20 Hours",
    description:
      "Book tempo traveller from Varanasi to Karni Mata Temple near Bikaner.",
    highlights: [
      "Famous Temple",
      "Pilgrimage Tour",
      "Family Friendly",
      "Comfort Ride",
      "Group Travel",
    ],
    tollEstimate: 2500,
  },
  {
    id: "vns-dilwara",
    slug: "varanasi-to-dilwara-temples-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Dilwara Temples",
    distance: 1080,
    duration: "18 Hours",
    description:
      "Travel from Varanasi to Dilwara Temples with comfortable tempo traveller services.",
    highlights: [
      "Jain Temple",
      "Historic Architecture",
      "Pilgrimage Tour",
      "Family Travel",
      "Safe Ride",
    ],
    tollEstimate: 2300,
  },
  {
    id: "vns-govinddevji",
    slug: "varanasi-to-govind-dev-ji-temple-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Govind Dev Ji Temple",
    distance: 890,
    duration: "15 Hours",
    description:
      "Comfortable pilgrimage travel from Varanasi to Govind Dev Ji Temple in Jaipur.",
    highlights: [
      "Krishna Temple",
      "Religious Tour",
      "Family Friendly",
      "AC Travel",
      "Group Tour",
    ],
    tollEstimate: 1800,
  },
  {
    id: "vns-ranthambore",
    slug: "varanasi-to-ranthambore-national-park-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Ranthambore National Park",
    distance: 820,
    duration: "14 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Ranthambore National Park.",
    highlights: [
      "Tiger Safari",
      "Wildlife Tour",
      "Nature Trip",
      "Family Friendly",
      "Group Travel",
    ],
    tollEstimate: 1700,
  },
  {
    id: "vns-sariska",
    slug: "varanasi-to-sariska-national-park-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Sariska National Park",
    distance: 790,
    duration: "13 Hours",
    description:
      "Book a tempo traveller from Varanasi to Sariska National Park for wildlife adventures.",
    highlights: [
      "Tiger Reserve",
      "Wildlife Safari",
      "Nature Tour",
      "Comfort Ride",
      "Group Friendly",
    ],
    tollEstimate: 1600,
  },
  {
    id: "vns-keoladeo",
    slug: "varanasi-to-keoladeo-national-park-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Keoladeo National Park",
    distance: 720,
    duration: "12 Hours",
    description:
      "Travel comfortably from Varanasi to Keoladeo National Park, Bharatpur.",
    highlights: [
      "Bird Sanctuary",
      "UNESCO Site",
      "Nature Tour",
      "Family Travel",
      "Comfort Ride",
    ],
    tollEstimate: 1450,
  },
  {
    id: "vns-nakki",
    slug: "varanasi-to-nakki-lake-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Nakki Lake",
    distance: 1080,
    duration: "18 Hours",
    description:
      "Comfortable group travel from Varanasi to Nakki Lake, Mount Abu.",
    highlights: [
      "Lake View",
      "Hill Station",
      "Family Trip",
      "Nature Tour",
      "Comfort Travel",
    ],
    tollEstimate: 2300,
  },
  {
    id: "vns-sam",
    slug: "varanasi-to-sam-sand-dunes-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Sam Sand Dunes",
    distance: 1320,
    duration: "22 Hours",
    description:
      "Tempo traveller service from Varanasi to Sam Sand Dunes for desert safari and camping.",
    highlights: [
      "Desert Safari",
      "Camel Ride",
      "Camping",
      "Group Travel",
      "Comfort Ride",
    ],
    tollEstimate: 2800,
  },
  {
    id: "vns-citypalace",
    slug: "varanasi-to-city-palace-udaipur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "City Palace Udaipur",
    distance: 980,
    duration: "17 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to City Palace Udaipur.",
    highlights: [
      "Royal Palace",
      "Heritage Tour",
      "Family Friendly",
      "Luxury Travel",
      "Group Tour",
    ],
    tollEstimate: 2100,
  },
  {
    id: "vns-pichola",
    slug: "varanasi-to-lake-pichola-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Lake Pichola",
    distance: 980,
    duration: "17 Hours",
    description:
      "Travel from Varanasi to Lake Pichola with comfortable tempo traveller service.",
    highlights: [
      "Lake Tour",
      "Scenic Beauty",
      "Family Trip",
      "Group Travel",
      "Comfort Ride",
    ],
    tollEstimate: 2100,
  },
  {
    id: "vns-hawamahal",
    slug: "varanasi-to-hawa-mahal-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Hawa Mahal",
    distance: 890,
    duration: "15 Hours",
    description:
      "Book a tempo traveller from Varanasi to Hawa Mahal for sightseeing and heritage tours.",
    highlights: [
      "Historic Monument",
      "Pink City",
      "Family Tour",
      "Royal Heritage",
      "Comfort Ride",
    ],
    tollEstimate: 1800,
  },
  {
    id: "vns-jantarmantar",
    slug: "varanasi-to-jantar-mantar-jaipur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jantar Mantar Jaipur",
    distance: 890,
    duration: "15 Hours",
    description: "Comfortable travel from Varanasi to Jantar Mantar Jaipur.",
    highlights: [
      "UNESCO Site",
      "Astronomical Observatory",
      "Heritage Tour",
      "Family Friendly",
      "Group Travel",
    ],
    tollEstimate: 1800,
  },
  {
    id: "vns-jaigarh",
    slug: "varanasi-to-jaigarh-fort-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jaigarh Fort",
    distance: 895,
    duration: "15 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Jaigarh Fort for heritage and sightseeing tours.",
    highlights: [
      "Historic Fort",
      "Royal Heritage",
      "Panoramic Views",
      "Family Friendly",
      "Group Travel",
    ],
    tollEstimate: 1800,
  },

  {
    id: "vns-nahargarh",
    slug: "varanasi-to-nahargarh-fort-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Nahargarh Fort",
    distance: 890,
    duration: "15 Hours",
    description:
      "Book a tempo traveller from Varanasi to Nahargarh Fort for scenic views and heritage exploration.",
    highlights: [
      "Historic Fort",
      "Sunset Point",
      "Family Tour",
      "Royal Heritage",
      "Comfort Ride",
    ],
    tollEstimate: 1800,
  },

  {
    id: "vns-jalmahal",
    slug: "varanasi-to-jal-mahal-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jal Mahal",
    distance: 890,
    duration: "15 Hours",
    description:
      "Comfortable travel from Varanasi to Jal Mahal, one of Jaipur's most iconic landmarks.",
    highlights: [
      "Lake Palace",
      "Scenic Beauty",
      "Photography Spot",
      "Family Friendly",
      "Group Travel",
    ],
    tollEstimate: 1800,
  },

  {
    id: "vns-fatehsagar",
    slug: "varanasi-to-fateh-sagar-lake-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Fateh Sagar Lake",
    distance: 980,
    duration: "17 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Fateh Sagar Lake in Udaipur.",
    highlights: [
      "Lake View",
      "Boating",
      "Scenic Beauty",
      "Family Trip",
      "Group Travel",
    ],
    tollEstimate: 2100,
  },

  {
    id: "vns-junagarh",
    slug: "varanasi-to-junagarh-fort-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Junagarh Fort",
    distance: 1180,
    duration: "20 Hours",
    description:
      "Travel comfortably from Varanasi to Junagarh Fort, Bikaner's famous heritage monument.",
    highlights: [
      "Historic Fort",
      "Royal Architecture",
      "Heritage Tour",
      "Family Friendly",
      "Group Travel",
    ],
    tollEstimate: 2500,
  },

  {
    id: "vns-patwon",
    slug: "varanasi-to-patwon-ki-haveli-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Patwon Ki Haveli",
    distance: 1280,
    duration: "21 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Patwon Ki Haveli in Jaisalmer.",
    highlights: [
      "Historic Haveli",
      "Heritage Architecture",
      "Photography Spot",
      "Family Tour",
      "Group Friendly",
    ],
    tollEstimate: 2700,
  },

  {
    id: "vns-ranisati",
    slug: "varanasi-to-rani-sati-temple-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Rani Sati Temple",
    distance: 950,
    duration: "16 Hours",
    description:
      "Book a tempo traveller from Varanasi to Rani Sati Temple for a peaceful pilgrimage experience.",
    highlights: [
      "Famous Temple",
      "Religious Tour",
      "Family Friendly",
      "Comfort Travel",
      "Group Pilgrimage",
    ],
    tollEstimate: 1900,
  },

  {
    id: "vns-desertpark",
    slug: "varanasi-to-desert-national-park-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Desert National Park",
    distance: 1300,
    duration: "22 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Desert National Park for wildlife and desert exploration.",
    highlights: [
      "Wildlife Safari",
      "Desert Landscape",
      "Nature Tour",
      "Adventure Trip",
      "Group Travel",
    ],
    tollEstimate: 2800,
  },

  {
    id: "vns-osian",
    slug: "varanasi-to-osian-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Osian",
    distance: 1100,
    duration: "18 Hours",
    description:
      "Book a tempo traveller from Varanasi to Osian for temple visits and desert tourism.",
    highlights: [
      "Ancient Temples",
      "Desert Safari",
      "Heritage Tour",
      "Family Friendly",
      "Group Travel",
    ],
    tollEstimate: 2300,
  },

  {
    id: "vns-abhaneri",
    slug: "varanasi-to-abhaneri-chand-baori-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Chand Baori Abhaneri",
    distance: 820,
    duration: "14 Hours",
    description:
      "Comfortable travel from Varanasi to Chand Baori, one of India's most famous stepwells.",
    highlights: [
      "Historic Stepwell",
      "Heritage Site",
      "Photography Spot",
      "Family Tour",
      "Group Friendly",
    ],
    tollEstimate: 1700,
  },

  {
    id: "vns-bhangarh",
    slug: "varanasi-to-bhangarh-fort-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bhangarh Fort",
    distance: 800,
    duration: "13 Hours",
    description:
      "Book a tempo traveller from Varanasi to Bhangarh Fort for heritage and sightseeing tours.",
    highlights: [
      "Historic Fort",
      "Archaeological Site",
      "Photography Spot",
      "Family Tour",
      "Group Travel",
    ],
    tollEstimate: 1650,
  },

  {
    id: "vns-jaisamand",
    slug: "varanasi-to-jaisamand-lake-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jaisamand Lake",
    distance: 1010,
    duration: "17 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Jaisamand Lake near Udaipur.",
    highlights: [
      "Scenic Lake",
      "Nature Tour",
      "Boating",
      "Family Friendly",
      "Group Travel",
    ],
    tollEstimate: 2150,
  },

  // ================= BIHAR ROUTES FROM VARANASI =================
  {
    id: "vns-pat",
    slug: "varanasi-to-patna-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Patna",
    distance: 255,
    duration: "5 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Patna. Covers tehsils: Patna Sadar, Danapur, Bihta, Maner, Masaurhi, Phulwari, Punpun.",
    highlights: [
      "Capital City",
      "Fast Route",
      "Comfort Ride",
      "Safe Travel",
      "Group Friendly",
    ],
    tehsils: [
      "Patna Sadar",
      "Danapur",
      "Bihta",
      "Maner",
      "Masaurhi",
      "Phulwari",
      "Punpun",
    ],
    faqs: [
      {
        question: "How long does it take from Varanasi to Patna?",
        answer:
          "It takes around 5 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Patna famous for?",
        answer:
          "Patna is famous for Golghar, Patna Sahib, and rich historical heritage.",
      },
    ],
    tollEstimate: 450,
  },

  {
    id: "vns-gya",
    slug: "varanasi-to-gaya-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Gaya",
    distance: 260,
    duration: "5 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Gaya. Covers tehsils: Gaya, Bodh Gaya, Imamganj, Wazirganj, Guraru.",
    highlights: [
      "Pilgrimage Route",
      "Comfort Ride",
      "Safe Travel",
      "AC Traveller",
      "Family Friendly",
    ],
    tehsils: ["Gaya", "Bodh Gaya", "Imamganj", "Wazirganj", "Guraru"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Gaya?",
        answer:
          "It takes around 5 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Gaya famous for?",
        answer: "Gaya is famous for Vishnupad Temple and pilgrimage tourism.",
      },
    ],
    tollEstimate: 420,
  },

  {
    id: "vns-bdg",
    slug: "varanasi-to-bodhgaya-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bodh Gaya",
    distance: 255,
    duration: "5 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Bodh Gaya. Covers tehsils: Gaya, Bodh Gaya, Tan Kuppa, Guraru.",
    highlights: [
      "Mahabodhi Temple",
      "Comfort Ride",
      "Safe Travel",
      "Pilgrimage Route",
      "Group Friendly",
    ],
    tehsils: ["Gaya", "Bodh Gaya", "Tan Kuppa", "Guraru"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Bodh Gaya?",
        answer:
          "It takes around 5 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Bodh Gaya famous for?",
        answer: "Bodh Gaya is famous as Lord Buddha's enlightenment place.",
      },
    ],
    tollEstimate: 420,
  },

  {
    id: "vns-mzp",
    slug: "varanasi-to-muzaffarpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Muzaffarpur",
    distance: 340,
    duration: "7 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Muzaffarpur. Covers tehsils: Muzaffarpur, Kanti, Marwan, Minapur, Sahebganj.",
    highlights: [
      "Litchi City",
      "Comfort Ride",
      "Safe Travel",
      "Fast Route",
      "Family Friendly",
    ],
    tehsils: ["Muzaffarpur", "Kanti", "Marwan", "Minapur", "Sahebganj"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Muzaffarpur?",
        answer:
          "It takes around 7 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Muzaffarpur famous for?",
        answer: "Muzaffarpur is famous for Shahi Litchi and business markets.",
      },
    ],
    tollEstimate: 550,
  },

  {
    id: "vns-bgp",
    slug: "varanasi-to-bhagalpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bhagalpur",
    distance: 420,
    duration: "8 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Bhagalpur. Covers tehsils: Bhagalpur, Sultanganj, Nathnagar, Pirpainti.",
    highlights: [
      "Silk City",
      "Comfort Ride",
      "Safe Travel",
      "Long Route",
      "Group Friendly",
    ],
    tehsils: ["Bhagalpur", "Sultanganj", "Nathnagar", "Pirpainti"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Bhagalpur?",
        answer:
          "It takes around 8 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Bhagalpur famous for?",
        answer:
          "Bhagalpur is famous for silk industry and Vikramshila heritage.",
      },
    ],
    tollEstimate: 650,
  },

  {
    id: "vns-dbg",
    slug: "varanasi-to-darbhanga-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Darbhanga",
    distance: 390,
    duration: "8 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Darbhanga. Covers tehsils: Darbhanga, Bahadurpur, Benipur, Keotiranway.",
    highlights: [
      "Mithila Region",
      "Comfort Ride",
      "Safe Travel",
      "AC Traveller",
      "Family Friendly",
    ],
    tehsils: ["Darbhanga", "Bahadurpur", "Benipur", "Keotiranway"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Darbhanga?",
        answer:
          "It takes around 8 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Darbhanga famous for?",
        answer: "Darbhanga is famous for Mithila culture and royal heritage.",
      },
    ],
    tollEstimate: 620,
  },

  {
    id: "vns-pur",
    slug: "varanasi-to-purnia-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Purnia",
    distance: 510,
    duration: "10 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Purnia. Covers tehsils: Purnia, Dagarua, Kasba, Krityanand Nagar.",
    highlights: [
      "Long Route",
      "Comfort Ride",
      "Safe Travel",
      "Budget Friendly",
      "Group Friendly",
    ],
    tehsils: ["Purnia", "Dagarua", "Kasba", "Krityanand Nagar"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Purnia?",
        answer:
          "It takes around 10 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Purnia famous for?",
        answer:
          "Purnia is famous for agriculture and eastern Bihar connectivity.",
      },
    ],
    tollEstimate: 780,
  },

  {
    id: "vns-arr",
    slug: "varanasi-to-arrah-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Arrah",
    distance: 155,
    duration: "4 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Arrah. Covers tehsils: Arrah, Shahpur, Barhara, Jagdishpur, Piro.",
    highlights: [
      "Fast Route",
      "Comfort Ride",
      "Safe Travel",
      "Historic Region",
      "Family Friendly",
    ],
    tehsils: ["Arrah", "Shahpur", "Barhara", "Jagdishpur", "Piro"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Arrah?",
        answer:
          "It takes around 4 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Arrah famous for?",
        answer:
          "Arrah is famous for Bhojpur heritage and historical importance.",
      },
    ],
    tollEstimate: 280,
  },

  {
    id: "vns-bgs",
    slug: "varanasi-to-begusarai-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Begusarai",
    distance: 355,
    duration: "7 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Begusarai. Covers tehsils: Begusarai, Teghra, Balia, Naokothi.",
    highlights: [
      "Industrial Area",
      "Comfort Ride",
      "Safe Travel",
      "Group Friendly",
      "Popular Route",
    ],
    tehsils: ["Begusarai", "Teghra", "Balia", "Naokothi"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Begusarai?",
        answer:
          "It takes around 7 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Begusarai famous for?",
        answer: "Begusarai is famous for industry and agriculture economy.",
      },
    ],
    tollEstimate: 560,
  },

  {
    id: "vns-mng",
    slug: "varanasi-to-munger-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Munger",
    distance: 410,
    duration: "8 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Munger. Covers tehsils: Munger, Kharagpur, Bariarpur, Dharhara.",
    highlights: [
      "Historic City",
      "Comfort Ride",
      "Safe Travel",
      "Long Route",
      "Group Friendly",
    ],
    tehsils: ["Munger", "Kharagpur", "Bariarpur", "Dharhara"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Munger?",
        answer:
          "It takes around 8 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Munger famous for?",
        answer: "Munger is famous for yoga institute and fort heritage.",
      },
    ],
    tollEstimate: 620,
  },

  {
    id: "vns-ssr",
    slug: "varanasi-to-sasaram-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Sasaram",
    distance: 125,
    duration: "3 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Sasaram. Covers tehsils: Sasaram, Nokha, Chenari, Rohtas.",
    highlights: [
      "Quick Route",
      "Comfort Ride",
      "Safe Travel",
      "Historic Site",
      "Budget Friendly",
    ],
    tehsils: ["Sasaram", "Nokha", "Chenari", "Rohtas"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Sasaram?",
        answer:
          "It takes around 3 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Sasaram famous for?",
        answer: "Sasaram is famous for Sher Shah Suri Tomb.",
      },
    ],
    tollEstimate: 220,
  },

  {
    id: "vns-hjp",
    slug: "varanasi-to-hajipur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Hajipur",
    distance: 275,
    duration: "6 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Hajipur. Covers tehsils: Hajipur, Vaishali, Mahua, Raghopur.",
    highlights: [
      "Banana City",
      "Comfort Ride",
      "Safe Travel",
      "Family Friendly",
      "Popular Route",
    ],
    tehsils: ["Hajipur", "Vaishali", "Mahua", "Raghopur"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Hajipur?",
        answer:
          "It takes around 6 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Hajipur famous for?",
        answer: "Hajipur is famous for bananas and Vaishali heritage.",
      },
    ],
    tollEstimate: 470,
  },

  {
    id: "vns-swn",
    slug: "varanasi-to-siwan-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Siwan",
    distance: 215,
    duration: "5 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Siwan. Covers tehsils: Siwan, Maharajganj, Raghunathpur, Darauli.",
    highlights: [
      "Fast Route",
      "Comfort Ride",
      "Safe Travel",
      "Budget Friendly",
      "Group Friendly",
    ],
    tehsils: ["Siwan", "Maharajganj", "Raghunathpur", "Darauli"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Siwan?",
        answer:
          "It takes around 5 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Siwan famous for?",
        answer: "Siwan is famous for agriculture and regional markets.",
      },
    ],
    tollEstimate: 360,
  },

  {
    id: "vns-chp",
    slug: "varanasi-to-chapra-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Chapra",
    distance: 245,
    duration: "6 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Chapra. Covers tehsils: Chapra, Manjhi, Panapur, Sonepur.",
    highlights: [
      "Popular Route",
      "Comfort Ride",
      "Safe Travel",
      "Family Friendly",
      "Budget Friendly",
    ],
    tehsils: ["Chapra", "Manjhi", "Panapur", "Sonepur"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Chapra?",
        answer:
          "It takes around 6 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Chapra famous for?",
        answer:
          "Chapra is famous for Saran region and nearby Sonepur fair route.",
      },
    ],
    tollEstimate: 420,
  },

  // ================= DELHI-NCR ROUTES FROM VARANASI =================
  {
    id: "vns-del",
    slug: "varanasi-to-delhi-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Delhi",
    distance: 820,
    duration: "13 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Delhi. Covers tehsils: Sadar Bazar, Civil Lines, Karol Bagh, Narela.",
    highlights: [
      "Capital Route",
      "Comfort Ride",
      "Safe Travel",
      "Group Friendly",
      "Popular Route",
    ],
    tehsils: ["Sadar Bazar", "Civil Lines", "Karol Bagh", "Narela"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Delhi?",
        answer:
          "It takes around 13 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Delhi famous for?",
        answer:
          "Delhi is famous for India Gate, Red Fort, markets, and political importance.",
      },
    ],
    tollEstimate: 1800,
  },

  {
    id: "vns-noi",
    slug: "varanasi-to-noida-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Noida",
    distance: 800,
    duration: "13 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Noida. Covers tehsils: Dadri, Jewar, Greater Noida, Noida sectors.",
    highlights: [
      "IT Hub",
      "Comfort Ride",
      "Safe Travel",
      "Family Friendly",
      "Fast Route",
    ],
    tehsils: ["Dadri", "Jewar", "Greater Noida", "Noida"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Noida?",
        answer:
          "It takes around 13 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Noida famous for?",
        answer:
          "Noida is famous for Film City, malls, IT parks, and expressways.",
      },
    ],
    tollEstimate: 1750,
  },

  {
    id: "vns-ggn",
    slug: "varanasi-to-gurugram-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Gurugram",
    distance: 845,
    duration: "14 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Gurugram. Covers tehsils: Gurugram, Sohna, Pataudi, Badshahpur.",
    highlights: [
      "Corporate Hub",
      "Comfort Ride",
      "Safe Travel",
      "Luxury Route",
      "Group Friendly",
    ],
    tehsils: ["Gurugram", "Sohna", "Pataudi", "Badshahpur"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Gurugram?",
        answer:
          "It takes around 14 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Gurugram famous for?",
        answer:
          "Gurugram is famous for Cyber City, offices, malls, and corporate hubs.",
      },
    ],
    tollEstimate: 1850,
  },

  {
    id: "vns-ghz",
    slug: "varanasi-to-ghaziabad-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Ghaziabad",
    distance: 790,
    duration: "12 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Ghaziabad. Covers tehsils: Ghaziabad, Loni, Modinagar, Muradnagar.",
    highlights: [
      "Fast Route",
      "Comfort Ride",
      "Safe Travel",
      "Popular Route",
      "Family Friendly",
    ],
    tehsils: ["Ghaziabad", "Loni", "Modinagar", "Muradnagar"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Ghaziabad?",
        answer:
          "It takes around 12 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Ghaziabad famous for?",
        answer:
          "Ghaziabad is famous for industries and Delhi NCR connectivity.",
      },
    ],
    tollEstimate: 1700,
  },

  {
    id: "vns-frd",
    slug: "varanasi-to-faridabad-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Faridabad",
    distance: 850,
    duration: "14 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Faridabad. Covers tehsils: Faridabad, Ballabgarh, Badkhal, Tigaon.",
    highlights: [
      "Industrial City",
      "Comfort Ride",
      "Safe Travel",
      "Group Friendly",
      "Long Route",
    ],
    tehsils: ["Faridabad", "Ballabgarh", "Badkhal", "Tigaon"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Faridabad?",
        answer:
          "It takes around 14 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Faridabad famous for?",
        answer: "Faridabad is famous for industries and Surajkund area.",
      },
    ],
    tollEstimate: 1880,
  },

  {
    id: "vns-grn",
    slug: "varanasi-to-greater-noida-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Greater Noida",
    distance: 810,
    duration: "13 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Greater Noida. Covers tehsils: Greater Noida, Dadri, Jewar, Dankaur.",
    highlights: [
      "Planned City",
      "Comfort Ride",
      "Safe Travel",
      "Wide Roads",
      "Family Friendly",
    ],
    tehsils: ["Greater Noida", "Dadri", "Jewar", "Dankaur"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Greater Noida?",
        answer:
          "It takes around 13 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Greater Noida famous for?",
        answer:
          "Greater Noida is famous for Expo Mart, universities, and modern townships.",
      },
    ],
    tollEstimate: 1760,
  },

  {
    id: "vns-mer",
    slug: "varanasi-to-meerut-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Meerut",
    distance: 845,
    duration: "14 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Meerut. Covers tehsils: Meerut, Mawana, Sardhana, Parikshit Garh.",
    highlights: [
      "Sports City",
      "Comfort Ride",
      "Safe Travel",
      "Popular Route",
      "Group Friendly",
    ],
    tehsils: ["Meerut", "Mawana", "Sardhana", "Parikshit Garh"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Meerut?",
        answer:
          "It takes around 14 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Meerut famous for?",
        answer:
          "Meerut is famous for sports goods and historical significance.",
      },
    ],
    tollEstimate: 1860,
  },

  {
    id: "vns-pan",
    slug: "varanasi-to-panipat-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Panipat",
    distance: 910,
    duration: "15 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Panipat. Covers tehsils: Panipat, Samalkha, Israna, Madlauda.",
    highlights: [
      "Historic City",
      "Comfort Ride",
      "Safe Travel",
      "Textile Hub",
      "Long Route",
    ],
    tehsils: ["Panipat", "Samalkha", "Israna", "Madlauda"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Panipat?",
        answer:
          "It takes around 15 hours depending on traffic and road conditions.",
      },
      {
        question: "What is Panipat famous for?",
        answer: "Panipat is famous for historic battles and textile industry.",
      },
    ],
    tollEstimate: 1950,
  },

  // ================= HIMACHAL PRADESH ROUTES FROM VARANASI =================
  {
    id: "vns-dhm",
    slug: "varanasi-to-dharamshala-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Dharamshala",
    distance: 1120,
    duration: "19 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Dharamshala. Covers major areas including Dharamshala, McLeod Ganj, Naddi, Bhagsu Nag, and Kangra. Ideal for family trips, group tours, and pilgrimage travel to Himachal Pradesh.",
    highlights: [
      "Hill Station",
      "Scenic Journey",
      "Safe Travel",
      "Buddhist Culture",
      "Group Tour",
    ],
    tehsils: ["Dharamshala", "McLeod Ganj", "Naddi", "Bhagsu Nag", "Kangra"],
    faqs: [
      {
        question: "How long does it take from Varanasi to Dharamshala?",
        answer:
          "It takes around 19 hours depending on traffic, weather, and road conditions.",
      },
      {
        question: "What is Dharamshala famous for?",
        answer:
          "Dharamshala is famous for its Himalayan views, Tibetan culture, monasteries, and the residence of the Dalai Lama in McLeod Ganj.",
      },
    ],
    tollEstimate: 2600,
  },

  {
    id: "vns-kul",
    slug: "varanasi-to-kullu-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kullu",
    distance: 1180,
    duration: "19 Hours",
    description:
      "Tempo traveller service from Varanasi to Kullu valley known for rivers, mountains, and nature tourism.",
    highlights: ["Valley", "River View", "Nature", "Tourism"],
    tehsils: ["Kullu"],
  },

  {
    id: "vns-sln",
    slug: "varanasi-to-solan-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Solan",
    distance: 980,
    duration: "16 Hours",
    description:
      "Comfortable travel from Varanasi to Solan known as the Mushroom City of Himachal Pradesh.",
    highlights: ["Hill Town", "Nature", "Peaceful Travel"],
    tehsils: ["Solan"],
  },

  {
    id: "vns-mdp",
    slug: "varanasi-to-mandi-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Mandi",
    distance: 1050,
    duration: "17 Hours",
    description:
      "Tempo traveller service from Varanasi to Mandi, gateway to Himachal valleys.",
    highlights: ["Valley Gateway", "Scenic Route"],
    tehsils: ["Mandi"],
  },

  {
    id: "vns-blp",
    slug: "varanasi-to-bilaspur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bilaspur",
    distance: 920,
    duration: "15 Hours",
    description:
      "Comfortable journey from Varanasi to Bilaspur near Govind Sagar Lake.",
    highlights: ["Lake View", "Nature", "Hill Region"],
    tehsils: ["Bilaspur"],
  },

  {
    id: "vns-hmr",
    slug: "varanasi-to-hamirpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Hamirpur",
    distance: 890,
    duration: "14 Hours",
    description:
      "Tempo traveller service from Varanasi to Hamirpur in Himachal Pradesh.",
    highlights: ["Hill District", "Local Travel"],
    tehsils: ["Hamirpur"],
  },

  {
    id: "vns-una",
    slug: "varanasi-to-una-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Una",
    distance: 880,
    duration: "14 Hours",
    description: "Comfortable travel from Varanasi to Una near Punjab border.",
    highlights: ["Border City", "Easy Access"],
    tehsils: ["Una"],
  },

  {
    id: "vns-nhn",
    slug: "varanasi-to-nahan-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Nahan",
    distance: 930,
    duration: "15 Hours",
    description:
      "Tempo traveller service from Varanasi to Nahan, a peaceful hill town.",
    highlights: ["Hill Town", "Peaceful", "Nature"],
    tehsils: ["Nahan"],
  },

  {
    id: "vns-cba",
    slug: "varanasi-to-chamba-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Chamba",
    distance: 1180,
    duration: "20 Hours",
    description:
      "Travel from Varanasi to Chamba valley known for temples and natural beauty.",
    highlights: ["Valley", "Temples", "Heritage"],
    tehsils: ["Chamba"],
  },

  {
    id: "vns-plm",
    slug: "varanasi-to-palampur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Palampur",
    distance: 1120,
    duration: "18 Hours",
    description:
      "Tempo traveller service from Varanasi to Palampur tea gardens and scenic views.",
    highlights: ["Tea Gardens", "Hill Station"],
    tehsils: ["Palampur"],
  },

  {
    id: "vns-kgr",
    slug: "varanasi-to-kangra-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kangra",
    distance: 1110,
    duration: "18 Hours",
    description:
      "Travel from Varanasi to Kangra valley famous for forts and temples.",
    highlights: ["Heritage", "Valley", "Culture"],
    tehsils: ["Kangra"],
  },

  {
    id: "vns-bdi",
    slug: "varanasi-to-baddi-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Baddi",
    distance: 1020,
    duration: "17 Hours",
    description:
      "Travel from Varanasi to Baddi industrial hub of Himachal Pradesh, known for pharma and manufacturing units.",
    highlights: ["Industrial Hub", "Business Travel", "Easy Access"],
    tehsils: ["Baddi"],
  },

  {
    id: "vns-psh",
    slug: "varanasi-to-paonta-sahib-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Paonta Sahib",
    distance: 950,
    duration: "15 Hours",
    description:
      "Comfortable journey from Varanasi to Paonta Sahib, a famous Sikh pilgrimage site on the banks of Yamuna River.",
    highlights: ["Pilgrimage", "Religious", "River Side"],
    tehsils: ["Paonta Sahib"],
  },

  {
    id: "vns-nur",
    slug: "varanasi-to-nurpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Nurpur",
    distance: 1080,
    duration: "18 Hours",
    description:
      "Travel from Varanasi to Nurpur, known for historical forts and Kangra valley views.",
    highlights: ["Heritage", "Fort", "Valley"],
    tehsils: ["Nurpur"],
  },

  {
    id: "vns-mcg",
    slug: "varanasi-to-mcleodganj-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "McLeodganj",
    distance: 1120,
    duration: "19 Hours",
    description:
      "Journey from Varanasi to McLeodganj, the Tibetan culture hub and residence of the Dalai Lama.",
    highlights: ["Buddhist Culture", "Hill Station", "Tourism"],
    tehsils: ["McLeodganj"],
  },

  {
    id: "vns-dal",
    slug: "varanasi-to-dalhousie-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Dalhousie",
    distance: 1180,
    duration: "20 Hours",
    description:
      "Travel from Varanasi to Dalhousie, a colonial-era hill station with pine forests and scenic views.",
    highlights: ["Hill Station", "Colonial", "Nature"],
    tehsils: ["Dalhousie"],
  },

  {
    id: "vns-kha",
    slug: "varanasi-to-khajjiar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Khajjiar",
    distance: 1200,
    duration: "20 Hours",
    description:
      "Journey from Varanasi to Khajjiar, often called Mini Switzerland of India.",
    highlights: ["Meadow", "Scenic", "Tourism"],
    tehsils: ["Khajjiar"],
  },

  {
    id: "vns-kas",
    slug: "varanasi-to-kasauli-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kasauli",
    distance: 980,
    duration: "16 Hours",
    description:
      "Travel from Varanasi to Kasauli, a peaceful hill station known for British-era charm.",
    highlights: ["Hill Station", "Peaceful", "Colonial"],
    tehsils: ["Kasauli"],
  },

  {
    id: "vns-cha",
    slug: "varanasi-to-chail-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Chail",
    distance: 960,
    duration: "16 Hours",
    description:
      "Journey from Varanasi to Chail, famous for its palace and highest cricket ground.",
    highlights: ["Hill Station", "Heritage", "Nature"],
    tehsils: ["Chail"],
  },

  {
    id: "vns-spi",
    slug: "varanasi-to-spiti-valley-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Spiti Valley",
    distance: 1450,
    duration: "28 Hours",
    description:
      "Adventure journey from Varanasi to Spiti Valley, a cold desert mountain region of Himachal Pradesh.",
    highlights: ["Adventure", "Cold Desert", "Monasteries"],
    tehsils: ["Kaza", "Tabo", "Dhankar"],
  },

  {
    id: "vns-kaso",
    slug: "varanasi-to-kasol-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kasol",
    distance: 1250,
    duration: "21 Hours",
    description:
      "Travel from Varanasi to Kasol, a popular backpacker destination in Parvati Valley.",
    highlights: ["Backpacking", "Parvati Valley", "Nature"],
    tehsils: ["Kasol"],
  },

  {
    id: "vns-lah",
    slug: "varanasi-to-lahaul-valley-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Lahaul Valley",
    distance: 1350,
    duration: "24 Hours",
    description:
      "Journey from Varanasi to Lahaul Valley, a remote Himalayan region known for dramatic landscapes.",
    highlights: ["Remote Valley", "Mountains", "Adventure"],
    tehsils: ["Keylong", "Jispa", "Udaipur"],
  },

  {
    id: "vns-san",
    slug: "varanasi-to-sangla-valley-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Sangla Valley",
    distance: 1280,
    duration: "22 Hours",
    description:
      "Travel from Varanasi to Sangla Valley in Kinnaur, known for apple orchards and scenic beauty.",
    highlights: ["Valley", "Apple Orchards", "Nature"],
    tehsils: ["Sangla", "Rakcham", "Chitkul"],
  },

  {
    id: "vns-klp",
    slug: "varanasi-to-kalpa-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kalpa",
    distance: 1300,
    duration: "23 Hours",
    description:
      "Travel from Varanasi to Kalpa, a scenic Kinnaur destination known for breathtaking views of the Kinner Kailash range.",
    highlights: ["Kinner Kailash", "Mountain Views", "Nature"],
    tehsils: ["Kalpa", "Reckong Peo"],
  },

  {
    id: "vns-kza",
    slug: "varanasi-to-kaza-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kaza",
    distance: 1450,
    duration: "28 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Kaza, the headquarters of Spiti Valley.",
    highlights: ["Spiti Valley", "Adventure", "Monasteries"],
    tehsils: ["Kaza", "Langza", "Hikkim", "Komic"],
  },

  {
    id: "vns-nkd",
    slug: "varanasi-to-narkanda-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Narkanda",
    distance: 1180,
    duration: "20 Hours",
    description:
      "Travel from Varanasi to Narkanda, a beautiful hill station famous for apple orchards and snow views.",
    highlights: ["Apple Orchards", "Snow View", "Hill Station"],
    tehsils: ["Narkanda"],
  },

  {
    id: "vns-kuf",
    slug: "varanasi-to-kufri-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kufri",
    distance: 1160,
    duration: "19 Hours",
    description:
      "Journey from Varanasi to Kufri, a popular tourist destination near Shimla known for adventure activities.",
    highlights: ["Adventure", "Snow", "Tourism"],
    tehsils: ["Kufri"],
  },

  {
    id: "vns-mas",
    slug: "varanasi-to-mashobra-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Mashobra",
    distance: 1165,
    duration: "19 Hours",
    description:
      "Travel from Varanasi to Mashobra, a peaceful retreat surrounded by pine forests near Shimla.",
    highlights: ["Pine Forests", "Nature", "Peaceful"],
    tehsils: ["Mashobra"],
  },

  {
    id: "vns-sho",
    slug: "varanasi-to-shoja-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Shoja",
    distance: 1240,
    duration: "21 Hours",
    description:
      "Comfortable journey from Varanasi to Shoja, a hidden gem in Seraj Valley known for pristine landscapes.",
    highlights: ["Hidden Gem", "Valley", "Nature"],
    tehsils: ["Shoja"],
  },

  {
    id: "vns-brv",
    slug: "varanasi-to-barot-valley-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Barot Valley",
    distance: 1190,
    duration: "20 Hours",
    description:
      "Travel from Varanasi to Barot Valley, famous for trout fishing and lush green surroundings.",
    highlights: ["Valley", "Fishing", "Nature"],
    tehsils: ["Barot"],
  },

  {
    id: "vns-fag",
    slug: "varanasi-to-fagu-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Fagu",
    distance: 1170,
    duration: "19 Hours",
    description:
      "Journey from Varanasi to Fagu, a serene hill destination offering panoramic Himalayan views.",
    highlights: ["Hill Station", "Scenic Views", "Nature"],
    tehsils: ["Fagu"],
  },

  {
    id: "vns-nal",
    slug: "varanasi-to-naldehra-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Naldehra",
    distance: 1150,
    duration: "19 Hours",
    description:
      "Travel from Varanasi to Naldehra, known for its famous golf course and cedar forests.",
    highlights: ["Golf Course", "Nature", "Hill Station"],
    tehsils: ["Naldehra"],
  },

  {
    id: "vns-bhu",
    slug: "varanasi-to-bhuntar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bhuntar",
    distance: 1200,
    duration: "20 Hours",
    description:
      "Comfortable journey from Varanasi to Bhuntar, gateway to Kullu and Parvati Valley.",
    highlights: ["Gateway Town", "Valley Access", "Tourism"],
    tehsils: ["Bhuntar"],
  },

  {
    id: "vns-ngr",
    slug: "varanasi-to-naggar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Naggar",
    distance: 1210,
    duration: "20 Hours",
    description:
      "Travel from Varanasi to Naggar, known for Naggar Castle and Himalayan heritage.",
    highlights: ["Heritage", "Castle", "Mountain Views"],
    tehsils: ["Naggar"],
  },

  {
    id: "vns-jib",
    slug: "varanasi-to-jibhi-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jibhi",
    distance: 1240,
    duration: "21 Hours",
    description:
      "Travel from Varanasi to Jibhi, a picturesque village surrounded by forests and waterfalls.",
    highlights: ["Waterfalls", "Nature", "Village Tourism"],
    tehsils: ["Jibhi"],
  },

  {
    id: "vns-bnj",
    slug: "varanasi-to-banjar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Banjar",
    distance: 1230,
    duration: "21 Hours",
    description:
      "Comfortable journey from Varanasi to Banjar in the beautiful Tirthan Valley region.",
    highlights: ["Tirthan Valley", "Nature", "Adventure"],
    tehsils: ["Banjar"],
  },

  {
    id: "vns-tsh",
    slug: "varanasi-to-tosh-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Tosh",
    distance: 1280,
    duration: "22 Hours",
    description:
      "Travel from Varanasi to Tosh, a scenic village in Parvati Valley popular among trekkers.",
    highlights: ["Trekking", "Parvati Valley", "Nature"],
    tehsils: ["Tosh"],
  },

  {
    id: "vns-snj",
    slug: "varanasi-to-sainj-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Sainj",
    distance: 1230,
    duration: "21 Hours",
    description:
      "Journey from Varanasi to Sainj Valley, known for its untouched natural beauty.",
    highlights: ["Valley", "Nature", "Peaceful"],
    tehsils: ["Sainj"],
  },

  {
    id: "vns-bjn",
    slug: "varanasi-to-baijnath-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Baijnath",
    distance: 1140,
    duration: "19 Hours",
    description:
      "Travel from Varanasi to Baijnath, famous for the ancient Baijnath Shiva Temple.",
    highlights: ["Temple", "Pilgrimage", "Heritage"],
    tehsils: ["Baijnath"],
  },

  {
    id: "vns-bbl",
    slug: "varanasi-to-bir-billing-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bir Billing",
    distance: 1160,
    duration: "19 Hours",
    description:
      "Journey from Varanasi to Bir Billing, one of the world's best paragliding destinations.",
    highlights: ["Paragliding", "Adventure", "Tourism"],
    tehsils: ["Bir", "Billing"],
  },

  {
    id: "vns-chm",
    slug: "varanasi-to-chamunda-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Chamunda",
    distance: 1130,
    duration: "19 Hours",
    description:
      "Travel from Varanasi to Chamunda Devi Temple, a revered pilgrimage site in Himachal Pradesh.",
    highlights: ["Pilgrimage", "Temple", "Religious"],
    tehsils: ["Chamunda"],
  },

  {
    id: "vns-jwm",
    slug: "varanasi-to-jawalamukhi-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jawalamukhi",
    distance: 1090,
    duration: "18 Hours",
    description:
      "Comfortable journey from Varanasi to Jawalamukhi Temple, famous for its eternal flames.",
    highlights: ["Temple", "Pilgrimage", "Heritage"],
    tehsils: ["Jawalamukhi"],
  },

  {
    id: "vns-bnk",
    slug: "varanasi-to-banikhet-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Banikhet",
    distance: 1170,
    duration: "20 Hours",
    description:
      "Travel from Varanasi to Banikhet, a scenic town near Dalhousie offering Himalayan views.",
    highlights: ["Hill Town", "Nature", "Scenic"],
    tehsils: ["Banikhet"],
  },

  {
    id: "vns-pgv",
    slug: "varanasi-to-pangi-valley-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Pangi Valley",
    distance: 1400,
    duration: "26 Hours",
    description:
      "Adventure trip from Varanasi to Pangi Valley, one of Himachal Pradesh's most remote regions.",
    highlights: ["Remote Valley", "Adventure", "Mountains"],
    tehsils: ["Killar", "Sural", "Hudan"],
  },

  {
    id: "vns-ctk",
    slug: "varanasi-to-chitkul-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Chitkul",
    distance: 1320,
    duration: "23 Hours",
    description:
      "Travel from Varanasi to Chitkul, the last inhabited village near the Indo-Tibet border.",
    highlights: ["Border Village", "Nature", "Mountains"],
    tehsils: ["Chitkul"],
  },

  {
    id: "vns-nak",
    slug: "varanasi-to-nako-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Nako",
    distance: 1380,
    duration: "25 Hours",
    description:
      "Journey from Varanasi to Nako, a picturesque Himalayan village famous for Nako Lake.",
    highlights: ["Lake", "Village", "Mountains"],
    tehsils: ["Nako"],
  },

  {
    id: "vns-dhk",
    slug: "varanasi-to-dhankar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Dhankar",
    distance: 1430,
    duration: "27 Hours",
    description:
      "Travel from Varanasi to Dhankar, known for its ancient monastery and stunning Spiti Valley landscapes.",
    highlights: ["Monastery", "Spiti Valley", "Adventure"],
    tehsils: ["Dhankar"],
  },

  // ================= KOLKATA & BANGAL ROUTES FROM VARANASI =================
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
    tollEstimate: 700,
  },
  {
    id: "vns-hwh",
    slug: "varanasi-to-howrah-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Howrah",
    distance: 695,
    duration: "12 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Howrah for family trips, group tours, and business travel.",
    highlights: ["Howrah Bridge", "Railway Hub", "City Travel"],
    tollEstimate: 700,
  },

  {
    id: "vns-dgp",
    slug: "varanasi-to-durgapur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Durgapur",
    distance: 500,
    duration: "9 Hours",
    description:
      "Reliable tempo traveller rental from Varanasi to Durgapur for corporate travel and family journeys.",
    highlights: ["Industrial City", "Business Travel", "Group Tours"],
    tollEstimate: 500,
  },

  {
    id: "vns-asl",
    slug: "varanasi-to-asansol-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Asansol",
    distance: 450,
    duration: "8 Hours",
    description:
      "Book a tempo traveller from Varanasi to Asansol for comfortable intercity travel and group transportation.",
    highlights: ["Industrial Hub", "Family Travel", "Road Trip"],
    tollEstimate: 450,
  },

  {
    id: "vns-slg",
    slug: "varanasi-to-siliguri-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Siliguri",
    distance: 770,
    duration: "14 Hours",
    description:
      "Premium tempo traveller service from Varanasi to Siliguri for tourism, business trips, and group travel.",
    highlights: ["Gateway to Northeast", "Hill Access", "Tourist Route"],
    tollEstimate: 800,
  },

  {
    id: "vns-darjeeling",
    slug: "varanasi-to-darjeeling-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Darjeeling",
    distance: 850,
    duration: "16 Hours",
    description:
      "Travel comfortably from Varanasi to Darjeeling in a spacious tempo traveller ideal for family and group tours.",
    highlights: ["Hill Station", "Tea Gardens", "Mountain Views"],
    tollEstimate: 900,
  },

  {
    id: "vns-kalimpong",
    slug: "varanasi-to-kalimpong-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kalimpong",
    distance: 840,
    duration: "15 Hours",
    description:
      "Tempo traveller booking from Varanasi to Kalimpong for sightseeing, vacations, and group travel.",
    highlights: ["Hill Town", "Nature Views", "Tourism"],
    tollEstimate: 850,
  },

  {
    id: "vns-kharagpur",
    slug: "varanasi-to-kharagpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kharagpur",
    distance: 620,
    duration: "11 Hours",
    description:
      "Affordable tempo traveller rental from Varanasi to Kharagpur for educational, business, and family trips.",
    highlights: ["IIT Kharagpur", "Educational Hub", "Group Travel"],
    tollEstimate: 650,
  },

  {
    id: "vns-shantiniketan",
    slug: "varanasi-to-shantiniketan-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Shantiniketan",
    distance: 600,
    duration: "11 Hours",
    description:
      "Comfortable group travel service from Varanasi to Shantiniketan with professional drivers and spacious seating.",
    highlights: ["Tagore Heritage", "Cultural Tourism", "Family Tours"],
    tollEstimate: 600,
  },

  {
    id: "vns-malda",
    slug: "varanasi-to-malda-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Malda",
    distance: 500,
    duration: "9 Hours",
    description:
      "Book a tempo traveller from Varanasi to Malda for family functions, business trips, and group travel.",
    highlights: ["Historic Sites", "Mango City", "Road Travel"],
    tollEstimate: 500,
  },

  {
    id: "vns-cbe",
    slug: "varanasi-to-cooch-behar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Cooch Behar",
    distance: 920,
    duration: "17 Hours",
    description:
      "Long-distance tempo traveller service from Varanasi to Cooch Behar with comfortable seating and ample luggage space.",
    highlights: ["Royal Palace", "Heritage City", "Tourism"],
    tollEstimate: 950,
  },

  {
    id: "vns-jal",
    slug: "varanasi-to-jalpaiguri-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jalpaiguri",
    distance: 840,
    duration: "15 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Jalpaiguri for family tours, vacations, and North Bengal travel.",
    highlights: ["Tea Gardens", "North Bengal", "Tourism"],
    tollEstimate: 850,
  },

  {
    id: "vns-apd",
    slug: "varanasi-to-alipurduar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Alipurduar",
    distance: 950,
    duration: "17 Hours",
    description:
      "Book a tempo traveller from Varanasi to Alipurduar for wildlife tourism, family vacations, and group trips.",
    highlights: ["Dooars", "Wildlife", "Nature"],
    tollEstimate: 950,
  },

  {
    id: "vns-mur",
    slug: "varanasi-to-murshidabad-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Murshidabad",
    distance: 620,
    duration: "11 Hours",
    description:
      "Tempo traveller rental from Varanasi to Murshidabad for heritage tours, family travel, and sightseeing.",
    highlights: ["Nawab Heritage", "Historical City", "Tourism"],
    tollEstimate: 650,
  },

  {
    id: "vns-krn",
    slug: "varanasi-to-krishnanagar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Krishnanagar",
    distance: 720,
    duration: "13 Hours",
    description:
      "Reliable tempo traveller service from Varanasi to Krishnanagar for family trips and religious journeys.",
    highlights: ["Heritage City", "Culture", "Temples"],
    tollEstimate: 750,
  },

  {
    id: "vns-nbd",
    slug: "varanasi-to-nabadwip-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Nabadwip",
    distance: 710,
    duration: "13 Hours",
    description:
      "Comfortable group travel service from Varanasi to Nabadwip for pilgrimage and spiritual tourism.",
    highlights: ["Pilgrimage", "Temple Town", "Spiritual"],
    tollEstimate: 750,
  },

  {
    id: "vns-myp",
    slug: "varanasi-to-mayapur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Mayapur",
    distance: 720,
    duration: "13 Hours",
    description:
      "Book a tempo traveller from Varanasi to Mayapur for ISKCON tours, religious visits, and group travel.",
    highlights: ["ISKCON", "Pilgrimage", "Spiritual Tourism"],
    tollEstimate: 750,
  },

  {
    id: "vns-trp",
    slug: "varanasi-to-tarapith-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Tarapith",
    distance: 610,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Varanasi to Tarapith for temple visits, pilgrimages, and family trips.",
    highlights: ["Shakti Peeth", "Temple Town", "Religious Tourism"],
    tollEstimate: 650,
  },

  {
    id: "vns-dgh",
    slug: "varanasi-to-digha-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Digha",
    distance: 760,
    duration: "14 Hours",
    description:
      "Travel from Varanasi to Digha in a spacious tempo traveller for beach vacations and family holidays.",
    highlights: ["Beach", "Sea View", "Tourism"],
    tollEstimate: 800,
  },

  {
    id: "vns-bsp",
    slug: "varanasi-to-bishnupur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bishnupur",
    distance: 540,
    duration: "10 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Bishnupur for heritage tourism and cultural exploration.",
    highlights: ["Terracotta Temples", "Heritage", "Culture"],
    tollEstimate: 550,
  },

  {
    id: "vns-brd",
    slug: "varanasi-to-bardhaman-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bardhaman",
    distance: 560,
    duration: "10 Hours",
    description:
      "Tempo traveller rental from Varanasi to Bardhaman for business travel, family trips, and group tours.",
    highlights: ["Educational Hub", "Historical City", "Business"],
    tollEstimate: 600,
  },

  {
    id: "vns-hld",
    slug: "varanasi-to-haldia-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Haldia",
    distance: 760,
    duration: "14 Hours",
    description:
      "Book a tempo traveller from Varanasi to Haldia for corporate travel, industrial visits, and family journeys.",
    highlights: ["Port City", "Industrial Hub", "Business Travel"],
    tollEstimate: 800,
  },

  {
    id: "vns-prl",
    slug: "varanasi-to-purulia-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Purulia",
    distance: 460,
    duration: "8 Hours",
    description:
      "Reliable tempo traveller service from Varanasi to Purulia for nature trips, sightseeing, and group tours.",
    highlights: ["Ajodhya Hills", "Nature", "Adventure"],
    tollEstimate: 500,
  },

  {
    id: "vns-rgj",
    slug: "varanasi-to-raiganj-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Raiganj",
    distance: 650,
    duration: "12 Hours",
    description:
      "Travel comfortably from Varanasi to Raiganj for family travel, business visits, and local tourism.",
    highlights: ["Kulik Bird Sanctuary", "Nature", "Tourism"],
    tollEstimate: 700,
  },

  {
    id: "vns-blg",
    slug: "varanasi-to-balurghat-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Balurghat",
    distance: 720,
    duration: "13 Hours",
    description:
      "Tempo traveller booking from Varanasi to Balurghat for family trips and regional travel.",
    highlights: ["Border Region", "Heritage", "Local Tourism"],
    tollEstimate: 750,
  },
  {
    id: "vns-bnk",
    slug: "varanasi-to-bankura-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bankura",
    distance: 520,
    duration: "10 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Bankura for heritage tourism, temples, and cultural trips.",
    highlights: ["Terracotta Temples", "Culture", "Heritage"],
    tollEstimate: 550,
  },

  {
    id: "vns-mid",
    slug: "varanasi-to-midnapore-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Midnapore",
    distance: 610,
    duration: "11 Hours",
    description:
      "Tempo traveller service from Varanasi to Midnapore for family travel, business trips, and regional connectivity.",
    highlights: ["Town Travel", "Education Hub", "Local Culture"],
    tollEstimate: 650,
  },

  {
    id: "vns-kly",
    slug: "varanasi-to-kalyani-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kalyani",
    distance: 700,
    duration: "12 Hours",
    description:
      "Book a tempo traveller from Varanasi to Kalyani for university visits, medical travel, and city tours.",
    highlights: ["University Town", "Medical Hub", "Planned City"],
    tollEstimate: 720,
  },

  {
    id: "vns-bar",
    slug: "varanasi-to-barasat-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Barasat",
    distance: 690,
    duration: "12 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Barasat for suburban travel near Kolkata.",
    highlights: ["Kolkata Suburb", "Local Travel", "Urban Area"],
    tollEstimate: 700,
  },

  {
    id: "vns-ser",
    slug: "varanasi-to-serampore-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Serampore",
    distance: 710,
    duration: "12 Hours",
    description:
      "Tempo traveller rental from Varanasi to Serampore for historical town visits and Hooghly river region travel.",
    highlights: ["Colonial Town", "Hooghly River", "Heritage"],
    tollEstimate: 750,
  },

  {
    id: "vns-cha",
    slug: "varanasi-to-chandannagar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Chandannagar",
    distance: 720,
    duration: "13 Hours",
    description:
      "Travel from Varanasi to Chandannagar for French colonial heritage, riverfront sightseeing, and tourism.",
    highlights: ["French Colony", "Riverfront", "Heritage City"],
    tollEstimate: 750,
  },

  {
    id: "vns-bon",
    slug: "varanasi-to-bongaon-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bongaon",
    distance: 750,
    duration: "13 Hours",
    description:
      "Tempo traveller service from Varanasi to Bongaon for border travel and regional connectivity.",
    highlights: ["Border Town", "Local Travel", "Trade Route"],
    tollEstimate: 780,
  },

  {
    id: "vns-hab",
    slug: "varanasi-to-habra-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Habra",
    distance: 740,
    duration: "13 Hours",
    description:
      "Book a tempo traveller from Varanasi to Habra for suburban Kolkata travel and family trips.",
    highlights: ["Suburban City", "Kolkata Region", "Local Travel"],
    tollEstimate: 750,
  },

  {
    id: "vns-snp",
    slug: "varanasi-to-santipur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Santipur",
    distance: 700,
    duration: "12 Hours",
    description:
      "Tempo traveller from Varanasi to Santipur for cultural tourism and traditional weaving heritage.",
    highlights: ["Handloom Town", "Culture", "Heritage"],
    tollEstimate: 720,
  },

  {
    id: "vns-ber",
    slug: "varanasi-to-berhampore-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Berhampore",
    distance: 630,
    duration: "11 Hours",
    description:
      "Comfortable travel from Varanasi to Berhampore for administrative, tourism, and family trips.",
    highlights: ["District HQ", "Heritage", "City Travel"],
    tollEstimate: 650,
  },

  // ================= ASSAM ROUTES FROM VARANASI =================

  {
    id: "vns-guw",
    slug: "varanasi-to-guwahati-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Guwahati",
    distance: 1050,
    duration: "19 Hours",
    description:
      "Comfortable tempo traveller service from Varanasi to Guwahati for tourism, business travel, and family trips.",
    highlights: ["Kamakhya Temple", "Assam Gateway", "Tourism"],
    tollEstimate: 1100,
  },
  {
    id: "vns-dbr",
    slug: "varanasi-to-dibrugarh-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Dibrugarh",
    distance: 1450,
    duration: "28 Hours",
    description:
      "Long-distance tempo traveller rental from Varanasi to Dibrugarh for tea tourism and business travel.",
    highlights: ["Tea Capital", "Brahmaputra", "Tourism"],
    tollEstimate: 1500,
  },
  {
    id: "vns-jor",
    slug: "varanasi-to-jorhat-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jorhat",
    distance: 1320,
    duration: "25 Hours",
    description:
      "Book a tempo traveller from Varanasi to Jorhat for tea gardens and cultural tours.",
    highlights: ["Tea Gardens", "Culture", "Tourism"],
    tollEstimate: 1400,
  },
  {
    id: "vns-sib",
    slug: "varanasi-to-sivasagar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Sivasagar",
    distance: 1360,
    duration: "26 Hours",
    description:
      "Comfortable group travel from Varanasi to Sivasagar for heritage tourism.",
    highlights: ["Ahom Heritage", "Historic Monuments", "Tourism"],
    tollEstimate: 1450,
  },
  {
    id: "vns-tez",
    slug: "varanasi-to-tezpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Tezpur",
    distance: 1180,
    duration: "22 Hours",
    description:
      "Tempo traveller service from Varanasi to Tezpur for sightseeing and family tours.",
    highlights: ["Cultural City", "Brahmaputra", "Tourism"],
    tollEstimate: 1250,
  },
  {
    id: "vns-sil",
    slug: "varanasi-to-silchar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Silchar",
    distance: 1380,
    duration: "27 Hours",
    description:
      "Travel comfortably from Varanasi to Silchar for business and tourism.",
    highlights: ["Barak Valley", "Commercial Hub", "Travel"],
    tollEstimate: 1450,
  },
  {
    id: "vns-kaz",
    slug: "varanasi-to-kaziranga-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kaziranga",
    distance: 1220,
    duration: "23 Hours",
    description:
      "Tempo traveller rental from Varanasi to Kaziranga National Park for wildlife safaris.",
    highlights: ["One-Horned Rhino", "Wildlife", "Safari"],
    tollEstimate: 1300,
  },
  {
    id: "vns-maj",
    slug: "varanasi-to-majuli-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Majuli",
    distance: 1360,
    duration: "27 Hours",
    description:
      "Book a tempo traveller from Varanasi to Majuli, the world's largest river island.",
    highlights: ["River Island", "Culture", "Tourism"],
    tollEstimate: 1450,
  },
  {
    id: "vns-haf",
    slug: "varanasi-to-haflong-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Haflong",
    distance: 1450,
    duration: "29 Hours",
    description:
      "Comfortable travel from Varanasi to Haflong for hill station tourism.",
    highlights: ["Hill Station", "Nature", "Adventure"],
    tollEstimate: 1500,
  },
  {
    id: "vns-nag",
    slug: "varanasi-to-nagaon-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Nagaon",
    distance: 1160,
    duration: "21 Hours",
    description:
      "Tempo traveller service from Varanasi to Nagaon for family and business travel.",
    highlights: ["Central Assam", "Tourism", "Travel"],
    tollEstimate: 1200,
  },
  {
    id: "vns-tin",
    slug: "varanasi-to-tinsukia-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Tinsukia",
    distance: 1490,
    duration: "29 Hours",
    description:
      "Book a tempo traveller from Varanasi to Tinsukia for business and tea tourism.",
    highlights: ["Tea Region", "Wildlife", "Travel"],
    tollEstimate: 1550,
  },
  {
    id: "vns-gol",
    slug: "varanasi-to-golaghat-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Golaghat",
    distance: 1260,
    duration: "24 Hours",
    description:
      "Travel from Varanasi to Golaghat for wildlife and tea tourism.",
    highlights: ["Kaziranga Access", "Tea Estates", "Tourism"],
    tollEstimate: 1350,
  },
  {
    id: "vns-dhp",
    slug: "varanasi-to-dhubri-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Dhubri",
    distance: 980,
    duration: "18 Hours",
    description: "Comfortable tempo traveller service from Varanasi to Dhubri.",
    highlights: ["Brahmaputra", "Pilgrimage", "Tourism"],
    tollEstimate: 1000,
  },
  {
    id: "vns-bng",
    slug: "varanasi-to-bongaigaon-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bongaigaon",
    distance: 1080,
    duration: "20 Hours",
    description:
      "Tempo traveller rental from Varanasi to Bongaigaon for business and family travel.",
    highlights: ["Industrial City", "Business", "Travel"],
    tollEstimate: 1150,
  },
  {
    id: "vns-kok",
    slug: "varanasi-to-kokrajhar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kokrajhar",
    distance: 1060,
    duration: "20 Hours",
    description: "Group travel service from Varanasi to Kokrajhar.",
    highlights: ["Bodoland", "Nature", "Culture"],
    tollEstimate: 1100,
  },
  {
    id: "vns-bar",
    slug: "varanasi-to-barpeta-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Barpeta",
    distance: 1100,
    duration: "20 Hours",
    description:
      "Travel from Varanasi to Barpeta for religious and cultural tourism.",
    highlights: ["Satra Culture", "Pilgrimage", "Tourism"],
    tollEstimate: 1150,
  },
  {
    id: "vns-nlb",
    slug: "varanasi-to-nalbari-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Nalbari",
    distance: 1080,
    duration: "20 Hours",
    description: "Tempo traveller service from Varanasi to Nalbari.",
    highlights: ["Cultural Town", "Tourism", "Travel"],
    tollEstimate: 1100,
  },
  {
    id: "vns-mng",
    slug: "varanasi-to-mangaldoi-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Mangaldoi",
    distance: 1130,
    duration: "21 Hours",
    description: "Comfortable travel from Varanasi to Mangaldoi.",
    highlights: ["Assam Culture", "River Town", "Travel"],
    tollEstimate: 1200,
  },
  {
    id: "vns-lak",
    slug: "varanasi-to-lakhimpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "North Lakhimpur",
    distance: 1320,
    duration: "25 Hours",
    description: "Tempo traveller booking from Varanasi to North Lakhimpur.",
    highlights: ["Nature", "River Valley", "Tourism"],
    tollEstimate: 1400,
  },
  {
    id: "vns-dmk",
    slug: "varanasi-to-dhemaji-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Dhemaji",
    distance: 1380,
    duration: "27 Hours",
    description: "Travel comfortably from Varanasi to Dhemaji.",
    highlights: ["Nature", "Assam Countryside", "Tourism"],
    tollEstimate: 1450,
  },
  {
    id: "vns-kar",
    slug: "varanasi-to-karimganj-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Karimganj",
    distance: 1420,
    duration: "28 Hours",
    description: "Tempo traveller service from Varanasi to Karimganj.",
    highlights: ["Border Town", "Barak Valley", "Travel"],
    tollEstimate: 1500,
  },
  {
    id: "vns-hoj",
    slug: "varanasi-to-hojai-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Hojai",
    distance: 1180,
    duration: "22 Hours",
    description: "Book a tempo traveller from Varanasi to Hojai.",
    highlights: ["Business", "Transit Hub", "Travel"],
    tollEstimate: 1250,
  },
  {
    id: "vns-mri",
    slug: "varanasi-to-morigaon-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Morigaon",
    distance: 1140,
    duration: "21 Hours",
    description: "Comfortable travel from Varanasi to Morigaon.",
    highlights: ["Pobitora", "Wildlife", "Tourism"],
    tollEstimate: 1200,
  },
  {
    id: "vns-bis",
    slug: "varanasi-to-biswanath-chariali-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Biswanath Chariali",
    distance: 1220,
    duration: "23 Hours",
    description: "Tempo traveller rental from Varanasi to Biswanath Chariali.",
    highlights: ["Temple Town", "Tourism", "Nature"],
    tollEstimate: 1300,
  },
  {
    id: "vns-son",
    slug: "varanasi-to-sonitpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Sonitpur",
    distance: 1180,
    duration: "22 Hours",
    description:
      "Travel from Varanasi to Sonitpur for nature and heritage tourism.",
    highlights: ["Tezpur Region", "Nature", "Tourism"],
    tollEstimate: 1250,
  },
  {
    id: "vns-bok",
    slug: "varanasi-to-bokakhat-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bokakhat",
    distance: 1230,
    duration: "23 Hours",
    description:
      "Tempo traveller service from Varanasi to Bokakhat near Kaziranga.",
    highlights: ["Kaziranga", "Wildlife", "Safari"],
    tollEstimate: 1300,
  },
  {
    id: "vns-pob",
    slug: "varanasi-to-pobitora-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Pobitora",
    distance: 1120,
    duration: "21 Hours",
    description: "Travel from Varanasi to Pobitora Wildlife Sanctuary.",
    highlights: ["Rhinos", "Wildlife", "Nature"],
    tollEstimate: 1200,
  },
  {
    id: "vns-man",
    slug: "varanasi-to-manas-national-park-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Manas National Park",
    distance: 1140,
    duration: "21 Hours",
    description: "Tempo traveller rental from Varanasi to Manas National Park.",
    highlights: ["UNESCO Site", "Wildlife", "Safari"],
    tollEstimate: 1200,
  },
  {
    id: "vns-sua",
    slug: "varanasi-to-sualkuchi-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Sualkuchi",
    distance: 1070,
    duration: "20 Hours",
    description: "Travel from Varanasi to Sualkuchi, Assam's silk village.",
    highlights: ["Silk Village", "Handloom", "Culture"],
    tollEstimate: 1100,
  },
  {
    id: "vns-haj",
    slug: "varanasi-to-hajo-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Hajo",
    distance: 1060,
    duration: "20 Hours",
    description:
      "Tempo traveller service from Varanasi to Hajo pilgrimage town.",
    highlights: ["Pilgrimage", "Temple", "Culture"],
    tollEstimate: 1100,
  },
  {
    id: "vns-mad",
    slug: "varanasi-to-mahamaya-temple-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Mahamaya Temple",
    distance: 1090,
    duration: "20 Hours",
    description: "Religious travel from Varanasi to Mahamaya Temple.",
    highlights: ["Temple", "Pilgrimage", "Tourism"],
    tollEstimate: 1150,
  },
  {
    id: "vns-dip",
    slug: "varanasi-to-diphu-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Diphu",
    distance: 1280,
    duration: "24 Hours",
    description: "Comfortable group travel from Varanasi to Diphu.",
    highlights: ["Hill Town", "Tribal Culture", "Nature"],
    tollEstimate: 1350,
  },
  {
    id: "vns-uml",
    slug: "varanasi-to-umrangso-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Umrangso",
    distance: 1380,
    duration: "27 Hours",
    description: "Travel from Varanasi to Umrangso for scenic hill tourism.",
    highlights: ["Hills", "Nature", "Adventure"],
    tollEstimate: 1450,
  },
  {
    id: "vns-mar",
    slug: "varanasi-to-margherita-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Margherita",
    distance: 1520,
    duration: "30 Hours",
    description: "Tempo traveller service from Varanasi to Margherita.",
    highlights: ["Coal Heritage", "Tea Gardens", "Tourism"],
    tollEstimate: 1600,
  },
  {
    id: "vns-dig",
    slug: "varanasi-to-digboi-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Digboi",
    distance: 1510,
    duration: "30 Hours",
    description:
      "Travel from Varanasi to Digboi, home to Asia's oldest refinery.",
    highlights: ["Oil Heritage", "Museum", "Tourism"],
    tollEstimate: 1600,
  },
  {
    id: "vns-nam",
    slug: "varanasi-to-namphake-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Namphake",
    distance: 1470,
    duration: "29 Hours",
    description:
      "Tempo traveller booking from Varanasi to Namphake Buddhist village.",
    highlights: ["Buddhist Village", "Culture", "Tourism"],
    tollEstimate: 1550,
  },

  // ----------------------DELHI_ROUTES----------------------
  {
    id: "del-har",
    slug: "delhi-to-haridwar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Haridwar",
    distance: 220,
    duration: "5 Hours",
    description: "Tempo traveller booking from Delhi to Haridwar.",
    highlights: ["Pilgrimage", "Ganga Aarti", "Tourism"],
    tollEstimate: 450,
  },
  {
    id: "del-ris",
    slug: "delhi-to-rishikesh-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Rishikesh",
    distance: 245,
    duration: "5 Hours",
    description: "Tempo traveller booking from Delhi to Rishikesh.",
    highlights: ["Adventure", "Yoga", "Tourism"],
    tollEstimate: 500,
  },
  {
    id: "del-deh",
    slug: "delhi-to-dehradun-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Dehradun",
    distance: 255,
    duration: "5 Hours",
    description: "Tempo traveller booking from Delhi to Dehradun.",
    highlights: ["Hill Station", "Nature", "Tourism"],
    tollEstimate: 500,
  },
  {
    id: "del-mus",
    slug: "delhi-to-mussoorie-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Mussoorie",
    distance: 290,
    duration: "6 Hours",
    description: "Tempo traveller booking from Delhi to Mussoorie.",
    highlights: ["Hill Station", "Nature", "Tourism"],
    tollEstimate: 550,
  },
  {
    id: "del-dhan",
    slug: "delhi-to-dhanaulti-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Dhanaulti",
    distance: 325,
    duration: "7 Hours",
    description: "Tempo traveller booking from Delhi to Dhanaulti.",
    highlights: ["Hill Station", "Snow", "Tourism"],
    tollEstimate: 650,
  },
  {
    id: "del-kan",
    slug: "delhi-to-kanatal-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kanatal",
    distance: 330,
    duration: "7 Hours",
    description: "Tempo traveller booking from Delhi to Kanatal.",
    highlights: ["Hill Station", "Camping", "Tourism"],
    tollEstimate: 650,
  },
  {
    id: "del-aul",
    slug: "delhi-to-auli-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Auli",
    distance: 500,
    duration: "11 Hours",
    description: "Tempo traveller booking from Delhi to Auli.",
    highlights: ["Skiing", "Mountains", "Tourism"],
    tollEstimate: 950,
  },
  {
    id: "del-cho",
    slug: "delhi-to-chopta-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Chopta",
    distance: 450,
    duration: "10 Hours",
    description: "Tempo traveller booking from Delhi to Chopta.",
    highlights: ["Trekking", "Nature", "Tourism"],
    tollEstimate: 850,
  },
  {
    id: "del-nai",
    slug: "delhi-to-nainital-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Nainital",
    distance: 320,
    duration: "7 Hours",
    description: "Tempo traveller booking from Delhi to Nainital.",
    highlights: ["Lake City", "Hill Station", "Tourism"],
    tollEstimate: 600,
  },
  {
    id: "del-bhi",
    slug: "delhi-to-bhimtal-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bhimtal",
    distance: 305,
    duration: "7 Hours",
    description: "Tempo traveller booking from Delhi to Bhimtal.",
    highlights: ["Lake", "Nature", "Tourism"],
    tollEstimate: 600,
  },
  {
    id: "del-satt",
    slug: "delhi-to-sattal-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Sattal",
    distance: 315,
    duration: "7 Hours",
    description: "Tempo traveller booking from Delhi to Sattal.",
    highlights: ["Lake", "Nature", "Tourism"],
    tollEstimate: 600,
  },
  {
    id: "del-nau",
    slug: "delhi-to-naukuchiatal-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Naukuchiatal",
    distance: 325,
    duration: "7 Hours",
    description: "Tempo traveller booking from Delhi to Naukuchiatal.",
    highlights: ["Lake", "Nature", "Tourism"],
    tollEstimate: 620,
  },
  {
    id: "del-mukt",
    slug: "delhi-to-mukteshwar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Mukteshwar",
    distance: 345,
    duration: "8 Hours",
    description: "Tempo traveller booking from Delhi to Mukteshwar.",
    highlights: ["Hill Station", "Nature", "Tourism"],
    tollEstimate: 650,
  },
  {
    id: "del-rani",
    slug: "delhi-to-ranikhet-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Ranikhet",
    distance: 360,
    duration: "8 Hours",
    description: "Tempo traveller booking from Delhi to Ranikhet.",
    highlights: ["Hill Station", "Nature", "Tourism"],
    tollEstimate: 700,
  },
  {
    id: "del-kau",
    slug: "delhi-to-kausani-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kausani",
    distance: 410,
    duration: "9 Hours",
    description: "Tempo traveller booking from Delhi to Kausani.",
    highlights: ["Himalayan Views", "Nature", "Tourism"],
    tollEstimate: 800,
  },
  {
    id: "del-bin",
    slug: "delhi-to-binsar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Binsar",
    distance: 390,
    duration: "9 Hours",
    description: "Tempo traveller booking from Delhi to Binsar.",
    highlights: ["Wildlife", "Nature", "Tourism"],
    tollEstimate: 760,
  },
  {
    id: "del-alm",
    slug: "delhi-to-almora-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Almora",
    distance: 370,
    duration: "8 Hours",
    description: "Tempo traveller booking from Delhi to Almora.",
    highlights: ["Hill Station", "Culture", "Tourism"],
    tollEstimate: 720,
  },
  {
    id: "del-chau",
    slug: "delhi-to-chaukori-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Chaukori",
    distance: 480,
    duration: "11 Hours",
    description: "Tempo traveller booking from Delhi to Chaukori.",
    highlights: ["Hill Station", "Himalayan Views", "Tourism"],
    tollEstimate: 950,
  },
  {
    id: "del-mun",
    slug: "delhi-to-munsiyari-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Munsiyari",
    distance: 605,
    duration: "13 Hours",
    description:
      "Tempo traveller booking from Delhi to Munsiyari for family trips, trekking groups, adventure tours, and Kumaon sightseeing.",
    highlights: ["Panchachuli Peaks", "Adventure", "Tourism"],
    tollEstimate: 1200,
  },
  {
    id: "del-jcnp",
    slug: "delhi-to-jim-corbett-national-park-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Jim Corbett National Park (Dhikala/Bijrani)",
    distance: 260,
    duration: "6 Hours",
    description:
      "Tempo traveller booking from Delhi to Jim Corbett National Park (Dhikala/Bijrani) for wildlife safaris, family vacations, corporate outings, and group tours.",
    highlights: ["Wildlife Safari", "Dhikala Zone", "Nature Tourism"],
    tollEstimate: 500,
  },
  {
    id: "del-raja",
    slug: "delhi-to-rajaji-national-park-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Rajaji National Park",
    distance: 250,
    duration: "5 Hours",
    description:
      "Tempo traveller booking from Delhi to Rajaji National Park for wildlife safaris, family vacations, school trips, corporate outings, and group tours.",
    highlights: ["Wildlife Safari", "Nature", "Tourism"],
    tollEstimate: 500,
  },
  {
    id: "del-vof",
    slug: "delhi-to-valley-of-flowers-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Valley of Flowers (Base Ghangaria)",
    distance: 515,
    duration: "12 Hours",
    description:
      "Tempo traveller booking from Delhi to Valley of Flowers (Base Ghangaria) for trekking groups, nature enthusiasts, family trips, and Uttarakhand tours.",
    highlights: ["UNESCO World Heritage Site", "Trekking", "Nature Tourism"],
    tollEstimate: 1000,
  },
  {
    id: "del-hem",
    slug: "delhi-to-hemkund-sahib-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Hemkund Sahib",
    distance: 520,
    duration: "12 Hours",
    description:
      "Tempo traveller booking from Delhi to Hemkund Sahib for Sikh pilgrimage, family trips, trekking groups, and Uttarakhand tours.",
    highlights: ["Sikh Pilgrimage", "High-Altitude Trek", "Tourism"],
    tollEstimate: 1000,
  },
  {
    id: "del-bad",
    slug: "delhi-to-badrinath-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Badrinath",
    distance: 530,
    duration: "12 Hours",
    description:
      "Tempo traveller booking from Delhi to Badrinath for Char Dham Yatra, family pilgrimages, spiritual tours, and group travel.",
    highlights: ["Char Dham Yatra", "Badrinath Temple", "Pilgrimage"],
    tollEstimate: 1050,
  },
  {
    id: "del-ked",
    slug: "delhi-to-kedarnath-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kedarnath",
    distance: 450,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Kedarnath for Char Dham Yatra, family pilgrimages, and group tours.",
    highlights: ["Char Dham", "Kedarnath Temple", "Pilgrimage"],
    tollEstimate: 900,
  },
  {
    id: "del-yam",
    slug: "delhi-to-yamunotri-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Yamunotri",
    distance: 430,
    duration: "10 Hours",
    description:
      "Tempo traveller booking from Delhi to Yamunotri for Char Dham pilgrimage, family trips, and spiritual journeys.",
    highlights: ["Char Dham", "Yamunotri Temple", "Pilgrimage"],
    tollEstimate: 850,
  },
  {
    id: "del-gan",
    slug: "delhi-to-gangotri-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Gangotri",
    distance: 500,
    duration: "12 Hours",
    description:
      "Tempo traveller booking from Delhi to Gangotri for Char Dham Yatra, family pilgrimages, and spiritual tours.",
    highlights: ["Char Dham", "Gangotri Temple", "Pilgrimage"],
    tollEstimate: 980,
  },
  {
    id: "del-cdc",
    slug: "delhi-to-char-dham-circuit-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Char Dham Circuit (Yamunotri-Gangotri-Kedarnath-Badrinath)",
    distance: 1600,
    duration: "10 Days",
    description:
      "Tempo traveller booking from Delhi to Char Dham Circuit covering Yamunotri, Gangotri, Kedarnath, and Badrinath for family and group pilgrimages.",
    highlights: ["Char Dham", "Pilgrimage", "Spiritual Tour"],
    tollEstimate: 3500,
  },
  {
    id: "del-ddc",
    slug: "delhi-to-do-dham-circuit-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Do Dham Circuit (Kedarnath-Badrinath)",
    distance: 1050,
    duration: "6 Days",
    description:
      "Tempo traveller booking from Delhi to Do Dham Circuit covering Kedarnath and Badrinath for pilgrimage groups and families.",
    highlights: ["Do Dham", "Pilgrimage", "Temple Tour"],
    tollEstimate: 2200,
  },
  {
    id: "del-pkc",
    slug: "delhi-to-panch-kedar-circuit-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Panch Kedar Circuit",
    distance: 1450,
    duration: "9 Days",
    description:
      "Tempo traveller booking from Delhi to Panch Kedar Circuit for spiritual journeys, trekking groups, and pilgrimage tours.",
    highlights: ["Panch Kedar", "Pilgrimage", "Adventure"],
    tollEstimate: 3000,
  },
  {
    id: "del-ppc",
    slug: "delhi-to-panch-prayag-circuit-tempo-traveller-fare",
    origin: "Delhi",
    destination:
      "Panch Prayag Circuit (Devprayag, Rudraprayag, Karnaprayag, Nandaprayag, Vishnuprayag)",
    distance: 850,
    duration: "5 Days",
    description:
      "Tempo traveller booking from Delhi to Panch Prayag Circuit covering all five sacred river confluences in Uttarakhand.",
    highlights: ["Panch Prayag", "Pilgrimage", "Scenic Route"],
    tollEstimate: 1800,
  },
  {
    id: "del-chak",
    slug: "delhi-to-chakrata-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Chakrata",
    distance: 330,
    duration: "8 Hours",
    description:
      "Tempo traveller booking from Delhi to Chakrata for family vacations, nature lovers, and weekend getaways.",
    highlights: ["Hill Station", "Waterfalls", "Tourism"],
    tollEstimate: 650,
  },
  {
    id: "del-lan",
    slug: "delhi-to-landour-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Landour",
    distance: 295,
    duration: "7 Hours",
    description:
      "Tempo traveller booking from Delhi to Landour for peaceful hill station vacations and family trips.",
    highlights: ["Hill Station", "Nature", "Tourism"],
    tollEstimate: 580,
  },
  {
    id: "del-hars",
    slug: "delhi-to-harsil-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Harsil",
    distance: 470,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Harsil for Gangotri tours, nature trips, and family vacations.",
    highlights: ["Apple Valley", "Nature", "Tourism"],
    tollEstimate: 950,
  },
  {
    id: "del-khir",
    slug: "delhi-to-khirsu-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Khirsu",
    distance: 360,
    duration: "9 Hours",
    description:
      "Tempo traveller booking from Delhi to Khirsu for scenic mountain holidays and group tours.",
    highlights: ["Hill Station", "Nature", "Tourism"],
    tollEstimate: 720,
  },
  {
    id: "del-pau",
    slug: "delhi-to-pauri-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Pauri",
    distance: 330,
    duration: "8 Hours",
    description:
      "Tempo traveller booking from Delhi to Pauri for family vacations, sightseeing, and Uttarakhand tours.",
    highlights: ["Hill Station", "Nature", "Tourism"],
    tollEstimate: 680,
  },
  {
    id: "del-lsd",
    slug: "delhi-to-lansdowne-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Lansdowne",
    distance: 260,
    duration: "6 Hours",
    description:
      "Tempo traveller booking from Delhi to Lansdowne for weekend trips, family vacations, and group travel.",
    highlights: ["Hill Station", "Nature", "Tourism"],
    tollEstimate: 500,
  },
  {
    id: "del-pit",
    slug: "delhi-to-pithoragarh-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Pithoragarh",
    distance: 510,
    duration: "12 Hours",
    description:
      "Tempo traveller booking from Delhi to Pithoragarh for Kumaon tours, family holidays, and adventure travel.",
    highlights: ["Mountains", "Adventure", "Tourism"],
    tollEstimate: 1000,
  },
  {
    id: "del-abb",
    slug: "delhi-to-abbott-mount-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Abbott Mount",
    distance: 445,
    duration: "10 Hours",
    description:
      "Tempo traveller booking from Delhi to Abbott Mount for peaceful hill station vacations and nature trips.",
    highlights: ["Hill Station", "Scenic Views", "Tourism"],
    tollEstimate: 900,
  },
  {
    id: "del-bage",
    slug: "delhi-to-bageshwar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bageshwar",
    distance: 465,
    duration: "10 Hours",
    description:
      "Tempo traveller booking from Delhi to Bageshwar for family trips, pilgrimages, Kumaon sightseeing, and group travel.",
    highlights: ["Kumaon", "Pilgrimage", "Tourism"],
    tollEstimate: 900,
  },
  {
    id: "del-bai",
    slug: "delhi-to-baijnath-temple-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Baijnath Temple (Uttarakhand)",
    distance: 445,
    duration: "10 Hours",
    description:
      "Tempo traveller booking from Delhi to Baijnath Temple (Uttarakhand) for pilgrimage tours, family trips, and spiritual travel.",
    highlights: ["Temple", "Pilgrimage", "Tourism"],
    tollEstimate: 880,
  },
  {
    id: "del-jag",
    slug: "delhi-to-jageshwar-dham-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Jageshwar Dham",
    distance: 430,
    duration: "10 Hours",
    description:
      "Tempo traveller booking from Delhi to Jageshwar Dham for religious tours, family trips, and group pilgrimages.",
    highlights: ["Ancient Temple", "Pilgrimage", "Tourism"],
    tollEstimate: 850,
  },
  {
    id: "del-kain",
    slug: "delhi-to-kainchi-dham-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kainchi Dham (Neem Karoli Baba Ashram)",
    distance: 310,
    duration: "7 Hours",
    description:
      "Tempo traveller booking from Delhi to Kainchi Dham (Neem Karoli Baba Ashram) for spiritual retreats and family pilgrimages.",
    highlights: ["Neem Karoli Baba", "Ashram", "Pilgrimage"],
    tollEstimate: 600,
  },
  {
    id: "del-pata",
    slug: "delhi-to-patal-bhuvaneshwar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Patal Bhuvaneshwar",
    distance: 500,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Patal Bhuvaneshwar for cave temple visits, pilgrimage tours, and family trips.",
    highlights: ["Cave Temple", "Pilgrimage", "Tourism"],
    tollEstimate: 980,
  },
  {
    id: "del-kart",
    slug: "delhi-to-kartik-swami-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kartik Swami Temple",
    distance: 390,
    duration: "10 Hours",
    description:
      "Tempo traveller booking from Delhi to Kartik Swami Temple for trekking, pilgrimage, and Uttarakhand tours.",
    highlights: ["Temple Trek", "Pilgrimage", "Adventure"],
    tollEstimate: 780,
  },
  {
    id: "del-tel",
    slug: "delhi-to-tehri-lake-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Tehri Lake",
    distance: 320,
    duration: "8 Hours",
    description:
      "Tempo traveller booking from Delhi to Tehri Lake for water sports, family vacations, and adventure trips.",
    highlights: ["Lake", "Water Sports", "Tourism"],
    tollEstimate: 650,
  },
  {
    id: "del-net",
    slug: "delhi-to-new-tehri-tempo-traveller-fare",
    origin: "Delhi",
    destination: "New Tehri",
    distance: 325,
    duration: "8 Hours",
    description:
      "Tempo traveller booking from Delhi to New Tehri for sightseeing, family holidays, and group travel.",
    highlights: ["Hill Station", "Tehri Dam", "Tourism"],
    tollEstimate: 650,
  },
  {
    id: "del-surk",
    slug: "delhi-to-surkanda-devi-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Surkanda Devi Temple",
    distance: 305,
    duration: "7 Hours",
    description:
      "Tempo traveller booking from Delhi to Surkanda Devi Temple for pilgrimage, trekking, and family tours.",
    highlights: ["Temple", "Trekking", "Pilgrimage"],
    tollEstimate: 600,
  },
  {
    id: "del-kun",
    slug: "delhi-to-kunjapuri-temple-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kunjapuri Temple",
    distance: 270,
    duration: "6 Hours",
    description:
      "Tempo traveller booking from Delhi to Kunjapuri Temple for sunrise views, pilgrimage, and Uttarakhand tours.",
    highlights: ["Temple", "Sunrise Point", "Tourism"],
    tollEstimate: 550,
  },
  {
    id: "del-shi",
    slug: "delhi-to-shimla-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Shimla",
    distance: 350,
    duration: "7 Hours",
    description:
      "Tempo traveller booking from Delhi to Shimla for family vacations, corporate outings, honeymoon trips, and group tours.",
    highlights: ["Hill Station", "Snow", "Tourism"],
    tollEstimate: 700,
  },
  {
    id: "del-mana",
    slug: "delhi-to-manali-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Manali",
    distance: 540,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Manali for family vacations, adventure trips, honeymoon tours, and group travel.",
    highlights: ["Adventure", "Snow", "Tourism"],
    tollEstimate: 1050,
  },
  {
    id: "del-kul",
    slug: "delhi-to-kullu-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kullu",
    distance: 500,
    duration: "10 Hours",
    description:
      "Tempo traveller booking from Delhi to Kullu for sightseeing, family vacations, and Himachal tours.",
    highlights: ["Valley", "Nature", "Tourism"],
    tollEstimate: 980,
  },
  {
    id: "del-kaso",
    slug: "delhi-to-kasol-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kasol",
    distance: 515,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Kasol for backpacking trips, camping, trekking, and group travel.",
    highlights: ["Camping", "Adventure", "Tourism"],
    tollEstimate: 1000,
  },
  {
    id: "del-mks",
    slug: "delhi-to-manikaran-sahib-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Manikaran Sahib",
    distance: 530,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Manikaran Sahib for Sikh pilgrimage, family trips, and Himachal tours.",
    highlights: ["Gurudwara", "Pilgrimage", "Tourism"],
    tollEstimate: 1020,
  },
  {
    id: "del-dha",
    slug: "delhi-to-dharamshala-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Dharamshala",
    distance: 480,
    duration: "9 Hours",
    description:
      "Tempo traveller booking from Delhi to Dharamshala for family holidays, Buddhist tourism, and group tours.",
    highlights: ["Hill Station", "Buddhist Culture", "Tourism"],
    tollEstimate: 900,
  },
  {
    id: "del-mcg",
    slug: "delhi-to-mcleodganj-tempo-traveller-fare",
    origin: "Delhi",
    destination: "McLeodganj",
    distance: 490,
    duration: "10 Hours",
    description:
      "Tempo traveller booking from Delhi to McLeodganj for monastery visits, trekking, and family vacations.",
    highlights: ["Monasteries", "Hill Station", "Tourism"],
    tollEstimate: 920,
  },
  {
    id: "del-dal",
    slug: "delhi-to-dalhousie-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Dalhousie",
    distance: 560,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Dalhousie for family vacations, honeymoon trips, and Himachal sightseeing.",
    highlights: ["Hill Station", "Nature", "Tourism"],
    tollEstimate: 1100,
  },
  {
    id: "del-khaj",
    slug: "delhi-to-khajjiar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Khajjiar",
    distance: 580,
    duration: "12 Hours",
    description:
      "Tempo traveller booking from Delhi to Khajjiar for family vacations, sightseeing, and adventure tours.",
    highlights: ["Mini Switzerland", "Nature", "Tourism"],
    tollEstimate: 1150,
  },
  {
    id: "del-cham",
    slug: "delhi-to-chamba-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Chamba",
    distance: 590,
    duration: "12 Hours",
    description:
      "Tempo traveller booking from Delhi to Chamba for heritage tours, family vacations, and Himachal sightseeing.",
    highlights: ["Heritage", "Mountains", "Tourism"],
    tollEstimate: 1180,
  },
  {
    id: "del-bir",
    slug: "delhi-to-bir-billing-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bir Billing",
    distance: 515,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Bir Billing for paragliding trips, adventure tours, family vacations, and group travel.",
    highlights: ["Paragliding", "Adventure", "Tourism"],
    tollEstimate: 1000,
  },
  {
    id: "del-palam",
    slug: "delhi-to-palampur-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Palampur",
    distance: 480,
    duration: "10 Hours",
    description:
      "Tempo traveller booking from Delhi to Palampur for tea garden tours, family vacations, and Himachal sightseeing.",
    highlights: ["Tea Gardens", "Hill Station", "Tourism"],
    tollEstimate: 950,
  },
  {
    id: "del-jib",
    slug: "delhi-to-jibhi-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Jibhi",
    distance: 500,
    duration: "10 Hours",
    description:
      "Tempo traveller booking from Delhi to Jibhi for camping, waterfalls, family trips, and adventure tours.",
    highlights: ["Camping", "Waterfalls", "Tourism"],
    tollEstimate: 980,
  },
  {
    id: "del-tir",
    slug: "delhi-to-tirthan-valley-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Tirthan Valley",
    distance: 510,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Tirthan Valley for nature escapes, trout fishing, camping, and group tours.",
    highlights: ["Nature", "Camping", "Tourism"],
    tollEstimate: 1000,
  },
  {
    id: "del-sho",
    slug: "delhi-to-shoja-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Shoja",
    distance: 520,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Shoja for peaceful hill station vacations, trekking, and family trips.",
    highlights: ["Hill Station", "Nature", "Tourism"],
    tollEstimate: 1020,
  },
  {
    id: "del-spi",
    slug: "delhi-to-spiti-valley-circuit-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Spiti Valley Circuit (Shimla-Kinnaur-Spiti-Manali)",
    distance: 1450,
    duration: "8 Days",
    description:
      "Tempo traveller booking from Delhi to the Spiti Valley Circuit covering Shimla, Kinnaur, Spiti, and Manali for adventure groups and road trips.",
    highlights: ["Road Trip", "Adventure", "Spiti Valley"],
    tollEstimate: 3200,
  },
  {
    id: "del-nar",
    slug: "delhi-to-narkanda-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Narkanda",
    distance: 410,
    duration: "8 Hours",
    description:
      "Tempo traveller booking from Delhi to Narkanda for skiing, apple orchards, family vacations, and Himachal tours.",
    highlights: ["Skiing", "Apple Orchards", "Tourism"],
    tollEstimate: 800,
  },
  {
    id: "del-san",
    slug: "delhi-to-sangla-valley-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Sangla Valley",
    distance: 590,
    duration: "13 Hours",
    description:
      "Tempo traveller booking from Delhi to Sangla Valley for scenic Himalayan road trips, camping, and family vacations.",
    highlights: ["Baspa Valley", "Nature", "Tourism"],
    tollEstimate: 1200,
  },
  {
    id: "del-chit",
    slug: "delhi-to-chitkul-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Chitkul",
    distance: 610,
    duration: "14 Hours",
    description:
      "Tempo traveller booking from Delhi to Chitkul for adventure tours, Himalayan sightseeing, and group travel.",
    highlights: ["Last Indian Village", "Adventure", "Tourism"],
    tollEstimate: 1250,
  },
  {
    id: "del-kal",
    slug: "delhi-to-kalpa-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kalpa",
    distance: 565,
    duration: "12 Hours",
    description:
      "Tempo traveller booking from Delhi to Kalpa for Kinnaur sightseeing, family vacations, and Himalayan road trips.",
    highlights: ["Kinnaur", "Mountain Views", "Tourism"],
    tollEstimate: 1150,
  },
  {
    id: "del-kaz",
    slug: "delhi-to-kaza-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kaza",
    distance: 730,
    duration: "15 Hours",
    description:
      "Tempo traveller booking from Delhi to Kaza for Spiti Valley expeditions, family vacations, and adventure road trips.",
    highlights: ["Spiti Valley", "Adventure", "Tourism"],
    tollEstimate: 1450,
  },
  {
    id: "del-chan",
    slug: "delhi-to-chandratal-lake-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Chandratal Lake",
    distance: 760,
    duration: "16 Hours",
    description:
      "Tempo traveller booking from Delhi to Chandratal Lake for camping, trekking, photography, and Spiti Valley tours.",
    highlights: ["Camping", "High Altitude Lake", "Adventure"],
    tollEstimate: 1500,
  },
  {
    id: "del-khe",
    slug: "delhi-to-kheerganga-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kheerganga",
    distance: 535,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Kheerganga for trekking groups, camping, and adventure tours.",
    highlights: ["Trekking", "Hot Springs", "Adventure"],
    tollEstimate: 1050,
  },
  {
    id: "del-mal",
    slug: "delhi-to-malana-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Malana",
    distance: 525,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Malana for trekking, backpacking, and Himalayan adventure trips.",
    highlights: ["Ancient Village", "Trekking", "Adventure"],
    tollEstimate: 1030,
  },
  {
    id: "del-tos",
    slug: "delhi-to-tosh-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Tosh",
    distance: 540,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Tosh for backpacking, camping, and Parvati Valley tours.",
    highlights: ["Parvati Valley", "Camping", "Tourism"],
    tollEstimate: 1060,
  },
  {
    id: "del-pul",
    slug: "delhi-to-pulga-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Pulga",
    distance: 535,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Pulga for nature retreats, trekking, and camping trips.",
    highlights: ["Nature", "Camping", "Adventure"],
    tollEstimate: 1050,
  },
  {
    id: "del-pvc",
    slug: "delhi-to-parvati-valley-circuit-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Parvati Valley Circuit",
    distance: 580,
    duration: "4 Days",
    description:
      "Tempo traveller booking from Delhi to Parvati Valley Circuit covering Kasol, Tosh, Pulga, Kheerganga, and nearby attractions.",
    highlights: ["Road Trip", "Adventure", "Camping"],
    tollEstimate: 1200,
  },
  {
    id: "del-mand",
    slug: "delhi-to-mandi-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Mandi",
    distance: 440,
    duration: "9 Hours",
    description:
      "Tempo traveller booking from Delhi to Mandi for family vacations, temple visits, and Himachal sightseeing.",
    highlights: ["Temple Town", "Nature", "Tourism"],
    tollEstimate: 850,
  },
  {
    id: "del-rewa",
    slug: "delhi-to-rewalsar-lake-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Rewalsar Lake",
    distance: 470,
    duration: "10 Hours",
    description:
      "Tempo traveller booking from Delhi to Rewalsar Lake for Buddhist pilgrimage, family trips, and sightseeing.",
    highlights: ["Sacred Lake", "Pilgrimage", "Tourism"],
    tollEstimate: 920,
  },
  {
    id: "del-pras",
    slug: "delhi-to-prashar-lake-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Prashar Lake",
    distance: 485,
    duration: "10 Hours",
    description:
      "Tempo traveller booking from Delhi to Prashar Lake for trekking, camping, and scenic mountain vacations.",
    highlights: ["Lake", "Trekking", "Tourism"],
    tollEstimate: 950,
  },
  {
    id: "del-baro",
    slug: "delhi-to-barot-valley-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Barot Valley",
    distance: 510,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Barot Valley for nature trips, camping, riverside stays, and family vacations.",
    highlights: ["Valley", "Camping", "Nature"],
    tollEstimate: 1050,
  },
  {
    id: "del-kas",
    slug: "delhi-to-kasauli-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kasauli",
    distance: 290,
    duration: "6 Hours",
    description:
      "Tempo traveller booking from Delhi to Kasauli for family holidays, corporate outings, and weekend getaways.",
    highlights: ["Hill Station", "Weekend Trip", "Nature"],
    tollEstimate: 700,
  },
  {
    id: "del-cha",
    slug: "delhi-to-chail-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Chail",
    distance: 340,
    duration: "7 Hours",
    description:
      "Tempo traveller booking from Delhi to Chail for sightseeing, nature escapes, and group tours.",
    highlights: ["Hill Station", "Palace", "Nature"],
    tollEstimate: 800,
  },
  {
    id: "del-sol",
    slug: "delhi-to-solan-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Solan",
    distance: 305,
    duration: "6.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Solan for family vacations, business trips, and Himachal tours.",
    highlights: ["Hill Town", "Tourism", "Nature"],
    tollEstimate: 750,
  },
  {
    id: "del-nah",
    slug: "delhi-to-nahan-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Nahan",
    distance: 255,
    duration: "5.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Nahan for sightseeing, religious visits, and weekend holidays.",
    highlights: ["Hill Station", "Temple", "Nature"],
    tollEstimate: 650,
  },
  {
    id: "del-ren",
    slug: "delhi-to-renuka-lake-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Renuka Lake",
    distance: 310,
    duration: "7 Hours",
    description:
      "Tempo traveller booking from Delhi to Renuka Lake for family picnics, religious visits, and lake tourism.",
    highlights: ["Lake", "Temple", "Tourism"],
    tollEstimate: 800,
  },
  {
    id: "del-pao",
    slug: "delhi-to-paonta-sahib-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Paonta Sahib",
    distance: 265,
    duration: "5.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Paonta Sahib for Sikh pilgrimage, family travel, and group tours.",
    highlights: ["Gurudwara", "Pilgrimage", "Tourism"],
    tollEstimate: 650,
  },
  {
    id: "del-kin",
    slug: "delhi-to-kinnaur-circuit-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kinnaur Circuit (Sarahan-Sangla-Kalpa)",
    distance: 600,
    duration: "14 Hours",
    description:
      "Tempo traveller booking from Delhi to the Kinnaur Circuit covering Sarahan, Sangla, and Kalpa for adventurous Himalayan road trips.",
    highlights: ["Road Trip", "Mountains", "Adventure"],
    tollEstimate: 1300,
  },
  {
    id: "del-tri",
    slug: "delhi-to-triund-trek-base-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Triund Trek Base",
    distance: 480,
    duration: "10 Hours",
    description:
      "Tempo traveller booking from Delhi to Triund Trek Base for trekking groups, backpackers, and adventure enthusiasts.",
    highlights: ["Trekking", "Adventure", "Camping"],
    tollEstimate: 1000,
  },
  {
    id: "del-kar",
    slug: "delhi-to-kareri-lake-base-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kareri Lake Base",
    distance: 500,
    duration: "10.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Kareri Lake Base for trekking expeditions, camping, and nature tours.",
    highlights: ["Lake", "Trekking", "Camping"],
    tollEstimate: 1050,
  },
  {
    id: "del-indr",
    slug: "delhi-to-indrahar-pass-base-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Indrahar Pass Base",
    distance: 500,
    duration: "10.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Indrahar Pass Base for trekking expeditions, camping, and adventure group tours.",
    highlights: ["Trekking", "Adventure", "Camping"],
    tollEstimate: 1050,
  },
  {
    id: "del-ham",
    slug: "delhi-to-hampta-pass-base-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Hampta Pass Base (from Manali side)",
    distance: 540,
    duration: "11.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Hampta Pass Base for trekking groups, backpackers, and Himalayan adventures.",
    highlights: ["Trekking", "Adventure", "Mountains"],
    tollEstimate: 1150,
  },
  {
    id: "del-bhr",
    slug: "delhi-to-bhrigu-lake-base-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bhrigu Lake Base",
    distance: 535,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Bhrigu Lake Base for trekking, camping, and scenic mountain vacations.",
    highlights: ["Lake", "Trekking", "Camping"],
    tollEstimate: 1100,
  },
  {
    id: "del-jai",
    slug: "delhi-to-jaipur-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Jaipur",
    distance: 280,
    duration: "5.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Jaipur for family holidays, sightseeing, weddings, and corporate trips.",
    highlights: ["Heritage", "Palaces", "Tourism"],
    tollEstimate: 650,
  },
  {
    id: "del-uda",
    slug: "delhi-to-udaipur-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Udaipur",
    distance: 660,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Udaipur for destination weddings, vacations, and heritage tours.",
    highlights: ["Lakes", "Palaces", "Heritage"],
    tollEstimate: 1400,
  },
  {
    id: "del-jod",
    slug: "delhi-to-jodhpur-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Jodhpur",
    distance: 620,
    duration: "10.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Jodhpur for family vacations, cultural tours, and group travel.",
    highlights: ["Fort", "Heritage", "Tourism"],
    tollEstimate: 1300,
  },
  {
    id: "del-jais",
    slug: "delhi-to-jaisalmer-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Jaisalmer",
    distance: 820,
    duration: "14 Hours",
    description:
      "Tempo traveller booking from Delhi to Jaisalmer for desert safaris, camping, and Rajasthan sightseeing.",
    highlights: ["Desert", "Fort", "Camel Safari"],
    tollEstimate: 1700,
  },
  {
    id: "del-bik",
    slug: "delhi-to-bikaner-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bikaner",
    distance: 460,
    duration: "8 Hours",
    description:
      "Tempo traveller booking from Delhi to Bikaner for heritage tours, family vacations, and cultural trips.",
    highlights: ["Fort", "Heritage", "Desert"],
    tollEstimate: 950,
  },
  {
    id: "del-pus",
    slug: "delhi-to-pushkar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Pushkar",
    distance: 415,
    duration: "7.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Pushkar for temple visits, Pushkar Fair, and family holidays.",
    highlights: ["Temple", "Lake", "Tourism"],
    tollEstimate: 900,
  },
  {
    id: "del-ajm",
    slug: "delhi-to-ajmer-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Ajmer (Ajmer Sharif Dargah)",
    distance: 400,
    duration: "7 Hours",
    description:
      "Tempo traveller booking from Delhi to Ajmer Sharif Dargah for pilgrimage, family travel, and group tours.",
    highlights: ["Dargah", "Pilgrimage", "Tourism"],
    tollEstimate: 850,
  },
  {
    id: "del-mab",
    slug: "delhi-to-mount-abu-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Mount Abu",
    distance: 760,
    duration: "13 Hours",
    description:
      "Tempo traveller booking from Delhi to Mount Abu for hill station vacations, family tours, and group sightseeing.",
    highlights: ["Hill Station", "Nature", "Tourism"],
    tollEstimate: 1550,
  },
  {
    id: "del-ran",
    slug: "delhi-to-ranthambore-national-park-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Ranthambore National Park",
    distance: 400,
    duration: "7.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Ranthambore National Park for wildlife safaris, family vacations, and nature tours.",
    highlights: ["Wildlife", "Tiger Safari", "National Park"],
    tollEstimate: 900,
  },
  {
    id: "del-sar",
    slug: "delhi-to-sariska-tiger-reserve-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Sariska Tiger Reserve",
    distance: 215,
    duration: "4.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Sariska Tiger Reserve for jungle safaris, weekend getaways, and wildlife tours.",
    highlights: ["Tiger Reserve", "Wildlife", "Safari"],
    tollEstimate: 550,
  },
  {
    id: "del-bhar",
    slug: "delhi-to-bharatpur-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bharatpur (Keoladeo National Park)",
    distance: 220,
    duration: "4.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Bharatpur for bird watching, wildlife tourism, and family trips.",
    highlights: ["Bird Sanctuary", "National Park", "Nature"],
    tollEstimate: 550,
  },
  {
    id: "del-alw",
    slug: "delhi-to-alwar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Alwar",
    distance: 165,
    duration: "3.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Alwar for heritage sightseeing, weekend vacations, and family travel.",
    highlights: ["Heritage", "Fort", "Tourism"],
    tollEstimate: 450,
  },
  {
    id: "del-neem",
    slug: "delhi-to-neemrana-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Neemrana",
    distance: 125,
    duration: "2.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Neemrana for weekend getaways, heritage stays, and corporate outings.",
    highlights: ["Fort Palace", "Heritage", "Weekend Trip"],
    tollEstimate: 350,
  },
  {
    id: "del-manda",
    slug: "delhi-to-mandawa-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Mandawa (Shekhawati Region)",
    distance: 260,
    duration: "5 Hours",
    description:
      "Tempo traveller booking from Delhi to Mandawa for heritage tours, palace visits, and family vacations.",
    highlights: ["Havelis", "Heritage", "Art"],
    tollEstimate: 650,
  },
  {
    id: "del-nav",
    slug: "delhi-to-nawalgarh-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Nawalgarh",
    distance: 280,
    duration: "5.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Nawalgarh for heritage sightseeing, cultural tours, and family trips.",
    highlights: ["Havelis", "Heritage", "Tourism"],
    tollEstimate: 700,
  },
  {
    id: "del-fat",
    slug: "delhi-to-fatehpur-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Fatehpur",
    distance: 300,
    duration: "6 Hours",
    description:
      "Tempo traveller booking from Delhi to Fatehpur for Shekhawati heritage tours, family vacations, and cultural exploration.",
    highlights: ["Heritage", "Havelis", "Culture"],
    tollEstimate: 750,
  },
  {
    id: "del-jhu",
    slug: "delhi-to-jhunjhunu-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Jhunjhunu",
    distance: 260,
    duration: "5 Hours",
    description:
      "Tempo traveller booking from Delhi to Jhunjhunu for heritage tourism, temple visits, and family group travel.",
    highlights: ["Heritage", "Temples", "Tourism"],
    tollEstimate: 650,
  },
  {
    id: "del-chitt",
    slug: "delhi-to-chittorgarh-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Chittorgarh",
    distance: 590,
    duration: "10 Hours",
    description:
      "Tempo traveller booking from Delhi to Chittorgarh for heritage tours, family vacations, and Rajasthan sightseeing.",
    highlights: ["Fort", "Heritage", "Tourism"],
    tollEstimate: 1250,
  },
  {
    id: "del-kum",
    slug: "delhi-to-kumbhalgarh-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kumbhalgarh",
    distance: 670,
    duration: "11.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Kumbhalgarh for heritage exploration, family tours, and Rajasthan road trips.",
    highlights: ["Fort", "Heritage", "UNESCO"],
    tollEstimate: 1400,
  },
  {
    id: "del-ranp",
    slug: "delhi-to-ranakpur-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Ranakpur",
    distance: 700,
    duration: "12 Hours",
    description:
      "Tempo traveller booking from Delhi to Ranakpur for Jain temple visits, family vacations, and cultural tours.",
    highlights: ["Jain Temple", "Heritage", "Pilgrimage"],
    tollEstimate: 1450,
  },
  {
    id: "del-bun",
    slug: "delhi-to-bundi-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bundi",
    distance: 480,
    duration: "8.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Bundi for heritage sightseeing, palace visits, and family holidays.",
    highlights: ["Palace", "Fort", "Heritage"],
    tollEstimate: 1000,
  },
  {
    id: "del-kot",
    slug: "delhi-to-kota-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kota",
    distance: 520,
    duration: "9 Hours",
    description:
      "Tempo traveller booking from Delhi to Kota for business trips, educational visits, and family travel.",
    highlights: ["City", "Tourism", "Heritage"],
    tollEstimate: 1050,
  },
  {
    id: "del-saw",
    slug: "delhi-to-sawai-madhopur-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Sawai Madhopur",
    distance: 390,
    duration: "7 Hours",
    description:
      "Tempo traveller booking from Delhi to Sawai Madhopur for Ranthambore safaris, wildlife tours, and family vacations.",
    highlights: ["Wildlife", "Safari", "National Park"],
    tollEstimate: 850,
  },
  {
    id: "del-dau",
    slug: "delhi-to-dausa-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Dausa (Abhaneri Stepwell)",
    distance: 270,
    duration: "5 Hours",
    description:
      "Tempo traveller booking from Delhi to Dausa for visiting Abhaneri Stepwell, heritage attractions, and weekend trips.",
    highlights: ["Stepwell", "Heritage", "Tourism"],
    tollEstimate: 650,
  },
  {
    id: "del-bhaf",
    slug: "delhi-to-bhangarh-fort-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bhangarh Fort",
    distance: 285,
    duration: "5.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Bhangarh Fort for historical sightseeing, photography, and weekend getaways.",
    highlights: ["Fort", "History", "Tourism"],
    tollEstimate: 700,
  },
  {
    id: "del-sili",
    slug: "delhi-to-siliserh-lake-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Siliserh Lake",
    distance: 185,
    duration: "4 Hours",
    description:
      "Tempo traveller booking from Delhi to Siliserh Lake for family outings, boating, and scenic weekend trips.",
    highlights: ["Lake", "Nature", "Boating"],
    tollEstimate: 500,
  },
  {
    id: "del-dee",
    slug: "delhi-to-deeg-palace-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Deeg Palace",
    distance: 205,
    duration: "4.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Deeg Palace for heritage sightseeing, architecture tours, and family travel.",
    highlights: ["Palace", "Heritage", "Architecture"],
    tollEstimate: 550,
  },
  {
    id: "del-tal",
    slug: "delhi-to-tal-chhapar-sanctuary-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Tal Chhapar Sanctuary",
    distance: 360,
    duration: "7 Hours",
    description:
      "Tempo traveller booking from Delhi to Tal Chhapar Sanctuary for wildlife photography, birdwatching, and family nature tours.",
    highlights: ["Wildlife", "Birdwatching", "Nature"],
    tollEstimate: 800,
  },
  {
    id: "del-des",
    slug: "delhi-to-desert-national-park-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Desert National Park",
    distance: 850,
    duration: "14.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Desert National Park for desert safaris, wildlife exploration, and adventure tours.",
    highlights: ["Desert", "Wildlife", "National Park"],
    tollEstimate: 1750,
  },
  {
    id: "del-osi",
    slug: "delhi-to-osian-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Osian",
    distance: 640,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Osian for desert camping, temple visits, and Rajasthan heritage tours.",
    highlights: ["Desert", "Temples", "Safari"],
    tollEstimate: 1350,
  },
  {
    id: "del-khi",
    slug: "delhi-to-khimsar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Khimsar",
    distance: 580,
    duration: "10 Hours",
    description:
      "Tempo traveller booking from Delhi to Khimsar for fort stays, desert safaris, and family vacations.",
    highlights: ["Fort", "Desert", "Heritage"],
    tollEstimate: 1250,
  },
  {
    id: "del-barm",
    slug: "delhi-to-barmer-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Barmer",
    distance: 780,
    duration: "13.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Barmer for cultural tours, desert experiences, and family group travel.",
    highlights: ["Desert", "Culture", "Tourism"],
    tollEstimate: 1600,
  },
  {
    id: "del-jha",
    slug: "delhi-to-jhalawar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Jhalawar",
    distance: 620,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Jhalawar for heritage sightseeing, temple visits, and Rajasthan tours.",
    highlights: ["Heritage", "Temples", "Tourism"],
    tollEstimate: 1300,
  },
  {
    id: "del-dun",
    slug: "delhi-to-dungarpur-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Dungarpur",
    distance: 760,
    duration: "13 Hours",
    description:
      "Tempo traveller booking from Delhi to Dungarpur for palace visits, heritage exploration, and family vacations.",
    highlights: ["Palace", "Heritage", "Lakes"],
    tollEstimate: 1550,
  },
  {
    id: "del-ban",
    slug: "delhi-to-banswara-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Banswara",
    distance: 800,
    duration: "13.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Banswara for nature tours, temple visits, and family group travel.",
    highlights: ["Nature", "Temples", "Tourism"],
    tollEstimate: 1650,
  },
  {
    id: "del-sam",
    slug: "delhi-to-sam-sand-dunes-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Sam Sand Dunes (near Jaisalmer)",
    distance: 845,
    duration: "14 Hours",
    description:
      "Tempo traveller booking from Delhi to Sam Sand Dunes for desert camping, camel safaris, and sunset experiences.",
    highlights: ["Sand Dunes", "Camel Safari", "Desert"],
    tollEstimate: 1750,
  },
  {
    id: "del-lon",
    slug: "delhi-to-longewala-tanot-mata-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Longewala/Tanot Mata (Jaisalmer Extension)",
    distance: 930,
    duration: "15.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Longewala and Tanot Mata for border tourism, patriotic tours, and Rajasthan expeditions.",
    highlights: ["Border Tourism", "Temple", "Historical"],
    tollEstimate: 1900,
  },
  {
    id: "del-gtc",
    slug: "delhi-to-golden-triangle-circuit-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Golden Triangle Circuit (Delhi-Agra-Jaipur)",
    distance: 720,
    duration: "5 Days",
    description:
      "Tempo traveller booking from Delhi for the Golden Triangle Circuit covering Delhi, Agra, and Jaipur, perfect for family vacations, international tourists, and heritage tours.",
    highlights: ["Heritage", "Taj Mahal", "Palaces"],
    tollEstimate: 1800,
  },
  {
    id: "del-rrc",
    slug: "delhi-to-royal-rajasthan-circuit-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Royal Rajasthan Circuit (Jaipur-Jodhpur-Udaipur)",
    distance: 1450,
    duration: "7 Days",
    description:
      "Tempo traveller booking from Delhi for the Royal Rajasthan Circuit covering Jaipur, Jodhpur, and Udaipur with comfortable group travel.",
    highlights: ["Palaces", "Heritage", "Road Trip"],
    tollEstimate: 3200,
  },
  {
    id: "del-dtc",
    slug: "delhi-to-desert-triangle-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Desert Triangle (Jodhpur-Jaisalmer-Bikaner)",
    distance: 1650,
    duration: "7 Days",
    description:
      "Tempo traveller booking from Delhi for the Desert Triangle covering Jodhpur, Jaisalmer, and Bikaner with desert safaris and heritage attractions.",
    highlights: ["Desert", "Camel Safari", "Forts"],
    tollEstimate: 3600,
  },
  {
    id: "del-mwc",
    slug: "delhi-to-mewar-circuit-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Mewar Circuit (Udaipur-Chittorgarh-Kumbhalgarh)",
    distance: 1550,
    duration: "7 Days",
    description:
      "Tempo traveller booking from Delhi for the Mewar Circuit covering Udaipur, Chittorgarh, and Kumbhalgarh for heritage and cultural exploration.",
    highlights: ["UNESCO", "Forts", "Lakes"],
    tollEstimate: 3400,
  },
  {
    id: "del-dhc",
    slug: "delhi-to-dhundhar-circuit-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Dhundhar Circuit (Jaipur-Shekhawati-Alwar)",
    distance: 820,
    duration: "4 Days",
    description:
      "Tempo traveller booking from Delhi for the Dhundhar Circuit covering Jaipur, Shekhawati, and Alwar, ideal for heritage and cultural tours.",
    highlights: ["Heritage", "Havelis", "Palaces"],
    tollEstimate: 1900,
  },
  {
    id: "del-bbc",
    slug: "delhi-to-braj-bhoomi-circuit-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Braj Bhoomi Circuit (Mathura-Vrindavan-Bharatpur-Deeg)",
    distance: 520,
    duration: "3 Days",
    description:
      "Tempo traveller booking from Delhi for the Braj Bhoomi Circuit covering Mathura, Vrindavan, Bharatpur, and Deeg for spiritual and heritage travel.",
    highlights: ["Pilgrimage", "Temples", "Heritage"],
    tollEstimate: 1200,
  },
  {
    id: "del-agr",
    slug: "delhi-to-agra-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Agra (Taj Mahal)",
    distance: 240,
    duration: "4 Hours",
    description:
      "Tempo traveller booking from Delhi to Agra for Taj Mahal sightseeing, family vacations, school trips, and corporate outings.",
    highlights: ["Taj Mahal", "UNESCO", "Heritage"],
    tollEstimate: 600,
  },
  {
    id: "del-mat",
    slug: "delhi-to-mathura-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Mathura (Krishna Janmabhoomi)",
    distance: 185,
    duration: "3.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Mathura for Krishna Janmabhoomi darshan, family pilgrimages, and group tours.",
    highlights: ["Temple", "Pilgrimage", "Spiritual"],
    tollEstimate: 500,
  },
  {
    id: "del-vri",
    slug: "delhi-to-vrindavan-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Vrindavan",
    distance: 180,
    duration: "3.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Vrindavan for temple visits, spiritual retreats, and family pilgrimages.",
    highlights: ["Temples", "Pilgrimage", "Spiritual"],
    tollEstimate: 500,
  },
  {
    id: "del-var",
    slug: "delhi-to-varanasi-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Varanasi (Kashi Vishwanath)",
    distance: 820,
    duration: "13 Hours",
    description:
      "Tempo traveller booking from Delhi to Varanasi for Kashi Vishwanath Temple darshan, Ganga Aarti, and spiritual family tours.",
    highlights: ["Kashi Vishwanath", "Ganga Aarti", "Pilgrimage"],
    tollEstimate: 1700,
  },
  {
    id: "del-pra",
    slug: "delhi-to-prayagraj-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Prayagraj (Triveni Sangam)",
    distance: 710,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Prayagraj for Triveni Sangam darshan, Kumbh Mela, and family pilgrimage tours.",
    highlights: ["Triveni Sangam", "Kumbh Mela", "Pilgrimage"],
    tollEstimate: 1450,
  },
  {
    id: "del-ayo",
    slug: "delhi-to-ayodhya-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Ayodhya (Ram Janmabhoomi)",
    distance: 690,
    duration: "10.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Ayodhya for Ram Janmabhoomi darshan, family pilgrimages, and spiritual group tours.",
    highlights: ["Ram Mandir", "Pilgrimage", "Spiritual"],
    tollEstimate: 1400,
  },
  {
    id: "del-luc",
    slug: "delhi-to-lucknow-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Lucknow",
    distance: 555,
    duration: "8.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Lucknow for business trips, family vacations, and heritage sightseeing.",
    highlights: ["Heritage", "Culture", "Tourism"],
    tollEstimate: 1150,
  },
  {
    id: "del-kus",
    slug: "delhi-to-kushinagar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kushinagar",
    distance: 845,
    duration: "13 Hours",
    description:
      "Tempo traveller booking from Delhi to Kushinagar for Buddhist pilgrimage, heritage tours, and international group travel.",
    highlights: ["Buddhist", "Pilgrimage", "Heritage"],
    tollEstimate: 1750,
  },
  {
    id: "del-sarn",
    slug: "delhi-to-sarnath-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Sarnath",
    distance: 835,
    duration: "13 Hours",
    description:
      "Tempo traveller booking from Delhi to Sarnath for Buddhist pilgrimage, heritage sightseeing, and family tours.",
    highlights: ["Buddhist", "Heritage", "Pilgrimage"],
    tollEstimate: 1700,
  },
  {
    id: "del-dud",
    slug: "delhi-to-dudhwa-national-park-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Dudhwa National Park",
    distance: 430,
    duration: "8 Hours",
    description:
      "Tempo traveller booking from Delhi to Dudhwa National Park for wildlife safaris, birdwatching, and nature vacations.",
    highlights: ["Wildlife", "National Park", "Safari"],
    tollEstimate: 950,
  },
  {
    id: "del-chitr",
    slug: "delhi-to-chitrakoot-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Chitrakoot",
    distance: 670,
    duration: "10.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Chitrakoot for religious tours, Ramayana circuit visits, and family pilgrimages.",
    highlights: ["Pilgrimage", "Ramayana", "Temples"],
    tollEstimate: 1350,
  },
  {
    id: "del-naim",
    slug: "delhi-to-naimisharanya-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Naimisharanya",
    distance: 430,
    duration: "7.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Naimisharanya for spiritual tours, temple visits, and family pilgrimages.",
    highlights: ["Pilgrimage", "Temple", "Spiritual"],
    tollEstimate: 900,
  },
  {
    id: "del-bat",
    slug: "delhi-to-bateshwar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bateshwar",
    distance: 280,
    duration: "5 Hours",
    description:
      "Tempo traveller booking from Delhi to Bateshwar for temple visits, heritage sightseeing, and family trips.",
    highlights: ["Temples", "Heritage", "Pilgrimage"],
    tollEstimate: 650,
  },
  {
    id: "del-bar",
    slug: "delhi-to-barsana-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Barsana",
    distance: 165,
    duration: "3.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Barsana for Radha Rani Temple darshan, Holi celebrations, and spiritual tours.",
    highlights: ["Radha Rani Temple", "Holi", "Pilgrimage"],
    tollEstimate: 450,
  },
  {
    id: "del-gok",
    slug: "delhi-to-gokul-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Gokul",
    distance: 175,
    duration: "3.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Gokul for Krishna pilgrimage, temple visits, and family spiritual tours.",
    highlights: ["Krishna", "Pilgrimage", "Temples"],
    tollEstimate: 500,
  },
  {
    id: "del-gov",
    slug: "delhi-to-govardhan-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Govardhan",
    distance: 185,
    duration: "4 Hours",
    description:
      "Tempo traveller booking from Delhi to Govardhan for Govardhan Parikrama, temple visits, and family pilgrimages.",
    highlights: ["Govardhan Parikrama", "Pilgrimage", "Temples"],
    tollEstimate: 500,
  },
  {
    id: "del-fsk",
    slug: "delhi-to-fatehpur-sikri-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Fatehpur Sikri",
    distance: 235,
    duration: "4.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Fatehpur Sikri for UNESCO heritage sightseeing, family vacations, and historical tours.",
    highlights: ["UNESCO", "Heritage", "History"],
    tollEstimate: 600,
  },
  {
    id: "del-mee",
    slug: "delhi-to-meerut-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Meerut",
    distance: 80,
    duration: "2 Hours",
    description:
      "Tempo traveller booking from Delhi to Meerut for business trips, weddings, family travel, and corporate outings.",
    highlights: ["Business", "Family Trip", "City"],
    tollEstimate: 250,
  },
  {
    id: "del-has",
    slug: "delhi-to-hastinapur-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Hastinapur",
    distance: 120,
    duration: "2.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Hastinapur for Jain pilgrimage, Mahabharata heritage tours, and family visits.",
    highlights: ["Mahabharata", "Jain Pilgrimage", "Heritage"],
    tollEstimate: 350,
  },
  {
    id: "del-bit",
    slug: "delhi-to-bithoor-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bithoor",
    distance: 450,
    duration: "8 Hours",
    description:
      "Tempo traveller booking from Delhi to Bithoor for spiritual tours, heritage sightseeing, and family pilgrimages.",
    highlights: ["Pilgrimage", "Heritage", "Ganga"],
    tollEstimate: 950,
  },
  {
    id: "del-jhan",
    slug: "delhi-to-jhansi-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Jhansi",
    distance: 475,
    duration: "8 Hours",
    description:
      "Tempo traveller booking from Delhi to Jhansi for heritage tours, family vacations, and historical sightseeing.",
    highlights: ["Jhansi Fort", "Heritage", "History"],
    tollEstimate: 1000,
  },
  {
    id: "del-orc",
    slug: "delhi-to-orchha-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Orchha (MP border, often paired with UP)",
    distance: 500,
    duration: "8.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Orchha for palace visits, heritage exploration, and family group tours.",
    highlights: ["Palaces", "Heritage", "Temples"],
    tollEstimate: 1050,
  },
  {
    id: "del-mir",
    slug: "delhi-to-mirzapur-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Mirzapur (Vindhyachal Dham)",
    distance: 800,
    duration: "12.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Mirzapur for Vindhyachal Dham darshan, family pilgrimages, and spiritual tours.",
    highlights: ["Vindhyachal Dham", "Pilgrimage", "Temples"],
    tollEstimate: 1650,
  },
  {
    id: "del-pil",
    slug: "delhi-to-pilibhit-tiger-reserve-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Pilibhit Tiger Reserve",
    distance: 380,
    duration: "7 Hours",
    description:
      "Tempo traveller booking from Delhi to Pilibhit Tiger Reserve for wildlife safaris, birdwatching, and nature holidays.",
    highlights: ["Tiger Reserve", "Wildlife", "Safari"],
    tollEstimate: 850,
  },
  {
    id: "del-kaush",
    slug: "delhi-to-kaushambi-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kaushambi",
    distance: 670,
    duration: "10.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Kaushambi for Buddhist heritage tours, archaeological visits, and family group travel.",
    highlights: ["Buddhist", "Archaeology", "Heritage"],
    tollEstimate: 1400,
  },
  {
    id: "del-shr",
    slug: "delhi-to-shravasti-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Shravasti",
    distance: 670,
    duration: "10.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Shravasti for Buddhist pilgrimage, monastery visits, and heritage tourism.",
    highlights: ["Buddhist", "Pilgrimage", "Heritage"],
    tollEstimate: 1400,
  },
  {
    id: "del-sank",
    slug: "delhi-to-sankisa-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Sankisa",
    distance: 315,
    duration: "6 Hours",
    description:
      "Tempo traveller booking from Delhi to Sankisa for Buddhist pilgrimage, historical exploration, and family tours.",
    highlights: ["Buddhist", "Pilgrimage", "History"],
    tollEstimate: 750,
  },
  {
    id: "del-kam",
    slug: "delhi-to-kampil-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kampil",
    distance: 255,
    duration: "5 Hours",
    description:
      "Tempo traveller booking from Delhi to Kampil for Jain pilgrimage, temple visits, and heritage sightseeing.",
    highlights: ["Jain", "Pilgrimage", "Temples"],
    tollEstimate: 650,
  },
  {
    id: "del-ahi",
    slug: "delhi-to-ahichhatra-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Ahichhatra",
    distance: 280,
    duration: "5.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Ahichhatra for archaeological tours, Buddhist heritage, and family travel.",
    highlights: ["Archaeology", "Heritage", "Buddhist"],
    tollEstimate: 700,
  },
  {
    id: "del-bud",
    slug: "delhi-to-buddhist-circuit-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Buddhist Circuit (Sarnath-Kushinagar-Shravasti-Sankisa)",
    distance: 1650,
    duration: "7 Days",
    description:
      "Tempo traveller booking from Delhi for the Buddhist Circuit covering Sarnath, Kushinagar, Shravasti, and Sankisa with comfortable group travel.",
    highlights: ["Buddhist", "Pilgrimage", "Heritage"],
    tollEstimate: 3500,
  },
  {
    id: "del-ram",
    slug: "delhi-to-ramayana-circuit-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Ramayana Circuit (Ayodhya-Chitrakoot-Naimisharanya)",
    distance: 1550,
    duration: "6 Days",
    description:
      "Tempo traveller booking from Delhi for the Ramayana Circuit covering Ayodhya, Chitrakoot, and Naimisharanya for spiritual group tours.",
    highlights: ["Ramayana", "Pilgrimage", "Temples"],
    tollEstimate: 3300,
  },
  {
    id: "del-b84",
    slug: "delhi-to-braj-84-kos-parikrama-route-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Braj 84 Kos Parikrama Route",
    distance: 520,
    duration: "4 Days",
    description:
      "Tempo traveller booking from Delhi for the Braj 84 Kos Parikrama Route covering sacred temples and pilgrimage destinations around Braj.",
    highlights: ["Parikrama", "Pilgrimage", "Temples"],
    tollEstimate: 1200,
  },
  {
    id: "del-amr",
    slug: "delhi-to-amritsar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Amritsar (Golden Temple, Wagah Border)",
    distance: 460,
    duration: "8 Hours",
    description:
      "Tempo traveller booking from Delhi to Amritsar for Golden Temple darshan, Wagah Border ceremony, and family vacations.",
    highlights: ["Golden Temple", "Wagah Border", "Pilgrimage"],
    tollEstimate: 1000,
  },
  {
    id: "del-chand",
    slug: "delhi-to-chandigarh-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Chandigarh",
    distance: 250,
    duration: "5 Hours",
    description:
      "Tempo traveller booking from Delhi to Chandigarh for business trips, family vacations, and weekend getaways.",
    highlights: ["City", "Business", "Tourism"],
    tollEstimate: 650,
  },
  {
    id: "del-lud",
    slug: "delhi-to-ludhiana-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Ludhiana",
    distance: 315,
    duration: "5.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Ludhiana for business trips, family travel, weddings, and corporate group tours.",
    highlights: ["Business", "Industrial City", "Family Trip"],
    tollEstimate: 750,
  },
  {
    id: "del-jal",
    slug: "delhi-to-jalandhar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Jalandhar",
    distance: 380,
    duration: "6.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Jalandhar for family vacations, business travel, and group tours across Punjab.",
    highlights: ["Business", "Heritage", "Tourism"],
    tollEstimate: 850,
  },
  {
    id: "del-pati",
    slug: "delhi-to-patiala-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Patiala",
    distance: 255,
    duration: "5 Hours",
    description:
      "Tempo traveller booking from Delhi to Patiala for heritage sightseeing, weddings, and comfortable family travel.",
    highlights: ["Heritage", "Palaces", "Culture"],
    tollEstimate: 650,
  },
  {
    id: "del-kap",
    slug: "delhi-to-kapurthala-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kapurthala",
    distance: 400,
    duration: "7 Hours",
    description:
      "Tempo traveller booking from Delhi to Kapurthala for palace visits, heritage tours, and family vacations.",
    highlights: ["Palaces", "Heritage", "Architecture"],
    tollEstimate: 900,
  },
  {
    id: "del-ana",
    slug: "delhi-to-anandpur-sahib-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Anandpur Sahib",
    distance: 330,
    duration: "6 Hours",
    description:
      "Tempo traveller booking from Delhi to Anandpur Sahib for Sikh pilgrimage, Gurudwara visits, and family spiritual tours.",
    highlights: ["Gurudwara", "Pilgrimage", "Spiritual"],
    tollEstimate: 800,
  },
  {
    id: "del-fate",
    slug: "delhi-to-fatehgarh-sahib-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Fatehgarh Sahib",
    distance: 290,
    duration: "5.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Fatehgarh Sahib for Sikh pilgrimage, heritage tours, and family travel.",
    highlights: ["Gurudwara", "Heritage", "Pilgrimage"],
    tollEstimate: 700,
  },
  {
    id: "del-goi",
    slug: "delhi-to-goindwal-sahib-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Goindwal Sahib",
    distance: 430,
    duration: "7.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Goindwal Sahib for Gurudwara visits, Sikh pilgrimage, and group spiritual tours.",
    highlights: ["Gurudwara", "Pilgrimage", "Religious"],
    tollEstimate: 950,
  },
  {
    id: "del-tarn",
    slug: "delhi-to-tarn-taran-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Tarn Taran",
    distance: 470,
    duration: "8 Hours",
    description:
      "Tempo traveller booking from Delhi to Tarn Taran for Gurudwara darshan, family pilgrimages, and Punjab tours.",
    highlights: ["Gurudwara", "Pilgrimage", "Tourism"],
    tollEstimate: 1000,
  },
  {
    id: "del-sir",
    slug: "delhi-to-sirhind-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Sirhind",
    distance: 265,
    duration: "5 Hours",
    description:
      "Tempo traveller booking from Delhi to Sirhind for Sikh heritage tours, Gurudwara visits, and family group travel.",
    highlights: ["Heritage", "Gurudwara", "Pilgrimage"],
    tollEstimate: 650,
  },
  {
    id: "del-bha",
    slug: "delhi-to-bhatinda-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bhatinda (Qila Mubarak)",
    distance: 335,
    duration: "6 Hours",
    description:
      "Tempo traveller booking from Delhi to Bhatinda for Qila Mubarak sightseeing, family vacations, and business travel.",
    highlights: ["Qila Mubarak", "Heritage", "Tourism"],
    tollEstimate: 800,
  },
  {
    id: "del-patk",
    slug: "delhi-to-pathankot-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Pathankot (gateway to Himachal/J&K)",
    distance: 485,
    duration: "9 Hours",
    description:
      "Tempo traveller booking from Delhi to Pathankot for family vacations, business travel, and onward journeys to Himachal Pradesh and Jammu & Kashmir.",
    highlights: ["Gateway", "Himachal", "J&K"],
    tollEstimate: 1050,
  },
  {
    id: "del-nan",
    slug: "delhi-to-nangal-dam-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Nangal Dam",
    distance: 360,
    duration: "6.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Nangal Dam for sightseeing, family outings, and nature tours.",
    highlights: ["Dam", "Nature", "Tourism"],
    tollEstimate: 850,
  },
  {
    id: "del-rop",
    slug: "delhi-to-ropar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Ropar (Indus Valley Site)",
    distance: 310,
    duration: "5.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Ropar for heritage exploration, archaeological visits, and family tours.",
    highlights: ["Indus Valley", "Archaeology", "Heritage"],
    tollEstimate: 750,
  },
  {
    id: "del-vek",
    slug: "delhi-to-virasat-e-khalsa-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Virasat-e-Khalsa (Anandpur Sahib)",
    distance: 330,
    duration: "6 Hours",
    description:
      "Tempo traveller booking from Delhi to Virasat-e-Khalsa for Sikh heritage tours, museum visits, and family pilgrimages.",
    highlights: ["Museum", "Sikh Heritage", "Tourism"],
    tollEstimate: 800,
  },
  {
    id: "del-chz",
    slug: "delhi-to-chhatbir-zoo-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Chhatbir Zoo",
    distance: 265,
    duration: "5 Hours",
    description:
      "Tempo traveller booking from Delhi to Chhatbir Zoo for family outings, school trips, and wildlife experiences.",
    highlights: ["Zoo", "Wildlife", "Family Trip"],
    tollEstimate: 650,
  },
  {
    id: "del-muk",
    slug: "delhi-to-muktsar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Muktsar",
    distance: 410,
    duration: "7.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Muktsar for Sikh pilgrimage, heritage visits, and family group travel.",
    highlights: ["Pilgrimage", "Heritage", "Gurudwara"],
    tollEstimate: 900,
  },
  {
    id: "del-fari",
    slug: "delhi-to-faridkot-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Faridkot",
    distance: 390,
    duration: "7 Hours",
    description:
      "Tempo traveller booking from Delhi to Faridkot for heritage sightseeing, family travel, and Punjab tours.",
    highlights: ["Heritage", "Palace", "Tourism"],
    tollEstimate: 900,
  },
  {
    id: "del-talw",
    slug: "delhi-to-talwandi-sabo-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Talwandi Sabo (Takht Sri Damdama Sahib)",
    distance: 380,
    duration: "7 Hours",
    description:
      "Tempo traveller booking from Delhi to Talwandi Sabo for Takht Sri Damdama Sahib darshan, Sikh pilgrimage, and group tours.",
    highlights: ["Takht", "Gurudwara", "Pilgrimage"],
    tollEstimate: 850,
  },
  {
    id: "del-der",
    slug: "delhi-to-dera-baba-nanak-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Dera Baba Nanak (Kartarpur Corridor Viewpoint)",
    distance: 500,
    duration: "9 Hours",
    description:
      "Tempo traveller booking from Delhi to Dera Baba Nanak for Kartarpur Corridor viewpoint visits, Sikh pilgrimage, and family travel.",
    highlights: ["Kartarpur", "Pilgrimage", "Border Tourism"],
    tollEstimate: 1100,
  },
  {
    id: "del-jam",
    slug: "delhi-to-jammu-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Jammu (Vaishno Devi base Katra)",
    distance: 590,
    duration: "10 Hours",
    description:
      "Tempo traveller booking from Delhi to Jammu for Vaishno Devi pilgrimages, family vacations, and group tours to Jammu & Kashmir.",
    highlights: ["Vaishno Devi", "Pilgrimage", "Jammu"],
    tollEstimate: 1250,
  },
  {
    id: "del-kat",
    slug: "delhi-to-katra-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Katra",
    distance: 650,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Katra for Vaishno Devi pilgrimage, family tours, and comfortable group travel.",
    highlights: ["Vaishno Devi", "Pilgrimage", "Family Tour"],
    tollEstimate: 1350,
  },
  {
    id: "del-patni",
    slug: "delhi-to-patnitop-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Patnitop",
    distance: 670,
    duration: "11.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Patnitop for hill station vacations, adventure activities, and family getaways.",
    highlights: ["Hill Station", "Adventure", "Nature"],
    tollEstimate: 1400,
  },
  {
    id: "del-sri",
    slug: "delhi-to-srinagar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Srinagar",
    distance: 810,
    duration: "14 Hours",
    description:
      "Tempo traveller booking from Delhi to Srinagar for Kashmir holidays, Dal Lake sightseeing, and family vacations.",
    highlights: ["Dal Lake", "Kashmir", "Tourism"],
    tollEstimate: 1700,
  },
  {
    id: "del-gul",
    slug: "delhi-to-gulmarg-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Gulmarg",
    distance: 860,
    duration: "15 Hours",
    description:
      "Tempo traveller booking from Delhi to Gulmarg for skiing, gondola rides, honeymoon trips, and family holidays.",
    highlights: ["Skiing", "Gondola", "Snow"],
    tollEstimate: 1800,
  },
  {
    id: "del-pah",
    slug: "delhi-to-pahalgam-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Pahalgam",
    distance: 890,
    duration: "15.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Pahalgam for Kashmir sightseeing, Amarnath Yatra, and family vacations.",
    highlights: ["Valley", "Amarnath", "Nature"],
    tollEstimate: 1850,
  },
  {
    id: "del-son",
    slug: "delhi-to-sonamarg-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Sonamarg",
    distance: 900,
    duration: "16 Hours",
    description:
      "Tempo traveller booking from Delhi to Sonamarg for glacier tours, adventure trips, and scenic Kashmir vacations.",
    highlights: ["Glacier", "Adventure", "Mountains"],
    tollEstimate: 1900,
  },
  {
    id: "del-yus",
    slug: "delhi-to-yusmarg-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Yusmarg",
    distance: 845,
    duration: "14.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Yusmarg for peaceful nature retreats, family holidays, and photography tours.",
    highlights: ["Meadows", "Nature", "Photography"],
    tollEstimate: 1750,
  },
  {
    id: "del-doo",
    slug: "delhi-to-doodhpathri-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Doodhpathri",
    distance: 835,
    duration: "14.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Doodhpathri for meadow sightseeing, picnics, and Kashmir family vacations.",
    highlights: ["Meadows", "Nature", "Tourism"],
    tollEstimate: 1750,
  },
  {
    id: "del-bhad",
    slug: "delhi-to-bhaderwah-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bhaderwah",
    distance: 700,
    duration: "12 Hours",
    description:
      "Tempo traveller booking from Delhi to Bhaderwah for mountain holidays, trekking, and family group travel.",
    highlights: ["Mountains", "Trekking", "Nature"],
    tollEstimate: 1450,
  },
  {
    id: "del-kis",
    slug: "delhi-to-kishtwar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kishtwar",
    distance: 760,
    duration: "13 Hours",
    description:
      "Tempo traveller booking from Delhi to Kishtwar for adventure trips, trekking expeditions, and scenic Himalayan tours.",
    highlights: ["Adventure", "Trekking", "Mountains"],
    tollEstimate: 1550,
  },
  {
    id: "del-aha",
    slug: "delhi-to-aharbal-falls-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Aharbal Falls",
    distance: 880,
    duration: "15 Hours",
    description:
      "Tempo traveller booking from Delhi to Aharbal Falls for nature lovers, photography tours, and scenic Kashmir vacations.",
    highlights: ["Waterfall", "Nature", "Photography"],
    tollEstimate: 1850,
  },
  {
    id: "del-leh",
    slug: "delhi-to-leh-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Leh (via Manali)",
    distance: 1020,
    duration: "2 Days",
    description:
      "Tempo traveller booking from Delhi to Leh via Manali for Himalayan road trips, adventure expeditions, and group tours.",
    highlights: ["Road Trip", "Mountains", "Adventure"],
    tollEstimate: 2400,
  },
  {
    id: "del-lehs",
    slug: "delhi-to-leh-via-srinagar-kargil-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Leh (via Srinagar-Kargil)",
    distance: 1230,
    duration: "2 Days",
    description:
      "Tempo traveller booking from Delhi to Leh via Srinagar and Kargil for scenic Himalayan journeys and Ladakh expeditions.",
    highlights: ["Ladakh", "Road Trip", "Mountains"],
    tollEstimate: 2700,
  },
  {
    id: "del-karg",
    slug: "delhi-to-kargil-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kargil",
    distance: 1020,
    duration: "18 Hours",
    description:
      "Tempo traveller booking from Delhi to Kargil for heritage tours, adventure travel, and Ladakh road trips.",
    highlights: ["War Memorial", "Mountains", "Adventure"],
    tollEstimate: 2200,
  },
  {
    id: "del-lam",
    slug: "delhi-to-lamayuru-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Lamayuru",
    distance: 1140,
    duration: "20 Hours",
    description:
      "Tempo traveller booking from Delhi to Lamayuru for monastery visits, Ladakh sightseeing, and adventure expeditions.",
    highlights: ["Monastery", "Ladakh", "Adventure"],
    tollEstimate: 2500,
  },
  {
    id: "del-nub",
    slug: "delhi-to-nubra-valley-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Nubra Valley (Diskit-Hunder)",
    distance: 1180,
    duration: "21 Hours",
    description:
      "Tempo traveller booking from Delhi to Nubra Valley for desert camping, camel rides, and unforgettable Ladakh tours.",
    highlights: ["Sand Dunes", "Camel Safari", "Ladakh"],
    tollEstimate: 2600,
  },
  {
    id: "del-pang",
    slug: "delhi-to-pangong-tso-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Pangong Tso",
    distance: 1260,
    duration: "22 Hours",
    description:
      "Tempo traveller booking from Delhi to Pangong Tso for high-altitude lake tours, camping, and Ladakh adventures.",
    highlights: ["Lake", "Ladakh", "Camping"],
    tollEstimate: 2800,
  },
  {
    id: "del-tsm",
    slug: "delhi-to-tso-moriri-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Tso Moriri",
    distance: 1320,
    duration: "23 Hours",
    description:
      "Tempo traveller booking from Delhi to Tso Moriri for wildlife, high-altitude lake exploration, and adventure travel.",
    highlights: ["Lake", "Wildlife", "Ladakh"],
    tollEstimate: 2900,
  },
  {
    id: "del-tsk",
    slug: "delhi-to-tso-kar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Tso Kar",
    distance: 1280,
    duration: "22 Hours",
    description:
      "Tempo traveller booking from Delhi to Tso Kar for birdwatching, camping, and scenic Ladakh road trips.",
    highlights: ["Salt Lake", "Birdwatching", "Adventure"],
    tollEstimate: 2800,
  },
  {
    id: "del-zan",
    slug: "delhi-to-zanskar-valley-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Zanskar Valley",
    distance: 1320,
    duration: "24 Hours",
    description:
      "Tempo traveller booking from Delhi to Zanskar Valley for trekking, rafting, and remote Himalayan adventures.",
    highlights: ["Valley", "Trekking", "Adventure"],
    tollEstimate: 3000,
  },
  {
    id: "del-dra",
    slug: "delhi-to-drass-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Drass",
    distance: 980,
    duration: "17 Hours",
    description:
      "Tempo traveller booking from Delhi to Drass for war memorial visits, Himalayan road trips, and adventure tours.",
    highlights: ["War Memorial", "Mountains", "Adventure"],
    tollEstimate: 2100,
  },
  {
    id: "del-ule",
    slug: "delhi-to-uleytokpo-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Uleytokpo",
    distance: 1120,
    duration: "20 Hours",
    description:
      "Tempo traveller booking from Delhi to Uleytokpo for Ladakh sightseeing, riverside camping, and group adventures.",
    highlights: ["Ladakh", "Camping", "Nature"],
    tollEstimate: 2450,
  },
  {
    id: "del-alc",
    slug: "delhi-to-alchi-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Alchi",
    distance: 1110,
    duration: "19.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Alchi for monastery visits, cultural exploration, and Ladakh road trips.",
    highlights: ["Monastery", "Heritage", "Ladakh"],
    tollEstimate: 2400,
  },
  {
    id: "del-bas",
    slug: "delhi-to-basgo-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Basgo",
    distance: 1105,
    duration: "19.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Basgo for heritage sightseeing, monastery tours, and Himalayan adventures.",
    highlights: ["Fort", "Monastery", "Heritage"],
    tollEstimate: 2400,
  },
  {
    id: "del-hemi",
    slug: "delhi-to-hemis-monastery-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Hemis Monastery",
    distance: 1065,
    duration: "18.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Hemis Monastery for Buddhist pilgrimage, monastery tours, and Ladakh vacations.",
    highlights: ["Monastery", "Buddhist", "Pilgrimage"],
    tollEstimate: 2300,
  },
  {
    id: "del-thi",
    slug: "delhi-to-thiksey-monastery-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Thiksey Monastery",
    distance: 1060,
    duration: "18.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Thiksey Monastery for monastery visits, cultural tours, and Ladakh sightseeing.",
    highlights: ["Monastery", "Culture", "Ladakh"],
    tollEstimate: 2300,
  },
  {
    id: "del-sto",
    slug: "delhi-to-stok-kangri-base-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Stok Kangri Base",
    distance: 1075,
    duration: "19 Hours",
    description:
      "Tempo traveller booking from Delhi to Stok Kangri Base for trekking expeditions, mountaineering, and adventure travel.",
    highlights: ["Trekking", "Mountaineering", "Adventure"],
    tollEstimate: 2350,
  },
  {
    id: "del-suru",
    slug: "delhi-to-suru-valley-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Suru Valley",
    distance: 1090,
    duration: "19 Hours",
    description:
      "Tempo traveller booking from Delhi to Suru Valley for scenic Himalayan tours, camping, and photography trips.",
    highlights: ["Valley", "Nature", "Photography"],
    tollEstimate: 2400,
  },
  {
    id: "del-war",
    slug: "delhi-to-warwan-valley-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Warwan Valley",
    distance: 1030,
    duration: "18 Hours",
    description:
      "Tempo traveller booking from Delhi to Warwan Valley for offbeat Himalayan adventures, trekking, and camping tours.",
    highlights: ["Valley", "Trekking", "Camping"],
    tollEstimate: 2200,
  },
  {
    id: "del-tul",
    slug: "delhi-to-tulail-valley-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Tulail Valley",
    distance: 980,
    duration: "17.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Tulail Valley for remote Kashmir tours, nature escapes, and adventure travel.",
    highlights: ["Valley", "Nature", "Adventure"],
    tollEstimate: 2100,
  },
  {
    id: "del-gur",
    slug: "delhi-to-gurez-valley-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Gurez Valley",
    distance: 920,
    duration: "16 Hours",
    description:
      "Tempo traveller booking from Delhi to Gurez Valley for offbeat Kashmir tours, nature escapes, and adventure group travel.",
    highlights: ["Valley", "Nature", "Adventure"],
    tollEstimate: 1950,
  },
  {
    id: "del-lol",
    slug: "delhi-to-lolab-valley-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Lolab Valley",
    distance: 890,
    duration: "15.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Lolab Valley for scenic Kashmir vacations, photography tours, and family holidays.",
    highlights: ["Valley", "Nature", "Photography"],
    tollEstimate: 1900,
  },
  {
    id: "del-bang",
    slug: "delhi-to-bangus-valley-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bangus Valley",
    distance: 910,
    duration: "16 Hours",
    description:
      "Tempo traveller booking from Delhi to Bangus Valley for camping, trekking, and offbeat Himalayan adventures.",
    highlights: ["Camping", "Trekking", "Valley"],
    tollEstimate: 1950,
  },
  {
    id: "del-gwa",
    slug: "delhi-to-gwalior-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Gwalior",
    distance: 365,
    duration: "6.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Gwalior for heritage sightseeing, family vacations, and historical tours.",
    highlights: ["Fort", "Heritage", "History"],
    tollEstimate: 850,
  },
  {
    id: "del-orch",
    slug: "delhi-to-orchha-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Orchha",
    distance: 475,
    duration: "8 Hours",
    description:
      "Tempo traveller booking from Delhi to Orchha for palace visits, temple tours, and heritage group travel.",
    highlights: ["Palaces", "Temples", "Heritage"],
    tollEstimate: 1000,
  },
  {
    id: "del-kha",
    slug: "delhi-to-khajuraho-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Khajuraho",
    distance: 650,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Khajuraho for UNESCO temple tours, heritage exploration, and family vacations.",
    highlights: ["UNESCO", "Temples", "Heritage"],
    tollEstimate: 1350,
  },
  {
    id: "del-bho",
    slug: "delhi-to-bhopal-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bhopal",
    distance: 760,
    duration: "12 Hours",
    description:
      "Tempo traveller booking from Delhi to Bhopal for business trips, sightseeing, and family travel.",
    highlights: ["Lakes", "Heritage", "City"],
    tollEstimate: 1550,
  },
  {
    id: "del-sanc",
    slug: "delhi-to-sanchi-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Sanchi",
    distance: 800,
    duration: "12.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Sanchi for Buddhist heritage tours, UNESCO monument visits, and cultural travel.",
    highlights: ["Buddhist", "UNESCO", "Heritage"],
    tollEstimate: 1650,
  },
  {
    id: "del-ujj",
    slug: "delhi-to-ujjain-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Ujjain (Mahakaleshwar)",
    distance: 780,
    duration: "13 Hours",
    description:
      "Tempo traveller booking from Delhi to Ujjain for Mahakaleshwar Jyotirlinga darshan, spiritual tours, and family pilgrimages.",
    highlights: ["Mahakaleshwar", "Jyotirlinga", "Pilgrimage"],
    tollEstimate: 1600,
  },
  {
    id: "del-omk",
    slug: "delhi-to-omkareshwar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Omkareshwar",
    distance: 920,
    duration: "15 Hours",
    description:
      "Tempo traveller booking from Delhi to Omkareshwar for Jyotirlinga darshan, Narmada pilgrimage, and group spiritual tours.",
    highlights: ["Jyotirlinga", "Narmada", "Pilgrimage"],
    tollEstimate: 1900,
  },
  {
    id: "del-mah",
    slug: "delhi-to-maheshwar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Maheshwar",
    distance: 890,
    duration: "14.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Maheshwar for Narmada riverfront sightseeing, heritage tours, and family vacations.",
    highlights: ["Narmada", "Heritage", "Temples"],
    tollEstimate: 1800,
  },
  {
    id: "del-ind",
    slug: "delhi-to-indore-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Indore",
    distance: 820,
    duration: "13 Hours",
    description:
      "Tempo traveller booking from Delhi to Indore for business trips, family vacations, food tours, and corporate travel.",
    highlights: ["Business", "Food", "City"],
    tollEstimate: 1700,
  },
  {
    id: "del-pac",
    slug: "delhi-to-pachmarhi-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Pachmarhi",
    distance: 930,
    duration: "15 Hours",
    description:
      "Tempo traveller booking from Delhi to Pachmarhi for hill station holidays, waterfalls, and nature escapes.",
    highlights: ["Hill Station", "Waterfalls", "Nature"],
    tollEstimate: 1900,
  },
  {
    id: "del-kanh",
    slug: "delhi-to-kanha-national-park-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kanha National Park",
    distance: 980,
    duration: "16 Hours",
    description:
      "Tempo traveller booking from Delhi to Kanha National Park for wildlife safaris, tiger spotting, and nature tours.",
    highlights: ["Tiger Safari", "Wildlife", "National Park"],
    tollEstimate: 2000,
  },
  {
    id: "del-banp",
    slug: "delhi-to-bandhavgarh-national-park-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bandhavgarh National Park",
    distance: 900,
    duration: "15 Hours",
    description:
      "Tempo traveller booking from Delhi to Bandhavgarh National Park for jungle safaris, wildlife photography, and family vacations.",
    highlights: ["Tiger Safari", "Wildlife", "Photography"],
    tollEstimate: 1900,
  },
  {
    id: "del-pen",
    slug: "delhi-to-pench-national-park-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Pench National Park",
    distance: 1030,
    duration: "16.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Pench National Park for wildlife safaris, jungle adventures, and nature holidays.",
    highlights: ["Wildlife", "Safari", "Nature"],
    tollEstimate: 2100,
  },
  {
    id: "del-sat",
    slug: "delhi-to-satpura-national-park-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Satpura National Park",
    distance: 940,
    duration: "15.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Satpura National Park for wildlife safaris, boating, and eco-tourism experiences.",
    highlights: ["National Park", "Wildlife", "Eco Tourism"],
    tollEstimate: 1950,
  },
  {
    id: "del-pann",
    slug: "delhi-to-panna-national-park-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Panna National Park",
    distance: 720,
    duration: "12 Hours",
    description:
      "Tempo traveller booking from Delhi to Panna National Park for tiger safaris, family holidays, and wildlife adventures.",
    highlights: ["Tiger Safari", "Wildlife", "National Park"],
    tollEstimate: 1500,
  },
  {
    id: "del-chande",
    slug: "delhi-to-chanderi-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Chanderi",
    distance: 500,
    duration: "8.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Chanderi for heritage sightseeing, fort visits, and textile tourism.",
    highlights: ["Fort", "Heritage", "Handloom"],
    tollEstimate: 1050,
  },
  {
    id: "del-dat",
    slug: "delhi-to-datia-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Datia",
    distance: 470,
    duration: "8 Hours",
    description:
      "Tempo traveller booking from Delhi to Datia for temple visits, palace sightseeing, and heritage tours.",
    highlights: ["Palace", "Temple", "Heritage"],
    tollEstimate: 1000,
  },
  {
    id: "del-shiv",
    slug: "delhi-to-shivpuri-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Shivpuri",
    distance: 480,
    duration: "9 Hours",
    description:
      "Tempo traveller booking from Delhi to Shivpuri for wildlife tours, heritage sightseeing, and family group trips.",
    highlights: ["Madhav National Park", "George Castle", "Heritage"],
    tollEstimate: 1050,
  },
  {
    id: "del-jab",
    slug: "delhi-to-jabalpur-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Jabalpur (Bhedaghat Marble Rocks)",
    distance: 900,
    duration: "15 Hours",
    description:
      "Tempo traveller booking from Delhi to Jabalpur (Bhedaghat Marble Rocks) for marble rock sightseeing, waterfalls, and family tours.",
    highlights: ["Bhedaghat", "Dhuandhar Falls", "Marble Rocks"],
    tollEstimate: 2200,
  },
  {
    id: "del-ama",
    slug: "delhi-to-amarkantak-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Amarkantak",
    distance: 1030,
    duration: "17 Hours",
    description:
      "Tempo traveller booking from Delhi to Amarkantak for pilgrimage, waterfalls, and nature tours.",
    highlights: ["Narmada Origin", "Temples", "Waterfalls"],
    tollEstimate: 2500,
  },
  {
    id: "del-chi",
    slug: "delhi-to-chitrakoot-mp-side-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Chitrakoot (MP side)",
    distance: 690,
    duration: "12 Hours",
    description:
      "Tempo traveller booking from Delhi to Chitrakoot (MP side) for pilgrimage, temple visits, and spiritual tours.",
    highlights: ["Kamadgiri", "Ram Ghat", "Gupt Godavari"],
    tollEstimate: 1600,
  },
  {
    id: "del-man",
    slug: "delhi-to-mandu-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Mandu",
    distance: 820,
    duration: "14 Hours",
    description:
      "Tempo traveller booking from Delhi to Mandu for heritage sightseeing, forts, and historical tours.",
    highlights: ["Jahaz Mahal", "Baz Bahadur Palace", "Ruins"],
    tollEstimate: 2000,
  },
  {
    id: "del-bur",
    slug: "delhi-to-burhanpur-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Burhanpur",
    distance: 810,
    duration: "14 Hours",
    description:
      "Tempo traveller booking from Delhi to Burhanpur for heritage tours, Mughal monuments, and family travel.",
    highlights: ["Shahi Qila", "Asirgarh Fort", "Heritage"],
    tollEstimate: 1950,
  },
  {
    id: "del-bhimb",
    slug: "delhi-to-bhimbetka-rock-shelters-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bhimbetka Rock Shelters",
    distance: 760,
    duration: "13 Hours",
    description:
      "Tempo traveller booking from Delhi to Bhimbetka Rock Shelters for UNESCO heritage tours and archaeological sightseeing.",
    highlights: ["UNESCO Site", "Rock Paintings", "History"],
    tollEstimate: 1800,
  },
  {
    id: "del-tam",
    slug: "delhi-to-tamia-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Tamia",
    distance: 900,
    duration: "15 Hours",
    description:
      "Tempo traveller booking from Delhi to Tamia for hill station vacations, nature escapes, and family trips.",
    highlights: ["Sunset Point", "Hill Station", "Nature"],
    tollEstimate: 2200,
  },
  {
    id: "del-patal",
    slug: "delhi-to-patalkot-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Patalkot",
    distance: 930,
    duration: "16 Hours",
    description:
      "Tempo traveller booking from Delhi to Patalkot for valley exploration, tribal tourism, and adventure trips.",
    highlights: ["Valley", "Tribal Culture", "Nature"],
    tollEstimate: 2300,
  },
  {
    id: "del-han",
    slug: "delhi-to-hanuwantiya-island-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Hanuwantiya Island",
    distance: 870,
    duration: "15 Hours",
    description:
      "Tempo traveller booking from Delhi to Hanuwantiya Island for water sports, camping, and group vacations.",
    highlights: ["Water Sports", "Camping", "Island"],
    tollEstimate: 2100,
  },
  {
    id: "del-sai",
    slug: "delhi-to-sailani-island-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Sailani Island",
    distance: 830,
    duration: "14 Hours",
    description:
      "Tempo traveller booking from Delhi to Sailani Island for nature retreats, riverside sightseeing, and family vacations.",
    highlights: ["Island", "Nature", "Boating"],
    tollEstimate: 2000,
  },
  {
    id: "del-gsl",
    slug: "delhi-to-gandhisagar-lake-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Gandhisagar Lake",
    distance: 610,
    duration: "11 Hours",
    description:
      "Tempo traveller booking from Delhi to Gandhisagar Lake for boating, bird watching, and weekend getaways.",
    highlights: ["Lake", "Boating", "Bird Watching"],
    tollEstimate: 1450,
  },
  {
    id: "del-taw",
    slug: "delhi-to-tawa-reservoir-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Tawa Reservoir",
    distance: 830,
    duration: "14 Hours",
    description:
      "Tempo traveller booking from Delhi to Tawa Reservoir for nature tourism, boating, and family group travel.",
    highlights: ["Reservoir", "Boating", "Nature"],
    tollEstimate: 2000,
  },
  {
    id: "del-ahm",
    slug: "delhi-to-ahmedabad-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Ahmedabad",
    distance: 950,
    duration: "16 Hours",
    description:
      "Tempo traveller booking from Delhi to Ahmedabad for business trips, heritage sightseeing, and family vacations.",
    highlights: ["Sabarmati Ashram", "Heritage", "Business"],
    tollEstimate: 2300,
  },
  {
    id: "del-som",
    slug: "delhi-to-somnath-temple-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Somnath Temple",
    distance: 1350,
    duration: "22 Hours",
    description:
      "Tempo traveller booking from Delhi to Somnath Temple for pilgrimage tours, temple visits, and family travel.",
    highlights: ["Jyotirlinga", "Temple", "Pilgrimage"],
    tollEstimate: 3300,
  },
  {
    id: "del-dwa",
    slug: "delhi-to-dwarkadhish-temple-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Dwarkadhish Temple",
    distance: 1450,
    duration: "24 Hours",
    description:
      "Tempo traveller booking from Delhi to Dwarkadhish Temple for Char Dham pilgrimage and spiritual group tours.",
    highlights: ["Dwarka", "Temple", "Pilgrimage"],
    tollEstimate: 3500,
  },
  {
    id: "del-nag",
    slug: "delhi-to-nageshwar-jyotirlinga-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Nageshwar Jyotirlinga",
    distance: 1470,
    duration: "24 Hours",
    description:
      "Tempo traveller booking from Delhi to Nageshwar Jyotirlinga for pilgrimage tours and Jyotirlinga darshan.",
    highlights: ["Jyotirlinga", "Temple", "Spiritual"],
    tollEstimate: 3550,
  },
  {
    id: "del-bdw",
    slug: "delhi-to-beyt-dwarka-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Beyt Dwarka",
    distance: 1490,
    duration: "25 Hours",
    description:
      "Tempo traveller booking from Delhi to Beyt Dwarka for island sightseeing, pilgrimage, and family tours.",
    highlights: ["Island", "Temple", "Ferry Ride"],
    tollEstimate: 3600,
  },
  {
    id: "del-por",
    slug: "delhi-to-porbandar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Porbandar",
    distance: 1380,
    duration: "23 Hours",
    description:
      "Tempo traveller booking from Delhi to Porbandar for coastal sightseeing, heritage tours, and family vacations.",
    highlights: ["Kirti Mandir", "Beach", "Heritage"],
    tollEstimate: 3350,
  },
  {
    id: "del-gir",
    slug: "delhi-to-gir-national-park-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Gir National Park (Sasan Gir)",
    distance: 1320,
    duration: "22 Hours",
    description:
      "Tempo traveller booking from Delhi to Gir National Park (Sasan Gir) for wildlife safaris, nature tours, and group vacations.",
    highlights: ["Lion Safari", "Wildlife", "National Park"],
    tollEstimate: 3200,
  },
  {
    id: "del-rann",
    slug: "delhi-to-rann-of-kutch-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Rann of Kutch (White Desert - Dhordo)",
    distance: 1250,
    duration: "21 Hours",
    description:
      "Tempo traveller booking from Delhi to Rann of Kutch (White Desert - Dhordo) for desert festivals, sightseeing, and family group tours.",
    highlights: ["White Desert", "Rann Utsav", "Sunset View"],
    tollEstimate: 3100,
  },
  {
    id: "del-bhu",
    slug: "delhi-to-bhuj-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bhuj",
    distance: 1180,
    duration: "20 Hours",
    description:
      "Tempo traveller booking from Delhi to Bhuj for heritage tours, handicraft shopping, and family vacations.",
    highlights: ["Aina Mahal", "Prag Mahal", "Handicrafts"],
    tollEstimate: 2900,
  },
  {
    id: "del-mvb",
    slug: "delhi-to-mandvi-beach-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Mandvi Beach",
    distance: 1240,
    duration: "21 Hours",
    description:
      "Tempo traveller booking from Delhi to Mandvi Beach for beach holidays, coastal sightseeing, and group trips.",
    highlights: ["Beach", "Vijay Vilas Palace", "Water Sports"],
    tollEstimate: 3050,
  },
  {
    id: "del-dho",
    slug: "delhi-to-dholavira-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Dholavira (Indus Valley Site)",
    distance: 1310,
    duration: "22 Hours",
    description:
      "Tempo traveller booking from Delhi to Dholavira (Indus Valley Site) for archaeological tours, heritage sightseeing, and educational trips.",
    highlights: ["UNESCO Site", "Indus Valley", "Archaeology"],
    tollEstimate: 3200,
  },
  {
    id: "del-sur",
    slug: "delhi-to-surat-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Surat",
    distance: 1160,
    duration: "19 Hours",
    description:
      "Tempo traveller booking from Delhi to Surat for business travel, family vacations, and city sightseeing.",
    highlights: ["Dumas Beach", "Textile Market", "Business Hub"],
    tollEstimate: 2850,
  },
  {
    id: "del-vad",
    slug: "delhi-to-vadodara-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Vadodara (Baroda)",
    distance: 980,
    duration: "17 Hours",
    description:
      "Tempo traveller booking from Delhi to Vadodara (Baroda) for heritage tours, business travel, and family trips.",
    highlights: ["Laxmi Vilas Palace", "Sayaji Garden", "Museum"],
    tollEstimate: 2400,
  },
  {
    id: "del-champ",
    slug: "delhi-to-champaner-pavagadh-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Champaner-Pavagadh",
    distance: 1020,
    duration: "17 Hours",
    description:
      "Tempo traveller booking from Delhi to Champaner-Pavagadh for UNESCO heritage tours, temple visits, and family travel.",
    highlights: ["UNESCO Site", "Pavagadh Temple", "Historic Fort"],
    tollEstimate: 2500,
  },
  {
    id: "del-sou",
    slug: "delhi-to-statue-of-unity-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Statue of Unity (Kevadia)",
    distance: 1080,
    duration: "18 Hours",
    description:
      "Tempo traveller booking from Delhi to Statue of Unity (Kevadia) for sightseeing, family vacations, and educational tours.",
    highlights: ["Statue of Unity", "Valley of Flowers", "Viewing Gallery"],
    tollEstimate: 2650,
  },
  {
    id: "del-sap",
    slug: "delhi-to-saputara-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Saputara",
    distance: 1230,
    duration: "21 Hours",
    description:
      "Tempo traveller booking from Delhi to Saputara for hill station holidays, nature trips, and family vacations.",
    highlights: ["Hill Station", "Lake", "Sunset Point"],
    tollEstimate: 3000,
  },
  {
    id: "del-amb",
    slug: "delhi-to-ambaji-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Ambaji",
    distance: 910,
    duration: "16 Hours",
    description:
      "Tempo traveller booking from Delhi to Ambaji for pilgrimage tours, temple visits, and spiritual family trips.",
    highlights: ["Ambaji Temple", "Gabbar Hill", "Pilgrimage"],
    tollEstimate: 2250,
  },
  {
    id: "del-mod",
    slug: "delhi-to-modhera-sun-temple-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Modhera Sun Temple",
    distance: 890,
    duration: "15 Hours",
    description:
      "Tempo traveller booking from Delhi to Modhera Sun Temple for heritage sightseeing, temple visits, and family group tours.",
    highlights: ["Sun Temple", "Heritage", "Architecture"],
    tollEstimate: 2200,
  },
  {
    id: "del-pat",
    slug: "delhi-to-patan-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Patan (Rani ki Vav)",
    distance: 930,
    duration: "16 Hours",
    description:
      "Tempo traveller booking from Delhi to Patan (Rani ki Vav) for UNESCO heritage tours, stepwell sightseeing, and cultural trips.",
    highlights: ["Rani ki Vav", "UNESCO Site", "Heritage"],
    tollEstimate: 2300,
  },
  {
    id: "del-pal",
    slug: "delhi-to-palitana-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Palitana",
    distance: 1230,
    duration: "21 Hours",
    description:
      "Tempo traveller booking from Delhi to Palitana for Jain pilgrimage, temple visits, and spiritual group tours.",
    highlights: ["Shatrunjaya Hills", "Jain Temples", "Pilgrimage"],
    tollEstimate: 3000,
  },
  {
    id: "del-diu",
    slug: "delhi-to-diu-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Diu (Union Territory, often paired)",
    distance: 1310,
    duration: "22 Hours",
    description:
      "Tempo traveller booking from Delhi to Diu for beach holidays, sightseeing, and family vacations.",
    highlights: ["Diu Fort", "Nagoa Beach", "Portuguese Heritage"],
    tollEstimate: 3200,
  },
  {
    id: "del-sil",
    slug: "delhi-to-silvassa-dadra-and-nagar-haveli-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Silvassa/Dadra and Nagar Haveli (paired)",
    distance: 1240,
    duration: "21 Hours",
    description:
      "Tempo traveller booking from Delhi to Silvassa and Dadra & Nagar Haveli for nature trips, family vacations, and sightseeing.",
    highlights: ["Nature Parks", "Tribal Culture", "Gardens"],
    tollEstimate: 3050,
  },
  {
    id: "del-dam",
    slug: "delhi-to-daman-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Daman (paired)",
    distance: 1290,
    duration: "22 Hours",
    description:
      "Tempo traveller booking from Delhi to Daman for beach vacations, heritage sightseeing, and family trips.",
    highlights: ["Devka Beach", "Jampore Beach", "Portuguese Fort"],
    tollEstimate: 3150,
  },
  {
    id: "del-lot",
    slug: "delhi-to-lothal-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Lothal (Indus Valley Site)",
    distance: 1030,
    duration: "17 Hours",
    description:
      "Tempo traveller booking from Delhi to Lothal for archaeological tours, educational trips, and heritage sightseeing.",
    highlights: ["Indus Valley", "Archaeological Site", "Museum"],
    tollEstimate: 2500,
  },
  {
    id: "del-vel",
    slug: "delhi-to-velavadar-blackbuck-national-park-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Velavadar Blackbuck National Park",
    distance: 1180,
    duration: "20 Hours",
    description:
      "Tempo traveller booking from Delhi to Velavadar Blackbuck National Park for wildlife safaris, bird watching, and nature tours.",
    highlights: ["Blackbuck", "Wildlife", "Bird Watching"],
    tollEstimate: 2900,
  },
  {
    id: "del-mar",
    slug: "delhi-to-marine-national-park-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Marine National Park (Jamnagar)",
    distance: 1280,
    duration: "22 Hours",
    description:
      "Tempo traveller booking from Delhi to Marine National Park (Jamnagar) for marine wildlife exploration and eco-tourism.",
    highlights: ["Marine Life", "Coral Reefs", "Eco Tourism"],
    tollEstimate: 3150,
  },
  {
    id: "del-jun",
    slug: "delhi-to-junagadh-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Junagadh",
    distance: 1260,
    duration: "21 Hours",
    description:
      "Tempo traveller booking from Delhi to Junagadh for heritage sightseeing, temple visits, and family vacations.",
    highlights: ["Uparkot Fort", "Girnar Hills", "Mahabat Maqbara"],
    tollEstimate: 3100,
  },
  {
    id: "del-bhv",
    slug: "delhi-to-bhavnagar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bhavnagar",
    distance: 1170,
    duration: "20 Hours",
    description:
      "Tempo traveller booking from Delhi to Bhavnagar for business travel, heritage sightseeing, and family vacations.",
    highlights: ["Takhteshwar Temple", "Nilambag Palace", "Heritage"],
    tollEstimate: 2900,
  },
  {
    id: "del-raj",
    slug: "delhi-to-rajkot-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Rajkot",
    distance: 1110,
    duration: "19 Hours",
    description:
      "Tempo traveller booking from Delhi to Rajkot for business trips, sightseeing, and family group travel.",
    highlights: ["Watson Museum", "Kaba Gandhi No Delo", "City Tour"],
    tollEstimate: 2750,
  },
  {
    id: "del-tar",
    slug: "delhi-to-taranga-hills-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Taranga Hills",
    distance: 930,
    duration: "16 Hours",
    description:
      "Tempo traveller booking from Delhi to Taranga Hills for Jain pilgrimage, trekking, and heritage tours.",
    highlights: ["Taranga Jain Temple", "Hill Trek", "Scenic Views"],
    tollEstimate: 2300,
  },
  {
    id: "del-zai",
    slug: "delhi-to-zainabad-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Zainabad (Little Rann of Kutch, Wild Ass Sanctuary)",
    distance: 1040,
    duration: "18 Hours",
    description:
      "Tempo traveller booking from Delhi to Zainabad for wildlife safaris, bird watching, and nature tours.",
    highlights: ["Wild Ass Sanctuary", "Safari", "Bird Watching"],
    tollEstimate: 2550,
  },
  {
    id: "del-sbs",
    slug: "delhi-to-sultanpur-bird-sanctuary-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Sultanpur Bird Sanctuary (Gurgaon)",
    distance: 45,
    duration: "1 Hour",
    description:
      "Tempo traveller booking from Delhi to Sultanpur Bird Sanctuary for bird watching, school trips, and family outings.",
    highlights: ["Bird Sanctuary", "Nature", "Photography"],
    tollEstimate: 150,
  },
  {
    id: "del-damd",
    slug: "delhi-to-damdama-lake-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Damdama Lake (Gurgaon)",
    distance: 60,
    duration: "2 Hours",
    description:
      "Tempo traveller booking from Delhi to Damdama Lake for picnics, boating, and adventure activities.",
    highlights: ["Lake", "Boating", "Adventure"],
    tollEstimate: 200,
  },
  {
    id: "del-soh",
    slug: "delhi-to-sohna-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Sohna",
    distance: 55,
    duration: "2 Hours",
    description:
      "Tempo traveller booking from Delhi to Sohna for weekend trips, hot springs, and family outings.",
    highlights: ["Hot Springs", "Weekend Getaway", "Nature"],
    tollEstimate: 180,
  },
  {
    id: "del-mane",
    slug: "delhi-to-manesar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Manesar",
    distance: 50,
    duration: "1.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Manesar for corporate outings, resorts, and family trips.",
    highlights: ["Resorts", "Corporate Trips", "Adventure"],
    tollEstimate: 180,
  },
  {
    id: "del-patau",
    slug: "delhi-to-pataudi-palace-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Pataudi Palace",
    distance: 75,
    duration: "2 Hours",
    description:
      "Tempo traveller booking from Delhi to Pataudi Palace for heritage tours, photography, and weekend travel.",
    highlights: ["Heritage Palace", "Photography", "History"],
    tollEstimate: 250,
  },
  {
    id: "del-far",
    slug: "delhi-to-faridabad-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Faridabad (Surajkund)",
    distance: 35,
    duration: "1 Hour",
    description:
      "Tempo traveller booking from Delhi to Faridabad (Surajkund) for cultural events, sightseeing, and family outings.",
    highlights: ["Surajkund", "Crafts Mela", "Lake"],
    tollEstimate: 120,
  },
  {
    id: "del-bkl",
    slug: "delhi-to-badkhal-lake-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Badkhal Lake",
    distance: 38,
    duration: "1 Hour",
    description:
      "Tempo traveller booking from Delhi to Badkhal Lake for family outings, nature trips, and weekend getaways.",
    highlights: ["Lake", "Nature", "Picnic Spot"],
    tollEstimate: 120,
  },
  {
    id: "del-aso",
    slug: "delhi-to-asola-bhatti-wildlife-sanctuary-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Asola Bhatti Wildlife Sanctuary",
    distance: 28,
    duration: "1 Hour",
    description:
      "Tempo traveller booking from Delhi to Asola Bhatti Wildlife Sanctuary for wildlife exploration, bird watching, and trekking.",
    highlights: ["Wildlife", "Nature Trails", "Bird Watching"],
    tollEstimate: 100,
  },
  {
    id: "del-noi",
    slug: "delhi-to-noida-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Noida (Worlds of Wonder, Okhla Bird Sanctuary)",
    distance: 25,
    duration: "1 Hour",
    description:
      "Tempo traveller booking from Delhi to Noida for amusement parks, bird sanctuary visits, and family outings.",
    highlights: ["Worlds of Wonder", "Okhla Bird Sanctuary", "Shopping"],
    tollEstimate: 100,
  },
  {
    id: "del-gno",
    slug: "delhi-to-greater-noida-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Greater Noida (Night Safari, F1 Circuit)",
    distance: 48,
    duration: "1.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Greater Noida for adventure parks, exhibitions, and corporate travel.",
    highlights: ["Night Safari", "Buddh International Circuit", "Expo Mart"],
    tollEstimate: 180,
  },
  {
    id: "del-ghz",
    slug: "delhi-to-ghaziabad-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Ghaziabad",
    distance: 30,
    duration: "1 Hour",
    description:
      "Tempo traveller booking from Delhi to Ghaziabad for business trips, family functions, and local sightseeing.",
    highlights: ["City Travel", "Business", "Shopping"],
    tollEstimate: 100,
  },
  {
    id: "del-dudh",
    slug: "delhi-to-dudhwa-wetlands-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Dudhwa (Dadri) Wetlands",
    distance: 60,
    duration: "2 Hours",
    description:
      "Tempo traveller booking from Delhi to Dudhwa (Dadri) Wetlands for bird watching, photography, and nature excursions.",
    highlights: ["Wetlands", "Bird Watching", "Nature"],
    tollEstimate: 200,
  },
  {
    id: "del-kuc",
    slug: "delhi-to-kuchesar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kuchesar (Mud Fort)",
    distance: 95,
    duration: "2.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Kuchesar for heritage stays, palace visits, and weekend getaways.",
    highlights: ["Mud Fort", "Heritage", "Village Tourism"],
    tollEstimate: 300,
  },
  {
    id: "del-bul",
    slug: "delhi-to-bulandshahr-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bulandshahr",
    distance: 85,
    duration: "2 Hours",
    description:
      "Tempo traveller booking from Delhi to Bulandshahr for family trips, business travel, and local sightseeing.",
    highlights: ["Historic City", "Temples", "Local Markets"],
    tollEstimate: 250,
  },
  {
    id: "del-ali",
    slug: "delhi-to-aligarh-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Aligarh",
    distance: 145,
    duration: "3 Hours",
    description:
      "Tempo traveller booking from Delhi to Aligarh for educational visits, family travel, and business trips.",
    highlights: ["Aligarh Fort", "AMU", "Heritage"],
    tollEstimate: 450,
  },
  {
    id: "del-sambh",
    slug: "delhi-to-sambhal-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Sambhal",
    distance: 175,
    duration: "4 Hours",
    description:
      "Tempo traveller booking from Delhi to Sambhal for family visits, heritage exploration, and group travel.",
    highlights: ["Historic Town", "Mosques", "Local Heritage"],
    tollEstimate: 550,
  },
  {
    id: "del-mor",
    slug: "delhi-to-moradabad-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Moradabad",
    distance: 165,
    duration: "4 Hours",
    description:
      "Tempo traveller booking from Delhi to Moradabad for business trips, brass handicraft shopping, and family travel.",
    highlights: ["Brass City", "Shopping", "Heritage"],
    tollEstimate: 500,
  },
  {
    id: "del-ramp",
    slug: "delhi-to-rampur-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Rampur",
    distance: 190,
    duration: "4.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Rampur for heritage sightseeing, family trips, and cultural tours.",
    highlights: ["Raza Library", "Rampur Fort", "Heritage"],
    tollEstimate: 600,
  },
  {
    id: "del-bare",
    slug: "delhi-to-bareilly-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Bareilly",
    distance: 265,
    duration: "5.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Bareilly for business travel, family vacations, and religious visits.",
    highlights: ["Alakhnath Temple", "Fun City", "Shopping"],
    tollEstimate: 800,
  },
  {
    id: "del-pili",
    slug: "delhi-to-pilibhit-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Pilibhit (Tiger Reserve)",
    distance: 305,
    duration: "6.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Pilibhit Tiger Reserve for wildlife safaris, nature tours, and group vacations.",
    highlights: ["Tiger Reserve", "Wildlife Safari", "Nature"],
    tollEstimate: 900,
  },
  {
    id: "del-muz",
    slug: "delhi-to-muzaffarnagar-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Muzaffarnagar (Shukdev Ashram)",
    distance: 130,
    duration: "3 Hours",
    description:
      "Tempo traveller booking from Delhi to Muzaffarnagar for pilgrimage, family travel, and heritage sightseeing.",
    highlights: ["Shukdev Ashram", "Pilgrimage", "Heritage"],
    tollEstimate: 400,
  },
  {
    id: "del-sah",
    slug: "delhi-to-saharanpur-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Saharanpur (Shakumbhari Devi)",
    distance: 175,
    duration: "4 Hours",
    description:
      "Tempo traveller booking from Delhi to Saharanpur for temple visits, woodcraft shopping, and family tours.",
    highlights: ["Shakumbhari Devi Temple", "Wood Carving", "Pilgrimage"],
    tollEstimate: 550,
  },
  {
    id: "del-karn",
    slug: "delhi-to-karnal-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Karnal",
    distance: 125,
    duration: "2.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Karnal for business trips, family outings, and sightseeing.",
    highlights: ["Karna Lake", "Heritage", "Family Trip"],
    tollEstimate: 350,
  },
  {
    id: "del-kur",
    slug: "delhi-to-kurukshetra-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Kurukshetra",
    distance: 165,
    duration: "3.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Kurukshetra for pilgrimage, historical sightseeing, and educational tours.",
    highlights: ["Brahma Sarovar", "Jyotisar", "Mahabharata Heritage"],
    tollEstimate: 500,
  },
  {
    id: "del-pan",
    slug: "delhi-to-panipat-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Panipat",
    distance: 95,
    duration: "2 Hours",
    description:
      "Tempo traveller booking from Delhi to Panipat for historical tours, business travel, and family trips.",
    highlights: ["Panipat Museum", "Battlefield", "Shopping"],
    tollEstimate: 300,
  },
  {
    id: "del-soni",
    slug: "delhi-to-sonipat-tempo-traveller-fare",
    origin: "Delhi",
    destination: "Sonipat",
    distance: 50,
    duration: "1.5 Hours",
    description:
      "Tempo traveller booking from Delhi to Sonipat for business travel, family outings, and weekend trips.",
    highlights: ["Khwaja Khizr Tomb", "Murthal", "Local Attractions"],
    tollEstimate: 180,
  },
  {
  id: "del-roh",
  slug: "delhi-to-rohtak-tempo-traveller-fare",
  origin: "Delhi",
  destination: "Rohtak",
  distance: 75,
  duration: "2 Hours",
  description:
    "Tempo traveller booking from Delhi to Rohtak for business travel, family functions, and weekend trips.",
  highlights: ["Tilyar Lake", "Zoo", "Heritage"],
  tollEstimate: 250,
},
{
  id: "del-bhiw",
  slug: "delhi-to-bhiwani-tempo-traveller-fare",
  origin: "Delhi",
  destination: "Bhiwani",
  distance: 125,
  duration: "3 Hours",
  description:
    "Tempo traveller booking from Delhi to Bhiwani for family travel, business trips, and sightseeing.",
  highlights: ["Star Monument", "Temples", "Heritage"],
  tollEstimate: 400,
},
{
  id: "del-his",
  slug: "delhi-to-hisar-tempo-traveller-fare",
  origin: "Delhi",
  destination: "Hisar",
  distance: 180,
  duration: "4 Hours",
  description:
    "Tempo traveller booking from Delhi to Hisar for business travel, heritage tours, and family vacations.",
  highlights: ["Firoz Shah Palace", "Blue Bird Lake", "Heritage"],
  tollEstimate: 550,
},
{
  id: "del-sirs",
  slug: "delhi-to-sirsa-tempo-traveller-fare",
  origin: "Delhi",
  destination: "Sirsa",
  distance: 255,
  duration: "5 Hours",
  description:
    "Tempo traveller booking from Delhi to Sirsa for religious visits, family travel, and business trips.",
  highlights: ["Dera Sacha Sauda", "Temples", "City Tour"],
  tollEstimate: 750,
},
{
  id: "del-hans",
  slug: "delhi-to-hansi-tempo-traveller-fare",
  origin: "Delhi",
  destination: "Hansi",
  distance: 165,
  duration: "3.5 Hours",
  description:
    "Tempo traveller booking from Delhi to Hansi for historical sightseeing and family group travel.",
  highlights: ["Hansi Fort", "Ancient Gates", "Heritage"],
  tollEstimate: 500,
},
{
  id: "del-kai",
  slug: "delhi-to-kaithal-tempo-traveller-fare",
  origin: "Delhi",
  destination: "Kaithal",
  distance: 170,
  duration: "3.5 Hours",
  description:
    "Tempo traveller booking from Delhi to Kaithal for pilgrimage, heritage tours, and family trips.",
  highlights: ["Kapal Mochan", "Temples", "Historic Sites"],
  tollEstimate: 500,
},
{
  id: "del-rew",
  slug: "delhi-to-rewari-tempo-traveller-fare",
  origin: "Delhi",
  destination: "Rewari (Heritage Steam Loco Shed)",
  distance: 85,
  duration: "2 Hours",
  description:
    "Tempo traveller booking from Delhi to Rewari for railway heritage tours, family outings, and sightseeing.",
  highlights: ["Steam Loco Shed", "Rail Museum", "Heritage"],
  tollEstimate: 250,
},
{
  id: "del-narn",
  slug: "delhi-to-narnaul-tempo-traveller-fare",
  origin: "Delhi",
  destination: "Narnaul (Dharuhera-Chopta Valley)",
  distance: 130,
  duration: "3 Hours",
  description:
    "Tempo traveller booking from Delhi to Narnaul for heritage sightseeing and weekend road trips.",
  highlights: ["Jal Mahal", "Ancient Monuments", "Heritage"],
  tollEstimate: 400,
},
{
  id: "del-bwd",
  slug: "delhi-to-bhiwadi-tempo-traveller-fare",
  origin: "Delhi",
  destination: "Bhiwadi",
  distance: 70,
  duration: "2 Hours",
  description:
    "Tempo traveller booking from Delhi to Bhiwadi for corporate travel, business meetings, and family trips.",
  highlights: ["Industrial Hub", "Resorts", "Weekend Stay"],
  tollEstimate: 220,
},
{
  id: "del-nee",
  slug: "delhi-to-neemrana-tempo-traveller-fare",
  origin: "Delhi",
  destination: "Neemrana (Midway point detailed again due to popularity)",
  distance: 125,
  duration: "3 Hours",
  description:
    "Tempo traveller booking from Delhi to Neemrana for palace stays, ziplining, and heritage vacations.",
  highlights: ["Neemrana Fort Palace", "Zipline", "Heritage"],
  tollEstimate: 400,
},
{
  id: "del-kes",
  slug: "delhi-to-kesroli-tempo-traveller-fare",
  origin: "Delhi",
  destination: "Kesroli",
  distance: 165,
  duration: "3.5 Hours",
  description:
    "Tempo traveller booking from Delhi to Kesroli for heritage stays, palace visits, and weekend getaways.",
  highlights: ["Hill Fort Kesroli", "Heritage", "Luxury Stay"],
  tollEstimate: 500,
},
{
  id: "del-jin",
  slug: "delhi-to-jind-tempo-traveller-fare",
  origin: "Delhi",
  destination: "Jind",
  distance: 145,
  duration: "3 Hours",
  description:
    "Tempo traveller booking from Delhi to Jind for business travel, family visits, and religious sightseeing.",
  highlights: ["Rani Talab", "Temples", "Historic City"],
  tollEstimate: 450,
},
{
  id: "del-bag",
  slug: "delhi-to-baghpat-tempo-traveller-fare",
  origin: "Delhi",
  destination: "Baghpat (Pura Mahadev)",
  distance: 55,
  duration: "1.5 Hours",
  description:
    "Tempo traveller booking from Delhi to Baghpat for temple visits, family outings, and weekend travel.",
  highlights: ["Pura Mahadev Temple", "Pilgrimage", "Heritage"],
  tollEstimate: 180,
},
{
  id: "del-mct",
  slug: "delhi-to-meerut-cantt-tempo-traveller-fare",
  origin: "Delhi",
  destination: "Meerut Cantt (Augharnath Mandir)",
  distance: 75,
  duration: "2 Hours",
  description:
    "Tempo traveller booking from Delhi to Meerut Cantt for temple visits, heritage tours, and family trips.",
  highlights: ["Augharnath Mandir", "1857 Memorial", "Military Heritage"],
  tollEstimate: 250,
},
{
  id: "del-hap",
  slug: "delhi-to-hapur-tempo-traveller-fare",
  origin: "Delhi",
  destination: "Hapur",
  distance: 65,
  duration: "1.5 Hours",
  description:
    "Tempo traveller booking from Delhi to Hapur for business travel, family functions, and local sightseeing.",
  highlights: ["Ganga Canal", "Markets", "City Tour"],
  tollEstimate: 200,
},
{
  id: "del-gar",
  slug: "delhi-to-garhmukteshwar-tempo-traveller-fare",
  origin: "Delhi",
  destination: "Garhmukteshwar (Ganga Ghat)",
  distance: 110,
  duration: "2.5 Hours",
  description:
    "Tempo traveller booking from Delhi to Garhmukteshwar for Ganga darshan, pilgrimage, and weekend family trips.",
  highlights: ["Ganga Ghat", "Mukteshwar Temple", "Pilgrimage"],
  tollEstimate: 350,
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
  const calculatedDistance = getCalculatedDistance(distance);

  const base = calculatedDistance * 2 * rate + 500;
  // const surcharge = 500;

  return Math.round(base);
};
