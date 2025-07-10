import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RootLayout } from '@/layouts/root';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Country Explorer",
  description: "Una aplicación web que permite explorar países por continente y moneda, y ver información detallada de cada uno.",
};

export default function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  );
}
