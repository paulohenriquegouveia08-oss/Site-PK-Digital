import React from 'react';
import { PRICING } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Investimento</h2>
          <p className="text-slate-500 font-medium text-lg">Escolha o plano ideal para o seu momento comercial.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING.map((plan, index) => (
            <div 
              key={index} 
              className={`
                relative p-10 rounded-3xl border transition-all duration-500 flex flex-col h-full bg-slate-50
                ${plan.recommended 
                  ? 'border-brand-600 shadow-2xl shadow-brand-600/10 scale-105 z-10' 
                  : 'border-slate-100 hover:border-brand-200 hover:shadow-lg'
                }
              `}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  Recomendado
                </div>
              )}

              <div className="mb-8">
                <h3 className={`text-xl font-extrabold ${plan.recommended ? 'text-brand-600' : 'text-slate-700'}`}>
                  {plan.name}
                </h3>
                <div className="mt-3 text-4xl font-extrabold text-slate-900">
                  {plan.price}
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 shrink-0 ${plan.recommended ? 'text-brand-600' : 'text-slate-400'}`} />
                    <span className="text-slate-600 text-sm font-semibold">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://wa.me/5543991621344?text=Olá,%20tenho%20interesse%20no%20pacote%20${plan.name}"
                className={`
                  w-full block text-center py-4 rounded-2xl font-bold transition-all
                  ${plan.recommended 
                    ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-600/25' 
                    : 'bg-slate-100 hover:bg-brand-50 hover:text-brand-600 text-slate-700'
                  }
                `}
              >
                Contratar Agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;