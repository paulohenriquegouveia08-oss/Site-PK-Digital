import React, { useRef } from 'react';
import { Store, Dumbbell, Utensils, ShoppingBag, Gavel, HardHat, Scissors, HeartPulse, Laptop } from 'lucide-react';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      name: "Carlos Mendes",
      role: "Dono da Barbearia Viking",
      type: "Barbearia",
      icon: <Scissors className="w-5 h-5" />,
      text: "O sistema de agendamento online mudou minha vida. Acabou a confusão no WhatsApp e os clientes adoraram a facilidade. A agenda vive cheia agora!"
    },
    {
      name: "Dra. Ana Souza",
      role: "Diretora da Clínica Sorriso",
      type: "Clínica Odontológica",
      icon: <HeartPulse className="w-5 h-5" />,
      text: "Profissionalismo impecável. O site transmite exatamente a seriedade e a higiene que nossa clínica preza. Recebemos muitos elogios dos pacientes."
    },
    {
      name: "Ricardo Gomes",
      role: "Proprietário do Burger Kingpin",
      type: "Hamburgueria",
      icon: <Utensils className="w-5 h-5" />,
      text: "O cardápio digital é fantástico. As fotos ficaram incríveis e é muito fácil de atualizar os preços. As vendas pelo delivery aumentaram 40%."
    },
    {
      name: "Juliana Lima",
      role: "Fundadora da FitLife Studio",
      type: "Academia",
      icon: <Dumbbell className="w-5 h-5" />,
      text: "Precisava de uma Landing Page para vender meu plano anual e o resultado foi surpreendente. A página converte muito bem, o investimento se pagou na primeira semana."
    },
    {
      name: "Marcos Paulo",
      role: "CEO da MP Imports",
      type: "E-commerce",
      icon: <ShoppingBag className="w-5 h-5" />,
      text: "A loja vitrine que criaram é super rápida. Meus clientes escolhem no site e fecham comigo no WhatsApp já sabendo o que querem. Facilitou demais."
    },
    {
      name: "Dra. Roberta Silva",
      role: "Sócia da Silva Advogados",
      type: "Advocacia",
      icon: <Gavel className="w-5 h-5" />,
      text: "Elegância e autoridade. Foi isso que pedi e foi isso que a agência entregou. Hoje me sinto segura em mandar o link do meu site para grandes clientes corporativos."
    },
    {
      name: "Felipe Costa",
      role: "Engenheiro na Costa Construções",
      type: "Construtora",
      icon: <HardHat className="w-5 h-5" />,
      text: "O portfólio de obras ficou excelente. Consigo mostrar nossos projetos em alta resolução em qualquer reunião pelo tablet. Muito satisfeito."
    },
    {
      name: "Camila Rocha",
      role: "Gerente do Petshop Amigo",
      type: "Petshop",
      icon: <Store className="w-5 h-5" />,
      text: "Ficou lindo e muito funcional. A página de serviços ajuda os tutores a entenderem os pacotes de banho e tosa. O suporte da equipe é nota 10."
    },
    {
      name: "André Santos",
      role: "Dono da Pizza Express",
      type: "Delivery",
      icon: <Utensils className="w-5 h-5" />,
      text: "Rápido, bonito e direto ao ponto. Meus clientes acessam pelo QR Code da mesa e já fazem o pedido. Reduziu muito o trabalho dos garçons."
    },
    {
      name: "Fernanda Dias",
      role: "Tech Recruiter",
      type: "Consultoria RH",
      icon: <Laptop className="w-5 h-5" />,
      text: "A equipe entendeu perfeitamente minha necessidade de um site institucional moderno para atrair talentos. O design ficou premium e muito clean."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            O que dizem nossos <span className="text-brand-600">Parceiros</span>
          </h2>
          <p className="text-slate-500 font-medium text-lg">
            Histórias reais de empresas que transformaram sua presença digital conosco.
          </p>
        </div>
        
        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto pb-10 gap-6 snap-x snap-mandatory scrollbar-custom"
        >
          {reviews.map((review, i) => (
              <div 
                key={i} 
                className="group snap-center shrink-0 w-[320px] md:w-[380px] bg-slate-50 border border-slate-100 p-8 flex flex-col transition-colors duration-300 hover:border-brand-600/40"
              >
                  {/* Saiu o quadrado com icone do ramo (tesoura para
                      barbearia, garfo para restaurante) e as aspas
                      decorativas. Eram simbolos de biblioteca que
                      ilustravam o obvio — o cargo logo abaixo ja diz o
                      ramo — e faziam todos os cartoes parecerem iguais.

                      Entrou o ramo como etiqueta no topo: a informacao
                      que o icone tentava dar, agora legivel. */}
                  <div className="mb-6 flex items-baseline justify-between gap-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-600">
                        {review.type}
                      </span>
                      {/* A nota como numero, nao como cinco estrelinhas:
                          ocupa menos, le mais rapido, e nao repete o
                          mesmo desenho em vinte cartoes. */}
                      <span className="font-mono text-xs font-bold text-slate-400">5,0</span>
                  </div>

                  <p className="flex-grow text-[15px] font-medium leading-relaxed text-slate-800">
                      &ldquo;{review.text}&rdquo;
                  </p>

                  <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                     {/* Iniciais no lugar da foto que nao existe: da um
                         ponto de ancoragem visual sem inventar rosto. */}
                     <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-600/10 font-mono text-xs font-bold tracking-widest text-brand-600">
                       {review.name.split(' ').filter(Boolean).slice(0, 2).map((n) => n[0]).join('')}
                     </span>
                     <span className="min-w-0">
                       <span className="block truncate text-sm font-bold leading-tight text-slate-900">{review.name}</span>
                       <span className="block truncate text-xs font-medium text-slate-500">{review.role}</span>
                     </span>
                  </div>
              </div>
          ))}
          
          {/* Spacer for right padding */}
          <div className="shrink-0 w-4"></div>
        </div>

        {/* Custom Scrollbar Styles for Webkit */}
        <style>{`
          .scrollbar-custom::-webkit-scrollbar {
            height: 8px;
          }
          .scrollbar-custom::-webkit-scrollbar-track {
            background: #f1f5f9; 
            border-radius: 10px;
          }
          .scrollbar-custom::-webkit-scrollbar-thumb {
            background: #2563eb; 
            border-radius: 10px;
          }
          .scrollbar-custom::-webkit-scrollbar-thumb:hover {
            background: #1d4ed8; 
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials;