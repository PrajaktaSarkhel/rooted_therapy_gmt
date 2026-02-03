export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 max-w-6xl mx-auto">
      <div className="bg-[#1A1C18] rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/5">
        
        {/* --- LEFT SIDE: Dark/Sap Green Sidebar --- */}
        <div className="p-12 md:w-1/2 text-white flex flex-col justify-center bg-gradient-to-br from-[#1A1C18] to-[#2D3A2D]">
          <span className="text-[#A3B18A] font-bold uppercase tracking-[0.2em] text-xs mb-4">
            Inquiry
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            Start your healing <span className="italic opacity-80">chapter.</span>
          </h2>
          <p className="text-stone-400 mb-8 text-lg">
            Ready to see if we're a good fit? Schedule a complimentary 15-minute consultation.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-sm text-stone-200 font-medium">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center text-[#A3B18A]">
                ✓
              </div>
              <span className="leading-relaxed">
                Telehealth or In-person assistance in Seattle
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-stone-200 font-medium">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center text-[#A3B18A]">
                ✓
              </div>
              <span className="leading-relaxed">
                Insurance & Private Pay options
              </span>
            </div>
          </div>
        </div>
        
        {/* --- RIGHT SIDE: Clean White Form --- */}
        <div className="bg-white p-12 md:w-1/2">
          <form className="space-y-5">
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-[#1A1C18] mb-2 block">
                Full Name
              </label>
              <input 
                type="text" 
                className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#3A5A40]/50 transition text-[#1A1C18] placeholder:text-stone-400" 
                placeholder="Jane Doe" 
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-[#1A1C18] mb-2 block">
                Email Address
              </label>
              <input 
                type="email" 
                className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#3A5A40]/50 transition text-[#1A1C18] placeholder:text-stone-400" 
                placeholder="jane@example.com" 
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-[#1A1C18] mb-2 block">
                Message
              </label>
              <textarea 
                rows={4} 
                className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#3A5A40]/50 transition text-[#1A1C18] placeholder:text-stone-400 resize-none" 
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button className="w-full py-5 bg-[#1A1C18] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#3A5A40] hover:scale-[1.01] transition-all shadow-xl active:scale-95">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}