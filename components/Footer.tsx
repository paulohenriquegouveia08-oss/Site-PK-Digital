import React from 'react';
import { Instagram, Linkedin, Code } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <span className="text-3xl font-extrabold text-slate-900 tracking-tighter block mb-6">
              LSPK <span className="text-brand-600">TECNOLOGY</span>
            </span>
            <p className="text-slate-500 text-base font-medium max-w-md leading-relaxed">
              Transformamos ideias em experiências digitais de alto impacto. 
              Somos especialistas em criar sites que unem estética premium e performance de vendas para o seu negócio.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-extrabold mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm font-bold text-slate-500">
              <li><button onClick={() => scrollTo('services')} className="hover:text-brand-600 transition-colors">Serviços</button></li>
              <li><button onClick={() => scrollTo('about')} className="hover:text-brand-600 transition-colors">Sobre Nós</button></li>
              <li><button onClick={() => scrollTo('faq')} className="hover:text-brand-600 transition-colors">FAQ</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-extrabold mb-6">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/pk_digital_group/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 hover:border-brand-600 transition-all shadow-sm">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 hover:border-brand-600 transition-all shadow-sm">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 hover:border-brand-600 transition-all shadow-sm">
                <Code className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-bold text-slate-400 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} LSPK Tecnology. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;