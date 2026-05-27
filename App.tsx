import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { WhatsappLogo } from './components/ui/WhatsappLogo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Benefits />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />

      {/* Sticky Whatsapp Button */}
      <a 
        href="https://wa.me/5543991621344?text=Quero%20solicitar%20meu%20site"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
        aria-label="Falar no WhatsApp"
      >
        <WhatsappLogo className="w-8 h-8 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap text-sm">
          Solicitar Site
        </span>
      </a>
    </div>
  );
};

export default App;