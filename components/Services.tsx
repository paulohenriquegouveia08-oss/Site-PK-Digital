
import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-600 tracking-wider uppercase mb-2">Nossa Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Soluções Digitais Sob Medida</h3>
          <div className="w-20 h-1.5 bg-brand-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="group glass-panel p-8 rounded-3xl hover:border-brand-600/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col h-full bg-white border border-slate-100"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-brand-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
                  <span className="transition-colors duration-300 group-hover:text-white">
                    {/* Fix: casting to React.ReactElement<any> to allow className prop injection via cloneElement */}
                    {React.cloneElement(service.icon as React.ReactElement<any>, { className: 'w-8 h-8 transition-colors' })}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {service.title}
                </h4>
                
                <p className="text-slate-500 mb-6 text-sm leading-relaxed font-medium">
                  {service.description}
                </p>

                {/* Benefits List */}
                {service.benefits && (
                  <div className="mb-8 pt-4 border-t border-slate-100 flex-grow">
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-600 font-medium">
                          <Check className="w-4 h-4 text-brand-600 mr-2 mt-0.5 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto">
                  <a 
                    href={`https://wa.me/5543991621344?text=Olá, tenho interesse em um ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full py-3.5 rounded-xl border border-slate-200 hover:border-brand-600 hover:bg-brand-600 hover:text-white text-sm font-bold text-slate-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-600/20"
                  >
                    Falar no WhatsApp
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
