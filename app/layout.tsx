import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sarabun } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const sarabun = Sarabun({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-sarabun",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Code QR — โคตร QR",
    template: "%s — Code QR",
  },
  description:
    "Digital menu made easy. Scan & go. เมนูดิจิทัล สร้างง่าย สแกนเลย",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${sarabun.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
