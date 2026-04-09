interface CityGuide {
  overview: string;
  detailedDescription: string;
  keyAttractions: {
    title: string;
    items: string[];
    bgColor?: string;
    textColor?: string;
  };
  significance: {
    title: string;
    items: string[];
    bgColor?: string;
    textColor?: string;
  };
  bestTimeToVisit: string;
  idealDuration: string;
  localFood: string[];
  festivals: string[];
  travelTips: string[];
}

export const CITY_GUIDES: Record<string, CityGuide> = {
  Ayodhya: {
    overview:
      "Ayodhya, the birthplace of Lord Ram, is one of the most sacred cities in Hinduism. Situated on the banks of the holy River Saryu, this ancient city holds immense spiritual significance as the capital of the Kosala Kingdom mentioned in the Ramayana.",
    detailedDescription:
      "With the magnificent Ram Mandir now complete, Ayodhya has emerged as a premier pilgrimage destination, attracting millions of devotees from across the globe. The city's spiritual aura, combined with its rich cultural heritage spanning over 5,000 years, makes it a must-visit destination for every devout Hindu and cultural enthusiast.",
    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Ram Mandir (Shri Ram Janmabhoomi)",
        "Hanuman Garhi",
        "Kanak Bhawan",
        "Saryu River Ghats",
        "Ram Katha Park",
        "Ram Path & Bhakti Path",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: [
        "Birthplace of Lord Ram",
        "7th Sacred City (Sapta Puri)",
        "Ram Navami celebrations",
        "Deepotsav festival",
        "One of 108 Divya Desams",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March (Pleasant weather, 10-25°C)",
    idealDuration: "2-3 days for complete pilgrimage",
    localFood: [
      "Ram Laddoo near Hanuman Garhi",
      "Traditional Kachori Sabzi",
      "Jalebi",
      "Pedas from local sweet shops",
    ],
    festivals: [
      "Ram Navami (March/April)",
      "Deepotsav (October/November)",
      "Shravan Month (July/August)",
    ],
    travelTips: [
      "Book 2-3 days in advance",
      "Start early morning (5-6 AM)",
      "Carry water bottles",
      "Wear comfortable footwear",
    ],
  },
  Varanasi: {
    overview:
      "Varanasi is one of the oldest living cities in the world and a major spiritual hub of India.",
    detailedDescription:
      "Famous for its ghats, temples, and Ganga Aarti, Varanasi attracts pilgrims seeking spiritual salvation.",
    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Kashi Vishwanath Temple",
        "Dashashwamedh Ghat",
        "Assi Ghat",
        "Sarnath",
        "Manikarnika Ghat",
      ],
      bgColor: "bg-purple-50",
      textColor: "text-purple-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: [
        "Oldest living city",
        "Kashi Vishwanath Jyotirlinga",
        "Moksha belief",
        "Ganga Aarti",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "2-3 days",
    localFood: ["Kachori", "Banarasi Paan", "Lassi", "Malaiyyo"],
    festivals: ["Dev Deepawali", "Mahashivratri"],
    travelTips: ["Attend Ganga Aarti", "Visit early morning ghats"],
  },
  Prayagraj: {
    overview:
      "Prayagraj is famous for the Triveni Sangam, where three sacred rivers meet.",
    detailedDescription:
      "It is one of the most important pilgrimage destinations, hosting the grand Kumbh Mela.",
    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Triveni Sangam",
        "Allahabad Fort",
        "Anand Bhavan",
        "Kumbh Mela Site",
      ],
      bgColor: "bg-blue-50",
      textColor: "text-blue-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Meeting of three rivers", "Kumbh Mela", "Holy bathing place"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "November-March",
    idealDuration: "1-2 days",
    localFood: ["Kachori", "Chaat", "Jalebi"],
    festivals: ["Kumbh Mela", "Magh Mela"],
    travelTips: ["Boat ride at Sangam", "Visit early morning"],
  },
  Lucknow: {
    overview:
      "Lucknow, the City of Nawabs, is known for its culture, cuisine, and heritage.",
    detailedDescription:
      "It is famous for Mughal architecture, Awadhi cuisine, and refined etiquette (Tehzeeb).",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Bara Imambara", "Chota Imambara", "Rumi Darwaza", "Residency"],
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-800",
    },
    significance: {
      title: "Cultural Significance",
      items: ["Mughal heritage", "Awadhi cuisine", "Urdu poetry"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "2 days",
    localFood: ["Tunday Kabab", "Biryani", "Kebabs"],
    festivals: ["Lucknow Mahotsav"],
    travelTips: ["Explore old city", "Try street food"],
  },
  "Bodh Gaya": {
    overview:
      "Bodh Gaya is one of the most important Buddhist pilgrimage sites in the world, located in Bihar, where Lord Buddha attained enlightenment under the Bodhi Tree.",
    detailedDescription:
      "This sacred city attracts millions of pilgrims and travelers seeking peace and spirituality. It is home to the Mahabodhi Temple Complex, a UNESCO World Heritage Site, and numerous monasteries built by different countries.",
    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Mahabodhi Temple",
        "Bodhi Tree",
        "Great Buddha Statue",
        "Thai Monastery",
        "Royal Bhutan Monastery",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: [
        "Place of Buddha’s enlightenment",
        "UNESCO World Heritage Site",
        "Major Buddhist pilgrimage center",
        "Global meditation hub",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Litti Chokha", "Bihari Thali", "Vegetarian Buddhist meals"],
    festivals: ["Buddha Purnima", "Monlam Prayer Festival"],
    travelTips: [
      "Maintain silence in temples",
      "Dress modestly",
      "Carry cash for small vendors",
    ],
  },
  Gorakhpur: {
    overview:
      "Gorakhpur is a major city in eastern Uttar Pradesh known for Gorakhnath Temple and spiritual importance.",
    detailedDescription:
      "The city is closely associated with Guru Gorakhnath and serves as an important pilgrimage and cultural hub.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Gorakhnath Temple", "Gita Press", "Ramgarh Tal Lake"],
      bgColor: "bg-orange-50",
      textColor: "text-orange-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Guru Gorakhnath’s birthplace", "Important Nath sect center"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Chaat", "Litti Chokha", "Samosa"],
    festivals: ["Maha Shivratri"],
    travelTips: ["Visit temple early morning"],
  },
  Ghazipur: {
    overview:
      "Ghazipur is a historic city in Uttar Pradesh known for its opium factory and rich Mughal-era heritage.",
    detailedDescription:
      "Located on the banks of the Ganges, Ghazipur is famous for its colonial-era structures and historical significance, including the Ghazipur Opium Factory, one of the oldest in the world.",
    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Ghazipur Opium Factory",
        "Lord Cornwallis Tomb",
        "Ganges Ghats",
        "Swami Sahajanand Park",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Historical Significance",
      items: [
        "British colonial history",
        "Ancient Ganga city",
        "Trade and industrial heritage",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Kachori", "Samosa", "Local sweets"],
    festivals: ["Ganga Dussehra", "Diwali"],
    travelTips: ["Visit early morning", "Explore ghats peacefully"],
  },
  Azamgarh: {
    overview:
      "Azamgarh is known for its cultural heritage, historical significance, and educational institutions in Uttar Pradesh.",
    detailedDescription:
      "This city has a rich literary and cultural background and is also known for its contribution to Urdu literature and education.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Dargah of Sheikh Abdul Qadir", "Kalikoh Temple", "Tamasa River"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Cultural Significance",
      items: [
        "Urdu literature hub",
        "Historical monuments",
        "Religious harmony",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Mughlai dishes", "Street food", "Sweets"],
    festivals: ["Eid", "Diwali"],
    travelTips: ["Explore local markets", "Respect local traditions"],
  },
  Jaunpur: {
    overview:
      "Jaunpur is a historical city known for its Sharqi dynasty monuments and Indo-Islamic architecture.",
    detailedDescription:
      "Often called the 'Shiraz of India', Jaunpur is famous for its beautiful mosques, forts, and ancient architectural style.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Atala Masjid", "Shahi Bridge", "Jama Masjid"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Historical Significance",
      items: [
        "Sharqi Dynasty capital",
        "Islamic architecture",
        "Medieval heritage",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Mutton dishes", "Local sweets"],
    festivals: ["Eid", "Holi"],
    travelTips: ["Hire a guide", "Explore monuments early"],
  },
  Mirzapur: {
    overview:
      "Mirzapur is known for its carpets, religious sites, and scenic views along the Ganges.",
    detailedDescription:
      "The city is famous for its hand-knotted carpets and nearby natural attractions like waterfalls and hills.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Vindhyachal Temple", "Sita Kund", "Tanda Falls"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Religious Significance",
      items: ["Shakti Peeth", "Vindhyavasini Devi temple", "Pilgrimage hub"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Kachori", "Street food", "Tea stalls"],
    festivals: ["Navratri", "Diwali"],
    travelTips: ["Visit temples early", "Carry comfortable shoes"],
  },
  Patna: {
    overview:
      "Patna is the capital of Bihar and one of the oldest continuously inhabited cities.",
    detailedDescription:
      "It has rich historical and cultural significance dating back to ancient India.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Golghar", "Patna Museum", "Takht Sri Patna Sahib"],
      bgColor: "bg-teal-50",
      textColor: "text-teal-800",
    },
    significance: {
      title: "Historical Significance",
      items: ["Ancient city (Pataliputra)", "Sikh pilgrimage site"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Litti Chokha", "Sattu Paratha"],
    festivals: ["Chhath Puja"],
    travelTips: ["Visit during Chhath Puja"],
  },
  Kanpur: {
    overview:
      "Kanpur is an industrial city in Uttar Pradesh known for its leather industry and historical significance.",
    detailedDescription:
      "It is one of the largest cities in India and has historical importance from the British era.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Allen Forest Zoo", "JK Temple", "Phool Bagh"],
      bgColor: "bg-blue-50",
      textColor: "text-blue-800",
    },
    significance: {
      title: "Historical Significance",
      items: ["British colonial history", "Industrial hub"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Samosa", "Kachori", "Chaat"],
    festivals: ["Diwali", "Holi"],
    travelTips: ["Explore local markets"],
  },
  Agra: {
    overview:
      "Agra is world-famous for the Taj Mahal, one of the Seven Wonders of the World.",
    detailedDescription:
      "A major tourist destination, Agra showcases Mughal architecture and historical monuments.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
      bgColor: "bg-pink-50",
      textColor: "text-pink-800",
    },
    significance: {
      title: "Historical Significance",
      items: ["Mughal capital", "UNESCO heritage sites"],
    },
    bestTimeToVisit: "October-March",
    idealDuration: "2 days",
    localFood: ["Petha", "Bedai", "Mughlai food"],
    festivals: ["Taj Mahotsav"],
    travelTips: ["Visit Taj Mahal at sunrise"],
  },
  Vindhyachal: {
    overview:
      "Vindhyachal is a sacred pilgrimage town dedicated to Goddess Vindhyavasini, one of the most revered Shakti Peeths.",
    detailedDescription:
      "Located near Mirzapur, it attracts lakhs of devotees throughout the year, especially during Navratri.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Vindhyavasini Temple", "Kali Khoh Temple", "Ashtabhuja Temple"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Shakti Peeth", "Navratri celebrations", "Powerful Devi temple"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Prasad", "Simple vegetarian meals"],
    festivals: ["Navratri"],
    travelTips: ["Expect heavy crowds during festivals"],
  },
  Kushinagar: {
    overview:
      "Kushinagar is a major Buddhist pilgrimage site where Lord Buddha attained Mahaparinirvana.",
    detailedDescription:
      "A peaceful town attracting Buddhist pilgrims worldwide.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Mahaparinirvana Temple", "Ramabhar Stupa"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    significance: {
      title: "Buddhist Significance",
      items: ["Buddha’s death place", "Pilgrimage site"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Simple meals"],
    festivals: ["Buddha Purnima"],
    travelTips: ["Visit monasteries"],
  },
  Sasaram: {
    overview:
      "Sasaram is famous for the grand Tomb of Sher Shah Suri and its historical importance.",
    detailedDescription:
      "This city showcases Indo-Islamic architecture and the legacy of Sher Shah Suri.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Sher Shah Suri Tomb", "Rohtasgarh Fort"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Historical Significance",
      items: ["Sher Shah Suri legacy", "Medieval architecture"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Bihari cuisine"],
    festivals: ["Diwali", "Holi"],
    travelTips: ["Explore early morning", "Hire local guide"],
  },
  Buxar: {
    overview:
      "Buxar is a historical city in Bihar with religious and cultural importance.",
    detailedDescription:
      "Known for its connection to Ramayana and historical battles.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Buxar Fort", "Ram Rekha Ghat"],
      bgColor: "bg-purple-50",
      textColor: "text-purple-800",
    },
    significance: {
      title: "Historical Significance",
      items: ["Ramayana link", "Battle of Buxar"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Litti Chokha"],
    festivals: ["Chhath Puja"],
    travelTips: ["Visit ghats"],
  },
  Ballia: {
    overview:
      "Ballia is a city known for its role in India’s freedom struggle and its cultural heritage.",
    detailedDescription:
      "Situated on the banks of the Ganga, Ballia has a strong historical and political importance.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Ganga Ghats", "Local temples"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Historical Significance",
      items: ["Freedom movement participation", "Ganga river city"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Local sweets", "Street food"],
    festivals: ["Chhath Puja"],
    travelTips: ["Visit ghats in evening"],
  },
  Deoria: {
    overview:
      "Deoria is a peaceful city in Uttar Pradesh known for its cultural roots and rural charm.",
    detailedDescription:
      "The city offers a quiet environment with temples, local markets, and traditional lifestyle reflecting eastern UP culture.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Deoraha Baba Temple", "Gauri Shankar Temple"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Cultural Significance",
      items: ["Religious importance", "Rural heritage"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Local sweets", "Street snacks"],
    festivals: ["Holi", "Diwali"],
    travelTips: ["Explore temples", "Visit local markets"],
  },
  Mau: {
    overview:
      "Mau is known for its textile industry and historical importance in Uttar Pradesh.",
    detailedDescription:
      "The city has a strong industrial base and cultural significance, especially for its textile production.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Textile markets", "Local temples"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Economic Significance",
      items: ["Textile hub", "Trade center"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Street food", "Sweets"],
    festivals: ["Eid", "Diwali"],
    travelTips: ["Visit markets", "Explore local culture"],
  },
  Chandauli: {
    overview:
      "Chandauli is a district near Varanasi known for agriculture and scenic rural beauty.",
    detailedDescription:
      "It serves as an important agricultural region with natural landscapes and proximity to Varanasi.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Agricultural fields", "Local villages"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Agricultural Importance",
      items: ["Farming hub", "Rural culture"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Simple rural meals"],
    festivals: ["Holi"],
    travelTips: ["Enjoy village life", "Explore nature"],
  },
  Robertsganj: {
    overview:
      "Robertsganj is the district headquarters of Sonbhadra and gateway to mineral-rich areas.",
    detailedDescription:
      "Known for its natural resources and proximity to waterfalls and forests.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Madhupur Temple", "Natural landscapes"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Natural Significance",
      items: ["Mineral-rich region", "Forests"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Local food"],
    festivals: ["Diwali"],
    travelTips: ["Explore forests", "Visit early"],
  },
  Sultanpur: {
    overview:
      "Sultanpur is a historic city known for its heritage and agricultural economy.",
    detailedDescription:
      "The city offers historical temples and rural surroundings.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Local temples", "Saryu river nearby"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Historical Significance",
      items: ["Ancient city", "Agriculture"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Local cuisine"],
    festivals: ["Holi"],
    travelTips: ["Visit temples"],
  },
  Raebareli: {
    overview:
      "Raebareli is known for its political importance and green landscapes.",
    detailedDescription:
      "A well-developed city with greenery and political significance.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Indira Gandhi Memorial", "Temples"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Political Significance",
      items: ["Political hub", "Heritage"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Local food"],
    festivals: ["Diwali"],
    travelTips: ["Explore memorials"],
  },
  Faizabad: {
    overview:
      "Faizabad is historically linked to Ayodhya and known for Mughal-era heritage.",
    detailedDescription:
      "It shares cultural and religious importance with nearby Ayodhya.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Gulab Bari", "Bahu Begum ka Maqbara"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Historical Significance",
      items: ["Mughal heritage", "Ayodhya connection"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Mughlai food"],
    festivals: ["Eid"],
    travelTips: ["Explore monuments"],
  },
  Rajgir: {
    overview: "Rajgir is a historic town associated with Buddhism and Jainism.",
    detailedDescription:
      "Surrounded by hills, it was once the capital of Magadh kingdom.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Venu Vana", "Hot Springs", "Vishwa Shanti Stupa"],
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Buddhist site", "Jain connections"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Simple vegetarian food"],
    festivals: ["Rajgir Mahotsav"],
    travelTips: ["Cable car ride"],
  },
  Nalanda: {
    overview:
      "Nalanda is famous for its ancient university ruins and Buddhist heritage.",
    detailedDescription:
      "A UNESCO World Heritage site that was once a center of learning.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Nalanda University Ruins", "Nalanda Museum"],
      bgColor: "bg-blue-50",
      textColor: "text-blue-800",
    },
    significance: {
      title: "Educational Significance",
      items: ["Ancient university", "Buddhist center"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Local Bihar cuisine"],
    festivals: ["Buddha Purnima"],
    travelTips: ["Visit with guide"],
  },
  Ujjain: {
    overview:
      "Ujjain is one of the oldest cities and home to Mahakaleshwar Jyotirlinga.",
    detailedDescription:
      "A major pilgrimage destination on the banks of the Shipra River.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Mahakaleshwar Temple", "Kal Bhairav Temple", "Ram Ghat"],
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Jyotirlinga", "Kumbh Mela"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Poha", "Jalebi"],
    festivals: ["Mahashivratri", "Kumbh Mela"],
    travelTips: ["Attend Bhasma Aarti"],
  },
  Omkareshwar: {
    overview:
      "Omkareshwar is a sacred Jyotirlinga temple located on an island in the Narmada river.",
    detailedDescription:
      "One of the 12 Jyotirlingas, it attracts devotees from across India.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Omkareshwar Jyotirlinga", "Mamleshwar Temple"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Jyotirlinga", "Sacred river island"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Prasad", "Simple vegetarian food"],
    festivals: ["Mahashivratri"],
    travelTips: ["Attend aarti", "Respect rituals"],
  },
  Deoghar: {
    overview:
      "Deoghar is a major pilgrimage city in Jharkhand, famous for Baba Baidyanath Temple.",
    detailedDescription:
      "It is one of the 12 Jyotirlingas and attracts millions of devotees.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Baidyanath Temple", "Trikut Pahar", "Nandan Pahar"],
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Jyotirlinga", "Shravan pilgrimage"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "July-August, October-March",
    idealDuration: "1-2 days",
    localFood: ["Prasad", "Sweets"],
    festivals: ["Shravan Mela"],
    travelTips: ["Visit during Shravan month"],
  },
  Nainital: {
    overview:
      "Nainital is a beautiful hill station in Uttarakhand known for its lake and scenic beauty.",
    detailedDescription:
      "Surrounded by mountains, it is a popular tourist destination for nature lovers and honeymooners.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Naini Lake", "Snow View Point", "Naina Devi Temple"],
      bgColor: "bg-sky-50",
      textColor: "text-sky-800",
    },
    significance: {
      title: "Natural Significance",
      items: ["Hill station beauty", "Cool climate"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "March-June, September-November",
    idealDuration: "2-3 days",
    localFood: ["Maggi", "Aloo ke Gutke"],
    festivals: ["Nanda Devi Festival"],
    travelTips: ["Carry warm clothes"],
  },
  Mussoorie: {
    overview:
      "Mussoorie is a famous hill station in Uttarakhand known as the Queen of Hills.",
    detailedDescription:
      "It offers scenic views of the Himalayas and pleasant weather throughout the year.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Kempty Falls", "Gun Hill", "Mall Road"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Tourist Significance",
      items: ["Hill station", "Nature tourism"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "March-June",
    idealDuration: "2-3 days",
    localFood: ["Maggi", "Momos"],
    festivals: ["Winter Carnival"],
    travelTips: ["Carry warm clothes"],
  },
  Shimla: {
    overview:
      "Shimla, the capital of Himachal Pradesh, is a famous hill station known for colonial charm and snow views.",
    detailedDescription:
      "Once the summer capital of British India, Shimla offers beautiful landscapes and pleasant weather.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Mall Road", "The Ridge", "Jakhoo Temple"],
      bgColor: "bg-blue-50",
      textColor: "text-blue-800",
    },
    significance: {
      title: "Hill Station Significance",
      items: ["Colonial heritage", "Snow destination"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "March-June, December-February",
    idealDuration: "3 days",
    localFood: ["Chana Madra", "Siddu"],
    festivals: ["Summer Festival"],
    travelTips: ["Book hotels in advance during snowfall"],
  },
  Manali: {
    overview:
      "Manali is a popular hill station in Himachal Pradesh known for adventure and scenic beauty.",
    detailedDescription:
      "It is a favorite destination for honeymooners and adventure lovers.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Solang Valley", "Rohtang Pass", "Hadimba Temple"],
      bgColor: "bg-purple-50",
      textColor: "text-purple-800",
    },
    significance: {
      title: "Adventure Significance",
      items: ["Adventure sports", "Snow activities"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-June",
    idealDuration: "3-4 days",
    localFood: ["Siddu", "Trout Fish"],
    festivals: ["Winter Carnival"],
    travelTips: ["Carry woolens even in summer"],
  },
  "Char Dham": {
    overview:
      "Char Dham refers to the four sacred Hindu pilgrimage sites in Uttarakhand.",
    detailedDescription:
      "Includes Yamunotri, Gangotri, Kedarnath, and Badrinath.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Four sacred shrines", "Himalayan pilgrimage"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "May-June & September",
    idealDuration: "10-15 days",
    localFood: ["Simple vegetarian meals"],
    festivals: ["Char Dham Yatra"],
    travelTips: ["Physical fitness required"],
  },
  Haridwar: {
    overview: "Haridwar is a sacred city where the Ganga enters the plains.",
    detailedDescription: "It is one of the seven holiest cities in Hinduism.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Har Ki Pauri", "Mansa Devi Temple", "Chandi Devi Temple"],
      bgColor: "bg-gray-50",
      textColor: "text-gray-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Ganga Aarti", "Kumbh Mela"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Kachori", "Jalebi"],
    festivals: ["Kumbh Mela", "Kanwar Yatra"],
    travelTips: ["Attend evening Ganga Aarti"],
  },
  Rishikesh: {
    overview: "Rishikesh is known as the Yoga Capital of the World.",
    detailedDescription:
      "It is a spiritual and adventure destination located on the banks of the Ganga River.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Laxman Jhula", "Triveni Ghat", "Beatles Ashram"],
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Yoga capital", "Meditation hub"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "September-June",
    idealDuration: "2-3 days",
    localFood: ["Satvik food", "Chai"],
    festivals: ["International Yoga Festival"],
    travelTips: ["Attend Ganga Aarti"],
  },
  Delhi: {
    overview:
      "Delhi is the capital of India, rich in history, culture, and modern attractions.",
    detailedDescription:
      "A blend of Mughal heritage and modern lifestyle with iconic landmarks.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["India Gate", "Red Fort", "Qutub Minar", "Lotus Temple"],
      bgColor: "bg-blue-50",
      textColor: "text-blue-800",
    },
    significance: {
      title: "Historical Significance",
      items: ["Capital city", "Mughal heritage"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "2-4 days",
    localFood: ["Chole Bhature", "Parathas"],
    festivals: ["Republic Day", "Diwali"],
    travelTips: ["Use metro for travel"],
  },
  Sarnath: {
    overview:
      "Sarnath is a major Buddhist site near Varanasi where Buddha gave his first sermon.",
    detailedDescription:
      "It is one of the most important Buddhist pilgrimage destinations.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Dhamek Stupa", "Ashoka Pillar"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Buddha’s first sermon site"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Light vegetarian food"],
    festivals: ["Buddha Purnima"],
    travelTips: ["Visit museums"],
  },
  Sonbhadra: {
    overview:
      "Sonbhadra, located in the southeastern part of Uttar Pradesh, is known as the 'Energy Capital of India' due to its numerous power plants. Surrounded by forests, rivers, and hills, it is one of the most naturally rich and scenic districts in the state.",
    detailedDescription:
      "Sonbhadra is unique for its blend of industrial significance and natural beauty. It is home to some of India's major thermal power plants and hydroelectric projects, along with ancient caves, waterfalls, and tribal culture. The region is part of the Vindhya and Kaimur hills, making it a perfect destination for nature lovers and explorers.",
    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Robertsganj (District Headquarters)",
        "Rihand Dam (Govind Ballabh Pant Sagar)",
        "Vijaygarh Fort",
        "Kaimur Wildlife Sanctuary",
        "Agori Fort",
        "Mukkha Falls",
        "Ramnagar Fort",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Historical & Natural Significance",
      items: [
        "Part of ancient Kaimur hills",
        "Rich tribal heritage and culture",
        "Major hydroelectric and thermal power hub",
        "Presence of prehistoric caves and rock paintings",
        "Ecological diversity with dense forests",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October–March (Pleasant weather, 10–28°C)",
    idealDuration: "2–3 days to explore natural and historical sites",
    localFood: [
      "Traditional Uttar Pradesh cuisine (Roti, Dal, Sabzi)",
      "Local tribal food preparations",
      "Fresh river fish dishes",
      "Sattu-based items",
    ],
    festivals: [
      "Holi",
      "Diwali",
      "Makar Sankranti",
      "Local tribal fairs and melas",
    ],
    travelTips: [
      "Carry comfortable trekking shoes",
      "Avoid visiting in peak summer (very hot)",
      "Hire a local guide for forest areas",
      "Keep cash as digital payments may be limited in remote areas",
    ],
  },
  "Dehri-on-Sone": {
    overview:
      "Dehri-on-Sone is an industrial town in Bihar located on the banks of the Son River.",
    detailedDescription:
      "It is known for its infrastructure and the historic Nehru Setu bridge over the Son River.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Nehru Setu Bridge", "Son River views"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Industrial Significance",
      items: ["Transport hub", "Railway importance"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Local Bihari food"],
    festivals: ["Holi", "Diwali"],
    travelTips: ["Explore river views"],
  },
  Naimisharanya: {
    overview:
      "Naimisharanya is a sacred forest pilgrimage site in Uttar Pradesh mentioned in Hindu scriptures.",
    detailedDescription:
      "It is believed to be the place where many ancient sages performed penance.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Chakra Tirtha", "Vyas Gaddi", "Hanuman Garhi"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Ancient Hindu site", "Sage meditation place"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Simple prasad", "Vegetarian meals"],
    festivals: ["Navratri"],
    travelTips: ["Respect religious space"],
  },
  Shravasti: {
    overview:
      "Shravasti is a major Buddhist and Jain pilgrimage site where Lord Buddha spent many years.",
    detailedDescription:
      "It contains ancient monasteries and stupas associated with Buddhism.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Jetavana Monastery", "Anandabodhi Tree"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Buddha's residence", "Pilgrimage site"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Vegetarian food"],
    festivals: ["Buddha Purnima"],
    travelTips: ["Explore monasteries"],
  },
  Lumbini: {
    overview:
      "Lumbini is the birthplace of Lord Buddha and a UNESCO World Heritage Site located in Nepal.",
    detailedDescription:
      "It is one of the most important Buddhist pilgrimage destinations in the world.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Maya Devi Temple", "Ashokan Pillar"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Birthplace of Buddha", "UNESCO site"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Vegetarian meals"],
    festivals: ["Buddha Jayanti"],
    travelTips: ["Carry passport for Nepal entry"],
  },
  Kolkata: {
    overview: "Kolkata is known as the cultural capital of India.",
    detailedDescription:
      "A city rich in literature, art, and colonial history.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Temple"],
      bgColor: "bg-blue-50",
      textColor: "text-blue-800",
    },
    significance: {
      title: "Cultural Significance",
      items: ["Art & culture", "Literature hub"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-February",
    idealDuration: "2-3 days",
    localFood: ["Rosogolla", "Macher Jhol"],
    festivals: ["Durga Puja"],
    travelTips: ["Use metro for travel"],
  },
  Jaipur: {
    overview:
      "Jaipur, the Pink City, is the capital of Rajasthan known for its royal heritage.",
    detailedDescription:
      "It is famous for palaces, forts, and vibrant culture.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Hawa Mahal", "Amer Fort", "City Palace"],
      bgColor: "bg-red-50",
      textColor: "text-red-800",
    },
    significance: {
      title: "Cultural Significance",
      items: ["Royal heritage", "Rajput architecture"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "2-3 days",
    localFood: ["Dal Baati Churma", "Ghewar"],
    festivals: ["Jaipur Literature Festival"],
    travelTips: ["Explore forts early morning"],
  },
  Mathura: {
    overview:
      "Mathura is the birthplace of Lord Krishna and a major pilgrimage site.",
    detailedDescription:
      "The city is deeply connected with Krishna's life and attracts devotees from around the world.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Krishna Janmabhoomi", "Dwarkadhish Temple", "Vishram Ghat"],
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Birthplace of Krishna", "Holi celebrations"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Lassi", "Pedas", "Kachori"],
    festivals: ["Holi", "Janmashtami"],
    travelTips: ["Visit temples early morning"],
  },
  Khajuraho: {
    overview:
      "Khajuraho is famous for its group of temples with intricate carvings.",
    detailedDescription:
      "A UNESCO World Heritage site known for its unique architecture and sculptures.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Khajuraho Temples", "Western Group Temples"],
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-800",
    },
    significance: {
      title: "Historical Significance",
      items: ["UNESCO site", "Chandela dynasty"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Local MP cuisine"],
    festivals: ["Khajuraho Dance Festival"],
    travelTips: ["Hire guide for temple history"],
  },
  Orchha: {
    overview:
      "Orchha is a historic town in Madhya Pradesh known for its palaces and temples.",
    detailedDescription:
      "Located on the banks of the Betwa River, it is a hidden gem of India.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Orchha Fort", "Chaturbhuj Temple", "Jahangir Mahal"],
      bgColor: "bg-gray-50",
      textColor: "text-gray-800",
    },
    significance: {
      title: "Historical Significance",
      items: ["Bundela dynasty", "Heritage town"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Local MP cuisine"],
    festivals: ["Ram Raja Festival"],
    travelTips: ["Visit fort at sunset"],
  },
  Amarkantak: {
    overview:
      "Amarkantak is a sacred town where the Narmada and Son rivers originate.",
    detailedDescription:
      "Known for its natural beauty and spiritual importance in Madhya Pradesh.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Narmada Kund", "Kapil Dhara Waterfall"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["River origin", "Religious importance"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "2 days",
    localFood: ["Simple food"],
    festivals: ["Narmada Jayanti"],
    travelTips: ["Explore waterfalls"],
  },
  Auli: {
    overview:
      "Auli is a popular skiing destination and hill station in Uttarakhand.",
    detailedDescription:
      "Known for its snow-covered slopes and panoramic Himalayan views.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Auli Ropeway", "Snow slopes"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Adventure Significance",
      items: ["Skiing destination", "Winter tourism"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "December-March",
    idealDuration: "2-3 days",
    localFood: ["Hot snacks", "Maggi"],
    festivals: ["Winter sports"],
    travelTips: ["Carry warm clothes"],
  },
  Ranikhet: {
    overview:
      "Ranikhet is a quiet hill station in Uttarakhand known for its greenery and calm atmosphere.",
    detailedDescription:
      "A perfect getaway for nature lovers with views of the Himalayas.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Jhula Devi Temple", "Golf Course"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Scenic Significance",
      items: ["Hill station", "Army cantonment"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "March-June",
    idealDuration: "2 days",
    localFood: ["Local food", "Snacks"],
    festivals: ["Local fairs"],
    travelTips: ["Peaceful stay"],
  },
  Kausani: {
    overview:
      "Kausani is known as the 'Switzerland of India' due to its Himalayan views.",
    detailedDescription:
      "It offers breathtaking views of peaks like Nanda Devi and Trishul.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Anasakti Ashram", "Himalayan views"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Scenic Significance",
      items: ["Mountain views", "Peaceful retreat"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "March-June",
    idealDuration: "2 days",
    localFood: ["Local cuisine"],
    festivals: ["Local festivals"],
    travelTips: ["Ideal for relaxation"],
  },
  Udaipur: {
    overview:
      "Udaipur, the City of Lakes, is known for its royal palaces and scenic lakes.",
    detailedDescription:
      "One of the most romantic cities in India with beautiful architecture and lake views.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Lake Pichola", "City Palace", "Jag Mandir"],
      bgColor: "bg-pink-50",
      textColor: "text-pink-800",
    },
    significance: {
      title: "Royal Significance",
      items: ["Mewar heritage", "Palace architecture"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "2-3 days",
    localFood: ["Dal Baati Churma", "Gatte ki Sabzi"],
    festivals: ["Mewar Festival"],
    travelTips: ["Enjoy boat ride in Lake Pichola"],
  },
  "Mount Abu": {
    overview:
      "Mount Abu is the only hill station in Rajasthan known for its pleasant climate.",
    detailedDescription: "Famous for Dilwara Temples and Nakki Lake.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Dilwara Temples", "Nakki Lake"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Tourist Significance",
      items: ["Hill station", "Religious site"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "November-February",
    idealDuration: "2 days",
    localFood: ["Rajasthani food"],
    festivals: ["Summer Festival"],
    travelTips: ["Enjoy boating"],
  },
  Jodhpur: {
    overview:
      "Jodhpur, the Blue City, is known for its forts and blue-painted houses.",
    detailedDescription:
      "A major tourist attraction in Rajasthan with rich history and architecture.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Mehrangarh Fort", "Umaid Bhawan Palace", "Jaswant Thada"],
      bgColor: "bg-orange-50",
      textColor: "text-orange-800",
    },
    significance: {
      title: "Historical Significance",
      items: ["Rajput heritage", "Desert culture"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "2 days",
    localFood: ["Mirchi Bada", "Dal Baati"],
    festivals: ["Marwar Festival"],
    travelTips: ["Explore Mehrangarh Fort early"],
  },
  Jaisalmer: {
    overview:
      "Jaisalmer is known as the Golden City due to its yellow sandstone architecture.",
    detailedDescription:
      "Located in the Thar Desert, it is famous for desert safaris and forts.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Jaisalmer Fort", "Sam Sand Dunes", "Patwon Ki Haveli"],
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-800",
    },
    significance: {
      title: "Desert Significance",
      items: ["Desert culture", "Camel safari"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "November-March",
    idealDuration: "2-3 days",
    localFood: ["Ker Sangri", "Gatte ki Sabzi"],
    festivals: ["Desert Festival"],
    travelTips: ["Stay in desert camps"],
  },
  Netarhat: {
    overview:
      "Netarhat is a hidden gem in Jharkhand known for sunrise and sunset points.",
    detailedDescription:
      "It is a peaceful hill station surrounded by dense forests.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Sunrise Point", "Magnolia Point"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Natural Significance",
      items: ["Hill station", "Forest beauty"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "2 days",
    localFood: ["Local Jharkhand food"],
    festivals: ["Local fairs"],
    travelTips: ["Enjoy sunrise views"],
  },
  Giridih: {
    overview:
      "Giridih is known for its religious significance and scenic landscapes in Jharkhand.",
    detailedDescription: "It is an important Jain pilgrimage site.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Parasnath Hill", "Usri Falls"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Jain pilgrimage", "Nature beauty"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Local cuisine"],
    festivals: ["Religious festivals"],
    travelTips: ["Visit hills early"],
  },
  Parasnath: {
    overview:
      "Parasnath Hill is the highest peak in Jharkhand and a major Jain pilgrimage site.",
    detailedDescription:
      "Known for its religious importance and trekking routes.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Jain temples", "Trekking trails"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Religious Significance",
      items: ["Jain holy site"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Simple food"],
    festivals: ["Jain festivals"],
    travelTips: ["Trekking required"],
  },
  Ranchi: {
    overview:
      "Ranchi is the capital of Jharkhand known for waterfalls and greenery.",
    detailedDescription:
      "A beautiful city with many waterfalls and tribal culture.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Hundru Falls", "Jonha Falls"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Tourism Significance",
      items: ["Waterfalls", "Hill station"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "2 days",
    localFood: ["Local tribal food"],
    festivals: ["Sarhul"],
    travelTips: ["Explore waterfalls"],
  },
  Shirdi: {
    overview:
      "Shirdi is one of the most important pilgrimage sites dedicated to Sai Baba.",
    detailedDescription:
      "Millions of devotees visit the Sai Baba temple every year.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Sai Baba Temple", "Dwarkamai"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Sai Baba shrine"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Prasad meals"],
    festivals: ["Sai Baba festivals"],
    travelTips: ["Expect crowds"],
  },
  Dwarka: {
    overview:
      "Dwarka is one of the Char Dham pilgrimage sites and associated with Lord Krishna.",
    detailedDescription:
      "A sacred city located in Gujarat with great religious importance.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Dwarkadhish Temple", "Bet Dwarka", "Rukmini Temple"],
      bgColor: "bg-teal-50",
      textColor: "text-teal-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Krishna's kingdom", "Char Dham site"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "2 days",
    localFood: ["Gujarati Thali", "Farsan"],
    festivals: ["Janmashtami"],
    travelTips: ["Visit Bet Dwarka via boat"],
  },
  Somnath: {
    overview: "Somnath is one of the 12 Jyotirlinga temples of Lord Shiva.",
    detailedDescription:
      "Located in Gujarat, it is a highly revered pilgrimage site with historical importance.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Somnath Temple", "Triveni Sangam", "Bhalka Tirth"],
      bgColor: "bg-red-50",
      textColor: "text-red-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: ["Jyotirlinga", "Repeatedly rebuilt temple"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Gujarati Thali"],
    festivals: ["Mahashivratri"],
    travelTips: ["Attend evening Aarti"],
  },
  Kota: {
    overview: "Kota is known for its coaching institutes and Chambal River.",
    detailedDescription: "A major educational hub in Rajasthan.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Chambal Garden", "Kota Barrage"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Educational Significance",
      items: ["Coaching hub"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1 day",
    localFood: ["Rajasthani food"],
    festivals: ["Kota festival"],
    travelTips: ["Visit riverfront"],
  },
  Noida: {
    overview:
      "Noida is a modern city near Delhi known for IT companies and infrastructure.",
    detailedDescription:
      "A major commercial and residential hub with malls and corporate offices.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["DLF Mall", "Film City", "Botanical Garden"],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Urban Significance",
      items: ["IT hub", "Modern city"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Street food", "Fast food"],
    festivals: ["Corporate events"],
    travelTips: ["Explore malls"],
  },
  Indore: {
    overview:
      "Indore is known as the cleanest city of India and famous for street food.",
    detailedDescription:
      "A rapidly growing city with vibrant food culture and modern lifestyle.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Rajwada Palace", "Lal Bagh Palace"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    significance: {
      title: "Urban Significance",
      items: ["Clean city", "Food capital"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "1-2 days",
    localFood: ["Poha", "Jalebi"],
    festivals: ["Indore Food Festival"],
    travelTips: ["Try Sarafa Bazaar at night"],
  },
  Bhopal: {
    overview:
      "Bhopal is the capital of Madhya Pradesh known for lakes and heritage.",
    detailedDescription:
      "A beautiful city with a mix of modern and historic architecture.",
    keyAttractions: {
      title: "Key Attractions",
      items: ["Upper Lake", "Bharat Bhavan", "Van Vihar"],
      bgColor: "bg-red-50",
      textColor: "text-red-800",
    },
    significance: {
      title: "Cultural Significance",
      items: ["City of lakes", "Green city"],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March",
    idealDuration: "2 days",
    localFood: ["Poha", "Jalebi"],
    festivals: ["Taj-ul-Masajid events"],
    travelTips: ["Enjoy boat rides"],
  },
  Chitrakoot: {
    overview:
      "Chitrakoot is a sacred town located on the border of Uttar Pradesh and Madhya Pradesh, known for its deep connection to the Ramayana and natural beauty.",
    detailedDescription:
      "Chitrakoot is believed to be the place where Lord Rama, Sita, and Lakshman spent part of their exile. Surrounded by forests, hills, and the Mandakini River, it is a peaceful pilgrimage destination with numerous temples, ghats, and caves that reflect its spiritual and historical importance.",
    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Ram Ghat",
        "Kamadgiri Hill",
        "Bharat Milap Temple",
        "Hanuman Dhara",
        "Gupt Godavari Caves",
        "Sphatik Shila",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Spiritual Significance",
      items: [
        "Place of Lord Rama's exile",
        "Associated with Ramayana events",
        "Sacred Mandakini River",
        "Important Hindu pilgrimage site",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March (Pleasant weather, ideal for pilgrimage)",
    idealDuration: "1-2 days for spiritual exploration",
    localFood: [
      "Simple vegetarian sattvic food",
      "Local poori-sabzi",
      "Kachori",
      "Halwa",
    ],
    festivals: [
      "Ram Navami",
      "Diwali",
      "Kartik Purnima",
      "Local religious fairs",
    ],
    travelTips: [
      "Start early morning for temple visits",
      "Carry comfortable walking shoes",
      "Respect religious customs",
      "Avoid peak summer due to heat",
    ],
  },
  Aligarh: {
    overview:
      "Aligarh is an important city in Uttar Pradesh known for its educational heritage, historical monuments, and the famous Aligarh Muslim University.",
    detailedDescription:
      "Aligarh has played a significant role in India's academic and cultural development, primarily due to the establishment of Aligarh Muslim University by Sir Syed Ahmed Khan. The city is also known for its lock industry, historic forts, and vibrant local markets. It blends educational excellence with cultural and industrial importance.",
    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Aligarh Muslim University (AMU)",
        "Aligarh Fort",
        "Sir Syed Academy Museum",
        "Khereshwar Temple",
        "Dor Fortress",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },
    significance: {
      title: "Cultural & Educational Significance",
      items: [
        "Center of higher education in North India",
        "Birthplace of Sir Syed Ahmed Khan’s modern education movement",
        "Famous for lock manufacturing industry",
        "Rich Mughal-era heritage",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },
    bestTimeToVisit: "October-March (Pleasant weather, 10-25°C)",
    idealDuration: "1-2 days for exploring city and university",
    localFood: [
      "Aligarh special kebabs",
      "North Indian curries",
      "Street chaat",
      "Sweets like jalebi and peda",
    ],
    festivals: [
      "Eid celebrations",
      "Holi",
      "Diwali",
      "University cultural festivals",
    ],
    travelTips: [
      "Visit AMU campus for its architecture",
      "Explore local markets for handicrafts and locks",
      "Travel during daytime for safety",
      "Carry light clothes in summer",
    ],
  },
  Barabanki: {
    overview:
      "Barabanki is a historic city in Uttar Pradesh located near Lucknow, known for its cultural heritage, religious sites, and agricultural importance.",

    detailedDescription:
      "Barabanki is an important district in Uttar Pradesh with a rich blend of history, spirituality, and rural charm. It is known for its connection to the Nawabs of Awadh and houses several ancient temples, mosques, and Sufi shrines. The city plays a significant role in agriculture and is famous for its fertile lands. Its proximity to Lucknow makes it an accessible destination for both tourism and pilgrimage.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Dewa Sharif Dargah (Shrine of Haji Waris Ali Shah)",
        "Satrikh (Ancient historical town)",
        "Parijaat Tree (mythological significance)",
        "Ramnagar Fort",
        "Gulab Bari",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Cultural & Spiritual Significance",
      items: [
        "Famous Sufi pilgrimage center (Dewa Sharif)",
        "Strong influence of Awadhi culture",
        "Blend of Hindu and Islamic heritage",
        "Known for religious harmony and festivals",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration:
      "1 day for major attractions or 2 days for nearby exploration",

    localFood: [
      "Awadhi biryani",
      "Kebabs",
      "Local sweets (jalebi, peda)",
      "Traditional North Indian thali",
    ],

    festivals: [
      "Eid at Dewa Sharif",
      "Holi",
      "Diwali",
      "Urs of Haji Waris Ali Shah",
    ],

    travelTips: [
      "Visit Dewa Sharif for spiritual experience",
      "Plan a short trip from Lucknow (very close)",
      "Respect local religious sentiments",
      "Try local Awadhi cuisine",
    ],
  },
  Bareilly: {
    overview:
      "Bareilly is a major city in Uttar Pradesh known for its historical importance, vibrant culture, and famous 'Jhumka' market and Zari-Zardozi embroidery work.",

    detailedDescription:
      "Bareilly is an important commercial and cultural hub in northern Uttar Pradesh. The city is famous for its traditional craftsmanship, especially Zari-Zardozi embroidery, which is recognized globally. It also has historical and religious significance, with several temples and mosques reflecting its rich heritage. Bareilly is well-connected and serves as a key stop between Delhi and Lucknow.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Alakhnath Temple",
        "Trivati Nath Temple",
        "Fun City (Water Park)",
        "Dargah-e-Ala Hazrat",
        "Fatehganj West markets",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Cultural & Economic Significance",
      items: [
        "Famous for Zari-Zardozi embroidery industry",
        "Known as 'Nath Nagri' due to many Shiva temples",
        "Strong trading and textile market",
        "Blend of spiritual and commercial importance",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 10-25°C)",

    idealDuration: "1-2 days for exploring city and nearby attractions",

    localFood: [
      "Bareilly kebabs",
      "North Indian curries",
      "Street chaat",
      "Local sweets like jalebi and peda",
    ],

    festivals: [
      "Eid",
      "Holi",
      "Diwali",
      "Kumbh-related celebrations in nearby regions",
    ],

    travelTips: [
      "Visit temples early morning for a peaceful experience",
      "Explore local markets for Zari-Zardozi items",
      "Travel via road or rail for easy connectivity",
      "Avoid peak summer due to high temperatures",
    ],
  },
  Basti: {
    overview:
      "Basti is a city in Uttar Pradesh known for its cultural heritage, religious sites, and agricultural importance. It is a growing town with historical and spiritual significance in eastern UP.",

    detailedDescription:
      "Basti is an important district in Uttar Pradesh with deep roots in Indian culture and traditions. The city is primarily agricultural, with fertile land supporting farming activities. It is also known for its temples and proximity to sacred places like Ayodhya and Gorakhpur. Basti offers a mix of rural charm and cultural richness, making it a peaceful destination.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Chandrakanta Mandir",
        "Basti Museum",
        "Panchmukhi Hanuman Temple",
        "Manorama River Ghats",
        "Nearby Ayodhya (Ram Mandir)",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Cultural & Religious Significance",
      items: [
        "Close to major pilgrimage sites like Ayodhya",
        "Known for traditional festivals and rituals",
        "Agricultural hub of eastern Uttar Pradesh",
        "Blend of rural lifestyle and cultural traditions",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 15-28°C)",

    idealDuration:
      "1 day for local visit, 2-3 days including nearby pilgrimage sites",

    localFood: [
      "Simple North Indian thali",
      "Local sweets like laddoo and peda",
      "Street chaat",
      "Traditional rural cuisine",
    ],

    festivals: ["Holi", "Diwali", "Eid", "Local temple fairs and melas"],

    travelTips: [
      "Combine visit with Ayodhya or Gorakhpur for better experience",
      "Carry cash as digital payments may be limited in rural areas",
      "Travel during daytime for better connectivity",
      "Respect local customs and traditions",
    ],
  },
  Dehradun: {
    overview:
      "Dehradun is the capital city of Uttarakhand, known for its scenic beauty, pleasant climate, educational institutions, and proximity to hill stations like Mussoorie.",

    detailedDescription:
      "Dehradun lies in the Doon Valley between the Ganges and Yamuna rivers and is one of the most beautiful cities in North India. It serves as a gateway to popular hill stations like Mussoorie and pilgrimage destinations like Rishikesh and Haridwar. The city is known for its educational institutions, colonial-era architecture, and natural surroundings, making it a perfect blend of urban life and nature.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Robber’s Cave (Guchhupani)",
        "Sahastradhara Waterfall",
        "Forest Research Institute (FRI)",
        "Mindrolling Monastery",
        "Tapkeshwar Temple",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Cultural & Natural Significance",
      items: [
        "Gateway to Mussoorie and Himalayan regions",
        "Renowned educational hub (Doon School, FRI)",
        "Rich Tibetan and Hindu cultural influence",
        "Important center for tourism and spirituality",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit:
      "March-June and October-February (Pleasant weather, 10-30°C)",

    idealDuration: "2-3 days to explore city and nearby hill stations",

    localFood: [
      "Kumaoni cuisine",
      "Aloo ke gutke",
      "Phaanu",
      "Bal Mithai (sweet)",
      "North Indian dishes",
    ],

    festivals: ["Holi", "Diwali", "Dussehra", "Basant Panchami"],

    travelTips: [
      "Visit early morning for scenic beauty",
      "Combine trip with Mussoorie, Rishikesh, and Haridwar",
      "Carry light woolens even in summer evenings",
      "Avoid peak monsoon due to landslides in nearby hills",
    ],
  },
  "Delhi Airport": {
    overview:
      "Delhi Airport, officially known as Indira Gandhi International Airport, is the busiest airport in India and a major gateway for domestic and international travel.",

    detailedDescription:
      "Indira Gandhi International Airport (IGI) in Delhi is one of the largest and most advanced airports in Asia. It connects India to major cities across the world and handles millions of passengers every year. With world-class terminals, modern facilities, and excellent connectivity to Delhi NCR, it serves as a crucial hub for business, tourism, and international travel.",

    keyAttractions: {
      title: "Key Highlights",
      items: [
        "Terminal 3 (International Terminal)",
        "Duty-Free Shopping Area",
        "Airport Lounges (Premium & Business)",
        "Delhi Metro Airport Express Line",
        "Aerocity Hotels & Restaurants",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Travel & Connectivity Significance",
      items: [
        "India’s busiest international airport",
        "Major hub for domestic and global flights",
        "Advanced infrastructure and passenger services",
        "Gateway to Delhi and North India tourism",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit:
      "Open 24/7 (Best to travel early morning or late night to avoid traffic)",

    idealDuration:
      "2-4 hours before flight departure for smooth check-in and security",

    localFood: [
      "Multi-cuisine restaurants",
      "Fast food chains",
      "Indian thali",
      "Cafe and bakery items",
    ],

    festivals: [
      "Special decorations during Diwali",
      "New Year celebrations",
      "Cultural displays during major Indian festivals",
    ],

    travelTips: [
      "Arrive at least 2-3 hours before domestic flights and 3-4 hours before international flights",
      "Use Airport Metro for fastest connectivity to city",
      "Keep ID and boarding pass ready for entry",
      "Pre-book cab or tempo traveller for hassle-free pickup/drop",
    ],
  },
  Dhanbad: {
    overview:
      "Dhanbad is a major city in Jharkhand known as the 'Coal Capital of India' due to its rich coal reserves and mining industries.",

    detailedDescription:
      "Dhanbad is one of India's most important industrial cities, playing a key role in the country’s coal production. It is home to Bharat Coking Coal Limited (BCCL) and several coal mines. Apart from its industrial significance, the city also has temples, parks, and nearby natural attractions. It serves as an important commercial hub in eastern India.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Maithon Dam",
        "Panchet Dam",
        "Topchanchi Lake",
        "Birsa Munda Park",
        "Shakti Mandir",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Industrial & Cultural Significance",
      items: [
        "Known as the 'Coal Capital of India'",
        "Major center for coal mining and energy production",
        "Home to IIT (ISM) Dhanbad",
        "Important economic hub in Jharkhand",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 15-28°C)",

    idealDuration: "1-2 days for exploring city and nearby attractions",

    localFood: [
      "Litti Chokha",
      "North Indian thali",
      "Street chaat",
      "Local sweets like peda and jalebi",
    ],

    festivals: ["Chhath Puja", "Diwali", "Holi", "Durga Puja"],

    travelTips: [
      "Visit dams and lakes early morning or evening",
      "Avoid peak summer due to high temperatures",
      "Plan local transport in advance",
      "Carry cash for small vendors",
    ],
  },
  Faridabad: {
    overview:
      "Faridabad is a major industrial city in Haryana, part of the Delhi NCR region, known for its manufacturing industries, urban development, and proximity to the capital city Delhi.",

    detailedDescription:
      "Faridabad is one of the largest cities in Haryana and an important part of the National Capital Region (NCR). It is a leading industrial hub with numerous factories and businesses contributing to the economy. Along with its industrial growth, the city also offers recreational spots, temples, and lakes. Its strategic location near Delhi makes it a popular residential and commercial destination.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Surajkund Lake",
        "Raja Nahar Singh Palace (Ballabhgarh Fort)",
        "Badkhal Lake",
        "ISKCON Faridabad Temple",
        "Town Park",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Industrial & Urban Significance",
      items: [
        "Major industrial hub in Haryana",
        "Part of Delhi NCR region",
        "Important center for manufacturing industries",
        "Rapid urban and infrastructure development",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 10-25°C)",

    idealDuration: "1-2 days for city exploration",

    localFood: [
      "North Indian cuisine",
      "Street chaat",
      "Parathas",
      "Sweets like jalebi and rabri",
    ],

    festivals: ["Surajkund International Crafts Mela", "Diwali", "Holi", "Eid"],

    travelTips: [
      "Visit Surajkund during the crafts fair for cultural experience",
      "Avoid peak summer due to high temperatures",
      "Use metro connectivity for easy travel to Delhi",
      "Plan visits early morning or evening",
    ],
  },
  Gaya: {
    overview:
      "Gaya is a historic and sacred city in Bihar, known for its deep religious significance in Hinduism and Buddhism, and as a major pilgrimage destination.",

    detailedDescription:
      "Gaya is one of the oldest cities in India and holds immense spiritual importance. It is especially known for the Vishnupad Temple, where devotees perform 'Pind Daan' rituals for their ancestors. Located close to Bodh Gaya, where Lord Buddha attained enlightenment, the city attracts both Hindu pilgrims and Buddhist followers from around the world. Its rich heritage, temples, and religious traditions make it a key spiritual hub.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Vishnupad Temple",
        "Falgu River",
        "Mangla Gauri Temple",
        "Bodh Gaya (Mahabodhi Temple nearby)",
        "Dungeshwari Hills",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Spiritual Significance",
      items: [
        "Major site for Pind Daan rituals in Hinduism",
        "Close to Bodh Gaya (Buddha's enlightenment site)",
        "Ancient city with strong religious heritage",
        "Attracts pilgrims from across India and abroad",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration: "1-2 days for rituals and temple visits",

    localFood: [
      "Litti Chokha",
      "Thekua (traditional sweet)",
      "North Indian thali",
      "Street snacks",
    ],

    festivals: [
      "Pitru Paksha Mela",
      "Chhath Puja",
      "Diwali",
      "Buddha Purnima (nearby Bodh Gaya)",
    ],

    travelTips: [
      "Visit early morning for temple rituals",
      "Hire a local priest (panda) for Pind Daan guidance",
      "Combine visit with Bodh Gaya for full experience",
      "Carry cash for temple offerings",
    ],
  },
  Ghaziabad: {
    overview:
      "Ghaziabad is a major city in Uttar Pradesh and part of the Delhi NCR region, known for its rapid urban development, industries, and excellent connectivity to the national capital.",

    detailedDescription:
      "Ghaziabad is one of the fastest-growing cities in North India and an important part of the National Capital Region (NCR). It serves as a key residential and industrial hub with modern infrastructure, shopping centers, and educational institutions. Due to its proximity to Delhi, it offers a blend of urban lifestyle and economic opportunities, making it a popular destination for professionals and businesses.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "City Forest Park",
        "Swarna Jayanti Park",
        "ISKCON Temple Ghaziabad",
        "Shipra Mall",
        "Drizzling Land Water Park",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Urban & Economic Significance",
      items: [
        "Part of Delhi NCR region",
        "Major industrial and residential hub",
        "Excellent road and metro connectivity",
        "Growing IT and business infrastructure",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 10-25°C)",

    idealDuration: "1-2 days for city exploration",

    localFood: [
      "North Indian cuisine",
      "Street chaat",
      "Parathas",
      "Sweets like jalebi and gulab jamun",
    ],

    festivals: ["Diwali", "Holi", "Eid", "Navratri celebrations"],

    travelTips: [
      "Use metro for easy connectivity to Delhi",
      "Avoid peak traffic hours",
      "Visit parks early morning or evening",
      "Stay in well-connected areas for convenience",
    ],
  },
  "Gorakhpur Airport": {
    overview:
      "Gorakhpur Airport is an important domestic airport in Uttar Pradesh, serving as a key gateway to eastern UP and nearby regions like Nepal.",

    detailedDescription:
      "Gorakhpur Airport connects eastern Uttar Pradesh with major cities like Delhi, Mumbai, and Kolkata. It plays a vital role in regional connectivity and supports both civilian and defense operations. Located close to the city center, the airport provides convenient access to Gorakhpur, Kushinagar, and nearby pilgrimage and tourist destinations.",

    keyAttractions: {
      title: "Key Highlights",
      items: [
        "Modern terminal building",
        "Quick check-in and security process",
        "Close proximity to Gorakhpur city",
        "Easy road connectivity",
        "Nearby Kushinagar (Buddhist circuit)",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Travel & Regional Significance",
      items: [
        "Key airport for eastern Uttar Pradesh",
        "Gateway to Kushinagar and Buddhist tourism",
        "Important for defense and civilian flights",
        "Enhances connectivity to remote regions",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit:
      "Open year-round (best travel during October-March for pleasant weather)",

    idealDuration: "1-3 hours depending on flight schedule",

    localFood: [
      "Light snacks at airport kiosks",
      "North Indian meals nearby",
      "Tea and refreshments",
    ],

    festivals: [
      "Decorations during Diwali",
      "New Year celebrations",
      "Regional festival displays",
    ],

    travelTips: [
      "Reach airport at least 2 hours before departure",
      "Pre-book taxi or tempo traveller for smooth transfer",
      "Check flight status in advance",
      "Carry valid ID proof for entry",
    ],
  },
  Gurgaon: {
    overview:
      "Gurgaon, officially known as Gurugram, is a major financial and technology hub in Haryana, part of the Delhi NCR region, known for its modern infrastructure, corporate offices, and nightlife.",

    detailedDescription:
      "Gurgaon is one of India's leading business and IT centers, home to numerous multinational companies, startups, and corporate headquarters. With world-class infrastructure, shopping malls, luxury hotels, and entertainment hubs, the city offers a modern urban lifestyle. Despite its rapid development, Gurgaon also has historical roots connected to the Mahabharata era, believed to be the village of Guru Dronacharya.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Cyber Hub",
        "Kingdom of Dreams",
        "Ambience Mall",
        "Sultanpur National Park",
        "Leisure Valley Park",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Economic & Urban Significance",
      items: [
        "Major IT and corporate hub in India",
        "Part of Delhi NCR region",
        "Home to multinational companies and startups",
        "Modern infrastructure and lifestyle destination",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 10-25°C)",

    idealDuration: "1-2 days for business or leisure visit",

    localFood: [
      "Multi-cuisine restaurants",
      "North Indian dishes",
      "Street food and cafes",
      "Fine dining experiences",
    ],

    festivals: [
      "Diwali",
      "Holi",
      "New Year celebrations",
      "Corporate and cultural events",
    ],

    travelTips: [
      "Use metro for easy connectivity to Delhi",
      "Avoid peak traffic hours",
      "Explore Cyber Hub for food and nightlife",
      "Book accommodations in advance for business trips",
    ],
  },
  Gwalior: {
    overview:
      "Gwalior is a historic city in Madhya Pradesh known for its majestic forts, royal palaces, and rich cultural heritage.",

    detailedDescription:
      "Gwalior is one of the most historically significant cities in central India, famous for the grand Gwalior Fort which dominates the skyline. The city has been ruled by several dynasties including the Tomars, Mughals, and Scindias, leaving behind a rich legacy of architecture and culture. It is also known for classical music traditions, being the birthplace of the Gwalior Gharana.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Gwalior Fort",
        "Jai Vilas Palace",
        "Sas Bahu Temples",
        "Tomb of Tansen",
        "Sun Temple (Surya Mandir)",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Historical & Cultural Significance",
      items: [
        "One of India's most important historic cities",
        "Home to the famous Gwalior Fort",
        "Center of Hindustani classical music (Gwalior Gharana)",
        "Rich legacy of royal dynasties",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 10-25°C)",

    idealDuration: "2 days to explore forts, palaces, and temples",

    localFood: [
      "Bedai and kachori",
      "Poha and jalebi",
      "North Indian thali",
      "Local sweets",
    ],

    festivals: [
      "Tansen Music Festival",
      "Diwali",
      "Holi",
      "Gwalior Trade Fair",
    ],

    travelTips: [
      "Visit Gwalior Fort early morning for best views",
      "Attend Tansen Festival if visiting in winter",
      "Carry comfortable footwear for fort exploration",
      "Avoid peak summer due to high temperatures",
    ],
  },
  Jabalpur: {
    overview:
      "Jabalpur is a prominent city in Madhya Pradesh known for its natural beauty, marble rocks, waterfalls, and historical significance.",

    detailedDescription:
      "Jabalpur is one of the major cities of Madhya Pradesh, famous for the stunning Marble Rocks at Bhedaghat along the Narmada River. The city offers a perfect mix of natural attractions, historical sites, and cultural heritage. It also serves as an important administrative and military center. The scenic landscapes, especially during boat rides on the Narmada, make Jabalpur a popular tourist destination.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Bhedaghat Marble Rocks",
        "Dhuandhar Waterfall",
        "Madan Mahal Fort",
        "Balancing Rock",
        "Rani Durgavati Museum",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Natural & Historical Significance",
      items: [
        "Famous for Marble Rocks and Narmada River घाटs",
        "Major tourist destination in Madhya Pradesh",
        "Historical forts and cultural heritage",
        "Important administrative and defense center",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration: "2-3 days to explore natural and historical attractions",

    localFood: [
      "Poha and jalebi",
      "Bhutte ka kees",
      "North Indian thali",
      "Street chaat",
    ],

    festivals: ["Narmada Jayanti", "Diwali", "Holi", "Navratri"],

    travelTips: [
      "Visit Bhedaghat during sunrise or sunset for best views",
      "Take a boat ride in Marble Rocks for unique experience",
      "Avoid monsoon for waterfall visits due to strong currents",
      "Carry comfortable footwear for sightseeing",
    ],
  },
  Jhansi: {
    overview:
      "Jhansi is a historic city in Uttar Pradesh known for its role in India's freedom struggle and the bravery of Rani Lakshmibai.",

    detailedDescription:
      "Jhansi is one of the most iconic historical cities in India, famous for the legendary queen Rani Lakshmibai who fought bravely during the 1857 revolt against British rule. The city is home to the grand Jhansi Fort, which stands as a symbol of courage and resistance. Jhansi also serves as a gateway to Bundelkhand and nearby tourist destinations like Orchha and Khajuraho.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Jhansi Fort",
        "Rani Mahal",
        "Jhansi Museum",
        "St. Jude’s Shrine",
        "Barua Sagar Fort",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Historical Significance",
      items: [
        "Center of the 1857 Revolt (First War of Independence)",
        "Associated with Rani Lakshmibai’s bravery",
        "Rich Bundelkhand heritage",
        "Important historical tourism destination",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-25°C)",

    idealDuration: "1-2 days for exploring historical sites",

    localFood: [
      "Bundelkhandi cuisine",
      "Kachori and sabzi",
      "Poha and jalebi",
      "Local sweets",
    ],

    festivals: ["Jhansi Mahotsav", "Diwali", "Holi", "Navratri"],

    travelTips: [
      "Visit Jhansi Fort early morning to avoid heat",
      "Combine trip with Orchha for better experience",
      "Carry water and wear comfortable footwear",
      "Avoid peak summer due to high temperatures",
    ],
  },
  Lakhimpur: {
    overview:
      "Lakhimpur, also known as Lakhimpur Kheri, is a city in Uttar Pradesh known for its lush greenery, agricultural richness, and proximity to the Dudhwa National Park.",

    detailedDescription:
      "Lakhimpur Kheri is the largest district in Uttar Pradesh and is famous for its dense forests, wildlife, and agricultural productivity, especially sugarcane farming. It serves as the gateway to Dudhwa National Park, one of India's most important wildlife reserves. The city offers a peaceful environment with natural beauty and is ideal for nature lovers and wildlife enthusiasts.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Dudhwa National Park",
        "Frog Temple (Oel)",
        "Shiv Temple Gola Gokarannath",
        "Kishanpur Wildlife Sanctuary",
        "Kheri Forest Areas",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Natural & Agricultural Significance",
      items: [
        "Gateway to Dudhwa National Park",
        "Largest district in Uttar Pradesh",
        "Rich in biodiversity and wildlife",
        "Major sugarcane producing region",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "November-March (Best for wildlife and pleasant weather)",

    idealDuration: "2-3 days for wildlife exploration and local sightseeing",

    localFood: [
      "North Indian thali",
      "Fresh dairy products",
      "Local sweets like peda",
      "Simple rural cuisine",
    ],

    festivals: [
      "Mahashivratri (Gola Gokarannath)",
      "Diwali",
      "Holi",
      "Local fairs and melas",
    ],

    travelTips: [
      "Visit Dudhwa National Park during winter for best wildlife sightings",
      "Carry necessary permits for forest entry",
      "Travel during daytime for safety",
      "Respect wildlife rules and guidelines",
    ],
  },
  "Lucknow Airport": {
    overview:
      "Lucknow Airport, officially known as Chaudhary Charan Singh International Airport, is a major airport in Uttar Pradesh serving both domestic and international flights.",

    detailedDescription:
      "Chaudhary Charan Singh International Airport in Lucknow is one of the busiest airports in North India. It connects the state capital to major cities across India and international destinations. With modern terminals, efficient services, and expanding infrastructure, the airport plays a vital role in boosting tourism, business, and connectivity in Uttar Pradesh.",

    keyAttractions: {
      title: "Key Highlights",
      items: [
        "Modern terminal facilities",
        "Domestic & international connectivity",
        "Airport lounges",
        "Duty-free shopping",
        "Easy city access via road and taxi services",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Travel & Connectivity Significance",
      items: [
        "Major airport in Uttar Pradesh",
        "Gateway to Lucknow and Awadh region",
        "Important hub for domestic and international travel",
        "Boosts tourism and business connectivity",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit:
      "Open 24/7 (Best to travel early morning or late night to avoid traffic)",

    idealDuration: "2-4 hours before flight departure",

    localFood: [
      "Airport cafes and restaurants",
      "Lucknowi cuisine options",
      "Snacks and beverages",
    ],

    festivals: [
      "Decorations during Diwali",
      "New Year celebrations",
      "Cultural displays during festivals",
    ],

    travelTips: [
      "Reach at least 2-3 hours before domestic and 3-4 hours before international flights",
      "Pre-book taxi or tempo traveller for smooth transfers",
      "Use app-based cabs for convenience",
      "Keep ID and boarding pass ready",
    ],
  },
  Meerut: {
    overview:
      "Meerut is a historic city in Uttar Pradesh known for its role in India's first war of independence in 1857, as well as its sports goods and industrial significance.",

    detailedDescription:
      "Meerut is one of the oldest cities in India and holds great historical importance as the starting point of the 1857 revolt against British rule. Today, it is a major industrial and commercial center, especially known for manufacturing sports goods and musical instruments. The city also features several temples, churches, and colonial-era buildings, reflecting its rich heritage.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Augarnath Temple (Kali Paltan Mandir)",
        "St. John's Church",
        "Gandhi Bagh",
        "Suraj Kund Park",
        "Hastinapur Wildlife Sanctuary (nearby)",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Historical & Industrial Significance",
      items: [
        "Birthplace of the 1857 Revolt (First War of Independence)",
        "Major center for sports goods manufacturing",
        "Rich cultural and colonial heritage",
        "Important commercial hub in western UP",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 10-25°C)",

    idealDuration: "1-2 days for city exploration",

    localFood: [
      "Meerut special revdi and gajak",
      "North Indian thali",
      "Street chaat",
      "Jalebi and kachori",
    ],

    festivals: ["Nauchandi Mela", "Diwali", "Holi", "Eid"],

    travelTips: [
      "Visit Augarnath Temple early morning",
      "Explore local markets for sports goods",
      "Avoid peak traffic hours",
      "Plan a short trip to Hastinapur nearby",
    ],
  },
  "Nepal Border": {
    overview:
      "The Nepal Border refers to the international boundary between India and Nepal, known for open border movement, cultural exchange, and easy cross-border travel.",

    detailedDescription:
      "The India–Nepal border is one of the most unique international borders in the world, allowing free movement of people without visa requirements for Indian and Nepalese citizens. Popular border crossings like Sonauli, Raxaul, and Nepalgunj serve as major transit points for tourists, traders, and pilgrims. The region is culturally rich, with strong ties between communities on both sides, making it an important hub for travel to Nepal destinations like Lumbini, Pokhara, and Kathmandu.",

    keyAttractions: {
      title: "Key Highlights",
      items: [
        "Sonauli Border Crossing",
        "Raxaul Border (Birgunj entry)",
        "Nepalgunj Border",
        "Lumbini (nearby, birthplace of Buddha)",
        "Cross-border markets and local bazaars",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Travel & Cultural Significance",
      items: [
        "Open international border (no visa for Indians)",
        "Gateway to Nepal tourism (Kathmandu, Pokhara, Lumbini)",
        "Strong cultural and economic ties between India and Nepal",
        "Important route for pilgrimage and trade",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-April (Pleasant weather and best for travel)",

    idealDuration: "Half day to 1 day for crossing and nearby exploration",

    localFood: [
      "Indian and Nepali cuisine",
      "Momos and thukpa",
      "Street snacks and tea stalls",
      "Local sweets",
    ],

    festivals: [
      "Dashain (Nepal)",
      "Tihar (Deepawali in Nepal)",
      "Chhath Puja",
      "Holi",
    ],

    travelTips: [
      "Carry valid ID proof (Aadhar/Passport recommended)",
      "Check border timings before travel",
      "Avoid late night crossing for safety",
      "Exchange currency if traveling into Nepal",
    ],
  },
  "Prayagraj Airport": {
    overview:
      "Prayagraj Airport, also known as Bamrauli Airport, is a key domestic airport in Uttar Pradesh serving the city of Prayagraj and nearby regions.",

    detailedDescription:
      "Prayagraj Airport (Bamrauli) plays an important role in connecting the holy city of Prayagraj with major Indian cities like Delhi, Mumbai, and Bangalore. It is especially significant during large religious events like the Kumbh Mela, when millions of pilgrims visit the city. The airport has modern facilities and is located close to the city center, ensuring convenient travel for passengers.",

    keyAttractions: {
      title: "Key Highlights",
      items: [
        "Modern terminal building",
        "Quick check-in and boarding process",
        "Close proximity to Sangam area",
        "Easy road connectivity to city",
        "Taxi and cab availability",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Travel & Religious Significance",
      items: [
        "Gateway to Prayagraj (Triveni Sangam)",
        "Important during Kumbh Mela and Magh Mela",
        "Connects major Indian cities",
        "Supports religious and tourism travel",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit:
      "Open year-round (Best during October-March for pleasant weather)",

    idealDuration: "1-3 hours depending on flight schedule",

    localFood: [
      "Snacks and beverages at airport",
      "North Indian food nearby",
      "Street food options in city",
    ],

    festivals: ["Kumbh Mela", "Magh Mela", "Diwali", "Holi"],

    travelTips: [
      "Reach airport at least 2 hours before departure",
      "Book taxi or tempo traveller in advance",
      "Check flight updates before leaving",
      "Carry valid ID proof for entry",
    ],
  },
  Roorkee: {
    overview:
      "Roorkee is a historic city in Uttarakhand known for its prestigious engineering institution, IIT Roorkee, and its contribution to education and irrigation engineering in India.",

    detailedDescription:
      "Roorkee is one of the oldest engineering hubs in India and is home to the renowned IIT Roorkee, formerly known as Thomason College of Civil Engineering. The city has played a key role in the development of irrigation systems, including the famous Ganga Canal. With its blend of academic excellence, historical importance, and proximity to Haridwar and Rishikesh, Roorkee is both an educational and transit hub.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "IIT Roorkee Campus",
        "Ganga Canal",
        "Solani Aqueduct",
        "Roorkee Group Museum and Archives",
        "Piran Kaliyar Sharif Dargah (nearby)",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Educational & Historical Significance",
      items: [
        "Home to IIT Roorkee (one of India’s oldest engineering institutes)",
        "Key center for irrigation engineering (Ganga Canal)",
        "Rich British-era heritage",
        "Important transit city near Haridwar and Rishikesh",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 10-25°C)",

    idealDuration: "1 day for city visit, 2 days including nearby places",

    localFood: [
      "North Indian cuisine",
      "Street food and chaat",
      "Sweets like jalebi and peda",
      "Local dhaba meals",
    ],

    festivals: ["Urs at Piran Kaliyar", "Diwali", "Holi", "Eid"],

    travelTips: [
      "Visit IIT campus with permission for architecture and heritage",
      "Combine trip with Haridwar and Rishikesh",
      "Avoid peak summer due to heat",
      "Use road transport for easy connectivity",
    ],
  },
  Saharanpur: {
    overview:
      "Saharanpur is a city in Uttar Pradesh known for its wood carving industry, cultural heritage, and proximity to Uttarakhand.",

    detailedDescription:
      "Saharanpur is an important industrial and cultural city in western Uttar Pradesh. It is globally famous for its intricate wood carving and handicraft industry. The city also has historical and religious importance, with several temples, dargahs, and gardens. Located near the foothills of the Shivalik range, Saharanpur serves as a gateway to Uttarakhand destinations like Haridwar and Dehradun.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Shakumbhari Devi Temple",
        "Baba Lal Das Temple",
        "Company Garden",
        "Nau Gaza Peer Dargah",
        "Hathnikund Barrage (nearby)",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Cultural & Industrial Significance",
      items: [
        "Famous worldwide for wood carving industry",
        "Rich blend of Hindu and Sufi traditions",
        "Gateway to Uttarakhand hill stations",
        "Important trade and handicraft center",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 10-25°C)",

    idealDuration: "1-2 days for city and nearby attractions",

    localFood: [
      "North Indian cuisine",
      "Street chaat",
      "Kachori and sabzi",
      "Local sweets like jalebi",
    ],

    festivals: ["Navratri (Shakumbhari Devi Temple)", "Diwali", "Holi", "Eid"],

    travelTips: [
      "Visit Shakumbhari Devi Temple early morning",
      "Explore local markets for wood handicrafts",
      "Combine trip with Dehradun or Haridwar",
      "Avoid peak summer due to heat",
    ],
  },
  Siddharthnagar: {
    overview:
      "Siddharthnagar is a district in Uttar Pradesh known for its proximity to the birthplace of Lord Buddha and its importance in the Buddhist pilgrimage circuit.",

    detailedDescription:
      "Siddharthnagar holds great historical and spiritual importance as it lies close to Lumbini in Nepal, the birthplace of Lord Buddha. The region is part of the Buddhist circuit and attracts pilgrims and tourists from around the world. It is also known for its agricultural landscape and peaceful rural environment. The district connects India with Nepal through nearby border areas, making it an important transit and cultural zone.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Kapilvastu (ancient kingdom of Buddha)",
        "Lumbini (nearby, Nepal)",
        "Rapti River",
        "Buddhist archaeological sites",
        "Local temples and monasteries",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Spiritual & Historical Significance",
      items: [
        "Associated with Lord Buddha’s early life (Kapilvastu)",
        "Part of the international Buddhist circuit",
        "Close to Nepal border and Lumbini",
        "Important for religious tourism and heritage",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration: "1-2 days for local exploration and nearby visits",

    localFood: [
      "North Indian rural cuisine",
      "Litti Chokha",
      "Simple thali meals",
      "Local sweets",
    ],

    festivals: ["Buddha Purnima", "Chhath Puja", "Diwali", "Holi"],

    travelTips: [
      "Combine visit with Lumbini and Kushinagar",
      "Carry ID for travel near Nepal border",
      "Travel during daytime for better connectivity",
      "Respect religious sites and traditions",
    ],
  },
  "Varanasi Airport": {
    overview:
      "Varanasi Airport, officially known as Lal Bahadur Shastri International Airport, is a major airport in Uttar Pradesh serving domestic and international travelers visiting the holy city of Varanasi.",

    detailedDescription:
      "Lal Bahadur Shastri International Airport is located in Babatpur, about 25 km from Varanasi city. It connects Varanasi to major Indian cities as well as international destinations. The airport plays a key role in tourism, especially for pilgrims visiting Kashi Vishwanath Temple, Sarnath, and other spiritual sites. With modern facilities and growing connectivity, it serves as a major gateway to eastern Uttar Pradesh.",

    keyAttractions: {
      title: "Key Highlights",
      items: [
        "Modern airport terminal",
        "Domestic & international flight connectivity",
        "Quick check-in and security process",
        "Easy road connectivity to Varanasi city",
        "Taxi and transport availability",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Travel & Spiritual Significance",
      items: [
        "Gateway to Varanasi (Kashi Vishwanath Temple)",
        "Important for international pilgrims and tourists",
        "Connects eastern Uttar Pradesh globally",
        "Supports tourism and religious travel",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit:
      "Open year-round (Best during October-March for pleasant weather)",

    idealDuration: "1-3 hours depending on flight schedule",

    localFood: [
      "Snacks and beverages at airport",
      "North Indian food options",
      "Tea and light refreshments",
    ],

    festivals: [
      "Decorations during Diwali",
      "Dev Deepawali (Varanasi)",
      "Holi",
      "Cultural displays during festivals",
    ],

    travelTips: [
      "Reach airport at least 2 hours before departure",
      "Pre-book taxi or tempo traveller for smooth transfers",
      "Check flight status before leaving",
      "Carry valid ID proof for entry",
    ],
  },
  Amethi: {
    overview:
      "Amethi is a district in Uttar Pradesh known for its political significance, rural charm, and cultural heritage.",

    detailedDescription:
      "Amethi is a historically and politically important region in Uttar Pradesh, often recognized as a prominent constituency in Indian politics. The district is largely rural with rich agricultural land and traditional lifestyle. It also features temples, historical sites, and natural surroundings, offering a glimpse into the cultural fabric of eastern Uttar Pradesh.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Kalikan Dham Temple",
        "Shiv Mandir Amethi",
        "Parijat Tree (nearby Barabanki)",
        "Local lakes and rural landscapes",
        "Historical sites in nearby regions",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Cultural & Political Significance",
      items: [
        "Prominent political constituency in India",
        "Rich agricultural and rural heritage",
        "Strong cultural traditions of Uttar Pradesh",
        "Peaceful and traditional lifestyle",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration: "1 day for local visit, 2 days for nearby exploration",

    localFood: [
      "Traditional North Indian thali",
      "Kachori and sabzi",
      "Litti Chokha",
      "Local sweets like peda and jalebi",
    ],

    festivals: ["Diwali", "Holi", "Navratri", "Local village fairs and melas"],

    travelTips: [
      "Combine visit with nearby cities like Ayodhya and Sultanpur",
      "Travel during daytime for better connectivity",
      "Carry cash for rural areas",
      "Respect local customs and traditions",
    ],
  },
  Bahraich: {
    overview:
      "Bahraich is a district in Uttar Pradesh known for its religious significance, wildlife sanctuaries, and proximity to the Indo-Nepal border.",

    detailedDescription:
      "Bahraich is an important city in northeastern Uttar Pradesh with a blend of spiritual, cultural, and natural attractions. It is famous for the Dargah of Ghazi Saiyyad Salar Masud, which attracts devotees from across the country. The district is also home to Katarniaghat Wildlife Sanctuary, a part of the Dudhwa Tiger Reserve, offering rich biodiversity and scenic landscapes. Its location near the Nepal border makes it an important transit and cultural hub.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Ghazi Saiyyad Salar Masud Dargah",
        "Katarniaghat Wildlife Sanctuary",
        "Saryu River banks",
        "Local temples and mosques",
        "Indo-Nepal border areas",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Spiritual & Natural Significance",
      items: [
        "Famous Sufi pilgrimage site (Dargah)",
        "Part of Dudhwa Tiger Reserve ecosystem",
        "Rich biodiversity and wildlife tourism",
        "Close to Nepal border",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "November-March (Best for wildlife and pleasant weather)",

    idealDuration: "2-3 days for wildlife and religious visits",

    localFood: [
      "North Indian cuisine",
      "Street food and chaat",
      "Traditional sweets",
      "Local village-style meals",
    ],

    festivals: ["Urs at Ghazi Miyan Dargah", "Diwali", "Holi", "Eid"],

    travelTips: [
      "Visit Katarniaghat with proper permissions",
      "Respect religious customs at dargah",
      "Travel during daytime for safety",
      "Carry essentials for rural travel",
    ],
  },
  Bulandshahr: {
    overview:
      "Bulandshahr is a historic city in Uttar Pradesh known for its cultural heritage, temples, and proximity to the Ganga river.",

    detailedDescription:
      "Bulandshahr is one of the oldest cities in western Uttar Pradesh with a rich historical and cultural background. It is known for its traditional lifestyle, religious sites, and agricultural economy. The district also includes Khurja, which is famous for its pottery industry. Its proximity to the Ganga River and major cities like Noida and Delhi makes it an important regional center.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Anupshahr (Ganga Ghat)",
        "Khurja Pottery Town",
        "Ahar Archaeological Site",
        "Shiv Temple Bulandshahr",
        "Local markets and bazaars",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Cultural & Historical Significance",
      items: [
        "Ancient city with historical roots",
        "Famous for Khurja pottery industry",
        "Religious importance due to Ganga ghats",
        "Agricultural and cultural hub",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 10-25°C)",

    idealDuration: "1-2 days for local exploration",

    localFood: [
      "North Indian cuisine",
      "Kachori and sabzi",
      "Street chaat",
      "Traditional sweets like jalebi",
    ],

    festivals: ["Ganga Snan festivals", "Diwali", "Holi", "Navratri"],

    travelTips: [
      "Visit Anupshahr for Ganga darshan",
      "Explore Khurja for pottery shopping",
      "Avoid peak summer due to heat",
      "Plan travel during daytime",
    ],
  },
  Chandigarh: {
    overview:
      "Chandigarh is a modern planned city and the capital of both Punjab and Haryana, known for its clean infrastructure, gardens, and urban design.",

    detailedDescription:
      "Chandigarh is one of India's best-planned cities, designed by the famous architect Le Corbusier. Known for its wide roads, green spaces, and organized sectors, the city offers a high quality of life. It is a major administrative, cultural, and educational center in North India. Chandigarh is also famous for its unique attractions like Rock Garden and Sukhna Lake, making it a popular tourist destination.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Rock Garden",
        "Sukhna Lake",
        "Rose Garden",
        "Capitol Complex",
        "Elante Mall",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Urban & Cultural Significance",
      items: [
        "India’s first planned modern city",
        "Capital of Punjab and Haryana",
        "Designed by Le Corbusier",
        "High standard of living and infrastructure",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 10-25°C)",

    idealDuration: "2-3 days for complete city exploration",

    localFood: [
      "Punjabi cuisine",
      "Chole bhature",
      "Butter chicken",
      "Street food and cafes",
    ],

    festivals: ["Rose Festival", "Diwali", "Holi", "Baisakhi"],

    travelTips: [
      "Visit Rock Garden and Sukhna Lake early morning or evening",
      "Use sector-based navigation for easy travel",
      "Try local Punjabi food",
      "Maintain cleanliness as per city norms",
    ],
  },
  Gonda: {
    overview:
      "Gonda is a district in Uttar Pradesh known for its religious significance, historical heritage, and proximity to Ayodhya.",

    detailedDescription:
      "Gonda is a culturally rich district in eastern Uttar Pradesh with deep historical and spiritual roots. It is closely associated with ancient Kosala Kingdom and lies near Ayodhya, making it an important region for religious tourism. The district is also known for its rural charm, temples, and traditional lifestyle. Its location makes it a convenient stop for travelers visiting Ayodhya and nearby pilgrimage sites.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Swaminarayan Chhapaiya Temple",
        "Prithvinath Temple",
        "Saryu River Ghats",
        "Local temples and religious sites",
        "Nearby Ayodhya attractions",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Spiritual & Cultural Significance",
      items: [
        "Close to Ayodhya (birthplace of Lord Ram)",
        "Part of ancient Kosala region",
        "Important for Hindu pilgrimage",
        "Rich rural and cultural heritage",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration: "1 day for local visit, 2 days with Ayodhya trip",

    localFood: [
      "Traditional North Indian thali",
      "Kachori and sabzi",
      "Litti Chokha",
      "Local sweets",
    ],

    festivals: ["Ram Navami (nearby Ayodhya)", "Diwali", "Holi", "Navratri"],

    travelTips: [
      "Combine visit with Ayodhya for better experience",
      "Travel during daytime for better connectivity",
      "Carry cash for rural areas",
      "Respect local traditions and temples",
    ],
  },
  Hapur: {
    overview:
      "Hapur is a city in Uttar Pradesh known for its industrial growth, grain markets, and proximity to Delhi NCR.",

    detailedDescription:
      "Hapur is an important commercial and industrial city in western Uttar Pradesh. It is well-known for its large grain markets and steel-related industries. Due to its close proximity to Delhi and Ghaziabad, Hapur has seen rapid development and serves as a key transit and business hub. The city also offers a mix of traditional markets, temples, and nearby natural spots like Brijghat on the Ganga River.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Brijghat (Ganga River)",
        "Garh Mukteshwar (nearby)",
        "Shri Digambar Jain Mandir",
        "Local grain markets",
        "Nearby temples and ghats",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Industrial & Commercial Significance",
      items: [
        "Major grain trading hub",
        "Growing industrial city near Delhi NCR",
        "Important transport and logistics center",
        "Blend of traditional and modern economy",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 10-25°C)",

    idealDuration: "1 day for local exploration",

    localFood: [
      "North Indian cuisine",
      "Street chaat",
      "Kachori and sabzi",
      "Sweets like jalebi",
    ],

    festivals: [
      "Ganga Snan festivals (Brijghat)",
      "Diwali",
      "Holi",
      "Navratri",
    ],

    travelTips: [
      "Visit Brijghat early morning for Ganga darshan",
      "Avoid peak traffic hours",
      "Travel during daytime for convenience",
      "Explore nearby Garh Mukteshwar for religious sites",
    ],
  },
  Hardoi: {
    overview:
      "Hardoi is a district in Uttar Pradesh known for its historical roots, religious sites, and agricultural significance.",

    detailedDescription:
      "Hardoi is an ancient city with connections to Hindu mythology and history. It is believed to have been named after King Haridruhi, mentioned in ancient texts. The district is primarily agricultural and known for its simple rural lifestyle. Hardoi also features temples and local attractions that reflect the cultural heritage of Uttar Pradesh, making it a peaceful destination for travelers.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Shravan Devi Temple",
        "Baba Temple Hardoi",
        "Sandi Bird Sanctuary (nearby)",
        "Local temples and lakes",
        "Traditional rural markets",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Cultural & Historical Significance",
      items: [
        "Ancient roots connected to Hindu mythology",
        "Rich agricultural region",
        "Peaceful rural environment",
        "Important regional center in central UP",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration: "1 day for local visit",

    localFood: [
      "North Indian thali",
      "Kachori and sabzi",
      "Litti Chokha",
      "Local sweets",
    ],

    festivals: [
      "Diwali",
      "Holi",
      "Navratri",
      "Local fairs and temple festivals",
    ],

    travelTips: [
      "Visit nearby Sandi Bird Sanctuary during winter",
      "Travel during daytime for convenience",
      "Carry cash for rural areas",
      "Respect local customs and traditions",
    ],
  },
  Jamshedpur: {
    overview:
      "Jamshedpur is a major industrial city in Jharkhand, known as India’s first planned industrial city and home to Tata Steel.",

    detailedDescription:
      "Jamshedpur, also known as Tatanagar, was founded by Jamsetji Tata and is one of the most well-planned industrial cities in India. It is the headquarters of Tata Steel and serves as a major economic hub. Despite being an industrial city, Jamshedpur is known for its clean environment, green parks, and organized infrastructure. It offers a unique blend of industry, nature, and modern urban lifestyle.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Jubilee Park",
        "Dimna Lake",
        "Tata Steel Zoological Park",
        "Hudco Lake",
        "Bhuvaneshwari Temple",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Industrial & Urban Significance",
      items: [
        "India’s first planned industrial city",
        "Headquarters of Tata Steel",
        "Major steel production hub",
        "Clean and well-maintained urban infrastructure",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 15-28°C)",

    idealDuration: "2 days for city exploration",

    localFood: [
      "Jharkhandi cuisine",
      "Litti Chokha",
      "North Indian thali",
      "Street food and snacks",
    ],

    festivals: [
      "Durga Puja",
      "Diwali",
      "Holi",
      "Tata Steel Founder's Day celebrations",
    ],

    travelTips: [
      "Visit Jubilee Park in the evening for best experience",
      "Plan a trip to Dimna Lake for scenic views",
      "Maintain cleanliness as per city norms",
      "Use local transport for easy travel",
    ],
  },
  Muzaffarnagar: {
    overview:
      "Muzaffarnagar is a major city in Uttar Pradesh known for its agricultural richness, especially sugarcane production, and its strategic location in western UP.",

    detailedDescription:
      "Muzaffarnagar is an important agricultural and commercial hub in western Uttar Pradesh. The district is one of the largest producers of sugarcane in India and plays a key role in the sugar industry. It also has cultural and religious importance with temples, mosques, and nearby pilgrimage sites. Due to its location on major highways, it serves as a key transit point between Delhi, Haridwar, and other northern cities.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Shukratal (nearby, sacred Ganga site)",
        "Ganeshdham Temple",
        "Bhairon Temple",
        "Local markets and bazaars",
        "Nearby Ganga ghats",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Agricultural & Cultural Significance",
      items: [
        "Major sugarcane producing region",
        "Important hub for sugar industry",
        "Strategic location between Delhi and Uttarakhand",
        "Blend of rural and urban culture",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 10-25°C)",

    idealDuration: "1 day for local visit, 2 days with nearby exploration",

    localFood: [
      "North Indian cuisine",
      "Sugarcane-based sweets and juices",
      "Kachori and sabzi",
      "Street chaat",
    ],

    festivals: ["Diwali", "Holi", "Eid", "Local fairs and melas"],

    travelTips: [
      "Visit Shukratal for spiritual experience",
      "Avoid peak summer due to high temperatures",
      "Travel during daytime for convenience",
      "Explore local markets for agricultural products",
    ],
  },
  Nagpur: {
    overview:
      "Nagpur is a major city in Maharashtra known as the geographical center of India and famous for its oranges, industries, and growing urban infrastructure.",

    detailedDescription:
      "Nagpur, often called the 'Orange City of India', is a key commercial and political center in central India. It holds strategic importance due to its central location in the country. The city is known for its clean roads, green spaces, and modern development. Nagpur also has historical and religious importance with sites like Deekshabhoomi, where Dr. B.R. Ambedkar embraced Buddhism. It is rapidly emerging as a smart city with strong industrial growth.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Deekshabhoomi",
        "Futala Lake",
        "Ambazari Lake",
        "Sitabuldi Fort",
        "Raman Science Centre",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Economic & Cultural Significance",
      items: [
        "Geographical center of India (Zero Mile)",
        "Famous for orange production",
        "Important industrial and commercial hub",
        "Key center for Buddhism in India",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-30°C)",

    idealDuration: "2-3 days for city exploration",

    localFood: [
      "Nagpur oranges",
      "Tarri Poha",
      "Saoji cuisine",
      "Street snacks and chaat",
    ],

    festivals: [
      "Nagpur Orange Festival",
      "Diwali",
      "Holi",
      "Dhamma Chakra Pravartan Day",
    ],

    travelTips: [
      "Visit Deekshabhoomi for cultural experience",
      "Try local Saoji cuisine for authentic taste",
      "Avoid peak summer due to extreme heat",
      "Plan visits early morning or evening",
    ],
  },
  Pratapgarh: {
    overview:
      "Pratapgarh is a district in Uttar Pradesh known for its historical heritage, religious sites, and famous amla (gooseberry) production.",

    detailedDescription:
      "Pratapgarh is a culturally rich district located in eastern Uttar Pradesh. It is well-known for its production of high-quality amla (Indian gooseberry), which is widely used in food and Ayurvedic medicine. The district has historical importance with several ancient temples and sites. Its peaceful environment, traditional lifestyle, and proximity to cities like Prayagraj and Ayodhya make it an important regional destination.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Bela Devi Temple",
        "Bhakti Dham Temple",
        "Sai River banks",
        "Local temples and heritage sites",
        "Nearby Prayagraj attractions",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Cultural & Agricultural Significance",
      items: [
        "Famous for amla (gooseberry) production",
        "Rich cultural and religious heritage",
        "Peaceful rural and semi-urban environment",
        "Important regional trade center",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration: "1 day for local exploration",

    localFood: [
      "Amla-based products and sweets",
      "North Indian thali",
      "Kachori and sabzi",
      "Local street food",
    ],

    festivals: [
      "Diwali",
      "Holi",
      "Navratri",
      "Local fairs and temple festivals",
    ],

    travelTips: [
      "Visit local markets for amla products",
      "Combine trip with Prayagraj or Ayodhya",
      "Travel during daytime for convenience",
      "Carry cash for small shops and rural areas",
    ],
  },
  "Rae Bareli": {
    overview:
      "Rae Bareli is a district in Uttar Pradesh known for its political importance, cultural heritage, and industrial establishments.",

    detailedDescription:
      "Rae Bareli is a historically and politically significant district in Uttar Pradesh. It is known for its association with Indian politics and houses several important institutions and industries. The city also has religious sites, parks, and a peaceful environment reflecting traditional North Indian culture. Its proximity to Lucknow and Prayagraj makes it an important regional center for travel and commerce.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Indira Gandhi Memorial Botanical Garden",
        "Behta Bridge (Sai River)",
        "Samaspur Bird Sanctuary",
        "Dalmau (historic town nearby)",
        "Local temples and heritage sites",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Political & Cultural Significance",
      items: [
        "Prominent political constituency in India",
        "Presence of major industries and institutions",
        "Rich cultural and historical heritage",
        "Important regional hub in central Uttar Pradesh",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration: "1-2 days for local exploration",

    localFood: [
      "North Indian thali",
      "Kachori and sabzi",
      "Street food and chaat",
      "Local sweets like jalebi and peda",
    ],

    festivals: [
      "Diwali",
      "Holi",
      "Navratri",
      "Local fairs and cultural events",
    ],

    travelTips: [
      "Visit Samaspur Bird Sanctuary during winter for bird watching",
      "Combine trip with Lucknow or Prayagraj",
      "Travel during daytime for better connectivity",
      "Carry cash for local markets",
    ],
  },
  Rewa: {
    overview:
      "Rewa is a historic city in Madhya Pradesh known for its royal heritage, waterfalls, and as the land of the rare white tiger.",

    detailedDescription:
      "Rewa is a culturally rich city with a glorious royal past, once ruled by the Baghel dynasty. It is famously known as the place where the rare white tiger was first discovered. The city is surrounded by natural beauty, including waterfalls and hills, making it an attractive destination for nature lovers. Rewa also holds historical importance with forts, temples, and palaces reflecting its regal heritage.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Rewa Fort",
        "Govindgarh Palace & Lake",
        "Keoti Waterfall",
        "Purwa Waterfall",
        "White Tiger Safari (Mukundpur)",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Historical & Natural Significance",
      items: [
        "Birthplace of the rare white tiger",
        "Former princely state with royal heritage",
        "Famous for waterfalls and scenic beauty",
        "Cultural center in eastern Madhya Pradesh",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration: "2 days for sightseeing and nature exploration",

    localFood: [
      "Poha and jalebi",
      "Bundelkhandi cuisine",
      "North Indian thali",
      "Local sweets",
    ],

    festivals: ["Diwali", "Holi", "Navratri", "Local cultural festivals"],

    travelTips: [
      "Visit waterfalls during or just after monsoon for best views",
      "Explore White Tiger Safari early morning",
      "Carry comfortable footwear for sightseeing",
      "Avoid peak summer due to heat",
    ],
  },
  Satna: {
    overview:
      "Satna is a city in Madhya Pradesh known for its religious importance, cement industries, and as a gateway to famous pilgrimage sites like Chitrakoot.",

    detailedDescription:
      "Satna is an important industrial and religious city in Madhya Pradesh. It is well-known for its cement production and also serves as a key transit point for pilgrims visiting Chitrakoot, a major spiritual destination associated with Lord Ram. The city combines industrial growth with cultural and religious heritage, making it significant for both business and tourism.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Chitrakoot (nearby)",
        "Maa Sharda Temple (Maihar)",
        "Madhavgarh Fort",
        "Ram Van Temple",
        "Local markets and temples",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Religious & Industrial Significance",
      items: [
        "Gateway to Chitrakoot pilgrimage site",
        "Famous for cement industries",
        "Important railway and transport hub",
        "Cultural and spiritual importance in MP",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration: "1-2 days for city and nearby visits",

    localFood: [
      "Poha and jalebi",
      "North Indian thali",
      "Bundelkhandi cuisine",
      "Street food",
    ],

    festivals: [
      "Navratri (Maihar Temple)",
      "Diwali",
      "Holi",
      "Local religious fairs",
    ],

    travelTips: [
      "Visit Maihar Temple early morning for darshan",
      "Combine trip with Chitrakoot for better experience",
      "Travel during daytime for convenience",
      "Avoid peak summer due to heat",
    ],
  },
  Sitapur: {
    overview:
      "Sitapur is a district in Uttar Pradesh known for its religious sites, cultural heritage, and peaceful rural environment.",

    detailedDescription:
      "Sitapur is a historically significant district in Uttar Pradesh with roots in ancient Hindu traditions. It is known for its temples, sacred sites, and connection to mythological stories. The city has a calm and traditional atmosphere, with agriculture being the primary occupation. Its proximity to Lucknow makes it an accessible destination for short trips and regional travel.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Naimisharanya (nearby sacred site)",
        "Lalita Devi Temple",
        "Chakratirth",
        "Local temples and ghats",
        "Traditional rural markets",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Religious & Cultural Significance",
      items: [
        "Close to Naimisharanya (major Hindu pilgrimage site)",
        "Rich mythological and spiritual heritage",
        "Peaceful rural environment",
        "Important regional district in central UP",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration: "1 day for local visit, 2 days including Naimisharanya",

    localFood: [
      "North Indian thali",
      "Kachori and sabzi",
      "Litti Chokha",
      "Local sweets",
    ],

    festivals: [
      "Navratri (Naimisharanya)",
      "Diwali",
      "Holi",
      "Local religious fairs",
    ],

    travelTips: [
      "Visit Naimisharanya for spiritual experience",
      "Travel during daytime for convenience",
      "Carry cash for rural areas",
      "Respect local traditions and temple rules",
    ],
  },
  Unnao: {
    overview:
      "Unnao is a district in Uttar Pradesh known for its historical significance, religious sites, and proximity to Lucknow and Kanpur.",

    detailedDescription:
      "Unnao is an important district located between Lucknow and Kanpur, making it a key transit and regional hub. The city has historical importance and is associated with several temples and religious sites. It also has industrial growth in sectors like leather and textiles. With its mix of tradition and development, Unnao reflects the cultural essence of central Uttar Pradesh.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Buxi Ka Talab (nearby)",
        "Chandrika Devi Temple",
        "Shuklaganj Ganga Ghat",
        "Local temples and markets",
        "Sai River banks",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Cultural & Regional Significance",
      items: [
        "Strategic location between Lucknow and Kanpur",
        "Blend of industrial and agricultural economy",
        "Rich cultural and religious heritage",
        "Important transit hub in central UP",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration: "1 day for local exploration",

    localFood: [
      "North Indian thali",
      "Kachori and sabzi",
      "Street chaat",
      "Local sweets like jalebi",
    ],

    festivals: [
      "Diwali",
      "Holi",
      "Navratri",
      "Local fairs and temple festivals",
    ],

    travelTips: [
      "Combine visit with Lucknow or Kanpur",
      "Travel during daytime for convenience",
      "Visit Ganga ghats early morning",
      "Carry cash for local markets",
    ],
  },
  "Allahabad Airport": {
    overview:
      "Allahabad Airport, officially known as Prayagraj Airport (Bamrauli Airport), is a key domestic airport in Uttar Pradesh serving the holy city of Prayagraj.",

    detailedDescription:
      "Allahabad Airport, now called Prayagraj Airport, plays an important role in connecting the city with major Indian destinations like Delhi, Mumbai, and Bangalore. It is especially significant during large religious gatherings such as the Kumbh Mela and Magh Mela. The airport offers modern facilities and is located close to the city, providing convenient access to major religious and tourist attractions like Triveni Sangam.",

    keyAttractions: {
      title: "Key Highlights",
      items: [
        "Modern airport terminal",
        "Quick check-in and security process",
        "Close proximity to Triveni Sangam",
        "Easy road connectivity",
        "Taxi and transport availability",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Travel & Religious Significance",
      items: [
        "Gateway to Prayagraj (Triveni Sangam)",
        "Important during Kumbh Mela and Magh Mela",
        "Connects major Indian cities",
        "Supports religious tourism",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit:
      "Open year-round (Best during October-March for pleasant weather)",

    idealDuration: "1-3 hours depending on flight schedule",

    localFood: [
      "Snacks and beverages at airport",
      "North Indian meals nearby",
      "Tea and light refreshments",
    ],

    festivals: ["Kumbh Mela", "Magh Mela", "Diwali", "Holi"],

    travelTips: [
      "Reach airport at least 2 hours before departure",
      "Pre-book taxi or tempo traveller for smooth transfers",
      "Check flight status before leaving",
      "Carry valid ID proof for entry",
    ],
  },
  Banda: {
    overview:
      "Banda is a historic city in Uttar Pradesh known for its Bundelkhand culture, ancient temples, and proximity to religious sites like Chitrakoot.",

    detailedDescription:
      "Banda is an important district in the Bundelkhand region of Uttar Pradesh, known for its rich history and cultural heritage. It is closely associated with the Ramayana, as nearby Chitrakoot is believed to be a place where Lord Ram spent part of his exile. The city features ancient temples, forts, and traditional markets. Banda also reflects the rustic charm and lifestyle of Bundelkhand, making it a unique destination for cultural and spiritual exploration.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Bamdeveshwar Temple",
        "Kalinjar Fort (nearby)",
        "Nawab Tank",
        "Chitrakoot (nearby)",
        "Local temples and ghats",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Historical & Religious Significance",
      items: [
        "Part of Bundelkhand region",
        "Close to Chitrakoot (Ramayana connection)",
        "Rich history with forts and temples",
        "Cultural heritage of central India",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration: "1-2 days for local and nearby exploration",

    localFood: [
      "Bundelkhandi cuisine",
      "Baati and chokha",
      "North Indian thali",
      "Local sweets",
    ],

    festivals: ["Ram Navami", "Diwali", "Holi", "Local fairs in Chitrakoot"],

    travelTips: [
      "Combine visit with Chitrakoot for spiritual experience",
      "Visit Kalinjar Fort for historical exploration",
      "Travel during daytime for convenience",
      "Avoid peak summer due to heat",
    ],
  },
  Bhadohi: {
    overview:
      "Bhadohi, also known as Sant Ravidas Nagar, is a city in Uttar Pradesh famous worldwide for its carpet industry and craftsmanship.",

    detailedDescription:
      "Bhadohi is internationally recognized as the 'Carpet City of India' due to its high-quality handmade carpets exported across the globe. The city has a strong tradition of weaving and craftsmanship passed down through generations. Apart from its industrial importance, Bhadohi is culturally rich and located close to Varanasi, making it a convenient destination for both business and tourism.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Carpet weaving centers",
        "Sant Ravidas Temple",
        "Local markets and handicraft hubs",
        "Nearby Varanasi attractions",
        "Traditional artisan villages",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Industrial & Cultural Significance",
      items: [
        "Largest handmade carpet manufacturing hub in India",
        "Export-oriented handicraft industry",
        "Rich artisan heritage",
        "Close proximity to Varanasi",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration: "1 day for industrial and local exploration",

    localFood: [
      "North Indian thali",
      "Kachori and sabzi",
      "Street food and chaat",
      "Local sweets like jalebi",
    ],

    festivals: [
      "Sant Ravidas Jayanti",
      "Diwali",
      "Holi",
      "Local cultural fairs",
    ],

    travelTips: [
      "Visit carpet centers to see live weaving process",
      "Combine trip with Varanasi for better experience",
      "Carry cash for local purchases",
      "Travel during daytime for convenience",
    ],
  },
  Fatehpur: {
    overview:
      "Fatehpur is a district in Uttar Pradesh known for its historical significance, temples, and its location between Prayagraj and Kanpur.",

    detailedDescription:
      "Fatehpur is an important district in central Uttar Pradesh with a blend of historical, cultural, and religious importance. Located on the route between Prayagraj and Kanpur, it serves as a key transit point for travelers. The city has ancient temples, local markets, and a peaceful rural atmosphere. Its agricultural base and traditional lifestyle reflect the cultural richness of the region.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Bawani Imli (historic site)",
        "Shiv Temple Fatehpur",
        "Ganga River ghats (nearby)",
        "Local temples and markets",
        "Nearby Prayagraj attractions",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Historical & Cultural Significance",
      items: [
        "Important transit route between major cities",
        "Rich agricultural and rural heritage",
        "Presence of historical sites",
        "Cultural representation of central UP",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration: "1 day for local exploration",

    localFood: [
      "North Indian thali",
      "Kachori and sabzi",
      "Street chaat",
      "Local sweets",
    ],

    festivals: ["Diwali", "Holi", "Navratri", "Local fairs and temple events"],

    travelTips: [
      "Combine visit with Prayagraj or Kanpur",
      "Travel during daytime for convenience",
      "Visit nearby ghats for peaceful experience",
      "Carry cash for local markets",
    ],
  },
  Haldia: {
    overview:
      "Haldia is a major port city in West Bengal known for its industrial development, riverfront views, and strategic importance in trade and shipping.",

    detailedDescription:
      "Haldia is an important industrial hub and port city located near the confluence of the Haldi and Hooghly rivers. It plays a crucial role in maritime trade and houses several large industries, including petrochemicals and manufacturing units. The city is also known for its clean environment, riverside beauty, and well-planned infrastructure. Haldia offers a unique blend of industrial growth and scenic riverfront attractions.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Haldia Dock Complex",
        "Balughata Riverside",
        "Ramjew Temple",
        "Dockyard and industrial areas",
        "Local parks and riverfront views",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Industrial & Economic Significance",
      items: [
        "Major port city of eastern India",
        "Important hub for maritime trade",
        "Presence of petrochemical industries",
        "Strategic location near Kolkata",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 15-28°C)",

    idealDuration: "1-2 days for local exploration",

    localFood: [
      "Bengali cuisine",
      "Fish curry and rice",
      "Seafood dishes",
      "Sweets like rasgulla and sandesh",
    ],

    festivals: ["Durga Puja", "Kali Puja", "Diwali", "Rath Yatra"],

    travelTips: [
      "Visit riverfront areas during sunrise or sunset",
      "Try authentic Bengali seafood",
      "Avoid peak monsoon due to heavy rains",
      "Travel during daytime for better connectivity",
    ],
  },
  Lalitpur: {
    overview:
      "Lalitpur is a district in Uttar Pradesh known for its historical forts, temples, and its location in the Bundelkhand region.",

    detailedDescription:
      "Lalitpur is a culturally rich district located in the Bundelkhand region of Uttar Pradesh, bordering Madhya Pradesh. It is known for its ancient temples, forts, and natural landscapes. The city has historical significance and showcases traditional Bundelkhand architecture and lifestyle. Lalitpur also serves as a gateway to several heritage and spiritual sites, making it a peaceful destination for history and culture enthusiasts.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Deogarh Fort",
        "Dashavatar Temple (Deogarh)",
        "Jain temples at Deogarh",
        "Matatila Dam",
        "Local heritage sites",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Historical & Cultural Significance",
      items: [
        "Part of Bundelkhand region",
        "Famous for ancient temples and forts",
        "Rich Jain and Hindu heritage",
        "Peaceful and scenic environment",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration: "1-2 days for local exploration",

    localFood: [
      "Bundelkhandi cuisine",
      "Baati and chokha",
      "North Indian thali",
      "Local sweets",
    ],

    festivals: ["Diwali", "Holi", "Navratri", "Local temple fairs"],

    travelTips: [
      "Visit Deogarh for historical and architectural beauty",
      "Carry water and essentials while exploring remote sites",
      "Travel during daytime for convenience",
      "Avoid peak summer due to heat",
    ],
  },
  Obra: {
    overview:
      "Obra is a town in Uttar Pradesh known for its major thermal power plant and its location near scenic hills and forests in Sonbhadra district.",

    detailedDescription:
      "Obra is an important industrial town in Sonbhadra district of Uttar Pradesh, primarily known for the Obra Thermal Power Plant, one of the key power generation units in the state. Surrounded by hills, forests, and natural beauty, Obra offers a unique mix of industrial development and scenic landscapes. Its proximity to places like Renukoot and Vindhyachal makes it a strategic location for both industry and tourism.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Obra Thermal Power Plant",
        "Rihand Dam (nearby)",
        "Renukoot industrial area",
        "Nearby hills and forest regions",
        "Local temples and scenic spots",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Industrial & Regional Significance",
      items: [
        "Major power generation hub in Uttar Pradesh",
        "Located in mineral-rich Sonbhadra district",
        "Close to industrial towns like Renukoot",
        "Blend of industry and natural landscapes",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration: "1 day for local visit, 2 days with nearby exploration",

    localFood: [
      "North Indian cuisine",
      "Local dhaba food",
      "Simple home-style meals",
      "Street snacks",
    ],

    festivals: ["Diwali", "Holi", "Navratri", "Local cultural events"],

    travelTips: [
      "Visit Rihand Dam for scenic views",
      "Combine trip with Sonbhadra or Vindhyachal",
      "Travel during daytime for safety",
      "Carry essentials when visiting remote areas",
    ],
  },
  Renukoot: {
    overview:
      "Renukoot is an industrial town in Uttar Pradesh known for its aluminum plant, natural surroundings, and proximity to Rihand Dam.",

    detailedDescription:
      "Renukoot is a prominent industrial town in Sonbhadra district, Uttar Pradesh. It is best known for hosting one of India’s major aluminum plants operated by Hindalco Industries. Despite its industrial identity, Renukoot is surrounded by lush green forests, hills, and water bodies, offering a scenic environment. The nearby Rihand Dam and Govind Ballabh Pant Sagar lake add to its natural charm, making it a unique mix of industry and nature.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Rihand Dam",
        "Govind Ballabh Pant Sagar Lake",
        "Hindalco Industrial Township",
        "Nearby forests and hills",
        "Local temples and scenic spots",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Industrial & Natural Significance",
      items: [
        "Major aluminum production hub (Hindalco)",
        "Located in mineral-rich Sonbhadra district",
        "Close to one of India’s largest man-made lakes",
        "Blend of industrial growth and natural beauty",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 12-28°C)",

    idealDuration: "1-2 days for local and nearby exploration",

    localFood: [
      "North Indian cuisine",
      "Local dhaba food",
      "Simple home-style meals",
      "Street snacks",
    ],

    festivals: ["Diwali", "Holi", "Navratri", "Local cultural events"],

    travelTips: [
      "Visit Rihand Dam for scenic views",
      "Explore nearby forest areas carefully",
      "Travel during daytime for safety",
      "Carry essentials when visiting remote areas",
    ],
  },
  Vidhyanchal: {
    overview:
      "Vindhyachal is a famous pilgrimage town in Uttar Pradesh known for the sacred Vindhyavasini Devi Temple and its spiritual significance.",

    detailedDescription:
      "Vindhyachal is one of the most important Shakti Peeths in India, attracting thousands of devotees every day. Located near Mirzapur on the banks of the Ganga River, the town is dedicated to Goddess Vindhyavasini, an incarnation of Goddess Durga. Pilgrims often complete the famous 'Trikon Parikrama' covering Vindhyavasini Temple, Ashtabhuja Temple, and Kali Khoh Temple. The town’s spiritual atmosphere and religious importance make it a must-visit destination for devotees.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Vindhyavasini Devi Temple",
        "Ashtabhuja Temple",
        "Kali Khoh Temple",
        "Ganga Ghats",
        "Trikon Parikrama route",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Spiritual Significance",
      items: [
        "One of the major Shakti Peeths in India",
        "Dedicated to Goddess Vindhyavasini (Durga)",
        "Famous for Trikon Parikrama pilgrimage",
        "Strong religious importance in Hinduism",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 10-25°C)",

    idealDuration: "1-2 days for complete darshan and parikrama",

    localFood: [
      "Kachori and sabzi",
      "Jalebi",
      "Temple prasad",
      "Local sweets and snacks",
    ],

    festivals: [
      "Navratri (peak pilgrimage time)",
      "Diwali",
      "Holi",
      "Shravan month",
    ],

    travelTips: [
      "Start early morning for darshan to avoid crowds",
      "Complete Trikon Parikrama for full spiritual experience",
      "Wear comfortable footwear for walking",
      "Keep belongings safe in crowded areas",
    ],
  },
  Vrindavan: {
    overview:
      "Vrindavan is a sacred town in Uttar Pradesh known for its deep association with Lord Krishna and its numerous temples and spiritual atmosphere.",

    detailedDescription:
      "Vrindavan is one of the most important pilgrimage destinations for devotees of Lord Krishna. It is believed to be the place where Lord Krishna spent his childhood and performed his divine leelas. The town is filled with ancient temples, ashrams, and ghats, creating a deeply spiritual environment. Vrindavan attracts millions of devotees throughout the year, especially during festivals like Holi and Janmashtami.",

    keyAttractions: {
      title: "Key Attractions",
      items: [
        "Banke Bihari Temple",
        "Prem Mandir",
        "ISKCON Temple",
        "Radha Raman Temple",
        "Keshi Ghat",
      ],
      bgColor: "bg-amber-50",
      textColor: "text-amber-800",
    },

    significance: {
      title: "Spiritual Significance",
      items: [
        "Associated with Lord Krishna’s childhood",
        "Major pilgrimage site in Hinduism",
        "Center of Krishna devotion (Bhakti movement)",
        "Famous for Holi and Janmashtami celebrations",
      ],
      bgColor: "bg-green-50",
      textColor: "text-green-800",
    },

    bestTimeToVisit: "October-March (Pleasant weather, 10-25°C)",

    idealDuration: "2-3 days for temple visits and spiritual experience",

    localFood: [
      "Pure vegetarian satvik food",
      "Pedas and sweets",
      "Kachori and sabzi",
      "Lassi and milk-based drinks",
    ],

    festivals: [
      "Holi (grand celebrations)",
      "Janmashtami",
      "Radhashtami",
      "Kartik month festivals",
    ],

    travelTips: [
      "Visit temples early morning to avoid crowds",
      "Wear modest and comfortable clothing",
      "Beware of monkeys around temples",
      "Avoid carrying valuables in crowded areas",
    ],
  },
};
