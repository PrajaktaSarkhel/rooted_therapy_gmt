"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="text-2xl font-serif font-bold text-[#1A1C18] tracking-tight z-[110]">
          Rooted<span className="text-[#A3B18A]">.</span>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-bold text-[#1A1C18]">
          <Link href="#about" className="hover:opacity-60 transition">About</Link>
          <Link href="#services" className="hover:opacity-60 transition">Services</Link>
          <Link href="#office" className="hover:opacity-60 transition">Office</Link>
          <Link href="#contact" className="hover:opacity-60 transition">Contact</Link>
          
          <Link href="#contact" scroll={true}>
            <button 
                className="relative px-8 py-3 bg-[#102013] text-[#FFFEFA] rounded-full font-medium transition-transform duration-300 hover:scale-105 active:scale-95"
                style={{
                animation: 'forcePulse 2.5s infinite ease-in-out'
                }}
            >
                Book a Session
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

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-[110] flex flex-col gap-1.5 p-2"
          aria-label="Toggle Menu"
        >
          <div className={`w-6 h-0.5 bg-[#1A1C18] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-[#1A1C18] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-[#1A1C18] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Mobile Menu Overlay - Strictly matching your theme */}
        <div className={`fixed inset-0 bg-[#FBFBF9] transition-transform duration-500 ease-in-out z-[105] flex flex-col items-center justify-center gap-8 md:hidden ${isOpen ? "translate-y-0" : "-translate-y-full"}`}>
          <Link href="#about" onClick={() => setIsOpen(false)} className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#1A1C18]">About</Link>
          <Link href="#services" onClick={() => setIsOpen(false)} className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#1A1C18]">Services</Link>
          <Link href="#office" onClick={() => setIsOpen(false)} className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#1A1C18]">Office</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#1A1C18]">Contact</Link>
          
          <Link href="#contact" onClick={() => setIsOpen(false)}>
            <button 
                className="relative px-8 py-3 bg-[#102013] text-[#FFFEFA] rounded-full font-medium"
                style={{ animation: 'forcePulse 2.5s infinite ease-in-out' }}
            >
                Book a Session
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}