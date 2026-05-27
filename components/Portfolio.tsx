import React from 'react';
import { PORTFOLIO_PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm">
            Nosso Trabalho
          </span>
          <h2 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl tracking-tight">
            Projetos em Destaque
          </h2>
          <p className="mt-5 text-xl text-slate-500 leading-relaxed">
            Conheça alguns dos projetos que entregamos recentemente. 
            Design premium focado em resultados reais para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className="group relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <a 
                    href={project.link}
                    className="bg-white text-slate-900 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 hover:bg-brand-50"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-brand-600 text-xs font-bold uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
