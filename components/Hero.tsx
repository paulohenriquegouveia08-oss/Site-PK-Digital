import React from 'react';
import { Botao, Seta } from './ui/Botao';
import { Etiqueta } from './ui/Etiqueta';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-20 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-50 via-slate-50 to-slate-50 -z-20"></div>
      <div
        aria-hidden
        className="respiro absolute top-20 right-0 w-[560px] h-[560px] rounded-full bg-brand-600/10 blur-[140px] -z-10"
      ></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 z-10 text-center lg:text-left">
          {/* A pilula com bolinha pulsando saiu: e' o mesmo selo que
              aparece em todo template de agencia. Ficou o rotulo com
              fio, que repete o tratamento do "— TECNOLOGY —" da logo. */}
          <div className="entrada" style={{ animationDelay: '80ms' }}>
            <Etiqueta>Agência de desenvolvimento web</Etiqueta>
          </div>
          
          <h1
            className="entrada text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.02] tracking-tight"
            style={{ animationDelay: '160ms' }}
          >
            Elevamos seu Negócio com <span className="text-blue-gradient">Sites de Elite</span>
          </h1>
          
          <p
            className="entrada text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            style={{ animationDelay: '260ms' }}
          >
            Não basta estar na internet. Sua empresa precisa se destacar. Nossa equipe cria experiências digitais imersivas, rápidas e focadas em converter visitantes em clientes fiéis.
          </p>

          <div
            className="entrada flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-center lg:justify-start"
            style={{ animationDelay: '360ms' }}
          >
            <Botao
              href="https://wa.me/5543991621344?text=Quero solicitar meu site!"
              target="_blank"
              rel="noopener noreferrer"
              className="justify-center sm:justify-start"
            >
              Falar com consultor
              <Seta />
            </Botao>

            <Botao
              variante="contorno"
              como="button"
              className="justify-center sm:justify-start"
              onClick={() =>
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Ver serviços
            </Botao>
          </div>

          <div
            className="entrada flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 pt-6 text-xs font-bold uppercase tracking-[0.16em] text-slate-500"
            style={{ animationDelay: '460ms' }}
          >
            {['+150 projetos entregues', 'Equipe especializada'].map((prova) => (
              <span key={prova} className="flex items-center gap-3">
                <span aria-hidden className="h-px w-5 bg-brand-600" />
                {prova}
              </span>
            ))}
          </div>
        </div>

        {/* Vitrine de aparelhos.
            Antes eram blocos cinza montando um site imaginario, com um
            foguete de emoji flutuando ao lado. Aquilo nao mostrava
            trabalho nenhum — era enfeite, e enfeite de wireframe e' o
            que faz um site parecer template.

            Agora sao dois aparelhos com a CAPTURA DE UM PROJETO REAL na
            tela. Numa agencia, a prova e' o trabalho: a pessoa ve o que
            a LSPK entrega antes de rolar ate o portfolio. */}
        <div className="relative flex w-full items-center justify-center lg:justify-end">
          <div className="vitrine relative w-full max-w-[540px]">

            {/* Sombra no chao. Elipse desfocada, nao um `box-shadow`
                retangular: aparelho apoiado projeta sombra do formato
                do apoio, e a base do notebook e' estreita. */}
            <div
              aria-hidden
              className="absolute inset-x-[8%] -bottom-2 h-8 rounded-[50%] bg-black/70 blur-2xl"
            />

            {/* ── Notebook ─────────────────────────────────────────── */}
            <div className="relative">
              {/* Tampa. O gradiente de cima para baixo imita aluminio:
                  a aresta superior pega luz, o corpo escurece. Sem
                  isso a moldura fica um retangulo chapado. */}
              <div
                className="relative rounded-t-xl rounded-b-[4px] p-[10px] shadow-2xl"
                style={{
                  background: 'linear-gradient(160deg, #3A3B42 0%, #1C1D22 42%, #131418 100%)',
                  boxShadow: '0 30px 60px -20px rgba(0,0,0,.9), inset 0 1px 0 rgba(255,255,255,.14)',
                }}
              >
                {/* Camera: um ponto de 3px na moldura de cima. E' o
                    detalhe que o olho procura sem saber que procura. */}
                <span
                  aria-hidden
                  className="absolute left-1/2 top-[4px] h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-slate-300/50"
                />

                <div className="relative overflow-hidden rounded-[3px] bg-black">
                  <img
                    src="/vitrine/tela-notebook.jpg"
                    alt="Landing page entregue pela LSPK para uma academia"
                    className="block w-full"
                    width={1052}
                    height={658}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                  {/* Reflexo do vidro: uma faixa clara na diagonal,
                      bem fraca. Tela sem reflexo nenhum parece desenho
                      de tela; com reflexo forte, parece suja. */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(115deg, rgba(255,255,255,.10) 0%, rgba(255,255,255,.03) 28%, transparent 46%)',
                    }}
                  />
                </div>
              </div>

              {/* Base. Mais LARGA que a tampa e com as laterais
                  chanfradas: e' o que sugere que a tampa esta inclinada
                  para tras, sem precisar de perspectiva 3D. */}
              <div
                className="relative mx-auto h-[14px] w-[106%] -translate-y-[1px] rounded-b-[10px]"
                style={{
                  background: 'linear-gradient(180deg, #34353B 0%, #1A1B1F 60%, #0E0F12 100%)',
                  clipPath: 'polygon(1.5% 0, 98.5% 0, 96% 100%, 4% 100%)',
                  boxShadow: '0 12px 24px -10px rgba(0,0,0,.9)',
                }}
              >
                {/* Reentrancia de abrir a tampa. */}
                <span
                  aria-hidden
                  className="absolute left-1/2 top-0 h-[5px] w-[14%] -translate-x-1/2 rounded-b-full bg-black/50"
                />
              </div>
            </div>

            {/* ── Celular ──────────────────────────────────────────── */}
            {/* Sobreposto e girado: dois aparelhos alinhados e retos
                parecem catalogo de loja. Encostado assim parece uma
                mesa de trabalho. */}
            <div
              className="absolute -bottom-6 -right-1 w-[26%] max-w-[128px] rotate-[7deg] sm:-right-4"
              style={{ filter: 'drop-shadow(0 24px 30px rgba(0,0,0,.85))' }}
            >
              <div
                className="rounded-[20px] p-[3px]"
                style={{
                  background: 'linear-gradient(150deg, #45464D 0%, #1B1C21 45%, #101115 100%)',
                }}
              >
                <div className="relative overflow-hidden rounded-[17px] bg-black">
                  <img
                    src="/vitrine/tela-celular.jpg"
                    alt="A mesma landing page vista no celular"
                    className="block w-full"
                    width={496}
                    height={1074}
                    loading="lazy"
                    decoding="async"
                  />
                  {/* A ilha da camera, como nos aparelhos atuais. */}
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-[5px] h-[7px] w-[30%] -translate-x-1/2 rounded-full bg-black"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(120deg, rgba(255,255,255,.12) 0%, transparent 40%)',
                    }}
                  />
                </div>
              </div>
              {/* Botao lateral. */}
              <span
                aria-hidden
                className="absolute -right-[2px] top-[22%] h-[9%] w-[2px] rounded-r bg-[#3A3B42]"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;