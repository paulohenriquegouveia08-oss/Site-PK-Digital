import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PORTFOLIO_PROJECTS } from '../constants';
import { ArrowLeft, Clock, Code2, Database, Layout, Server, MonitorSmartphone, Settings } from 'lucide-react';

const getTechIcon = (tech: string) => {
  const t = tech.toLowerCase();
  if (t.includes('react') || t.includes('next') || t.includes('vite')) return <Layout className="w-5 h-5" />;
  if (t.includes('node') || t.includes('express')) return <Server className="w-5 h-5" />;
  if (t.includes('sql') || t.includes('base')) return <Database className="w-5 h-5" />;
  if (t.includes('css') || t.includes('tailwind') || t.includes('motion')) return <MonitorSmartphone className="w-5 h-5" />;
  if (t.includes('api')) return <Settings className="w-5 h-5" />;
  return <Code2 className="w-5 h-5" />;
};

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PORTFOLIO_PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Projeto não encontrado</h1>
        <Link to="/" className="text-brand-600 font-bold hover:underline">Voltar para o início</Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/" className="inline-flex items-center text-slate-500 hover:text-brand-600 font-bold mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Voltar para Home
        </Link>

        <div className="mb-12">
          <span className="text-brand-600 font-bold tracking-wider uppercase text-sm block mb-3">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            {project.title}
          </h1>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl mb-16 border border-slate-100 max-h-[600px] flex items-start justify-center bg-slate-50">
          <img src={project.image} alt={project.title} className="w-full h-auto object-cover object-top" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Sobre o Projeto</h2>
            <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </p>
          </div>

          <div className="space-y-8 bg-slate-50 p-8 rounded-3xl border border-slate-100 h-fit">
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-brand-600" /> Tempo de Entrega
              </h3>
              <p className="text-slate-600 font-medium">
                {project.developmentTime}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center">
                <Code2 className="w-4 h-4 mr-2 text-brand-600" /> Tecnologias Utilizadas
              </h3>
              <ul className="space-y-3">
                {project.technologies?.map((tech, index) => (
                  <li key={index} className="flex items-center text-slate-600 font-medium">
                    <span className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 mr-3 text-slate-400">
                      {getTechIcon(tech)}
                    </span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
