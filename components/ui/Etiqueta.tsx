import React from 'react';

/**
 * O rotulo de secao.
 *
 * Copia o tratamento do "— TECNOLOGY —" da logo: maiuscula, entrelinha
 * larga e um fio de cada lado. E' o detalhe tipografico mais
 * caracteristico da marca, e repeti-lo nas secoes amarra o site a ela
 * sem precisar repetir o logotipo em toda tela.
 *
 * O fio da esquerda so aparece quando o rotulo esta centralizado: num
 * titulo alinhado a esquerda, um fio antes da primeira palavra empurra
 * o texto para dentro e quebra o alinhamento da coluna.
 */
export const Etiqueta: React.FC<{ children: React.ReactNode; centralizada?: boolean }> = ({
  children,
  centralizada = false,
}) => (
  <span
    className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-brand-600 ${
      centralizada ? 'justify-center' : ''
    }`}
  >
    {centralizada && <span aria-hidden className="h-px w-8 bg-brand-600/60" />}
    {children}
    <span aria-hidden className="h-px w-8 bg-brand-600/60" />
  </span>
);
