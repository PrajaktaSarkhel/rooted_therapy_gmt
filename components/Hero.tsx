import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 px-8 md:px-20 flex items-center relative overflow-hidden">
      {/* Main Grid Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        
        {/* LEFT SIDE: Shifting the image towards the right (center of page) */}
        <div className="flex justify-center md:justify-self-end">
          <div className="relative w-full min-w-[300px] max-w-[340px] lg:max-w-[380px] aspect-[4/5] rounded-t-full overflow-hidden shadow-2xl border border-white/30">
            <Image 
              src="/images/maya-portrait.jpg" 
              alt="Dr. Maya Reynolds" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT SIDE: Text block stays naturally left-aligned to the grid line */}
        <div className="flex flex-col items-start md:pl-4">
          <span className="text-[#1A1C18] font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">
            Psychology & Wellness
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-serif text-[#1A1C18] leading-[1.2] mb-6">
            Cultivating <br />
            <span className="italic font-light">clarity</span> in the chaos.
          </h1>
          
          <p className="text-sm md:text-base text-[#1A1C18] leading-relaxed mb-10 font-light max-w-sm opacity-90">
            Dr. Maya Reynolds provides evidence-based therapy for adults in Seattle, 
            helping you navigate life's complexities with resilience and grace.
          </p>

          <button className="px-10 py-4 bg-[#1A1C18] text-white hover:bg-[#3A3D39] transition-all duration-300 rounded-full uppercase tracking-widest text-[10px] font-bold shadow-xl active:scale-95">
            Begin Your Journey
          </button>
        </div>

      </div> 
    </section>
  );
}