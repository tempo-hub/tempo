import { ROUTES } from "./data";
import { TaxiRoute } from "./data";

// Base fare rate for regular pricing (different from cheapest)
export const BASE_FARE_RATE = 18;

// Calculate fare for a route
export const calculateRouteFare = (distance: number) => {
  return distance * BASE_FARE_RATE;
};

// List of destinations to EXCLUDE from regular Varanasi routes
const UTTARAKHAND_DESTINATIONS = [
  "Dehradun",
  "Haridwar",
  "Rishikesh",
  "Nainital",
  "Mussoorie",
  "Haldwani",
  "Rudrapur",
  "Kashipur",
  "Almora",
  "Pithoragarh",
  "Joshimath",
  "Kotdwar",
  "Auli",
  "Ranikhet",
  "Kausani",
  "Char Dham",
];

const MADHYAPRADESH_DESTINATIONS = [
  "Bhopal",
  "Indore",
  "Jabalpur",
  "Gwalior",
  "Ujjain",
  "Rewa",
  "Satna",
  "Katni",
  "Sagar",
  "Dewas",
  "Khajuraho",
  "Chhindwara",
  "Burhanpur",
  "Shivpuri",
  "Ratlam",
];

const RAJASTHAN_DESTINATIONS = [
  "Jaipur",
  "Udaipur",
  "Jodhpur",
  "Jaisalmer",
  "Mount Abu",
  "Kota",
  "Ajmer",
  "Bikaner",
  "Alwar",
  "Bharatpur",
  "Sikar",
  "Pali",
  "Bhilwara",
  "Chittorgarh",
  "Hanumangarh",
  "Sri Ganganagar",
  "Jhunjhunu",
  "Nagaur",
  "Barmer",
  "Tonk",
  "Dausa",
  "Sawai Madhopur",
  "Bundi",
  "Baran",
  "Karauli",
  "Dholpur",
  "Sirohi",
  "Jalore",
  "Banswara",
  "Dungarpur",
  "Rajsamand",
];

const BIHAR_DESTINATIONS = [
  "Patna",
  "Gaya",
  "Bodh Gaya",
  "Muzaffarpur",
  "Bhagalpur",
  "Darbhanga",
  "Purnia",
  "Arrah",
  "Begusarai",
  "Munger",
  "Sasaram",
  "Hajipur",
  "Siwan",
  "Chapra",
];

const DELHI_NCR_DESTINATIONS = [
  "Delhi",
  "Noida",
  "Gurugram",
  "Ghaziabad",
  "Faridabad",
  "Greater Noida",
  "Meerut",
  "Panipat",
];

const ALL_EXCLUDED_DESTINATIONS = [
  ...UTTARAKHAND_DESTINATIONS,
  ...MADHYAPRADESH_DESTINATIONS,
  ...RAJASTHAN_DESTINATIONS,
  ...BIHAR_DESTINATIONS,
  ...DELHI_NCR_DESTINATIONS,
];

// Filter routes by origin city for REGULAR FARES
export const PRAYAGRAJ_FARE_ROUTES: TaxiRoute[] = ROUTES.filter(
  (route) => route.origin === "Prayagraj",
);

export const AYODHYA_FARE_ROUTES: TaxiRoute[] = ROUTES.filter(
  (route) => route.origin === "Ayodhya",
);

// Varanasi routes EXCLUDING Uttarakhand, MP, Rajasthan, Bihar, Delhi NCR
export const VARANASI_FARE_ROUTES: TaxiRoute[] = ROUTES.filter(
  (route) =>
    route.origin === "Varanasi" &&
    !ALL_EXCLUDED_DESTINATIONS.includes(route.destination),
);

export const LUCKNOW_FARE_ROUTES: TaxiRoute[] = ROUTES.filter(
  (route) => route.origin === "Lucknow",
);

// Uttarakhand routes (Hill stations from Varanasi) - Regular Fares
export const UTTARAKHAND_FARE_ROUTES: TaxiRoute[] = ROUTES.filter(
  (route) =>
    route.origin === "Varanasi" &&
    UTTARAKHAND_DESTINATIONS.includes(route.destination),
);

// Madhya Pradesh routes from Varanasi - Regular Fares
export const MADHYAPRADESH_FARE_ROUTES: TaxiRoute[] = ROUTES.filter(
  (route) =>
    route.origin === "Varanasi" &&
    MADHYAPRADESH_DESTINATIONS.includes(route.destination),
);

// Rajasthan routes from Varanasi - Regular Fares
export const RAJASTHAN_FARE_ROUTES: TaxiRoute[] = ROUTES.filter(
  (route) =>
    route.origin === "Varanasi" &&
    RAJASTHAN_DESTINATIONS.includes(route.destination),
);

// Bihar routes from Varanasi - Regular Fares
export const BIHAR_FARE_ROUTES: TaxiRoute[] = ROUTES.filter(
  (route) =>
    route.origin === "Varanasi" &&
    BIHAR_DESTINATIONS.includes(route.destination),
);

// Delhi-NCR routes from Varanasi - Regular Fares
export const DELHI_NCR_FARE_ROUTES: TaxiRoute[] = ROUTES.filter(
  (route) =>
    route.origin === "Varanasi" &&
    DELHI_NCR_DESTINATIONS.includes(route.destination),
);
