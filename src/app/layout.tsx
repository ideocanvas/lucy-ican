import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configure the Inter font with desired weights
const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "Lucy Ideocanvas | Share Ideas, Spark Innovation",
  description:
    "The platform for creative collaboration is currently under construction. Be the first to know when we launch and start turning dreams into reality!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Applying the Inter font class to the body */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}