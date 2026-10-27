import { notFound } from "next/navigation";
import LocalityTemplate from "../../components/templates/LocalityTemplate";
import { localityData } from "../../../lib/localityData";
import { CITY_HUBS, VEHICLES } from "@/lib/data";

export function generateStaticParams() {
  return localityData.map((item) => ({
    slug: item.city,
    locality: item.slug,
  }));
}

function findLocality(slug, localitySlug) {
  return localityData.find(
    (item) =>
      item.city.toLowerCase() === String(slug).toLowerCase() &&
      item.slug.toLowerCase() === String(localitySlug).toLowerCase()
  );
}

export async function generateMetadata({ params }) {
  const { slug, locality } = await params;
  const data = findLocality(slug, locality);
  const baseUrl = "https://yatratempotraveller.com";

  if (!data) {
    return { title: "Locality Not Found | Hire Tempo Traveller" };
  }

  const canonical = `${baseUrl}/${data.city}/${data.slug}`;
  const title = data.title;
  const description = data.metaDescription;

  return {
    title,
    description,
    keywords: [
      `tempo traveller fare in ${data.locality}`,
      `tempo traveller hire in ${data.locality}`,
      `tempo traveller rental ${data.locality} ${data.cityName}`,
      `9 12 16 seater urbania ${data.locality}`,
    ],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Hire Tempo Traveller",
      images: [
        {
          url: "/images/hero.png",
          width: 1200,
          height: 630,
          alt: `Hire Tempo Traveller ${data.locality}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero.png"],
    },
  };
}

export default async function LocalityPage({ params }) {
  const { slug, locality } = await params;
  const data = findLocality(slug, locality);

  if (!data) {
    notFound();
  }

  const otherLocalities = localityData.filter(
    (item) => item.city.toLowerCase() === data.city.toLowerCase() && item.slug !== data.slug
  );

  // Link breadcrumb city -> existing city hub page when available, else /cities
  const cityHub = CITY_HUBS.find(
    (c) => c.name.toLowerCase() === data.cityName.toLowerCase() || c.id === data.city.toLowerCase()
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the fare for a tempo traveller in ${data.locality}, ${data.cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Fare from ${data.locality}, ${data.cityName} depends on seating, distance, days, tolls and parking. Contact Tempo Traveller for an exact quote.`,
        },
      },
      {
        "@type": "Question",
        name: `How do I book a tempo traveller from ${data.locality}, ${data.cityName}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Share pickup, destination, dates and group size on WhatsApp or phone to confirm availability and fare.`,
        },
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.title,
    description: data.metaDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: data.locality,
      addressRegion: data.cityName,
      addressCountry: "India",
    },
    areaServed: `${data.locality}, ${data.cityName}`,
    serviceType: "Tempo Traveller Rental",
    telephone: "+919151827941",
    url: `https://yatratempotraveller.com/${data.city}/${data.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <LocalityTemplate
        locality={data}
        fleet={VEHICLES}
        otherLocalities={otherLocalities}
        cityHubSlug={cityHub?.slug}
      />
    </>
  );
}
