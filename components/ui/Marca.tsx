import React from 'react';

/**
 * A assinatura da LSPK, recortada do arquivo original da logo.
 *
 * Imagem, e nao texto: as letras da marca tem cortes retos e um
 * gradiente proprio (o "L" e o "P" em prata, o "S" e o "K" em azul)
 * que nenhuma fonte do Google reproduz. Escrever "LSPK TECNOLOGY" com
 * Outfit em negrito parecia a marca, mas nao era ela.
 *
 * `alt` com o nome por extenso porque a imagem CARREGA o nome da
 * empresa — sem isso, quem usa leitor de tela nao sabe de quem e' o
 * site, e o buscador tambem nao.
 */
export const Marca: React.FC<{
  className?: string;
  /** Só o "LSPK", sem a linha "TECNOLOGY" embaixo. */
  compacta?: boolean;
}> = ({ className = 'h-8', compacta = false }) => (
  <img
    src={compacta ? '/marca/lspk-marca.png' : '/marca/lspk-assinatura.png'}
    alt="LSPK Tecnology"
    className={`${className} w-auto select-none`}
    draggable={false}
    // A assinatura aparece no topo da primeira tela: sem prioridade
    // ela entra na fila depois das fotos do portfolio, e o cabecalho
    // fica um instante sem marca nenhuma.
    fetchPriority="high"
    decoding="async"
  />
);
