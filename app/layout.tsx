import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { BotanicalDecor } from "@/components/BotanicalDecor";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Rooted by Grow My Therapy | Dr. Maya Reynolds",
  description: "Specialized anxiety and trauma therapy in Seattle, WA by Dr. Maya Reynolds.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased relative min-h-screen text-[#1A1C18] selection:bg-secondary/30">
        
        {/* STRATEGY: We keep the background container fixed. 
          The actual texture and base color #FBFBF9 are coming from your globals.css body tag.
        */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Subtle Glows: These are reduced in opacity (from 60-80% down to 20-30%) 
            This prevents the "uneven" look while keeping the organic feel.
          */}
          
          {/* Soft Green Wash - Top Left */}
          <div className="absolute top-[-10%] left-[-5%] w-[60vw] h-[60vw] bg-[#cfe8c7] rounded-full blur-[120px] opacity-30" />
          
          {/* Soft Pink Wash - Mid Right */}
          <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#fec1cc] rounded-full blur-[100px] opacity-25" />
          
          {/* Soft Blue/Yellow Wash - Bottom Left */}
          <div className="absolute bottom-[-5%] left-[10%] w-[70vw] h-[70vw] bg-[#d8fcff] rounded-full blur-[150px] opacity-30" />
        </div>
        
        {/* Decor Layer */}
        <BotanicalDecor />

        {/* Main Content: Ensure it is transparent so texture shows through */}
        <main className="relative z-10 bg-transparent">
          {children}
        </main>
      </body>
    </html>
  );
}