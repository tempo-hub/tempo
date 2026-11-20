import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tempo Traveller Travel Blogs | Routes, Tips & Guides",
  description:
    "Read tempo traveller travel guides, route tips, fare advice and group travel inspiration for Varanasi, Ayodhya, Prayagraj, Lucknow and destinations across India.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Tempo Traveller Travel Blogs | Routes, Tips & Guides",
    description:
      "Explore tempo traveller routes, travel tips and group travel guides.",
    url: "/blogs",
    type: "website",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
