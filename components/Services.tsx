import React from 'react';
import { SERVICES } from '../constants';
import { Etiqueta } from './ui/Etiqueta';
import { Seta } from './ui/Botao';
import { classesRevelar, useRevelar } from '../hooks/useRevelar';

/**
 * O que a LSPK faz.
 *
 * Saiu o quadrado com icone de biblioteca no topo de cada cartao —
 * simbolo generico que se repetia em todos e nao ajudava a distinguir
 * um servico do outro. Entrou o numero do item e o titulo com peso,
 * que e' o que a pessoa de fato le para escolher.
 *
 * O tique da lista de itens tambem saiu. No lugar entra um tracinho
 * curto, do mesmo peso das linhas da logo: uma lista nao precisa
 * afirmar seis vezes que cada linha esta correta.
 */
const Services: React.FC = () => {
  const { alvo, visivel } = useRevelar<HTMLDivElement>();
  const cabecalho = classesRevelar(visivel);

  return (
    <section id="services" className="relative py-28">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={alvo} style={cabecalho.style} className={`${cabecalho.className} mb-20 text-center`}>
          <Etiqueta centralizada>Nossa expertise</Etiqueta>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Soluções sob medida
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Cartao key={i} indice={i} servico={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Cartao: React.FC<{ indice: number; servico: (typeof SERVICES)[number] }> = ({
  indice,
  servico,
}) => {
  const { alvo, visivel } = useRevelar<HTMLDivElement>();
  const revelar = classesRevelar(visivel, indice * 70);

  return (
    <article
      ref={alvo}
      style={revelar.style}
      className={`${revelar.className} group relative flex flex-col border-t border-slate-100 p-8 lg:p-10 md:[&:nth-child(2n)]:border-l lg:[&:nth-child(2n)]:border-l-0 lg:[&:nth-child(3n+2)]:border-l lg:[&:nth-child(3n)]:border-l md:border-slate-100`}
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-brand-600 transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      <span className="font-mono text-sm font-bold tracking-[0.2em] text-slate-300 transition-colors duration-300 group-hover:text-brand-600">
        {String(indice + 1).padStart(2, '0')}
      </span>

      <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-slate-900">
        {servico.title}
      </h3>

      <p className="mt-3 text-[15px] leading-relaxed text-slate-600 font-medium">
        {servico.description}
      </p>

      {servico.benefits && (
        <ul className="mt-7 space-y-2.5">
          {servico.benefits.map((item, idx) => (
            <li key={idx} className="flex gap-3 text-sm font-medium text-slate-700">
              {/* Tracinho no lugar do tique: marca o item sem afirmar
                  seis vezes que cada linha esta correta. */}
              <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-brand-600" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <a
        href={`https://wa.me/5543991621344?text=Olá, tenho interesse em um ${servico.title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group/botao mt-8 inline-flex items-center gap-3 self-start pt-6 text-sm font-bold uppercase tracking-[0.12em] text-slate-800 transition-colors hover:text-brand-600"
      >
        Falar no WhatsApp
        <Seta />
      </a>
    </article>
  );
};

export default Services;
