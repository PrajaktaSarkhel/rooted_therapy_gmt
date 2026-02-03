import Image from 'next/image';
import { MapPin, Coffee, Shield } from 'lucide-react';

export default function Office() {
  return (
    <section id="office" className="bg-accent/20 py-24 px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-4xl font-serif text-[#1A1C18] text-heading">Our Office: A Sanctuary in Seattle</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Healing requires a space where you feel completely safe. Our office is designed with neutral tones, organic textures, and soft lighting to ground your nervous system the moment you walk in.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="text-primary text-[#1A1C18] mt-1" />
              <div>
                <p className="font-bold text-[#1A1C18]">Downtown Seattle Location</p>
                <p className="text-gray-500">Conveniently located with validated parking for clients.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Shield className="text-primary text-[#1A1C18] mt-1" />
              <div>
                <p className="font-bold text-[#1A1C18]">Privacy Guaranteed</p>
                <p className="text-gray-500">Enhanced soundproofing and private exit for maximum discretion.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg transform translate-y-8">
            <Image src="/images/office-1.jpg" alt="Interior space" fill className="object-cover" />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
            <Image src="/images/office-2.jpg" alt="Seating area" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}