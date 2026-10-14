type CityLocation = {
  pickupPoints: string[];
  serviceAreas: string[];
};

export const CITY_LOCATION_DATA: Record<string, CityLocation> = {
  ayodhya: {
    pickupPoints: [
      "Ayodhya Railway Station",
      "Ram Mandir Area",
      "Saryu Ghat",
      "Naka Chowk",
      "Faizabad Railway Station",
    ],
    serviceAreas: [
      "Ayodhya",
      "Faizabad",
      "Lucknow",
      "Prayagraj",
      "Gorakhpur",
      "Basti",
      "Sultanpur",
    ],
  },

  bangalore: {
    pickupPoints: [
      "KSR Bengaluru City Railway Station",
      "Kempegowda International Airport",
      "Majestic Bus Station",
      "Electronic City",
      "Whitefield",
    ],
    serviceAreas: [
      "Bengaluru",
      "Whitefield",
      "Electronic City",
      "Devanahalli",
      "Ramanagara",
    ],
  },

  delhi: {
    pickupPoints: [
      "New Delhi Railway Station",
      "Delhi Airport",
      "Kashmere Gate ISBT",
      "Anand Vihar ISBT",
      "Connaught Place",
    ],
    serviceAreas: ["Delhi", "Noida", "Gurugram", "Ghaziabad", "Faridabad"],
  },

  ghaziabad: {
    pickupPoints: [
      "Ghaziabad Railway Station",
      "Ghaziabad Bus Stand",
      "Kaushambi Metro Station",
      "Vaishali Metro Station",
      "Indirapuram",
    ],
    serviceAreas: [
      "Ghaziabad",
      "Indirapuram",
      "Vaishali",
      "Vasundhara",
      "Kaushambi",
      "Noida",
      "Delhi",
      "Greater Noida",
    ],
  },

  hyderabad: {
    pickupPoints: [
      "Rajiv Gandhi International Airport",
      "Secunderabad Railway Station",
      "Hyderabad Deccan Railway Station",
      "MGBS Bus Station",
      "HITEC City",
    ],
    serviceAreas: [
      "Hyderabad",
      "Secunderabad",
      "Gachibowli",
      "Madhapur",
      "Kondapur",
      "Shamshabad",
      "Warangal",
      "Vijayawada",
    ],
  },

  lucknow: {
    pickupPoints: [
      "Charbagh Railway Station",
      "Gomti Nagar Railway Station",
      "Chaudhary Charan Singh International Airport",
      "Alambagh Bus Station",
      "Hazratganj",
    ],
    serviceAreas: [
      "Lucknow",
      "Barabanki",
      "Sitapur",
      "Unnao",
      "Kanpur",
      "Ayodhya",
      "Prayagraj",
      "Sultanpur",
    ],
  },

  ludhiana: {
    pickupPoints: [
      "Ludhiana Junction",
      "Ludhiana Bus Stand",
      "Dugri",
      "Sarabha Nagar",
      "Ferozepur Road",
    ],
    serviceAreas: [
      "Ludhiana",
      "Jalandhar",
      "Phagwara",
      "Khanna",
      "Moga",
      "Patiala",
      "Amritsar",
      "Chandigarh",
    ],
  },

  prayagraj: {
    pickupPoints: [
      "Prayagraj Junction",
      "Prayagraj Airport",
      "Prayagraj Rambagh Station",
      "Civil Lines Bus Stand",
      "Triveni Sangam",
    ],
    serviceAreas: [
      "Prayagraj",
      "Kaushambi",
      "Chitrakoot",
      "Varanasi",
      "Ayodhya",
      "Mirzapur",
      "Rewa",
      "Lucknow",
    ],
  },

  varanasi: {
    pickupPoints: [
      "Varanasi Junction",
      "Banaras Railway Station",
      "Lal Bahadur Shastri International Airport",
      "Godowlia",
      "Assi Ghat",
    ],
    serviceAreas: [
      "Varanasi",
      "Sarnath",
      "Ramnagar",
      "Chandauli",
      "Jaunpur",
      "Ghazipur",
      "Prayagraj",
      "Ayodhya",
    ],
  },
  ahmedabad: {
  pickupPoints: [
    "Sardar Vallabhbhai Patel International Airport",
    "Ahmedabad Junction (Kalupur Railway Station)",
    "SG Highway",
    "Satellite",
    "Maninagar",
    "Navrangpura",
    "Gandhinagar",
  ],
  serviceAreas: [
    "Ahmedabad",
    "Gandhinagar",
    "Bopal",
    "Sanand",
    "Chandkheda",
    "Motera",
    "Satellite",
    "Maninagar",
    "Navrangpura",
  ],
  },

  chennai: {
    pickupPoints: [
      "Chennai Central",
      "Chennai Egmore Railway Station",
      "Chennai International Airport",
      "Koyambedu Bus Terminus",
      "Tambaram Railway Station",
    ],
    serviceAreas: [
      "Chennai",
      "Tambaram",
      "OMR",
      "Mahabalipuram",
      "Kanchipuram",
      "Vellore",
      "Pondicherry",
      "Tirupati",
    ],
  },

  kolkata: {
    pickupPoints: [
      "Howrah Junction",
      "Sealdah Railway Station",
      "Netaji Subhas Chandra Bose International Airport",
      "Esplanade Bus Terminus",
      "Salt Lake",
    ],
    serviceAreas: [
      "Kolkata",
      "Howrah",
      "Salt Lake",
      "New Town",
      "Durgapur",
      "Asansol",
      "Haldia",
      "Siliguri",
    ],
  },

  mumbai: {
    pickupPoints: [
      "Chhatrapati Shivaji Maharaj Terminus",
      "Mumbai Central",
      "Lokmanya Tilak Terminus",
      "Chhatrapati Shivaji Maharaj International Airport",
      "Dadar",
    ],
    serviceAreas: [
      "Mumbai",
      "Thane",
      "Navi Mumbai",
      "Kalyan",
      "Bhiwandi",
      "Vasai-Virar",
      "Lonavala",
      "Pune",
    ],
  },

  pune: {
    pickupPoints: [
      "Pune Junction",
      "Pune Airport",
      "Swargate Bus Station",
      "Shivajinagar",
      "Hinjawadi",
    ],
    serviceAreas: [
      "Pune",
      "Pimpri-Chinchwad",
      "Hinjawadi",
      "Lonavala",
      "Mahabaleshwar",
      "Mumbai",
      "Nashik",
      "Satara",
    ],
  },

  vijayawada: {
    pickupPoints: [
      "Vijayawada Junction",
      "Vijayawada Airport",
      "Pandit Nehru Bus Station",
      "Benz Circle",
      "Kanaka Durga Temple",
    ],
    serviceAreas: [
      "Vijayawada",
      "Guntur",
      "Amaravati",
      "Tenali",
      "Machilipatnam",
      "Eluru",
      "Rajahmundry",
      "Ongole",
    ],
  },

  visakhapatnam: {
    pickupPoints: [
      "Visakhapatnam Junction",
      "Visakhapatnam Airport",
      "Dwaraka Bus Station",
      "MVP Colony",
      "RK Beach",
    ],
    serviceAreas: [
      "Visakhapatnam",
      "Anakapalle",
      "Bheemunipatnam",
      "Vizianagaram",
      "Srikakulam",
      "Araku Valley",
      "Rajahmundry",
      "Kakinada",
    ],
  },

  guntur: {
    pickupPoints: [
      "Guntur Junction",
      "Guntur Bus Station",
      "Brodipet",
      "Arundelpet",
      "Nallapadu",
    ],
    serviceAreas: [
      "Guntur",
      "Vijayawada",
      "Tenali",
      "Amaravati",
      "Mangalagiri",
      "Narasaraopet",
      "Chilakaluripet",
      "Ongole",
    ],
  },

  kakinada: {
    pickupPoints: [
      "Kakinada Town Railway Station",
      "Kakinada Port Railway Station",
      "Kakinada Bus Station",
      "Sarpavaram Junction",
      "Jagannaickpur",
    ],
    serviceAreas: [
      "Kakinada",
      "Rajahmundry",
      "Samalkot",
      "Pithapuram",
      "Amalapuram",
      "Draksharamam",
      "Annavaram",
      "Tuni",
    ],
  },

  guwahati: {
    pickupPoints: [
      "Guwahati Railway Station",
      "Lokpriya Gopinath Bordoloi International Airport",
      "Paltan Bazaar",
      "ISBT Guwahati",
      "Jalukbari",
    ],
    serviceAreas: [
      "Guwahati",
      "Dispur",
      "Kamakhya",
      "Hajo",
      "Shillong",
      "Tezpur",
      "Nagaon",
      "Kaziranga",
    ],
  },

  patna: {
    pickupPoints: [
      "Patna Junction",
      "Jay Prakash Narayan International Airport",
      "Patliputra Junction",
      "Mithapur Bus Stand",
      "Gandhi Maidan",
    ],
    serviceAreas: [
      "Patna",
      "Danapur",
      "Hajipur",
      "Sonpur",
      "Bihar Sharif",
      "Rajgir",
      "Gaya",
      "Muzaffarpur",
    ],
  },

  bhagalpur: {
    pickupPoints: [
      "Bhagalpur Junction",
      "Bhagalpur Bus Stand",
      "Tilka Manjhi Chowk",
      "Ghantaghar",
      "Nathnagar",
    ],
    serviceAreas: [
      "Bhagalpur",
      "Naugachia",
      "Sultanganj",
      "Banka",
      "Munger",
      "Deoghar",
      "Dumka",
      "Godda",
    ],
  },

  chandigarh: {
    pickupPoints: [
      "Chandigarh Railway Station",
      "Shaheed Bhagat Singh International Airport",
      "ISBT Sector 17",
      "ISBT Sector 43",
      "Sector 35",
    ],
    serviceAreas: [
      "Chandigarh",
      "Mohali",
      "Panchkula",
      "Zirakpur",
      "Kharar",
      "Pinjore",
      "Ambala",
      "Ludhiana",
    ],
  },

  mohali: {
    pickupPoints: [
      "Mohali Railway Station",
      "Mohali Bus Stand",
      "Sector 70",
      "Airport Road",
      "Phase 7",
    ],
    serviceAreas: [
      "Mohali",
      "Chandigarh",
      "Panchkula",
      "Zirakpur",
      "Kharar",
      "New Chandigarh",
      "Ambala",
      "Patiala",
    ],
  },

  raipur: {
    pickupPoints: [
      "Raipur Airport",
      "Raipur Railway Station",
      "Pandri",
      "Shankar Nagar",
      "Telibandha",
    ],
    serviceAreas: ["Raipur", "Naya Raipur", "Bhilai", "Durg", "Mahasamund"],
  },

  "durg-bhilai": {
    pickupPoints: [
      "Durg Railway Station",
      "Bhilai Power House Railway Station",
      "Bhilai Nagar Railway Station",
      "Supela Chowk",
      "Nehru Nagar",
    ],
    serviceAreas: [
      "Durg",
      "Bhilai",
      "Raipur",
      "Rajnandgaon",
      "Bemetara",
      "Balod",
      "Naya Raipur",
      "Bilaspur",
    ],
  },

  surat: {
    pickupPoints: [
      "Surat Railway Station",
      "Surat Airport",
      "Udhna Junction",
      "Adajan",
      "Vesu",
    ],
    serviceAreas: [
      "Surat",
      "Navsari",
      "Bardoli",
      "Bharuch",
      "Ankleshwar",
      "Valsad",
      "Vyara",
      "Daman",
    ],
  },

  vadodara: {
    pickupPoints: [
      "Vadodara Junction",
      "Vadodara Airport",
      "Central Bus Station",
      "Alkapuri",
      "Gotri",
    ],
    serviceAreas: [
      "Vadodara",
      "Anand",
      "Nadiad",
      "Bharuch",
      "Ankleshwar",
      "Halol",
      "Dabhoi",
      "Ahmedabad",
    ],
  },

  rajkot: {
    pickupPoints: [
      "Rajkot Junction",
      "Rajkot Airport",
      "Rajkot Bus Station",
      "Kalawad Road",
      "Race Course",
    ],
    serviceAreas: [
      "Rajkot",
      "Gondal",
      "Morbi",
      "Jamnagar",
      "Junagadh",
      "Porbandar",
      "Dwarka",
      "Bhavnagar",
    ],
  },

  bhavnagar: {
    pickupPoints: [
      "Bhavnagar Terminus",
      "Bhavnagar Airport",
      "Bhavnagar Central Bus Station",
      "Waghawadi Road",
      "Nilambaug",
    ],
    serviceAreas: [
      "Bhavnagar",
      "Palitana",
      "Mahuva",
      "Talaja",
      "Botad",
      "Ahmedabad",
      "Surat",
      "Rajkot",
    ],
  },

  gandhinagar: {
    pickupPoints: [
      "Gandhinagar Capital Railway Station",
      "Akshardham Temple",
      "Infocity",
      "Kudasan",
      "Sargasan",
    ],
    serviceAreas: [
      "Gandhinagar",
      "Ahmedabad",
      "Kalol",
      "Adalaj",
      "Mehsana",
      "Himmatnagar",
      "Vadodara",
      "Anand",
    ],
  },

  anand: {
    pickupPoints: [
      "Anand Junction",
      "Anand Bus Station",
      "Vallabh Vidyanagar",
      "Karamsad",
      "Amul Dairy",
    ],
    serviceAreas: [
      "Anand",
      "Vallabh Vidyanagar",
      "Nadiad",
      "Kheda",
      "Vadodara",
      "Ahmedabad",
      "Petlad",
      "Borsad",
    ],
  },

  navsari: {
    pickupPoints: [
      "Navsari Railway Station",
      "Navsari Bus Station",
      "Lunsikui",
      "Jalalpore",
      "Vijalpore",
    ],
    serviceAreas: [
      "Navsari",
      "Surat",
      "Gandevi",
      "Bilimora",
      "Valsad",
      "Chikhli",
      "Bardoli",
      "Dandi",
    ],
  },

  bharuch: {
    pickupPoints: [
      "Bharuch Junction",
      "Bharuch Bus Station",
      "Ankleshwar Junction",
      "Zadeshwar",
      "Dahej Road",
    ],
    serviceAreas: [
      "Bharuch",
      "Ankleshwar",
      "Dahej",
      "Jhagadia",
      "Surat",
      "Vadodara",
      "Rajpipla",
      "Hansot",
    ],
  },

  faridabad: {
    pickupPoints: [
      "Faridabad Railway Station",
      "Old Faridabad Metro Station",
      "Badarpur Border Metro Station",
      "NIT Faridabad",
      "Sector 15",
    ],
    serviceAreas: [
      "Faridabad",
      "Ballabhgarh",
      "Greater Faridabad",
      "Delhi",
      "Gurugram",
      "Noida",
      "Ghaziabad",
      "Palwal",
    ],
  },

  gurugram: {
    pickupPoints: [
      "Gurugram Railway Station",
      "Millennium City Centre Metro Station",
      "IFFCO Chowk",
      "Cyber City",
      "Golf Course Road",
    ],
    serviceAreas: [
      "Gurugram",
      "Manesar",
      "Sohna",
      "Faridabad",
      "Delhi",
      "Noida",
      "Ghaziabad",
      "Rewari",
    ],
  },

  ambala: {
    pickupPoints: [
      "Ambala Cantt Junction",
      "Ambala City Railway Station",
      "Ambala Cantt Bus Stand",
      "Ambala City Bus Stand",
      "Baldev Nagar",
    ],
    serviceAreas: [
      "Ambala",
      "Chandigarh",
      "Mohali",
      "Kurukshetra",
      "Yamuna Nagar",
      "Karnal",
      "Patiala",
      "Ludhiana",
    ],
  },

  "yamuna-nagar": {
    pickupPoints: [
      "Yamuna Nagar-Jagadhri Railway Station",
      "Jagadhri Bus Stand",
      "Yamuna Nagar Bus Stand",
      "Model Town",
      "Workshop Road",
    ],
    serviceAreas: [
      "Yamuna Nagar",
      "Jagadhri",
      "Ambala",
      "Kurukshetra",
      "Karnal",
      "Panchkula",
      "Paonta Sahib",
      "Dehradun",
    ],
  },

  srinagar: {
    pickupPoints: [
      "Srinagar Railway Station",
      "Sheikh ul-Alam International Airport",
      "Lal Chowk",
      "Dal Lake",
      "Hazratbal",
    ],
    serviceAreas: [
      "Srinagar",
      "Gulmarg",
      "Pahalgam",
      "Sonamarg",
      "Ganderbal",
      "Baramulla",
      "Anantnag",
      "Doodhpathri",
    ],
  },

  jammu: {
    pickupPoints: [
      "Jammu Tawi Railway Station",
      "Jammu Airport",
      "General Bus Stand Jammu",
      "Bahu Plaza",
      "Katra Railway Station",
    ],
    serviceAreas: [
      "Jammu",
      "Katra",
      "Vaishno Devi",
      "Udhampur",
      "Patnitop",
      "Samba",
      "Akhnoor",
      "Srinagar",
    ],
  },

  ranchi: {
    pickupPoints: [
      "Ranchi Junction",
      "Birsa Munda Airport",
      "Khadgarha Bus Stand",
      "Hatia Railway Station",
      "Morabadi",
    ],
    serviceAreas: [
      "Ranchi",
      "Hatia",
      "Ramgarh",
      "Hazaribagh",
      "Bokaro",
      "Dhanbad",
      "Jamshedpur",
      "Netarhat",
    ],
  },

  jamshedpur: {
    pickupPoints: [
      "Tatanagar Junction",
      "Sakchi Bus Stand",
      "Mango Bus Stand",
      "Bistupur",
      "Kadma",
    ],
    serviceAreas: [
      "Jamshedpur",
      "Adityapur",
      "Gamharia",
      "Chandil",
      "Chaibasa",
      "Ghatsila",
      "Ranchi",
      "Dhanbad",
    ],
  },

  dhanbad: {
    pickupPoints: [
      "Dhanbad Junction",
      "Bank More",
      "Dhanbad Bus Stand",
      "Saraidhela",
      "Hirapur",
    ],
    serviceAreas: [
      "Dhanbad",
      "Bokaro",
      "Jharia",
      "Sindri",
      "Chas",
      "Giridih",
      "Asansol",
      "Ranchi",
    ],
  },

  "bokaro-steel-city": {
    pickupPoints: [
      "Bokaro Steel City Railway Station",
      "Bokaro Bus Stand",
      "City Centre Sector 4",
      "Chas Bus Stand",
      "Sector 12",
    ],
    serviceAreas: [
      "Bokaro Steel City",
      "Chas",
      "Dhanbad",
      "Ranchi",
      "Hazaribagh",
      "Ramgarh",
      "Giridih",
      "Purulia",
    ],
  },

  mangaluru: {
    pickupPoints: [
      "Mangaluru Central Railway Station",
      "Mangaluru Junction",
      "Mangaluru International Airport",
      "State Bank Bus Stand",
      "Pumpwell",
    ],
    serviceAreas: [
      "Mangaluru",
      "Udupi",
      "Kundapura",
      "Karkala",
      "Puttur",
      "Kasargod",
      "Dharmasthala",
      "Kukke Subramanya",
    ],
  },

  kalaburagi: {
    pickupPoints: [
      "Kalaburagi Railway Station",
      "Kalaburagi Airport",
      "Central Bus Stand",
      "Super Market",
      "Sedam Road",
    ],
    serviceAreas: [
      "Kalaburagi",
      "Yadgir",
      "Bidar",
      "Vijayapura",
      "Solapur",
      "Aland",
      "Sedam",
      "Raichur",
    ],
  },

  tumkur: {
    pickupPoints: [
      "Tumakuru Railway Station",
      "Tumakuru KSRTC Bus Stand",
      "Gubbi Gate",
      "Siddaganga Math",
      "Batawadi",
    ],
    serviceAreas: [
      "Tumakuru",
      "Bengaluru",
      "Kunigal",
      "Gubbi",
      "Tiptur",
      "Sira",
      "Madhugiri",
      "Chitradurga",
    ],
  },

  thrissur: {
    pickupPoints: [
      "Thrissur Railway Station",
      "Sakthan Thampuran Bus Stand",
      "Thrissur KSRTC Bus Stand",
      "Punkunnam",
      "Vadakkunnathan Temple",
    ],
    serviceAreas: [
      "Thrissur",
      "Guruvayur",
      "Chalakudy",
      "Irinjalakuda",
      "Kodungallur",
      "Kochi",
      "Palakkad",
      "Athirappilly",
    ],
  },

  kollam: {
    pickupPoints: [
      "Kollam Junction",
      "Kollam KSRTC Bus Stand",
      "Kottarakkara Bus Stand",
      "Chinnakada",
      "Ashtamudi Lake",
    ],
    serviceAreas: [
      "Kollam",
      "Kottarakkara",
      "Punalur",
      "Karunagappally",
      "Varkala",
      "Alappuzha",
      "Thiruvananthapuram",
      "Thenmala",
    ],
  },

  alappuzha: {
    pickupPoints: [
      "Alappuzha Railway Station",
      "Alappuzha KSRTC Bus Stand",
      "Alappuzha Beach",
      "Finishing Point",
      "Punnamada Lake",
    ],
    serviceAreas: [
      "Alappuzha",
      "Mararikulam",
      "Cherthala",
      "Ambalappuzha",
      "Haripad",
      "Kuttanad",
    ],
  },

  bhopal: {
    pickupPoints: [
      "Rani Kamlapati Railway Station",
      "Bhopal Junction",
      "ISBT Bhopal",
      "MP Nagar",
      "New Market",
      "Lalghati",
    ],
    serviceAreas: [
      "Bhopal",
      "Mandideep",
      "Sehore",
      "Raisen",
      "Vidisha",
      "Obedullaganj",
    ],
  },

  gwalior: {
    pickupPoints: [
      "Gwalior Junction",
      "Gwalior Bus Stand",
      "Morar",
      "Lashkar",
      "City Centre",
      "Thatipur",
    ],
    serviceAreas: ["Gwalior", "Dabra", "Morena", "Bhind", "Shivpuri", "Datia"],
  },

  nagpur: {
    pickupPoints: [
      "Nagpur Railway Station",
      "Ajni Railway Station",
      "Dr. Babasaheb Ambedkar International Airport",
      "Ganeshpeth Bus Stand",
      "Sitabuldi",
      "Dharampeth",
    ],
    serviceAreas: [
      "Nagpur",
      "Wardha",
      "Amravati",
      "Bhandara",
      "Chandrapur",
      "Ramtek",
    ],
  },

  "chhatrapati-sambhajinagar": {
    pickupPoints: [
      "Chhatrapati Sambhajinagar Railway Station",
      "Central Bus Stand",
      "Airport",
      "CIDCO",
      "Jalna Road",
      "Seven Hills",
    ],
    serviceAreas: [
      "Chhatrapati Sambhajinagar",
      "Jalna",
      "Paithan",
      "Vaijapur",
      "Kannad",
      "Beed",
    ],
  },

  solapur: {
    pickupPoints: [
      "Solapur Railway Station",
      "Solapur Central Bus Stand",
      "Hotgi Road",
      "Saat Rasta",
      "Vijapur Road",
    ],
    serviceAreas: [
      "Solapur",
      "Akkalkot",
      "Pandharpur",
      "Barshi",
      "Mangalwedha",
      "Tuljapur",
    ],
  },

  kolhapur: {
    pickupPoints: [
      "Kolhapur Railway Station",
      "Central Bus Stand",
      "Rankala Lake",
      "Mahalaxmi Temple",
      "Tarabai Park",
      "Shahupuri",
    ],
    serviceAreas: [
      "Kolhapur",
      "Ichalkaranji",
      "Gadhinglaj",
      "Kagal",
      "Panhala",
      "Sangli",
    ],
  },

  jalgaon: {
    pickupPoints: [
      "Jalgaon Junction",
      "Jalgaon Bus Stand",
      "Ajanta Road",
      "Mehrun",
      "MIDC Jalgaon",
    ],
    serviceAreas: [
      "Jalgaon",
      "Bhusawal",
      "Amalner",
      "Chalisgaon",
      "Pachora",
      "Yawal",
    ],
  },

  dhule: {
    pickupPoints: [
      "Dhule Bus Stand",
      "Dhule Railway Station",
      "Mumbai-Agra Highway",
      "Deopur",
      "Dhule MIDC",
    ],
    serviceAreas: [
      "Dhule",
      "Shirpur",
      "Sakri",
      "Sindkheda",
      "Nandurbar",
      "Malegaon",
    ],
  },

  bhiwandi: {
    pickupPoints: [
      "Bhiwandi Bus Depot",
      "Bhiwandi Railway Station",
      "Dhamankar Naka",
      "Kalyan Road",
      "Mankoli",
      "Anjurphata",
    ],
    serviceAreas: [
      "Bhiwandi",
      "Thane",
      "Kalyan",
      "Dombivli",
      "Navi Mumbai",
      "Vasai",
    ],
  },

  malegaon: {
    pickupPoints: [
      "Malegaon Central Bus Stand",
      "Malegaon Camp",
      "Mumbai-Agra Highway",
      "Maliwada",
      "Soygaon",
    ],
    serviceAreas: [
      "Malegaon",
      "Manmad",
      "Nashik",
      "Dhule",
      "Nandgaon",
      "Chandwad",
    ],
  },

  "navi-mumbai": {
    pickupPoints: [
      "Vashi Railway Station",
      "Nerul Railway Station",
      "Belapur CBD",
      "Panvel Railway Station",
      "Kharghar",
      "Airoli",
    ],
    serviceAreas: [
      "Navi Mumbai",
      "Vashi",
      "Nerul",
      "Belapur",
      "Panvel",
      "Kharghar",
      "Taloja",
    ],
  },

  "kalyan-dombivli": {
    pickupPoints: [
      "Kalyan Railway Station",
      "Dombivli Railway Station",
      "Dombivli East",
      "Kalyan West",
      "Shilphata",
      "Durgadi Chowk",
    ],
    serviceAreas: [
      "Kalyan",
      "Dombivli",
      "Ulhasnagar",
      "Ambernath",
      "Badlapur",
      "Titwala",
    ],
  },

  "vasai-virar": {
    pickupPoints: [
      "Vasai Road Railway Station",
      "Nallasopara Railway Station",
      "Virar Railway Station",
      "Vasai West",
      "Manickpur",
      "Bolinj",
    ],
    serviceAreas: [
      "Vasai",
      "Virar",
      "Nallasopara",
      "Naigaon",
      "Palghar",
      "Boisar",
    ],
  },

  mysuru: {
    pickupPoints: [
      "Mysuru Junction",
      "Mysuru Suburban Bus Stand",
      "Mysuru Airport",
      "Mysore Palace",
      "Hebbal",
      "Vijayanagar",
    ],
    serviceAreas: [
      "Mysuru",
      "Nanjangud",
      "Srirangapatna",
      "Mandya",
      "Hunsur",
      "Coorg",
    ],
  },

  "hubli-dharwad": {
    pickupPoints: [
      "Hubballi Junction",
      "Hubballi Bus Stand",
      "Dharwad Railway Station",
      "Dharwad Bus Stand",
      "Unkal",
      "Gokul Road",
    ],
    serviceAreas: [
      "Hubli",
      "Dharwad",
      "Belagavi",
      "Gadag",
      "Haveri",
      "Dandeli",
    ],
  },

  shimoga: {
    pickupPoints: [
      "Shivamogga Town Railway Station",
      "Shivamogga Bus Stand",
      "Sagara Road",
      "Vinoba Nagar",
      "Gopi Circle",
    ],
    serviceAreas: [
      "Shivamogga",
      "Sagara",
      "Thirthahalli",
      "Bhadravati",
      "Hosanagara",
      "Kundapura",
    ],
  },

  ballari: {
    pickupPoints: [
      "Ballari Railway Station",
      "Ballari Bus Stand",
      "Royal Circle",
      "Cantonment",
      "Ananthapur Road",
    ],
    serviceAreas: [
      "Ballari",
      "Hospet",
      "Koppal",
      "Siruguppa",
      "Sandur",
      "Hampi",
    ],
  },

  kochi: {
    pickupPoints: [
      "Ernakulam Junction",
      "Ernakulam Town",
      "Cochin International Airport",
      "Vyttila Mobility Hub",
      "Fort Kochi",
      "Edappally",
    ],
    serviceAreas: [
      "Kochi",
      "Ernakulam",
      "Aluva",
      "Kakkanad",
      "Angamaly",
      "North Paravur",
    ],
  },

  thiruvananthapuram: {
    pickupPoints: [
      "Thiruvananthapuram Central",
      "Thiruvananthapuram International Airport",
      "Thampanoor Bus Stand",
      "Technopark",
      "Kazhakkoottam",
      "Kovalam",
    ],
    serviceAreas: [
      "Thiruvananthapuram",
      "Neyyattinkara",
      "Attingal",
      "Varkala",
      "Nedumangad",
      "Kovalam",
    ],
  },

  malappuram: {
    pickupPoints: [
      "Malappuram Bus Stand",
      "Kottakkal",
      "Manjeri",
      "Perinthalmanna",
      "Tirur Railway Station",
      "Kondotty",
    ],
    serviceAreas: [
      "Malappuram",
      "Manjeri",
      "Kottakkal",
      "Tirur",
      "Perinthalmanna",
      "Nilambur",
      "Kondotty",
    ],
  },

  jabalpur: {
    pickupPoints: [
      "Jabalpur Junction",
      "Dumna Airport",
      "Madan Mahal Railway Station",
      "ISBT Jabalpur",
      "Wright Town",
      "Vijay Nagar",
    ],
    serviceAreas: [
      "Jabalpur",
      "Bhedaghat",
      "Katni",
      "Mandla",
      "Narsinghpur",
      "Seoni",
    ],
  },

  satna: {
    pickupPoints: [
      "Satna Railway Station",
      "Satna Bus Stand",
      "Civil Lines",
      "Rewa Road",
      "Panna Road",
    ],
    serviceAreas: [
      "Satna",
      "Maihar",
      "Rewa",
      "Chitrakoot",
      "Amarpatan",
      "Nagod",
    ],
  },

  burhanpur: {
    pickupPoints: [
      "Burhanpur Railway Station",
      "Burhanpur Bus Stand",
      "Lalbagh",
      "Shahpur",
      "Ichhapur Road",
    ],
    serviceAreas: [
      "Burhanpur",
      "Nepanagar",
      "Khandwa",
      "Bhusawal",
      "Raver",
      "Malkapur",
    ],
  },

  amravati: {
    pickupPoints: [
      "Amravati Railway Station",
      "Badnera Junction",
      "Amravati Bus Stand",
      "Rajapeth",
      "Camp Area",
    ],
    serviceAreas: [
      "Amravati",
      "Badnera",
      "Achalpur",
      "Daryapur",
      "Morshi",
      "Chandur Railway",
    ],
  },

  nanded: {
    pickupPoints: [
      "Hazur Sahib Nanded Railway Station",
      "Nanded Bus Stand",
      "Vazirabad",
      "Airport Road",
      "CIDCO Nanded",
    ],
    serviceAreas: ["Nanded", "Deglur", "Mukhed", "Loha", "Hadgaon", "Parbhani"],
  },

  sangli: {
    pickupPoints: [
      "Sangli Railway Station",
      "Sangli Bus Stand",
      "Miraj Junction",
      "Vishrambag",
      "Kupwad MIDC",
    ],
    serviceAreas: [
      "Sangli",
      "Miraj",
      "Tasgaon",
      "Islampur",
      "Palus",
      "Kolhapur",
    ],
  },

  akola: {
    pickupPoints: [
      "Akola Junction",
      "Akola Bus Stand",
      "Civil Lines",
      "Murtizapur Road",
      "MIDC Akola",
    ],
    serviceAreas: [
      "Akola",
      "Murtizapur",
      "Washim",
      "Telhara",
      "Balapur",
      "Shegaon",
    ],
  },

  latur: {
    pickupPoints: [
      "Latur Railway Station",
      "Latur Bus Stand",
      "Ganj Golai",
      "Ausa Road",
      "MIDC Latur",
    ],
    serviceAreas: [
      "Latur",
      "Ausa",
      "Udgir",
      "Nilanga",
      "Ahmedpur",
      "Osmanabad",
    ],
  },

  wardha: {
    pickupPoints: [
      "Wardha Junction",
      "Wardha Bus Stand",
      "Sevagram Railway Station",
      "Civil Lines",
      "Arvi Road",
    ],
    serviceAreas: [
      "Wardha",
      "Sevagram",
      "Arvi",
      "Hinganghat",
      "Deoli",
      "Nagpur",
    ],
  },

  "mira-bhayandar": {
    pickupPoints: [
      "Mira Road Railway Station",
      "Bhayandar Railway Station",
      "Kashimira",
      "Mira Road East",
      "Bhayandar West",
    ],
    serviceAreas: [
      "Mira-Bhayandar",
      "Mira Road",
      "Bhayandar",
      "Dahisar",
      "Borivali",
      "Vasai",
    ],
  },

  thane: {
    pickupPoints: [
      "Thane Railway Station",
      "Thane West",
      "Teen Hath Naka",
      "Ghodbunder Road",
      "Majiwada",
      "Wagle Estate",
    ],
    serviceAreas: [
      "Thane",
      "Kalwa",
      "Mumbra",
      "Dombivli",
      "Bhiwandi",
      "Navi Mumbai",
    ],
  },

  bhubaneswar: {
    pickupPoints: [
      "Bhubaneswar Railway Station",
      "Biju Patnaik International Airport",
      "Baramunda Bus Stand",
      "Master Canteen",
      "Patia",
      "Jaydev Vihar",
    ],
    serviceAreas: [
      "Bhubaneswar",
      "Khordha",
      "Puri",
      "Cuttack",
      "Konark",
      "Jatani",
    ],
  },

  cuttack: {
    pickupPoints: [
      "Cuttack Railway Station",
      "Badambadi Bus Stand",
      "College Square",
      "Link Road",
      "CDA Sector 6",
    ],
    serviceAreas: [
      "Cuttack",
      "Bhubaneswar",
      "Jagatpur",
      "Choudwar",
      "Athagarh",
      "Salepur",
    ],
  },

  rourkela: {
    pickupPoints: [
      "Rourkela Railway Station",
      "Rourkela Bus Stand",
      "Panposh",
      "Udit Nagar",
      "Civil Township",
      "Chhend Colony",
    ],
    serviceAreas: [
      "Rourkela",
      "Rajgangpur",
      "Sundargarh",
      "Birmitrapur",
      "Kansbahal",
      "Jharsuguda",
    ],
  },

  berhampur: {
    pickupPoints: [
      "Brahmapur Railway Station",
      "New Bus Stand",
      "Old Bus Stand",
      "Gopalpur Road",
      "Courtpeta",
    ],
    serviceAreas: [
      "Berhampur",
      "Gopalpur",
      "Chhatrapur",
      "Hinjilicut",
      "Aska",
      "Digapahandi",
    ],
  },

  puducherry: {
    pickupPoints: [
      "Puducherry Railway Station",
      "Puducherry Bus Stand",
      "White Town",
      "Auroville",
      "Lawspet",
      "ECR Road",
    ],
    serviceAreas: [
      "Puducherry",
      "Auroville",
      "Villianur",
      "Bahour",
      "Cuddalore",
      "Tindivanam",
    ],
  },

  amritsar: {
    pickupPoints: [
      "Amritsar Junction",
      "Sri Guru Ram Dass Jee International Airport",
      "Golden Temple",
      "Amritsar Bus Stand",
      "Hall Gate",
      "Ranjit Avenue",
    ],
    serviceAreas: [
      "Amritsar",
      "Wagah",
      "Attari",
      "Tarn Taran",
      "Batala",
      "Jalandhar",
    ],
  },

  jalandhar: {
    pickupPoints: [
      "Jalandhar City Railway Station",
      "Jalandhar Cantt Railway Station",
      "Jalandhar Bus Stand",
      "Model Town",
      "Rama Mandi",
      "Urban Estate",
    ],
    serviceAreas: [
      "Jalandhar",
      "Phagwara",
      "Kapurthala",
      "Nakodar",
      "Hoshiarpur",
      "Ludhiana",
    ],
  },

  patiala: {
    pickupPoints: [
      "Patiala Railway Station",
      "Patiala Bus Stand",
      "Leela Bhawan",
      "Rajpura Road",
      "Urban Estate",
      "Tripuri",
    ],
    serviceAreas: [
      "Patiala",
      "Rajpura",
      "Samana",
      "Nabha",
      "Sirhind",
      "Chandigarh",
    ],
  },

  pathankot: {
    pickupPoints: [
      "Pathankot Junction",
      "Pathankot Bus Stand",
      "Pathankot Cantt Railway Station",
      "Dalhousie Road",
      "Mamun",
    ],
    serviceAreas: [
      "Pathankot",
      "Dina Nagar",
      "Gurdaspur",
      "Kathua",
      "Dalhousie",
      "Nurpur",
    ],
  },

  jaipur: {
    pickupPoints: [
      "Jaipur Junction",
      "Jaipur International Airport",
      "Sindhi Camp Bus Stand",
      "Gandhi Nagar Railway Station",
      "Vaishali Nagar",
      "Malviya Nagar",
      "Tonk Road",
    ],
    serviceAreas: [
      "Jaipur",
      "Amer",
      "Chomu",
      "Bagru",
      "Dausa",
      "Sikar",
      "Ajmer",
    ],
  },

  jodhpur: {
    pickupPoints: [
      "Jodhpur Junction",
      "Bhagat Ki Kothi Railway Station",
      "Jodhpur Airport",
      "Paota Bus Stand",
      "Ratanada",
      "Sardarpura",
    ],
    serviceAreas: ["Jodhpur", "Osian", "Pali", "Bilara", "Phalodi", "Nagaur"],
  },

  kota: {
    pickupPoints: [
      "Kota Junction",
      "Kota Bus Stand",
      "Kota Airport",
      "Talwandi",
      "Vigyan Nagar",
      "Kunhadi",
    ],
    serviceAreas: [
      "Kota",
      "Bundi",
      "Baran",
      "Jhalawar",
      "Sawai Madhopur",
      "Bhilwara",
    ],
  },

  ajmer: {
    pickupPoints: [
      "Ajmer Junction",
      "Ajmer Bus Stand",
      "Dargah Sharif",
      "Ana Sagar Lake",
      "Adarsh Nagar",
      "Pushkar Road",
    ],
    serviceAreas: [
      "Ajmer",
      "Pushkar",
      "Kishangarh",
      "Beawar",
      "Nasirabad",
      "Bhilwara",
    ],
  },

  bhilwara: {
    pickupPoints: [
      "Bhilwara Railway Station",
      "Bhilwara Bus Stand",
      "Sanganer",
      "Azad Nagar",
      "Chittorgarh Road",
    ],
    serviceAreas: [
      "Bhilwara",
      "Shahpura",
      "Mandal",
      "Gangapur",
      "Chittorgarh",
      "Ajmer",
    ],
  },

  sikar: {
    pickupPoints: [
      "Sikar Railway Station",
      "Sikar Bus Stand",
      "Fatehpur Road",
      "Piprali Road",
      "Nawalgarh Road",
    ],
    serviceAreas: [
      "Sikar",
      "Fatehpur",
      "Lachhmangarh",
      "Neem Ka Thana",
      "Danta Ramgarh",
      "Jhunjhunu",
    ],
  },

  alwar: {
    pickupPoints: [
      "Alwar Railway Station",
      "Alwar Bus Stand",
      "Hope Circus",
      "Company Bagh",
      "Matsya Industrial Area",
    ],
    serviceAreas: [
      "Alwar",
      "Bhiwadi",
      "Neemrana",
      "Behror",
      "Rajgarh",
      "Tijara",
    ],
  },

  "sri-ganganagar": {
    pickupPoints: [
      "Sri Ganganagar Railway Station",
      "Sri Ganganagar Bus Stand",
      "Sukharia Circle",
      "Ridhi Sidhi Enclave",
      "Hanumangarh Road",
    ],
    serviceAreas: [
      "Sri Ganganagar",
      "Raisinghnagar",
      "Anupgarh",
      "Padampur",
      "Suratgarh",
      "Hanumangarh",
    ],
  },

  hanumangarh: {
    pickupPoints: [
      "Hanumangarh Junction Railway Station",
      "Hanumangarh Town Railway Station",
      "Hanumangarh Bus Stand",
      "Junction Market",
      "Sangaria Road",
    ],
    serviceAreas: [
      "Hanumangarh",
      "Sangaria",
      "Pilibanga",
      "Rawatsar",
      "Nohar",
      "Sri Ganganagar",
    ],
  },

  chittorgarh: {
    pickupPoints: [
      "Chittorgarh Railway Station",
      "Chittorgarh Bus Stand",
      "Chittorgarh Fort",
      "Senthi",
      "Nimbahera Road",
    ],
    serviceAreas: [
      "Chittorgarh",
      "Nimbahera",
      "Kapasan",
      "Begun",
      "Bhilwara",
      "Udaipur",
    ],
  },

  pali: {
    pickupPoints: [
      "Pali Marwar Railway Station",
      "Pali Bus Stand",
      "Suraj Pole",
      "Industrial Area Pali",
      "Jodhpur Road",
    ],
    serviceAreas: ["Pali", "Sojat", "Rani", "Sumerpur", "Bali", "Jodhpur"],
  },

  tonk: {
    pickupPoints: [
      "Tonk Bus Stand",
      "Tonk Collectorate Area",
      "Jaipur Road",
      "Banas Bridge Area",
      "Civil Lines",
    ],
    serviceAreas: ["Tonk", "Deoli", "Niwai", "Malpura", "Uniara", "Jaipur"],
  },

  coimbatore: {
    pickupPoints: [
      "Coimbatore Junction",
      "Coimbatore International Airport",
      "Gandhipuram Bus Stand",
      "Ukkadam Bus Stand",
      "Singanallur Bus Stand",
      "Peelamedu",
    ],
    serviceAreas: [
      "Coimbatore",
      "Pollachi",
      "Mettupalayam",
      "Tiruppur",
      "Avinashi",
      "Sulur",
    ],
  },

  madurai: {
    pickupPoints: [
      "Madurai Junction",
      "Madurai Airport",
      "Mattuthavani Bus Stand",
      "Periyar Bus Stand",
      "Thirumangalam",
      "Tallakulam",
    ],
    serviceAreas: [
      "Madurai",
      "Melur",
      "Usilampatti",
      "Thirumangalam",
      "Dindigul",
      "Sivaganga",
    ],
  },

  tiruchirappalli: {
    pickupPoints: [
      "Tiruchirappalli Junction",
      "Tiruchirappalli International Airport",
      "Central Bus Stand",
      "Chatram Bus Stand",
      "Srirangam",
      "Thillai Nagar",
    ],
    serviceAreas: [
      "Tiruchirappalli",
      "Srirangam",
      "Thanjavur",
      "Karur",
      "Perambalur",
      "Pudukkottai",
    ],
  },

  tiruppur: {
    pickupPoints: [
      "Tiruppur Railway Station",
      "Tiruppur Old Bus Stand",
      "Tiruppur New Bus Stand",
      "Avinashi Road",
      "Kangeyam Road",
    ],
    serviceAreas: [
      "Tiruppur",
      "Avinashi",
      "Palladam",
      "Kangeyam",
      "Dharapuram",
      "Coimbatore",
    ],
  },

  thanjavur: {
    pickupPoints: [
      "Thanjavur Junction",
      "Thanjavur New Bus Stand",
      "Thanjavur Old Bus Stand",
      "Brihadeeswarar Temple",
      "Medical College Road",
    ],
    serviceAreas: [
      "Thanjavur",
      "Kumbakonam",
      "Papanasam",
      "Pattukkottai",
      "Orathanadu",
      "Tiruchirappalli",
    ],
  },

  nagercoil: {
    pickupPoints: [
      "Nagercoil Junction",
      "Nagercoil Town Railway Station",
      "Vadasery Bus Stand",
      "Nagercoil Bus Stand",
      "Kottar",
    ],
    serviceAreas: [
      "Nagercoil",
      "Kanyakumari",
      "Marthandam",
      "Colachel",
      "Thuckalay",
      "Suchindram",
    ],
  },

  ambur: {
    pickupPoints: [
      "Ambur Railway Station",
      "Ambur Bus Stand",
      "Bypass Road",
      "Vaniyambadi Road",
      "Pernambut Road",
    ],
    serviceAreas: [
      "Ambur",
      "Vaniyambadi",
      "Gudiyatham",
      "Pernambut",
      "Jolarpet",
      "Vellore",
    ],
  },

  pallavaram: {
    pickupPoints: [
      "Pallavaram Railway Station",
      "Chennai International Airport",
      "Pallavaram Bus Stand",
      "Chromepet Railway Station",
      "Pammal",
      "GST Road",
    ],
    serviceAreas: [
      "Pallavaram",
      "Chromepet",
      "Pammal",
      "Tambaram",
      "Meenambakkam",
      "Guindy",
    ],
  },

  warangal: {
    pickupPoints: [
      "Warangal Railway Station",
      "Kazipet Junction",
      "Hanamkonda Bus Stand",
      "Warangal Bus Stand",
      "Hanamkonda",
    ],
    serviceAreas: [
      "Warangal",
      "Hanamkonda",
      "Kazipet",
      "Parkal",
      "Jangaon",
      "Mulugu",
    ],
  },

  ramagundam: {
    pickupPoints: [
      "Ramagundam Railway Station",
      "Ramagundam Bus Stand",
      "Godavarikhani",
      "NTPC Ramagundam",
      "Jyothinagar",
    ],
    serviceAreas: [
      "Ramagundam",
      "Godavarikhani",
      "Peddapalle",
      "Mancherial",
      "Karimnagar",
      "Sultanabad",
    ],
  },

  adilabad: {
    pickupPoints: [
      "Adilabad Railway Station",
      "Adilabad Bus Stand",
      "RIMS Adilabad",
      "Bhuktapur",
      "Mavala",
    ],
    serviceAreas: [
      "Adilabad",
      "Nirmal",
      "Utnoor",
      "Boath",
      "Mancherial",
      "Kumuram Bheem Asifabad",
    ],
  },

  jagityal: {
    pickupPoints: [
      "Jagtial Bus Stand",
      "Jagtial Market Area",
      "Korutla Road",
      "Dharmapuri Road",
      "Metpally Road",
    ],
    serviceAreas: [
      "Jagtial",
      "Korutla",
      "Metpally",
      "Dharmapuri",
      "Raikal",
      "Karimnagar",
    ],
  },

  bhongir: {
    pickupPoints: [
      "Bhongir Railway Station",
      "Bhongir Bus Stand",
      "Bhongir Fort Area",
      "Yadagirigutta Road",
      "Raigiri",
    ],
    serviceAreas: [
      "Bhongir",
      "Yadagirigutta",
      "Bibinagar",
      "Choutuppal",
      "Alair",
      "Hyderabad",
    ],
  },

  narayanpet: {
    pickupPoints: [
      "Narayanpet Bus Stand",
      "Narayanpet Market Area",
      "Kosgi Road",
      "Makthal Road",
      "Marikal Road",
    ],
    serviceAreas: [
      "Narayanpet",
      "Makthal",
      "Kosgi",
      "Marikal",
      "Kodangal",
      "Mahabubnagar",
    ],
  },

  jogulamba: {
    pickupPoints: [
      "Alampur Bus Stand",
      "Alampur Temple Area",
      "Gadwal Bus Stand",
      "Gadwal Railway Station",
      "Kurnool Road",
    ],
    serviceAreas: [
      "Alampur",
      "Gadwal",
      "Ieeja",
      "Waddepally",
      "Undavelli",
      "Kurnool",
    ],
  },

  "jayashankar-bhupalpally": {
    pickupPoints: [
      "Bhupalpally Bus Stand",
      "Bhupalpally Market Area",
      "Bhupalpally Main Road",
      "Kataram Road",
      "Ghanpur Area",
    ],
    serviceAreas: [
      "Bhupalpally",
      "Kataram",
      "Ghanpur",
      "Regonda",
      "Mulugu",
      "Warangal",
    ],
  },

  mulugu: {
    pickupPoints: [
      "Mulugu Bus Stand",
      "Mulugu Main Road",
      "Mulugu Market Area",
      "Eturnagaram Road",
      "Medaram Road",
    ],
    serviceAreas: [
      "Mulugu",
      "Medaram",
      "Eturnagaram",
      "Tadvai",
      "Venkatapur",
      "Warangal",
    ],
  },

  "kumuram-bheem-asifabad": {
    pickupPoints: [
      "Asifabad Bus Stand",
      "Asifabad Market Area",
      "Kagaznagar Railway Station",
      "Kagaznagar Bus Stand",
      "Rebbena Road",
    ],
    serviceAreas: [
      "Asifabad",
      "Kagaznagar",
      "Rebbena",
      "Sirpur",
      "Kerameri",
      "Mancherial",
    ],
  },

  "rajanna-sircilla": {
    pickupPoints: [
      "Sircilla Bus Stand",
      "Sircilla Market Area",
      "Vemulawada Temple",
      "Thangallapalli",
      "Mustabad Road",
    ],
    serviceAreas: [
      "Sircilla",
      "Vemulawada",
      "Mustabad",
      "Gambhiraopet",
      "Ellareddypet",
      "Karimnagar",
    ],
  },

  peddapalle: {
    pickupPoints: [
      "Peddapalli Railway Station",
      "Peddapalli Bus Stand",
      "Sultanabad Road",
      "Ramagundam Road",
      "Peddapalli Market Area",
    ],
    serviceAreas: [
      "Peddapalli",
      "Sultanabad",
      "Ramagundam",
      "Godavarikhani",
      "Manthani",
      "Karimnagar",
    ],
  },

  kanpur: {
    pickupPoints: [
      "Kanpur Central Railway Station",
      "Kanpur Airport",
      "Jhakarkati Bus Stand",
      "Kakadeo",
      "Swaroop Nagar",
      "Govind Nagar",
    ],
    serviceAreas: [
      "Kanpur",
      "Unnao",
      "Bithoor",
      "Akbarpur",
      "Fatehpur",
      "Bilhaur",
    ],
  },

  agra: {
    pickupPoints: [
      "Agra Cantt Railway Station",
      "Agra Fort Railway Station",
      "Idgah Bus Stand",
      "Kheria Airport",
      "Taj Mahal East Gate",
      "Sikandra",
    ],
    serviceAreas: [
      "Agra",
      "Fatehabad",
      "Firozabad",
      "Mathura",
      "Bharatpur",
      "Etmadpur",
    ],
  },

  meerut: {
    pickupPoints: [
      "Meerut City Railway Station",
      "Meerut Cantt Railway Station",
      "Bhainsali Bus Stand",
      "Soharab Gate Bus Stand",
      "Begum Bridge",
      "Pallavpuram",
    ],
    serviceAreas: [
      "Meerut",
      "Modinagar",
      "Sardhana",
      "Hapur",
      "Baghpat",
      "Muzaffarnagar",
    ],
  },

  bareilly: {
    pickupPoints: [
      "Bareilly Junction",
      "Bareilly City Railway Station",
      "Satellite Bus Stand",
      "Old Bus Stand",
      "Civil Lines",
      "Pilibhit Road",
    ],
    serviceAreas: [
      "Bareilly",
      "Pilibhit",
      "Badaun",
      "Shahjahanpur",
      "Nawabganj",
      "Aonla",
    ],
  },

  aligarh: {
    pickupPoints: [
      "Aligarh Junction",
      "Aligarh Bus Stand",
      "AMU Circle",
      "Centre Point",
      "Ramghat Road",
      "Quarsi",
    ],
    serviceAreas: [
      "Aligarh",
      "Hathras",
      "Kasganj",
      "Atrauli",
      "Iglas",
      "Khurja",
    ],
  },

  moradabad: {
    pickupPoints: [
      "Moradabad Junction",
      "Moradabad Bus Stand",
      "Civil Lines",
      "Kanth Road",
      "Delhi Road",
      "Majhola",
    ],
    serviceAreas: [
      "Moradabad",
      "Rampur",
      "Sambhal",
      "Amroha",
      "Chandausi",
      "Thakurdwara",
    ],
  },

  noida: {
    pickupPoints: [
      "Noida Sector 18",
      "Noida Sector 62",
      "Noida City Centre",
      "Botanical Garden Metro Station",
      "Noida Sector 137",
      "Noida Sector 150",
    ],
    serviceAreas: [
      "Noida",
      "Greater Noida",
      "Greater Noida West",
      "Ghaziabad",
      "Delhi",
      "Faridabad",
      "Gurugram",
    ],
  },

  shahjahanpur: {
    pickupPoints: [
      "Shahjahanpur Railway Station",
      "Shahjahanpur Bus Stand",
      "Sadar Bazar",
      "Civil Lines",
      "Roza Junction",
    ],
    serviceAreas: [
      "Shahjahanpur",
      "Tilhar",
      "Powayan",
      "Jalalabad",
      "Pilibhit",
      "Bareilly",
    ],
  },

  rampur: {
    pickupPoints: [
      "Rampur Junction",
      "Rampur Bus Stand",
      "Civil Lines",
      "Ambedkar Park Area",
      "Bilaspur Road",
    ],
    serviceAreas: ["Rampur", "Bilaspur", "Milak", "Swar", "Tanda", "Moradabad"],
  },

  bulandshahr: {
    pickupPoints: [
      "Bulandshahr Bus Stand",
      "Kala Aam Chowk",
      "Sikandrabad Road",
      "Delhi Road",
      "Anupshahr Road",
    ],
    serviceAreas: [
      "Bulandshahr",
      "Sikandrabad",
      "Khurja",
      "Anupshahr",
      "Jahangirabad",
      "Debai",
    ],
  },

  orai: {
    pickupPoints: [
      "Orai Railway Station",
      "Orai Bus Stand",
      "Station Road",
      "Jalaun Road",
      "Kalpi Road",
    ],
    serviceAreas: ["Orai", "Jalaun", "Kalpi", "Konch", "Madhogarh", "Jhansi"],
  },

  sitapur: {
    pickupPoints: [
      "Sitapur Junction",
      "Sitapur City Railway Station",
      "Sitapur Bus Stand",
      "Lakhimpur Road",
      "Mahmoodabad Road",
    ],
    serviceAreas: [
      "Sitapur",
      "Mahmoodabad",
      "Biswan",
      "Laharpur",
      "Sidhauli",
      "Lucknow",
    ],
  },

  bahraich: {
    pickupPoints: [
      "Bahraich Railway Station",
      "Bahraich Bus Stand",
      "Dargah Sharif",
      "Kaiserganj Road",
      "Nanpara Road",
    ],
    serviceAreas: [
      "Bahraich",
      "Nanpara",
      "Kaiserganj",
      "Payagpur",
      "Shravasti",
      "Gonda",
    ],
  },

  unnao: {
    pickupPoints: [
      "Unnao Junction",
      "Unnao Bus Stand",
      "Shuklaganj",
      "Civil Lines",
      "Kanpur Road",
    ],
    serviceAreas: [
      "Unnao",
      "Shuklaganj",
      "Bighapur",
      "Purwa",
      "Safipur",
      "Kanpur",
      "Lucknow",
    ],
  },

  "rae-bareli": {
    pickupPoints: [
      "Rae Bareli Junction",
      "Rae Bareli Bus Stand",
      "Civil Lines",
      "Lalganj Road",
      "Dalmau Road",
    ],
    serviceAreas: [
      "Rae Bareli",
      "Lalganj",
      "Dalmau",
      "Salon",
      "Unchahar",
      "Lucknow",
    ],
  },

  loni: {
    pickupPoints: [
      "Loni Railway Station",
      "Loni Bus Stand",
      "Tronica City",
      "Loni Border",
      "Indrapuri",
    ],
    serviceAreas: [
      "Loni",
      "Ghaziabad",
      "Delhi",
      "Sahibabad",
      "Greater Noida",
      "Noida",
    ],
  },

  khurja: {
    pickupPoints: [
      "Khurja Junction",
      "Khurja Bus Stand",
      "Khurja City",
      "GT Road",
      "Industrial Area",
    ],
    serviceAreas: [
      "Khurja",
      "Bulandshahr",
      "Sikandrabad",
      "Aligarh",
      "Jewar",
      "Greater Noida",
    ],
  },

  barabanki: {
    pickupPoints: [
      "Barabanki Railway Station",
      "Barabanki Bus Stand",
      "Dewa Road",
      "Civil Lines",
      "Safedabad",
    ],
    serviceAreas: [
      "Barabanki",
      "Dewa",
      "Haidergarh",
      "Ramnagar",
      "Zaidpur",
      "Lucknow",
    ],
  },

  azamgarh: {
    pickupPoints: [
      "Azamgarh Railway Station",
      "Azamgarh Bus Stand",
      "Civil Lines",
      "Brahmasthan",
      "Sidhari",
    ],
    serviceAreas: [
      "Azamgarh",
      "Mubarakpur",
      "Nizamabad",
      "Mehnagar",
      "Phulpur",
      "Mau",
    ],
  },

  mau: {
    pickupPoints: [
      "Mau Junction",
      "Mau Roadways Bus Stand",
      "Ghosi",
      "Mirzahadipura",
      "Sahadatpura",
    ],
    serviceAreas: [
      "Mau",
      "Ghosi",
      "Muhammadabad Gohna",
      "Kopaganj",
      "Ratanpura",
      "Azamgarh",
    ],
  },

  farrukhabad: {
    pickupPoints: [
      "Farrukhabad Junction",
      "Farrukhabad Bus Stand",
      "Fatehgarh Railway Station",
      "Fatehgarh",
      "Lal Gate",
    ],
    serviceAreas: [
      "Farrukhabad",
      "Fatehgarh",
      "Kaimganj",
      "Kampil",
      "Mohammadabad",
      "Kannauj",
    ],
  },

  basti: {
    pickupPoints: [
      "Basti Railway Station",
      "Basti Roadways Bus Stand",
      "Gandhi Nagar",
      "Company Bagh",
      "Harraiya Road",
    ],
    serviceAreas: [
      "Basti",
      "Harraiya",
      "Rudhauli",
      "Kaptanganj",
      "Khalilabad",
      "Gorakhpur",
    ],
  },

  shravasti: {
    pickupPoints: [
      "Shravasti Bus Stand",
      "Bhinga",
      "Ikauna",
      "Sahet-Mahet Archaeological Site",
      "Balrampur Road",
    ],
    serviceAreas: [
      "Shravasti",
      "Bhinga",
      "Ikauna",
      "Balrampur",
      "Bahraich",
      "Gonda",
    ],
  },

  "sant-kabir-nagar": {
    pickupPoints: [
      "Khalilabad Railway Station",
      "Khalilabad Bus Stand",
      "Mehdawal",
      "Dhanghata",
      "Maghar",
    ],
    serviceAreas: [
      "Sant Kabir Nagar",
      "Khalilabad",
      "Maghar",
      "Mehdawal",
      "Dhanghata",
      "Basti",
    ],
  },

  amethi: {
    pickupPoints: [
      "Amethi Railway Station",
      "Amethi Bus Stand",
      "Gauriganj",
      "Musafirkhana",
      "Jais",
    ],
    serviceAreas: [
      "Amethi",
      "Gauriganj",
      "Musafirkhana",
      "Jais",
      "Sultanpur",
      "Pratapgarh",
    ],
  },

  sambhal: {
    pickupPoints: [
      "Sambhal Bus Stand",
      "Sambhal City",
      "Chandausi Railway Station",
      "Hasanpur Road",
      "Moradabad Road",
    ],
    serviceAreas: [
      "Sambhal",
      "Chandausi",
      "Gunnaur",
      "Babrala",
      "Bahjoi",
      "Moradabad",
    ],
  },

  hamirpur: {
    pickupPoints: [
      "Hamirpur Bus Stand",
      "Hamirpur City",
      "Yamuna Bridge Area",
      "Maudaha",
      "Rath Road",
    ],
    serviceAreas: [
      "Hamirpur",
      "Maudaha",
      "Rath",
      "Sumerpur",
      "Muskarā",
      "Orai",
    ],
  },

  chitrakoot: {
    pickupPoints: [
      "Chitrakoot Dham Karwi Railway Station",
      "Karwi Bus Stand",
      "Ramghat",
      "Kamदगिरि Parikrama Area",
      "Gupt Godavari",
    ],
    serviceAreas: [
      "Chitrakoot",
      "Karwi",
      "Rajapur",
      "Manikpur",
      "Banda",
      "Satna",
    ],
  },

  kaushambi: {
    pickupPoints: [
      "Manjhanpur Bus Stand",
      "Bharwari Railway Station",
      "Sirathu Railway Station",
      "Kaushambi Buddhist Site",
      "Manjhanpur Market",
    ],
    serviceAreas: [
      "Kaushambi",
      "Manjhanpur",
      "Sirathu",
      "Bharwari",
      "Chail",
      "Prayagraj",
    ],
  },

  pratapgarh: {
    pickupPoints: [
      "Pratapgarh Junction",
      "Pratapgarh Bus Stand",
      "Bela Pratapgarh",
      "Civil Lines",
      "Lalganj Road",
    ],
    serviceAreas: [
      "Pratapgarh",
      "Lalganj",
      "Kunda",
      "Patti",
      "Raniganj",
      "Sultanpur",
    ],
  },

  lalitpur: {
    pickupPoints: [
      "Lalitpur Railway Station",
      "Lalitpur Bus Stand",
      "Civil Lines",
      "Talbehat Road",
      "Jakhlaun Road",
    ],
    serviceAreas: [
      "Lalitpur",
      "Talbehat",
      "Mehroni",
      "Pali",
      "Jakhaura",
      "Jhansi",
    ],
  },

  dehradun: {
    pickupPoints: [
      "Dehradun Railway Station",
      "Jolly Grant Airport",
      "ISBT Dehradun",
      "Clock Tower",
      "Rajpur Road",
      "Prem Nagar",
    ],
    serviceAreas: [
      "Dehradun",
      "Mussoorie",
      "Rishikesh",
      "Vikasnagar",
      "Doiwala",
      "Haridwar",
    ],
  },

  haldwani: {
    pickupPoints: [
      "Kathgodam Railway Station",
      "Haldwani Railway Station",
      "Haldwani Bus Stand",
      "Mukhani",
      "Nainital Road",
    ],
    serviceAreas: [
      "Haldwani",
      "Kathgodam",
      "Nainital",
      "Bhimtal",
      "Ramnagar",
      "Rudrapur",
    ],
  },

  rudrapur: {
    pickupPoints: [
      "Rudrapur City Railway Station",
      "Rudrapur Bus Stand",
      "Pantnagar Airport",
      "SIDCUL Industrial Area",
      "Kichha Road",
    ],
    serviceAreas: [
      "Rudrapur",
      "Pantnagar",
      "Kichha",
      "Kashipur",
      "Sitarganj",
      "Haldwani",
    ],
  },

  pithoragarh: {
    pickupPoints: [
      "Pithoragarh Bus Stand",
      "Pithoragarh City",
      "Siltham",
      "Aincholi",
      "Jhulaghat Road",
    ],
    serviceAreas: [
      "Pithoragarh",
      "Didihat",
      "Berinag",
      "Gangolihat",
      "Dharchula",
      "Lohaghat",
    ],
  },

  "tehri-garhwal": {
    pickupPoints: [
      "New Tehri Bus Stand",
      "New Tehri Market",
      "Chamba",
      "Tehri Lake Area",
      "Narendranagar",
    ],
    serviceAreas: [
      "New Tehri",
      "Old Tehri Region",
      "Chamba",
      "Devprayag",
      "Narendranagar",
      "Dhanaulti",
    ],
  },

  uttarkashi: {
    pickupPoints: [
      "Uttarkashi Bus Stand",
      "Uttarkashi Market",
      "Joshiyara",
      "Maneri",
      "Gangotri Route",
    ],
    serviceAreas: [
      "Uttarkashi",
      "Dharali",
      "Harsil",
      "Bhatwari",
      "Dunda",
      "Barkot",
    ],
  },

  chamoli: {
    pickupPoints: [
      "Gopeshwar Bus Stand",
      "Chamoli Market",
      "Karnaprayag",
      "Joshimath",
      "Nandprayag",
    ],
    serviceAreas: [
      "Chamoli",
      "Gopeshwar",
      "Joshimath",
      "Karnaprayag",
      "Badrinath",
      "Auli",
    ],
  },

  champawat: {
    pickupPoints: [
      "Champawat Bus Stand",
      "Champawat Market",
      "Lohaghat",
      "Tanakpur Railway Station",
      "Banbasa",
    ],
    serviceAreas: [
      "Champawat",
      "Lohaghat",
      "Tanakpur",
      "Banbasa",
      "Pati",
      "Pithoragarh",
    ],
  },

  "pauri-garhwal": {
    pickupPoints: [
      "Pauri Bus Stand",
      "Pauri Market",
      "Srinagar Garhwal",
      "Kotdwar Railway Station",
      "Satpuli",
    ],
    serviceAreas: [
      "Pauri",
      "Srinagar Garhwal",
      "Kotdwar",
      "Lansdowne",
      "Srinagar",
      "Devprayag",
    ],
  },

  rudraprayag: {
    pickupPoints: [
      "Rudraprayag Bus Stand",
      "Rudraprayag Market",
      "Augustmuni",
      "Guptkashi",
      "Ukhimath",
    ],
    serviceAreas: [
      "Rudraprayag",
      "Augustmuni",
      "Guptkashi",
      "Ukhimath",
      "Sonprayag",
      "Kedarnath Route",
    ],
  },

  durgapur: {
    pickupPoints: [
      "Durgapur Railway Station",
      "Durgapur City Centre",
      "Durgapur Bus Stand",
      "Muchipara",
      "Bidhannagar",
    ],
    serviceAreas: [
      "Durgapur",
      "Andal",
      "Panagarh",
      "Raniganj",
      "Asansol",
      "Burdwan",
    ],
  },

  asansol: {
    pickupPoints: [
      "Asansol Junction",
      "Asansol Bus Stand",
      "Burnpur",
      "Court More",
      "Ushagram",
    ],
    serviceAreas: [
      "Asansol",
      "Burnpur",
      "Kulti",
      "Barakar",
      "Raniganj",
      "Durgapur",
    ],
  },

  siliguri: {
    pickupPoints: [
      "New Jalpaiguri Railway Station",
      "Bagdogra Airport",
      "Siliguri Junction",
      "Tenzing Norgay Bus Terminus",
      "Sevoke Road",
    ],
    serviceAreas: [
      "Siliguri",
      "Darjeeling",
      "Kurseong",
      "Mirik",
      "Kalimpong",
      "Dooars",
    ],
  },

  malda: {
    pickupPoints: [
      "Malda Town Railway Station",
      "Malda Bus Stand",
      "English Bazar",
      "Gour",
      "Rathbari",
    ],
    serviceAreas: [
      "Malda",
      "English Bazar",
      "Old Malda",
      "Gazole",
      "Chanchal",
      "Raiganj",
    ],
  },

  baharampur: {
    pickupPoints: [
      "Berhampore Court Railway Station",
      "Berhampore Bus Stand",
      "Khagra",
      "Lalbagh",
      "Berhampore Court Area",
    ],
    serviceAreas: [
      "Baharampur",
      "Murshidabad",
      "Lalbagh",
      "Jiaganj",
      "Kandi",
      "Jangipur",
    ],
  },

  krishnanagar: {
    pickupPoints: [
      "Krishnanagar City Junction",
      "Krishnanagar Bus Stand",
      "Ghurni",
      "Church Road",
      "Nabadwip Road",
    ],
    serviceAreas: [
      "Krishnanagar",
      "Nabadwip",
      "Ranaghat",
      "Shantipur",
      "Chapra",
      "Tehatta",
    ],
  },

  raiganj: {
    pickupPoints: [
      "Raiganj Railway Station",
      "Raiganj Bus Stand",
      "Mohanbati",
      "Ukilpara",
      "Karnajora",
    ],
    serviceAreas: [
      "Raiganj",
      "Kaliaganj",
      "Islampur",
      "Dalkhola",
      "Hemtabad",
      "Malda",
    ],
  },

  balurghat: {
    pickupPoints: [
      "Balurghat Railway Station",
      "Balurghat Bus Stand",
      "Balurghat Market",
      "Tapan Road",
      "Gangarampur Road",
    ],
    serviceAreas: [
      "Balurghat",
      "Gangarampur",
      "Tapan",
      "Kushmandi",
      "Buniadpur",
      "Hili",
    ],
  },

  midnapore: {
    pickupPoints: [
      "Midnapore Railway Station",
      "Midnapore Bus Stand",
      "College Square",
      "Keranitola",
      "Abasgarh",
    ],
    serviceAreas: [
      "Midnapore",
      "Kharagpur",
      "Garbeta",
      "Ghatal",
      "Jhargram",
      "Debra",
    ],
  },

  bankura: {
    pickupPoints: [
      "Bankura Railway Station",
      "Bankura Bus Stand",
      "Machantala",
      "College More",
      "Bishnupur Road",
    ],
    serviceAreas: [
      "Bankura",
      "Bishnupur",
      "Sonamukhi",
      "Khatra",
      "Onda",
      "Durgapur",
    ],
  },

  purulia: {
    pickupPoints: [
      "Purulia Junction",
      "Purulia Bus Stand",
      "Ranchi Road",
      "Station Road",
      "Manbazar Road",
    ],
    serviceAreas: [
      "Purulia",
      "Adra",
      "Raghunathpur",
      "Jhalda",
      "Balarampur",
      "Ajodhya Hills",
    ],
  },

  birbhum: {
    pickupPoints: [
      "Suri Bus Stand",
      "Bolpur Shantiniketan Railway Station",
      "Rampurhat Railway Station",
      "Suri Market",
      "Bolpur",
    ],
    serviceAreas: [
      "Birbhum",
      "Suri",
      "Bolpur",
      "Shantiniketan",
      "Rampurhat",
      "Sainthia",
    ],
  },

  nadia: {
    pickupPoints: [
      "Krishnanagar City Junction",
      "Ranaghat Junction",
      "Nabadwip Dham Railway Station",
      "Kalyani Railway Station",
      "Shantipur Railway Station",
    ],
    serviceAreas: [
      "Nadia",
      "Krishnanagar",
      "Ranaghat",
      "Nabadwip",
      "Kalyani",
      "Shantipur",
    ],
  },

  hooghly: {
    pickupPoints: [
      "Chinsurah Railway Station",
      "Bandel Junction",
      "Serampore Railway Station",
      "Uttarpara Railway Station",
      "Chandannagar",
    ],
    serviceAreas: [
      "Hooghly",
      "Chinsurah",
      "Bandel",
      "Serampore",
      "Chandannagar",
      "Arambagh",
    ],
  },

  bardhaman: {
    pickupPoints: [
      "Bardhaman Junction",
      "Bardhaman Bus Stand",
      "Curzon Gate",
      "Golapbag",
      "Uday Pally",
    ],
    serviceAreas: [
      "Bardhaman",
      "Memari",
      "Kalna",
      "Katwa",
      "Guskara",
      "Durgapur",
    ],
  },

  "paschim-medininipur": {
    pickupPoints: [
      "Midnapore Railway Station",
      "Kharagpur Junction",
      "Kharagpur Bus Stand",
      "Midnapore Bus Stand",
      "Jhargram Railway Station",
    ],
    serviceAreas: [
      "Paschim Medinipur",
      "Midnapore",
      "Kharagpur",
      "Ghatal",
      "Garbeta",
      "Jhargram",
    ],
  },

  "purba-medinipur": {
    pickupPoints: [
      "Tamluk Railway Station",
      "Tamluk Bus Stand",
      "Digha Railway Station",
      "Haldia Bus Stand",
      "Contai",
    ],
    serviceAreas: [
      "Purba Medinipur",
      "Tamluk",
      "Haldia",
      "Digha",
      "Contai",
      "Mandarmani",
    ],
  },

  "north-24-parganas": {
    pickupPoints: [
      "Barasat Railway Station",
      "Barrackpore Railway Station",
      "Dum Dum Junction",
      "New Town",
      "Madhyamgram",
      "Bongaon Railway Station",
    ],
    serviceAreas: [
      "North 24 Parganas",
      "Barasat",
      "Barrackpore",
      "Madhyamgram",
      "New Town",
      "Bongaon",
      "Kolkata",
    ],
  },
  "south-24-parganas": {
    pickupPoints: [
      "Baruipur Railway Station",
      "Sonarpur Railway Station",
      "Diamond Harbour",
      "Kakdwip Bus Stand",
    ],
    serviceAreas: ["Baruipur", "Sonarpur", "Diamond Harbour", "Kakdwip"],
  },
  "kolkata-coastal-hub": {
    pickupPoints: [
      "Howrah Railway Station",
      "Sealdah Railway Station",
      "Esplanade",
      "Kolkata Airport",
    ],
    serviceAreas: [
      "Kolkata",
      "Howrah",
      "South 24 Parganas",
      "North 24 Parganas",
    ],
  },
  "kolkata-municipal-corporation-area": {
    pickupPoints: [
      "Howrah Bridge Area",
      "Park Street",
      "Esplanade",
      "Sealdah Station",
    ],
    serviceAreas: ["Park Street", "Salt Lake", "New Town", "Alipore"],
  },
  "kolkata-metro-core": {
    pickupPoints: [
      "Esplanade Metro Station",
      "Park Street Metro Station",
      "Kalighat Metro Station",
      "Howrah Metro Station",
    ],
    serviceAreas: ["Esplanade", "Park Street", "Kalighat", "Central Kolkata"],
  },
  panipat: {
    pickupPoints: [
      "Panipat Junction",
      "Panipat Bus Stand",
      "Model Town",
      "GT Road",
    ],
    serviceAreas: ["Panipat City", "Samalkha", "Israna", "Madlauda"],
  },
  karnal: {
    pickupPoints: [
      "Karnal Railway Station",
      "Karnal Bus Stand",
      "Sector 12",
      "Kunjpura Road",
    ],
    serviceAreas: ["Karnal City", "Gharaunda", "Indri", "Assandh"],
  },
  hisar: {
    pickupPoints: [
      "Hisar Junction",
      "Hisar Bus Stand",
      "PLA Shopping Complex",
      "Delhi Road",
    ],
    serviceAreas: ["Hisar City", "Hansi", "Barwala", "Adampur"],
  },
  sonipat: {
    pickupPoints: [
      "Sonipat Railway Station",
      "Sonipat Bus Stand",
      "Murthal",
      "Kundli",
    ],
    serviceAreas: ["Sonipat City", "Murthal", "Ganaur", "Kundli"],
  },
  panchkula: {
    pickupPoints: [
      "Panchkula Bus Stand",
      "Sector 5",
      "Mansa Devi Temple",
      "Panchkula Railway Station",
    ],
    serviceAreas: ["Panchkula", "Pinjore", "Kalka", "Raipur Rani"],
  },
  rewari: {
    pickupPoints: [
      "Rewari Junction",
      "Rewari Bus Stand",
      "Model Town",
      "Dharuhera",
    ],
    serviceAreas: ["Rewari City", "Dharuhera", "Bawal", "Kosli"],
  },
  bhiwani: {
    pickupPoints: [
      "Bhiwani Junction",
      "Bhiwani Bus Stand",
      "Hansi Gate",
      "Loharu Road",
    ],
    serviceAreas: ["Bhiwani City", "Loharu", "Tosham", "Siwani"],
  },
  jind: {
    pickupPoints: [
      "Jind Junction",
      "Jind Bus Stand",
      "Safidon Road",
      "Rohtak Road",
    ],
    serviceAreas: ["Jind City", "Safidon", "Narwana", "Uchana"],
  },
  kaithal: {
    pickupPoints: [
      "Kaithal Bus Stand",
      "Kaithal Railway Station",
      "Cheeka Road",
      "Ambala Road",
    ],
    serviceAreas: ["Kaithal City", "Cheeka", "Kalayat", "Pundri"],
  },
  kurukshetra: {
    pickupPoints: [
      "Kurukshetra Junction",
      "Pipli Bus Stand",
      "Brahma Sarovar",
      "Jyotisar",
    ],
    serviceAreas: ["Thanesar", "Pipli", "Shahabad", "Pehowa"],
  },
  fatehabad: {
    pickupPoints: [
      "Fatehabad Bus Stand",
      "Bhuna Road",
      "Tohana Road",
      "Ratia Road",
    ],
    serviceAreas: ["Fatehabad City", "Tohana", "Ratia", "Bhuna"],
  },
  sirsa: {
    pickupPoints: [
      "Sirsa Railway Station",
      "Sirsa Bus Stand",
      "Hisar Road",
      "Dabwali Road",
    ],
    serviceAreas: ["Sirsa City", "Dabwali", "Ellenabad", "Rania"],
  },
  narnaul: {
    pickupPoints: [
      "Narnaul Railway Station",
      "Narnaul Bus Stand",
      "Mahendragarh Road",
      "Dhosi Hill Road",
    ],
    serviceAreas: ["Narnaul", "Ateli", "Mahendragarh", "Nizampur"],
  },
  palwal: {
    pickupPoints: [
      "Palwal Railway Station",
      "Palwal Bus Stand",
      "Agra Road",
      "Hodal Road",
    ],
    serviceAreas: ["Palwal City", "Hodal", "Hathin", "Prithla"],
  },
  mahendragarh: {
    pickupPoints: [
      "Mahendragarh Railway Station",
      "Mahendragarh Bus Stand",
      "Narnaul Road",
      "Kanina Road",
    ],
    serviceAreas: ["Mahendragarh", "Kanina", "Ateli", "Nangal Choudhary"],
  },
  "charkhi-dadri": {
    pickupPoints: [
      "Charkhi Dadri Railway Station",
      "Charkhi Dadri Bus Stand",
      "Loharu Road",
      "Bhiwani Road",
    ],
    serviceAreas: ["Charkhi Dadri", "Badhra", "Baund Kalan", "Jhojhu Kalan"],
  },
  hoshiarpur: {
    pickupPoints: [
      "Hoshiarpur Bus Stand",
      "Hoshiarpur Railway Station",
      "Model Town",
      "Dasuya Road",
    ],
    serviceAreas: ["Hoshiarpur", "Dasuya", "Mukerian", "Garhshankar"],
  },
  moga: {
    pickupPoints: [
      "Moga Bus Stand",
      "Moga Railway Station",
      "GT Road",
      "Ferozepur Road",
    ],
    serviceAreas: ["Moga", "Bagha Purana", "Nihal Singh Wala", "Dharamkot"],
  },
  kapurthala: {
    pickupPoints: [
      "Kapurthala Bus Stand",
      "Kapurthala Railway Station",
      "Sultanpur Lodhi",
      "Jalandhar Road",
    ],
    serviceAreas: ["Kapurthala", "Sultanpur Lodhi", "Phagwara", "Bhulath"],
  },
  ferozepur: {
    pickupPoints: [
      "Ferozepur Cantt Railway Station",
      "Ferozepur City Bus Stand",
      "Mall Road",
      "Makhu Road",
    ],
    serviceAreas: ["Ferozepur", "Zira", "Makhu", "Guru Har Sahai"],
  },
  barnala: {
    pickupPoints: [
      "Barnala Railway Station",
      "Barnala Bus Stand",
      "Handiaya Road",
      "Tapa Road",
    ],
    serviceAreas: ["Barnala", "Tapa", "Dhanaula", "Handiaya"],
  },
  mansa: {
    pickupPoints: [
      "Mansa Railway Station",
      "Mansa Bus Stand",
      "Budhlada Road",
      "Sirsa Road",
    ],
    serviceAreas: ["Mansa", "Budhlada", "Sardulgarh", "Bareta"],
  },
  fazilka: {
    pickupPoints: [
      "Fazilka Railway Station",
      "Fazilka Bus Stand",
      "Abohar Road",
      "Jalalabad Road",
    ],
    serviceAreas: ["Fazilka", "Abohar", "Jalalabad", "Arniwala"],
  },
  "tarn-taran": {
    pickupPoints: [
      "Tarn Taran Railway Station",
      "Tarn Taran Bus Stand",
      "Darbar Sahib",
      "Amritsar Road",
    ],
    serviceAreas: ["Tarn Taran", "Patti", "Khem Karan", "Goindwal Sahib"],
  },
  nawanshahr: {
    pickupPoints: [
      "Nawanshahr Railway Station",
      "Nawanshahr Bus Stand",
      "Banga Road",
      "Rahon Road",
    ],
    serviceAreas: ["Nawanshahr", "Banga", "Rahon", "Balachaur"],
  },
  rupnagar: {
    pickupPoints: [
      "Rupnagar Railway Station",
      "Rupnagar Bus Stand",
      "Anandpur Sahib Road",
      "Kiratpur Sahib",
    ],
    serviceAreas: ["Rupnagar", "Anandpur Sahib", "Kiratpur Sahib", "Nangal"],
  },
  muktsar: {
    pickupPoints: [
      "Sri Muktsar Sahib Bus Stand",
      "Muktsar Railway Station",
      "Malout Road",
      "Kotkapura Road",
    ],
    serviceAreas: ["Sri Muktsar Sahib", "Malout", "Gidderbaha", "Lambi"],
  },
  faridkot: {
    pickupPoints: [
      "Faridkot Railway Station",
      "Faridkot Bus Stand",
      "Kotkapura Road",
      "Talwandi Road",
    ],
    serviceAreas: ["Faridkot", "Kotkapura", "Jaitu", "Sadiq"],
  },
  gurdaspur: {
    pickupPoints: [
      "Gurdaspur Railway Station",
      "Gurdaspur Bus Stand",
      "Batala Road",
      "Pathankot Road",
    ],
    serviceAreas: ["Gurdaspur", "Batala", "Dinanagar", "Dhariwal"],
  },
  "jalandhar-cantt": {
    pickupPoints: [
      "Jalandhar Cantt Railway Station",
      "Jalandhar Cantt Bus Stand",
      "Rama Mandi",
      "NH 44",
    ],
    serviceAreas: [
      "Jalandhar Cantt",
      "Rama Mandi",
      "Kartarpur",
      "Jalandhar City",
    ],
  },
  "amritsar-cantt": {
    pickupPoints: [
      "Amritsar Cantt Railway Station",
      "Amritsar Junction",
      "Golden Temple",
      "Amritsar Airport",
    ],
    serviceAreas: [
      "Amritsar Cantt",
      "Amritsar City",
      "Rajasansi",
      "Attari Road",
    ],
  },
  etawah: {
    pickupPoints: [
      "Etawah Junction",
      "Etawah Bus Stand",
      "Civil Lines",
      "Agra Road",
    ],
    serviceAreas: ["Etawah", "Jaswantnagar", "Bharthana", "Bakewar"],
  },
  bathinda: {
    pickupPoints: [
      "Bathinda Junction",
      "Bathinda Bus Stand",
      "Civil Lines",
      "Multania Road",
    ],
    serviceAreas: ["Bathinda", "Rampura Phul", "Talwandi Sabo", "Maur"],
  },
  udaipur: {
    pickupPoints: [
      "Udaipur City Railway Station",
      "Udaipur Bus Stand",
      "City Palace",
      "Maharana Pratap Airport",
    ],
    serviceAreas: ["Udaipur City", "Fatehpura", "Hiran Magri", "Nathdwara"],
  },
  salem: {
    pickupPoints: [
      "Salem Junction",
      "Salem New Bus Stand",
      "Salem Old Bus Stand",
      "Salem Airport",
    ],
    serviceAreas: ["Salem", "Attur", "Mettur", "Omalur"],
  },
  jhansi: {
    pickupPoints: [
      "Virangana Lakshmibai Jhansi Junction",
      "Jhansi Bus Stand",
      "Sipri Bazaar",
      "Civil Lines",
    ],
    serviceAreas: ["Jhansi", "Barua Sagar", "Mauranipur", "Chirgaon"],
  },
  mathura: {
    pickupPoints: [
      "Mathura Junction",
      "Mathura Bus Stand",
      "Shri Krishna Janmabhoomi",
      "Vrindavan",
    ],
    serviceAreas: ["Mathura", "Vrindavan", "Govardhan", "Barsana"],
  },
  bikaner: {
    pickupPoints: [
      "Bikaner Junction",
      "Lalgarh Railway Station",
      "Bikaner Bus Stand",
      "Junagarh Fort",
    ],
    serviceAreas: ["Bikaner", "Nokha", "Deshnok", "Lunkaransar"],
  },
  nashik: {
    pickupPoints: [
      "Nashik Road Railway Station",
      "CBS Bus Stand",
      "Panchavati",
      "Nashik Airport",
    ],
    serviceAreas: ["Nashik", "Trimbakeshwar", "Sinnar", "Igatpuri"],
  },
  saharanpur: {
    pickupPoints: [
      "Saharanpur Junction",
      "Saharanpur Bus Stand",
      "Court Road",
      "Dehradun Road",
    ],
    serviceAreas: ["Saharanpur", "Deoband", "Nakur", "Gangoh"],
  },
  gorakhpur: {
    pickupPoints: [
      "Gorakhpur Junction",
      "Gorakhpur Bus Stand",
      "Gorakhpur Airport",
      "Golghar",
    ],
    serviceAreas: ["Gorakhpur", "Sahjanwa", "Pipraich", "Chauri Chaura"],
  },
  muzaffarnagar: {
    pickupPoints: [
      "Muzaffarnagar Railway Station",
      "Muzaffarnagar Bus Stand",
      "Roorkee Road",
      "Bhopa Road",
    ],
    serviceAreas: ["Muzaffarnagar", "Khatauli", "Budhana", "Jansath"],
  },
  mainpuri: {
    pickupPoints: [
      "Mainpuri Railway Station",
      "Mainpuri Bus Stand",
      "Bhogaon Road",
      "Etawah Road",
    ],
    serviceAreas: ["Mainpuri", "Bhogaon", "Karhal", "Kishni"],
  },
  modinagar: {
    pickupPoints: [
      "Modinagar Railway Station",
      "Modinagar Bus Stand",
      "Delhi-Meerut Road",
      "Govindpuri",
    ],
    serviceAreas: ["Modinagar", "Muradnagar", "NiwarI", "Meerut Road"],
  },
  sultanpur: {
    pickupPoints: [
      "Sultanpur Railway Station",
      "Sultanpur Bus Stand",
      "Civil Lines",
      "Amethi Road",
    ],
    serviceAreas: ["Sultanpur", "Kadipur", "Lambhua", "Musafirkhana"],
  },
  banda: {
    pickupPoints: [
      "Banda Railway Station",
      "Banda Bus Stand",
      "Civil Lines",
      "Chitrakoot Road",
    ],
    serviceAreas: ["Banda", "Atarra", "Baberu", "Naraini"],
  },
  pilibhit: {
    pickupPoints: [
      "Pilibhit Junction",
      "Pilibhit Bus Stand",
      "Tanakpur Road",
      "Gandhi Stadium",
    ],
    serviceAreas: ["Pilibhit", "Puranpur", "Bisalpur", "Amaria"],
  },
  hardoi: {
    pickupPoints: [
      "Hardoi Railway Station",
      "Hardoi Bus Stand",
      "Lucknow Road",
      "Shahabad Road",
    ],
    serviceAreas: ["Hardoi", "Shahabad", "Sandila", "Bilgram"],
  },
  hapur: {
    pickupPoints: [
      "Hapur Railway Station",
      "Hapur Bus Stand",
      "Delhi Road",
      "Pilkhuwa",
    ],
    serviceAreas: ["Hapur", "Pilkhuwa", "Garhmukteshwar", "Dhaulana"],
  },
  etaH: {
    pickupPoints: [
      "Etah Railway Station",
      "Etah Bus Stand",
      "Aliganj Road",
      "Kasganj Road",
    ],
    serviceAreas: ["Etah", "Aliganj", "Jalesar", "Awagarh"],
  },
  mirzapur: {
    pickupPoints: [
      "Mirzapur Railway Station",
      "Mirzapur Bus Stand",
      "Vindhyachal Temple",
      "Pakki Sarai",
    ],
    serviceAreas: ["Mirzapur", "Vindhyachal", "Chunar", "Kachhwa"],
  },
  deoria: {
    pickupPoints: [
      "Deoria Sadar Railway Station",
      "Deoria Bus Stand",
      "Gorakhpur Road",
      "Bhatpar Rani Road",
    ],
    serviceAreas: ["Deoria", "Rudrapur", "Salempur", "Bhatpar Rani"],
  },
  gonda: {
    pickupPoints: [
      "Gonda Junction",
      "Gonda Bus Stand",
      "Civil Lines",
      "Lucknow Road",
    ],
    serviceAreas: ["Gonda", "Colonelganj", "Mankapur", "Nawabganj"],
  },
  chandauli: {
    pickupPoints: [
      "Pt. Deen Dayal Upadhyaya Junction",
      "Mughalsarai Bus Stand",
      "Chandauli Sadar",
      "Sakaldiha",
    ],
    serviceAreas: ["Chandauli", "Mughalsarai", "Sakaldiha", "Chakia"],
  },
  ballia: {
    pickupPoints: [
      "Ballia Railway Station",
      "Ballia Bus Stand",
      "Civil Lines",
      "Bansdih Road",
    ],
    serviceAreas: ["Ballia", "Bansdih", "Rasra", "Belthara Road"],
  },
  jaunpur: {
    pickupPoints: [
      "Jaunpur Junction",
      "Jaunpur City Station",
      "Jaunpur Bus Stand",
      "Shahi Bridge",
    ],
    serviceAreas: ["Jaunpur", "Shahganj", "Machhlishahr", "Badlapur"],
  },
  ghazipur: {
    pickupPoints: [
      "Ghazipur City Railway Station",
      "Ghazipur Bus Stand",
      "Lanka Maidan",
      "Zamania Road",
    ],
    serviceAreas: ["Ghazipur", "Zamania", "Mohammadabad", "Saidpur"],
  },
  "ambedkar-nagar": {
    pickupPoints: [
      "Akbarpur Railway Station",
      "Akbarpur Bus Stand",
      "Tanda",
      "Jalalpur Road",
    ],
    serviceAreas: ["Akbarpur", "Tanda", "Jalalpur", "Atraulia"],
  },
  mahoba: {
    pickupPoints: [
      "Mahoba Railway Station",
      "Mahoba Bus Stand",
      "Charkhari Road",
      "Khajuraho Road",
    ],
    serviceAreas: ["Mahoba", "Charkhari", "Kulpahar", "Panwari"],
  },
  kushinagar: {
    pickupPoints: [
      "Kushinagar Buddhist Temple Area",
      "Kasia Bus Stand",
      "Kushinagar Airport",
      "Padrauna",
    ],
    serviceAreas: ["Kushinagar", "Kasia", "Padrauna", "Hata"],
  },
  sonbhadra: {
    pickupPoints: [
      "Robertsganj Bus Stand",
      "Renukoot Railway Station",
      "Anpara",
      "Obra",
    ],
    serviceAreas: ["Robertsganj", "Renukoot", "Obra", "Dudhi"],
  },
  haridwar: {
    pickupPoints: [
      "Haridwar Junction",
      "Har Ki Pauri",
      "Haridwar Bus Stand",
      "Jwalapur",
    ],
    serviceAreas: ["Haridwar", "Rishikesh", "Roorkee", "BHEL Township"],
  },
  kashipur: {
    pickupPoints: [
      "Kashipur Railway Station",
      "Kashipur Bus Stand",
      "Ramnagar Road",
      "Bazpur Road",
    ],
    serviceAreas: ["Kashipur", "Jaspur", "Bazpur", "Rudrapur"],
  },
  almora: {
    pickupPoints: [
      "Almora Bus Stand",
      "Mall Road",
      "Lala Bazaar",
      "Kasar Devi",
    ],
    serviceAreas: ["Almora", "Kasar Devi", "Ranikhet", "Jageshwar"],
  },
  nainital: {
    pickupPoints: [
      "Tallital Bus Stand",
      "Mall Road",
      "Kathgodam Railway Station",
      "Nainital Lake",
    ],
    serviceAreas: ["Nainital", "Bhowali", "Bhimtal", "Naukuchiatal"],
  },
  bageshwar: {
    pickupPoints: [
      "Bageshwar Bus Stand",
      "Bagnath Temple",
      "Garur",
      "Kanda Road",
    ],
    serviceAreas: ["Bageshwar", "Garur", "Kanda", "Kapkot"],
  },
  anantnag: {
    pickupPoints: [
      "Anantnag Railway Station",
      "Anantnag Bus Stand",
      "Lal Chowk",
      "Pahalgam Road",
    ],
    serviceAreas: ["Anantnag", "Pahalgam", "Bijbehara", "Achabal"],
  },
  baramulla: {
    pickupPoints: [
      "Baramulla Railway Station",
      "Baramulla Bus Stand",
      "Old Town",
      "Sopore Road",
    ],
    serviceAreas: ["Baramulla", "Sopore", "Pattan", "Uri"],
  },
  bandipora: {
    pickupPoints: [
      "Bandipora Bus Stand",
      "Bandipora Market",
      "Wular Lake Area",
      "Hajin",
    ],
    serviceAreas: ["Bandipora", "Hajin", "Sumbal", "Gurez"],
  },
  doda: {
    pickupPoints: ["Doda Bus Stand", "Doda Market", "Bhaderwah Road", "Ghat"],
    serviceAreas: ["Doda", "Bhaderwah", "Thathri", "Gandoh"],
  },
  kathua: {
    pickupPoints: [
      "Kathua Railway Station",
      "Kathua Bus Stand",
      "Lakhanpur",
      "Hiranagar",
    ],
    serviceAreas: ["Kathua", "Lakhanpur", "Hiranagar", "Billawar"],
  },
  kishtwar: {
    pickupPoints: [
      "Kishtwar Bus Stand",
      "Kishtwar Market",
      "Paddar Road",
      "Dachhan Road",
    ],
    serviceAreas: ["Kishtwar", "Paddar", "Dachhan", "Chatroo"],
  },
  kulgam: {
    pickupPoints: [
      "Kulgam Bus Stand",
      "Kulgam Market",
      "Qazigund",
      "Damhal Hanjipora",
    ],
    serviceAreas: ["Kulgam", "Qazigund", "Devser", "Damhal Hanjipora"],
  },
  kupwara: {
    pickupPoints: [
      "Kupwara Bus Stand",
      "Kupwara Market",
      "Handwara",
      "Langate",
    ],
    serviceAreas: ["Kupwara", "Handwara", "Langate", "Kralpora"],
  },
  poonch: {
    pickupPoints: ["Poonch Bus Stand", "Poonch Market", "Mendhar", "Surankote"],
    serviceAreas: ["Poonch", "Mendhar", "Surankote", "Mandi"],
  },
  ramban: {
    pickupPoints: ["Ramban Bus Stand", "Ramban Market", "Banihal", "Batote"],
    serviceAreas: ["Ramban", "Banihal", "Batote", "Gool"],
  },
  reasi: {
    pickupPoints: [
      "Reasi Bus Stand",
      "Katra Railway Station",
      "Vaishno Devi Base Camp",
      "Reasi Market",
    ],
    serviceAreas: ["Reasi", "Katra", "Pouni", "Arnas"],
  },
  samba: {
    pickupPoints: [
      "Samba Railway Station",
      "Samba Bus Stand",
      "Vijaypur",
      "National Highway 44",
    ],
    serviceAreas: ["Samba", "Vijaypur", "Ghagwal", "Ramgarh"],
  },
  shopian: {
    pickupPoints: [
      "Shopian Bus Stand",
      "Shopian Market",
      "Zainapora",
      "Imam Sahib",
    ],
    serviceAreas: ["Shopian", "Zainapora", "Hirpora", "Keller"],
  },
  udhampur: {
    pickupPoints: [
      "Udhampur Railway Station",
      "Udhampur Bus Stand",
      "Dhar Road",
      "Chenani",
    ],
    serviceAreas: ["Udhampur", "Chenani", "Ramnagar", "Majalta"],
  },
  leh: {
    pickupPoints: [
      "Leh Airport",
      "Leh Main Market",
      "Leh Bus Stand",
      "Shanti Stupa",
    ],
    serviceAreas: ["Leh", "Shey", "Thiksey", "Nubra Valley"],
  },
  kargil: {
    pickupPoints: [
      "Kargil Bus Stand",
      "Kargil Main Market",
      "Drass",
      "Mulbekh",
    ],
    serviceAreas: ["Kargil", "Drass", "Sankoo", "Mulbekh"],
  },
  bahadurgarh: {
    pickupPoints: [
      "Bahadurgarh Railway Station",
      "Bahadurgarh Bus Stand",
      "Tikri Border",
      "Modern Industrial Estate",
    ],
    serviceAreas: ["Bahadurgarh", "Tikri", "Asaudha", "Jhajjar Road"],
  },
  manesar: {
    pickupPoints: [
      "IMT Manesar",
      "Manesar Bus Stand",
      "NH 48",
      "Bilaspur Chowk",
    ],
    serviceAreas: ["Manesar", "IMT Manesar", "Bilaspur", "Dharuhera"],
  },
  sohna: {
    pickupPoints: [
      "Sohna Bus Stand",
      "Sohna Road",
      "Damdama Lake",
      "Badshahpur Road",
    ],
    serviceAreas: ["Sohna", "Damdama", "Bhondsi", "Gurugram"],
  },
  badshahpur: {
    pickupPoints: [
      "Badshahpur Chowk",
      "Sohna Road",
      "Golf Course Extension Road",
      "Sector 67",
    ],
    serviceAreas: ["Badshahpur", "Sector ня", "Sohna Road", "Gurugram"],
  },

  ahmednagar: {
    pickupPoints: [
      "Ahilyanagar Railway Station",
      "Ahilyanagar Bus Stand",
      "Savedi",
      "MIDC",
    ],
    serviceAreas: ["Ahilyanagar", "Rahuri", "Shrirampur", "Parner"],
  },
  amalner: {
    pickupPoints: [
      "Amalner Railway Station",
      "Amalner Bus Stand",
      "Pratap Nagar",
      "Dharangaon Road",
    ],
    serviceAreas: ["Amalner", "Dharangaon", "Parola", "Chopda"],
  },
  ambajogai: {
    pickupPoints: [
      "Ambajogai Bus Stand",
      "Yogeshwari Temple",
      "Government Hospital Area",
      "Latur Road",
    ],
    serviceAreas: ["Ambajogai", "Kaij", "Parli", "Latur Road"],
  },
  baramati: {
    pickupPoints: [
      "Baramati Railway Station",
      "Baramati Bus Stand",
      "MIDC Baramati",
      "Bhigwan Road",
    ],
    serviceAreas: ["Baramati", "Morgaon", "Indapur", "Bhigwan"],
  },
  bardoli: {
    pickupPoints: [
      "Bardoli Railway Station",
      "Bardoli Bus Stand",
      "Station Road",
      "Sugar Factory Area",
    ],
    serviceAreas: ["Bardoli", "Palsana", "Mahuva", "Mandvi"],
  },
  beed: {
    pickupPoints: [
      "Beed Bus Stand",
      "Beed Collector Office",
      "Jalna Road",
      "Shivaji Nagar",
    ],
    serviceAreas: ["Beed", "Georai", "Patoda", "Ashti"],
  },
  bharatpur: {
    pickupPoints: [
      "Bharatpur Junction",
      "Bharatpur Bus Stand",
      "Lohagarh Fort",
      "Keoladeo National Park",
    ],
    serviceAreas: ["Bharatpur", "Deeg", "Bayana", "Nadbai"],
  },
  bhimavaram: {
    pickupPoints: [
      "Bhimavaram Junction",
      "Bhimavaram Bus Stand",
      "Vishnupur",
      "Undi Road",
    ],
    serviceAreas: ["Bhimavaram", "Palakollu", "Tanuku", "Akividu"],
  },
  bhusawal: {
    pickupPoints: [
      "Bhusawal Junction",
      "Bhusawal Bus Stand",
      "Railway Colony",
      "Jalgaon Road",
    ],
    serviceAreas: ["Bhusawal", "Jalgaon", "Varangaon", "Yawal"],
  },
  bidar: {
    pickupPoints: [
      "Bidar Railway Station",
      "Bidar Bus Stand",
      "Bidar Fort",
      "Udgir Road",
    ],
    serviceAreas: ["Bidar", "Humnabad", "Bhalki", "Aurad"],
  },
  bilaspur: {
    pickupPoints: [
      "Bilaspur Junction",
      "Bilaspur Bus Stand",
      "Vyapar Vihar",
      "Nehru Chowk",
    ],
    serviceAreas: ["Bilaspur", "Ratanpur", "Takhatpur", "Mungeli"],
  },
  buldhana: {
    pickupPoints: [
      "Buldhana Bus Stand",
      "Collector Office",
      "Chikhli Road",
      "Malkapur Road",
    ],
    serviceAreas: ["Buldhana", "Chikhli", "Malkapur", "Khamgaon"],
  },
  chalisgaon: {
    pickupPoints: [
      "Chalisgaon Railway Station",
      "Chalisgaon Bus Stand",
      "Dhule Road",
      "Pachora Road",
    ],
    serviceAreas: ["Chalisgaon", "Pachora", "Kannad", "Bhadgaon"],
  },
  chandrapur: {
    pickupPoints: [
      "Chandrapur Railway Station",
      "Chandrapur Bus Stand",
      "Ballarpur Road",
      "Tadoba Gate",
    ],
    serviceAreas: ["Chandrapur", "Ballarpur", "Bhadrawati", "Warora"],
  },
  chiplun: {
    pickupPoints: [
      "Chiplun Railway Station",
      "Chiplun Bus Stand",
      "Bahadur Shaikh Naka",
      "Mumbai-Goa Highway",
    ],
    serviceAreas: ["Chiplun", "Guhagar", "Dapoli", "Khed"],
  },
  dahod: {
    pickupPoints: [
      "Dahod Railway Station",
      "Dahod Bus Stand",
      "Station Road",
      "Godhra Road",
    ],
    serviceAreas: ["Dahod", "Jhalod", "Devgadh Baria", "Limkheda"],
  },
  daund: {
    pickupPoints: [
      "Daund Junction",
      "Daund Bus Stand",
      "Patas Road",
      "Kurkumbh MIDC",
    ],
    serviceAreas: ["Daund", "Patas", "Kurkumbh", "Yawat"],
  },
  dharmapuri: {
    pickupPoints: [
      "Dharmapuri Railway Station",
      "Dharmapuri Bus Stand",
      "Salem Road",
      "Hogenakkal Road",
    ],
    serviceAreas: ["Dharmapuri", "Harur", "Palacode", "Pennagaram"],
  },
  eluru: {
    pickupPoints: [
      "Eluru Railway Station",
      "Eluru Bus Stand",
      "Powerpet",
      "Sanivarapupeta",
    ],
    serviceAreas: ["Eluru", "Denduluru", "Kaikalur", "Nuzvid"],
  },
  firozabad: {
    pickupPoints: [
      "Firozabad Railway Station",
      "Firozabad Bus Stand",
      "Suhag Nagar",
      "Tundla Junction",
    ],
    serviceAreas: ["Firozabad", "Tundla", "Shikohabad", "Jasrana"],
  },
  gadhinglaj: {
    pickupPoints: [
      "Gadhinglaj Bus Stand",
      "Market Yard",
      "Nesari Road",
      "Ajara Road",
    ],
    serviceAreas: ["Gadhinglaj", "Ajara", "Chandgad", "Nesari"],
  },
  gadwal: {
    pickupPoints: [
      "Gadwal Railway Station",
      "Gadwal Bus Stand",
      "Gadwal Fort",
      "Kurnool Road",
    ],
    serviceAreas: ["Gadwal", "Alampur", "Ieeja", "Waddepally"],
  },
  gandhidham: {
    pickupPoints: [
      "Gandhidham Junction",
      "Gandhidham Bus Stand",
      "Adipur",
      "Kandla Port Road",
    ],
    serviceAreas: ["Gandhidham", "Adipur", "Anjar", "Kandla"],
  },
  gaya: {
    pickupPoints: [
      "Gaya Junction",
      "Gaya Bus Stand",
      "Gaya Airport",
      "Vishnupad Temple",
    ],
    serviceAreas: ["Gaya", "Bodh Gaya", "Manpur", "Dobhi"],
  },
  gondia: {
    pickupPoints: [
      "Gondia Junction",
      "Gondia Bus Stand",
      "Civil Lines",
      "Tirora Road",
    ],
    serviceAreas: ["Gondia", "Tirora", "Tumsar", "Amgaon"],
  },
  hajipur: {
    pickupPoints: [
      "Hajipur Junction",
      "Hajipur Bus Stand",
      "Ramashish Chowk",
      "Gandhi Setu",
    ],
    serviceAreas: ["Hajipur", "Sonpur", "Mahnar", "Lalganj"],
  },
  hingoli: {
    pickupPoints: [
      "Hingoli Railway Station",
      "Hingoli Bus Stand",
      "Vasmath Road",
      "Aundha Nagnath",
    ],
    serviceAreas: ["Hingoli", "Vasmath", "Kalamnuri", "Aundha Nagnath"],
  },
  hoshangabad: {
    pickupPoints: [
      "Narmadapuram Railway Station",
      "Narmadapuram Bus Stand",
      "Sethani Ghat",
      "Itarsi Junction",
    ],
    serviceAreas: ["Narmadapuram", "Itarsi", "Babai", "Pipariya"],
  },
  hosur: {
    pickupPoints: [
      "Hosur Railway Station",
      "Hosur Bus Stand",
      "Hosur Industrial Area",
      "Bagalur Road",
    ],
    serviceAreas: ["Hosur", "Bagalur", "Kelamangalam", "Denkanikottai"],
  },
  ichalkaranji: {
    pickupPoints: [
      "Ichalkaranji Bus Stand",
      "Shahapur",
      "Textile Market",
      "Kolhapur Road",
    ],
    serviceAreas: ["Ichalkaranji", "Hatkanangale", "Jaysingpur", "Kolhapur"],
  },
  indapur: {
    pickupPoints: [
      "Indapur Bus Stand",
      "Pune-Solapur Highway",
      "Market Yard",
      "Bhigwan Road",
    ],
    serviceAreas: ["Indapur", "Bhigwan", "Akluj", "Baramati"],
  },
  islampur: {
    pickupPoints: [
      "Islampur Bus Stand",
      "Uran Islampur Market",
      "Sangli Road",
      "Peth Road",
    ],
    serviceAreas: ["Islampur", "Walwa", "Peth", "Ashta"],
  },
  jalna: {
    pickupPoints: [
      "Jalna Railway Station",
      "Jalna Bus Stand",
      "MIDC Jalna",
      "Ambad Road",
    ],
    serviceAreas: ["Jalna", "Ambad", "Partur", "Bhokardan"],
  },
  jharsuguda: {
    pickupPoints: [
      "Jharsuguda Junction",
      "Veer Surendra Sai Airport",
      "Jharsuguda Bus Stand",
      "Beheramal",
    ],
    serviceAreas: ["Jharsuguda", "Brajarajnagar", "Belpahar", "Laikera"],
  },
  junagadh: {
    pickupPoints: [
      "Junagadh Junction",
      "Junagadh Bus Stand",
      "Girnar Taleti",
      "Majevadi Gate",
    ],
    serviceAreas: ["Junagadh", "Keshod", "Mangrol", "Vanthali"],
  },
  kachchh: {
    pickupPoints: [
      "Bhuj Railway Station",
      "Bhuj Airport",
      "Gandhidham Junction",
      "Anjar Bus Stand",
    ],
    serviceAreas: ["Bhuj", "Anjar", "Mandvi", "Gandhidham"],
  },
  kadi: {
    pickupPoints: [
      "Kadi Railway Station",
      "Kadi Bus Stand",
      "Mehsana Road",
      "Kadi GIDC",
    ],
    serviceAreas: ["Kadi", "Kalol", "Mehsana", "Detroj"],
  },
  kagal: {
    pickupPoints: [
      "Kagal Bus Stand",
      "Kagal MIDC",
      "Kolhapur Road",
      "Gokul Shirgaon",
    ],
    serviceAreas: ["Kagal", "Kolhapur", "Gadhinglaj", "Nipani"],
  },
  kalol: {
    pickupPoints: [
      "Kalol Railway Station",
      "Kalol Bus Stand",
      "Kalol GIDC",
      "Ahmedabad-Mehsana Highway",
    ],
    serviceAreas: ["Kalol", "Chhatral", "Kadi", "Gandhinagar"],
  },
  kamareddy: {
    pickupPoints: [
      "Kamareddy Railway Station",
      "Kamareddy Bus Stand",
      "NH 44",
      "Banswada Road",
    ],
    serviceAreas: ["Kamareddy", "Banswada", "Yellareddy", "Bichkunda"],
  },
  karad: {
    pickupPoints: [
      "Karad Railway Station",
      "Karad Bus Stand",
      "Malkapur",
      "Pune-Bengaluru Highway",
    ],
    serviceAreas: ["Karad", "Patan", "Umbraj", "Masur"],
  },
  karwar: {
    pickupPoints: [
      "Karwar Railway Station",
      "Karwar Bus Stand",
      "Karwar Beach",
      "INS Kadamba Road",
    ],
    serviceAreas: ["Karwar", "Ankola", "Kumta", "Sadashivgad"],
  },
  khamgaon: {
    pickupPoints: [
      "Khamgaon Railway Station",
      "Khamgaon Bus Stand",
      "Jalamb Junction",
      "Nandura Road",
    ],
    serviceAreas: ["Khamgaon", "Nandura", "Shegaon", "Buldhana"],
  },
  khammam: {
    pickupPoints: [
      "Khammam Railway Station",
      "Khammam Bus Stand",
      "Wyra Road",
      "Mamillagudem",
    ],
    serviceAreas: ["Khammam", "Wyra", "Madhira", "Kallur"],
  },
  kharar: {
    pickupPoints: [
      "Kharar Bus Stand",
      "Kharar Railway Station",
      "Landran Road",
      "Sunny Enclave",
    ],
    serviceAreas: ["Kharar", "Landran", "Kurali", "Mohali"],
  },
  kopargaon: {
    pickupPoints: [
      "Kopargaon Railway Station",
      "Kopargaon Bus Stand",
      "Shirdi Road",
      "Yeola Road",
    ],
    serviceAreas: ["Kopargaon", "Shirdi", "Rahata", "Yeola"],
  },
  machilipatnam: {
    pickupPoints: [
      "Machilipatnam Railway Station",
      "Machilipatnam Bus Stand",
      "Beach Road",
      "Koneru Center",
    ],
    serviceAreas: ["Machilipatnam", "Gudivada", "Pedana", "Avanigadda"],
  },
  mahabubnagar: {
    pickupPoints: [
      "Mahabubnagar Railway Station",
      "Mahabubnagar Bus Stand",
      "Clock Tower",
      "Bhoothpur Road",
    ],
    serviceAreas: ["Mahabubnagar", "Jadcherla", "Devarkadra", "Bhoothpur"],
  },
  mahad: {
    pickupPoints: [
      "Mahad Bus Stand",
      "Mahad Market",
      "Mumbai-Goa Highway",
      "Raigad Fort Road",
    ],
    serviceAreas: ["Mahad", "Poladpur", "Mangaon", "Shrivardhan"],
  },
  malvan: {
    pickupPoints: [
      "Malvan Bus Stand",
      "Malvan Beach",
      "Sindhudurg Fort Jetty",
      "Tarkarli",
    ],
    serviceAreas: ["Malvan", "Tarkarli", "Devbag", "Kudal"],
  },
  mehsana: {
    pickupPoints: [
      "Mehsana Railway Station",
      "Mehsana Bus Stand",
      "Modhera Road",
      "Radhanpur Road",
    ],
    serviceAreas: ["Mehsana", "Unjha", "Visnagar", "Kadi"],
  },
  modasa: {
    pickupPoints: [
      "Modasa Bus Stand",
      "Modasa Market",
      "Shamlaji Road",
      "Malpur Road",
    ],
    serviceAreas: ["Modasa", "Malpur", "Bayad", "Dhansura"],
  },
  nadiad: {
    pickupPoints: [
      "Nadiad Junction",
      "Nadiad Bus Stand",
      "Santram Mandir",
      "College Road",
    ],
    serviceAreas: ["Nadiad", "Anand", "Petlad", "Mahemdavad"],
  },
  nalgonda: {
    pickupPoints: [
      "Nalgonda Railway Station",
      "Nalgonda Bus Stand",
      "Clock Tower",
      "Miryalaguda Road",
    ],
    serviceAreas: ["Nalgonda", "Miryalaguda", "Devarakonda", "Nakrekal"],
  },
  nandyal: {
    pickupPoints: [
      "Nandyal Railway Station",
      "Nandyal Bus Stand",
      "Srinivasa Centre",
      "Kurnool Road",
    ],
    serviceAreas: ["Nandyal", "Dhone", "Allagadda", "Banaganapalle"],
  },
  narsipatnam: {
    pickupPoints: [
      "Narsipatnam Bus Stand",
      "Narsipatnam Market",
      "Anakapalle Road",
      "Chintapalli Road",
    ],
    serviceAreas: ["Narsipatnam", "Anakapalle", "Chintapalli", "Yelamanchili"],
  },
  nilanga: {
    pickupPoints: [
      "Nilanga Bus Stand",
      "Nilanga Market",
      "Latur Road",
      "Udgir Road",
    ],
    serviceAreas: ["Nilanga", "Ausa", "Udgir", "Latur"],
  },
  omerga: {
    pickupPoints: [
      "Omerga Bus Stand",
      "Omerga Market",
      "Solapur Road",
      "Tuljapur Road",
    ],
    serviceAreas: ["Omerga", "Tuljapur", "Lohara", "Dharashiv"],
  },
  ongole: {
    pickupPoints: [
      "Ongole Railway Station",
      "Ongole Bus Stand",
      "Gandhi Road",
      "Ongole Bypass",
    ],
    serviceAreas: ["Ongole", "Chirala", "Addanki", "Kandukur"],
  },
  osmanabad: {
    pickupPoints: [
      "Dharashiv Railway Station",
      "Dharashiv Bus Stand",
      "Tuljapur Road",
      "Kalamb Road",
    ],
    serviceAreas: ["Dharashiv", "Tuljapur", "Kalamb", "Paranda"],
  },
  ozar: {
    pickupPoints: [
      "Ozar Bus Stand",
      "Ozar MIDC",
      "Nashik Airport",
      "Mumbai-Agra Highway",
    ],
    serviceAreas: ["Ozar", "Niphad", "Pimpalgaon Baswant", "Nashik"],
  },
  pachora: {
    pickupPoints: [
      "Pachora Railway Station",
      "Pachora Bus Stand",
      "Jalgaon Road",
      "Bhadgaon Road",
    ],
    serviceAreas: ["Pachora", "Bhadgaon", "Chalisgaon", "Jamner"],
  },
  palghar: {
    pickupPoints: [
      "Palghar Railway Station",
      "Palghar Bus Stand",
      "Boisar Railway Station",
      "Mahim Road",
    ],
    serviceAreas: ["Palghar", "Boisar", "Tarapur", "Dahanu"],
  },
  pandharpur: {
    pickupPoints: [
      "Pandharpur Railway Station",
      "Pandharpur Bus Stand",
      "Vitthal Temple",
      "Chandrabhaga River",
    ],
    serviceAreas: ["Pandharpur", "Mangalwedha", "Sangola", "Malshiras"],
  },
  parbhani: {
    pickupPoints: [
      "Parbhani Junction",
      "Parbhani Bus Stand",
      "Vasmat Road",
      "Jintur Road",
    ],
    serviceAreas: ["Parbhani", "Jintur", "Gangakhed", "Pathri"],
  },
  phaltan: {
    pickupPoints: [
      "Phaltan Bus Stand",
      "Phaltan Market",
      "Baramati Road",
      "Lonand Road",
    ],
    serviceAreas: ["Phaltan", "Lonand", "Khandala", "Baramati"],
  },
  pimpalgaon: {
    pickupPoints: [
      "Pimpalgaon Baswant Bus Stand",
      "Pimpalgaon Market",
      "Nashik Road",
      "Mumbai-Agra Highway",
    ],
    serviceAreas: ["Pimpalgaon Baswant", "Ozar", "Niphad", "Nashik"],
  },
  raigad: {
    pickupPoints: [
      "Alibag Bus Stand",
      "Pen Railway Station",
      "Panvel Railway Station",
      "Mangaon Bus Stand",
    ],
    serviceAreas: ["Alibag", "Pen", "Panvel", "Mangaon"],
  },
  raigarh: {
    pickupPoints: [
      "Raigarh Railway Station",
      "Raigarh Bus Stand",
      "Chakradhar Nagar",
      "Jindal Road",
    ],
    serviceAreas: ["Raigarh", "Kharsia", "Sarangarh", "Gharghoda"],
  },
  ratnagiri: {
    pickupPoints: [
      "Ratnagiri Railway Station",
      "Ratnagiri Bus Stand",
      "Thiba Palace",
      "Ganpatipule Road",
    ],
    serviceAreas: ["Ratnagiri", "Ganpatipule", "Pawas", "Lanja"],
  },
  roorkee: {
    pickupPoints: [
      "Roorkee Railway Station",
      "Roorkee Bus Stand",
      "IIT Roorkee",
      "Civil Lines",
    ],
    serviceAreas: ["Roorkee", "Manglaur", "Bhagwanpur", "Laksar"],
  },
  rohtak: {
    pickupPoints: [
      "Rohtak Junction",
      "Rohtak Bus Stand",
      "PGIMS Rohtak",
      "Delhi Road",
    ],
    serviceAreas: ["Rohtak", "Sampla", "Meham", "Kalanaur"],
  },
  ropar: {
    pickupPoints: [
      "Rupnagar Railway Station",
      "Rupnagar Bus Stand",
      "Ropar Headworks",
      "Anandpur Sahib Road",
    ],
    serviceAreas: ["Rupnagar", "Anandpur Sahib", "Nangal", "Kiratpur Sahib"],
  },
  sabarkantha: {
    pickupPoints: [
      "Himmatnagar Railway Station",
      "Himmatnagar Bus Stand",
      "Modasa Road",
      "Idar Road",
    ],
    serviceAreas: ["Himmatnagar", "Idar", "Prantij", "Khedbrahma"],
  },
  sakri: {
    pickupPoints: [
      "Sakri Bus Stand",
      "Sakri Market",
      "Dhule Road",
      "Pimpalner Road",
    ],
    serviceAreas: ["Sakri", "Pimpalner", "Dhule", "Nizampur"],
  },
  sangrur: {
    pickupPoints: [
      "Sangrur Railway Station",
      "Sangrur Bus Stand",
      "Patiala Road",
      "Sunam Road",
    ],
    serviceAreas: ["Sangrur", "Sunam", "Dhuri", "Malerkotla"],
  },
  sawantwadi: {
    pickupPoints: [
      "Sawantwadi Road Railway Station",
      "Sawantwadi Bus Stand",
      "Moti Talao",
      "Amboli Road",
    ],
    serviceAreas: ["Sawantwadi", "Vengurla", "Dodamarg", "Kudal"],
  },
  shahada: {
    pickupPoints: [
      "Shahada Bus Stand",
      "Shahada Market",
      "Nandurbar Road",
      "Taloda Road",
    ],
    serviceAreas: ["Shahada", "Taloda", "Nandurbar", "Prakasha"],
  },
  shahapur: {
    pickupPoints: [
      "Shahapur Bus Stand",
      "Shahapur Market",
      "Mumbai-Nashik Highway",
      "Asangaon Railway Station",
    ],
    serviceAreas: ["Shahapur", "Asangaon", "Vasind", "Murbad"],
  },
  shirpur: {
    pickupPoints: [
      "Shirpur Bus Stand",
      "Shirpur Market",
      "Dhule Road",
      "Nardana Road",
    ],
    serviceAreas: ["Shirpur", "Thalner", "Nardana", "Dhule"],
  },
  siddipet: {
    pickupPoints: [
      "Siddipet Bus Stand",
      "Siddipet Market",
      "Hyderabad Road",
      "Karimnagar Road",
    ],
    serviceAreas: ["Siddipet", "Gajwel", "Dubbak", "Husnabad"],
  },
  sindhudurg: {
    pickupPoints: [
      "Kudal Railway Station",
      "Sawantwadi Road Railway Station",
      "Malvan Bus Stand",
      "Kankavli Railway Station",
    ],
    serviceAreas: ["Kudal", "Malvan", "Sawantwadi", "Kankavli"],
  },
  sinnar: {
    pickupPoints: [
      "Sinnar Bus Stand",
      "Sinnar MIDC",
      "Nashik-Pune Highway",
      "Musalg​​aon",
    ],
    serviceAreas: ["Sinnar", "Nashik", "Igatpuri", "Ghoti"],
  },
  srikakulam: {
    pickupPoints: [
      "Srikakulam Road Railway Station",
      "Srikakulam Bus Stand",
      "Seven Road Junction",
      "Arasavalli Temple",
    ],
    serviceAreas: ["Srikakulam", "Amadalavalasa", "Narasannapeta", "Palasa"],
  },
  tirunelveli: {
    pickupPoints: [
      "Tirunelveli Junction",
      "Tirunelveli New Bus Stand",
      "Palayamkottai",
      "Tirunelveli Medical College",
    ],
    serviceAreas: ["Tirunelveli", "Palayamkottai", "Ambasamudram", "Tenkasi"],
  },
  tuni: {
    pickupPoints: [
      "Tuni Railway Station",
      "Tuni Bus Stand",
      "NH 16",
      "Annavaram Temple Road",
    ],
    serviceAreas: ["Tuni", "Annavaram", "Prathipadu", "Payakaraopeta"],
  },
  udgir: {
    pickupPoints: [
      "Udgir Railway Station",
      "Udgir Bus Stand",
      "Bidar Road",
      "Degloor Road",
    ],
    serviceAreas: ["Udgir", "Nilanga", "Ahmedpur", "Degloor"],
  },
  unjha: {
    pickupPoints: [
      "Unjha Railway Station",
      "Unjha Bus Stand",
      "APMC Market",
      "Mehsana Road",
    ],
    serviceAreas: ["Unjha", "Siddhpur", "Patan", "Mehsana"],
  },
  uran: {
    pickupPoints: ["Uran Bus Stand", "Uran Market", "JNPT Road", "Dronagiri"],
    serviceAreas: ["Uran", "Dronagiri", "Nhava Sheva", "Panvel"],
  },
  valsad: {
    pickupPoints: [
      "Valsad Railway Station",
      "Valsad Bus Stand",
      "Tithal Beach Road",
      "Atul",
    ],
    serviceAreas: ["Valsad", "Vapi", "Pardi", "Dharampur"],
  },
  vijayapura: {
    pickupPoints: [
      "Vijayapura Railway Station",
      "Vijayapura Bus Stand",
      "Gol Gumbaz",
      "Solapur Road",
    ],
    serviceAreas: ["Vijayapura", "Indi", "Basavana Bagewadi", "Muddebihal"],
  },
  visnagar: {
    pickupPoints: [
      "Visnagar Railway Station",
      "Visnagar Bus Stand",
      "Mehsana Road",
      "Unjha Road",
    ],
    serviceAreas: ["Visnagar", "Mehsana", "Vadnagar", "Kheralu"],
  },
  vizianagaram: {
    pickupPoints: [
      "Vizianagaram Railway Station",
      "Vizianagaram Bus Stand",
      "Fort Area",
      "Gajapathinagaram Road",
    ],
    serviceAreas: [
      "Vizianagaram",
      "Bobbili",
      "Gajapathinagaram",
      "Srungavarapukota",
    ],
  },
  vyara: {
    pickupPoints: [
      "Vyara Railway Station",
      "Vyara Bus Stand",
      "Songadh Road",
      "Unai Road",
    ],
    serviceAreas: ["Vyara", "Songadh", "Valod", "Nizar"],
  },
  wani: {
    pickupPoints: [
      "Wani Railway Station",
      "Wani Bus Stand",
      "Yavatmal Road",
      "Ghonsa Road",
    ],
    serviceAreas: ["Wani", "Maregaon", "Zari Jamani", "Pandharkawada"],
  },
  washim: {
    pickupPoints: [
      "Washim Railway Station",
      "Washim Bus Stand",
      "Akola Road",
      "Risod Road",
    ],
    serviceAreas: ["Washim", "Risod", "Karanja", "Malegaon"],
  },
  yavatmal: {
    pickupPoints: [
      "Yavatmal Bus Stand",
      "Yavatmal Market",
      "Darwha Road",
      "Digras Road",
    ],
    serviceAreas: ["Yavatmal", "Darwha", "Digras", "Pusad"],
  },
  zirakpur: {
    pickupPoints: [
      "Zirakpur Bus Stand",
      "Dhakoli",
      "VIP Road",
      "Chandigarh-Ambala Highway",
    ],
    serviceAreas: ["Zirakpur", "Dhakoli", "Derabassi", "Panchkula"],
  },
  bhuj: {
    pickupPoints: [
      "Bhuj Railway Station",
      "Bhuj Airport",
      "Bhuj Bus Stand",
      "Hamirsar Lake",
    ],
    serviceAreas: ["Bhuj", "Mundra", "Mandvi", "Anjar"],
  },
  botad: {
    pickupPoints: [
      "Botad Railway Station",
      "Botad Bus Stand",
      "Gadhada Road",
      "Barwala Road",
    ],
    serviceAreas: ["Botad", "Gadhada", "Barwala", "Ranpur"],
  },

  dabhoi: {
    pickupPoints: [
      "Dabhoi Railway Station",
      "Dabhoi Bus Stand",
      "Dabhoi Fort",
      "Vadodara Road",
    ],
    serviceAreas: ["Dabhoi", "Bodeli", "Sinor", "Karjan"],
  },
  daman: {
    pickupPoints: [
      "Vapi Railway Station",
      "Nani Daman",
      "Moti Daman",
      "Jampore Beach",
    ],
    serviceAreas: ["Nani Daman", "Moti Daman", "Devka", "Dunetha"],
  },
  dwarka: {
    pickupPoints: [
      "Dwarka Railway Station",
      "Dwarka Bus Stand",
      "Dwarkadhish Temple",
      "Shivrajpur Beach",
    ],
    serviceAreas: ["Dwarka", "Okha", "Bet Dwarka Ferry Point", "Shivrajpur"],
  },
  godhra: {
    pickupPoints: [
      "Godhra Railway Station",
      "Godhra Bus Stand",
      "Lunawada Road",
      "Dahod Road",
    ],
    serviceAreas: ["Godhra", "Halol", "Kalol", "Shehera"],
  },
  himmatnagar: {
    pickupPoints: [
      "Himmatnagar Railway Station",
      "Himmatnagar Bus Stand",
      "Motipura Circle",
      "Ahmedabad Road",
    ],
    serviceAreas: ["Himmatnagar", "Prantij", "Idar", "Talod"],
  },
  idar: {
    pickupPoints: [
      "Idar Bus Stand",
      "Idar Fort",
      "Idar Market",
      "Himmatnagar Road",
    ],
    serviceAreas: ["Idar", "Vadali", "Khedbrahma", "Himmatnagar"],
  },
  jamnagar: {
    pickupPoints: [
      "Jamnagar Railway Station",
      "Jamnagar Bus Stand",
      "Jamnagar Airport",
      "Bedi Port Road",
    ],
    serviceAreas: ["Jamnagar", "Dhrol", "Kalavad", "Lalpur"],
  },
  kapadvanj: {
    pickupPoints: [
      "Kapadvanj Bus Stand",
      "Kapadvanj Market",
      "Nadiad Road",
      "Balasinor Road",
    ],
    serviceAreas: ["Kapadvanj", "Kathlal", "Thasra", "Nadiad"],
  },
  karjan: {
    pickupPoints: [
      "Karjan Railway Station",
      "Karjan Bus Stand",
      "Mumbai-Ahmedabad Highway",
      "Karjan Market",
    ],
    serviceAreas: ["Karjan", "Dabhoi", "Palej", "Vadodara"],
  },
  khambhat: {
    pickupPoints: [
      "Khambhat Railway Station",
      "Khambhat Bus Stand",
      "Khambhat Market",
      "Anand Road",
    ],
    serviceAreas: ["Khambhat", "Tarapur", "Sojitra", "Anand"],
  },
  kheda: {
    pickupPoints: [
      "Kheda Bus Stand",
      "Kheda Market",
      "Nadiad Road",
      "Ahmedabad Road",
    ],
    serviceAreas: ["Kheda", "Nadiad", "Mahemdavad", "Matar"],
  },
  kodinar: {
    pickupPoints: [
      "Kodinar Bus Stand",
      "Kodinar Market",
      "Veraval Road",
      "Somnath Road",
    ],
    serviceAreas: ["Kodinar", "Una", "Talala", "Veraval"],
  },
  lathi: {
    pickupPoints: [
      "Lathi Bus Stand",
      "Lathi Market",
      "Amreli Road",
      "Bagasara Road",
    ],
    serviceAreas: ["Lathi", "Amreli", "Bagasara", "Babra"],
  },
  limbdi: {
    pickupPoints: [
      "Limbdi Bus Stand",
      "Limbdi Market",
      "Ahmedabad-Rajkot Highway",
      "Surendranagar Road",
    ],
    serviceAreas: ["Limbdi", "Chotila", "Wadhwan", "Surendranagar"],
  },
  lunawada: {
    pickupPoints: [
      "Lunawada Bus Stand",
      "Lunawada Market",
      "Godhra Road",
      "Santrampur Road",
    ],
    serviceAreas: ["Lunawada", "Santrampur", "Kadana", "Godhra"],
  },
  mahuva: {
    pickupPoints: [
      "Mahuva Bus Stand",
      "Mahuva Market",
      "Mahuva Beach Road",
      "Talaja Road",
    ],
    serviceAreas: ["Mahuva", "Talaja", "Palitana", "Savarkundla"],
  },
  mandvi: {
    pickupPoints: [
      "Mandvi Bus Stand",
      "Mandvi Beach",
      "Vijay Vilas Palace",
      "Bhuj Road",
    ],
    serviceAreas: ["Mandvi", "Mundra", "Bhuj", "Naliya"],
  },
  mangrol: {
    pickupPoints: [
      "Mangrol Bus Stand",
      "Mangrol Fishery Harbour",
      "Junagadh Road",
      "Veraval Road",
    ],
    serviceAreas: ["Mangrol", "Keshod", "Veraval", "Junagadh"],
  },
  meghraj: {
    pickupPoints: [
      "Meghraj Bus Stand",
      "Meghraj Market",
      "Modasa Road",
      "Malpur Road",
    ],
    serviceAreas: ["Meghraj", "Malpur", "Modasa", "Bhiloda"],
  },
  morbi: {
    pickupPoints: [
      "Morbi Railway Station",
      "Morbi Bus Stand",
      "Morbi Ceramic Industrial Area",
      "Wankaner Road",
    ],
    serviceAreas: ["Morbi", "Wankaner", "Tankara", "Maliya"],
  },
  mundra: {
    pickupPoints: [
      "Mundra Bus Stand",
      "Mundra Port",
      "Adani Port Gate Area",
      "Mundra Market",
    ],
    serviceAreas: ["Mundra", "Bhuj", "Mandvi", "Anjar"],
  },
  padra: {
    pickupPoints: [
      "Padra Bus Stand",
      "Padra Market",
      "Jambusar Road",
      "Vadodara Road",
    ],
    serviceAreas: ["Padra", "Karjan", "Dabhoi", "Vadodara"],
  },
  palanpur: {
    pickupPoints: [
      "Palanpur Junction",
      "Palanpur Bus Stand",
      "Palanpur Airport Area",
      "Abu Road Highway",
    ],
    serviceAreas: ["Palanpur", "Deesa", "Danta", "Abu Road"],
  },
  patan: {
    pickupPoints: [
      "Patan Railway Station",
      "Patan Bus Stand",
      "Rani ki Vav",
      "Sahastralinga Talav",
    ],
    serviceAreas: ["Patan", "Sidhpur", "Harij", "Chanasma"],
  },
  porbandar: {
    pickupPoints: [
      "Porbandar Railway Station",
      "Porbandar Bus Stand",
      "Porbandar Airport",
      "Kirti Mandir",
    ],
    serviceAreas: ["Porbandar", "Ranavav", "Kutiyana", "Madhavpur"],
  },
  radhanpur: {
    pickupPoints: [
      "Radhanpur Bus Stand",
      "Radhanpur Market",
      "Palanpur Road",
      "Santalpur Road",
    ],
    serviceAreas: ["Radhanpur", "Santalpur", "Sami", "Patan"],
  },
  rajpipla: {
    pickupPoints: [
      "Rajpipla Bus Stand",
      "Rajpipla Market",
      "Statue of Unity Route",
      "Kevadia Road",
    ],
    serviceAreas: ["Rajpipla", "Kevadia", "Garudeshwar", "Dediapada"],
  },
  salaya: {
    pickupPoints: [
      "Salaya Bus Stand",
      "Salaya Port Area",
      "Khambhalia Road",
      "Dwarka Road",
    ],
    serviceAreas: ["Salaya", "Khambhalia", "Dwarka", "Jamnagar"],
  },
  sanand: {
    pickupPoints: [
      "Sanand Railway Station",
      "Sanand Bus Stand",
      "Sanand GIDC",
      "SG Highway Junction",
    ],
    serviceAreas: ["Sanand", "Changodar", "Bavla", "Ahmedabad"],
  },
  savli: {
    pickupPoints: [
      "Savli Bus Stand",
      "Savli GIDC",
      "Manjusar Industrial Area",
      "Vadodara-Halol Road",
    ],
    serviceAreas: ["Savli", "Manjusar", "Waghodia", "Vadodara"],
  },
  sidhpur: {
    pickupPoints: [
      "Sidhpur Railway Station",
      "Sidhpur Bus Stand",
      "Brahma Temple",
      "Patan Road",
    ],
    serviceAreas: ["Sidhpur", "Patan", "Unjha", "Chanasma"],
  },
  somnath: {
    pickupPoints: [
      "Somnath Temple",
      "Veraval Railway Station",
      "Somnath Bus Stand",
      "Triveni Sangam",
    ],
    serviceAreas: ["Somnath", "Veraval", "Prabhas Patan", "Talala"],
  },
  thangadh: {
    pickupPoints: [
      "Thangadh Railway Station",
      "Thangadh Bus Stand",
      "Ceramic Industrial Area",
      "Chotila Road",
    ],
    serviceAreas: ["Thangadh", "Chotila", "Wadhwan", "Surendranagar"],
  },
  umbergaon: {
    pickupPoints: [
      "Umbergaon Railway Station",
      "Umbergaon Bus Stand",
      "Umbergaon GIDC",
      "Umbergaon Beach",
    ],
    serviceAreas: ["Umbergaon", "Vapi", "Valsad", "Sanjan"],
  },
  vadnagar: {
    pickupPoints: [
      "Vadnagar Railway Station",
      "Vadnagar Bus Stand",
      "Kirti Toran",
      "Hatkeshwar Temple",
    ],
    serviceAreas: ["Vadnagar", "Visnagar", "Kheralu", "Mehsana"],
  },
  valod: {
    pickupPoints: [
      "Valod Bus Stand",
      "Valod Market",
      "Bardoli Road",
      "Vyara Road",
    ],
    serviceAreas: ["Valod", "Bardoli", "Vyara", "Songadh"],
  },
  vapi: {
    pickupPoints: [
      "Vapi Railway Station",
      "Vapi Bus Stand",
      "Vapi GIDC",
      "Vapi Industrial Estate",
    ],
    serviceAreas: ["Vapi", "Daman", "Silvassa", "Pardi"],
  },
  veraval: {
    pickupPoints: [
      "Veraval Railway Station",
      "Veraval Bus Stand",
      "Somnath Temple",
      "Veraval Harbour",
    ],
    serviceAreas: ["Veraval", "Somnath", "Kodinar", "Talala"],
  },
  vijapur: {
    pickupPoints: [
      "Vijapur Bus Stand",
      "Vijapur Market",
      "Mehsana Road",
      "Himmatnagar Road",
    ],
    serviceAreas: ["Vijapur", "Visnagar", "Mehsana", "Himmatnagar"],
  },
  margao: {
    pickupPoints: [
      "Madgaon Railway Station",
      "Margao Bus Stand",
      "Colva Beach Road",
      "Fatorda Stadium",
    ],
    serviceAreas: ["Margao", "Colva", "Benaulim", "Cavelossim"],
  },
  "vasco-da-gama": {
    pickupPoints: [
      "Vasco da Gama Railway Station",
      "Manohar International Airport is not in Vasco",
      "Dabolim Airport",
      "Vasco Bus Stand",
    ],
    serviceAreas: ["Vasco da Gama", "Dabolim", "Bogmalo", "Chicalim"],
  },
  mapusa: {
    pickupPoints: [
      "Mapusa Bus Stand",
      "Mapusa Market",
      "Thivim Railway Station",
      "Anjuna Road",
    ],
    serviceAreas: ["Mapusa", "Anjuna", "Vagator", "Calangute"],
  },
  ponda: {
    pickupPoints: [
      "Ponda Bus Stand",
      "Ponda Market",
      "Shantadurga Temple",
      "Mangeshi Temple Road",
    ],
    serviceAreas: ["Ponda", "Farmagudi", "Mardol", "Priol"],
  },
  bicholim: {
    pickupPoints: [
      "Bicholim Bus Stand",
      "Bicholim Market",
      "Mayem Lake Road",
      "Sanquelim Road",
    ],
    serviceAreas: ["Bicholim", "Mayem", "Pale", "Sanquelim"],
  },
  curchorem: {
    pickupPoints: [
      "Curchorem Bus Stand",
      "Curchorem Market",
      "Sanvordem Railway Station",
      "Quepem Road",
    ],
    serviceAreas: ["Curchorem", "Sanvordem", "Quepem", "Sanguem"],
  },
  sanquelim: {
    pickupPoints: [
      "Sanquelim Bus Stand",
      "Sanquelim Market",
      "Bicholim Road",
      "Valpoi Road",
    ],
    serviceAreas: ["Sanquelim", "Bicholim", "Valpoi", "Sattari"],
  },
  valpoi: {
    pickupPoints: [
      "Valpoi Bus Stand",
      "Valpoi Market",
      "Sattari Taluka Area",
      "Mhadei Wildlife Sanctuary Route",
    ],
    serviceAreas: ["Valpoi", "Sattari", "Sanquelim", "Honda"],
  },
  quepem: {
    pickupPoints: [
      "Quepem Bus Stand",
      "Quepem Market",
      "Curchorem Road",
      "Ambaulim Road",
    ],
    serviceAreas: ["Quepem", "Curchorem", "Cuncolim", "Sanguem"],
  },
  canacona: {
    pickupPoints: [
      "Canacona Railway Station",
      "Canacona Bus Stand",
      "Palolem Beach",
      "Patnem Beach",
    ],
    serviceAreas: ["Canacona", "Palolem", "Agonda", "Patnem"],
  },
  pernem: {
    pickupPoints: [
      "Pernem Bus Stand",
      "Pernem Market",
      "Pernem Railway Station",
      "Morjim Road",
    ],
    serviceAreas: ["Pernem", "Morjim", "Arambol", "Mandrem"],
  },
  sattari: {
    pickupPoints: [
      "Valpoi Bus Stand",
      "Sattari Market Area",
      "Sanquelim Road",
      "Mhadei Sanctuary Route",
    ],
    serviceAreas: ["Sattari", "Valpoi", "Honda", "Poriem"],
  },
  tiswadi: {
    pickupPoints: [
      "Panaji Bus Stand",
      "Panjim Church Square",
      "Dona Paula",
      "Old Goa",
    ],
    serviceAreas: ["Panaji", "Dona Paula", "Old Goa", "Bambolim"],
  },
  mormugao: {
    pickupPoints: [
      "Vasco da Gama Railway Station",
      "Mormugao Port",
      "Dabolim Airport",
      "Bogmalo Beach",
    ],
    serviceAreas: ["Mormugao", "Vasco da Gama", "Dabolim", "Chicalim"],
  },
  dharbandora: {
    pickupPoints: [
      "Dharbandora Bus Stand",
      "Mollem",
      "Ponda Road",
      "Tambdi Surla Road",
    ],
    serviceAreas: ["Dharbandora", "Mollem", "Sanguem", "Ponda"],
  },
  silvassa: {
    pickupPoints: [
      "Silvassa Bus Stand",
      "Vasona Lion Safari",
      "Amli Industrial Area",
      "Dadra Road",
    ],
    serviceAreas: ["Silvassa", "Dadra", "Naroli", "Khanvel"],
  },
  diu: {
    pickupPoints: ["Diu Airport", "Diu Bus Stand", "Nagoa Beach", "Diu Fort"],
    serviceAreas: ["Diu", "Nagoa", "Ghoghla", "Vanakbara"],
  },
  bagalkot: {
    pickupPoints: [
      "Bagalkot Railway Station",
      "Bagalkot Bus Stand",
      "Badami Road",
      "Navanagar",
    ],
    serviceAreas: ["Bagalkot", "Badami", "Aihole", "Pattadakal"],
  },
  belagavi: {
    pickupPoints: [
      "Belagavi Railway Station",
      "Belagavi Central Bus Stand",
      "Belagavi Airport",
      "Tilakwadi",
    ],
    serviceAreas: ["Belagavi", "Khanapur", "Gokak", "Bailhongal"],
  },
  chikkamagaluru: {
    pickupPoints: [
      "Chikkamagaluru Bus Stand",
      "MG Road",
      "Mullayanagiri Route",
      "Kemmanagundi Route",
    ],
    serviceAreas: [
      "Chikkamagaluru",
      "Mullayanagiri",
      "Baba Budangiri",
      "Kadur",
    ],
  },
  chitradurga: {
    pickupPoints: [
      "Chitradurga Railway Station",
      "Chitradurga Bus Stand",
      "Chitradurga Fort",
      "NH 48",
    ],
    serviceAreas: ["Chitradurga", "Hiriyur", "Holalkere", "Challakere"],
  },
  davangere: {
    pickupPoints: [
      "Davangere Railway Station",
      "Davangere Bus Stand",
      "PJ Extension",
      "Harihar Road",
    ],
    serviceAreas: ["Davangere", "Harihar", "Honnali", "Jagalur"],
  },
  gadag: {
    pickupPoints: [
      "Gadag Junction",
      "Gadag Bus Stand",
      "Betageri",
      "Lakkundi Road",
    ],
    serviceAreas: ["Gadag", "Betageri", "Lakkundi", "Mundargi"],
  },
  hassan: {
    pickupPoints: [
      "Hassan Railway Station",
      "Hassan Bus Stand",
      "BM Road",
      "Belur Road",
    ],
    serviceAreas: ["Hassan", "Belur", "Halebidu", "Sakleshpur"],
  },
  haveri: {
    pickupPoints: [
      "Haveri Railway Station",
      "Haveri Bus Stand",
      "Pune-Bengaluru Highway",
      "Byadgi Road",
    ],
    serviceAreas: ["Haveri", "Byadgi", "Ranebennur", "Savanur"],
  },
  kodagu: {
    pickupPoints: [
      "Madikeri Bus Stand",
      "Madikeri Fort",
      "Kushalnagar Bus Stand",
      "Abbey Falls Road",
    ],
    serviceAreas: ["Madikeri", "Kushalnagar", "Virajpet", "Somwarpet"],
  },
  kolar: {
    pickupPoints: [
      "Kolar Bus Stand",
      "Kolar Railway Station",
      "Bangarpet Road",
      "KGF Road",
    ],
    serviceAreas: ["Kolar", "Bangarpet", "Malur", "Mulbagal"],
  },
  mandya: {
    pickupPoints: [
      "Mandya Railway Station",
      "Mandya Bus Stand",
      "Mysuru Road",
      "Srirangapatna Road",
    ],
    serviceAreas: ["Mandya", "Srirangapatna", "Maddur", "Pandavapura"],
  },
  raichur: {
    pickupPoints: [
      "Raichur Railway Station",
      "Raichur Bus Stand",
      "Station Road",
      "Lingsugur Road",
    ],
    serviceAreas: ["Raichur", "Manvi", "Sindhanur", "Lingsugur"],
  },
  shivamogga: {
    pickupPoints: [
      "Shivamogga Town Railway Station",
      "Shivamogga Bus Stand",
      "Vinoba Nagar",
      "Sagar Road",
    ],
    serviceAreas: ["Shivamogga", "Sagara", "Thirthahalli", "Bhadravati"],
  },
  udupi: {
    pickupPoints: [
      "Udupi Railway Station",
      "Udupi Bus Stand",
      "Sri Krishna Matha",
      "Malpe Beach",
    ],
    serviceAreas: ["Udupi", "Manipal", "Malpe", "Kapu"],
  },
  "uttara-kannada": {
    pickupPoints: [
      "Karwar Railway Station",
      "Sirsi Bus Stand",
      "Kumta Bus Stand",
      "Dandeli Bus Stand",
    ],
    serviceAreas: ["Karwar", "Sirsi", "Kumta", "Dandeli"],
  },
  yadgir: {
    pickupPoints: [
      "Yadgir Railway Station",
      "Yadgir Bus Stand",
      "Shahapur Road",
      "Gurmitkal Road",
    ],
    serviceAreas: ["Yadgir", "Shahapur", "Gurmitkal", "Shorapur"],
  },
  angamaly: {
    pickupPoints: [
      "Angamaly Railway Station",
      "Angamaly Bus Stand",
      "Cochin International Airport",
      "Kalady Road",
    ],
    serviceAreas: ["Angamaly", "Kalady", "Aluva", "Perumbavoor"],
  },
  attingal: {
    pickupPoints: [
      "Attingal Bus Stand",
      "Attingal Market",
      "NH 66",
      "Chirayinkeezhu Road",
    ],
    serviceAreas: ["Attingal", "Chirayinkeezhu", "Varkala", "Kilimanoor"],
  },
  chalakudy: {
    pickupPoints: [
      "Chalakudy Railway Station",
      "Chalakudy Bus Stand",
      "Athirappilly Road",
      "Kodassery",
    ],
    serviceAreas: ["Chalakudy", "Athirappilly", "Mala", "Kodungallur"],
  },
  chengannur: {
    pickupPoints: [
      "Chengannur Railway Station",
      "Chengannur Bus Stand",
      "Mahadeva Temple",
      "Aranmula Road",
    ],
    serviceAreas: ["Chengannur", "Aranmula", "Pandalam", "Thiruvalla"],
  },
  cherthala: {
    pickupPoints: [
      "Cherthala Railway Station",
      "Cherthala Bus Stand",
      "NH 66",
      "Arthunkal Church",
    ],
    serviceAreas: ["Cherthala", "Arthunkal", "Mararikulam", "Alappuzha"],
  },
  chittur: {
    pickupPoints: [
      "Chittur Bus Stand",
      "Chittur Market",
      "Palakkad Road",
      "Meenakshipuram Road",
    ],
    serviceAreas: ["Chittur", "Palakkad", "Kollengode", "Pollachi Road"],
  },
  ernakulam: {
    pickupPoints: [
      "Ernakulam Junction",
      "Ernakulam Town Station",
      "Vyttila Mobility Hub",
      "Marine Drive",
    ],
    serviceAreas: ["Ernakulam", "Kochi", "Kakkanad", "Aluva"],
  },
  idukki: {
    pickupPoints: [
      "Painavu Bus Stand",
      "Thodupuzha Bus Stand",
      "Munnar Town",
      "Kattappana",
    ],
    serviceAreas: ["Idukki", "Munnar", "Thekkady", "Kattappana"],
  },
  kannur: {
    pickupPoints: [
      "Kannur Railway Station",
      "Kannur Bus Stand",
      "Kannur Airport",
      "Thalassery Road",
    ],
    serviceAreas: ["Kannur", "Thalassery", "Payyannur", "Mattannur"],
  },
  kasaragod: {
    pickupPoints: [
      "Kasaragod Railway Station",
      "Kasaragod Bus Stand",
      "Bekal Fort",
      "Kanhangad",
    ],
    serviceAreas: ["Kasaragod", "Kanhangad", "Uppala", "Manjeshwar"],
  },
  kayankulam: {
    pickupPoints: [
      "Kayamkulam Junction",
      "Kayamkulam Bus Stand",
      "Krishnapuram Palace",
      "NH 66",
    ],
    serviceAreas: ["Kayamkulam", "Mavelikkara", "Haripad", "Karthikappally"],
  },
  kottayam: {
    pickupPoints: [
      "Kottayam Railway Station",
      "Kottayam Bus Stand",
      "Nagampadam",
      "Kumarakom Road",
    ],
    serviceAreas: ["Kottayam", "Kumarakom", "Changanassery", "Pala"],
  },
  kozhikode: {
    pickupPoints: [
      "Kozhikode Railway Station",
      "Kozhikode Bus Stand",
      "Kozhikode Airport",
      "Mavoor Road",
    ],
    serviceAreas: ["Kozhikode", "Koyilandy", "Feroke", "Ramanattukara"],
  },
  palakkad: {
    pickupPoints: [
      "Palakkad Junction",
      "Palakkad Bus Stand",
      "Palakkad Fort",
      "Olavakkode",
    ],
    serviceAreas: ["Palakkad", "Ottapalam", "Mannarkkad", "Chittur"],
  },
  pathanamthitta: {
    pickupPoints: [
      "Pathanamthitta Bus Stand",
      "Adoor Bus Stand",
      "Konni",
      "Sabarimala Route",
    ],
    serviceAreas: ["Pathanamthitta", "Konni", "Adoor", "Ranni"],
  },
  thiruvalla: {
    pickupPoints: [
      "Thiruvalla Railway Station",
      "Thiruvalla Bus Stand",
      "SCS Junction",
      "Kaviyoor Temple",
    ],
    serviceAreas: ["Thiruvalla", "Chengannur", "Mallappally", "Kuttoor"],
  },
  thodupuzha: {
    pickupPoints: [
      "Thodupuzha Bus Stand",
      "Thodupuzha Town",
      "Muvattupuzha Road",
      "Idukki Road",
    ],
    serviceAreas: ["Thodupuzha", "Muvattupuzha", "Vannappuram", "Idukki"],
  },
  wayanad: {
    pickupPoints: [
      "Kalpetta Bus Stand",
      "Sulthan Bathery Bus Stand",
      "Mananthavady Bus Stand",
      "Vythiri",
    ],
    serviceAreas: ["Kalpetta", "Sulthan Bathery", "Mananthavady", "Vythiri"],
  },
  arakkonam: {
    pickupPoints: [
      "Arakkonam Junction",
      "Arakkonam Bus Stand",
      "NH 48",
      "Ranipet Road",
    ],
    serviceAreas: ["Arakkonam", "Sholinghur", "Nemili", "Ranipet"],
  },
  ariyalur: {
    pickupPoints: [
      "Ariyalur Railway Station",
      "Ariyalur Bus Stand",
      "Ariyalur Market",
      "Sendurai Road",
    ],
    serviceAreas: ["Ariyalur", "Sendurai", "Jayankondam", "Andimadam"],
  },
  attur: {
    pickupPoints: [
      "Attur Railway Station",
      "Attur Bus Stand",
      "Salem Road",
      "Rasipuram Road",
    ],
    serviceAreas: [
      "Attur",
      "Gangavalli",
      "Thammampatti",
      "Pethanaickenpalayam",
    ],
  },
  avadi: {
    pickupPoints: [
      "Avadi Railway Station",
      "Avadi Bus Stand",
      "Avadi Bus Depot",
      "Poonamallee High Road",
    ],
    serviceAreas: ["Avadi", "Poonamallee", "Thirumullaivoyal", "Ambattur"],
  },
  batlagundu: {
    pickupPoints: [
      "Batlagundu Bus Stand",
      "Batlagundu Market",
      "Kodaikanal Road",
      "Nilakottai Road",
    ],
    serviceAreas: ["Batlagundu", "Nilakottai", "Kodaikanal", "Vathalagundu"],
  },
  bhavani: {
    pickupPoints: [
      "Bhavani Bus Stand",
      "Bhavani Kooduthurai",
      "Erode Road",
      "Mettur Road",
    ],
    serviceAreas: ["Bhavani", "Erode", "Anthiyur", "Komarapalayam"],
  },

  cheyyar: {
    pickupPoints: ["Cheyyar Bus Stand", "Cheyyar Market Area"],
    serviceAreas: ["Cheyyar", "Vandavasi", "Arani"],
  },
  chidambaram: {
    pickupPoints: ["Chidambaram Railway Station", "Nataraja Temple Area"],
    serviceAreas: ["Chidambaram", "Parangipettai", "Bhuvanagiri"],
  },
  coonoor: {
    pickupPoints: ["Coonoor Railway Station", "Coonoor Bus Stand"],
    serviceAreas: ["Coonoor", "Ooty", "Wellington"],
  },
  cuddalore: {
    pickupPoints: ["Cuddalore Bus Stand", "Cuddalore Port Junction"],
    serviceAreas: ["Cuddalore", "Thirupadiripuliyur", "Panruti"],
  },
  dindigul: {
    pickupPoints: ["Dindigul Railway Station", "Dindigul Bus Stand"],
    serviceAreas: ["Dindigul", "Batlagundu", "Vedasandur"],
  },
  erode: {
    pickupPoints: ["Erode Junction", "Erode Central Bus Stand"],
    serviceAreas: ["Erode", "Perundurai", "Bhavani"],
  },
  gudiyatham: {
    pickupPoints: ["Gudiyatham Railway Station", "Gudiyatham Bus Stand"],
    serviceAreas: ["Gudiyatham", "Pernambut", "Vellore"],
  },
  karur: {
    pickupPoints: ["Karur Railway Station", "Karur Bus Stand"],
    serviceAreas: ["Karur", "Aravakurichi", "Kulithalai"],
  },
  kumbakonam: {
    pickupPoints: ["Kumbakonam Railway Station", "Kumbakonam Bus Stand"],
    serviceAreas: ["Kumbakonam", "Swamimalai", "Thirunageswaram"],
  },
  mayiladuthurai: {
    pickupPoints: ["Mayiladuthurai Junction", "Mayiladuthurai Bus Stand"],
    serviceAreas: ["Mayiladuthurai", "Sirkazhi", "Vaitheeswarankoil"],
  },
  nagapattinam: {
    pickupPoints: ["Nagapattinam Railway Station", "Nagapattinam Bus Stand"],
    serviceAreas: ["Nagapattinam", "Velankanni", "Vedaranyam"],
  },
  namakkal: {
    pickupPoints: ["Namakkal Bus Stand", "Namakkal Fort Area"],
    serviceAreas: ["Namakkal", "Rasipuram", "Tiruchengode"],
  },
  oddanchatram: {
    pickupPoints: ["Oddanchatram Bus Stand", "Oddanchatram Market Area"],
    serviceAreas: ["Oddanchatram", "Palani", "Dindigul"],
  },
  palani: {
    pickupPoints: ["Palani Railway Station", "Palani Murugan Temple Area"],
    serviceAreas: ["Palani", "Oddanchatram", "Dharapuram"],
  },
  paramakudi: {
    pickupPoints: ["Paramakudi Railway Station", "Paramakudi Bus Stand"],
    serviceAreas: ["Paramakudi", "Ramanathapuram", "Ilayangudi"],
  },
  pattukkottai: {
    pickupPoints: ["Pattukkottai Railway Station", "Pattukkottai Bus Stand"],
    serviceAreas: ["Pattukkottai", "Peravurani", "Orathanadu"],
  },
  perambalur: {
    pickupPoints: ["Perambalur Bus Stand", "Perambalur Four Road Junction"],
    serviceAreas: ["Perambalur", "Veppanthattai", "Ariyalur"],
  },
  pollachi: {
    pickupPoints: ["Pollachi Junction", "Pollachi Bus Stand"],
    serviceAreas: ["Pollachi", "Anaimalai", "Topslip"],
  },
  pudukkottai: {
    pickupPoints: ["Pudukkottai Railway Station", "Pudukkottai Bus Stand"],
    serviceAreas: ["Pudukkottai", "Aranthangi", "Keeranur"],
  },
  ramanathapuram: {
    pickupPoints: [
      "Ramanathapuram Railway Station",
      "Ramanathapuram Bus Stand",
    ],
    serviceAreas: ["Ramanathapuram", "Rameswaram", "Paramakudi"],
  },
  ranipet: {
    pickupPoints: ["Ranipet Bus Stand", "Walajah Road Railway Station"],
    serviceAreas: ["Ranipet", "Arcot", "Walajapet"],
  },
  sivakasi: {
    pickupPoints: ["Sivakasi Railway Station", "Sivakasi Bus Stand"],
    serviceAreas: ["Sivakasi", "Sattur", "Virudhunagar"],
  },
  sivaganga: {
    pickupPoints: ["Sivaganga Railway Station", "Sivaganga Bus Stand"],
    serviceAreas: ["Sivaganga", "Karaikudi", "Manamadurai"],
  },
  srirangam: {
    pickupPoints: ["Srirangam Railway Station", "Ranganathaswamy Temple Area"],
    serviceAreas: ["Srirangam", "Tiruchirappalli", "Thiruverumbur"],
  },
  tenkasi: {
    pickupPoints: ["Tenkasi Junction", "Tenkasi Bus Stand"],
    serviceAreas: ["Tenkasi", "Courtallam", "Shenkottai"],
  },
  theni: {
    pickupPoints: ["Theni Bus Stand", "Theni Market Area"],
    serviceAreas: ["Theni", "Periyakulam", "Bodinayakanur"],
  },
  thoothukudi: {
    pickupPoints: ["Thoothukudi Railway Station", "Thoothukudi Old Bus Stand"],
    serviceAreas: ["Thoothukudi", "Tiruchendur", "Srivaikuntam"],
  },
  tiruchengodu: {
    pickupPoints: ["Tiruchengode Bus Stand", "Arthanareeswarar Temple Area"],
    serviceAreas: ["Tiruchengode", "Erode", "Namakkal"],
  },
  tirupattur: {
    pickupPoints: ["Tirupattur Railway Station", "Tirupattur Bus Stand"],
    serviceAreas: ["Tirupattur", "Vaniyambadi", "Ambur"],
  },
  tiruvallur: {
    pickupPoints: ["Tiruvallur Railway Station", "Tiruvallur Bus Stand"],
    serviceAreas: ["Tiruvallur", "Tiruninravur", "Poonamallee"],
  },
  tiruvannamalai: {
    pickupPoints: [
      "Tiruvannamalai Railway Station",
      "Arunachaleswarar Temple Area",
    ],
    serviceAreas: ["Tiruvannamalai", "Polur", "Chengam"],
  },
  udumalpet: {
    pickupPoints: ["Udumalpet Railway Station", "Udumalpet Bus Stand"],
    serviceAreas: ["Udumalpet", "Pollachi", "Dharapuram"],
  },
  vellore: {
    pickupPoints: [
      "Vellore Katpadi Junction",
      "Vellore New Bus Stand",
      "CMC Vellore Area",
    ],
    serviceAreas: ["Vellore", "Katpadi", "Gudiyatham"],
  },
  viluppuram: {
    pickupPoints: ["Villupuram Junction", "Villupuram New Bus Stand"],
    serviceAreas: ["Viluppuram", "Tindivanam", "Gingee"],
  },
  virudhunagar: {
    pickupPoints: ["Virudhunagar Junction", "Virudhunagar Bus Stand"],
    serviceAreas: ["Virudhunagar", "Sivakasi", "Aruppukkottai"],
  },

  adoni: {
    pickupPoints: ["Adoni Railway Station", "Adoni Bus Stand"],
    serviceAreas: ["Adoni", "Yemmiganur", "Mantralayam"],
  },
  amalapuram: {
    pickupPoints: ["Amalapuram Bus Stand", "Amalapuram Town Centre"],
    serviceAreas: ["Amalapuram", "Razole", "Mummidivaram"],
  },
  anakapalle: {
    pickupPoints: ["Anakapalle Railway Station", "Anakapalle Bus Stand"],
    serviceAreas: ["Anakapalle", "Yelamanchili", "Visakhapatnam"],
  },
  anantapur: {
    pickupPoints: ["Anantapur Railway Station", "Anantapur Bus Stand"],
    serviceAreas: ["Anantapur", "Gooty", "Tadipatri"],
  },
  bapatla: {
    pickupPoints: ["Bapatla Railway Station", "Bapatla Bus Stand"],
    serviceAreas: ["Bapatla", "Chirala", "Repalle"],
  },
  chittoor: {
    pickupPoints: ["Chittoor Railway Station", "Chittoor Bus Stand"],
    serviceAreas: ["Chittoor", "Palamaner", "Punganur"],
  },
  cuddapah: {
    pickupPoints: ["Cuddapah Railway Station", "Kadapa Bus Stand"],
    serviceAreas: ["Kadapa", "Proddatur", "Jammalamadugu"],
  },
  dharmavaram: {
    pickupPoints: ["Dharmavaram Railway Station", "Dharmavaram Bus Stand"],
    serviceAreas: ["Dharmavaram", "Anantapur", "Penukonda"],
  },
  guntakal: {
    pickupPoints: ["Guntakal Junction", "Guntakal Bus Stand"],
    serviceAreas: ["Guntakal", "Gooty", "Adoni"],
  },
  hindupur: {
    pickupPoints: ["Hindupur Railway Station", "Hindupur Bus Stand"],
    serviceAreas: ["Hindupur", "Penukonda", "Lepakshi"],
  },
  kadapa: {
    pickupPoints: ["Kadapa Railway Station", "Kadapa RTC Bus Stand"],
    serviceAreas: ["Kadapa", "Proddatur", "Rayachoti"],
  },
  kavali: {
    pickupPoints: ["Kavali Railway Station", "Kavali Bus Stand"],
    serviceAreas: ["Kavali", "Nellore", "Ulavapadu"],
  },
  kurnool: {
    pickupPoints: ["Kurnool City Railway Station", "Kurnool RTC Bus Stand"],
    serviceAreas: ["Kurnool", "Nandyal", "Adoni"],
  },
  madanapalle: {
    pickupPoints: ["Madanapalle Bus Stand", "Madanapalle Town Centre"],
    serviceAreas: ["Madanapalle", "Punganur", "Chittoor"],
  },
  markapur: {
    pickupPoints: ["Markapur Road Railway Station", "Markapur Bus Stand"],
    serviceAreas: ["Markapur", "Giddalur", "Cumbum"],
  },
  nellore: {
    pickupPoints: ["Nellore Railway Station", "Nellore RTC Bus Stand"],
    serviceAreas: ["Nellore", "Kavali", "Gudur"],
  },
  palakollu: {
    pickupPoints: ["Palakollu Railway Station", "Palakollu Bus Stand"],
    serviceAreas: ["Palakollu", "Narasapuram", "Bhimavaram"],
  },
  proddatur: {
    pickupPoints: ["Proddatur Railway Station", "Proddatur Bus Stand"],
    serviceAreas: ["Proddatur", "Kadapa", "Jammalamadugu"],
  },
  rajampet: {
    pickupPoints: ["Rajampet Railway Station", "Rajampet Bus Stand"],
    serviceAreas: ["Rajampet", "Kodur", "Kadapa"],
  },
  rajahmundry: {
    pickupPoints: ["Rajahmundry Railway Station", "Rajahmundry RTC Complex"],
    serviceAreas: ["Rajahmundry", "Dowleswaram", "Kovvur"],
  },
  ramachandrapuram: {
    pickupPoints: [
      "Ramachandrapuram Bus Stand",
      "Ramachandrapuram Town Centre",
    ],
    serviceAreas: ["Ramachandrapuram", "Draksharamam", "Kakinada"],
  },
  rayachoti: {
    pickupPoints: ["Rayachoti Bus Stand", "Rayachoti Town Centre"],
    serviceAreas: ["Rayachoti", "Kadapa", "Madanapalle"],
  },
  tadepalligudem: {
    pickupPoints: [
      "Tadepalligudem Railway Station",
      "Tadepalligudem Bus Stand",
    ],
    serviceAreas: ["Tadepalligudem", "Tanuku", "Bhimavaram"],
  },
  tanuku: {
    pickupPoints: ["Tanuku Railway Station", "Tanuku Bus Stand"],
    serviceAreas: ["Tanuku", "Tadepalligudem", "Nidadavole"],
  },
  tirupati: {
    pickupPoints: [
      "Tirupati Railway Station",
      "Tirupati Bus Stand",
      "Tirumala Foothills",
    ],
    serviceAreas: ["Tirupati", "Tirumala", "Renigunta"],
  },
  vinukonda: {
    pickupPoints: ["Vinukonda Railway Station", "Vinukonda Bus Stand"],
    serviceAreas: ["Vinukonda", "Narasaraopet", "Guntur"],
  },

  armoor: {
    pickupPoints: ["Armoor Bus Stand", "Armoor Town Centre"],
    serviceAreas: ["Armoor", "Nizamabad", "Balkonda"],
  },
  asifabad: {
    pickupPoints: ["Asifabad Bus Stand", "Kagaznagar Railway Station"],
    serviceAreas: ["Asifabad", "Kagaznagar", "Mancherial"],
  },
  bodhan: {
    pickupPoints: ["Bodhan Railway Station", "Bodhan Bus Stand"],
    serviceAreas: ["Bodhan", "Nizamabad", "Yedapally"],
  },
  karimnagar: {
    pickupPoints: ["Karimnagar Bus Stand", "Karimnagar Town Centre"],
    serviceAreas: ["Karimnagar", "Huzurabad", "Jagtial"],
  },
  kothagudem: {
    pickupPoints: ["Kothagudem Railway Station", "Kothagudem Bus Stand"],
    serviceAreas: ["Kothagudem", "Palvancha", "Bhadrachalam"],
  },
  mancherial: {
    pickupPoints: ["Mancherial Railway Station", "Mancherial Bus Stand"],
    serviceAreas: ["Mancherial", "Bellampalli", "Luxettipet"],
  },
  medak: {
    pickupPoints: ["Medak Bus Stand", "Medak Cathedral Area"],
    serviceAreas: ["Medak", "Ramayampet", "Narsapur"],
  },
  nirmal: {
    pickupPoints: ["Nirmal Bus Stand", "Nirmal Town Centre"],
    serviceAreas: ["Nirmal", "Bhainsa", "Adilabad"],
  },
  nizamabad: {
    pickupPoints: ["Nizamabad Railway Station", "Nizamabad Bus Stand"],
    serviceAreas: ["Nizamabad", "Bodhan", "Armoor"],
  },
  sangareddy: {
    pickupPoints: ["Sangareddy Bus Stand", "Sangareddy Town Centre"],
    serviceAreas: ["Sangareddy", "Patancheru", "Zaheerabad"],
  },
  suryapet: {
    pickupPoints: ["Suryapet Bus Stand", "Suryapet Town Centre"],
    serviceAreas: ["Suryapet", "Kodad", "Huzurnagar"],
  },
  vikarabad: {
    pickupPoints: ["Vikarabad Railway Station", "Vikarabad Bus Stand"],
    serviceAreas: ["Vikarabad", "Ananthagiri Hills", "Tandur"],
  },
  wanaparthy: {
    pickupPoints: ["Wanaparthy Bus Stand", "Wanaparthy Town Centre"],
    serviceAreas: ["Wanaparthy", "Pebbair", "Gadwal"],
  },

  karaikal: {
    pickupPoints: ["Karaikal Railway Station", "Karaikal Bus Stand"],
    serviceAreas: ["Karaikal", "Thirunallar", "Nagapattinam"],
  },
  mahe: {
    pickupPoints: ["Mahe Bus Stand", "Mahe Riverside Area"],
    serviceAreas: ["Mahe", "Palloor", "Thalassery"],
  },
  yanam: {
    pickupPoints: ["Yanam Bus Stand", "Yanam Town Centre"],
    serviceAreas: ["Yanam", "Mummidivaram", "Kakinada"],
  },
  kavaratti: {
    pickupPoints: ["Kavaratti Jetty", "Kavaratti Island Town Centre"],
    serviceAreas: ["Kavaratti Island"],
  },

  alipurduar: {
    pickupPoints: ["Alipurduar Junction", "Alipurduar Court Bus Stand"],
    serviceAreas: ["Alipurduar", "Birpara", "Madarihat"],
  },
  barasat: {
    pickupPoints: ["Barasat Railway Station", "Barasat Chapadali More"],
    serviceAreas: ["Barasat", "Madhyamgram", "Dum Dum"],
  },
  barrackpore: {
    pickupPoints: ["Barrackpore Railway Station", "Barrackpore Chiriamore"],
    serviceAreas: ["Barrackpore", "Titagarh", "Khardaha"],
  },
  basirhat: {
    pickupPoints: ["Basirhat Railway Station", "Basirhat Bus Stand"],
    serviceAreas: ["Basirhat", "Taki", "Haroa"],
  },
  bhatpara: {
    pickupPoints: ["Bhatpara Railway Station", "Jagatdal Railway Station"],
    serviceAreas: ["Bhatpara", "Naihati", "Kankinara"],
  },
  bolpur: {
    pickupPoints: [
      "Bolpur Shantiniketan Railway Station",
      "Prantik Railway Station",
    ],
    serviceAreas: ["Bolpur", "Santiniketan", "Sriniketan"],
  },
  "cooch-behar": {
    pickupPoints: ["Cooch Behar Railway Station", "Cooch Behar Bus Stand"],
    serviceAreas: ["Cooch Behar", "Dinhata", "Mathabhanga"],
  },
  darjeeling: {
    pickupPoints: [
      "Darjeeling Railway Station",
      "Chowrasta Mall",
      "Darjeeling Bus Stand",
    ],
    serviceAreas: ["Darjeeling", "Ghoom", "Kurseong"],
  },
  "diamond-harbour": {
    pickupPoints: [
      "Diamond Harbour Railway Station",
      "Diamond Harbour Bus Stand",
    ],
    serviceAreas: ["Diamond Harbour", "Falta", "Kakdwip"],
  },
  dinhata: {
    pickupPoints: ["Dinhata Railway Station", "Dinhata Bus Stand"],
    serviceAreas: ["Dinhata", "Cooch Behar", "Sitai"],
  },
  falta: {
    pickupPoints: ["Falta Bus Stand", "Falta Industrial Area"],
    serviceAreas: ["Falta", "Diamond Harbour", "Budge Budge"],
  },
  gangarampur: {
    pickupPoints: ["Gangarampur Railway Station", "Gangarampur Bus Stand"],
    serviceAreas: ["Gangarampur", "Buniadpur", "Balurghat"],
  },
  gopalpur: {
    pickupPoints: ["Gopalpur Bus Stand", "Gopalpur Market Area"],
    serviceAreas: ["Gopalpur", "Gangarampur", "Balurghat"],
  },
  habra: {
    pickupPoints: ["Habra Railway Station", "Habra Bus Stand"],
    serviceAreas: ["Habra", "Ashoknagar", "Barasat"],
  },
  halisahar: {
    pickupPoints: ["Halisahar Railway Station", "Halisahar Ferry Ghat"],
    serviceAreas: ["Halisahar", "Naihati", "Kanchrapara"],
  },
  howrah: {
    pickupPoints: ["Howrah Junction", "Howrah Maidan", "Santragachi Junction"],
    serviceAreas: ["Howrah", "Shibpur", "Bally"],
  },
  "hugli-chinsurah": {
    pickupPoints: ["Chinsurah Railway Station", "Hooghly Railway Station"],
    serviceAreas: ["Hugli-Chinsurah", "Bandel", "Chandannagar"],
  },
  jalpaiguri: {
    pickupPoints: ["Jalpaiguri Road Station", "Jalpaiguri Town Station"],
    serviceAreas: ["Jalpaiguri", "Maynaguri", "Rajganj"],
  },
  jangipur: {
    pickupPoints: ["Jangipur Road Railway Station", "Jangipur Bus Stand"],
    serviceAreas: ["Jangipur", "Raghunathganj", "Suti"],
  },
  katwa: {
    pickupPoints: ["Katwa Junction", "Katwa Bus Stand"],
    serviceAreas: ["Katwa", "Kalna", "Ketugram"],
  },
  kharagpur: {
    pickupPoints: ["Kharagpur Junction", "Kharagpur Bus Stand"],
    serviceAreas: ["Kharagpur", "Hijli", "Debra"],
  },
  mathabhanga: {
    pickupPoints: ["Mathabhanga Bus Stand", "Mathabhanga Town Centre"],
    serviceAreas: ["Mathabhanga", "Cooch Behar", "Sitalkuchi"],
  },
  medinipur: {
    pickupPoints: ["Midnapore Railway Station", "Midnapore Bus Stand"],
    serviceAreas: ["Medinipur", "Garhbeta", "Kharagpur"],
  },
  memari: {
    pickupPoints: ["Memari Railway Station", "Memari Bus Stand"],
    serviceAreas: ["Memari", "Bardhaman", "Kalna"],
  },
  murshidabad: {
    pickupPoints: ["Murshidabad Railway Station", "Lalbagh Town"],
    serviceAreas: ["Murshidabad", "Berhampore", "Jiaganj"],
  },
  naihati: {
    pickupPoints: ["Naihati Junction", "Naihati Ferry Ghat"],
    serviceAreas: ["Naihati", "Halisahar", "Bhatpara"],
  },

  nabadwip: {
    pickupPoints: [
      "Nabadwip Dham Railway Station",
      "Nabadwip Bus Stand",
      "Mayapur Ferry Ghat",
    ],
    serviceAreas: ["Nabadwip", "Mayapur", "Krishnanagar"],
  },
  nakashipara: {
    pickupPoints: ["Nakashipara Bus Stand", "Bethuadahari Railway Station"],
    serviceAreas: ["Nakashipara", "Bethuadahari", "Krishnanagar"],
  },
  nalhati: {
    pickupPoints: ["Nalhati Junction", "Nalhati Bus Stand"],
    serviceAreas: ["Nalhati", "Rampurhat", "Murarai"],
  },
  panihati: {
    pickupPoints: ["Sodepur Railway Station", "Agarpara Railway Station"],
    serviceAreas: ["Panihati", "Sodepur", "Khardaha"],
  },
  ranaghat: {
    pickupPoints: ["Ranaghat Junction", "Ranaghat Bus Stand"],
    serviceAreas: ["Ranaghat", "Santipur", "Krishnanagar"],
  },
  santipur: {
    pickupPoints: ["Santipur Railway Station", "Santipur Bus Stand"],
    serviceAreas: ["Santipur", "Ranaghat", "Phulia"],
  },
  serampore: {
    pickupPoints: ["Serampore Railway Station", "Serampore Ferry Ghat"],
    serviceAreas: ["Serampore", "Rishra", "Uttarpara"],
  },
  shyamnagar: {
    pickupPoints: ["Shyamnagar Railway Station", "Jagaddal Railway Station"],
    serviceAreas: ["Shyamnagar", "Bhatpara", "Barrackpore"],
  },
  siuri: {
    pickupPoints: ["Siuri Railway Station", "Siuri Bus Stand"],
    serviceAreas: ["Siuri", "Sainthia", "Dubrajpur"],
  },
  tamluk: {
    pickupPoints: ["Tamluk Railway Station", "Tamluk Bus Stand"],
    serviceAreas: ["Tamluk", "Haldia", "Panskura"],
  },
  tarakeswar: {
    pickupPoints: ["Tarakeswar Railway Station", "Tarakeswar Temple Area"],
    serviceAreas: ["Tarakeswar", "Haripal", "Arambagh"],
  },
  uluberia: {
    pickupPoints: ["Uluberia Railway Station", "Uluberia Bus Stand"],
    serviceAreas: ["Uluberia", "Bagnan", "Amta"],
  },
  uttarpara: {
    pickupPoints: ["Uttarpara Railway Station", "Hindmotor Railway Station"],
    serviceAreas: ["Uttarpara", "Konnagar", "Serampore"],
  },

  arrah: {
    pickupPoints: ["Ara Junction", "Ara Bus Stand"],
    serviceAreas: ["Arrah", "Koilwar", "Bihiya"],
  },
  aurangabad: {
    pickupPoints: ["Aurangabad Bus Stand", "Aurangabad Town Centre"],
    serviceAreas: ["Aurangabad", "Daudnagar", "Rafiganj"],
  },
  bagaha: {
    pickupPoints: ["Bagaha Railway Station", "Bagaha Bus Stand"],
    serviceAreas: ["Bagaha", "Valmikinagar", "Ramnagar"],
  },
  banka: {
    pickupPoints: ["Banka Railway Station", "Banka Bus Stand"],
    serviceAreas: ["Banka", "Amarpur", "Barahat"],
  },
  begusarai: {
    pickupPoints: ["Begusarai Railway Station", "Begusarai Bus Stand"],
    serviceAreas: ["Begusarai", "Barauni", "Teghra"],
  },
  bettiah: {
    pickupPoints: ["Bettiah Railway Station", "Bettiah Bus Stand"],
    serviceAreas: ["Bettiah", "Chanpatia", "Narkatiaganj"],
  },
  buxar: {
    pickupPoints: ["Buxar Railway Station", "Buxar Bus Stand"],
    serviceAreas: ["Buxar", "Dumraon", "Chausa"],
  },
  chhapra: {
    pickupPoints: ["Chhapra Junction", "Chhapra Bus Stand"],
    serviceAreas: ["Chhapra", "Revelganj", "Manjhi"],
  },
  darbhanga: {
    pickupPoints: ["Darbhanga Junction", "Darbhanga Bus Stand"],
    serviceAreas: ["Darbhanga", "Laheriasarai", "Benipur"],
  },
  dehri: {
    pickupPoints: ["Dehri-on-Sone Railway Station", "Dehri Bus Stand"],
    serviceAreas: ["Dehri", "Dalmianagar", "Sasaram"],
  },
  dumraon: {
    pickupPoints: ["Dumraon Railway Station", "Dumraon Bus Stand"],
    serviceAreas: ["Dumraon", "Buxar", "Brahmpur"],
  },
  gopalganj: {
    pickupPoints: ["Gopalganj Bus Stand", "Thawe Junction"],
    serviceAreas: ["Gopalganj", "Thawe", "Mirganj"],
  },
  jamui: {
    pickupPoints: ["Jamui Railway Station", "Jamui Bus Stand"],
    serviceAreas: ["Jamui", "Jhajha", "Sikandra"],
  },
  jehanabad: {
    pickupPoints: ["Jehanabad Railway Station", "Jehanabad Bus Stand"],
    serviceAreas: ["Jehanabad", "Makhdumpur", "Ghosi"],
  },
  katihar: {
    pickupPoints: ["Katihar Junction", "Katihar Bus Stand"],
    serviceAreas: ["Katihar", "Manihari", "Barsoi"],
  },
  kishanganj: {
    pickupPoints: ["Kishanganj Railway Station", "Kishanganj Bus Stand"],
    serviceAreas: ["Kishanganj", "Thakurganj", "Bahadurganj"],
  },
  lakhisarai: {
    pickupPoints: ["Lakhisarai Junction", "Lakhisarai Bus Stand"],
    serviceAreas: ["Lakhisarai", "Barahiya", "Surajgarha"],
  },
  madhubani: {
    pickupPoints: ["Madhubani Railway Station", "Madhubani Bus Stand"],
    serviceAreas: ["Madhubani", "Jhanjharpur", "Benipatti"],
  },
  munger: {
    pickupPoints: ["Jamalpur Junction", "Munger Bus Stand"],
    serviceAreas: ["Munger", "Jamalpur", "Bariarpur"],
  },
  muzaffarpur: {
    pickupPoints: ["Muzaffarpur Junction", "Muzaffarpur Bus Stand"],
    serviceAreas: ["Muzaffarpur", "Motipur", "Kanti"],
  },
  nawada: {
    pickupPoints: ["Nawada Railway Station", "Nawada Bus Stand"],
    serviceAreas: ["Nawada", "Warisaliganj", "Rajauli"],
  },
  purnia: {
    pickupPoints: ["Purnia Junction", "Purnia Bus Stand"],
    serviceAreas: ["Purnia", "Kasba", "Banmankhi"],
  },
  samastipur: {
    pickupPoints: ["Samastipur Junction", "Samastipur Bus Stand"],
    serviceAreas: ["Samastipur", "Dalsinghsarai", "Rosera"],
  },
  sasaram: {
    pickupPoints: ["Sasaram Railway Station", "Sasaram Bus Stand"],
    serviceAreas: ["Sasaram", "Dehri", "Chenari"],
  },
  siwan: {
    pickupPoints: ["Siwan Junction", "Siwan Bus Stand"],
    serviceAreas: ["Siwan", "Mairwa", "Maharajganj"],
  },
  sitamarhi: {
    pickupPoints: ["Sitamarhi Railway Station", "Sitamarhi Bus Stand"],
    serviceAreas: ["Sitamarhi", "Bairgania", "Pupri"],
  },

  bokaro: {
    pickupPoints: ["Bokaro Steel City Railway Station", "Chas Bus Stand"],
    serviceAreas: ["Bokaro", "Chas", "Bermo"],
  },
  chaibasa: {
    pickupPoints: ["Chaibasa Bus Stand", "Chaibasa Town Centre"],
    serviceAreas: ["Chaibasa", "Chakradharpur", "Noamundi"],
  },
  deoghar: {
    pickupPoints: [
      "Jasidih Junction",
      "Deoghar Bus Stand",
      "Baba Baidyanath Temple Area",
    ],
    serviceAreas: ["Deoghar", "Jasidih", "Madhupur"],
  },
  dumka: {
    pickupPoints: ["Dumka Railway Station", "Dumka Bus Stand"],
    serviceAreas: ["Dumka", "Basukinath", "Shikaripara"],
  },
  giridih: {
    pickupPoints: ["Giridih Railway Station", "Giridih Bus Stand"],
    serviceAreas: ["Giridih", "Madhuban", "Bagodar"],
  },
  godda: {
    pickupPoints: ["Godda Bus Stand", "Godda Town Centre"],
    serviceAreas: ["Godda", "Mahagama", "Pathargama"],
  },
  gumla: {
    pickupPoints: ["Gumla Bus Stand", "Gumla Town Centre"],
    serviceAreas: ["Gumla", "Sisai", "Bishunpur"],
  },
  hazaribagh: {
    pickupPoints: ["Hazaribagh Road Railway Station", "Hazaribagh Bus Stand"],
    serviceAreas: ["Hazaribagh", "Barhi", "Ramgarh"],
  },
  jamtara: {
    pickupPoints: ["Jamtara Railway Station", "Jamtara Bus Stand"],
    serviceAreas: ["Jamtara", "Mihijam", "Karmatand"],
  },
  khunti: {
    pickupPoints: ["Khunti Bus Stand", "Khunti Town Centre"],
    serviceAreas: ["Khunti", "Murhu", "Torpa"],
  },
  latehar: {
    pickupPoints: ["Latehar Railway Station", "Latehar Bus Stand"],
    serviceAreas: ["Latehar", "Chandwa", "Balumath"],
  },
  lohardaga: {
    pickupPoints: ["Lohardaga Railway Station", "Lohardaga Bus Stand"],
    serviceAreas: ["Lohardaga", "Kisko", "Senha"],
  },
  pakur: {
    pickupPoints: ["Pakur Railway Station", "Pakur Bus Stand"],
    serviceAreas: ["Pakur", "Hiranpur", "Maheshpur"],
  },
  palamu: {
    pickupPoints: ["Daltonganj Railway Station", "Medininagar Bus Stand"],
    serviceAreas: ["Palamu", "Medininagar", "Chainpur"],
  },
  ramgarh: {
    pickupPoints: ["Ramgarh Cantt Railway Station", "Ramgarh Bus Stand"],
    serviceAreas: ["Ramgarh", "Patratu", "Bhurkunda"],
  },
  sahebganj: {
    pickupPoints: ["Sahibganj Railway Station", "Sahibganj Bus Stand"],
    serviceAreas: ["Sahibganj", "Rajmahal", "Barharwa"],
  },
  saraikela: {
    pickupPoints: ["Seraikela Bus Stand", "Adityapur Railway Station"],
    serviceAreas: ["Saraikela", "Adityapur", "Gamharia"],
  },
  simdega: {
    pickupPoints: ["Simdega Bus Stand", "Simdega Town Centre"],
    serviceAreas: ["Simdega", "Kolebira", "Bano"],
  },
  "west-singhbhum": {
    pickupPoints: ["Chaibasa Bus Stand", "Chakradharpur Railway Station"],
    serviceAreas: ["West Singhbhum", "Chaibasa", "Chakradharpur"],
  },

  balangir: {
    pickupPoints: ["Balangir Railway Station", "Balangir Bus Stand"],
    serviceAreas: ["Balangir", "Titilagarh", "Patnagarh"],
  },
  balasore: {
    pickupPoints: ["Balasore Railway Station", "Balasore Bus Stand"],
    serviceAreas: ["Balasore", "Chandipur", "Nilagiri"],
  },
  baripada: {
    pickupPoints: ["Baripada Railway Station", "Baripada Bus Stand"],
    serviceAreas: ["Baripada", "Betnoti", "Rairangpur"],
  },
  bhadrak: {
    pickupPoints: ["Bhadrak Railway Station", "Bhadrak Bus Stand"],
    serviceAreas: ["Bhadrak", "Dhamnagar", "Chandbali"],
  },
  bhawanipatna: {
    pickupPoints: ["Bhawanipatna Bus Stand", "Bhawanipatna Town Centre"],
    serviceAreas: ["Bhawanipatna", "Kesinga", "Junagarh"],
  },
  bolangir: {
    pickupPoints: ["Balangir Railway Station", "Balangir Bus Stand"],
    serviceAreas: ["Bolangir", "Titilagarh", "Patnagarh"],
  },
  boudh: {
    pickupPoints: ["Boudh Bus Stand", "Boudh Town Centre"],
    serviceAreas: ["Boudh", "Kantamal", "Harabhanga"],
  },
  dhenkanal: {
    pickupPoints: ["Dhenkanal Railway Station", "Dhenkanal Bus Stand"],
    serviceAreas: ["Dhenkanal", "Kamakhyanagar", "Hindol"],
  },
  ganjam: {
    pickupPoints: ["Brahmapur Railway Station", "Chhatrapur Bus Stand"],
    serviceAreas: ["Ganjam", "Chhatrapur", "Gopalpur"],
  },
  jagatsinghpur: {
    pickupPoints: ["Jagatsinghpur Bus Stand", "Paradip Railway Station"],
    serviceAreas: ["Jagatsinghpur", "Paradip", "Kujang"],
  },
  jajpur: {
    pickupPoints: [
      "Jajpur Keonjhar Road Railway Station",
      "Jajpur Town Bus Stand",
    ],
    serviceAreas: ["Jajpur", "Jajpur Road", "Vyasanagar"],
  },
  kalahandi: {
    pickupPoints: ["Bhawanipatna Bus Stand", "Kesinga Railway Station"],
    serviceAreas: ["Kalahandi", "Bhawanipatna", "Junagarh"],
  },
  kandhamal: {
    pickupPoints: ["Phulbani Bus Stand", "Phulbani Town Centre"],
    serviceAreas: ["Kandhamal", "Phulbani", "Daringbadi"],
  },
  kendrapara: {
    pickupPoints: ["Kendrapara Bus Stand", "Kendrapara Town Centre"],
    serviceAreas: ["Kendrapara", "Pattamundai", "Rajnagar"],
  },
  keonjhar: {
    pickupPoints: ["Keonjhar Railway Station", "Keonjhar Bus Stand"],
    serviceAreas: ["Keonjhar", "Anandapur", "Champua"],
  },
  koraput: {
    pickupPoints: ["Koraput Railway Station", "Koraput Bus Stand"],
    serviceAreas: ["Koraput", "Jeypore", "Sunabeda"],
  },
  malkangiri: {
    pickupPoints: ["Malkangiri Bus Stand", "Malkangiri Town Centre"],
    serviceAreas: ["Malkangiri", "Kalimela", "Mathili"],
  },
  mayurbhanj: {
    pickupPoints: ["Baripada Railway Station", "Baripada Bus Stand"],
    serviceAreas: ["Mayurbhanj", "Baripada", "Similipal"],
  },
  nabarangpur: {
    pickupPoints: ["Nabarangpur Bus Stand", "Nabarangpur Town Centre"],
    serviceAreas: ["Nabarangpur", "Umerkote", "Raighar"],
  },
  nayagarh: {
    pickupPoints: ["Nayagarh Town Railway Station", "Nayagarh Bus Stand"],
    serviceAreas: ["Nayagarh", "Khandapada", "Ranpur"],
  },
  nuapada: {
    pickupPoints: ["Nuapada Bus Stand", "Khariar Bus Stand"],
    serviceAreas: ["Nuapada", "Khariar", "Komna"],
  },
  puri: {
    pickupPoints: [
      "Puri Railway Station",
      "Puri Bus Stand",
      "Jagannath Temple Area",
    ],
    serviceAreas: ["Puri", "Konark", "Brahmagiri"],
  },
  rayagada: {
    pickupPoints: ["Rayagada Railway Station", "Rayagada Bus Stand"],
    serviceAreas: ["Rayagada", "Gunupur", "Muniguda"],
  },
  sambalpur: {
    pickupPoints: ["Sambalpur Junction", "Sambalpur Bus Stand"],
    serviceAreas: ["Sambalpur", "Burla", "Hirakud"],
  },
  subarnapur: {
    pickupPoints: ["Sonepur Bus Stand", "Sonepur Town Centre"],
    serviceAreas: ["Subarnapur", "Sonepur", "Birmaharajpur"],
  },
  sundargarh: {
    pickupPoints: ["Sundargarh Bus Stand", "Rourkela Railway Station"],
    serviceAreas: ["Sundargarh", "Rajgangpur", "Biramitrapur"],
  },

  barpeta: {
    pickupPoints: ["Barpeta Road Railway Station", "Barpeta Bus Stand"],
    serviceAreas: ["Barpeta", "Barpeta Road", "Howly"],
  },
  bongaigaon: {
    pickupPoints: ["New Bongaigaon Junction", "Bongaigaon Bus Stand"],
    serviceAreas: ["Bongaigaon", "Abhayapuri", "Bijni"],
  },
  dhubri: {
    pickupPoints: ["Dhubri Railway Station", "Dhubri Bus Stand"],
    serviceAreas: ["Dhubri", "Gauripur", "Bilasipara"],
  },
  dibrugarh: {
    pickupPoints: ["Dibrugarh Town Railway Station", "Dibrugarh Airport"],
    serviceAreas: ["Dibrugarh", "Moran", "Naharkatia"],
  },
  goalpara: {
    pickupPoints: ["Goalpara Town Railway Station", "Goalpara Bus Stand"],
    serviceAreas: ["Goalpara", "Dudhnoi", "Lakhipur"],
  },
  golaghat: {
    pickupPoints: ["Golaghat Railway Station", "Golaghat Bus Stand"],
    serviceAreas: ["Golaghat", "Bokakhat", "Kaziranga"],
  },
  haflong: {
    pickupPoints: ["Haflong Railway Station", "Haflong Bus Stand"],
    serviceAreas: ["Haflong", "Maibang", "Umrangso"],
  },
  hailakandi: {
    pickupPoints: ["Hailakandi Railway Station", "Hailakandi Bus Stand"],
    serviceAreas: ["Hailakandi", "Lala", "Katlicherra"],
  },
  jorhat: {
    pickupPoints: ["Jorhat Town Railway Station", "Jorhat ASTC Bus Stand"],
    serviceAreas: ["Jorhat", "Mariani", "Titabor"],
  },
  karimganj: {
    pickupPoints: ["Karimganj Railway Station", "Karimganj Bus Stand"],
    serviceAreas: ["Karimganj", "Badarpur", "Patharkandi"],
  },
  kokrajhar: {
    pickupPoints: ["Kokrajhar Railway Station", "Kokrajhar Bus Stand"],
    serviceAreas: ["Kokrajhar", "Gossaigaon", "Fakiragram"],
  },
  lakhimpur: {
    pickupPoints: [
      "North Lakhimpur Railway Station",
      "North Lakhimpur Bus Stand",
    ],
    serviceAreas: ["Lakhimpur", "North Lakhimpur", "Bihpuria"],
  },
  marigaon: {
    pickupPoints: ["Morigaon Bus Stand", "Morigaon Town Centre"],
    serviceAreas: ["Morigaon", "Jagiroad", "Laharighat"],
  },
  nagaon: {
    pickupPoints: ["Nagaon Railway Station", "Nagaon ASTC Bus Stand"],
    serviceAreas: ["Nagaon", "Hojai", "Raha"],
  },
  nalbari: {
    pickupPoints: ["Nalbari Railway Station", "Nalbari Bus Stand"],
    serviceAreas: ["Nalbari", "Tihu", "Mukalmua"],
  },
  sibsagar: {
    pickupPoints: ["Sibsagar Town Railway Station", "Sivasagar Bus Stand"],
    serviceAreas: ["Sibsagar", "Nazira", "Sonari"],
  },
  sonitpur: {
    pickupPoints: ["Tezpur Railway Station", "Tezpur ASTC Bus Stand"],
    serviceAreas: ["Sonitpur", "Tezpur", "Dhekiajuli"],
  },
  tinsukia: {
    pickupPoints: ["Tinsukia Junction", "Tinsukia Bus Stand"],
    serviceAreas: ["Tinsukia", "Digboi", "Makum"],
  },
  udalguri: {
    pickupPoints: ["Udalguri Railway Station", "Udalguri Bus Stand"],
    serviceAreas: ["Udalguri", "Tangla", "Mazbat"],
  },

  shillong: {
    pickupPoints: ["Police Bazaar", "Shillong Bus Stand", "Umroi Airport"],
    serviceAreas: ["Shillong", "Mawlai", "Nongthymmai"],
  },
  tura: {
    pickupPoints: ["Tura Bus Stand", "Tura Town Centre"],
    serviceAreas: ["Tura", "Rongram", "Dalu"],
  },
  jowai: {
    pickupPoints: ["Jowai Bus Stand", "Jowai Town Centre"],
    serviceAreas: ["Jowai", "Amlarem", "Nartiang"],
  },
  nongstoin: {
    pickupPoints: ["Nongstoin Bus Stand", "Nongstoin Town Centre"],
    serviceAreas: ["Nongstoin", "Mairang", "Mawshynrut"],
  },
  williamnagar: {
    pickupPoints: ["Williamnagar Bus Stand", "Williamnagar Town Centre"],
    serviceAreas: ["Williamnagar", "Rongjeng", "Songsak"],
  },
  baghmara: {
    pickupPoints: ["Baghmara Bus Stand", "Baghmara Town Centre"],
    serviceAreas: ["Baghmara", "Chokpot", "Gasua"],
  },
  resubelpara: {
    pickupPoints: ["Resubelpara Bus Stand", "Resubelpara Town Centre"],
    serviceAreas: ["Resubelpara", "Mendipathar", "North Garo Hills"],
  },
  ampati: {
    pickupPoints: ["Ampati Bus Stand", "Ampati Town Centre"],
    serviceAreas: ["Ampati", "Mahendraganj", "South West Garo Hills"],
  },
  khliehriat: {
    pickupPoints: ["Khliehriat Bus Stand", "Khliehriat Town Centre"],
    serviceAreas: ["Khliehriat", "Sutnga", "East Jaintia Hills"],
  },
  mairang: {
    pickupPoints: ["Mairang Bus Stand", "Mairang Town Centre"],
    serviceAreas: ["Mairang", "Nongstoin", "Eastern West Khasi Hills"],
  },
  mawkyrwat: {
    pickupPoints: ["Mawkyrwat Bus Stand", "Mawkyrwat Town Centre"],
    serviceAreas: ["Mawkyrwat", "Ranikor", "South West Khasi Hills"],
  },
  nongpoh: {
    pickupPoints: ["Nongpoh Bus Stand", "Nongpoh Town Centre"],
    serviceAreas: ["Nongpoh", "Umsning", "Ri-Bhoi"],
  },
  rongram: {
    pickupPoints: ["Rongram Bus Stand", "Rongram Town Centre"],
    serviceAreas: ["Rongram", "Tura", "West Garo Hills"],
  },
  selsella: {
    pickupPoints: ["Selsella Bus Stand", "Selsella Town Centre"],
    serviceAreas: ["Selsella", "Phulbari", "West Garo Hills"],
  },
  shangpung: {
    pickupPoints: ["Shangpung Bus Stand", "Shangpung Town Centre"],
    serviceAreas: ["Shangpung", "Jowai", "West Jaintia Hills"],
  },
  thadlaskein: {
    pickupPoints: ["Thadlaskein Bus Stand", "Jowai Bus Stand"],
    serviceAreas: ["Thadlaskein", "Jowai", "West Jaintia Hills"],
  },

  imphal: {
    pickupPoints: [
      "Imphal Railway Station Area",
      "Imphal ISBT",
      "Imphal Airport",
    ],
    serviceAreas: ["Imphal", "Thoubal", "Bishnupur"],
  },
  thoubal: {
    pickupPoints: ["Thoubal Bus Stand", "Thoubal Market Area"],
    serviceAreas: ["Thoubal", "Kakching", "Imphal"],
  },
  bishnupur: {
    pickupPoints: ["Bishnupur Bus Stand", "Bishnupur Town Centre"],
    serviceAreas: ["Bishnupur", "Moirang", "Nambol"],
  },
  churachandpur: {
    pickupPoints: ["Churachandpur Bus Stand", "Lamka Town Centre"],
    serviceAreas: ["Churachandpur", "Lamka", "Tuibong"],
  },
  kakching: {
    pickupPoints: ["Kakching Bus Stand", "Kakching Market Area"],
    serviceAreas: ["Kakching", "Thoubal", "Wabagai"],
  },
  kangpokpi: {
    pickupPoints: ["Kangpokpi Bus Stand", "Kangpokpi Town Centre"],
    serviceAreas: ["Kangpokpi", "Sekmai", "Imphal"],
  },
  senapati: {
    pickupPoints: ["Senapati Bus Stand", "Senapati Town Centre"],
    serviceAreas: ["Senapati", "Mao", "Kangpokpi"],
  },
  tamenglong: {
    pickupPoints: ["Tamenglong Bus Stand", "Tamenglong Town Centre"],
    serviceAreas: ["Tamenglong", "Noney", "Tousem"],
  },
  ukhrul: {
    pickupPoints: ["Ukhrul Bus Stand", "Ukhrul Town Centre"],
    serviceAreas: ["Ukhrul", "Kamjong", "Phungyar"],
  },
  chandel: {
    pickupPoints: ["Chandel Bus Stand", "Chandel Town Centre"],
    serviceAreas: ["Chandel", "Moreh", "Tengnoupal"],
  },

  aizawl: {
    pickupPoints: ["Aizawl Bus Terminal", "Lengpui Airport", "Bawngkawn"],
    serviceAreas: ["Aizawl", "Sairang", "Kolasib"],
  },
  lunglei: {
    pickupPoints: ["Lunglei Bus Stand", "Lunglei Town Centre"],
    serviceAreas: ["Lunglei", "Hnahthial", "Tlabung"],
  },
  siaha: {
    pickupPoints: ["Siaha Bus Stand", "Siaha Town Centre"],
    serviceAreas: ["Siaha", "MADC Area", "Mizoram Southern Region"],
  },
  champhai: {
    pickupPoints: ["Champhai Bus Stand", "Champhai Town Centre"],
    serviceAreas: ["Champhai", "Zokhawthar", "Khawzawl"],
  },
  kolasib: {
    pickupPoints: ["Kolasib Bus Stand", "Kolasib Town Centre"],
    serviceAreas: ["Kolasib", "Vairengte", "Bilkhawthlir"],
  },
  lawngtlai: {
    pickupPoints: ["Lawngtlai Bus Stand", "Lawngtlai Town Centre"],
    serviceAreas: ["Lawngtlai", "Bungtlang", "Chawngte"],
  },
  mamit: {
    pickupPoints: ["Mamit Bus Stand", "Mamit Town Centre"],
    serviceAreas: ["Mamit", "Zawlnuam", "West Phaileng"],
  },
  saiha: {
    pickupPoints: ["Saiha Bus Stand", "Saiha Town Centre"],
    serviceAreas: ["Saiha", "Siaha", "Mizoram Southern Region"],
  },
  serchhip: {
    pickupPoints: ["Serchhip Bus Stand", "Serchhip Town Centre"],
    serviceAreas: ["Serchhip", "Thenzawl", "N.Vanlaiphai"],
  },

  kohima: {
    pickupPoints: ["Kohima Bus Station", "Kohima Town Centre"],
    serviceAreas: ["Kohima", "Kigwema", "Kezoma"],
  },
  dimapur: {
    pickupPoints: [
      "Dimapur Railway Station",
      "Dimapur Airport",
      "Dimapur Bus Stand",
    ],
    serviceAreas: ["Dimapur", "Chumoukedima", "Niuland"],
  },
  mokokchung: {
    pickupPoints: ["Mokokchung Bus Stand", "Mokokchung Town Centre"],
    serviceAreas: ["Mokokchung", "Tuli", "Changtongya"],
  },
  tuensang: {
    pickupPoints: ["Tuensang Bus Stand", "Tuensang Town Centre"],
    serviceAreas: ["Tuensang", "Longkhim", "Noklak"],
  },
  wokha: {
    pickupPoints: ["Wokha Bus Stand", "Wokha Town Centre"],
    serviceAreas: ["Wokha", "Bhandari", "Baghty"],
  },
  zunheboto: {
    pickupPoints: ["Zunheboto Bus Stand", "Zunheboto Town Centre"],
    serviceAreas: ["Zunheboto", "Akuluto", "Aghunato"],
  },
  phek: {
    pickupPoints: ["Phek Bus Stand", "Phek Town Centre"],
    serviceAreas: ["Phek", "Pfutsero", "Meluri"],
  },
  kiphire: {
    pickupPoints: ["Kiphire Bus Stand", "Kiphire Town Centre"],
    serviceAreas: ["Kiphire", "Pungro", "Seyochung"],
  },
  longleng: {
    pickupPoints: ["Longleng Bus Stand", "Longleng Town Centre"],
    serviceAreas: ["Longleng", "Tamlu", "Namsang"],
  },
  mon: {
    pickupPoints: ["Mon Bus Stand", "Mon Town Centre"],
    serviceAreas: ["Mon", "Tizit", "Aboi"],
  },
  peren: {
    pickupPoints: ["Peren Bus Stand", "Peren Town Centre"],
    serviceAreas: ["Peren", "Jalukie", "Tening"],
  },

  agartala: {
    pickupPoints: [
      "Agartala Railway Station",
      "Nagerjala Bus Stand",
      "Maharaja Bir Bikram Airport",
    ],
    serviceAreas: ["Agartala", "Jogendranagar", "Ranirbazar"],
  },
  dhalai: {
    pickupPoints: ["Ambassa Railway Station", "Ambassa Bus Stand"],
    serviceAreas: ["Dhalai", "Ambassa", "Kamalpur"],
  },
  gomati: {
    pickupPoints: ["Udaipur Railway Station", "Udaipur Bus Stand"],
    serviceAreas: ["Gomati", "Udaipur", "Amarpur"],
  },

  khowai: {
    pickupPoints: ["Khowai Bus Stand", "Khowai Town Centre"],
    serviceAreas: ["Khowai", "Teliamura", "West Tripura"],
  },
  "north-tripura": {
    pickupPoints: ["Dharmanagar Railway Station", "Dharmanagar Bus Stand"],
    serviceAreas: ["North Tripura", "Dharmanagar", "Kanchanpur"],
  },
  sepahijala: {
    pickupPoints: ["Bishramganj Bus Stand", "Sonamura Bus Stand"],
    serviceAreas: ["Sepahijala", "Bishramganj", "Sonamura"],
  },
  "south-tripura": {
    pickupPoints: ["Belonia Bus Stand", "Sabroom Bus Stand"],
    serviceAreas: ["South Tripura", "Belonia", "Sabroom"],
  },
  unakoti: {
    pickupPoints: ["Kumarghat Railway Station", "Kailashahar Bus Stand"],
    serviceAreas: ["Unakoti", "Kailashahar", "Kumarghat"],
  },
  "west-tripura": {
    pickupPoints: [
      "Agartala Railway Station",
      "Maharaja Bir Bikram Airport",
      "Nagerjala Bus Stand",
    ],
    serviceAreas: ["West Tripura", "Agartala", "Jirania"],
  },

  itanagar: {
    pickupPoints: ["Naharlagun Railway Station", "Itanagar Bus Terminal"],
    serviceAreas: ["Itanagar", "Naharlagun", "Nirjuli"],
  },
  tawang: {
    pickupPoints: ["Tawang Bus Stand", "Tawang Monastery Area"],
    serviceAreas: ["Tawang", "Jang", "Lumla"],
  },
  "west-kameng": {
    pickupPoints: ["Bomdila Bus Stand", "Bhalukpong Check Gate"],
    serviceAreas: ["West Kameng", "Bomdila", "Dirang"],
  },
  "east-kameng": {
    pickupPoints: ["Seppa Bus Stand", "Seppa Town Centre"],
    serviceAreas: ["East Kameng", "Seppa", "Chayang Tajo"],
  },
  "papum-pare": {
    pickupPoints: ["Naharlagun Railway Station", "Nirjuli Bus Stand"],
    serviceAreas: ["Papum Pare", "Naharlagun", "Doimukh"],
  },
  "kurung-kumey": {
    pickupPoints: ["Koloriang Bus Stand", "Koloriang Town Centre"],
    serviceAreas: ["Kurung Kumey", "Koloriang", "Nyapin"],
  },
  "kra-daadi": {
    pickupPoints: ["Taliha Road Junction", "Palin Town Centre"],
    serviceAreas: ["Kra Daadi", "Palin", "Tali"],
  },
  "lower-subansiri": {
    pickupPoints: ["Ziro Bus Stand", "Hapoli Market Area"],
    serviceAreas: ["Lower Subansiri", "Ziro", "Yachuli"],
  },
  "upper-subansiri": {
    pickupPoints: ["Daporijo Bus Stand", "Daporijo Town Centre"],
    serviceAreas: ["Upper Subansiri", "Daporijo", "Dumporijo"],
  },
  "west-siang": {
    pickupPoints: ["Aalo Bus Stand", "Aalo Town Centre"],
    serviceAreas: ["West Siang", "Aalo", "Kaying"],
  },
  "east-siang": {
    pickupPoints: ["Pasighat Bus Stand", "Pasighat Airport"],
    serviceAreas: ["East Siang", "Pasighat", "Ruksin"],
  },
  siang: {
    pickupPoints: ["Boleng Bus Stand", "Boleng Town Centre"],
    serviceAreas: ["Siang", "Boleng", "Pangin"],
  },
  "upper-siang": {
    pickupPoints: ["Yingkiong Bus Stand", "Yingkiong Town Centre"],
    serviceAreas: ["Upper Siang", "Yingkiong", "Mariyang"],
  },
  "lower-dibang-valley": {
    pickupPoints: ["Roing Bus Stand", "Roing Town Centre"],
    serviceAreas: ["Lower Dibang Valley", "Roing", "Dambuk"],
  },
  "dibang-valley": {
    pickupPoints: ["Anini Bus Stand", "Anini Town Centre"],
    serviceAreas: ["Dibang Valley", "Anini", "Etalin"],
  },
  "upper-dibang-valley": {
    pickupPoints: ["Anini Bus Stand", "Anini Town Centre"],
    serviceAreas: ["Upper Dibang Valley", "Anini", "Etalin"],
  },
  lohit: {
    pickupPoints: ["Tezu Airport", "Tezu Bus Stand"],
    serviceAreas: ["Lohit", "Tezu", "Wakro"],
  },
  changlang: {
    pickupPoints: ["Changlang Bus Stand", "Miao Bus Stand"],
    serviceAreas: ["Changlang", "Miao", "Jairampur"],
  },
  tirap: {
    pickupPoints: ["Khonsa Bus Stand", "Khonsa Town Centre"],
    serviceAreas: ["Tirap", "Khonsa", "Deomali"],
  },
  namsai: {
    pickupPoints: ["Namsai Bus Stand", "Namsai Golden Pagoda Area"],
    serviceAreas: ["Namsai", "Chowkham", "Mahadevpur"],
  },

  gangtok: {
    pickupPoints: ["Gangtok Taxi Stand", "Deorali Bus Stand"],
    serviceAreas: ["Gangtok", "Ranipool", "Rumtek"],
  },
  namchi: {
    pickupPoints: ["Namchi Bus Stand", "Namchi Town Centre"],
    serviceAreas: ["Namchi", "Jorethang", "Ravangla"],
  },
  gyalshing: {
    pickupPoints: ["Gyalshing Bus Stand", "Gyalshing Town Centre"],
    serviceAreas: ["Gyalshing", "Pelling", "Yuksom"],
  },
  melli: {
    pickupPoints: ["Melli Check Post", "Melli Bus Stand"],
    serviceAreas: ["Melli", "Jorethang", "Rangpo"],
  },
  rangpo: {
    pickupPoints: ["Rangpo Bus Stand", "Rangpo Check Post"],
    serviceAreas: ["Rangpo", "Singtam", "Melli"],
  },
  singtam: {
    pickupPoints: ["Singtam Bus Stand", "Singtam Town Centre"],
    serviceAreas: ["Singtam", "Rangpo", "Pakyong"],
  },
  jorthang: {
    pickupPoints: ["Jorethang Bus Stand", "Jorethang Town Centre"],
    serviceAreas: ["Jorethang", "Namchi", "Melli"],
  },
  ravangla: {
    pickupPoints: ["Ravangla Bus Stand", "Ravangla Buddha Park"],
    serviceAreas: ["Ravangla", "Namchi", "Borong"],
  },
  soreng: {
    pickupPoints: ["Soreng Bus Stand", "Soreng Town Centre"],
    serviceAreas: ["Soreng", "Rinchenpong", "Kaluk"],
  },
  yuksom: {
    pickupPoints: ["Yuksom Bus Stand", "Yuksom Heritage Area"],
    serviceAreas: ["Yuksom", "Gyalshing", "Pelling"],
  },

  "agar-malwa": {
    pickupPoints: ["Agar Malwa Bus Stand", "Agar Town Centre"],
    serviceAreas: ["Agar Malwa", "Susner", "Nalkheda"],
  },
  alirajpur: {
    pickupPoints: ["Alirajpur Bus Stand", "Alirajpur Town Centre"],
    serviceAreas: ["Alirajpur", "Jobat", "Bhabra"],
  },
  anuppur: {
    pickupPoints: ["Anuppur Railway Station", "Anuppur Bus Stand"],
    serviceAreas: ["Anuppur", "Amarkantak", "Kotma"],
  },
  ashoknagar: {
    pickupPoints: ["Ashoknagar Railway Station", "Ashoknagar Bus Stand"],
    serviceAreas: ["Ashoknagar", "Chanderi", "Isagarh"],
  },
  balaghat: {
    pickupPoints: ["Balaghat Railway Station", "Balaghat Bus Stand"],
    serviceAreas: ["Balaghat", "Waraseoni", "Lanji"],
  },
  betul: {
    pickupPoints: ["Betul Railway Station", "Betul Bus Stand"],
    serviceAreas: ["Betul", "Multai", "Amla"],
  },
  bhind: {
    pickupPoints: ["Bhind Railway Station", "Bhind Bus Stand"],
    serviceAreas: ["Bhind", "Gohad", "Lahar"],
  },
  chhatarpur: {
    pickupPoints: ["Chhatarpur Bus Stand", "Chhatarpur Town Centre"],
    serviceAreas: ["Chhatarpur", "Khajuraho", "Nowgong"],
  },
  damoh: {
    pickupPoints: ["Damoh Railway Station", "Damoh Bus Stand"],
    serviceAreas: ["Damoh", "Patharia", "Hatta"],
  },
  datia: {
    pickupPoints: [
      "Datia Railway Station",
      "Datia Bus Stand",
      "Pitambara Peeth Area",
    ],
    serviceAreas: ["Datia", "Seondha", "Bhander"],
  },
  dewas: {
    pickupPoints: ["Dewas Railway Station", "Dewas Bus Stand"],
    serviceAreas: ["Dewas", "Sonkatch", "Hatpipliya"],
  },
  dhar: {
    pickupPoints: ["Dhar Bus Stand", "Dhar Fort Area"],
    serviceAreas: ["Dhar", "Pithampur", "Mandav"],
  },
  dindori: {
    pickupPoints: ["Dindori Bus Stand", "Dindori Town Centre"],
    serviceAreas: ["Dindori", "Shahpura", "Mandla"],
  },
  guna: {
    pickupPoints: ["Guna Railway Station", "Guna Bus Stand"],
    serviceAreas: ["Guna", "Raghogarh", "Chachaura"],
  },
  harda: {
    pickupPoints: ["Harda Railway Station", "Harda Bus Stand"],
    serviceAreas: ["Harda", "Timarni", "Khirkiya"],
  },
  indore: {
    pickupPoints: [
      "Indore Junction",
      "Sarwate Bus Stand",
      "Devi Ahilya Bai Holkar Airport",
    ],
    serviceAreas: ["Indore", "Mhow", "Sanwer"],
  },
  jhabua: {
    pickupPoints: ["Jhabua Bus Stand", "Jhabua Town Centre"],
    serviceAreas: ["Jhabua", "Thandla", "Petlawad"],
  },
  katni: {
    pickupPoints: ["Katni Junction", "Katni Murwara Railway Station"],
    serviceAreas: ["Katni", "Vijayraghavgarh", "Barhi"],
  },
  khandwa: {
    pickupPoints: ["Khandwa Junction", "Khandwa Bus Stand"],
    serviceAreas: ["Khandwa", "Omkareshwar", "Pandhana"],
  },
  mandla: {
    pickupPoints: ["Mandla Bus Stand", "Mandla Town Centre"],
    serviceAreas: ["Mandla", "Kanha National Park", "Nainpur"],
  },
  morena: {
    pickupPoints: ["Morena Railway Station", "Morena Bus Stand"],
    serviceAreas: ["Morena", "Ambah", "Porsa"],
  },
  narsinghpur: {
    pickupPoints: ["Narsinghpur Railway Station", "Narsinghpur Bus Stand"],
    serviceAreas: ["Narsinghpur", "Gadarwara", "Kareli"],
  },
  neemuch: {
    pickupPoints: ["Neemuch Railway Station", "Neemuch Bus Stand"],
    serviceAreas: ["Neemuch", "Manasa", "Jawad"],
  },
  panna: {
    pickupPoints: ["Panna Bus Stand", "Panna Town Centre"],
    serviceAreas: ["Panna", "Ajaigarh", "Panna National Park"],
  },
  raisen: {
    pickupPoints: ["Raisen Bus Stand", "Raisen Fort Area"],
    serviceAreas: ["Raisen", "Sanchi", "Gairatganj"],
  },
  rajgarh: {
    pickupPoints: ["Rajgarh Bus Stand", "Biaora Bus Stand"],
    serviceAreas: ["Rajgarh", "Biaora", "Narsinghgarh"],
  },
  ratlam: {
    pickupPoints: ["Ratlam Junction", "Ratlam Bus Stand"],
    serviceAreas: ["Ratlam", "Jaora", "Sailana"],
  },
  rewa: {
    pickupPoints: ["Rewa Railway Station", "Rewa Bus Stand"],
    serviceAreas: ["Rewa", "Mauganj", "Teonthar"],
  },
  sagar: {
    pickupPoints: ["Sagar Railway Station", "Sagar Bus Stand"],
    serviceAreas: ["Sagar", "Rahatgarh", "Bina"],
  },
  sehore: {
    pickupPoints: ["Sehore Railway Station", "Sehore Bus Stand"],
    serviceAreas: ["Sehore", "Ashta", "Bilkisganj"],
  },
  seoni: {
    pickupPoints: ["Seoni Bus Stand", "Seoni Town Centre"],
    serviceAreas: ["Seoni", "Lakhnadon", "Pench National Park"],
  },
  shahdol: {
    pickupPoints: ["Shahdol Railway Station", "Shahdol Bus Stand"],
    serviceAreas: ["Shahdol", "Burhar", "Jaisinghnagar"],
  },
  shajapur: {
    pickupPoints: ["Shajapur Bus Stand", "Shajapur Town Centre"],
    serviceAreas: ["Shajapur", "Shujalpur", "Akodia"],
  },
  sheopur: {
    pickupPoints: ["Sheopur Railway Station", "Sheopur Bus Stand"],
    serviceAreas: ["Sheopur", "Vijaypur", "Kuno National Park"],
  },
  shivpuri: {
    pickupPoints: ["Shivpuri Bus Stand", "Shivpuri Town Centre"],
    serviceAreas: ["Shivpuri", "Pohri", "Karera"],
  },
  sidhi: {
    pickupPoints: ["Sidhi Bus Stand", "Sidhi Town Centre"],
    serviceAreas: ["Sidhi", "Churhat", "Rampur Naikin"],
  },
  singrauli: {
    pickupPoints: ["Singrauli Railway Station", "Waidhan Bus Stand"],
    serviceAreas: ["Singrauli", "Waidhan", "Morar"],
  },
  tikamgarh: {
    pickupPoints: ["Tikamgarh Bus Stand", "Tikamgarh Town Centre"],
    serviceAreas: ["Tikamgarh", "Jatara", "Orchha"],
  },
  ujjain: {
    pickupPoints: [
      "Ujjain Junction",
      "Ujjain Bus Stand",
      "Mahakaleshwar Temple Area",
    ],
    serviceAreas: ["Ujjain", "Mahidpur", "Nagda"],
  },
  umaria: {
    pickupPoints: ["Umaria Railway Station", "Umaria Bus Stand"],
    serviceAreas: ["Umaria", "Bandhavgarh National Park", "Pali"],
  },
  vidisha: {
    pickupPoints: ["Vidisha Railway Station", "Vidisha Bus Stand"],
    serviceAreas: ["Vidisha", "Sanchi", "Ganj Basoda"],
  },

  balod: {
    pickupPoints: ["Balod Railway Station", "Balod Bus Stand"],
    serviceAreas: ["Balod", "Dondi", "Gurur"],
  },
  "baloda-bazar": {
    pickupPoints: ["Baloda Bazar Bus Stand", "Baloda Bazar Town Centre"],
    serviceAreas: ["Baloda Bazar", "Bhatapara", "Kasdol"],
  },
  balrampur: {
    pickupPoints: ["Balrampur Bus Stand", "Ramanujganj Bus Stand"],
    serviceAreas: ["Balrampur", "Ramanujganj", "Wadrafnagar"],
  },
  bastar: {
    pickupPoints: ["Jagdalpur Railway Station", "Jagdalpur Bus Stand"],
    serviceAreas: ["Bastar", "Jagdalpur", "Chitrakote"],
  },
  bemetara: {
    pickupPoints: ["Bemetara Bus Stand", "Bemetara Town Centre"],
    serviceAreas: ["Bemetara", "Saja", "Nawagarh"],
  },
  bijapur: {
    pickupPoints: ["Bijapur Bus Stand", "Bijapur Town Centre"],
    serviceAreas: ["Bijapur", "Bhairamgarh", "Bhopalpatnam"],
  },
  dantewada: {
    pickupPoints: ["Dantewada Bus Stand", "Dantewada Temple Area"],
    serviceAreas: ["Dantewada", "Geedam", "Barsur"],
  },
  dhamtari: {
    pickupPoints: ["Dhamtari Bus Stand", "Dhamtari Town Centre"],
    serviceAreas: ["Dhamtari", "Kurud", "Nagri"],
  },
  durg: {
    pickupPoints: [
      "Durg Railway Station",
      "Durg Bus Stand",
      "Bhilai Power House Station",
    ],
    serviceAreas: ["Durg", "Bhilai", "Risali"],
  },
  gariaband: {
    pickupPoints: ["Gariaband Bus Stand", "Rajim Bus Stand"],
    serviceAreas: ["Gariaband", "Rajim", "Deobhog"],
  },
  "janjgir-champa": {
    pickupPoints: ["Janjgir Naila Railway Station", "Champa Railway Station"],
    serviceAreas: ["Janjgir-Champa", "Janjgir", "Champa"],
  },
  jashpur: {
    pickupPoints: ["Jashpur Nagar Bus Stand", "Pathalgaon Bus Stand"],
    serviceAreas: ["Jashpur", "Jashpur Nagar", "Kunkuri"],
  },
  kabirdham: {
    pickupPoints: ["Kawardha Bus Stand", "Kawardha Town Centre"],
    serviceAreas: ["Kabirdham", "Kawardha", "Pandariya"],
  },
  kanker: {
    pickupPoints: ["Kanker Bus Stand", "Kanker Town Centre"],
    serviceAreas: ["Kanker", "Charama", "Antagarh"],
  },
  kondagaon: {
    pickupPoints: ["Kondagaon Bus Stand", "Kondagaon Town Centre"],
    serviceAreas: ["Kondagaon", "Makdi", "Bade Rajpur"],
  },
  korba: {
    pickupPoints: ["Korba Railway Station", "Korba Bus Stand"],
    serviceAreas: ["Korba", "Katghora", "Dipka"],
  },
  korea: {
    pickupPoints: ["Baikunthpur Bus Stand", "Chirmiri Railway Station"],
    serviceAreas: ["Korea", "Baikunthpur", "Chirmiri"],
  },
  mahasamund: {
    pickupPoints: ["Mahasamund Railway Station", "Mahasamund Bus Stand"],
    serviceAreas: ["Mahasamund", "Bagbahara", "Pithora"],
  },
  mungeli: {
    pickupPoints: ["Mungeli Bus Stand", "Mungeli Town Centre"],
    serviceAreas: ["Mungeli", "Lormi", "Patharia"],
  },
  narayanpur: {
    pickupPoints: ["Narayanpur Bus Stand", "Narayanpur Town Centre"],
    serviceAreas: ["Narayanpur", "Orchha", "Chhote Dongar"],
  },
  rajnandgaon: {
    pickupPoints: ["Rajnandgaon Railway Station", "Rajnandgaon Bus Stand"],
    serviceAreas: ["Rajnandgaon", "Dongargarh", "Khairagarh"],
  },
  sukma: {
    pickupPoints: ["Sukma Bus Stand", "Sukma Town Centre"],
    serviceAreas: ["Sukma", "Konta", "Chhindgarh"],
  },
  surajpur: {
    pickupPoints: ["Surajpur Bus Stand", "Surajpur Town Centre"],
    serviceAreas: ["Surajpur", "Bhatgaon", "Pratappur"],
  },
  surguja: {
    pickupPoints: ["Ambikapur Railway Station", "Ambikapur Bus Stand"],
    serviceAreas: ["Surguja", "Ambikapur", "Sitapur"],
  },
};
