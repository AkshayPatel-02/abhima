import type { Metadata } from "next";
import { Poppins, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhimaevents.com"),
  title: {
    default: "Abhima Events | Luxury Event Curation in India",
    template: "%s | Abhima Events",
  },
  description:
    "Bespoke weddings, corporate gatherings, and private celebrations — curated with precision, discretion, and care. Serving Hyderabad, India & Beyond.",
  keywords: [
    "luxury wedding planner Hyderabad",
    "Telugu wedding traditions",
    "corporate event management Hyderabad",
    "destination wedding India",
    "Pelli Choopulu",
    "Nischitartham",
    "bespoke event curation",
    "premium event management",
  ],
  authors: [{ name: "Abhima Events" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://abhimaevents.com",
    siteName: "Abhima Events",
    title: "Abhima Events | Luxury Event Curation in India",
    description:
      "Bespoke weddings, corporate gatherings, and private celebrations — curated with precision, discretion, and care.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable} ${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
