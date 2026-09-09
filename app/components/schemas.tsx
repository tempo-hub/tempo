export const LocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "YatraTempoTraveller.com",
  url: "https://yatratempotraveller.com",
  logo: "https://yatratempotraveller.com/logo.png",
  image: "https://yatratempotraveller.com/og-image.jpg",
  description:
    "Premium tempo traveller service in Varanasi, Ayodhya, and North India.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sigra",
    addressLocality: "Varanasi",
    addressRegion: "UP",
    postalCode: "221010",
    addressCountry: "IN",
  },
  telephone: "+919999999999",
  priceRange: "₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1250",
  },
};

export const BreadcrumbList = (items: { name: string; item: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: it.item,
  })),
});

export function FAQPage(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export const Offer = (price: number, route: string, slug: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",

  name: `Tempo Traveller Booking ${route}`,
  description: `Book luxury tempo traveller for ${route} at affordable fare with AC seating and professional driver.`,

  provider: {
    "@type": ["LocalBusiness", "TaxiService"],
    name: "Chiku Cab",
    url: "https://yatratempotraveller.com",
    telephone: "+916280820037",
    priceRange: "Starts ₹18/km",

    image: "https://yatratempotraveller.com/ytfavicon.png",

    address: {
      "@type": "PostalAddress",
      streetAddress: "D 63/59 Shivpurwa, Mahmoorganj, Varanasi, Uttar Pradesh 221010",
      addressLocality: "Varanasi",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
      postalCode: "221010"
    },

    areaServed: [
      "Varanasi",
      "Lucknow",
      "Ayodhya",
      "Prayagraj",
      "Uttar Pradesh"
    ]
  },

  areaServed: "Uttar Pradesh",

  offers: {
    "@type": "Offer",
    price: price,
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: `https://yatratempotraveller.com/${slug}`,
    itemCondition: "https://schema.org/NewCondition"
  },

  image: "https://yatratempotraveller.com/vehicles/12-seater-chiku.jpg",
  url: `https://yatratempotraveller.com/${slug}`
});
