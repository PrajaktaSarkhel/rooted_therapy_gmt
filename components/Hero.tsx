import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 px-8 md:px-20 flex items-center relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        
        {/* LEFT SIDE: Clean Portrait with Integrated Label */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-t-full overflow-hidden shadow-xl border border-white/20">
            <Image 
              src="/images/maya-portrait.jpg" 
              alt="Dr. Maya Reynolds" 
              fill 
              className="object-cover" 
              priority
            />
            
            {/* Integrated Credential - Minimalist & Non-cluttered */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A1C18]/80 to-transparent p-8 pt-12">
              <p className="text-white font-serif text-xl">
                Dr. Maya Reynolds, <span className="italic text-sm">PsyD</span>
              </p>
              <p className="text-white/70 text-[9px] uppercase tracking-[0.2em] mt-1 font-medium">
                Licensed Clinical Psychologist
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Balanced Text block */}
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#3A5A40]/40" />
            <span className="text-[#3A5A40] font-bold uppercase tracking-[0.2em] text-[10px]">
              Psychology & Wellness
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-serif text-[#1A1C18] leading-[1.1] mb-8">
            Cultivating <br />
            <span className="italic font-light text-stone-500">clarity</span> in the chaos.
          </h1>
          
          <p className="text-base text-[#1A1C18]/80 leading-relaxed mb-10 font-light">
            Providing evidence-based therapy for adults in Seattle, 
            helping you navigate life's complexities with resilience and grace.
          </p>

          <div className="flex items-center gap-8">
            <button className="px-10 py-4 bg-[#1A1C18] text-white rounded-full uppercase tracking-widest text-[10px] font-bold shadow-lg transition-all hover:bg-[#3A5A40] hover:-translate-y-1">
              Begin Your Journey
            </button>
            <span className="hidden sm:block text-[9px] uppercase tracking-widest text-stone-400 font-semibold border-l border-stone-300 pl-6">
              Seattle, WA & Virtual
            </span>
          </div>
        </div>

      </div> 
    </section>
  );
}