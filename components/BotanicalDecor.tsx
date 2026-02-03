"use client";

export const BotanicalDecor = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      
      {/* Top Left: Abstract Zen Ripple */}
      <svg 
        viewBox="0 0 400 400" 
        className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] text-[#3A5A40]/10"
      >
        <path 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5" 
          d="M0,100 Q100,50 200,100 T400,100 M0,120 Q100,70 200,120 T400,120 M0,140 Q100,90 200,140 T400,140" 
        />
      </svg>

      {/* Mid Right: The "Organic Pebble" (Sap Green) */}
      <div className="absolute top-[30%] right-[-2%] w-64 h-80 bg-[#3A5A40]/5 rounded-[40%_60%_70%_30%/50%_40%_60%_50%] blur-2xl rotate-12" />

      {/* Center Left: Modern Single Stroke Stem */}
      <svg 
        viewBox="0 0 100 200" 
        className="absolute top-[45%] left-[2%] w-32 h-64 text-[#3A5A40]/20"
      >
        <path 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1" 
          strokeLinecap="round"
          d="M20,180 C20,100 80,100 80,20" 
        />
        <circle cx="80" cy="20" r="1.5" fill="currentColor" />
      </svg>

      {/* Bottom Right: Flowing Abstract Line */}
      <svg 
        viewBox="0 0 400 200" 
        className="absolute bottom-[10%] right-[-5%] w-[600px] opacity-10 text-[#3A5A40]"
      >
        <path 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="0.5" 
          d="M400,50 C300,50 250,150 150,150 C50,150 0,50 0,50" 
        />
      </svg>

    </div>
  );
};