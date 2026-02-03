import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Office from '@/components/Office';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      
      {/* 1. About First */}
      <section id="about">
        <About />
      </section>

      {/* 2. Services Second */}
      <section id="services" className="relative">
        {/* Background texture for Services */}
        <div className="absolute inset-0 bg-accent/10 -skew-y-3 origin-right -z-10" />
        <Services />
      </section>

      <section id="office">
        <Office />
      </section>

      <Contact />
      <Footer />
    </main>
  );
}