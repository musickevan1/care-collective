import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: "CARE Collective - Family Caregiver Support",
  description: "A platform for family caregivers to offer and request help, coordinate care, and stay connected with their support network.",
  keywords: ["caregiving", "family support", "elder care", "community help"],
  authors: [{ name: "CARE Collective Team" }],
  openGraph: {
    title: "CARE Collective - Family Caregiver Support",
    description: "Connect with your care network for support when you need it most.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}