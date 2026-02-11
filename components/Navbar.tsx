import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed left-0 right-0 z-50 transition-all duration-700 ease-in-out flex justify-center pointer-events-none px-4 md:px-8
      ${scrolled ? 'top-6' : 'top-4 md:top-6'}`}
    >
      <div 
        className={`transition-all duration-700 overflow-hidden pointer-events-auto
        ${scrolled 
          ? 'glass-pill max-w-xl rounded-full py-2.5 px-6 shadow-2xl' 
          : 'glass-nav max-w-7xl w-full py-4 px-6 md:px-10 rounded-[24px] md:rounded-[32px] shadow-lg'}`}
      >
        <div className={`flex items-center transition-all duration-700 ${scrolled ? 'justify-center' : 'justify-between'}`}>
          
          {/* Brand Name - Hidden completely when scrolled */}
          <div 
            className={`flex items-center transition-all duration-500 cursor-pointer overflow-hidden
            ${scrolled ? 'max-w-0 opacity-0 pointer-events-none -translate-x-10' : 'max-w-xs opacity-100'}`} 
            onClick={() => scrollTo('hero')}
          >
            <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter whitespace-nowrap">
              PK <span className="text-brand-600">DIGITAL</span>
            </span>
          </div>

          {/* Nav Items */}
          <nav className={`flex items-center transition-all duration-700 ${scrolled ? 'gap-3 md:gap-6' : 'space-x-8'}`}>
            <div className={`hidden md:flex gap-6 ${scrolled ? 'items-center' : ''}`}>
              <button onClick={() => scrollTo('services')} className="text-slate-600 hover:text-brand-600 transition-colors text-[10px] md:text-xs font-black uppercase tracking-widest">Serviços</button>
              <button onClick={() => scrollTo('about')} className="text-slate-600 hover:text-brand-600 transition-colors text-[10px] md:text-xs font-black uppercase tracking-widest">Sobre</button>
              <button onClick={() => scrollTo('faq')} className="text-slate-600 hover:text-brand-600 transition-colors text-[10px] md:text-xs font-black uppercase tracking-widest">FAQ</button>
            </div>
            
            <a 
              href="https://wa.me/5543991621344?text=Quero%20solicitar%20meu%20site" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`bg-brand-600 hover:bg-brand-700 text-white font-black transition-all transform hover:scale-105 shadow-lg shadow-brand-600/20 whitespace-nowrap uppercase tracking-wider
              ${scrolled ? 'py-2 px-5 text-[9px] rounded-full' : 'py-3 px-8 text-[11px] rounded-full'}`}
            >
              Solicitar Meu Site
            </a>

            {/* Mobile Menu Button - Only visible when NOT scrolled */}
            {!scrolled && (
              <div className="md:hidden flex items-center">
                <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 hover:text-brand-600 p-2">
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && !scrolled && (
        <div className="md:hidden glass-panel border border-slate-100 absolute top-[calc(100%+12px)] left-4 right-4 rounded-3xl animate-in fade-in zoom-in duration-300 pointer-events-auto overflow-hidden">
          <div className="px-4 py-8 space-y-2 flex flex-col items-center bg-white/95 backdrop-blur-xl">
            <button onClick={() => scrollTo('services')} className="block w-full py-4 text-center text-xs font-black text-slate-700 hover:text-brand-600 border-b border-slate-50 uppercase tracking-widest">Serviços</button>
            <button onClick={() => scrollTo('about')} className="block w-full py-4 text-center text-xs font-black text-slate-700 hover:text-brand-600 border-b border-slate-50 uppercase tracking-widest">Sobre</button>
            <button onClick={() => scrollTo('faq')} className="block w-full py-4 text-center text-xs font-black text-slate-700 hover:text-brand-600 border-b border-slate-50 uppercase tracking-widest">FAQ</button>
            <a 
              href="https://wa.me/5543991621344?text=Quero%20solicitar%20meu%20site"
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-6 block w-full text-center bg-brand-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-brand-600/30 uppercase tracking-widest text-[10px]"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;