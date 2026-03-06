export interface VehicleFare {
  type: string;
  name: string;
  seating: string;
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
  highlights: string[];
  faqs: { question: string; answer: string }[];
  tollEstimate?: number;
  itinerary?: { time: string; activity: string }[];
  roadConditions?: string;
  bestTime?: string;
  seasonalNotes?: string;
  comparison?: { transport: string; pros: string; cons: string }[];
}

export const VEHICLES: VehicleFare[] = [
  {
    type: "9 Seater",
    name: "9 Seater Tempo Traveller",
    seating: "9+1",
    perKmRate: 18,
    features: ["Full AC", "Push-back Seats", "Music System", "Professional Driver"],
    image: "/vehicles/9-seater-chiku.jpg",
  },
  {
    type: "12 Seater",
    name: "12 Seater Tempo Traveller",
    seating: "12+1",
    perKmRate: 22,
    features: ["Full AC", "Spacious Cabin", "Luggage Carrier", "Group Friendly"],
    image: "/vehicles/12-seater-chiku.jpg",
  },
  {
    type: "15 Seater",
    name: "15 Seater Tempo Traveller",
    seating: "15+1",
    perKmRate: 25,
    features: ["Full AC", "Reclining Seats", "Ample Legroom", "Best for Pilgrimage"],
    image: "/vehicles/15-seater-chiku.jpg",
  },
  {
    type: "16 Seater",
    name: "16 Seater Tempo Traveller",
    seating: "16+1",
    perKmRate: 26,
    features: ["Full AC", "Comfortable Seats", "Ideal for Medium Groups", "Professional Driver"],
    image: "/vehicles/16-seater-chiku.jpg",
  },
  {
    type: "20 Seater",
    name: "20 Seater Tempo Traveller",
    seating: "20+1",
    perKmRate: 30,
    features: ["Full AC", "Large Group Capacity", "Luggage Space", "Premium Interior"],
    image: "/vehicles/20-seater-chiku.jpg",
  },
  {
    type: "26 Seater",
    name: "26 Seater Tempo Traveller",
    seating: "26+1",
    perKmRate: 35,
    features: ["Full AC", "Maximum Capacity", "Long Distance Ready", "Premium Sound System"],
    image: "/vehicles/26-seater-chiku.jpg",
  },
];

export const ROUTES: TaxiRoute[] = [
  {
    id: "vns-ayu",
    slug: "varanasi-to-ayodhya-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Ayodhya",
    distance: 220,
    duration: "4.5 Hours",
    description: "Affordable tempo traveller service from Varanasi to Ayodhya. Perfect for group pilgrimages to Ram Mandir.",
    highlights: ["Doorstep Pickup", "Via Purvanchal Expressway", "Same Day Return Possible"],
    faqs: [
      { question: "What is the distance from Varanasi to Ayodhya?", answer: "The road distance is approximately 220 km." },
      { question: "Are tolls included in the fare?", answer: "No, tolls and parking are extra as per actuals." },
    ],
    tollEstimate: 450,
    itinerary: [
      { time: "06:00 AM", activity: "Pickup from Varanasi Hotel/Home" },
      { time: "08:30 AM", activity: "Breakfast break on Purvanchal Expressway" },
      { time: "10:30 AM", activity: "Arrival in Ayodhya, visit Ram Mandir" },
      { time: "01:30 PM", activity: "Lunch and visit Hanuman Garhi" },
      { time: "04:30 PM", activity: "Departure from Ayodhya" },
      { time: "09:00 PM", activity: "Drop back at Varanasi" }
    ],
    roadConditions: "Excellent via Purvanchal Expressway. Smooth 4-lane driving experience.",
    bestTime: "October to March (Pleasant weather) and Early Mornings (to beat traffic).",
    seasonalNotes: "Expect heavy rush during Ram Navami and Deepotsav. Pre-book at least 15 days in advance.",
    comparison: [
      { transport: "Tempo Traveller", pros: "Door-to-door, group stays together, luxury comfort, direct reach", cons: "Higher cost for small groups" },
      { transport: "Train", pros: "Low cost", cons: "Fixed timings, station transfers needed, hard to get group tickets" },
      { transport: "Bus", pros: "Budget friendly", cons: "Uncomfortable, no luggage security, slow travel" }
    ]
  },
  {
    id: "vns-pry",
    slug: "varanasi-to-prayagraj-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Prayagraj",
    distance: 125,
    duration: "2.5 Hours",
    description: "Quick and reliable tempo traveller for group Triveni Sangam visit. Best for Kumbh Mela and Sangam Snan.",
    highlights: ["Express Highway Route", "Ghat to Sangam Service", "Punctual Pickups"],
    faqs: [
      { question: "How long does it take?", answer: "It usually takes 2.5 to 3 hours depending on traffic." }
    ],
    tollEstimate: 200
  },
  {
    id: "vns-lko",
    slug: "varanasi-to-lucknow-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Lucknow",
    distance: 310,
    duration: "6 Hours",
    description: "Comfortable tempo traveller service between the spiritual capital and the City of Nawabs for group travel.",
    highlights: ["Comfortable Tempo Travellers", "Ideal for Group Trips", "Fixed Pricing"],
    faqs: [
      { question: "Is there a round-trip requirement for Lucknow?", answer: "Yes, we exclusively offer round-trip services for all tempo traveller bookings to ensure availability and the best fixed group rates." }
    ],
    tollEstimate: 600
  },
  {
    id: "vns-bg",
    slug: "varanasi-to-bodhgaya-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bodh Gaya",
    distance: 255,
    duration: "5.5 Hours",
    description: "Group tempo traveller for the Buddhist circuit. Safe and reliable for foreign pilgrim groups.",
    highlights: ["English Speaking Drivers", "Safe for Foreigners", "Verified Tempo Travellers"],
    faqs: [
      { question: "Is it safe to travel at night to Bodhgaya?", answer: "We recommend daytime travel for the best experience, but our drivers are expert at night driving too." }
    ]
  },
  {
    id: "vns-gkp",
    slug: "varanasi-to-gorakhpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Gorakhpur",
    distance: 200,
    duration: "4.5 Hours",
    description: "Reliable tempo traveller service to the city of Gorakhnath Temple for group pilgrimages.",
    highlights: ["Well-maintained vehicles", "Experienced drivers", "Direct route"],
    faqs: []
  },
  {
    id: "vns-gzp",
    slug: "varanasi-to-ghazipur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Ghazipur",
    distance: 80,
    duration: "2 Hours",
    description: "Short distance tempo traveller for group travel to Ghazipur.",
    highlights: ["Fastest route", "Local drivers", "Pocket friendly"],
    faqs: []
  },
  {
    id: "vns-azm",
    slug: "varanasi-to-azamgarh-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Azamgarh",
    distance: 100,
    duration: "2.5 Hours",
    description: "Daily tempo traveller service from Varanasi to Azamgarh for group and family trips.",
    highlights: ["Punctual arrivals", "Clean vehicles", "Fixed fare"],
    faqs: []
  },
  {
    id: "vns-jnp",
    slug: "varanasi-to-jaunpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jaunpur",
    distance: 65,
    duration: "1.5 Hours",
    description: "Easiest way to reach Jaunpur from Varanasi by tempo traveller with your group.",
    highlights: ["Best for family trips", "Comfortable ride", "Instant booking"],
    faqs: []
  },
  {
    id: "vns-mzp",
    slug: "varanasi-to-mirzapur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Mirzapur",
    distance: 65,
    duration: "1.5 Hours",
    description: "Tempo traveller service to Mirzapur and Vindhyachal Dham for group pilgrimages.",
    highlights: ["Shrine visits", "Experienced drivers", "Reliable service"],
    faqs: []
  },
  {
    id: "vns-pat",
    slug: "varanasi-to-patna-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Patna",
    distance: 250,
    duration: "6 Hours",
    description: "Interstate tempo traveller service from Varanasi to the capital of Bihar for groups.",
    highlights: ["Long distance experts", "AC comfort", "Interstate permits included"],
    faqs: []
  },
  {
    id: "vns-knp",
    slug: "varanasi-to-kanpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kanpur",
    distance: 330,
    duration: "7 Hours",
    description: "Professional tempo traveller service for corporate groups and events to Kanpur.",
    highlights: ["Highway driving experts", "Ample luggage space", "Corporate friendly"],
    faqs: []
  },
  {
    id: "vns-agr",
    slug: "varanasi-to-agra-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Agra",
    distance: 600,
    duration: "10 Hours",
    description: "Group travel from the city of Shiva to the city of Taj by tempo traveller.",
    highlights: ["Expressway route", "Multi-day packages", "Tourist friendly"],
    faqs: []
  },
  {
    id: "vns-vnd",
    slug: "varanasi-to-vindhyachal-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Vindhyachal",
    distance: 70,
    duration: "2 Hours",
    description: "Pilgrimage group tempo traveller for Maa Vindhyavasini Darshan.",
    highlights: ["Same day return", "Temple pickup/drop", "Budget friendly"],
    faqs: []
  },
  {
    id: "vns-kus",
    slug: "varanasi-to-kushinagar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kushinagar",
    distance: 230,
    duration: "5 Hours",
    description: "Tempo traveller service for Buddhist pilgrimage groups to Kushinagar.",
    highlights: ["Part of Buddhist circuit", "Reliable vehicles", "Guided drivers"],
    faqs: []
  },
  {
    id: "vns-ssm",
    slug: "varanasi-to-sasaram-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Sasaram",
    distance: 150,
    duration: "3.5 Hours",
    description: "Direct tempo traveller service to Sasaram for group visits.",
    highlights: ["GT Road route", "Quick transit", "Verified drivers"],
    faqs: []
  },
  {
    id: "vns-bxr",
    slug: "varanasi-to-buxar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Buxar",
    distance: 130,
    duration: "3 Hours",
    description: "Comfortable tempo traveller for group travel between Varanasi and Buxar.",
    highlights: ["Smooth ride", "Fixed pricing", "24/7 service"],
    faqs: []
  },
  {
    id: "vns-bla",
    slug: "varanasi-to-ballia-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Ballia",
    distance: 140,
    duration: "3.5 Hours",
    description: "Reliable tempo traveller for group travel to eastern UP.",
    highlights: ["Expert rural drivers", "Sturdy vehicles", "On-time service"],
    faqs: []
  },
  {
    id: "vns-deo",
    slug: "varanasi-to-deoria-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Deoria",
    distance: 180,
    duration: "4 Hours",
    description: "Daily tempo travellers from Varanasi to Deoria at best group rates.",
    highlights: ["Safe travel", "Competitive rates", "Punctual bookings"],
    faqs: []
  },
  {
    id: "vns-mau",
    slug: "varanasi-to-mau-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Mau",
    distance: 100,
    duration: "2.5 Hours",
    description: "Quick and easy tempo traveller booking for group trips to Mau from Varanasi.",
    highlights: ["Best for group events", "Clean vehicles", "Fixed fare"],
    faqs: []
  },
  {
    id: "vns-cha",
    slug: "varanasi-to-chandauli-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Chandauli",
    distance: 30,
    duration: "1 Hour",
    description: "Short distance tempo traveller for group travel to Chandauli.",
    highlights: ["Local expertise", "Fastest booking", "Transparent pricing"],
    faqs: []
  },
  {
    id: "vns-rbg",
    slug: "varanasi-to-robertsganj-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Robertsganj",
    distance: 90,
    duration: "2.5 Hours",
    description: "Tempo traveller for group trips to the industrial hub of Sonbhadra.",
    highlights: ["Hilly terrain experts", "Reliable vehicles", "Fixed prices"],
    faqs: []
  },
  {
    id: "vns-slt",
    slug: "varanasi-to-sultanpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Sultanpur",
    distance: 160,
    duration: "3.5 Hours",
    description: "Reliable tempo traveller service for group travel to Sultanpur.",
    highlights: ["Purvanchal expressway route", "On-time arrival", "Comfortable ride"],
    faqs: []
  },
  {
    id: "vns-rai",
    slug: "varanasi-to-raebareli-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Raebareli",
    distance: 230,
    duration: "5 Hours",
    description: "Professional tempo traveller rental for group trips to Raebareli from Varanasi.",
    highlights: ["Highway experts", "Well maintained vehicles", "All-inclusive prices"],
    faqs: []
  },
  {
    id: "vns-fzd",
    slug: "varanasi-to-faizabad-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Faizabad",
    distance: 210,
    duration: "4.5 Hours",
    description: "Direct tempo traveller for group pilgrimage to Faizabad (Ayodhya) at fixed rates.",
    highlights: ["Temple tourists special", "Hassle-free booking", "Proven reliability"],
    faqs: []
  },
  {
    id: "vns-cht",
    slug: "varanasi-to-chitrakoot-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Chitrakoot",
    distance: 260,
    duration: "6 Hours",
    description: "Spiritual journey to Chitrakoot from Varanasi by tempo traveller. Best for group pilgrimage and sightseeing.",
    highlights: ["Doorstep pickup", "Expert drivers", "Religious circuit special"],
    faqs: []
  },
  {
    id: "vns-raj",
    slug: "varanasi-to-rajgir-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Rajgir",
    distance: 250,
    duration: "6 Hours",
    description: "Varanasi to Rajgir tempo traveller service for the Buddhist and Jain pilgrimage groups.",
    highlights: ["Well-maintained vehicles", "Safe for families", "Hassle-free travel"],
    faqs: []
  },
  {
    id: "vns-nal",
    slug: "varanasi-to-nalanda-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Nalanda",
    distance: 260,
    duration: "6.5 Hours",
    description: "Explore the ancient heritage of Nalanda with our reliable group tempo traveller service.",
    highlights: ["Educational tours", "Comfortable seating", "On-time arrival"],
    faqs: []
  },
  {
    id: "vns-ujj",
    slug: "varanasi-to-ujjain-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Ujjain",
    distance: 950,
    duration: "16 Hours",
    description: "Long distance tempo traveller service for Mahakaleshwar Darshan from Varanasi.",
    highlights: ["Expressway route", "Night driving experts", "Multi-day packages"],
    faqs: []
  },
  {
    id: "vns-omk",
    slug: "varanasi-to-omkareshwar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Omkareshwar",
    distance: 1050,
    duration: "18 Hours",
    description: "Group pilgrimage from Kashi to Omkareshwar Jyotirlinga by premium tempo traveller.",
    highlights: ["Pan-India permits", "AC comfort", "Professional service"],
    faqs: []
  },
  {
    id: "vns-deo-bhr",
    slug: "varanasi-to-deoghar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Deoghar",
    distance: 400,
    duration: "9 Hours",
    description: "Direct tempo traveller for group pilgrimage to Baba Baidyanath Dham Deoghar.",
    highlights: ["Shrine visits", "Religious circuit", "Fixed rates"],
    faqs: []
  },
  {
    id: "vns-nai",
    slug: "varanasi-to-nainital-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Nainital",
    distance: 750,
    duration: "14 Hours",
    description: "Group hill station trip to Nainital from Varanasi with experienced hill-driving experts.",
    highlights: ["Hilly terrain experts", "Cooling comfort", "Tourist friendly"],
    faqs: []
  },
  {
    id: "vns-mus",
    slug: "varanasi-to-mussoorie-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Mussoorie",
    distance: 900,
    duration: "17 Hours",
    description: "Explore the Queen of Hills with your group in a comfortable tempo traveller from Varanasi.",
    highlights: ["Group tour special", "Clean vehicles", "Reliable mountain transport"],
    faqs: []
  },
  {
    id: "vns-sml",
    slug: "varanasi-to-shimla-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Shimla",
    distance: 1100,
    duration: "20 Hours",
    description: "Long distance group travel to Shimla from Varanasi by premium tempo traveller.",
    highlights: ["Safe for long trips", "AC comfort", "Expert mountain drivers"],
    faqs: []
  },
  {
    id: "vns-man",
    slug: "varanasi-to-manali-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Manali",
    distance: 1350,
    duration: "24 Hours",
    description: "Ultimate road trip from Varanasi to Manali for large groups and friend circles.",
    highlights: ["Premium tempo traveller", "Multiple stops planned", "All-inclusive pricing"],
    faqs: []
  },
  {
    id: "vns-cha-dham",
    slug: "varanasi-to-char-dham-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Char Dham",
    distance: 900,
    duration: "18 Hours",
    description: "Holy Char Dham Yatra group packages from Varanasi by verified tempo travellers.",
    highlights: ["Yatra specialists", "Verified vehicles", "Pilgrimage support"],
    faqs: []
  },
  {
    id: "vns-hdw",
    slug: "varanasi-to-haridwar-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Haridwar",
    distance: 850,
    duration: "15 Hours",
    description: "Reliable tempo traveller service for group Snan in Harki Pauri from Varanasi.",
    highlights: ["Express highway", "Group friendly", "24/7 support"],
    faqs: []
  },
  {
    id: "vns-rsk",
    slug: "varanasi-to-rishikesh-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Rishikesh",
    distance: 870,
    duration: "15.5 Hours",
    description: "Tempo traveller for adventure or spiritual group trips to Rishikesh from Varanasi.",
    highlights: ["Adventure group special", "Safe driving", "Flexible drop points"],
    faqs: []
  },
  {
    id: "vns-del",
    slug: "varanasi-to-delhi-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Delhi",
    distance: 820,
    duration: "14 Hours",
    description: "Comfortable interstate tempo traveller service to the capital city for group travel.",
    highlights: ["Yamuna Expressway route", "Doorstep drop", "Corporate friendly"],
    faqs: []
  },
  {
    id: "vns-sar",
    slug: "varanasi-to-sarnath-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Sarnath",
    distance: 15,
    duration: "0.5 Hours",
    description: "Local group sightseeing to the historical Buddhist site of Sarnath from Varanasi.",
    highlights: ["Half-day packages", "Local guide drivers", "Quick transit"],
    faqs: []
  },
  {
    id: "vns-son",
    slug: "varanasi-to-sonbhadra-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Sonbhadra",
    distance: 95,
    duration: "2.5 Hours",
    description: "Tempo traveller for group trips to the industrial and natural sites of Sonbhadra.",
    highlights: ["Local expertise", "Sturdy vehicles", "Fixed rates"],
    faqs: []
  },
  {
    id: "vns-dos",
    slug: "varanasi-to-dehri-on-sone-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Dehri-on-Sone",
    distance: 140,
    duration: "3 Hours",
    description: "Direct tempo traveller service for group travel to Dehri-on-Sone from Varanasi.",
    highlights: ["GT Road experts", "Punctual service", "Reliable cars"],
    faqs: []
  },
  {
    id: "vns-nam",
    slug: "varanasi-to-naimisharanya-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Naimisharanya",
    distance: 400,
    duration: "8 Hours",
    description: "Spiritual group travel to the holy site of Naimisharanya from Varanasi.",
    highlights: ["Safe pilgrimage", "Experienced drivers", "Fixed group pricing"],
    faqs: []
  },
  {
    id: "vns-shr",
    slug: "varanasi-to-shravasti-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Shravasti",
    distance: 350,
    duration: "8 Hours",
    description: "Tempo traveller for Buddhist circuit pilgrimage from Varanasi to Shravasti.",
    highlights: ["Pilgrim special", "Reliable transport", "Clean vehicles"],
    faqs: []
  },
  {
    id: "vns-lum",
    slug: "varanasi-to-lumbini-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Lumbini",
    distance: 320,
    duration: "8 Hours",
    description: "Interstate and international border crossing group tempo traveller to Lumbini.",
    highlights: ["Border crossing help", "Group tour special", "Safe and sturdy"],
    faqs: []
  },
  {
    id: "vns-kol",
    slug: "varanasi-to-kolkata-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kolkata",
    distance: 680,
    duration: "13 Hours",
    description: "Long distance group travel to the City of Joy from Varanasi by tempo traveller.",
    highlights: ["GT Road specialists", "AC comfort", "Professional long-trip drivers"],
    faqs: []
  },
  {
    id: "vns-jai",
    slug: "varanasi-to-jaipur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jaipur",
    distance: 950,
    duration: "16 Hours",
    description: "Explore the Pink City with your group in our premium tempo traveller from Varanasi.",
    highlights: ["Tourist hub experts", "Multi-day rental", "Comfortable seating"],
    faqs: []
  },
  {
    id: "vns-mat",
    slug: "varanasi-to-mathura-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Mathura",
    distance: 650,
    duration: "11 Hours",
    description: "Group pilgrimage to the land of Krishna from Varanasi by reliable tempo traveller.",
    highlights: ["Temple circuit special", "Hassle-free booking", "Reliable drivers"],
    faqs: []
  },
  {
    id: "vns-khj",
    slug: "varanasi-to-khajuraho-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Khajuraho",
    distance: 400,
    duration: "9 Hours",
    description: "Discover the heritage of Khajuraho with our group tempo traveller service.",
    highlights: ["UNESCO site tour", "Comfortable ride", "Experienced drivers"],
    faqs: []
  },
  {
    id: "vns-orc",
    slug: "varanasi-to-orchha-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Orchha",
    distance: 550,
    duration: "11 Hours",
    description: "Heritage group travel to the historical town of Orchha from Varanasi.",
    highlights: ["Safe travel", "Reliable vehicles", "Fixed fare"],
    faqs: []
  },
  {
    id: "vns-amk",
    slug: "varanasi-to-amarkantak-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Amarkantak",
    distance: 450,
    duration: "10 Hours",
    description: "Tempo traveller for group trips to the source of Narmada, Amarkantak from Varanasi.",
    highlights: ["Hill driving experts", "Group friendly", "Safe journey"],
    faqs: []
  },
  {
    id: "vns-aul",
    slug: "varanasi-to-auli-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Auli",
    distance: 950,
    duration: "20 Hours",
    description: "Experience the snow peaks of Auli with our experienced mountain group drivers.",
    highlights: ["Snow mountain experts", "Premium vehicles", "Safe mountain driving"],
    faqs: []
  },
  {
    id: "vns-rnk",
    slug: "varanasi-to-ranikhet-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Ranikhet",
    distance: 850,
    duration: "17 Hours",
    description: "Leisure group trip to Ranikhet from Varanasi by comfortable tempo traveller.",
    highlights: ["Hill station special", "Cooling comfort", "Trusted drivers"],
    faqs: []
  },
  {
    id: "vns-kau",
    slug: "varanasi-to-kausani-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kausani",
    distance: 870,
    duration: "18 Hours",
    description: "Explore the Switzerland of India, Kausani with your group from Varanasi.",
    highlights: ["Scenic route experts", "Reliable tempo travellers", "Professional service"],
    faqs: []
  },
  {
    id: "vns-uda",
    slug: "varanasi-to-udaipur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Udaipur",
    distance: 1150,
    duration: "20 Hours",
    description: "Group trip to the City of Lakes, Udaipur from Varanasi by premium tempo traveller.",
    highlights: ["Luxury travel", "Long distance reliability", "Verified drivers"],
    faqs: []
  },
  {
    id: "vns-mab",
    slug: "varanasi-to-mount-abu-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Mount Abu",
    distance: 1300,
    duration: "22 Hours",
    description: "Cool off in the hill station of Rajasthan with a group trip from Varanasi.",
    highlights: ["Hill-driving experts", "Safe for long trips", "All-inclusive prices"],
    faqs: []
  },
  {
    id: "vns-jod",
    slug: "varanasi-to-jodhpur-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jodhpur",
    distance: 1150,
    duration: "20 Hours",
    description: "Direct group tempo traveller service to the Blue City, Jodhpur from Varanasi.",
    highlights: ["Safe interstate travel", "Reliable vehicles", "Corporate and family trips"],
    faqs: []
  },
  {
    id: "vns-jsl",
    slug: "varanasi-to-jaisalmer-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Jaisalmer",
    distance: 1400,
    duration: "24 Hours",
    description: "Long haul group adventure to the Golden City, Jaisalmer from Varanasi.",
    highlights: ["Desert safari support", "Large groups special", "Verified drivers"],
    faqs: []
  },
  {
    id: "vns-net",
    slug: "varanasi-to-netarhat-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Netarhat",
    distance: 250,
    duration: "6 Hours",
    description: "Scenic group trip to the Queen of Chotanagpur, Netarhat from Varanasi.",
    highlights: ["Hill driving special", "Group friendly", "Best rates"],
    faqs: []
  },
  {
    id: "vns-gir",
    slug: "varanasi-to-giridih-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Giridih",
    distance: 320,
    duration: "7 Hours",
    description: "Reliable group transport between Varanasi and Giridih for all occasions.",
    highlights: ["Punctual arrivals", "Clean vehicles", "Fixed fare"],
    faqs: []
  },
  {
    id: "vns-par",
    slug: "varanasi-to-parasnath-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Parasnath",
    distance: 300,
    duration: "7 Hours",
    description: "Tempo traveller for Jain pilgrimage group trips to Sammed Shikharji, Parasnath.",
    highlights: ["Pilgrim specialists", "Verified vehicles", "Safe night driving"],
    faqs: []
  },
  {
    id: "vns-ran",
    slug: "varanasi-to-ranchi-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Ranchi",
    distance: 420,
    duration: "9 Hours",
    description: "Direct group tempo traveller service between Varanasi and Ranchi.",
    highlights: ["Interstate experts", "Verified drivers", "Hassle-free booking"],
    faqs: []
  },
  {
    id: "vns-sdi",
    slug: "varanasi-to-shirdi-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Shirdi",
    distance: 1300,
    duration: "24 Hours",
    description: "Kashi to Shirdi Sai Baba Darshan group pilgrimage by premium tempo traveller.",
    highlights: ["Long distance specialists", "Safe and comfortable", "Multi-day packages"],
    faqs: []
  },
  {
    id: "vns-dwa",
    slug: "varanasi-to-dwarka-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Dwarka",
    distance: 1750,
    duration: "30 Hours",
    description: "Epic pan-India group journey to Dwarka from Varanasi by reliable tempo traveller.",
    highlights: ["Longest trip experts", "Premium comfort", "Experienced crew"],
    faqs: []
  },
  {
    id: "vns-som-guj",
    slug: "varanasi-to-somnath-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Somnath",
    distance: 1800,
    duration: "32 Hours",
    description: "Holy Jyotirlinga circuit group travel from Kashi to Somnath by tempo traveller.",
    highlights: ["Jyotirlinga special", "Reliable support", "All-inclusive pricing"],
    faqs: []
  },
  {
    id: "vns-kta",
    slug: "varanasi-to-kota-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Kota",
    distance: 900,
    duration: "16 Hours",
    description: "Reliable tempo traveller service to the coaching hub of Kota from Varanasi for groups.",
    highlights: ["Safe for students", "Direct route", "Verified vehicles"],
    faqs: []
  },
  {
    id: "vns-noi",
    slug: "varanasi-to-noida-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Noida",
    distance: 800,
    duration: "13.5 Hours",
    description: "Professional group travel service to Noida/NCR from Varanasi by tempo traveller.",
    highlights: ["Expressway route", "Doorstep pickup", "Comfortable seating"],
    faqs: []
  },
  {
    id: "vns-ind",
    slug: "varanasi-to-indore-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Indore",
    distance: 1000,
    duration: "18 Hours",
    description: "Group travel from Varanasi to the cleanest city of India, Indore by tempo traveller.",
    highlights: ["Mahakaal circuit special", "Safe long trips", "Professional drivers"],
    faqs: []
  },
  {
    id: "vns-bho",
    slug: "varanasi-to-bhopal-tempo-traveller-fare",
    origin: "Varanasi",
    destination: "Bhopal",
    distance: 800,
    duration: "15 Hours",
    description: "Direct group tempo traveller service from Varanasi to the capital of MP, Bhopal.",
    highlights: ["Safe journey", "Reliable vehicles", "Clean seating"],
    faqs: []
  },
  {
    id: "lko-vns",
    slug: "lucknow-to-varanasi-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Varanasi",
    distance: 310,
    duration: "6 Hours",
    description: "Premium tempo traveller service from the City of Nawabs to the Spiritual Capital. Best for group tours.",
    highlights: ["Purvanchal Expressway", "Doorstep Pickup", "Verified Drivers"],
    faqs: []
  },
  {
    id: "lko-ayu",
    slug: "lucknow-to-ayodhya-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Ayodhya",
    distance: 135,
    duration: "2.5 Hours",
    description: "Quick and comfortable group travel from Lucknow to Ayodhya Ram Mandir.",
    highlights: ["Expressway route", "Same day return", "Pilgrim friendly"],
    faqs: []
  },
  {
    id: "lko-pry",
    slug: "lucknow-to-prayagraj-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Prayagraj",
    distance: 200,
    duration: "4 Hours",
    description: "Reliable tempo traveller for Sangam Snan and group trips to Prayagraj.",
    highlights: ["Safe travel", "Experienced drivers", "Fixed fare"],
    faqs: []
  },
  {
    id: "lko-del",
    slug: "lucknow-to-delhi-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Delhi",
    distance: 530,
    duration: "8 Hours",
    description: "Interstate group travel from Lucknow to Delhi via Agra-Lucknow Expressway.",
    highlights: ["Expressway experts", "Ample luggage space", "AC comfort"],
    faqs: []
  },
  {
    id: "lko-knp",
    slug: "lucknow-to-kanpur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Kanpur",
    distance: 90,
    duration: "2 Hours",
    description: "Daily group travel service between Lucknow and Kanpur. Ideal for business and families.",
    highlights: ["Frequent service", "City to City", "AC comfort"],
    faqs: []
  },
  {
    id: "lko-agr",
    slug: "lucknow-to-agra-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Agra",
    distance: 335,
    duration: "4.5 Hours",
    description: "Travel via Agra-Lucknow Expressway for the fastest group trip to Taj Mahal.",
    highlights: ["Expressway route", "Professional drivers", "Clean vehicles"],
    faqs: []
  },
  {
    id: "lko-mth",
    slug: "lucknow-to-mathura-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Mathura",
    distance: 400,
    duration: "6 Hours",
    description: "Braj Bhoomi pilgrimage special. Group travel from Lucknow to Mathura/Vrindavan.",
    highlights: ["Pilgrim special", "Safe travel", "Fixed fare"],
    faqs: [
      { question: "What is the distance from Lucknow to Mathura?", answer: "The road distance is approximately 400 km via Agra-Lucknow Expressway." },
      { question: "How long does it take by tempo traveller?", answer: "It takes about 6-7 hours depending on the number of breaks." }
    ],
    tollEstimate: 850,
    itinerary: [
      { time: "05:00 AM", activity: "Early morning pickup from Lucknow" },
      { time: "08:30 AM", activity: "Breakfast break on Agra-Lucknow Expressway" },
      { time: "11:30 AM", activity: "Arrival in Mathura, Shri Krishna Janmabhoomi visit" },
      { time: "02:00 PM", activity: "Lunch and visit to Vrindavan (Banke Bihari Temple)" },
      { time: "05:30 PM", activity: "Evening Aarti at ISKCON or Prem Mandir" },
      { time: "07:30 PM", activity: "Overnight stay or late departure" }
    ],
    roadConditions: "Excellent via Agra-Lucknow Expressway and Yamuna Expressway. Fastest connectivity in UP.",
    bestTime: "Holi Festival (World famous), Janmashtami, and Winters (Nov-Feb).",
    seasonalNotes: "During Holi, book 1 month in advance. Traffic in Vrindavan narrow lanes is heavy on weekends.",
    comparison: [
      { transport: "Tempo Traveller", pros: "Agra Expressway expertise, extra luggage space for long trips, flexible for Vrindavan local sightseeing", cons: "Higher cost for small families" },
      { transport: "Train", pros: "Comfortable overnight", cons: "Last minute tickets impossible, local Mathura commute is difficult for groups" },
      { transport: "Bus", pros: "UP Roadways available", cons: "Very slow, no direct reach to many temples" }
    ]
  },
  {
    id: "lko-noi",
    slug: "lucknow-to-noida-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Noida",
    distance: 510,
    duration: "7.5 Hours",
    description: "Fastest group connectivity between Lucknow and Noida/NCR via Expressway.",
    highlights: ["Expressway travel", "Doorstep pickup", "Comfortable ride"],
    faqs: []
  },
  {
    id: "lko-ghz",
    slug: "lucknow-to-ghaziabad-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Ghaziabad",
    distance: 520,
    duration: "8 Hours",
    description: "Direct group tempo traveller service to Ghaziabad from Lucknow.",
    highlights: ["Professional drivers", "Safe long trips", "AC comfort"],
    faqs: []
  },
  {
    id: "lko-mrt",
    slug: "lucknow-to-meerut-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Meerut",
    distance: 480,
    duration: "7.5 Hours",
    description: "Group travel from the state capital to the historical city of Meerut.",
    highlights: ["Expressway route", "Reliable service", "Fixed pricing"],
    faqs: []
  },
  {
    id: "lko-bly",
    slug: "lucknow-to-bareilly-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Bareilly",
    distance: 250,
    duration: "5 Hours",
    description: "Reliable tempo traveller service connecting Lucknow and Bareilly.",
    highlights: ["Highway route", "Trained drivers", "Clean seating"],
    faqs: []
  },
  {
    id: "lko-gkp",
    slug: "lucknow-to-gorakhpur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Gorakhpur",
    distance: 270,
    duration: "5.5 Hours",
    description: "Direct group travel from Lucknow to Gorakhnath Temple and Gorakhpur city.",
    highlights: ["Expressway connectivity", "Same day pickup", "Pilgrim friendly"],
    faqs: []
  },
  {
    id: "lko-jhs",
    slug: "lucknow-to-jhansi-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Jhansi",
    distance: 300,
    duration: "6 Hours",
    description: "Explore the historical city of Jhansi with our group tempo traveller service.",
    highlights: ["Bundelkhand route", "Safe travel", "Comfortable buses"],
    faqs: []
  },
  {
    id: "lko-gwl",
    slug: "lucknow-to-gwalior-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Gwalior",
    distance: 350,
    duration: "7 Hours",
    description: "Interstate group travel from Lucknow to Gwalior fort and city.",
    highlights: ["Trained drivers", "AC luxury", "Fixed rates"],
    faqs: []
  },
  {
    id: "lko-jai",
    slug: "lucknow-to-jaipur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Jaipur",
    distance: 570,
    duration: "9.5 Hours",
    description: "Connect to the Pink City from Lucknow with our premium tempo traveller service.",
    highlights: ["Rajasthan tours", "Safe night travel", "Professional service"],
    faqs: []
  },
  {
    id: "lko-uda",
    slug: "lucknow-to-udaipur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Udaipur",
    distance: 950,
    duration: "16 Hours",
    description: "Long distance luxury group travel from Lucknow to the City of Lakes, Udaipur.",
    highlights: ["Luxury tempo travellers", "Expert drivers", "Full AC"],
    faqs: []
  },
  {
    id: "lko-chd",
    slug: "lucknow-to-chandigarh-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Chandigarh",
    distance: 780,
    duration: "12.5 Hours",
    description: "Professional group travel service to Chandigarh from Lucknow.",
    highlights: ["Safe long journey", "Comfortable seating", "Fixed fare"],
    faqs: []
  },
  {
    id: "lko-ddn",
    slug: "lucknow-to-dehradun-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Dehradun",
    distance: 550,
    duration: "10.5 Hours",
    description: "Group travel from Lucknow to the foothills of Himalayas in Dehradun.",
    highlights: ["Hill driving experts", "Reliable vehicles", "Clean interior"],
    faqs: []
  },
  {
    id: "lko-hrd",
    slug: "lucknow-to-haridwar-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Haridwar",
    distance: 490,
    duration: "9 Hours",
    description: "Pilgrimage special tempo traveller service to Haridwar from Lucknow.",
    highlights: ["Ganga Snan special", "Doorstep pickup", "Verified drivers"],
    faqs: []
  },
  {
    id: "lko-rsh",
    slug: "lucknow-to-rishikesh-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Rishikesh",
    distance: 510,
    duration: "10 Hours",
    description: "Adventure and spiritual group travel to Rishikesh from Lucknow by tempo traveller.",
    highlights: ["Yoga capital special", "Professional drivers", "AC comfort"],
    faqs: []
  },
  {
    id: "lko-nai",
    slug: "lucknow-to-nainital-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Nainital",
    distance: 400,
    duration: "8.5 Hours",
    description: "Group hill station trip from Lucknow to Nainital. Safe hill driving guaranteed.",
    highlights: ["Hill driving experts", "Reliable vehicles", "Comfortable seating"],
    faqs: []
  },
  {
    id: "lko-pat",
    slug: "lucknow-to-patna-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Patna",
    distance: 520,
    duration: "9.5 Hours",
    description: "Direct group tempo traveller service between Lucknow and Patna.",
    highlights: ["Interstate experts", "Safe night travel", "AC luxury"],
    faqs: []
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
    faqs: []
  },
  {
    id: "lko-ran",
    slug: "lucknow-to-ranchi-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Ranchi",
    distance: 850,
    duration: "16 Hours",
    description: "Long distance group travel from Lucknow to Ranchi, Jharkhand.",
    highlights: ["Safe long trips", "Professional drivers", "Regular breaks"],
    faqs: []
  },
  {
    id: "lko-jsd",
    slug: "lucknow-to-jamshedpur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Jamshedpur",
    distance: 980,
    duration: "18 Hours",
    description: "Connect Lucknow to the Steel City with our reliable tempo traveller service.",
    highlights: ["Experienced drivers", "Luxury seating", "AC comfort"],
    faqs: []
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
    faqs: []
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
    faqs: []
  },
  {
    id: "lko-ind",
    slug: "lucknow-to-indore-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Indore",
    distance: 780,
    duration: "14 Hours",
    description: "Long distance group tempo traveller service to Indore from Lucknow.",
    highlights: ["Comfortable seating", "Experienced drivers", "Fixed pricing"],
    faqs: []
  },
  {
    id: "lko-jbp",
    slug: "lucknow-to-jabalpur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Jabalpur",
    distance: 550,
    duration: "10 Hours",
    description: "Connect Lucknow to Jabalpur with our professional group travel service.",
    highlights: ["Marble Rocks tour", "Safe travel", "Reliable service"],
    faqs: []
  },
  {
    id: "lko-rew",
    slug: "lucknow-to-rewa-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Rewa",
    distance: 350,
    duration: "7 Hours",
    description: "Direct group tempo traveller service from Lucknow to Rewa, MP.",
    highlights: ["White Tiger Land special", "Professional drivers", "Fixed fare"],
    faqs: []
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
    faqs: []
  },
  {
    id: "lko-khj",
    slug: "lucknow-to-khajuraho-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Khajuraho",
    distance: 310,
    duration: "6.5 Hours",
    description: "Explore the temples of Khajuraho with our group tempo traveller service.",
    highlights: ["UNESCO site tour", "Comfortable buses", "Trained drivers"],
    faqs: []
  },
  {
    id: "lko-chk",
    slug: "lucknow-to-chitrakoot-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Chitrakoot",
    distance: 230,
    duration: "5 Hours",
    description: "Pilgrimage group travel from Lucknow to the holy land of Chitrakoot.",
    highlights: ["Religious tour expert", "Safe travel", "AC comfort"],
    faqs: []
  },
  {
    id: "lko-azm",
    slug: "lucknow-to-azamgarh-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Azamgarh",
    distance: 270,
    duration: "5.5 Hours",
    description: "Reliable group tempo traveller service from Lucknow to Azamgarh.",
    highlights: ["Purvanchal Expressway", "Experienced drivers", "Clean seating"],
    faqs: []
  },
  {
    id: "lko-bst",
    slug: "lucknow-to-basti-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Basti",
    distance: 200,
    duration: "4 Hours",
    description: "Group travel from Lucknow to Basti. Reliable and fixed price service.",
    highlights: ["Highway route", "AC comfort", "Professional drivers"],
    faqs: []
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
    faqs: []
  },
  {
    id: "lko-brh",
    slug: "lucknow-to-bahraich-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Bahraich",
    distance: 130,
    duration: "3.5 Hours",
    description: "Connect Lucknow to Bahraich with our professional group travel service.",
    highlights: ["Experienced drivers", "Reliable vehicles", "Clean seating"],
    faqs: []
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
    faqs: []
  },
  {
    id: "lko-hrd-dist",
    slug: "lucknow-to-hardoi-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Hardoi",
    distance: 110,
    duration: "2.5 Hours",
    description: "Reliable tempo traveller service connecting Lucknow and Hardoi.",
    highlights: ["Safe travel", "Trained drivers", "Fixed pricing"],
    faqs: []
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
    faqs: []
  },
  {
    id: "lko-rbl",
    slug: "lucknow-to-rae-bareli-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Rae Bareli",
    distance: 80,
    duration: "2 Hours",
    description: "Group travel from the capital to Rae Bareli by tempo traveller.",
    highlights: ["Frequent service", "Professional drivers", "Clean vehicles"],
    faqs: []
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
    faqs: []
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
    faqs: []
  },
  {
    id: "lko-ptg",
    slug: "lucknow-to-pratapgarh-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Pratapgarh",
    distance: 170,
    duration: "4 Hours",
    description: "Connect Lucknow to Pratapgarh with our professional group travel service.",
    highlights: ["Experienced drivers", "Safe journey", "AC comfort"],
    faqs: []
  },
  {
    id: "lko-mzp",
    slug: "lucknow-to-mirzapur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Mirzapur",
    distance: 280,
    duration: "6 Hours",
    description: "Direct group tempo traveller service to Mirzapur from Lucknow.",
    highlights: ["Vindhyachal special", "Professional drivers", "AC comfort"],
    faqs: []
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
    faqs: []
  },
  {
    id: "lko-gzp",
    slug: "lucknow-to-ghazipur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Ghazipur",
    distance: 340,
    duration: "6.5 Hours",
    description: "Reliable tempo traveller service connecting Lucknow and Ghazipur.",
    highlights: ["Purvanchal Expressway", "Trained drivers", "Clean seating"],
    faqs: []
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
    faqs: []
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
    faqs: []
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
    faqs: []
  },
  {
    id: "lko-ksn",
    slug: "lucknow-to-kushinagar-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Kushinagar",
    distance: 330,
    duration: "7 Hours",
    description: "Pilgrimage group travel from Lucknow to the holy city of Kushinagar.",
    highlights: ["Buddhist circuit expert", "Safe travel", "AC comfort"],
    faqs: []
  },
  {
    id: "lko-alg",
    slug: "lucknow-to-aligarh-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Aligarh",
    distance: 380,
    duration: "7 Hours",
    description: "Direct group tempo traveller service to Aligarh from Lucknow.",
    highlights: ["Safe journey", "Reliable vehicles", "Fixed rates"],
    faqs: []
  },
  {
    id: "lko-mzf",
    slug: "lucknow-to-muzaffarnagar-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Muzaffarnagar",
    distance: 550,
    duration: "10 Hours",
    description: "Connect Lucknow to Muzaffarnagar with our professional group travel service.",
    highlights: ["Interstate experts", "Safe travel", "AC comfort"],
    faqs: []
  },
  {
    id: "lko-sah",
    slug: "lucknow-to-saharanpur-tempo-traveller-fare",
    origin: "Lucknow",
    destination: "Saharanpur",
    distance: 600,
    duration: "11 Hours",
    description: "Reliable long distance group travel to Saharanpur from Lucknow.",
    highlights: ["Safe long trips", "Professional drivers", "Fixed pricing"],
    faqs: []
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
    faqs: []
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
    faqs: []
  },
  {
    id: "pry-vns",
    slug: "prayagraj-to-varanasi-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Varanasi",
    distance: 125,
    duration: "2.5 Hours",
    description: "Reliable tempo traveller service from Prayagraj to the spiritual capital Varanasi.",
    highlights: ["Highway route", "Express pickup", "Fixed pricing"],
    faqs: []
  },
  {
    id: "pry-lko",
    slug: "prayagraj-to-lucknow-tempo-traveller-fare",
    origin: "Prayagraj",
    destination: "Lucknow",
    distance: 200,
    duration: "4 Hours",
    description: "Connect the administrative and cultural capitals with our professional tempo traveller service.",
    highlights: ["Safe travel", "Experienced drivers", "AC comfort"],
    faqs: []
  },
  {
    id: "ayu-vns",
    slug: "ayodhya-to-varanasi-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Varanasi",
    distance: 220,
    duration: "4.5 Hours",
    description: "Group travel from the city of Ram to the city of Shiva. Pilgrimage special service.",
    highlights: ["Pilgrim friendly", "Doorstep pickup", "Comfortable ride"],
    faqs: []
  },
  {
    id: "ayu-lko",
    slug: "ayodhya-to-lucknow-tempo-traveller-fare",
    origin: "Ayodhya",
    destination: "Lucknow",
    distance: 135,
    duration: "2.5 Hours",
    description: "Quick transit between Ayodhya and Lucknow for groups and families.",
    highlights: ["Same day return", "Expert drivers", "Fixed price"],
    faqs: []
  }
];

export const calculateFare = (distance: number, rate: number) => {
  const base = distance * 2 * rate;
  const surcharge = 500; // Flat service fee for tempo traveller
  return Math.round(base + surcharge);
};
