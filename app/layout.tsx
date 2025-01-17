import type { Metadata } from "next";
import { Footer, Navbar } from "../components";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  variable: "--display-font",
  weight: '400',
});

export const metadata: Metadata = {
  title: "Pestico - Reliable Pest Control Services in Canada.",
  description: "Trust Pestico for effective pest control solutions across Canada. Our experienced team offers eco-friendly treatments for homes and businesses.",
  creator: "Pestico Inc.",
  verification: {
    google: "GOOGLE_VERIFICATION_CODE",
  },
  category: "Pest Control Services",
  keywords: [
    "pest control Canada",
    "Canadian pest management",
    "eco-friendly pest solutions",
    "residential pest control",
    "commercial pest services",
    "Toronto pest control",
    "Ontario pest removal",
    "Canada-wide pest treatment"
  ],
  metadataBase: new URL("https://www.pestico.ca"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    title: "Pestico | Effective Pest Control Across Canada",
    description: "Expert pest control services for homes and businesses in Canada. Eco-friendly treatments and quick responses.",
    url: "https://www.pestico.ca",
    siteName: "Pestico",
    images: "https://www.pestico.ca/opengraph-image.png",
  },
  authors: [{ name: "Pestico Inc.", url: "https://www.pestico.ca/about-us" }],
  twitter: {
    card: "summary_large_image",
    site: "@PesticoCanada",
    title: "Pestico | Canada's Trusted Pest Control Experts",
    description: "Reliable pest control services across Canada. Eco-friendly treatments and quick responses.",
    images: ["https://www.pestico.ca/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}antialiased bg-white`}
      >
        <Navbar/>
        {children}
        <Footer/>
        <Toaster position="bottom-right"/>
      </body>
    </html>
  );
}
