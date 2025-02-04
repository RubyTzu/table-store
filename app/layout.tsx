import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const NotoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-notosanstc",
});

export const metadata: Metadata = {
  title: "Table For Stores",
  description: "Practice of making a table for stores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${NotoSansTC.variable} antialiased`}>{children}</body>
    </html>
  );
}