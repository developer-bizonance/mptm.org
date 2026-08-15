import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const devanagari = Noto_Sans_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mptm-org.vercel.app";

export const viewport: Viewport = {
  themeColor: "#4A0404",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "महाराष्ट्र प्रांतिक तैलिक महासभा - अमरावती विभाग | MPTM Amravati",
    template: "%s | MPTM Amravati",
  },
  description:
    "महाराष्ट्र प्रांतिक तैलिक महासभा अमरावती विभाग - एकता, प्रगती आणि समाजसेवेचा संकल्प... तैलिक समाजाच्या उज्ज्वल भविष्याकडे वाटचाल! अधिकृत सदस्य नोंदणी अर्ज.",
  keywords: [
    "महाराष्ट्र प्रांतिक तैलिक महासभा",
    "MPTM Amravati",
    "MPTM",
    "तैलिक महासभा अमरावती",
    "अमरावती तैलिक समाज",
    "Tailik Sahu Samaj Amravati",
    "सदस्य नोंदणी",
    "जय संताजी",
    "तैलिक समाज",
  ],
  authors: [{ name: "महाराष्ट्र प्रांतिक तैलिक महासभा, अमरावती" }],
  creator: "MPTM Amravati",
  publisher: "MPTM Amravati",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "महाराष्ट्र प्रांतिक तैलिक महासभा - अमरावती विभाग | MPTM Amravati",
    description:
      "महाराष्ट्र प्रांतिक तैलिक महासभा अमरावती विभाग - एकता, प्रगती आणि समाजसेवेचा संकल्प... तैलिक समाजाच्या उज्ज्वल भविष्याकडे वाटचाल!",
    url: siteUrl,
    siteName: "MPTM Amravati",
    images: [
      {
        url: `${siteUrl}/favicon.png`,
        width: 300,
        height: 300,
        alt: "MPTM Amravati Logo",
      },
    ],
    locale: "mr_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "महाराष्ट्र प्रांतिक तैलिक महासभा - अमरावती विभाग",
    description:
      "महाराष्ट्र प्रांतिक तैलिक महासभा अमरावती विभाग - एकता, प्रगती आणि समाजसेवेचा संकल्प!",
    images: [`${siteUrl}/favicon.png`],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "महाराष्ट्र प्रांतिक तैलिक महासभा - अमरावती विभाग",
    alternateName: "MPTM Amravati",
    url: siteUrl,
    logo: `${siteUrl}/favicon.png`,
    description:
      "महाराष्ट्र प्रांतिक तैलिक महासभा अमरावती विभाग - एकता, प्रगती आणि समाजसेवेचा संकल्प. अधिकृत सदस्य नोंदणी पोर्टल.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Amravati",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  };

  return (
    <html
      lang="mr"
      className={`${geistSans.variable} ${geistMono.variable} ${devanagari.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta property="og:image" content={`${siteUrl}/favicon.png`} />
        <meta property="og:image:secure_url" content={`${siteUrl}/favicon.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${devanagari.className} min-h-full flex flex-col bg-[#FDFBF7] text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
