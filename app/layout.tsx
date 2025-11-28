import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // domain barumu
  metadataBase: new URL("https://asistensitugas.my.id"),
  title: "Asistensitugas.id – Asistensi Tugas, Website, & Aplikasi Premium",
  description:
    "Asistensitugas.id menyediakan asistensi tugas, pembuatan website profesional, dan akun aplikasi premium seperti Canva, CapCut, Netflix, Spotify, dan Vidio.",
  icons: {
    icon: "/icon.png",      // /public/icon.png
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Asistensitugas.id – Asistensi Tugas, Website, & Aplikasi Premium",
    description:
      "Asistensi tugas, pembuatan website profesional, dan akun aplikasi premium dalam satu tempat.",
    url: "https://asistensitugas.web.id",
    siteName: "Asistensitugas.id",
    images: [
      {
        url: "/og-asistensitugas.png", // pastikan file ini ada di /public
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asistensitugas.id – Asistensi Tugas, Website, & Aplikasi Premium",
    description:
      "Asistensi tugas, pembuatan website profesional, dan akun aplikasi premium dalam satu tempat.",
    images: ["/og-asistensitugas.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-linear-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50`}
      >
        <LanguageProvider>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pb-16 pt-20 md:pt-24">{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
