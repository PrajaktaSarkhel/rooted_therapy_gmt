import Link from 'next/link';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A1C18] text-white py-16 px-8 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-accent/20 pb-16">
        
        {/* Column 1: Brand & Bio */}
        <div className="space-y-6">
          <div className="text-2xl font-serif font-bold text-white tracking-tight">
            Rooted<span className="text-secondary font-light">.</span>
          </div>
          <p className="text-sm leading-relaxed text-accent/60">
            A boutique mental health practice by Grow My Therapy. Dedicated to helping Seattle's professionals find balance through evidence-based care.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition"><Instagram size={20} /></Link>
            <Link href="#" className="hover:text-white transition"><Linkedin size={20} /></Link>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Practice</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="#about" className="hover:text-secondary transition">About Maya</Link></li>
            <li><Link href="#services" className="hover:text-secondary transition">Specialties</Link></li>
            <li><Link href="#office" className="hover:text-secondary transition">The Office</Link></li>
            <li><Link href="#" className="hover:text-secondary transition">FAQs</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Get in Touch</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3"><Mail size={16} /> hello@rootedtherapy.com</li>
            <li className="flex items-center gap-3"><Phone size={16} /> (206) 555-0123</li>
            <li className="flex items-center gap-3 text-accent/60 italic">Available Mon–Fri, 9am–5pm</li>
          </ul>
        </div>

        {/* Column 4: Local SEO/Location */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Location</h4>
          <div className="flex items-start gap-3 text-sm">
            <MapPin size={16} className="mt-1" />
            <p>
              1200 4th Ave,<br />
              Seattle, WA 98101<br />
              <span className="text-secondary mt-2 block">View on Map →</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-accent/40">
        <p>© 2026 Rooted by Grow My Therapy. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}