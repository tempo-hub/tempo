import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { WhatsAppButton } from "./components/whatsapp-button";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yatratempotraveller.com"),
  title: "YatraTempoTraveller.com | Best Tempo Traveller Service",
  description:
    "Book tempo travellers in Varanasi for group pilgrimages, weddings & tours. 9 to 26 seater tempo travellers to Ayodhya, Prayagraj, Lucknow & more at fixed prices.",
  verification: {
    google: "oQQ_e5TI41qZTSRvW6FH-MujeC-sMuhfposrPwFyXkc",
  },
  icons: {
    icon: "/ytfavicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MX3BZ6LBQP"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-MX3BZ6LBQP');
    `}
        </Script>

        <Navbar />

        {children}

        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
          }}
        />
        
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
