
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Target, Users, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      title: "Expertise & Qualidade",
      icon: <Sparkles className="w-8 h-8 text-brand-600" />,
      text: "Entregamos sites modernos, rápidos e personalizados, com foco absoluto em performance, identidade visual e conversão. Nossa equipe desenvolve cada projeto com estratégia e alto padrão de qualidade para impulsionar o seu negócio no ambiente digital."
    },
    {
      title: "Compromisso com Resultado",
      icon: <Target className="w-8 h-8 text-brand-600" />,
      text: "Focamos no que realmente importa: entregar sites que gerem vendas. Nada de páginas bonitas que não convertem — cada estrutura e cada detalhe é pensado para aumentar sua autoridade e fechar mais negócios."
    },
    {
      title: "Atendimento Personalizado",
      icon: <Users className="w-8 h-8 text-brand-600" />,
      text: "Nada de atendimento robótico. Aqui você fala direto com quem desenvolve seu site, com suporte rápido, comunicação simples e transparente."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-50/50 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Quem <span className="text-blue-gradient">Somos</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Main Carousel Viewport */}
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-700 ease-in-out items-start"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cards.map((card, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="glass-panel p-8 md:p-12 rounded-3xl border border-slate-100 hover:border-brand-600/20 hover:shadow-xl hover:shadow-brand-600/5 transition-all duration-500 group flex flex-col items-center text-center bg-slate-50/80">
                    <div className="mb-6 p-4 rounded-2xl bg-brand-50 border border-brand-100 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500">
                      {/* Fix: casting to React.ReactElement<any> to allow className prop injection via cloneElement */}
                      {React.cloneElement(card.icon as React.ReactElement<any>, { className: 'w-8 h-8 transition-colors group-hover:text-white' })}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors duration-300">
                      {card.title}
                    </h3>
                    
                    <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto font-medium">
                      "{card.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 p-3 rounded-full text-slate-400 hover:text-brand-600 hover:bg-brand-50 transition-all z-10 shadow-sm"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 p-3 rounded-full text-slate-400 hover:text-brand-600 hover:bg-brand-50 transition-all z-10 shadow-sm"
            aria-label="Próximo"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-3">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index 
                  ? 'w-10 h-2.5 bg-brand-600' 
                  : 'w-2.5 h-2.5 bg-slate-200 hover:bg-brand-200'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
