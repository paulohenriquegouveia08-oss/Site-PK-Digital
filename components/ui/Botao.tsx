import React from 'react';

/**
 * O botao da LSPK.
 *
 * A forma vem da logo: um canto chanfrado no mesmo angulo da diagonal
 * do "K". Substitui o `rounded-full` que o site usava — a pilula e' a
 * forma mais generica que existe hoje, esta em todo template, e nao
 * dizia nada sobre a marca.
 *
 * Por que a forma e' feita com CAMADAS, e nao com border + clip-path
 * -----------------------------------------------------------------
 * A primeira versao aplicava `clip-path` direto no elemento que tinha
 * a borda. O recorte corta a borda junto: a diagonal ficava SEM linha,
 * e o botao de contorno parecia rasgado no canto.
 *
 * Aqui a borda e' desenhada como duas camadas empilhadas e recortadas
 * com o mesmo poligono: a de baixo pintada da cor da borda, a de cima
 * encolhida 1px e pintada do fundo. O que sobra na diferenca e' a
 * borda — e ela acompanha o chanfro, porque as duas foram recortadas.
 */

const CHANFRO = 14;

const recorte = (corte: number): React.CSSProperties => ({
  clipPath: `polygon(0 0, 100% 0, 100% calc(100% - ${corte}px), calc(100% - ${corte}px) 100%, 0 100%)`,
});

type Variante = 'solido' | 'contorno';

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variante?: Variante;
  como?: 'a' | 'button';
  children: React.ReactNode;
}

export const Botao: React.FC<Props> = ({
  variante = 'solido',
  como = 'a',
  className = '',
  children,
  ...resto
}) => {
  const solido = variante === 'solido';
  const Tag = como as React.ElementType;

  return (
    <Tag
      className={`group/botao relative isolate inline-flex items-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-[0.12em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
        solido ? 'text-white' : 'text-slate-800 hover:text-white'
      } ${className}`}
      {...resto}
    >
      {/* Camada 1 — a cor de base (ou a cor da borda, no contorno). */}
      <span
        aria-hidden
        className={`absolute inset-0 -z-20 ${solido ? 'bg-brand-600' : 'bg-slate-200'}`}
        style={recorte(CHANFRO)}
      />

      {/* Camada 2 — no contorno, o "buraco" que deixa so a borda de
          1px aparecendo. O chanfro interno e' 1px menor para as duas
          diagonais ficarem paralelas. */}
      {!solido && (
        <span
          aria-hidden
          className="absolute inset-[1px] -z-10 bg-black"
          style={recorte(CHANFRO - 1)}
        />
      )}

      {/* Camada 3 — o preenchimento do hover.
          Entra pela ESQUERDA, na direcao da leitura: o botao "avanca"
          quando o cursor chega, que e' o gesto que ele esta pedindo.
          `scale-x` em vez de `width` porque transformacao roda na GPU e
          nao obriga o navegador a recalcular o layout a cada quadro. */}
      <span
        aria-hidden
        className={`absolute inset-0 -z-10 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover/botao:scale-x-100 ${
          solido ? 'bg-brand-700' : 'bg-brand-600'
        }`}
        style={recorte(CHANFRO)}
      />

      <span className="relative flex items-center gap-3">{children}</span>
    </Tag>
  );
};

/**
 * A seta do botao, desenhada a mao.
 *
 * Nao vem de biblioteca de icones: e' um traco com ponta, no mesmo peso
 * das linhas da logo, e anda para a direita quando o cursor chega —
 * reforcando a direcao do preenchimento.
 */
export const Seta: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 24 10"
    className={`h-2.5 w-6 transition-transform duration-300 group-hover/botao:translate-x-1 ${className}`}
    fill="none"
    aria-hidden
  >
    <path d="M0 5h21M17 1l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" />
  </svg>
);
