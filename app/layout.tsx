import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SimuPanel — AI-Powered Consumer Concept Testing | Validate Product Ideas in Minutes",
  description: "Validate your product ideas overnight — for the price of lunch. SimuPanel uses advanced language models and semantic analysis to replicate real consumer purchase intent with 90% of the accuracy of live focus groups.",
  keywords: ["AI consumer testing", "product validation", "market research", "concept testing", "purchase intent", "focus groups", "consumer behavior", "product launch", "startup validation", "market research AI"],
  authors: [{ name: "SearchWell Labs LLC" }],
  creator: "SearchWell Labs LLC",
  publisher: "SearchWell Labs LLC",
  openGraph: {
    title: "SimuPanel — AI-Powered Consumer Concept Testing",
    description: "Validate your product ideas overnight — for the price of lunch. Get 90% accuracy of live focus groups in minutes.",
    type: "website",
    locale: "en_US",
    siteName: "SimuPanel",
    url: "https://simupanel.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "SimuPanel — AI-Powered Consumer Concept Testing",
    description: "Validate your product ideas overnight — for the price of lunch. Get 90% accuracy of live focus groups in minutes.",
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
