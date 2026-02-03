// components/BotanicalDecor.tsx

// MUST HAVE "export default"
export default function BotanicalDecor() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top Left Leaf */}
      <svg className="absolute top-[-2%] left-[-5%] w-72 h-72 text-[#1A1C18]/10 rotate-12" viewBox="0 0 200 200">
        <path fill="none" stroke="currentColor" strokeWidth="0.8" d="M30,170 Q10,130 50,90 Q90,50 160,30 M80,110 Q120,80 150,30" />
      </svg>

      {/* Mid Right Leaf */}
      <svg className="absolute top-[35%] right-[-10%] w-[500px] h-[500px] text-[#1A1C18]/5 -rotate-[40deg]" viewBox="0 0 200 200">
        <path fill="none" stroke="currentColor" strokeWidth="0.5" d="M20,180 Q60,160 100,100 Q140,40 180,20" />
      </svg>
    </div>
  );
}