import type { Metadata, Viewport } from "next";
import { Cinzel, EB_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Amaris is turning ONE-derful",
  description:
    "Join us to celebrate Amaris Keziah D. Benedicto’s 1st birthday, Sunday, November 22, 2026, 6:00 PM at Jollibee Potrero, Malabon.",
  openGraph: {
    title: "Amaris is turning ONE-derful",
    description:
      "Sunday, November 22, 2026 · 6:00 PM · Jollibee Potrero, Malabon. Tap to see the details and RSVP.",
    images: [{ url: "/photos/invitation.jpg", width: 1024, height: 1536 }],
  },
};

export const viewport: Viewport = {
  themeColor: "#e6eef9",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${greatVibes.variable} ${ebGaramond.variable} antialiased`}
    >
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
