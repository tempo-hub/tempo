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
  "Khatu Shyam Ji",
  "Salasar Balaji",
  "Pushkar",
  "Nathdwara",
  "Ranakpur Jain Temple",
  "Eklingji Temple",
  "Amer Fort",
  "Kumbhalgarh Fort",
  "Mehandipur Balaji",
  "Karni Mata Temple",
  "Dilwara Temples",
  "Govind Dev Ji Temple",
  "Ranthambore National Park",
  "Sariska National Park",
  "Keoladeo National Park",
  "Nakki Lake",
  "Sam Sand Dunes",
  "City Palace Udaipur",
  "Lake Pichola",
  "Hawa Mahal",
  "Jantar Mantar Jaipur",
  "Jaigarh Fort",
  "Nahargarh Fort",
  "Jal Mahal",
  "Fateh Sagar Lake",
  "Junagarh Fort",
  "Patwon Ki Haveli",
  "Rani Sati Temple",
  "Desert National Park",
  "Osian",
  "Chand Baori Abhaneri",
  "Bhangarh Fort",
  "Jaisamand Lake",
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

const HIMACHAL_PRADESH_DESTINATIONS = [
  "Shimla",
  "Manali",
  "Dharamshala",
  "Kullu",
  "Solan",
  "Mandi",
  "Bilaspur",
  "Hamirpur",
  "Una",
  "Nahan",
  "Chamba",
  "Palampur",
  "Kangra",
  "Baddi",
  "Paonta Sahib",
  "Nurpur",
  "McLeodganj",
  "Dalhousie",
  "Khajjiar",
  "Kasauli",
  "Chail",
  "Spiti Valley",
  "Kasol",
  "Lahaul Valley",
  "Sangla Valley",
  "Kalpa",
  "Kaza",
  "Narkanda",
  "Kufri",
  "Mashobra",
  "Shoja",
  "Barot Valley",
  "Fagu",
  "Naldehra",
  "Bhuntar",
  "Naggar",
  "Jibhi",
  "Banjar",
  "Tosh",
  "Sainj",
  "Baijnath",
  "Bir Billing",
  "Chamunda",
  "Jawalamukhi",
  "Banikhet",
  "Pangi Valley",
  "Chitkul",
  "Nako",
  "Dhankar",
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

const KOLKATA_DESTINATIONS = [
  "Kolkata",
  "Howrah",
  "Durgapur",
  "Asansol",
  "Siliguri",
  "Darjeeling",
  "Kalimpong",
  "Kharagpur",
  "Shantiniketan",
  "Malda",
  "Cooch Behar",
  "Jalpaiguri",
  "Alipurduar",
  "Murshidabad",
  "Krishnanagar",
  "Nabadwip",
  "Mayapur",
  "Tarapith",
  "Digha",
  "Bishnupur",
  "Bardhaman",
  "Haldia",
  "Purulia",
  "Raiganj",
  "Balurghat",
  "Bankura",
  "Midnapore",
  "Kalyani",
  "Barasat",
  "Serampore",
  "Chandannagar",
  "Bongaon",
  "Habra",
  "Santipur",
  "Berhampore",
];

const ALL_EXCLUDED_DESTINATIONS = [
  ...UTTARAKHAND_DESTINATIONS,
  ...MADHYAPRADESH_DESTINATIONS,
  ...RAJASTHAN_DESTINATIONS,
  ...BIHAR_DESTINATIONS,
  ...DELHI_NCR_DESTINATIONS,
  ...HIMACHAL_PRADESH_DESTINATIONS,
  ...KOLKATA_DESTINATIONS,
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

// Himachal Pradesh routes from Varanasi - Regular Fares
export const HIMACHAL_PRADESH_FARE_ROUTES: TaxiRoute[] = ROUTES.filter(
  (route) =>
    route.origin === "Varanasi" &&
    HIMACHAL_PRADESH_DESTINATIONS.includes(route.destination),
);

export const KOLKATA_FARE_ROUTES: TaxiRoute[] = ROUTES.filter(
  (route) => route.origin === "Varanasi" && KOLKATA_DESTINATIONS.includes(route.destination),
);
