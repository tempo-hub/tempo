"use client";

import Link from "next/link";
import {
  Award,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Clock,
  MapPin,
  MessageSquare,
  Phone,
  Shield,
  Star,
  Users,
  ArrowRight,
  Luggage,
  Route,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";


function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "16px",
        border: isOpen
          ? "1px solid #FE791A"
          : "1px solid #F0E1D5",
        transition:
          "border-color 0.3s ease, box-shadow 0.3s ease",
        overflow: "hidden",
        boxShadow: isOpen
          ? "0 8px 24px rgba(254, 121, 26, 0.12)"
          : "0 2px 8px rgba(13, 35, 57, 0.03)",
      }}
    >
      {/* FAQ Question */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
          padding: "1.2rem 1.5rem",
          background: isOpen ? "#FFFAF6" : "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          fontSize: "1rem",
          fontWeight: 700,
          color: isOpen ? "#E9660B" : "#0D2339",
          fontFamily: "inherit",
          lineHeight: 1.6,
          transition: "color 0.25s ease, background 0.25s ease",
        }}
      >
        <span>{question}</span>

        <span
          style={{
            flexShrink: 0,
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: isOpen ? "#FE791A" : "#FFF0E5",
            transition: "background 0.25s ease",
          }}
        >
          {isOpen ? (
            <ChevronUp size={20} color="#FFFFFF" />
          ) : (
            <ChevronDown size={20} color="#E9660B" />
          )}
        </span>
      </button>

      {/* FAQ Answer */}
      <div
        style={{
          maxHeight: isOpen ? "1000px" : "0",
          overflow: "hidden",
          transition:
            "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          style={{
            padding: isOpen
              ? "1.1rem 1.5rem 1.5rem"
              : "0 1.5rem",
            color: "#5B6B7E",
            fontSize: "0.95rem",
            lineHeight: 1.8,
            borderTop: isOpen
              ? "1px solid #F5E6DA"
              : "none",
            transition: "padding 0.3s ease",
          }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}


export default function LocalityTemplate({
  locality,
  fleet = [],
  otherLocalities = [],
  cityHubSlug = null,
}) {
  const { cityName, description } = locality;
  const whatsappNumber = "919151827941";
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const placeLabel = `${locality.locality}, ${locality.cityName}`;
  const whatsappText = `Booking Query for Urbania Tempo Traveller Hire in ${placeLabel}`;

  
const faqs = [
  {
    q: `What is the fare for a Tempo Traveller in ${placeLabel}?`,
    a: `Tempo Traveller rental fare from ${placeLabel} depends on the seating capacity, travel distance, trip duration, vehicle availability and route. Tolls, parking, state taxes and driver allowance may be charged separately. Contact Yatra Tempo Traveller with your travel details to get a fare estimate and confirm the total booking cost.`,
  },
  {
    q: `Which Tempo Traveller seating options are available in ${locality.locality}?`,
    a: `Yatra Tempo Traveller offers booking enquiries for 9, 12, 15, 16, 20 and 26 Seater Tempo Travellers from ${locality.locality}, ${locality.cityName}. Availability depends on your travel date and requirements. Share your passenger count and luggage details to enquire about a suitable vehicle.`,
  },
  {
    q: `Do you provide pickup from my location in ${locality.locality}?`,
    a: `You can enquire about pickup from your home, hotel, office or another agreed location in ${locality.locality} and nearby areas, including ${(locality.nearbyAreas || []).slice(0, 3).join(", ")}${locality.nearbyAreas?.length ? " and surrounding localities" : ""}. Please share your exact pickup address when requesting a quote so the pickup arrangements can be confirmed.`,
  },
  {
    q: `Can I book a Tempo Traveller for an outstation trip from ${locality.locality}?`,
    a: `Yes, you can enquire about local sightseeing, outstation journeys, family holidays, wedding travel, corporate trips and multi-day tours from ${locality.locality}. Popular routes include ${(locality.popularRoutes || []).slice(0, 3).join(", ")}${locality.popularRoutes?.length ? " and other destinations" : ""}. Share your destination, travel dates and trip duration to check vehicle availability and fares.`,
  },
  {
    q: `Are tolls, parking and driver charges included in the Tempo Traveller fare?`,
    a: `The fare inclusions depend on the specific booking and route. Driver allowance, tolls, parking, state taxes, night charges and other applicable expenses may be additional. Before confirming your Yatra Tempo Traveller booking, request a clear fare breakdown showing included services, extra charges and payment terms.`,
  },
  {
    q: `How can I book a Tempo Traveller from ${placeLabel}?`,
    a: `To enquire with Yatra Tempo Traveller, share your pickup location in ${locality.locality}, destination, travel date, pickup time, return date if applicable, passenger count and preferred seating capacity. Our booking team can help you check availability, understand the fare and confirm the booking terms.`,
  },
  {
    q: `Which Tempo Traveller should I choose for my group?`,
    a: `The right vehicle depends on the number of passengers, luggage and trip requirements. You can enquire about 9, 12, 15, 16, 20 and 26 Seater Tempo Travellers. Ask the booking team to confirm the actual passenger capacity, luggage space and available facilities before choosing your vehicle.`,
  },
  {
    q: `Can I book a Tempo Traveller for a wedding or family trip?`,
    a: `Yes, you can enquire about Tempo Traveller rentals for weddings, family functions, religious visits, school or college outings, corporate travel and group holidays from ${placeLabel}. Share your itinerary, passenger count and travel schedule to receive suitable vehicle options and a fare estimate.`,
  },
  {
    q: `What details are required to get a Tempo Traveller quotation?`,
    a: `Please provide your pickup address, destination, travel date, pickup time, return date or trip duration, number of passengers, luggage requirements and preferred seating capacity. Mention any planned stops or special requirements so the team can prepare a more accurate quotation.`,
  },
  {
    q: `How early should I book a Tempo Traveller in ${locality.locality}?`,
    a: `Booking in advance is recommended, especially for weekends, holidays, wedding dates and peak travel seasons. Availability for ${locality.locality} depends on your travel date and preferred seating capacity. Contact Yatra Tempo Traveller as early as possible to check availability and confirm your booking.`,
  },
];

  const cityLink = cityHubSlug ? `/${cityHubSlug}` : "/cities";
  const cityPageUrl = `/tempo-traveller-fare-in-${locality.city}`;

  return (
    <main>
      {/* ===== YATRA TEMPO TRAVELLER HERO ===== */}
      <section
        style={{
          paddingTop: "8.5rem",
          paddingBottom: "4rem",
          background:
            "linear-gradient(145deg, #0D2339 0%, #173A56 65%, #0D2339 100%)",
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
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
              gap: "0.4rem",
              fontSize: "0.85rem",
              marginBottom: "1.5rem",
              color: "rgba(255,255,255,0.8)",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
              Home
            </Link>
            <ChevronRight size={14} />

            <Link
              href="/cities"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Cities
            </Link>
            <ChevronRight size={14} />

            <Link
              href={cityLink}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {locality.cityName}
            </Link>
            <ChevronRight size={14} />

            <span style={{ color: "#FE791A", fontWeight: 700 }}>
              {locality.locality}
            </span>
          </nav>

          <div
            className="locality-hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 0.9fr",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Hero Content */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(254,121,26,0.14)",
                  border: "1px solid rgba(254,121,26,0.35)",
                  padding: "0.4rem 1.1rem",
                  borderRadius: "40px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#FF984D",
                }}
              >
                <MapPin size={14} />
                {placeLabel}
              </div>

              <h1
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: 800,
                  margin: "1rem 0 0.85rem",
                  lineHeight: 1.15,
                  color: "#FFFFFF",
                  letterSpacing: "-0.025em",
                }}
              >
                Tempo Traveller Hire in{" "}
                <span style={{ color: "#FE791A" }}>{locality.locality}</span>,{" "}
                {locality.cityName}
              </h1>

              <p
                style={{
                  color: "rgba(255,255,255,0.88)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  maxWidth: "620px",
                  margin: 0,
                }}
              >
                {description} Explore our{" "}
                <Link
                  href={cityPageUrl}
                  style={{
                    color: "#FF984D",
                    fontWeight: 700,
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  {cityName} Tempo Traveller service
                </Link>{" "}
                for comfortable family trips, group travel, weddings, corporate
                outings and outstation journeys.
              </p>

              {/* Trust Indicators */}
              <div
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  flexWrap: "wrap",
                  marginTop: "1.5rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid rgba(255,255,255,0.15)",
                  fontSize: "0.85rem",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Star size={16} fill="#FE791A" color="#FE791A" />
                  Comfortable Group Travel
                </span>

                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Users size={16} color="#FE791A" />
                  Multiple Seating Options
                </span>

                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <Shield size={16} color="#FE791A" />
                  Easy Booking Assistance
                </span>
              </div>

              {/* CTA Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  marginTop: "1.8rem",
                }}
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    padding: "0.9rem 1.8rem",
                    borderRadius: "50px",
                    background: "#FE791A",
                    color: "#FFFFFF",
                    fontWeight: 700,
                    textDecoration: "none",
                    fontSize: "1rem",
                    boxShadow: "0 8px 22px rgba(254,121,26,0.22)",
                  }}
                >
                  <MessageSquare size={20} />
                  Get Instant Fare
                </a>

                <a
                  href={`tel:+${whatsappNumber}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    padding: "0.9rem 1.8rem",
                    borderRadius: "50px",
                    background: "rgba(255,255,255,0.05)",
                    color: "#FFFFFF",
                    fontWeight: 600,
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.3)",
                    fontSize: "1rem",
                  }}
                >
                  <Phone size={20} />
                  Call Us
                </a>
              </div>
            </div>

            {/* Fare Enquiry Card */}
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E7EDF3",
                borderRadius: "24px",
                padding: "2rem",
                boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
                color: "#0D2339",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.65rem",
                  marginBottom: "0.4rem",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(254,121,26,0.12)",
                    borderRadius: "12px",
                    color: "#FE791A",
                  }}
                >
                  <Calendar size={21} />
                </div>

                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    color: "#0D2339",
                    margin: 0,
                  }}
                >
                  Check Your Fare
                </h3>
              </div>

              <p
                style={{
                  color: "#64748B",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                }}
              >
                Share your preferred vehicle to enquire about your trip from{" "}
                {placeLabel}.
              </p>

              <form
                action={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                method="GET"
                onSubmit={(e) => {
                  const select = e.currentTarget.querySelector("select");
                  const hidden = e.currentTarget.querySelector(
                    'input[type="hidden"]',
                  );

                  if (hidden && select) {
                    hidden.value =
                      `Fare enquiry for Yatra Tempo Traveller` +
                      ` | Pickup: ${placeLabel}` +
                      ` | Vehicle: ${select.value}`;
                  }
                }}
              >
                <input
                  type="hidden"
                  name="text"
                  value={`Fare enquiry for Yatra Tempo Traveller | Pickup: ${placeLabel}`}
                />

                {/* Pickup Locality */}
                <div style={{ marginBottom: "1.1rem" }}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.5rem",
                      color: "#0D2339",
                    }}
                  >
                    <MapPin size={15} color="#FE791A" />
                    Pickup Locality
                  </label>

                  <input
                    type="text"
                    value={placeLabel}
                    readOnly
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      border: "1px solid #DCE4EC",
                      borderRadius: "12px",
                      fontSize: "0.95rem",
                      background: "#F5F8FB",
                      color: "#0D2339",
                      fontWeight: 500,
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                {/* Vehicle Selection */}
                <div style={{ marginBottom: "1.3rem" }}>
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      marginBottom: "0.5rem",
                      color: "#0D2339",
                    }}
                  >
                    <Users size={15} color="#FE791A" />
                    Vehicle Seating Capacity
                  </label>

                  <select
                    name="seaterVariant"
                    defaultValue="12 Seater Tempo Traveller"
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      border: "1px solid #DCE4EC",
                      borderRadius: "12px",
                      fontSize: "0.95rem",
                      background: "#FFFFFF",
                      color: "#0D2339",
                      outline: "none",
                      cursor: "pointer",
                      boxSizing: "border-box",
                    }}
                  >
                    <option value="9 Seater Tempo Traveller">
                      9 Seater Tempo Traveller
                    </option>
                    <option value="12 Seater Tempo Traveller">
                      12 Seater Tempo Traveller
                    </option>
                    <option value="15 Seater Tempo Traveller">
                      15 Seater Tempo Traveller
                    </option>
                    <option value="16 Seater Tempo Traveller">
                      16 Seater Tempo Traveller
                    </option>
                    <option value="20 Seater Tempo Traveller">
                      20 Seater Tempo Traveller
                    </option>
                    <option value="26 Seater Tempo Traveller">
                      26 Seater Tempo Traveller
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    padding: "0.95rem",
                    borderRadius: "50px",
                    background: "#FE791A",
                    color: "#FFFFFF",
                    border: "none",
                    fontWeight: 800,
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    cursor: "pointer",
                    boxShadow: "0 6px 16px rgba(254,121,26,0.2)",
                  }}
                >
                  <MessageSquare size={18} />
                  Request Fare on WhatsApp
                </button>
              </form>

              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#718096",
                  textAlign: "center",
                  lineHeight: 1.5,
                  marginTop: "1rem",
                  marginBottom: 0,
                }}
              >
                Get in touch with our team for vehicle availability and fare
                details.
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 900px) {
            .locality-hero-grid {
              grid-template-columns: 1fr !important;
              gap: 2rem !important;
            }
          }

          @media (max-width: 600px) {
            .locality-hero-grid {
              gap: 1.5rem !important;
            }
          }
        `}</style>
      </section>

      {/* ===== FLEET ===== */}
      {fleet?.length > 0 && (
        <section style={{ padding: "3.5rem 0", background: "#f9fafc" }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            {/* Section Heading */}
            <div
              style={{
                textAlign: "center",
                maxWidth: "780px",
                margin: "0 auto 3rem",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "#FFF0E5",
                  color: "#FE791A",
                  padding: "0.25rem 1.2rem",
                  borderRadius: "40px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                }}
              >
                <Award size={14} /> Our Fleet
              </div>

              <h2
                style={{
                  fontSize: "2.3rem",
                  fontWeight: 700,
                  margin: "0.5rem 0 0.75rem",
                  color: "#0D2339",
                }}
              >
                Tempo Traveller Fleet in {locality.cityName}
              </h2>

              <p
                style={{
                  fontSize: "1.05rem",
                  color: "#4a5a6e",
                  lineHeight: "1.6",
                }}
              >
                Choose the vehicle that fits your group and travel requirements
                from {placeLabel}.
              </p>
            </div>

            {/* Fleet Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              {fleet.map((vehicle) => (
                <div
                  key={vehicle.type}
                  className="fleet-image-card"
                  style={{
                    background: "#fff",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 8px 24px rgba(0,20,50,0.06)",
                    border: "1px solid #f0f4fe",
                    cursor: "pointer",
                    position: "relative",
                  }}
                >
                  {/* ===== CARD IMAGE ===== */}
                  <div
                    style={{
                      position: "relative",
                      height: "220px",
                      background: "#FFF0E5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      width={400}
                      height={220}
                      className="fleet-image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />

                    {/* Capacity Badge */}
                    <span
                      style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        background: "#FE791A",
                        color: "#fff",
                        padding: "0.25rem 1rem",
                        borderRadius: "40px",
                        fontWeight: 600,
                        fontSize: "0.8rem",
                        zIndex: 2,
                      }}
                    >
                      {vehicle.seating}
                    </span>

                    {/* Rating Badge - Existing UI */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "12px",
                        left: "12px",
                        background: "rgba(0,0,0,0.7)",
                        backdropFilter: "blur(8px)",
                        color: "#FFB800",
                        padding: "0.2rem 0.8rem",
                        borderRadius: "20px",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        zIndex: 2,
                      }}
                    >
                      <Star size={14} fill="#FFB800" />
                      4.9
                    </div>
                  </div>

                  {/* ===== CARD BODY ===== */}
                  <div style={{ padding: "1.5rem 1.2rem 1.8rem" }}>
                    {/* Vehicle Name */}
                    <h3
                      className="fleet-title"
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        margin: "0 0 0.2rem",
                        color: "#0D2339",
                      }}
                    >
                      {vehicle.name}
                    </h3>

                    {/* Tagline - Uses existing vehicle features */}
                    <p
                      style={{
                        color: "#4a5a6e",
                        fontSize: "0.85rem",
                        margin: "0 0 0.75rem",
                        minHeight: "40px",
                      }}
                    >
                      {vehicle.features?.slice(0, 2).join(" • ") ||
                        "Comfortable group travel"}
                    </p>

                    {/* ===== KEY SPECS ===== */}
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                        marginBottom: "0.75rem",
                        padding: "0.5rem 0",
                        borderTop: "1px solid #f0f4fe",
                        borderBottom: "1px solid #f0f4fe",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.8rem",
                          color: "#4a5a6e",
                        }}
                      >
                        <Users
                          size={14}
                          style={{
                            display: "inline",
                            marginRight: "0.2rem",
                            verticalAlign: "middle",
                          }}
                        />
                        {vehicle.seating} Seats
                      </span>

                      <span
                        style={{
                          fontSize: "0.8rem",
                          color: "#4a5a6e",
                        }}
                      >
                        <Luggage
                          size={14}
                          style={{
                            display: "inline",
                            marginRight: "0.2rem",
                            verticalAlign: "middle",
                          }}
                        />
                        Luggage Space
                      </span>
                    </div>

                    {/* ===== PRICING ===== */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            color: "#7a8a9e",
                          }}
                        >
                          Starting from
                        </span>

                        <p
                          style={{
                            fontSize: "1.3rem",
                            fontWeight: 700,
                            color: "#0D2339",
                            margin: 0,
                          }}
                        >
                          ₹{vehicle.perKmRate}
                          <span
                            style={{
                              fontSize: "0.9rem",
                              fontWeight: 400,
                              color: "#7a8a9e",
                            }}
                          >
                            /km
                          </span>
                        </p>
                      </div>

                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "#7a8a9e",
                          background: "#FFF0E5",
                          padding: "0.2rem 0.8rem",
                          borderRadius: "20px",
                        }}
                      >
                        Per km rate
                      </span>
                    </div>

                    {/* ===== BOOK BUTTON ===== */}
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Hi, I want to book a ${vehicle.name} in ${locality.cityName}. Please share the availability and final fare.`,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fleet-book-button"
                    >
                      <MessageSquare size={16} />
                      Book This Vehicle
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== HOVER + RESPONSIVE CSS ===== */}
          <style jsx>{`
            .fleet-image-card {
              transition:
                transform 0.3s ease,
                border-color 0.3s ease,
                box-shadow 0.3s ease;
            }

            .fleet-image-card:hover {
              transform: scale(1.02);
              border-color: #fe791a !important;
              box-shadow: 0 14px 32px rgba(254, 121, 26, 0.16);
            }

            .fleet-image-card .fleet-image {
              transition: transform 0.5s ease;
            }

            .fleet-image-card:hover .fleet-image {
              transform: scale(1.06);
            }

            .fleet-title {
              transition: color 0.25s ease;
            }

            .fleet-image-card:hover .fleet-title {
              color: #fe791a !important;
            }

            .fleet-book-button {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.5rem;
              width: 100%;
              padding: 0.7rem 1.5rem;
              border-radius: 40px;
              background: #fe791a;
              color: #fff;
              font-weight: 600;
              font-size: 0.9rem;
              text-decoration: none;
              transition:
                background-color 0.25s ease,
                transform 0.25s ease,
                box-shadow 0.25s ease;
              margin-top: 0.5rem;
            }

            .fleet-book-button:hover {
              background: #e9660b;
              transform: translateY(-2px);
              box-shadow: 0 8px 18px rgba(254, 121, 26, 0.25);
            }

            @media (max-width: 600px) {
              .fleet-image-card:hover {
                transform: scale(1.01);
              }
            }
          `}</style>
        </section>
      )}

      {/* ===== QUICK FACTS ===== */}
      <section style={{ padding: "3rem 0", background: "#fff" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                icon: <MapPin size={20} color="#FE791A" />,
                label: "Pickup",
                value: placeLabel,
              },
              {
                icon: <Users size={20} color="#FE791A" />,
                label: "Seaters",
                value: "9 / 12 / 16 / 20 Seater Tempo Traveller",
              },
              {
                icon: <Clock size={20} color="#FE791A" />,
                label: "Service",
                value: "Local + Outstation + Airport",
              },
              {
                icon: <Award size={20} color="#FE791A" />,
                label: "Driver",
                value: "Experienced professional driver",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="quick-fact-card"
                style={{
                  border: "1px solid #ecf0f7",
                  borderRadius: "16px",
                  padding: "1.1rem 1.2rem",
                  background: "#fafcff",
                  display: "flex",
                  gap: "0.8rem",
                  alignItems: "flex-start",
                }}
              >
                <div>{f.icon}</div>

                <div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "#7a8a9e",
                      fontWeight: 600,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {f.label}
                  </div>

                  <div
                    style={{
                      fontSize: "0.95rem",
                      color: "#0D2339",
                      fontWeight: 700,
                    }}
                  >
                    {f.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .quick-fact-card {
            transition:
              transform 0.25s ease,
              border-color 0.25s ease,
              box-shadow 0.25s ease;
          }

          .quick-fact-card:hover {
            transform: scale(1.03);
            border-color: #fe791a !important;
            box-shadow: 0 10px 25px rgba(254, 121, 26, 0.15);
          }
        `}</style>
      </section>

      {/* ===== POPULAR FOR + NEARBY ===== */}
      <section style={{ padding: "1rem 0 3rem", background: "#fff" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "2rem",
          }}
          className="locality-two-col"
        >
          {/* ===== POPULAR FOR ===== */}
          <div
            className="locality-info-card"
            style={{
              background: "#f9fafc",
              border: "1px solid #ecf0f7",
              borderRadius: "20px",
              padding: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#0D2339",
                margin: "0 0 0.5rem",
              }}
            >
              Popular for {locality.locality} bookings
            </h2>

            <p
              style={{
                color: "#4a5a6e",
                fontSize: "0.95rem",
                margin: "0 0 1.2rem",
              }}
            >
              Popular uses for Tempo Traveller bookings from {placeLabel}.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.6rem",
              }}
            >
              {(locality.popularFor || []).map((tag) => (
                <span
                  key={tag}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    background: "#fff",
                    border: "1px solid #e2e8f5",
                    padding: "0.5rem 1rem",
                    borderRadius: "40px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#1f2b3a",
                  }}
                >
                  <CheckCircle2 size={15} color="#FE791A" />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ===== NEARBY AREAS ===== */}
          <div
            className="locality-info-card"
            style={{
              background: "#FFF3E9",
              borderRadius: "20px",
              padding: "2rem",
              border: "1px solid transparent",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#0D2339",
                margin: "0 0 0.5rem",
              }}
            >
              Nearby pickup areas
            </h2>

            <p
              style={{
                color: "#4a5a6e",
                fontSize: "0.95rem",
                margin: "0 0 1.2rem",
              }}
            >
              We also provide Tempo Traveller pickup services in nearby areas
              around {locality.locality}.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.6rem",
              }}
            >
              {(locality.nearbyAreas || []).map((area) => (
                <span
                  key={area}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    background: "#fff",
                    padding: "0.5rem 1rem",
                    borderRadius: "40px",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#0D2339",
                  }}
                >
                  <MapPin size={14} color="#FE791A" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          /* ===== CARD HOVER ===== */
          .locality-info-card {
            transition:
              transform 0.25s ease,
              border-color 0.25s ease,
              box-shadow 0.25s ease;
          }

          .locality-info-card:hover {
            transform: scale(1.02);
            border-color: #fe791a !important;
            box-shadow: 0 10px 25px rgba(254, 121, 26, 0.15);
          }

          /* ===== RESPONSIVE ===== */
          @media (max-width: 900px) {
            .locality-two-col {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ===== LOCAL PICKUP & TRAVEL GUIDE ===== */}
      <section className="pickup-guide-section">
        <div className="pickup-guide-container">
          {/* Section Heading */}
          <div className="pickup-guide-heading">
            <span className="pickup-guide-badge">
              <MapPin size={15} />
              Local Travel Guide
            </span>

            <h2>
              Tempo Traveller Pickup in <span>{locality.locality}</span>,{" "}
              {locality.cityName}
            </h2>

            <p>
              Planning a group journey from {locality.locality}? Arrange a Force
              Urbania pickup for family trips, corporate travel, weddings and
              outstation journeys with advance booking and confirmed pickup
              details.
            </p>
          </div>

          {/* Guide Cards */}
          <div className="pickup-guide-grid">
            {/* Pickup Arrangements */}
            <article className="pickup-guide-card">
              <div className="pickup-guide-icon">
                <MapPin size={23} />
              </div>

              <h3>Pickup Arrangements</h3>

              <p>
                Share your exact pickup address in {locality.locality},{" "}
                {locality.cityName}, along with your preferred pickup time.
                Home, hotel and other pickup points can be discussed during
                booking.
              </p>

              <h4>Nearby areas</h4>

              <div className="pickup-guide-tags">
                {(locality.nearbyAreas || []).slice(0, 6).map((area) => (
                  <span key={area}>{area}</span>
                ))}
              </div>
            </article>

            {/* Trip Types */}
            <article className="pickup-guide-card">
              <div className="pickup-guide-icon">
                <Route size={23} />
              </div>

              <h3>Plan Your Journey</h3>

              <p>
                Choose your journey type before requesting a quote. The final
                fare depends on the destination, total distance, travel dates
                and trip duration.
              </p>

              <ul className="pickup-guide-list">
                <li>
                  <CheckCircle2 size={17} />
                  Local and sightseeing trips
                </li>
                <li>
                  <CheckCircle2 size={17} />
                  One-way outstation journeys
                </li>
                <li>
                  <CheckCircle2 size={17} />
                  Round trips and multi-day tours
                </li>
                <li>
                  <CheckCircle2 size={17} />
                  Weddings and group travel
                </li>
              </ul>
            </article>

            {/* Vehicle Selection */}
            <article className="pickup-guide-card">
              <div className="pickup-guide-icon">
                <Users size={23} />
              </div>

              <h3>Choose the Right Vehicle</h3>

              <p>
                Select a suitable vehicle according to your passenger count and
                luggage requirements. Confirm the available seating
                configuration before booking.
              </p>

              <div className="pickup-guide-seaters">
                <span>9 Seater</span>
                <span>12 Seater</span>
                <span>16 Seater</span>
              </div>

              <p className="pickup-guide-note">
                Seating configurations and availability are subject to
                confirmation.
              </p>
            </article>
          </div>

          {/* Popular Routes */}
          {locality.popularRoutes?.length > 0 && (
            <div className="pickup-guide-routes">
              <div>
                <h3>Popular Trips from {locality.locality}</h3>
                <p>
                  Ask for a vehicle and fare estimate for your preferred
                  destination.
                </p>
              </div>

              <div className="pickup-guide-route-links">
                {locality.popularRoutes.slice(0, 6).map((route, index) => (
                  <a
                    key={`${route}-${index}`}
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                      `Hello, I need a Force Urbania fare quote for ${route} from ${placeLabel}. Please share availability, total fare and inclusions.`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{route}</span>
                    <ArrowRight size={17} />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Booking CTA */}
          <div className="pickup-guide-cta">
            <div>
              <h3>Need a pickup from {locality.locality}?</h3>
              <p>
                Share your destination, journey date, group size and preferred
                seater to request a personalised quotation.
              </p>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Hello, I want to book a Force Urbania from ${placeLabel}. Please help me with vehicle availability and the fare.`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare size={18} />
              Get a Fare Quote
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== POPULAR ROUTES ===== */}
      {locality.popularRoutes?.length > 0 && (
        <section style={{ padding: "3.5rem 0", background: "#f9fafc" }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            {/* Heading */}
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "#0D2339",
                margin: "0 0 0.5rem",
                textAlign: "center",
              }}
            >
              Popular Routes from{" "}
              <span style={{ color: "#FE791A" }}>{locality.locality}</span>
            </h2>

            {/* Description */}
            <p
              style={{
                textAlign: "center",
                color: "#4a5a6e",
                margin: "0 0 2rem",
                fontSize: "0.95rem",
                lineHeight: 1.7,
              }}
            >
              Explore one-way trips, round trips and multi-day Tempo Traveller
              journeys starting from {placeLabel}. Contact us for route details
              and fare information.
            </p>

            {/* Route Cards */}
            <div className="routes-grid">
              {locality.popularRoutes.map((route, index) => (
                <a
                  key={`${route}-${index}`}
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    `Fare enquiry: Tempo Traveller for ${route} from ${placeLabel}. Please share available seating options and fare details.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popular-route-card"
                >
                  {/* Left Icon */}
                  <div className="route-icon">
                    <MapPin size={20} />
                  </div>

                  {/* Route Information */}
                  <div className="route-content">
                    <div className="route-title">{route}</div>

                    <div className="route-details">
                      Tempo Traveller • Multiple seating options • With driver
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="route-arrow">
                    <ArrowRight size={18} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ===== ROUTE CARD STYLES ===== */}
          <style jsx>{`
            .routes-grid {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 1rem;
            }

            .popular-route-card {
              position: relative;
              display: flex;
              align-items: center;
              gap: 0.9rem;
              min-width: 0;
              background: #ffffff;
              border: 1px solid #ecf0f7;
              border-radius: 16px;
              padding: 1.2rem 1.3rem;
              text-decoration: none;
              transition:
                transform 0.25s ease,
                border-color 0.25s ease,
                box-shadow 0.25s ease,
                background-color 0.25s ease;
            }

            .popular-route-card:hover {
              transform: translateY(-3px);
              border-color: #fe791a;
              background: #ffffff;
              box-shadow: 0 10px 25px rgba(254, 121, 26, 0.14);
            }

            /* Route Icon */
            .route-icon {
              flex-shrink: 0;
              width: 42px;
              height: 42px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 12px;
              background: #fff0e5;
              color: #fe791a;
              transition:
                background-color 0.25s ease,
                color 0.25s ease,
                transform 0.25s ease;
            }

            .popular-route-card:hover .route-icon {
              background: #fe791a;
              color: #ffffff;
              transform: scale(1.08);
            }

            /* Route Content */
            .route-content {
              flex: 1;
              min-width: 0;
            }

            .route-title {
              font-size: 1rem;
              font-weight: 700;
              color: #0d2339;
              line-height: 1.5;
              transition: color 0.25s ease;
            }

            .popular-route-card:hover .route-title {
              color: #fe791a;
            }

            .route-details {
              font-size: 0.82rem;
              color: #7a8a9e;
              margin-top: 0.25rem;
              line-height: 1.5;
            }

            /* Arrow */
            .route-arrow {
              flex-shrink: 0;
              width: 36px;
              height: 36px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              color: #fe791a;
              background: #fff3e9;
              transition:
                background-color 0.25s ease,
                color 0.25s ease,
                transform 0.25s ease;
            }

            .popular-route-card:hover .route-arrow {
              background: #fe791a;
              color: #ffffff;
              transform: translateX(3px);
            }

            /* Tablet and Mobile */
            @media (max-width: 768px) {
              .routes-grid {
                grid-template-columns: 1fr;
              }
            }

            @media (max-width: 600px) {
              .popular-route-card {
                padding: 1rem;
                gap: 0.75rem;
              }

              .route-details {
                font-size: 0.78rem;
              }

              .route-icon {
                width: 38px;
                height: 38px;
              }

              .route-arrow {
                width: 32px;
                height: 32px;
              }
            }
          `}</style>
        </section>
      )}

      {/* =========================================================
    TEMPO TRAVELLER COMPARISON
========================================================= */}
      <section
        style={{
          padding: "4rem 0",
          background: "#fff",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          {/* Section Heading */}
          <div
            style={{
              textAlign: "center",
              maxWidth: "780px",
              margin: "0 auto 2.5rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "#FFF0E5",
                color: "#FE791A",
                padding: "0.3rem 1.1rem",
                borderRadius: "40px",
                fontSize: "0.8rem",
                fontWeight: 700,
              }}
            >
              <Award size={15} />
              Compare Your Options
            </div>

            <h2
              style={{
                fontSize: "2.2rem",
                fontWeight: 700,
                color: "#0D2339",
                margin: "0.7rem 0 0.6rem",
              }}
            >
              Choose the Right Tempo Traveller
            </h2>

            <p
              style={{
                color: "#4a5a6e",
                fontSize: "1rem",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Planning a group trip from {placeLabel}? Compare vehicle capacity,
              comfort, luggage requirements and suitability to find the right
              Tempo Traveller for your journey.
            </p>
          </div>

          {/* Comparison Card */}
          <div
            className="urbania-comparison-card"
            style={{
              background: "#fff",
              border: "1px solid #e2e8f5",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 8px 28px rgba(0, 30, 80, 0.06)",
            }}
          >
            {/* Header */}
            <div
              className="comparison-header"
              style={{
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr 1fr",
                background: "#FE791A",
                color: "#fff",
              }}
            >
              <div
                style={{
                  padding: "1.1rem 1.3rem",
                  fontWeight: 700,
                }}
              >
                Feature
              </div>

              <div
                style={{
                  padding: "1.1rem 1.3rem",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                9 Seater
              </div>

              <div
                style={{
                  padding: "1.1rem 1.3rem",
                  fontWeight: 700,
                  textAlign: "center",
                  background: "#E9660B",
                }}
              >
                Larger Seater
              </div>
            </div>

            {/* Comparison Rows */}
            {[
              {
                feature: "Vehicle Type",
                compact: "9 Seater Tempo Traveller",
                larger: "Higher-capacity Tempo Traveller",
              },
              {
                feature: "Passenger Capacity",
                compact: "Suitable for smaller groups",
                larger: "Suitable for larger groups",
              },
              {
                feature: "Seating Options",
                compact: "9+1 seating configuration",
                larger: "Select from available fleet options",
              },
              {
                feature: "Luggage Requirements",
                compact: "Confirm space for your luggage",
                larger: "Choose according to group luggage",
              },
              {
                feature: "Long Distance Travel",
                compact: "Suitable for outstation journeys",
                larger: "Suitable for group and multi-day trips",
              },
              {
                feature: "Best For",
                compact: "Small families and small groups",
                larger: "Weddings, tours and larger groups",
              },
            ].map((item, index) => (
              <div
                key={item.feature}
                className="comparison-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1.2fr 1fr 1fr",
                  borderTop: "1px solid #ecf0f7",
                  background: index % 2 === 0 ? "#fff" : "#fafcff",
                }}
              >
                <div
                  style={{
                    padding: "1rem 1.3rem",
                    fontWeight: 700,
                    color: "#0D2339",
                    fontSize: "0.9rem",
                  }}
                >
                  {item.feature}
                </div>

                <div
                  style={{
                    padding: "1rem 1.3rem",
                    textAlign: "center",
                    color: "#FE791A",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                  }}
                >
                  <CheckCircle2
                    size={15}
                    style={{
                      display: "inline",
                      verticalAlign: "middle",
                      marginRight: "0.3rem",
                    }}
                  />
                  {item.compact}
                </div>

                <div
                  style={{
                    padding: "1rem 1.3rem",
                    textAlign: "center",
                    color: "#4a5a6e",
                    fontSize: "0.88rem",
                  }}
                >
                  {item.larger}
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .urbania-comparison-card {
            transition:
              transform 0.3s ease,
              box-shadow 0.3s ease,
              border-color 0.3s ease;
          }

          .urbania-comparison-card:hover {
            transform: translateY(-4px);
            border-color: #fe791a;
            box-shadow: 0 16px 35px rgba(254, 121, 26, 0.12);
          }

          .comparison-row {
            transition:
              background-color 0.2s ease,
              transform 0.2s ease;
          }

          .comparison-row:hover {
            background: #fff3e9 !important;
          }

          @media (max-width: 700px) {
            .comparison-header,
            .comparison-row {
              grid-template-columns: 1fr !important;
            }

            .comparison-header > div,
            .comparison-row > div {
              text-align: left !important;
            }

            .comparison-header > div:not(:first-child) {
              display: none;
            }

            .comparison-row {
              padding: 0.3rem 0;
            }

            .comparison-row > div {
              padding: 0.6rem 1rem !important;
            }

            .comparison-row > div:nth-child(2)::before {
              content: "9 Seater: ";
              font-weight: 700;
              color: #fe791a;
            }

            .comparison-row > div:nth-child(3)::before {
              content: "Larger Seater: ";
              font-weight: 700;
              color: #0d2339;
            }
          }
        `}</style>
      </section>

      {/* =========================================================
    WHY BOOK YATRA TEMPO TRAVELLER
========================================================= */}
      <section
        style={{
          padding: "4rem 0",
          background: "#FFF9F4",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "0.9fr 1.1fr",
              gap: "3rem",
              alignItems: "center",
            }}
            className="why-yatra-grid"
          >
            {/* Left Content */}
            <div>
              <div className="why-yatra-badge">
                <Shield size={15} />
                Trusted Group Travel
              </div>

              <h2 className="why-yatra-heading">
                Why Book a Tempo Traveller in <span>{locality.locality}</span>?
              </h2>

              <p className="why-yatra-description">
                Travel comfortably with a Tempo Traveller and a professional
                driver. Choose a suitable seating option with flexible pickup
                arrangements for local trips, outstation journeys and group
                travel from {placeLabel}.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Booking enquiry for a Tempo Traveller from ${placeLabel}. Please share available seating options, fares and availability.`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="why-yatra-button"
              >
                <MessageSquare size={17} />
                Check Availability
                <ArrowRight size={17} />
              </a>
            </div>

            {/* Right Benefits */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "1rem",
              }}
              className="why-yatra-benefits-grid"
            >
              {[
                {
                  icon: <MapPin size={22} />,
                  title: "Convenient Pickup",
                  text: `Arrange pickup from homes, hotels and suitable locations in ${locality.locality}.`,
                },
                {
                  icon: <Users size={22} />,
                  title: "Multiple Seating Options",
                  text: "Choose from available vehicle capacities to suit your group size.",
                },
                {
                  icon: <Shield size={22} />,
                  title: "Professional Drivers",
                  text: "Enjoy a convenient journey with a driver for local and outstation travel.",
                },
                {
                  icon: <Calendar size={22} />,
                  title: "Flexible Trip Plans",
                  text: "Plan one-way trips, round trips, weddings and multi-day tours.",
                },
                {
                  icon: <Luggage size={22} />,
                  title: "Group Travel Comfort",
                  text: "Choose a vehicle that suits your passenger count and luggage requirements.",
                },
                {
                  icon: <MessageSquare size={22} />,
                  title: "WhatsApp Assistance",
                  text: "Share your travel details and enquire about fares and vehicle availability.",
                },
              ].map((item) => (
                <div key={item.title} className="why-yatra-benefit-card">
                  <div className="why-yatra-benefit-icon">{item.icon}</div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .why-yatra-grid {
            min-height: 300px;
          }

          .why-yatra-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: #fff0e5;
            color: #e9660b;
            border: 1px solid #ffdfc7;
            padding: 0.4rem 1.1rem;
            border-radius: 40px;
            font-size: 0.8rem;
            font-weight: 700;
          }

          .why-yatra-heading {
            font-size: clamp(1.8rem, 4vw, 2.3rem);
            font-weight: 800;
            color: #0d2339;
            line-height: 1.25;
            margin: 0.9rem 0 0.8rem;
          }

          .why-yatra-heading span {
            color: #fe791a;
          }

          .why-yatra-description {
            color: #4a5a6e;
            font-size: 1rem;
            line-height: 1.8;
            margin: 0 0 1.5rem;
          }

          .why-yatra-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 0.85rem 1.5rem;
            border-radius: 50px;
            background: #fe791a;
            color: #fff;
            font-weight: 700;
            font-size: 0.9rem;
            text-decoration: none;
            transition:
              background-color 0.25s ease,
              transform 0.25s ease,
              box-shadow 0.25s ease;
          }

          .why-yatra-button:hover {
            background: #e9660b;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(254, 121, 26, 0.25);
          }

          .why-yatra-benefit-card {
            background: #ffffff;
            border: 1px solid #f0e5dc;
            border-radius: 18px;
            padding: 1.3rem;
            transition:
              transform 0.25s ease,
              border-color 0.25s ease,
              box-shadow 0.25s ease;
          }

          .why-yatra-benefit-card:hover {
            transform: translateY(-5px);
            border-color: #fe791a;
            box-shadow: 0 12px 28px rgba(254, 121, 26, 0.12);
          }

          .why-yatra-benefit-icon {
            width: 44px;
            height: 44px;
            border-radius: 12px;
            background: #fff0e5;
            color: #fe791a;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 0.8rem;
            transition:
              transform 0.25s ease,
              background-color 0.25s ease,
              color 0.25s ease;
          }

          .why-yatra-benefit-card:hover .why-yatra-benefit-icon {
            background: #fe791a;
            color: #ffffff;
            transform: scale(1.08);
          }

          .why-yatra-benefit-card h3 {
            font-size: 1rem;
            font-weight: 700;
            color: #0d2339;
            line-height: 1.4;
            margin: 0 0 0.4rem;
          }

          .why-yatra-benefit-card p {
            font-size: 0.83rem;
            color: #5b6b7e;
            line-height: 1.65;
            margin: 0;
          }

          @media (max-width: 900px) {
            .why-yatra-grid {
              grid-template-columns: 1fr !important;
              gap: 2.2rem !important;
            }
          }

          @media (max-width: 600px) {
            .why-yatra-benefits-grid {
              grid-template-columns: 1fr !important;
            }

            .why-yatra-benefit-card {
              padding: 1.15rem;
            }

            .why-yatra-description {
              font-size: 0.94rem;
            }

            .why-yatra-button {
              width: 100%;
              box-sizing: border-box;
            }
          }
        `}</style>
      </section>

      {/* =========================================================
    LOCAL FARE BREAKDOWN — YATRA TEMPO TRAVELLER
========================================================= */}
      <section className="yatra-fare-section">
        <div className="yatra-fare-container">
          {/* Section Heading */}
          <div className="yatra-fare-heading">
            <span className="yatra-fare-badge">FARE TRANSPARENCY</span>

            <h2>
              Tempo Traveller Rental Fare in <span>{locality.locality}</span>
            </h2>

            <p>
              Understand the main cost components before booking a Tempo
              Traveller from {placeLabel}. Request a quote based on your route,
              travel dates, trip duration and selected vehicle.
            </p>
          </div>

          {/* Fare Breakdown Cards */}
          <div className="yatra-fare-grid">
            {[
              {
                title: "Vehicle Rental",
                description:
                  "The rental rate depends on your selected Tempo Traveller, seating capacity and booking terms.",
                number: "01",
              },
              {
                title: "Distance & Duration",
                description:
                  "Your route, total kilometres, number of travel days and applicable minimum-kilometre rules may affect the fare.",
                number: "02",
              },
              {
                title: "Driver Allowance",
                description:
                  "Confirm the applicable driver allowance and whether it is charged separately for your trip.",
                number: "03",
              },
              {
                title: "Additional Charges",
                description:
                  "Check applicable tolls, parking fees, state taxes and night charges before confirming your booking.",
                number: "04",
              },
            ].map((item) => (
              <article className="yatra-fare-card" key={item.number}>
                <div className="yatra-fare-number">{item.number}</div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>

          {/* Fare Disclaimer */}
          <div className="yatra-fare-notice">
            <div className="yatra-fare-notice-mark">!</div>

            <p>
              <strong>Before confirming:</strong> Ask for the total estimated
              fare, included services, additional charges, payment terms and
              cancellation policy in writing.
            </p>
          </div>
        </div>

        <style jsx>{`
          .yatra-fare-section {
            padding: 4rem 0;
            background: linear-gradient(180deg, #fff9f4 0%, #fff3e9 100%);
          }

          .yatra-fare-container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 1.5rem;
          }

          .yatra-fare-heading {
            text-align: center;
            margin-bottom: 2.5rem;
          }

          .yatra-fare-badge {
            display: inline-block;
            background: #fff0e5;
            color: #e9660b;
            padding: 0.45rem 1rem;
            border: 1px solid #ffdfc7;
            border-radius: 30px;
            font-weight: 700;
            font-size: 0.8rem;
            letter-spacing: 0.5px;
          }

          .yatra-fare-heading h2 {
            color: #0d2339;
            font-size: clamp(1.6rem, 4vw, 2.2rem);
            line-height: 1.3;
            margin: 1rem 0 0.7rem;
            font-weight: 800;
            letter-spacing: -0.5px;
          }

          .yatra-fare-heading h2 span {
            color: #fe791a;
          }

          .yatra-fare-heading p {
            color: #4a5a6e;
            line-height: 1.8;
            max-width: 720px;
            margin: 0 auto;
            font-size: 0.98rem;
          }

          .yatra-fare-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
            gap: 1.25rem;
          }

          .yatra-fare-card {
            background: #ffffff;
            border: 1px solid #f0e1d5;
            border-radius: 18px;
            padding: 1.5rem;
            box-shadow: 0 4px 14px rgba(13, 35, 57, 0.05);
            transition:
              transform 0.25s ease,
              box-shadow 0.25s ease,
              border-color 0.25s ease;
          }

          .yatra-fare-card:hover {
            transform: translateY(-6px);
            border-color: #fe791a;
            box-shadow: 0 14px 30px rgba(254, 121, 26, 0.13);
          }

          .yatra-fare-number {
            width: 46px;
            height: 46px;
            display: grid;
            place-items: center;
            background: #fff0e5;
            color: #e9660b;
            border: 1px solid #ffdfc7;
            border-radius: 13px;
            font-weight: 800;
            font-size: 0.95rem;
            margin-bottom: 1.1rem;
            transition:
              background-color 0.25s ease,
              color 0.25s ease,
              transform 0.25s ease;
          }

          .yatra-fare-card:hover .yatra-fare-number {
            background: #fe791a;
            color: #ffffff;
            transform: scale(1.06);
          }

          .yatra-fare-card h3 {
            color: #0d2339;
            font-size: 1.08rem;
            font-weight: 750;
            line-height: 1.4;
            margin: 0 0 0.65rem;
          }

          .yatra-fare-card p {
            color: #5b6b7e;
            font-size: 0.92rem;
            line-height: 1.75;
            margin: 0;
          }

          .yatra-fare-notice {
            display: flex;
            align-items: flex-start;
            gap: 0.9rem;
            margin-top: 1.75rem;
            padding: 1.25rem 1.4rem;
            background: #fff0e5;
            border: 1px solid #ffdfc7;
            border-left: 5px solid #fe791a;
            border-radius: 14px;
            color: #34465a;
            line-height: 1.75;
            font-size: 0.92rem;
            box-shadow: 0 4px 12px rgba(13, 35, 57, 0.04);
          }

          .yatra-fare-notice-mark {
            flex-shrink: 0;
            width: 25px;
            height: 25px;
            display: grid;
            place-items: center;
            border-radius: 50%;
            background: #fe791a;
            color: #ffffff;
            font-weight: 800;
            font-size: 0.85rem;
            margin-top: 1px;
          }

          .yatra-fare-notice p {
            margin: 0;
          }

          .yatra-fare-notice strong {
            color: #0d2339;
          }

          @media (max-width: 600px) {
            .yatra-fare-section {
              padding: 3rem 0;
            }

            .yatra-fare-container {
              padding: 0 1rem;
            }

            .yatra-fare-heading {
              margin-bottom: 1.8rem;
            }

            .yatra-fare-heading p {
              font-size: 0.92rem;
            }

            .yatra-fare-grid {
              grid-template-columns: 1fr;
              gap: 1rem;
            }

            .yatra-fare-card {
              padding: 1.25rem;
            }

            .yatra-fare-notice {
              padding: 1rem;
              font-size: 0.87rem;
            }
          }
        `}</style>
      </section>

      {/* =========================================================
    HOW TO BOOK IN 3 STEPS — YATRA TEMPO TRAVELLER
========================================================= */}
      <section className="yatra-booking-steps">
        <div className="yatra-booking-container">
          {/* Section Heading */}
          <div className="yatra-booking-heading">
            <span className="yatra-booking-badge">SIMPLE BOOKING PROCESS</span>

            <h2>
              How to Book a Tempo Traveller in <span>{locality.locality}</span>
            </h2>

            <p>
              Book your group journey in three simple steps. Share your travel
              requirements, confirm your fare and arrange your trip.
            </p>
          </div>

          {/* Booking Steps */}
          <div className="yatra-booking-grid">
            {[
              {
                number: "1",
                title: "Share Your Trip Details",
                description:
                  "Tell us your pickup location, destination, travel date, return date if applicable, and number of passengers.",
              },
              {
                number: "2",
                title: "Confirm Vehicle & Fare",
                description:
                  "Discuss available seating options, vehicle availability, estimated distance, total fare and applicable extra charges.",
              },
              {
                number: "3",
                title: "Confirm Your Booking",
                description:
                  "Review the booking terms and payment instructions, then confirm your vehicle and pickup details.",
              },
            ].map((step) => (
              <article className="yatra-booking-card" key={step.number}>
                <div className="yatra-booking-number">{step.number}</div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="yatra-booking-cta">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Hello, I want to book a Tempo Traveller from ${placeLabel}. Please share available seating options, availability, total fare and booking terms.`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="yatra-booking-button"
            >
              <MessageSquare size={18} />
              Enquire on WhatsApp
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

        <style jsx>{`
          .yatra-booking-steps {
            padding: 4rem 1.5rem;
            background: linear-gradient(180deg, #ffffff 0%, #fff7f0 100%);
          }

          .yatra-booking-container {
            max-width: 1280px;
            margin: 0 auto;
          }

          .yatra-booking-heading {
            text-align: center;
            margin-bottom: 2.5rem;
          }

          .yatra-booking-badge {
            display: inline-block;
            padding: 0.4rem 1rem;
            background: #fff0e5;
            color: #e9660b;
            border: 1px solid #ffdfc7;
            border-radius: 30px;
            font-size: 0.8rem;
            font-weight: 800;
            letter-spacing: 0.5px;
            margin-bottom: 0.9rem;
          }

          .yatra-booking-heading h2 {
            color: #0d2339;
            font-size: clamp(1.6rem, 4vw, 2.2rem);
            font-weight: 800;
            line-height: 1.3;
            margin: 0 0 0.7rem;
            letter-spacing: -0.5px;
          }

          .yatra-booking-heading h2 span {
            color: #fe791a;
          }

          .yatra-booking-heading p {
            color: #5b6b7e;
            line-height: 1.8;
            max-width: 650px;
            margin: 0 auto;
            font-size: 0.96rem;
          }

          .yatra-booking-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 1.25rem;
          }

          .yatra-booking-card {
            padding: 1.7rem;
            border: 1px solid #f0e1d5;
            border-radius: 20px;
            background: #ffffff;
            box-shadow: 0 5px 16px rgba(13, 35, 57, 0.05);
            transition:
              transform 0.25s ease,
              box-shadow 0.25s ease,
              border-color 0.25s ease;
          }

          .yatra-booking-card:hover {
            transform: translateY(-6px);
            border-color: #fe791a;
            box-shadow: 0 15px 32px rgba(254, 121, 26, 0.13);
          }

          .yatra-booking-number {
            width: 50px;
            height: 50px;
            border-radius: 15px;
            background: linear-gradient(135deg, #fe791a, #ff9d52);
            color: #ffffff;
            border: 1px solid #fe791a;
            display: grid;
            place-items: center;
            font-size: 1.2rem;
            font-weight: 800;
            margin-bottom: 1.2rem;
            box-shadow: 0 5px 12px rgba(254, 121, 26, 0.2);
            transition: transform 0.25s ease;
          }

          .yatra-booking-card:hover .yatra-booking-number {
            transform: scale(1.08) rotate(-3deg);
          }

          .yatra-booking-card h3 {
            color: #0d2339;
            font-size: 1.08rem;
            font-weight: 750;
            line-height: 1.45;
            margin: 0 0 0.7rem;
          }

          .yatra-booking-card p {
            color: #5b6b7e;
            font-size: 0.92rem;
            line-height: 1.75;
            margin: 0;
          }

          .yatra-booking-cta {
            text-align: center;
            margin-top: 2.25rem;
          }

          .yatra-booking-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.6rem;
            padding: 0.95rem 1.7rem;
            background: #fe791a;
            color: #ffffff;
            text-decoration: none;
            border: 1px solid #fe791a;
            border-radius: 50px;
            font-weight: 750;
            font-size: 0.95rem;
            box-shadow: 0 5px 15px rgba(254, 121, 26, 0.2);
            transition:
              transform 0.25s ease,
              box-shadow 0.25s ease,
              background-color 0.25s ease;
          }

          .yatra-booking-button:hover {
            transform: translateY(-3px);
            background: #e9660b;
            border-color: #e9660b;
            box-shadow: 0 10px 24px rgba(254, 121, 26, 0.3);
          }

          .yatra-booking-button:focus-visible {
            outline: 3px solid #0d2339;
            outline-offset: 4px;
          }

          @media (max-width: 600px) {
            .yatra-booking-steps {
              padding: 3rem 1rem;
            }

            .yatra-booking-heading {
              margin-bottom: 1.8rem;
            }

            .yatra-booking-heading p {
              font-size: 0.92rem;
            }

            .yatra-booking-grid {
              grid-template-columns: 1fr;
              gap: 1rem;
            }

            .yatra-booking-card {
              padding: 1.35rem;
            }

            .yatra-booking-button {
              width: 100%;
              box-sizing: border-box;
              padding: 0.9rem 1rem;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .yatra-booking-card,
            .yatra-booking-number,
            .yatra-booking-button {
              transition: none;
            }

            .yatra-booking-card:hover,
            .yatra-booking-button:hover {
              transform: none;
            }
          }
        `}</style>
      </section>

      {/* =========================================================
    TRIP REQUIREMENTS CHECKLIST — YATRA TEMPO TRAVELLER
========================================================= */}
      <section
        style={{
          padding: "4rem 1.5rem",
          background: "linear-gradient(180deg, #ffffff 0%, #fff5ec 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          {/* LEFT CONTENT */}
          <div>
            <span
              style={{
                display: "inline-block",
                color: "#E9660B",
                background: "#FFF0E5",
                border: "1px solid #FFDFC7",
                borderRadius: "30px",
                padding: "0.4rem 0.9rem",
                fontWeight: 800,
                fontSize: "0.8rem",
                letterSpacing: "0.5px",
              }}
            >
              PLAN YOUR JOURNEY
            </span>

            <h2
              style={{
                color: "#0D2339",
                fontSize: "clamp(1.6rem, 4vw, 2.1rem)",
                fontWeight: 800,
                lineHeight: 1.3,
                margin: "1rem 0 0.8rem",
              }}
            >
              What to Keep Ready Before Booking
            </h2>

            <p
              style={{
                color: "#5B6B7E",
                lineHeight: 1.8,
                fontSize: "0.96rem",
                margin: "0 0 1rem",
              }}
            >
              For an accurate Tempo Traveller quote from {placeLabel}, share
              your travel requirements and trip details with our booking team.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Hello, I need a Tempo Traveller booking quote from ${placeLabel}. Please share available seating options, vehicle availability, total fare and booking terms.`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                padding: "0.9rem 1.4rem",
                background: "#FE791A",
                color: "#FFFFFF",
                border: "1px solid #FE791A",
                textDecoration: "none",
                borderRadius: "12px",
                fontWeight: 750,
                marginTop: "0.5rem",
                boxShadow: "0 5px 14px rgba(254, 121, 26, 0.2)",
                transition:
                  "transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-3px) scale(1.03)";
                e.currentTarget.style.background = "#E9660B";
                e.currentTarget.style.boxShadow =
                  "0 10px 22px rgba(254, 121, 26, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.background = "#FE791A";
                e.currentTarget.style.boxShadow =
                  "0 5px 14px rgba(254, 121, 26, 0.2)";
              }}
            >
              <MessageSquare size={18} />
              Request a Quote
              <ArrowRight size={17} />
            </a>
          </div>

          {/* RIGHT CHECKLIST CARD */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #F0E1D5",
              borderRadius: "20px",
              padding: "1.5rem",
              boxShadow: "0 6px 20px rgba(13, 35, 57, 0.06)",
              transition:
                "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px) scale(1.01)";
              e.currentTarget.style.borderColor = "#FE791A";
              e.currentTarget.style.boxShadow =
                "0 14px 30px rgba(254, 121, 26, 0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.borderColor = "#F0E1D5";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(13, 35, 57, 0.06)";
            }}
          >
            <h3
              style={{
                color: "#0D2339",
                fontSize: "1.1rem",
                fontWeight: 800,
                margin: "0 0 0.5rem",
              }}
            >
              Your Booking Checklist
            </h3>

            <p
              style={{
                color: "#7A8A9E",
                fontSize: "0.85rem",
                lineHeight: 1.6,
                margin: "0 0 0.8rem",
              }}
            >
              Keep these details ready for a smoother Tempo Traveller enquiry.
            </p>

            {[
              "Exact pickup address in " + placeLabel,
              "Destination and planned stops",
              "Travel date and pickup time",
              "Return date or total trip duration",
              "Number of passengers and luggage",
              "Preferred seating capacity",
            ].map((item, index, items) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  padding: "0.9rem 0.65rem",
                  margin: "0 -0.65rem",
                  borderBottom:
                    index === items.length - 1 ? "none" : "1px solid #F1EDE9",
                  borderRadius: "8px",
                  color: "#263B50",
                  fontSize: "0.92rem",
                  lineHeight: 1.6,
                  transition: "background 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#FFF5EC";
                  e.currentTarget.style.transform = "translateX(3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <CheckCircle2
                  size={19}
                  color="#FE791A"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                />
                <span>{item}</span>
              </div>
            ))}

            <div
              style={{
                marginTop: "0.9rem",
                padding: "0.9rem 1rem",
                background: "#FFF3E9",
                border: "1px solid #FFDFC7",
                borderLeft: "4px solid #FE791A",
                borderRadius: "10px",
                color: "#5B6B7E",
                fontSize: "0.82rem",
                lineHeight: 1.7,
              }}
            >
              <strong style={{ color: "#0D2339" }}>Booking tip:</strong> Confirm
              vehicle availability, total fare, included services and additional
              charges before making payment.
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section
        style={{
          padding: "3rem 0",
          background: "#f9fafc",
        }}
      >
        <div
          style={{
            maxWidth: "860px",
            margin: "0 auto",
            padding: "0 1.5rem",
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "#0D2339",
              textAlign: "center",
              margin: "0 0 0.5rem",
            }}
          >
            {locality.locality} Tempo Traveller Fare FAQs
          </h2>

          {/* Description */}
          <p
            style={{
              textAlign: "center",
              color: "#4a5a6e",
              margin: "0 0 2rem",
              lineHeight: 1.7,
            }}
          >
            Find answers to common questions about Tempo Traveller booking,
            fares, seating options and trips from {placeLabel}.
          </p>

          {/* FAQ Items */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
            }}
          >
            {faqs.map((f, i) => (
              <FAQItem
                key={i}
                question={f.q}
                answer={f.a}
                isOpen={openFAQIndex === i}
                onToggle={() => setOpenFAQIndex(openFAQIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== OTHER LOCALITIES ===== */}
      {otherLocalities?.length > 0 && (
        <section style={{ padding: "3rem 0", background: "#fff" }}>
          <div
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "0 1.5rem",
            }}
          >
            {/* Heading */}
            <h2
              style={{
                fontSize: "1.6rem",
                fontWeight: 700,
                color: "#0D2339",
                margin: "0 0 1.2rem",
              }}
            >
              More {locality.cityName} Localities
            </h2>

            {/* Locality Links */}
            <div className="other-localities-list">
              {otherLocalities.map((o) => (
                <Link
                  key={`${o.city}-${o.slug}`}
                  href={`/${o.city}/${o.slug}`}
                  className="locality-link"
                >
                  Tempo Traveller in {o.locality}
                </Link>
              ))}
            </div>

            {/* City Link */}
            <div style={{ marginTop: "1.5rem" }}>
              <Link href={cityLink} className="all-city-services-link">
                View all {locality.cityName} services
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* Styles */}
          <style jsx>{`
            .other-localities-list {
              display: flex;
              flex-wrap: wrap;
              gap: 0.7rem;
            }

            .locality-link {
              display: inline-flex;
              align-items: center;
              padding: 0.65rem 1rem;
              border: 1px solid #f1e2d7;
              border-radius: 10px;
              background: #fff;
              color: #0d2339;
              font-size: 0.9rem;
              font-weight: 600;
              text-decoration: none;
              transition:
                color 0.25s ease,
                background-color 0.25s ease,
                border-color 0.25s ease,
                transform 0.25s ease;
            }

            .locality-link:hover {
              color: #fe791a;
              background: #fff3e9;
              border-color: #fe791a;
              transform: translateY(-2px);
            }

            .all-city-services-link {
              color: #fe791a;
              font-weight: 700;
              text-decoration: none;
              display: inline-flex;
              align-items: center;
              gap: 0.4rem;
              transition:
                color 0.25s ease,
                gap 0.25s ease;
            }

            .all-city-services-link:hover {
              color: #d95e08;
              gap: 0.65rem;
            }

            @media (max-width: 600px) {
              .other-localities-list {
                gap: 0.55rem;
              }

              .locality-link {
                padding: 0.6rem 0.8rem;
                font-size: 0.84rem;
              }
            }
          `}</style>
        </section>
      )}
    </main>
  );
}
