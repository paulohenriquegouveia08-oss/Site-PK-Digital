import { Marca } from './ui/Marca';
import { Botao } from './ui/Botao';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
            <Marca compacta className="h-6 md:h-7" />
          </div>

          {/* Nav Items */}
          <nav className={`flex items-center transition-all duration-700 ${scrolled ? 'gap-3 md:gap-6' : 'space-x-8'}`}>
            <div className={`hidden md:flex gap-6 ${scrolled ? 'items-center' : ''}`}>
              <button onClick={() => scrollTo('services')} className="text-slate-600 hover:text-brand-600 transition-colors text-[10px] md:text-xs font-black uppercase tracking-widest">Serviços</button>
              <button onClick={() => scrollTo('portfolio')} className="text-slate-600 hover:text-brand-600 transition-colors text-[10px] md:text-xs font-black uppercase tracking-widest">Portfólio</button>
              <button onClick={() => scrollTo('about')} className="text-slate-600 hover:text-brand-600 transition-colors text-[10px] md:text-xs font-black uppercase tracking-widest">Sobre</button>
              <button onClick={() => scrollTo('faq')} className="text-slate-600 hover:text-brand-600 transition-colors text-[10px] md:text-xs font-black uppercase tracking-widest">FAQ</button>
            </div>
            
            <Botao
              href="https://wa.me/5543991621344?text=Quero%20solicitar%20meu%20site"
              target="_blank"
              rel="noopener noreferrer"
              className={`whitespace-nowrap ${
                scrolled ? '!px-5 !py-2.5 !text-[10px]' : '!px-7 !py-3 !text-[11px]'
              }`}
            >
              Solicitar meu site
            </Botao>

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
          <div className="px-4 py-8 space-y-2 flex flex-col items-center bg-slate-50/95 backdrop-blur-xl">
            <button onClick={() => scrollTo('services')} className="block w-full py-4 text-center text-xs font-black text-slate-700 hover:text-brand-600 border-b border-slate-50 uppercase tracking-widest">Serviços</button>
            <button onClick={() => scrollTo('portfolio')} className="block w-full py-4 text-center text-xs font-black text-slate-700 hover:text-brand-600 border-b border-slate-50 uppercase tracking-widest">Portfólio</button>
            <button onClick={() => scrollTo('about')} className="block w-full py-4 text-center text-xs font-black text-slate-700 hover:text-brand-600 border-b border-slate-50 uppercase tracking-widest">Sobre</button>
            <button onClick={() => scrollTo('faq')} className="block w-full py-4 text-center text-xs font-black text-slate-700 hover:text-brand-600 border-b border-slate-50 uppercase tracking-widest">FAQ</button>
            <Botao
              href="https://wa.me/5543991621344?text=Quero%20solicitar%20meu%20site"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full justify-center"
            >
              Falar no WhatsApp
            </Botao>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;