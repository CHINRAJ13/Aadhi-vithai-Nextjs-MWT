import type { Metadata } from "next";
import { Newsreader, Inter } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: "italic",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aadhi Vithai | The Ancient Path of Awareness",
  description: "A premium spiritual institution rooted in the Tamil Siddhar tradition, offering a direct path to understanding the mind and finding stillness.",
  keywords: ["Aadhi Vithai", "Siddhar Tradition", "Awareness", "Meditation", "Tamil Spirituality", "Gurukulam"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white font-sans text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
