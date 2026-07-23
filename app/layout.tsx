import type { Metadata } from "next";
import { Geist_Mono, Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mentorle.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mentorle | Talk to people who've already done it",
    template: "%s | Mentorle",
  },
  description:
    "Mentorle helps students, founders, and learners connect with verified mentors, attend expert-led sessions, and grow through practical support and real community across Punjab and beyond.",
  keywords: [
    "mentorship",
    "mentors",
    "Punjab",
    "career coaching",
    "startup mentors",
    "Mentorle",
  ],
  authors: [{ name: "Mentorle" }],
  creator: "Mentorle",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Mentorle",
    title: "Mentorle | Talk to people who've already done it",
    description:
      "Community-led mentorship connecting students, founders, and learners with verified mentors across Punjab and beyond.",
    images: [
      {
        url: "/logo.svg",
        width: 1062,
        height: 271,
        alt: "Mentorle",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Mentorle | Talk to people who've already done it",
    description:
      "Community-led mentorship connecting students, founders, and learners with verified mentors.",
    images: ["/icon.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Mentorle",
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      image: `${siteUrl}/icon.svg`,
      description:
        "Community-led mentorship platform connecting students, founders, and learners with verified mentors.",
      areaServed: {
        "@type": "Place",
        name: "Punjab",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Mentorle",
      publisher: { "@id": `${siteUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `https://platform.mentorle.in/signup`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
