import React from 'react';
import { BENEFITS } from '../constants';
import { Etiqueta } from './ui/Etiqueta';
import { classesRevelar, useRevelar } from '../hooks/useRevelar';

/**
 * O que nos diferencia.
 *
 * Os quadradinhos de icone sairam. Cada item tinha um simbolo generico
 * de biblioteca dentro de um quadrado azul — o mesmo desenho que
 * aparece em qualquer template, e que nao dizia nada especifico sobre
 * o que estava escrito ao lado.
 *
 * No lugar entra o NUMERO do item, grande e vazado, no tratamento
 * tipografico da logo. Ele nao decora: numera. Quem le sabe que sao
 * seis coisas e em que ponto da lista esta.
 */
const Benefits: React.FC = () => {
  const { alvo, visivel } = useRevelar<HTMLDivElement>();

  return (
    <section className="relative py-28">
      {/* Fio no topo, no lugar de uma troca de cor de fundo. Separa a
          secao sem cortar a pagina em faixas — o preto continua
          contínuo, como no fundo da logo. */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={alvo}
          style={classesRevelar(visivel).style}
          className={`${classesRevelar(visivel).className} mb-20 max-w-2xl`}
        >
          <Etiqueta>Diferenciais</Etiqueta>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.05] tracking-tight">
            Não entregamos código.
            <br />
            <span className="text-brand-600">Entregamos venda.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 font-medium leading-relaxed">
            Cada decisão do projeto passa por uma pergunta só: isso faz o seu cliente
            comprar? O que não passa, não entra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <Item key={i} indice={i} titulo={benefit.title} texto={benefit.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Um diferencial.
 *
 * A borda e' desenhada com dois fios de 1px em vez de `border`, para
 * as celulas dividirem a mesma linha e nao formarem um traco duplo
 * onde uma encosta na outra.
 */
const Item: React.FC<{ indice: number; titulo: string; texto: string }> = ({
  indice,
  titulo,
  texto,
}) => {
  const { alvo, visivel } = useRevelar<HTMLDivElement>();
  const revelar = classesRevelar(visivel, indice * 70);

  return (
    <div
      ref={alvo}
      style={revelar.style}
      className={`${revelar.className} group relative border-t border-l-0 md:border-l border-slate-100 p-8 lg:p-10 first:border-l-0 md:[&:nth-child(2n+1)]:border-l-0 lg:[&:nth-child(2n+1)]:border-l lg:[&:nth-child(3n+1)]:border-l-0`}
    >
      {/* O fio azul que atravessa o topo no hover. Substitui o cartao
          inteiro mudando de cor: mostra qual item esta ativo sem
          repintar meia tela a cada movimento do mouse. */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-brand-600 transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      <span className="block font-mono text-sm font-bold tracking-[0.2em] text-slate-300 transition-colors duration-300 group-hover:text-brand-600">
        {String(indice + 1).padStart(2, '0')}
      </span>

      <h3 className="mt-6 text-xl font-extrabold text-slate-900 tracking-tight">{titulo}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-slate-600 font-medium">{texto}</p>
    </div>
  );
};

export default Benefits;
