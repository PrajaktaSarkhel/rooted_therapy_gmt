// components/Contact.tsx
export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 max-w-6xl mx-auto">
      <div className="bg-heading rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10">
        <div className="p-12 md:w-1/2 text-white flex flex-col justify-center bg-gradient-to-br from-heading to-primary">
          <span className="text-secondary font-bold text-[#1A1C18] uppercase tracking-[0.2em] text-xs mb-4">Inquiry</span>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1C18] mb-6 leading-tight">Start your healing <span className="italic">chapter.</span></h2>
          <p className="text-accent/70 mb-8 text-lg text-[#1A1C18]">Ready to see if we're a good fit? Schedule a complimentary 15-minute consultation.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-sm text-[#1A1C18] font-medium">
                <div className="w-10 h-10 rounded-full bg-[#E8F3D6] flex-shrink-0 flex items-center justify-center text-[#1A1C18]">
                    ✓
                </div>
                <span className="leading-relaxed">
                    Telehealth or In-person assistance in Seattle
                </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-[#1A1C18] font-medium">
                <div className="w-10 h-10 rounded-full bg-[#E8F3D6] flex-shrink-0 flex items-center justify-center text-[#1A1C18]">
                    ✓
                </div>
                <span className="leading-relaxed">
                    Insurance & Private Pay options
                </span>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-12 md:w-1/2">
          <form className="space-y-5">
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-[#1A1C18] mb-2 block">Full Name</label>
              <input type="text" className="w-full p-4 bg-accent/10 border border-accent/20 rounded-xl outline-none focus:border-primary/50 transition text-gray-400" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-[#1A1C18] mb-2 block">Email Address</label>
              <input type="email" className="w-full p-4 bg-accent/10 border border-accent/20 rounded-xl outline-none focus:border-primary/50 transition text-gray-400" placeholder="jane@example.com" />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest font-bold text-[#1A1C18] mb-2 block">Message</label>
              <textarea rows={4} className="w-full p-4 bg-accent/10 border border-accent/20 rounded-xl outline-none focus:border-primary/50 transition text-gray-400" placeholder="How can I help you?"></textarea>
            </div>
            <button className="w-full py-5 bg-primary text-[#1A1C18] rounded-full font-bold uppercase tracking-widest text-xs hover:bg-heading hover:scale-[1.02] transition-all shadow-xl">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}