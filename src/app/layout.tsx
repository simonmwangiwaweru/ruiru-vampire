import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollSpider } from "@/components/ScrollSpider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "The Ruiru Vampire — Field Guide",
  description:
    "A satirical fan-lore field guide to the 'Ruiru Vampire' internet legend. Parody content, not news.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col bg-obsidian text-paper-white">
        <ScrollSpider />
        {children}
      </body>
    </html>
  );
}
