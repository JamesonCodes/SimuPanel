import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SimuPanel — AI-Powered Consumer Concept Testing",
  description: "Validate your product ideas overnight — for the price of lunch. SimuPanel uses advanced language models and semantic analysis to replicate real consumer purchase intent with 90% of the accuracy of live focus groups.",
  keywords: ["AI", "consumer testing", "product validation", "market research", "concept testing", "purchase intent"],
  authors: [{ name: "SimuPanel" }],
  openGraph: {
    title: "SimuPanel — AI-Powered Consumer Concept Testing",
    description: "Validate your product ideas overnight — for the price of lunch.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SimuPanel — AI-Powered Consumer Concept Testing",
    description: "Validate your product ideas overnight — for the price of lunch.",
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
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
