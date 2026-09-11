"use client";

import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Star,
  Clock,
  Award,
  Shield,
  Phone,
  MessageSquare,
  Bus,
  CheckCircle2,
} from "lucide-react";

import { CITY_HUBS } from "@/lib/data";

export default function CitiesClient() {
  // Sort cities alphabetically
  const sortedCities = [...CITY_HUBS].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  return (
    <main>
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section
        style={{
          padding: "9rem 1.5rem 4.5rem",
          background:
            "#0D2339",
          color: "#fff",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative Circle - Top Right */}
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.07)",
            top: "-220px",
            right: "-120px",
            pointerEvents: "none",
          }}
        />

        {/* Decorative Circle - Bottom Left */}
        <div
          style={{
            position: "absolute",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            bottom: "-180px",
            left: "-100px",
            pointerEvents: "none",
          }}
        />

        {/* Decorative Circle - Center */}
        <div
          style={{
            position: "absolute",
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
            top: "30%",
            left: "8%",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Hero Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "#fff",
              padding: "0.45rem 1rem",
              borderRadius: "50px",
              fontSize: "0.8rem",
              fontWeight: 600,
              marginBottom: "1.25rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <MapPin size={14} />
            City Hubs Across India
          </div>

          {/* Hero Heading */}
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(2.1rem, 5vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.025em",
              margin: "0 0 1.1rem",
            }}
          >
            Tempo Traveller Hire
            <br />
            <span style={{ color: "#E66406" }}>
              Across India
            </span>
          </h1>

          {/* Hero Description */}
          <p
            style={{
              color: "rgba(255,255,255,0.92)",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              lineHeight: 1.75,
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Book comfortable and reliable Yatra Tempo Travellers from
            major cities across India for family trips, local sightseeing,
            pilgrimages, corporate tours, weddings, and outstation journeys.
          </p>

          {/* Trust Stats */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "2rem",
              marginTop: "2.5rem",
              paddingTop: "1.75rem",
              borderTop: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            {[
              {
                value: "20+",
                label: "City Hubs",
              },
              {
                value: "9–20",
                label: "Seater Options",
              },
              {
                value: "24/7",
                label: "Travel Support",
              },
              {
                value: "100%",
                label: "Comfort Focused",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  minWidth: "100px",
                }}
              >
                <div
                  style={{
                    fontSize: "1.45rem",
                    fontWeight: 800,
                    color: "#E66406",
                    lineHeight: 1.2,
                  }}
                >
                  {item.value}
                </div>

                <div
                  style={{
                    marginTop: "0.25rem",
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.72)",
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CITY SECTION
      ========================================================= */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background: "#F8FAFC",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Section Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "2.75rem",
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                background: "#FFF1E8",
                color: "#FE6A01",
                padding: "0.4rem 1rem",
                borderRadius: "50px",
                fontSize: "0.8rem",
                fontWeight: 700,
                marginBottom: "0.9rem",
              }}
            >
              <MapPin size={14} />
              Pickup Locations
            </div>

            {/* Heading */}
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.7rem)",
                fontWeight: 800,
                color: "#172033",
                margin: "0 0 0.65rem",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Choose Your{" "}
              <span style={{ color: "#FE6A01" }}>
                Pickup City
              </span>
            </h2>

            {/* Description */}
            <p
              style={{
                maxWidth: "680px",
                margin: "0 auto",
                color: "#64748B",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              Select your city to explore available Tempo Traveller
              variants, popular routes, sightseeing options, and booking
              details.
            </p>
          </div>

          {/* =====================================================
              CITY GRID
          ===================================================== */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {sortedCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "1rem",
                  padding: "1.4rem 1.5rem",
                  background: "#fff",
                  border: "1px solid #E2E8F0",
                  borderRadius: "16px",
                  boxShadow:
                    "0 2px 8px rgba(15,23,42,0.04)",
                  color: "#172033",
                  textDecoration: "none",
                  transition:
                    "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-5px)";

                  e.currentTarget.style.borderColor =
                    "#FE6A01";

                  e.currentTarget.style.boxShadow =
                    "0 14px 32px rgba(254,106,1,0.14)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";

                  e.currentTarget.style.borderColor =
                    "#E2E8F0";

                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(15,23,42,0.04)";
                }}
              >
                {/* Orange Left Accent */}
                <span
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "4px",
                    background:
                      "linear-gradient(180deg, #D95500, #FE6A01)",
                  }}
                />

                {/* City Content */}
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.85rem",
                    minWidth: 0,
                  }}
                >
                  {/* Location Icon */}
                  <span
                    style={{
                      width: "44px",
                      height: "44px",
                      minWidth: "44px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "12px",
                      background: "#FFF1E8",
                      color: "#FE6A01",
                    }}
                  >
                    <MapPin size={19} />
                  </span>

                  {/* City Name + Tag */}
                  <span
                    style={{
                      display: "block",
                      minWidth: 0,
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        marginBottom: "0.25rem",
                        color: "#172033",
                      }}
                    >
                      {city.name}
                    </strong>

                    <small
                      style={{
                        display: "block",
                        color: "#64748B",
                        fontSize: "0.82rem",
                        lineHeight: 1.4,
                      }}
                    >
                      {city.tag}
                    </small>
                  </span>
                </span>

                {/* Arrow */}
                <span
                  style={{
                    width: "35px",
                    height: "35px",
                    minWidth: "35px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    background: "#FFF1E8",
                    color: "#FE6A01",
                    transition:
                      "transform 0.25s ease, background 0.25s ease",
                  }}
                >
                  <ArrowRight size={17} />
                </span>
              </Link>
            ))}
          </div>

          {/* =====================================================
              INFORMATION NOTE
          ===================================================== */}
          <div
            style={{
              marginTop: "2.5rem",
              padding: "1.25rem 1.5rem",
              background: "#fff",
              border: "1px solid #E2E8F0",
              borderRadius: "14px",
              textAlign: "center",
              boxShadow:
                "0 2px 8px rgba(15,23,42,0.03)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              <Award
                size={18}
                color="#FE6A01"
              />

              <p
                style={{
                  margin: 0,
                  color: "#64748B",
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                <strong style={{ color: "#172033" }}>
                  Planning a group trip?
                </strong>{" "}
                Choose your nearest city and find the right Tempo
                Traveller for your group size and journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY YATRA SECTION
      ========================================================= */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background: "#fff",
          borderTop: "1px solid #F1F5F9",
          borderBottom: "1px solid #F1F5F9",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "2.75rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                background: "#FFF1E8",
                color: "#FE6A01",
                padding: "0.4rem 1rem",
                borderRadius: "50px",
                fontSize: "0.8rem",
                fontWeight: 700,
                marginBottom: "0.9rem",
              }}
            >
              <CheckCircle2 size={14} />
              Why Yatra
            </div>

            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.7rem)",
                fontWeight: 800,
                color: "#172033",
                margin: "0 0 0.65rem",
              }}
            >
              Why Choose{" "}
              <span style={{ color: "#FE6A01" }}>
                Yatra Tempo Traveller?
              </span>
            </h2>

            <p
              style={{
                color: "#64748B",
                fontSize: "1rem",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Comfortable, reliable, and convenient group travel
              solutions across India.
            </p>
          </div>

          {/* Features */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                icon: <Shield size={30} />,
                title: "Safety First",
                desc: "Professional drivers and well-maintained vehicles for a safe and comfortable journey.",
              },
              {
                icon: <Bus size={30} />,
                title: "Premium Fleet",
                desc: "Comfortable Tempo Travellers with spacious seating and modern travel amenities.",
              },
              {
                icon: <Clock size={30} />,
                title: "Reliable Service",
                desc: "Planned pickups, timely departures, and dependable support throughout your journey.",
              },
              {
                icon: <MessageSquare size={30} />,
                title: "24/7 Support",
                desc: "Get assistance with bookings, route planning, quotes, and travel-related queries.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                style={{
                  textAlign: "center",
                  padding: "2rem 1.5rem",
                  borderRadius: "16px",
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  transition:
                    "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-5px)";

                  e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(254,106,1,0.10)";

                  e.currentTarget.style.borderColor =
                    "#FE6A01";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0)";

                  e.currentTarget.style.boxShadow =
                    "none";

                  e.currentTarget.style.borderColor =
                    "#E2E8F0";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "58px",
                    height: "58px",
                    margin: "0 auto 1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "16px",
                    background: "#FFF1E8",
                    color: "#FE6A01",
                  }}
                >
                  {feature.icon}
                </div>

                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#172033",
                    margin: "0 0 0.45rem",
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#64748B",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA SECTION
      ========================================================= */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background:
            "#E66406",
          color: "#fff",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* CTA Decorative Circle */}
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
            top: "-250px",
            right: "-100px",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* CTA Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.45rem",
              background: "rgba(255,255,255,0.13)",
              border:
                "1px solid rgba(255,255,255,0.22)",
              color: "#fff",
              padding: "0.4rem 1rem",
              borderRadius: "50px",
              fontSize: "0.8rem",
              fontWeight: 700,
              marginBottom: "1rem",
              backdropFilter: "blur(10px)",
            }}
          >
            <Star
              size={14}
              fill="#fff"
            />
            Plan Your Journey
          </div>

          {/* CTA Heading */}
          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(1.8rem, 4vw, 2.7rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              margin: "0 0 0.8rem",
            }}
          >
            Ready to Plan Your
            <br />
            Group Journey?
          </h2>

          {/* CTA Description */}
          <p
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "600px",
              margin: "0 auto 1.75rem",
            }}
          >
            Get a quick quote for your Tempo Traveller and travel
            comfortably with your family, friends, or group.
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.9rem",
              flexWrap: "wrap",
            }}
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/916280820037"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "0.95rem 1.9rem",
                borderRadius: "50px",
                background: "#25D366",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.95rem",
                boxShadow:
                  "0 6px 20px rgba(37,211,102,0.25)",
                transition:
                  "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-2px)";

                e.currentTarget.style.boxShadow =
                  "0 10px 28px rgba(37,211,102,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";

                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(37,211,102,0.25)";
              }}
            >
              <MessageSquare size={18} />
              WhatsApp for Quote
            </a>

            {/* Call */}
            <a
              href="tel:+918448445504"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "0.95rem 1.9rem",
                borderRadius: "50px",
                background: "#fff",
                color: "#FE6A01",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "0.95rem",
                boxShadow:
                  "0 5px 18px rgba(0,0,0,0.12)",
                transition:
                  "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-2px)";

                e.currentTarget.style.boxShadow =
                  "0 10px 28px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0)";

                e.currentTarget.style.boxShadow =
                  "0 5px 18px rgba(0,0,0,0.12)";
              }}
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>

          {/* CTA Bottom Text */}
          <p
            style={{
              color: "rgba(255,255,255,0.68)",
              fontSize: "0.78rem",
              marginTop: "1.5rem",
              marginBottom: 0,
            }}
          >
            Transparent pricing • Comfortable vehicles •
            Professional drivers
          </p>
        </div>
      </section>
    </main>
  );
}