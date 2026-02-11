import React, { useRef } from 'react';
import { Star, Quote, Building2, Store, Dumbbell, Utensils, ShoppingBag, Gavel, HardHat, Scissors, HeartPulse, Laptop } from 'lucide-react';

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
    <section className="py-24 bg-white border-t border-slate-100 relative">
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
                className="snap-center shrink-0 w-[320px] md:w-[380px] bg-white border border-slate-100 p-8 rounded-3xl flex flex-col hover:border-brand-600/30 transition-all hover:shadow-xl hover:shadow-brand-600/5 shadow-sm"
              >
                  <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shadow-sm">
                            {review.icon}
                        </div>
                        <div>
                            <h4 className="text-slate-900 font-bold text-base leading-tight">{review.name}</h4>
                            <p className="text-sm text-brand-600 font-bold">{review.role}</p>
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-brand-100 fill-brand-50" />
                  </div>

                  <div className="flex text-brand-500 gap-1 mb-4 text-xs">
                    {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                  </div>
                  
                  <p className="text-slate-600 text-sm italic font-medium leading-relaxed flex-grow">
                      "{review.text}"
                  </p>
                  
                  <div className="mt-8 pt-5 border-t border-slate-50 flex items-center justify-between">
                     <span className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold">Projeto</span>
                     <span className="text-xs text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100 font-bold">{review.type}</span>
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