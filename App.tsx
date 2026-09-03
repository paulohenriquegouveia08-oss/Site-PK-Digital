import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import { WhatsappLogo } from './components/ui/WhatsappLogo';

const App: React.FC = () => {
  return (
    // `basename` e' o prefixo do caminho onde o site esta publicado.
    // Sem ele, num subdiretorio (/Site-PK-Digital/) a rota "/" nunca
    // casa: o cabecalho e o rodape aparecem, e o meio da pagina fica
    // vazio. Vem do mesmo `base` do vite.config, entao os dois nunca
    // divergem.
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projeto/:id" element={<ProjectDetails />} />
        </Routes>

        <Footer />

        {/* Atalho fixo do WhatsApp.
            Era um circulo verde com o icone dentro — o widget mais
            copiado da internet, e o unico ponto da tela em cor de outra
            marca. Agora e' uma barra chanfrada como os outros botoes,
            na cor da LSPK, que se abre ao passar o cursor.
            O simbolo do WhatsApp fica: ali ele nao e' decoracao, e' o
            que diz QUAL aplicativo vai abrir. */}
        <a
          href="https://wa.me/5543991621344?text=Quero%20solicitar%20meu%20site"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="group/botao fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-brand-600 py-4 pl-5 pr-5 text-white shadow-2xl shadow-brand-600/30 transition-[padding,box-shadow] duration-300 hover:pr-7 hover:shadow-brand-600/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          style={{
            clipPath:
              'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)',
          }}
        >
          <WhatsappLogo className="w-6 h-6 fill-current shrink-0" />
          {/* O texto nasce com largura zero e cresce no hover: no
              celular ocupa so o quadrado, no computador convida. */}
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-bold uppercase tracking-[0.14em] transition-[max-width] duration-500 ease-out group-hover/botao:max-w-[12rem]">
            Solicitar site
          </span>
        </a>
      </div>
    </Router>
  );
};

export default App;