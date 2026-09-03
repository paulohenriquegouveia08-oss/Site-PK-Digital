
import React from 'react';
import { BENEFITS } from '../constants';

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            O que nos <span className="text-brand-600 italic">diferencia</span>
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl text-lg font-medium">
            Não entregamos apenas código. Nossa equipe entrega uma ferramenta de vendas poderosa para escalar o seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, index) => (
            <div 
              key={index}
              className="bg-slate-50 border border-slate-100 p-8 rounded-2xl hover:bg-brand-600 group transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-brand-600/20"
            >
              <div className="w-14 h-14 bg-brand-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-600/20 group-hover:bg-slate-50 group-hover:scale-110 transition-all duration-500">
                {/* Fix: casting to React.ReactElement<any> to allow className prop injection via cloneElement */}
                {React.cloneElement(benefit.icon as React.ReactElement<any>, { className: 'w-7 h-7 text-white group-hover:text-brand-600 transition-colors' })}
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-white mb-3 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-slate-500 group-hover:text-white/90 text-sm font-medium transition-colors leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
