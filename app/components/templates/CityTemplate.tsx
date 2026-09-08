"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Award,
  ArrowRight,
  Bus,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
  Users,
  Luggage,
  Route,
  MessageSquare,
} from "lucide-react";

// ============================================================
// TYPES
// ============================================================

interface City {
  id: string;
  name: string;
  state: string;
  desc: string;
  tag: string;
  metaTitle?: string;
  metaDescription?: string;
  country?: string;
  image?: string;
}

interface FleetItem {
  id: string;
  name: string;
  capacity: string;
  seater: string;
  tagline: string;
  image: string;
  ratePerKm: number;
  minKmPerDay: number;
  driverAllowance: number;
  luggageCapacity: string;
}

interface RouteItem {
  routeSlug: string;
  origin: string;
  destination: string;
  distanceKm: number;
  durationHrs: string;
}

// ============================================================
// CONSTANTS
// ============================================================

const WHATSAPP_NUMBER = "919818022327";
const PHONE_NUMBER = "+919818022327";

const BRAND = "#FE6A01";
const BRAND_DARK = "#FE791A";
const BRAND_LIGHT = "#FFF1E8";
const BRAND_LIGHTER = "#FFE8D6";

const TEXT_DARK = "#172033";
const TEXT_MUTED = "#64748B";
const BORDER = "#E2E8F0";

// ============================================================
// FAQ COMPONENT
// ============================================================

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div
      style={{
        border: `1px solid ${isOpen ? BRAND : BORDER}`,
        borderRadius: "16px",
        background: "#FFFFFF",
        overflow: "hidden",
        transition: "all 0.25s ease",
        boxShadow: isOpen
          ? "0 10px 30px rgba(254,106,1,0.10)"
          : "0 2px 8px rgba(15,23,42,0.03)",
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          padding: "1.15rem 1.25rem",
          border: "none",
          background: "transparent",
          color: isOpen ? BRAND : TEXT_DARK,
          fontSize: "1rem",
          fontWeight: 700,
          textAlign: "left",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp size={20} color={BRAND} />
        ) : (
          <ChevronDown size={20} color={TEXT_MUTED} />
        )}
      </button>

      {isOpen && (
        <div
          style={{
            padding: "0 1.25rem 1.25rem",
            color: TEXT_MUTED,
            fontSize: "0.95rem",
            lineHeight: 1.7,
          }}
        >
          {answer}
        </div>
      )}
    </div>
  );
}

// ============================================================
// SECTION HEADING
// ============================================================

interface SectionHeadingProps {
  badge: string;
  title: string;
  description: string;
}

function SectionHeading({ badge, title, description }: SectionHeadingProps) {
  return (
    <div
      style={{
        textAlign: "center",
        maxWidth: "760px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          padding: "0.35rem 0.9rem",
          borderRadius: "999px",
          background: BRAND_LIGHT,
          color: BRAND_DARK,
          fontSize: "0.78rem",
          fontWeight: 800,
        }}
      >
        <Award size={14} />
        {badge}
      </div>

      <h2
        style={{
          margin: "0.8rem 0 0.65rem",
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          lineHeight: 1.2,
          fontWeight: 850,
          color: TEXT_DARK,
        }}
      >
        {title}
      </h2>

      <p
        style={{
          margin: 0,
          color: TEXT_MUTED,
          fontSize: "0.98rem",
          lineHeight: 1.7,
        }}
      >
        {description}
      </p>
    </div>
  );
}

// ============================================================
// MAIN CITY TEMPLATE
// ============================================================

interface CityTemplateProps {
  city: City;
  routes?: RouteItem[];
  fleet?: FleetItem[];
  faqs?: Array<{ q: string; a: string }>;
}

export default function CityTemplate({
  city,
  routes = [],
  fleet = [],
  faqs = [],
}: CityTemplateProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const whatsappMessage = encodeURIComponent(
    `Hello Yatra Tempo Traveller, I want to hire a Tempo Traveller in ${city.name}. Please share the available vehicles, fare and booking details.`,
  );

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  // Default fleet data if none provided
  const defaultFleet: FleetItem[] = [
    {
      id: "9-seater",
      name: "9 Seater Tempo Traveller",
      capacity: "9 Seater",
      seater: "9",
      tagline: "Perfect for small family trips & airport transfers",
      image: "/images/fleet/9-seater.jpg",
      ratePerKm: 25,
      minKmPerDay: 250,
      driverAllowance: 500,
      luggageCapacity: "8 Bags",
    },
    {
      id: "12-seater",
      name: "12 Seater Tempo Traveller",
      capacity: "12 Seater",
      seater: "12",
      tagline: "Spacious for family outings & corporate travel",
      image: "/images/fleet/12-seater.jpg",
      ratePerKm: 28,
      minKmPerDay: 250,
      driverAllowance: 500,
      luggageCapacity: "12 Bags",
    },
    {
      id: "15-seater",
      name: "15 Seater Tempo Traveller",
      capacity: "15 Seater",
      seater: "15",
      tagline: "Perfect for medium-sized groups & tours",
      image: "/images/fleet/15-seater.jpg",
      ratePerKm: 32,
      minKmPerDay: 250,
      driverAllowance: 500,
      luggageCapacity: "15 Bags",
    },
    {
      id: "16-seater",
      name: "16 Seater Tempo Traveller",
      capacity: "16 Seater",
      seater: "16",
      tagline: "Ideal for large groups, pilgrimages & weddings",
      image: "/images/fleet/16-seater.jpg",
      ratePerKm: 35,
      minKmPerDay: 250,
      driverAllowance: 500,
      luggageCapacity: "16 Bags",
    },
    {
      id: "20-seater",
      name: "20 Seater Tempo Traveller",
      capacity: "20 Seater",
      seater: "20",
      tagline: "Perfect for big family reunions & group tours",
      image: "/images/fleet/20-seater.jpg",
      ratePerKm: 40,
      minKmPerDay: 250,
      driverAllowance: 500,
      luggageCapacity: "20 Bags",
    },
    {
      id: "26-seater",
      name: "26 Seater Tempo Traveller",
      capacity: "26 Seater",
      seater: "26",
      tagline: "Maximum capacity for large groups & events",
      image: "/images/fleet/26-seater.jpg",
      ratePerKm: 45,
      minKmPerDay: 250,
      driverAllowance: 500,
      luggageCapacity: "26 Bags",
    },
  ];

  const displayFleet = fleet.length > 0 ? fleet : defaultFleet;

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Get popular places based on city
  const getPlaces = (cityName: string): string[] => {
    const places: Record<string, string[]> = {
      Ayodhya: [
        "Ram Mandir",
        "Hanuman Garhi",
        "Kanak Bhawan",
        "Saryu Ghat",
        "Ram Ki Paidi",
        "Dashrath Bhawan",
      ],
      Delhi: [
        "India Gate",
        "Red Fort",
        "Qutub Minar",
        "Lotus Temple",
        "Akshardham Temple",
        "Humayun's Tomb",
      ],
      Jaipur: [
        "Amber Fort",
        "Hawa Mahal",
        "City Palace",
        "Jal Mahal",
        "Nahargarh Fort",
        "Jantar Mantar",
      ],
      Ahmedabad: [
        "Sabarmati Ashram",
        "Kankaria Lake",
        "Adalaj Stepwell",
        "Akshardham",
        "Statue of Unity",
        "Modhera Sun Temple",
      ],
      Varanasi: [
        "Kashi Vishwanath Temple",
        "Dashashwamedh Ghat",
        "Assi Ghat",
        "Sarnath",
        "Manikarnika Ghat",
        "Ramnagar Fort",
      ],
      Mumbai: [
        "Gateway of India",
        "Marine Drive",
        "Elephanta Caves",
        "Siddhivinayak Temple",
        "Juhu Beach",
        "Chhatrapati Shivaji Terminus",
      ],
    };
    return (
      places[cityName] || [
        `Popular Places in ${cityName}`,
        "Local Sightseeing",
        "Nearby Tourist Attractions",
      ]
    );
  };

  // Get popular routes based on city
  const getCityRoutes = (cityName: string): string[] => {
    const routeData: Record<string, string[]> = {
      Ayodhya: [
        "Ayodhya to Varanasi",
        "Ayodhya to Prayagraj",
        "Ayodhya to Lucknow",
        "Ayodhya to Mathura",
        "Ayodhya to Delhi",
        "Ayodhya to Chitrakoot",
      ],
      Delhi: [
        "Delhi to Agra",
        "Delhi to Jaipur",
        "Delhi to Haridwar",
        "Delhi to Rishikesh",
        "Delhi to Manali",
        "Delhi to Shimla",
      ],
      Jaipur: [
        "Jaipur to Delhi",
        "Jaipur to Agra",
        "Jaipur to Udaipur",
        "Jaipur to Jodhpur",
        "Jaipur to Pushkar",
        "Jaipur to Ajmer",
      ],
      Ahmedabad: [
        "Ahmedabad to Statue of Unity",
        "Ahmedabad to Somnath",
        "Ahmedabad to Dwarka",
        "Ahmedabad to Udaipur",
        "Ahmedabad to Mount Abu",
        "Ahmedabad to Vadodara",
      ],
      Varanasi: [
        "Varanasi to Ayodhya",
        "Varanasi to Prayagraj",
        "Varanasi to Lucknow",
        "Varanasi to Bodh Gaya",
        "Varanasi to Chitrakoot",
        "Varanasi to Delhi",
      ],
      Mumbai: [
        "Mumbai to Pune",
        "Mumbai to Nashik",
        "Mumbai to Shirdi",
        "Mumbai to Goa",
        "Mumbai to Lonavala",
        "Mumbai to Mahabaleshwar",
      ],
    };
    return (
      routeData[cityName] || [
        `${cityName} Local Sightseeing`,
        `${cityName} to Nearby Destinations`,
      ]
    );
  };

  const places = getPlaces(city.name);
  const cityRouteList = getCityRoutes(city.name);

  // Default FAQs
  const defaultFaqs = [
    {
      q: "What is the cost of hiring a Tempo Traveller?",
      a: "Tempo Traveller pricing depends on the vehicle size, travel distance, number of days, route, tolls, parking and other trip requirements. Contact Yatra Tempo Traveller for the latest fare for your journey.",
    },
    {
      q: "Which Tempo Traveller seating options are available?",
      a: "We provide multiple seating options including 9, 12, 16, 17 and 20 Seater Tempo Travellers, subject to availability and route requirements.",
    },
    {
      q: "Can I hire a Tempo Traveller for local sightseeing?",
      a: `Yes. You can hire a Tempo Traveller for local sightseeing in ${city.name} as well as nearby destinations. The itinerary can be customized according to your group and travel requirements.`,
    },
    {
      q: "Can I book a Tempo Traveller for an outstation trip?",
      a: "Yes. Yatra Tempo Traveller provides vehicles for one-way trips, round trips, multi-day tours, family vacations, pilgrimage journeys, weddings and corporate travel.",
    },
    {
      q: "Are experienced drivers provided with the vehicle?",
      a: "Yes. Tempo Traveller bookings are provided with experienced chauffeurs familiar with city, highway and outstation routes.",
    },
    {
      q: "How can I book a Tempo Traveller?",
      a: `You can contact us through WhatsApp or phone. Share your pickup city, destination, travel dates, group size and preferred vehicle, and our team will help with the booking and fare.`,
    },
  ];

  const displayFaqs = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <main
      style={{
        width: "100%",
        overflow: "hidden",
        background: "#FFFFFF",
        color: TEXT_DARK,
      }}
    >
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "5rem",
          background: `#1C283D`,
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorations */}
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            right: "-180px",
            top: "-200px",
            background: "rgba(255,255,255,0.08)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            left: "-150px",
            bottom: "-150px",
            background: "rgba(255,255,255,0.06)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1.25rem",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginBottom: "2rem",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.82)",
            }}
          >
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
            <span>/</span>
            <Link
              href="/cities"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Cities
            </Link>
            <span>/</span>
            <span style={{ color: "#FA7517", fontWeight: 700 }}>
              {city.name}
            </span>
          </nav>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.15fr 0.85fr",
              gap: "3rem",
              alignItems: "center",
            }}
            className="hero-grid"
          >
            {/* Left Column */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.4rem 1rem",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.15)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  fontSize: "0.82rem",
                  fontWeight: 700,
                }}
              >
                <Award size={15} />
                {city.tag || "Premium Service"}
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.1rem, 5vw, 4rem)",
                  lineHeight: 1.08,
                  fontWeight: 850,
                  margin: "1.25rem 0 1rem",
                  letterSpacing: "-0.04em",
                }}
              >
                Tempo Traveller in{" "}
                <span style={{ color: "#FA7517" }}>{city.name}</span>
              </h1>

              <p
                style={{
                  maxWidth: "680px",
                  fontSize: "clamp(0.95rem, 1.08rem, 1.2rem)",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.92)",
                  margin: 0,
                }}
              >
                {city.desc} Hire comfortable Tempo Travellers for family trips,
                sightseeing, pilgrimage tours, weddings, corporate travel and
                outstation journeys.
              </p>

              {/* Trust badges */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                  marginTop: "1.75rem",
                }}
              >
                {[
                  {
                    icon: <Star size={16} fill="#FFD166" />,
                    text: "4.9/5 Rating",
                  },
                  { icon: <Users size={16} />, text: "500+ Happy Groups" },
                  { icon: <ShieldCheck size={16} />, text: "Safe & Reliable" },
                ].map((item) => (
                  <div
                    key={item.text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    {item.icon}
                    {item.text}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.8rem",
                  marginTop: "2rem",
                }}
                className="hero-cta-buttons"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    minHeight: "50px",
                    padding: "0.8rem 1.5rem",
                    borderRadius: "999px",
                    background: "#25D366",
                    color: "#FFFFFF",
                    fontWeight: 800,
                    textDecoration: "none",
                  }}
                >
                  <MessageCircle size={19} />
                  Get Instant Quote
                </a>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    minHeight: "50px",
                    padding: "0.8rem 1.5rem",
                    borderRadius: "999px",
                    background: "#FFFFFF",
                    color: BRAND_DARK,
                    fontWeight: 800,
                    textDecoration: "none",
                  }}
                >
                  <Phone size={19} />
                  Call Us
                </a>
              </div>
            </div>

            {/* Right Column - Quick Booking Card */}
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: "28px",
                padding: "2rem 2rem 2.2rem",
                boxShadow: "0 24px 48px -12px rgba(0, 30, 80, 0.35)",
                color: TEXT_DARK,
                position: "relative",
                overflow: "hidden",
              }}
              className="booking-card"
            >
              {/* Decorative brand element */}
              <div
                style={{
                  position: "absolute",
                  top: "-60px",
                  right: "-60px",
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${BRAND_LIGHTER} 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.3rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: BRAND_LIGHT,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Calendar size={22} color={BRAND} />
                </div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: TEXT_DARK,
                  }}
                >
                  Plan Your City Trip
                </h3>
              </div>

              <p
                style={{
                  color: TEXT_MUTED,
                  fontSize: "0.9rem",
                  marginBottom: "1.5rem",
                  position: "relative",
                  zIndex: 1,
                  paddingLeft: "3.5rem",
                }}
                className="booking-description"
              >
                Tell us your group size and travel requirement.
              </p>

              <form
                action={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                method="GET"
                onSubmit={(e) => {
                  const select = e.currentTarget.querySelector("select");
                  const hidden = e.currentTarget.querySelector(
                    'input[type="hidden"]',
                  );
                  if (hidden && select) {
                    hidden.value = `Quote for Tempo Traveller in ${city.name} - ${select.value}`;
                  }
                }}
                style={{ position: "relative", zIndex: 1 }}
              >
                <input
                  type="hidden"
                  name="text"
                  value={`Quote for Tempo Traveller in ${city.name}`}
                />

                {/* Pickup City */}
                <div style={{ marginBottom: "1rem" }}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      color: TEXT_DARK,
                      marginBottom: "0.4rem",
                    }}
                  >
                    <MapPin size={14} color={BRAND} />
                    Pickup City
                  </label>
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <input
                      type="text"
                      value={city.name}
                      readOnly
                      style={{
                        width: "100%",
                        padding: "0.8rem 1rem",
                        border: `2px solid ${BRAND_LIGHT}`,
                        borderRadius: "14px",
                        fontSize: "0.95rem",
                        background: BRAND_LIGHT,
                        color: TEXT_DARK,
                        fontWeight: 600,
                        outline: "none",
                        cursor: "default",
                        transition: "all 0.3s ease",
                        boxSizing: "border-box",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        right: "12px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: TEXT_MUTED,
                        fontSize: "0.7rem",
                        fontWeight: 500,
                        background: "#FFFFFF",
                        padding: "2px 10px",
                        borderRadius: "20px",
                        border: `1px solid ${BORDER}`,
                      }}
                      className="verified-badge"
                    >
                      ✓ Verified
                    </div>
                  </div>
                </div>

                {/* Seater Variant */}
                <div style={{ marginBottom: "1.25rem" }}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      color: TEXT_DARK,
                      marginBottom: "0.4rem",
                    }}
                  >
                    <Users size={14} color={BRAND} />
                    Seater Variant
                  </label>
                  <select
                    name="seaterVariant"
                    defaultValue="9 Seater Tempo Traveller"
                    style={{
                      width: "100%",
                      padding: "0.8rem 1rem",
                      border: `2px solid ${BORDER}`,
                      borderRadius: "14px",
                      fontSize: "0.95rem",
                      background: "#FFFFFF",
                      color: TEXT_DARK,
                      outline: "none",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      fontWeight: 500,
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = BRAND;
                      e.currentTarget.style.boxShadow = `0 0 0 4px ${BRAND_LIGHT}`;
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = BORDER;
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <option value="9 Seater Tempo Traveller">
                      9 Seater Tempo Traveller
                    </option>
                    <option value="12 Seater Tempo Traveller">
                      12 Seater Tempo Traveller
                    </option>
                    <option value="16 Seater Tempo Traveller">
                      16 Seater Tempo Traveller
                    </option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "0.9rem",
                    borderRadius: "50px",
                    background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})`,
                    color: "#FFFFFF",
                    border: "none",
                    fontWeight: 700,
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: `0 8px 25px rgba(254, 106, 1, 0.3)`,
                    fontFamily: "inherit",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = `0 12px 35px rgba(254, 106, 1, 0.4)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = `0 8px 25px rgba(254, 106, 1, 0.3)`;
                  }}
                >
                  <MessageSquare size={18} />
                  Request Fare
                </button>
              </form>

              {/* Trust indicators */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1.5rem",
                  marginTop: "1.25rem",
                  paddingTop: "1rem",
                  borderTop: `2px solid ${BRAND_LIGHT}`,
                  position: "relative",
                  zIndex: 1,
                  flexWrap: "wrap",
                }}
                className="booking-trust-indicators"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: TEXT_MUTED,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>⚡</span>
                  <span>Response within 2 minutes</span>
                </div>
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: BRAND,
                  }}
                  className="trust-divider"
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: TEXT_MUTED,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  <span style={{ fontSize: "0.9rem" }}>✅</span>
                  <span>No Hidden Charges</span>
                </div>
                <div
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    background: BRAND,
                  }}
                  className="trust-divider"
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: TEXT_MUTED,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}
                >
                  <span style={{ fontSize: "0.9rem" }}>⭐</span>
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ===================================================== */}
      <section style={{ padding: "5rem 1.25rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            badge="Why Choose Yatra"
            title={`Comfortable Group Travel in ${city.name}`}
            description={`Book a reliable Tempo Traveller in ${city.name} for local and outstation group journeys.`}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "1.25rem",
              marginTop: "2.5rem",
            }}
            className="features-grid"
          >
            {[
              {
                icon: <Users size={27} />,
                title: "Multiple Seaters",
                text: "9 to 20 seater options for different group sizes.",
              },
              {
                icon: <MapPin size={27} />,
                title: "Doorstep Pickup",
                text: "Pickup from homes, hotels, stations and airports.",
              },
              {
                icon: <Award size={27} />,
                title: "Experienced Drivers",
                text: "Professional chauffeurs for city and highway journeys.",
              },
              {
                icon: <ShieldCheck size={27} />,
                title: "Safe Travel",
                text: "Comfortable vehicles with reliable travel support.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                style={{
                  padding: "1.5rem",
                  borderRadius: "18px",
                  border: `1px solid ${BORDER}`,
                  background: "#FFFFFF",
                  boxShadow: "0 8px 25px rgba(15,23,42,0.04)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = BRAND;
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(254,106,1,0.10)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = BORDER;
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(15,23,42,0.04)";
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "15px",
                    background: BRAND_LIGHT,
                    color: BRAND,
                    marginBottom: "1rem",
                  }}
                >
                  {feature.icon}
                </div>

                <h3
                  style={{
                    margin: "0 0 0.5rem",
                    fontSize: "1.05rem",
                    fontWeight: 800,
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: TEXT_MUTED,
                    fontSize: "0.88rem",
                    lineHeight: 1.6,
                  }}
                >
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT CITY
      ===================================================== */}
      <section style={{ padding: "5rem 1.25rem", background: "#F8FAFC" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
          className="about-city-grid"
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.35rem 0.9rem",
                borderRadius: "999px",
                background: BRAND_LIGHT,
                color: BRAND_DARK,
                fontSize: "0.8rem",
                fontWeight: 800,
                marginBottom: "1rem",
              }}
            >
              <MapPin size={14} />
              {city.state}
            </div>

            <h2
              style={{
                margin: "0 0 1rem",
                fontSize: "clamp(1.8rem, 4vw, 2.7rem)",
                lineHeight: 1.2,
                fontWeight: 850,
              }}
            >
              Tempo Traveller Service in{" "}
              <span style={{ color: BRAND }}>{city.name}</span>
            </h2>

            <p
              style={{
                margin: "0 0 1.25rem",
                color: TEXT_MUTED,
                fontSize: "1rem",
                lineHeight: 1.8,
              }}
            >
              {city.desc}
            </p>

            <p
              style={{
                margin: 0,
                color: TEXT_MUTED,
                fontSize: "1rem",
                lineHeight: 1.8,
              }}
            >
              Yatra Tempo Traveller provides comfortable group transportation
              for family holidays, religious journeys, sightseeing, weddings,
              corporate outings and long-distance tours from {city.name}.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginTop: "1.75rem",
              }}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.8rem 1.3rem",
                  borderRadius: "999px",
                  background: BRAND,
                  color: "#FFFFFF",
                  fontWeight: 800,
                  textDecoration: "none",
                }}
              >
                <MessageCircle size={18} />
                Book Now
              </a>

              <Link
                href="/cities"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  padding: "0.8rem 1.3rem",
                  borderRadius: "999px",
                  border: `1.5px solid ${BRAND}`,
                  color: BRAND_DARK,
                  fontWeight: 800,
                  textDecoration: "none",
                  background: "#FFFFFF",
                }}
              >
                Other Cities
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* Stats Card */}
          <div
            style={{
              background: "#FFFFFF",
              padding: "1.5rem",
              borderRadius: "24px",
              border: `1px solid ${BORDER}`,
              boxShadow: "0 15px 40px rgba(15,23,42,0.06)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
              className="stats-grid"
            >
              {[
                ["9+", "Seater Options"],
                ["500+", "Happy Groups"],
                ["24/7", "Support"],
                ["4.9/5", "Customer Rating"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  style={{
                    padding: "1.25rem",
                    borderRadius: "16px",
                    background: BRAND_LIGHT,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      color: BRAND_DARK,
                      fontSize: "1.6rem",
                      fontWeight: 900,
                    }}
                  >
                    {number}
                  </div>
                  <div
                    style={{
                      color: TEXT_MUTED,
                      fontSize: "0.8rem",
                      marginTop: "0.25rem",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "1rem",
                padding: "1.25rem",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #FFF1E8, #FFE8D6)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "flex-start",
                }}
              >
                <Bus size={28} color={BRAND} style={{ flexShrink: 0 }} />
                <div>
                  <h3
                    style={{
                      margin: "0 0 0.35rem",
                      fontSize: "1rem",
                      fontWeight: 800,
                    }}
                  >
                    Comfortable Group Journeys
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      color: TEXT_MUTED,
                      fontSize: "0.85rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Choose the vehicle according to your group size and travel
                    requirement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FLEET SECTION
      ===================================================== */}
      <section style={{ padding: "5rem 1.25rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            badge="Our Fleet"
            title={`Tempo Traveller Fleet in ${city.name}`}
            description="Choose a vehicle according to your group size and travel requirement."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "1.5rem",
              marginTop: "2.5rem",
            }}
            className="fleet-grid"
          >
            {displayFleet.map((vehicle) => (
              <div
                key={vehicle.id}
                style={{
                  border: `1px solid ${BORDER}`,
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "#FFFFFF",
                  boxShadow: "0 10px 30px rgba(15,23,42,0.05)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px rgba(15,23,42,0.10)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(15,23,42,0.05)";
                }}
              >
                <div
                  style={{
                    padding: "1.5rem",
                    background: BRAND_LIGHT,
                    borderBottom: `1px solid ${BRAND_LIGHTER}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                    }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "14px",
                        background: BRAND,
                        color: "#FFFFFF",
                      }}
                    >
                      <Bus size={25} />
                    </div>
                    <span
                      style={{
                        padding: "0.35rem 0.7rem",
                        borderRadius: "999px",
                        background: "#FFFFFF",
                        color: BRAND_DARK,
                        fontSize: "0.75rem",
                        fontWeight: 800,
                      }}
                    >
                      {vehicle.capacity}
                    </span>
                  </div>

                  <h3
                    style={{
                      margin: "1rem 0 0.35rem",
                      fontSize: "1.1rem",
                      fontWeight: 850,
                    }}
                  >
                    {vehicle.name}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: TEXT_MUTED,
                      fontSize: "0.85rem",
                    }}
                  >
                    {vehicle.tagline}
                  </p>
                </div>

                <div style={{ padding: "1.4rem" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginBottom: "1rem",
                      padding: "0.5rem 0",
                      borderTop: `1px solid ${BORDER}`,
                      borderBottom: `1px solid ${BORDER}`,
                    }}
                  >
                    <span style={{ fontSize: "0.8rem", color: TEXT_MUTED }}>
                      <Users
                        size={14}
                        style={{ display: "inline", marginRight: "0.2rem" }}
                      />
                      {vehicle.seater} Seats
                    </span>
                    <span style={{ fontSize: "0.8rem", color: TEXT_MUTED }}>
                      <Luggage
                        size={14}
                        style={{ display: "inline", marginRight: "0.2rem" }}
                      />
                      {vehicle.luggageCapacity}
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <span style={{ color: TEXT_MUTED, fontSize: "0.75rem" }}>
                      Starting from
                    </span>
                    <strong
                      style={{
                        color: BRAND_DARK,
                        fontSize: "1.15rem",
                      }}
                    >
                      {formatCurrency(vehicle.ratePerKm)}
                      <span
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: 400,
                          color: TEXT_MUTED,
                        }}
                      >
                        /km
                      </span>
                    </strong>
                  </div>

                  <a
                    href={`${whatsappUrl}%20Vehicle:%20${encodeURIComponent(vehicle.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "100%",
                      minHeight: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.45rem",
                      borderRadius: "999px",
                      background: BRAND,
                      color: "#FFFFFF",
                      fontWeight: 800,
                      fontSize: "0.85rem",
                      textDecoration: "none",
                      boxSizing: "border-box",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = BRAND_DARK;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = BRAND;
                    }}
                  >
                    <MessageCircle size={16} />
                    Get Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          POPULAR PLACES
      ===================================================== */}
      <section style={{ padding: "5rem 1.25rem", background: "#F8FAFC" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            badge="Explore"
            title={`Popular Places Around ${city.name}`}
            description="Plan comfortable group trips to popular attractions and nearby destinations."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              marginTop: "2.5rem",
            }}
            className="places-grid"
          >
            {places.map((place) => (
              <div
                key={place}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  padding: "1.1rem",
                  background: "#FFFFFF",
                  border: `1px solid ${BORDER}`,
                  borderRadius: "15px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = BRAND;
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(254,106,1,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = BORDER;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                    background: BRAND_LIGHT,
                    color: BRAND,
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={18} />
                </div>
                <strong style={{ fontSize: "0.9rem" }}>{place}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          POPULAR ROUTES
      ===================================================== */}
      <section style={{ padding: "5rem 1.25rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            badge="Popular Routes"
            title={`Popular Tempo Traveller Routes from ${city.name}`}
            description="Book a Tempo Traveller for comfortable intercity and outstation group travel."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1rem",
              marginTop: "2.5rem",
            }}
            className="routes-grid"
          >
            {cityRouteList.map((route) => (
              <div
                key={route}
                style={{
                  padding: "1.25rem",
                  borderRadius: "16px",
                  border: `1px solid ${BORDER}`,
                  background: "#FFFFFF",
                  boxShadow: "0 5px 18px rgba(15,23,42,0.04)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = BRAND;
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(254,106,1,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = BORDER;
                  e.currentTarget.style.boxShadow =
                    "0 5px 18px rgba(15,23,42,0.04)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    marginBottom: "0.7rem",
                  }}
                >
                  <Route size={18} color={BRAND} />
                  <strong style={{ fontSize: "0.95rem" }}>{route}</strong>
                </div>

                <a
                  href={`${whatsappUrl}%20Route:%20${encodeURIComponent(route)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: BRAND_DARK,
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Get route fare →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PERFECT FOR EVERY JOURNEY
      ===================================================== */}
      <section style={{ padding: "5rem 1.25rem", background: "#F8FAFC" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            badge="Perfect For"
            title={`Your Ideal Travel Companion in ${city.name}`}
            description={`Whether it's a family vacation, corporate event, or pilgrimage tour, Tempo Traveller is perfect for every journey in ${city.name}.`}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
              marginTop: "2.5rem",
            }}
            className="journey-grid"
          >
            {[
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Family Trips",
                desc: `Spacious travel for the whole family in ${city.name}.`,
              },
              {
                icon: "💼",
                title: "Corporate Events",
                desc: "Professional transport for business meetings.",
              },
              {
                icon: "🛕",
                title: "Pilgrimage Tours",
                desc: `Comfortable journeys to temples near ${city.name}.`,
              },
              {
                icon: "🎉",
                title: "Wedding Parties",
                desc: "Luxury travel for wedding guests.",
              },
              {
                icon: "🏖️",
                title: "Sightseeing Tours",
                desc: `Explore the best attractions of ${city.name}.`,
              },
              {
                icon: "✈️",
                title: "Airport Transfers",
                desc: `Reliable pickup to ${city.name} airport.`,
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#FFFFFF",
                  padding: "1.5rem",
                  borderRadius: "18px",
                  border: `1px solid ${BORDER}`,
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = BRAND;
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(254,106,1,0.10)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = BORDER;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    marginBottom: "0.5rem",
                    color: TEXT_DARK,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: TEXT_MUTED,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW BOOKING WORKS
      ===================================================== */}
      <section style={{ padding: "5rem 1.25rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            badge="How It Works"
            title={`Book Your Tempo Traveller in ${city.name} in 4 Simple Steps`}
            description="Quick and hassle-free booking process. Get your vehicle confirmed in minutes."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1.5rem",
              marginTop: "3rem",
              position: "relative",
            }}
            className="steps-grid"
          >
            {[
              {
                step: "01",
                title: "Contact Us",
                desc: `Reach out via WhatsApp with your travel details in ${city.name}.`,
              },
              {
                step: "02",
                title: "Get Quote",
                desc: "Receive a transparent quote based on your itinerary.",
              },
              {
                step: "03",
                title: "Confirm Booking",
                desc: `Pay a token advance to confirm your booking in ${city.name}.`,
              },
              {
                step: "04",
                title: "Enjoy Travel",
                desc: `Our chauffeur arrives on time for your journey in ${city.name}.`,
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  textAlign: "center",
                  padding: "2rem 1.5rem",
                  position: "relative",
                  borderRadius: "20px",
                  border: `1px solid ${BORDER}`,
                  background: "#FFFFFF",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = BRAND;
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(254,106,1,0.10)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = BORDER;
                  e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.03)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {/* Step Number Circle */}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${BRAND_LIGHT}, ${BRAND_LIGHTER})`,
                    color: BRAND,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                    fontWeight: 900,
                    margin: "0 auto 0.5rem",
                    position: "relative",
                    border: `3px solid ${BRAND_LIGHT}`,
                  }}
                >
                  {item.step}
                </div>

                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    marginBottom: "0.5rem",
                    color: TEXT_DARK,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.85rem",
                    color: TEXT_MUTED,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>

                {/* Divider line */}
                <div
                  style={{
                    marginTop: "1rem",
                    paddingTop: "0.75rem",
                    borderTop: `2px solid ${BRAND_LIGHT}`,
                  }}
                />

                {/* Connector Line between steps */}
                {index < 3 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "3.5rem",
                      right: "-0.75rem",
                      width: "calc(100% - 2.5rem)",
                      height: "2px",
                      background: `linear-gradient(to right, ${BORDER}, transparent)`,
                      display: "block",
                    }}
                    className="step-connector"
                  />
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div
            style={{
              marginTop: "3rem",
              textAlign: "center",
              padding: "2rem",
              background: `linear-gradient(135deg, ${BRAND_LIGHT}, ${BRAND_LIGHTER})`,
              borderRadius: "20px",
              border: `2px solid ${BRAND_LIGHT}`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative element */}
            <div
              style={{
                position: "absolute",
                top: "-50px",
                right: "-50px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: `radial-gradient(circle, ${BRAND_LIGHTER} 0%, transparent 70%)`,
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  fontSize: "clamp(1rem, 1.2rem, 1.5rem)",
                  fontWeight: 700,
                  margin: 0,
                  color: TEXT_DARK,
                }}
              >
                Ready to book your Tempo Traveller in{" "}
                <span style={{ color: BRAND }}>{city.name}</span>?
              </p>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: TEXT_MUTED,
                  marginTop: "0.3rem",
                  marginBottom: "1rem",
                }}
              >
                Get instant quotes and availability
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.9rem 2.5rem",
                  borderRadius: "50px",
                  background: `linear-gradient(135deg, ${BRAND}, ${BRAND_DARK})`,
                  color: "#FFFFFF",
                  fontWeight: 800,
                  fontSize: "clamp(0.9rem, 1.05rem, 1.2rem)",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  boxShadow: `0 8px 25px rgba(254, 106, 1, 0.3)`,
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 12px 35px rgba(254, 106, 1, 0.4)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 8px 25px rgba(254, 106, 1, 0.3)`;
                }}
              >
                <MessageCircle size={20} />
                Book Now
              </a>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1.5rem",
                  marginTop: "0.75rem",
                  flexWrap: "wrap",
                }}
                className="cta-trust-badges"
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: TEXT_MUTED,
                    fontWeight: 600,
                  }}
                >
                  ⚡ Response within 2 minutes
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: TEXT_MUTED,
                    fontWeight: 600,
                  }}
                >
                  ✅ No hidden charges
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: TEXT_MUTED,
                    fontWeight: 600,
                  }}
                >
                  🛡️ Best price guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CUSTOMER REVIEWS
      ===================================================== */}
      <section style={{ padding: "5rem 1.25rem", background: "#F8FAFC" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <SectionHeading
            badge="Reviews"
            title={`What Our Customers Say`}
            description={`Real reviews from happy travelers who booked Tempo Traveller in ${city.name}.`}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginTop: "2.5rem",
            }}
            className="reviews-grid"
          >
            {[
              {
                name: "Rahul Sharma",
                location: city.name,
                rating: 5,
                text: `Excellent service! The Tempo Traveller was spotless and the driver was very professional. Highly recommend for group travel in ${city.name}.`,
                date: "2 weeks ago",
                avatar: "R",
              },
              {
                name: "Priya Patel",
                location: city.name,
                rating: 5,
                text: `Booked for a family trip to ${city.name}. The vehicle was comfortable and the pricing was transparent. Will book again!`,
                date: "1 month ago",
                avatar: "P",
              },
              {
                name: "Amit Kumar",
                location: city.name,
                rating: 4,
                text: `Great experience with Yatra Tempo Traveller. The 12-seater was perfect for our corporate team outing in ${city.name}. Punctual and well-maintained.`,
                date: "3 weeks ago",
                avatar: "A",
              },
              {
                name: "Sneha Reddy",
                location: city.name,
                rating: 5,
                text: `We had an amazing trip to ${city.name} with Yatra. The vehicle was luxurious and the driver was very knowledgeable about local spots.`,
                date: "2 months ago",
                avatar: "S",
              },
            ].map((review, index) => (
              <div
                key={index}
                style={{
                  background: "#FFFFFF",
                  padding: "1.5rem",
                  borderRadius: "18px",
                  border: `1px solid ${BORDER}`,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = BRAND;
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(254,106,1,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = BORDER;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.2rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < review.rating ? "#FFB800" : "none"}
                      color={i < review.rating ? "#FFB800" : "#D1D5DB"}
                    />
                  ))}
                </div>

                <p
                  style={{
                    color: TEXT_DARK,
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                    fontStyle: "italic",
                  }}
                >
                  "{review.text}"
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.8rem",
                    borderTop: `1px solid ${BORDER}`,
                    paddingTop: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: BRAND,
                      color: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  >
                    {review.avatar}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 600,
                        color: TEXT_DARK,
                        fontSize: "0.95rem",
                      }}
                    >
                      {review.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: TEXT_MUTED,
                      }}
                    >
                      {review.date} · {review.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section style={{ padding: "5rem 1.25rem", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "850px", margin: "0 auto" }}>
          <SectionHeading
            badge="FAQs"
            title={`Tempo Traveller in ${city.name} - FAQs`}
            description="Frequently asked questions about Tempo Traveller booking and travel."
          />

          <div
            style={{
              display: "grid",
              gap: "0.8rem",
              marginTop: "2.5rem",
            }}
          >
            {displayFaqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section
        style={{
          padding: "4rem 1.25rem",
          background: `linear-gradient(135deg, ${BRAND_DARK}, ${BRAND})`,
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "-40%",
            right: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-30%",
            left: "-10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.04)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <CheckCircle2
            size={48}
            style={{
              marginBottom: "1rem",
              color: "#FFFFFF",
              display: "inline-block",
            }}
          />

          <h2
            style={{
              margin: "0 0 0.75rem",
              fontSize: "clamp(1.8rem, 4vw, 2.7rem)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Ready to Travel from{" "}
            <span style={{ color: "#FFE1CC", fontWeight: 900 }}>
              {city.name}
            </span>
            ?
          </h2>

          <p
            style={{
              margin: "0 auto 2rem",
              maxWidth: "650px",
              color: "rgba(255,255,255,0.92)",
              fontSize: "clamp(0.95rem, 1.1rem, 1.2rem)",
              lineHeight: 1.7,
            }}
          >
            Get the latest Tempo Traveller fare and availability for your group
            journey. Book now and experience comfortable group travel.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
              marginTop: "0.5rem",
            }}
            className="final-cta-buttons"
          >
            {/* Primary WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.9rem 2.2rem",
                borderRadius: "50px",
                background: "#25D366",
                color: "#FFFFFF",
                fontWeight: 800,
                fontSize: "clamp(0.85rem, 1rem, 1.1rem)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 25px rgba(37, 211, 102, 0.35)",
                cursor: "pointer",
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 35px rgba(37, 211, 102, 0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(37, 211, 102, 0.35)";
              }}
            >
              <MessageCircle size={20} />
              <span>Book on WhatsApp</span>
            </a>

            {/* Secondary Phone Button */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.9rem 2.2rem",
                borderRadius: "50px",
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "clamp(0.85rem, 1rem, 1.1rem)",
                textDecoration: "none",
                transition: "all 0.3s ease",
                border: "2px solid rgba(255,255,255,0.25)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.25)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              }}
            >
              <Phone size={20} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Trust badges */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              flexWrap: "wrap",
              marginTop: "2rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255,255,255,0.12)",
            }}
            className="final-trust-badges"
          >
            {[
              { text: "4.9/5 Rating", icon: "⭐" },
              { text: "500+ Happy Groups", icon: "👥" },
              { text: "Best Price Guarantee", icon: "💰" },
              { text: "24/7 Support", icon: "🛡️" },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "clamp(0.75rem, 0.85rem, 0.95rem)",
                  fontWeight: 600,
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Small note */}
          <p
            style={{
              marginTop: "1rem",
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.8rem",
              fontWeight: 500,
            }}
          >
            ⚡ Response within 2 minutes • No hidden charges • Free
            cancellation*
          </p>
        </div>
      </section>

      {/* =====================================================
          RESPONSIVE CSS
      ===================================================== */}
      <style jsx>{`
        /* ===== Tablet (1024px and below) ===== */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }

          .features-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .fleet-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .about-city-grid {
            gap: 2.5rem !important;
          }

          .booking-description {
            padding-left: 0 !important;
          }

          .step-connector {
            display: none !important;
          }
        }

        /* ===== Small Tablet / Large Mobile (768px and below) ===== */
        @media (max-width: 768px) {
          .about-city-grid {
            grid-template-columns: 1fr !important;
          }

          .fleet-grid {
            grid-template-columns: 1fr !important;
          }

          .steps-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .hero-cta-buttons {
            flex-direction: column !important;
            width: 100% !important;
          }

          .hero-cta-buttons a {
            width: 100% !important;
            justify-content: center !important;
          }

          .booking-card {
            padding: 1.5rem !important;
          }

          .booking-trust-indicators {
            gap: 0.8rem !important;
          }

          .trust-divider {
            display: none !important;
          }

          .verified-badge {
            display: none !important;
          }

          .final-cta-buttons {
            flex-direction: column !important;
            width: 100% !important;
          }

          .final-cta-buttons a {
            width: 100% !important;
            justify-content: center !important;
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }

          .final-trust-badges {
            gap: 1rem !important;
          }

          .cta-trust-badges {
            gap: 0.8rem !important;
          }
        }

        /* ===== Mobile (600px and below) ===== */
        @media (max-width: 600px) {
          .features-grid {
            grid-template-columns: 1fr !important;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }

          .steps-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          .places-grid {
            grid-template-columns: 1fr 1fr !important;
          }

          .routes-grid {
            grid-template-columns: 1fr !important;
          }

          .journey-grid {
            grid-template-columns: 1fr 1fr !important;
          }

          .reviews-grid {
            grid-template-columns: 1fr !important;
          }

          .booking-trust-indicators {
            flex-direction: column !important;
            gap: 0.5rem !important;
            align-items: center !important;
          }

          .booking-description {
            padding-left: 0 !important;
            font-size: 0.85rem !important;
          }

          section {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
          }

          .hero-section {
            padding-top: 6rem !important;
            padding-bottom: 3rem !important;
          }
        }

        /* ===== Small Mobile (420px and below) ===== */
        @media (max-width: 420px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }

          .places-grid {
            grid-template-columns: 1fr !important;
          }

          .journey-grid {
            grid-template-columns: 1fr !important;
          }

          .final-trust-badges {
            flex-direction: column !important;
            gap: 0.5rem !important;
          }

          .cta-trust-badges {
            flex-direction: column !important;
            gap: 0.3rem !important;
            align-items: center !important;
          }

          .booking-card {
            padding: 1rem !important;
          }

          .booking-card h3 {
            font-size: 1.1rem !important;
          }

          .booking-card input,
          .booking-card select {
            font-size: 0.9rem !important;
            padding: 0.7rem !important;
          }
        }
      `}</style>
    </main>
  );
}
