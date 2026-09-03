import React from 'react';
import { Botao, Seta } from './ui/Botao';
import { Etiqueta } from './ui/Etiqueta';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-20 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-50 via-slate-50 to-slate-50 -z-20"></div>
      <div
        aria-hidden
        className="respiro absolute top-20 right-0 w-[560px] h-[560px] rounded-full bg-brand-600/10 blur-[140px] -z-10"
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 z-10 text-center lg:text-left">
          {/* A pilula com bolinha pulsando saiu: e' o mesmo selo que
              aparece em todo template de agencia. Ficou o rotulo com
              fio, que repete o tratamento do "— TECNOLOGY —" da logo. */}
          <div className="entrada" style={{ animationDelay: '80ms' }}>
            <Etiqueta>Agência de desenvolvimento web</Etiqueta>
          </div>
          
          <h1
            className="entrada text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.02] tracking-tight"
            style={{ animationDelay: '160ms' }}
          >
            Elevamos seu Negócio com <span className="text-blue-gradient">Sites de Elite</span>
          </h1>
          
          <p
            className="entrada text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            style={{ animationDelay: '260ms' }}
          >
            Não basta estar na internet. Sua empresa precisa se destacar. Nossa equipe cria experiências digitais imersivas, rápidas e focadas em converter visitantes em clientes fiéis.
          </p>

          <div
            className="entrada flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            style={{ animationDelay: '360ms' }}
          >
            <Botao
              href="https://wa.me/5543991621344?text=Quero solicitar meu site!"
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com consultor
              <Seta />
            </Botao>

            <Botao
              variante="contorno"
              como="button"
              onClick={() =>
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Ver serviços
            </Botao>
          </div>

          <div
            className="entrada flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 pt-6 text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
            style={{ animationDelay: '460ms' }}
          >
            {['+150 projetos entregues', 'Equipe especializada'].map((prova) => (
              <span key={prova} className="flex items-center gap-3">
                <span aria-hidden className="h-px w-5 bg-brand-600" />
                {prova}
              </span>
            ))}
          </div>
        </div>

        {/* CSS Animated Illustration */}
        <div className="relative h-[400px] md:h-[500px] w-full flex justify-center items-center lg:justify-end animate-float">
          <div className="relative w-full max-w-md aspect-video">
            
            {/* Laptop Base */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-slate-200 rounded-b-xl shadow-lg z-20"></div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-[200px] md:h-[260px] bg-slate-50 rounded-t-xl border-4 border-slate-100 p-1 shadow-2xl z-10">
               {/* Screen Content */}
               <div className="w-full h-full bg-slate-50 rounded overflow-hidden relative group border border-slate-100">
                  {/* Mock UI Header */}
                  <div className="h-6 bg-slate-100 flex items-center px-2 gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  {/* Mock UI Body */}
                  <div className="p-4 space-y-3">
                    <div className="w-3/4 h-8 bg-slate-200/50 rounded animate-pulse"></div>
                    <div className="flex gap-2">
                       <div className="w-1/2 h-24 bg-brand-50 rounded border border-brand-100"></div>
                       <div className="w-1/2 h-24 bg-slate-200/30 rounded"></div>
                    </div>
                    <div className="w-full h-4 bg-slate-200/30 rounded mt-4"></div>
                    <div className="w-5/6 h-4 bg-slate-200/30 rounded"></div>
                    <div className="w-1/3 h-8 bg-brand-600/10 rounded mt-4 border border-brand-600/30"></div>
                  </div>
                  
                  {/* Glass Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-50/20 to-transparent pointer-events-none"></div>
               </div>
            </div>

            {/* Phone Element */}
            <div className="absolute bottom-0 -right-4 md:right-0 w-[80px] md:w-[100px] h-[160px] md:h-[200px] bg-black border-4 border-slate-200 rounded-2xl shadow-2xl z-30 transform rotate-[-5deg] translate-y-4">
              <div className="w-full h-full bg-slate-50 rounded-xl overflow-hidden relative">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-4 bg-slate-100 rounded-b-lg z-10"></div>
                {/* Phone Content */}
                <div className="p-2 pt-6 space-y-2">
                   <div className="w-full h-20 bg-brand-600 rounded-lg opacity-90 shadow-lg shadow-brand-600/30"></div>
                   <div className="w-full h-2 bg-slate-100 rounded"></div>
                   <div className="w-2/3 h-2 bg-slate-100 rounded"></div>
                   <div className="grid grid-cols-2 gap-1 mt-2">
                      <div className="aspect-square bg-slate-50 border border-slate-100 rounded"></div>
                      <div className="aspect-square bg-slate-50 border border-slate-100 rounded"></div>
                   </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 glass-panel rounded-xl flex items-center justify-center animate-bounce duration-[3000ms] shadow-xl">
               <div className="text-4xl">🚀</div>
            </div>
            <div className="absolute bottom-20 -left-10 w-16 h-16 glass-panel rounded-full flex items-center justify-center animate-pulse-slow shadow-xl">
               <div className="text-brand-600 font-bold text-xl">%</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;