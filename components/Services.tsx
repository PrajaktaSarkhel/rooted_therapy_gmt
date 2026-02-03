import React from 'react';

const services = [
  {
    title: "Individual Therapy",
    description: "A private, safe space to explore personal challenges and growth at your own pace.",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    )
  },
  {
    title: "Couples Counseling",
    description: "Facilitating deeper connection and communication through evidence-based tools.",
    image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.656-5.64 9.094 9.094 0 00-1.902-.435m-1.968 0a9.094 9.094 0 00-1.902.435 3 3 0 00-4.656 5.64 9.094 9.094 0 003.741.479m1.968 0v3.307m0-3.307a6.75 6.75 0 100-13.5 6.75 6.75 0 000 13.5z" />
      </svg>
    )
  },
  {
    title: "Workshops",
    description: "Group sessions focused on mindfulness, stress management, and resilience.",
    image: "https://images.unsplash.com/photo-1499728603263-13726abce5fd?auto=format&fit=crop&q=80&w=800",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-[#1A1C18] h-[450px] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* --- BACKGROUND IMAGE: Visible by default --- */}
              <div 
                className="absolute inset-0 opacity-80 group-hover:opacity-60 transition-all duration-700 ease-in-out bg-cover bg-center grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 blur-0 group-hover:blur-[4px]"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* --- GRADIENT OVERLAY: Ensures text is always readable --- */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

              {/* --- CONTENT LAYER --- */}
              <div className="relative h-full p-10 flex flex-col justify-end z-20">
                
                {/* 1. Icon & Title: Always visible */}
                <div className="transition-transform duration-500 group-hover:-translate-y-2">
                   <div className="w-10 h-10 bg-white/10 backdrop-blur-md text-white rounded-full flex items-center justify-center mb-4 border border-white/20">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-2xl text-white mb-2">
                    {service.title}
                  </h3>
                </div>
                
                {/* 2. Sliding Container: Hidden by default, rises on hover */}
                <div className="max-h-0 opacity-0 group-hover:max-h-[150px] group-hover:opacity-100 transition-all duration-700 ease-in-out">
                  <p className="text-stone-300 text-sm leading-relaxed mb-6 pt-2">
                    {service.description}
                  </p>
                  
                  <div className="pt-4 border-t border-white/20">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                      Learn More →
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}