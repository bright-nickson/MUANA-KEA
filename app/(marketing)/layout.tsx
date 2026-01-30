import type { Metadata } from "next";
import "../globals.css";
import { PremiumNav } from "@/components/PremiumNav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mauna Kea Consulting | Technology Consulting & Managed Services",
  description:
    "Mauna Kea Consulting is a trusted technology consulting and managed services partner for enterprises across Africa and the Middle East.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{
        backgroundColor: '#050505',
        color: '#e5e5e5',
        fontFamily: 'Inter, sans-serif',
        background: 'linear-gradient(135deg, #050505 0%, #0a0a0a 50%, #050505 100%)',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
    >
      <PremiumNav />
      <main className="flex-1" style={{ display: 'flex', flexDirection: 'column' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}