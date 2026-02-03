import { ShieldCheck, Zap, Heart } from 'lucide-react';

// components/Services.tsx
const services = [
  { title: "Individual Therapy", bg: "hover:bg-[#FDFCF0]" },
  { title: "Couples Counseling", bg: "hover:bg-[#FFF0F5]" },
  { title: "Mindfulness Coaching", bg: "hover:bg-[#F0F9F4]" }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-[#1A1C18] mb-12 text-center">How we can work together</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className={`p-10 rounded-[2.5rem] bg-white/30 backdrop-blur-md border border-white/50 transition-all duration-500 ${s.bg}`}>
              <h3 className="text-xl font-serif text-[#1A1C18] mb-4">{s.title}</h3>
              <p className="text-gray-700 font-light">Supporting your journey with evidence-based care and deep empathy.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}