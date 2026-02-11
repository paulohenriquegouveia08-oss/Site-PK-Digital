import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-slate-900 mb-12">Perguntas Frequentes</h2>
        
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-2xl overflow-hidden transition-all duration-300 border ${openIndex === index ? 'border-brand-600/30 bg-brand-50/30 shadow-sm' : 'border-slate-100 bg-white'}`}
            >
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`text-lg font-bold transition-colors duration-300 ${openIndex === index ? 'text-brand-600' : 'text-slate-700 group-hover:text-brand-600'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-brand-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-brand-600 transition-colors" />
                )}
              </button>
              
              <div 
                className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 pb-6 opacity-100 translate-y-0' 
                    : 'max-h-0 opacity-0 translate-y-4'
                }`}
              >
                <p className="text-slate-600 text-base font-medium leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;