import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://simupanel.vercel.app'),
  title: "SimuPanel — Test Ideas with Digital Twins of Your Customers | Customer Simulation Platform",
  description: "Test your ideas with digital twins of your customers — before you launch. SimuPanel lets you see how your ideal customers would react to your product, ad, or campaign — instantly. Powered by peer-reviewed AI used by Colgate-Palmolive and PyMC Labs.",
  keywords: ["digital twins", "customer simulation", "campaign testing", "product testing", "ad testing", "purchase intent", "AI customer insights", "product validation", "market research", "concept testing", "SSR", "semantic similarity", "customer personas", "buyer insights"],
  authors: [{ name: "SearchWell Labs LLC" }],
  creator: "SearchWell Labs LLC",
  publisher: "SearchWell Labs LLC",
  openGraph: {
    title: "SimuPanel — Test Ideas with Digital Twins of Your Customers",
    description: "Test your ideas with digital twins of your customers — before you launch. See how your buyers would actually respond in minutes, powered by peer-reviewed AI.",
    type: "website",
    locale: "en_US",
    siteName: "SimuPanel",
    url: "https://simupanel.vercel.app/",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "SimuPanel - Customer Simulation Platform with Digital Twins",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SimuPanel — Test Ideas with Digital Twins of Your Customers",
    description: "Test your ideas with digital twins of your customers — before you launch. See how your buyers would actually respond in minutes.",
    creator: "@simupanel",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add when you get it
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
