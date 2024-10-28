import type { Metadata } from "next";

import "./globals.css";
import { Heebo, Inter } from 'next/font/google'

const heebo = Heebo({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-heebo',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Figma to NextJS",
  description: "Project by Muhammad Junaid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heebo.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
