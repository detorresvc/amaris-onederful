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

// Link previews (Facebook, Messenger, Viber, X…) need absolute image URLs.
// NEXT_PUBLIC_SITE_URL overrides; on Vercel the production domain is used.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://amaris-onederful-ten.vercel.app");

const shareTitle = "Amaris is turning ONE-derful";
const shareDescription =
  "Sunday, November 22, 2026 · 6:00 PM · Jollibee Potrero, Malabon. Tap to see the details and RSVP.";
// 1200×630 crop of the printed invitation: the size link previews expect.
const shareImage = {
  url: "/photos/share-card.jpg",
  width: 1200,
  height: 630,
  type: "image/jpeg",
  alt: "Amaris in her blue princess gown beside the invitation to her 1st birthday, Sunday, November 22, 2026, 6:00 PM, Jollibee Potrero Malabon",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: shareTitle,
  description:
    "Join us to celebrate Amaris Keziah D. Benedicto’s 1st birthday, Sunday, November 22, 2026, 6:00 PM at Jollibee Potrero, Malabon.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Amaris’s 1st Birthday",
    locale: "en_PH",
    title: shareTitle,
    description: shareDescription,
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
    images: [shareImage],
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
