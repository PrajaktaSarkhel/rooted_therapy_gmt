import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 px-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-20 items-center">
      <div className="w-full md:w-1/2 relative group">
        {/* Rectangular Image with sophisticated border-radius */}
        <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <Image 
            src="/images/maya-working.jpg" 
            alt="Dr. Maya Reynolds in session" 
            fill
            className="object-cover"
          />
        </div>
        {/* Decorative background element */}
        <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-secondary/20 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
      </div>
      <div className="w-full md:w-1/2">
        <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs text-[#1A1C18] mb-4 block">The Heart of the Practice</span>
        <h2 className="text-5xl font-serif text-[#1A1C18] text-heading mb-8 leading-tight">Expertise rooted in <span className="italic">compassion.</span></h2>
        <p className="text-lg text-gray-600 mb-8 font-light italic leading-relaxed">
          "My mission is to provide a sanctuary where high-achieving individuals can unmask and find their true center."
        </p>
        <p className="text-gray-700 leading-relaxed mb-8">
          Dr. Maya Reynolds is a licensed psychologist specializing in cognitive behavioral therapy and mindfulness-based stress reduction. Her Seattle practice focuses on the unique pressures of the modern professional landscape.
        </p>
      </div>
    </section>
  );
}