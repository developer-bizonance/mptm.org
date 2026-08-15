import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "महाराष्ट्र प्रांतिक तैलिका महासभा - अमरावती विभाग | MPTM Amravati",
  description: "महाराष्ट्र प्रांतिक तैलिका महासभा अमरावती विभाग - एकता, प्रगती आणि समाजसेवेचा संकल्प... तैलिका समाजाच्या उज्ज्वल भविष्याकडे वाटचाल!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="mr"
      className={`${geistSans.variable} ${geistMono.variable} ${devanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FDFBF7] text-slate-900">{children}</body>
    </html>
  );
}

