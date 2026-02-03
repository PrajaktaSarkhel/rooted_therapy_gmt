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
          <Link 
            href="#contact" 
            className="px-8 py-3 bg-[#1A1C18] text-white rounded-full shadow-lg hover:bg-[#3A3D39] transition-all duration-300 active:scale-95"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </nav>
  );
}