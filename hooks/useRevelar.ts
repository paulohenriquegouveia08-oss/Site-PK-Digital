import { useEffect, useRef, useState } from 'react';

/**
 * Revela o elemento quando ele entra na tela.
 *
 * A animacao roda UMA vez e para (`unobserve` no primeiro disparo).
 * Reanimar a cada rolagem para cima e para baixo enjoa rapido e faz o
 * site parecer instavel — a intencao aqui e' dar vida na primeira
 * leitura, nao virar carrossel.
 *
 * `rootMargin` negativo embaixo: o elemento so conta como visto quando
 * entrou uns 12% na tela. Sem isso ele dispara ainda fora do campo de
 * visao e a pessoa rola direto para um conteudo ja animado, sem ver o
 * movimento.
 *
 * Quem pediu menos animacao no sistema recebe tudo visivel de cara —
 * `prefers-reduced-motion` nao e' preferencia estetica, e' acessibilidade:
 * movimento pode causar enjoo e desconforto real.
 */
export function useRevelar<T extends HTMLElement = HTMLDivElement>() {
  const alvo = useRef<T>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const el = alvo.current;
    if (!el) return;

    const menosMovimento = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (menosMovimento || typeof IntersectionObserver === 'undefined') {
      setVisivel(true);
      return;
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        setVisivel(true);
        observador.unobserve(entrada.target);
      },
      { threshold: 0.12, rootMargin: '0px 0px -12% 0px' }
    );

    observador.observe(el);
    return () => observador.disconnect();
  }, []);

  return { alvo, visivel };
}

/**
 * As classes do estado revelado/escondido.
 *
 * `atraso` escalona os itens de uma lista: o segundo cartao entra um
 * pouco depois do primeiro, e a fileira "monta" em vez de piscar
 * inteira de uma vez.
 *
 * O atraso e' limitado a 400ms. Numa grade de nove itens, 9 x 90ms
 * daria quase um segundo — quem rola rapido chegaria no fim da secao
 * antes de o ultimo aparecer.
 */
export function classesRevelar(visivel: boolean, atraso = 0) {
  const ms = Math.min(atraso, 400);
  return {
    className: `transition-[opacity,transform] duration-[700ms] ease-out ${
      visivel ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`,
    style: { transitionDelay: `${ms}ms` },
  };
}
