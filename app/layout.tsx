import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KaziBora Group - Pan East African Holding Company",
  description: "Hospitality, VIP Concierge Services, and Commodities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}