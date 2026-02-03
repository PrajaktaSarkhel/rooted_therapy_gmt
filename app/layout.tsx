import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import BotanicalDecor from '@/components/BotanicalDecor';
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rooted by Grow My Therapy | Dr. Maya Reynolds",
  description: "Specialized anxiety and trauma therapy in Seattle, WA by Dr. Maya Reynolds.",
};

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* We set text-[#1A1C18] here to ensure all text is dark and readable */}
      <body className="antialiased relative min-h-screen text-[#1A1C18] selection:bg-secondary/30">
        
        {/* The Softer Hue Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[#FFFEFA]" />
          {/* Soft Green Wash */}
          <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] bg-[#E8F3D6] rounded-full blur-[120px] opacity-60" />
          {/* Soft Pink Wash */}
          <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#FFEDF0] rounded-full blur-[100px] opacity-70" />
          {/* Soft Yellow Wash */}
          <div className="absolute bottom-[-5%] left-[10%] w-[70vw] h-[70vw] bg-[#FFF9DE] rounded-full blur-[150px] opacity-80" />
        </div>

        {children}
      </body>
    </html>
  );
}

