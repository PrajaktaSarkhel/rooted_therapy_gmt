"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the effect after scrolling 20 pixels
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 px-8 md:px-20 py-6 ${
        isScrolled 
          ? "bg-white/40 backdrop-blur-md border-b border-white/20 shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-serif font-bold text-[#1A1C18] tracking-tight">
          Rooted<span className="text-[#A3B18A]">.</span>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-[#1A1C18]">
          <Link href="#about" className="hover:opacity-60 transition">About</Link>
          <Link href="#services" className="hover:opacity-60 transition">Services</Link>
          <Link href="#office" className="hover:opacity-60 transition">Office</Link>
          <Link href="#contact" className="hover:opacity-60 transition">Contact</Link>
          
          {/* Consistent Dark Button */}
          <Link href="#contact" scroll={true}>
            <button 
                className="relative px-8 py-3 bg-[#102013] text-[#FFFEFA] rounded-full font-medium transition-transform duration-300 hover:scale-105 active:scale-95"
                style={{
                animation: 'forcePulse 2.5s infinite ease-in-out'
                }}
            >
                Book a Session
                
                {/* This injects the animation rules directly into the page */}
                <style dangerouslySetInnerHTML={{ __html: `
                @keyframes forcePulse {
                    0% { box-shadow: 0 0 0 0 rgba(58, 90, 64, 0.7); }
                    50% { box-shadow: 0 0 25px 15px rgba(58, 90, 64, 0); }
                    100% { box-shadow: 0 0 0 0 rgba(58, 90, 64, 0.7); }
                }
                `}} />
            </button>
            </Link>
        </div>
      </div>
    </nav>
  );
}