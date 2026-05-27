import { 
  Briefcase, 
  Layout, 
  Utensils, 
  ShoppingBag, 
  CalendarClock, 
  Store, 
  Zap, 
  Palette, 
  Smartphone, 
  Headset, 
  Search, 
  Settings 
} from 'lucide-react';
import React from 'react';

export const SERVICES = [
  {
    title: "Site Institucional",
    description: "Apresente sua empresa com elegância. Ideal para corporações, advogados e construtoras.",
    icon: <Briefcase className="w-8 h-8 text-brand-600" />,
    benefits: [
      "Credibilidade imediata para sua marca",
      "Apresentação profissional de serviços",
      "Posicionamento de autoridade no mercado",
      "Otimizado para buscas no Google (SEO)",
      "Integração com mapas e contato"
    ]
  },
  {
    title: "Landing Page",
    description: "Página de alta conversão focada em vendas ou captura de leads para campanhas.",
    icon: <Layout className="w-8 h-8 text-brand-600" />,
    benefits: [
      "Foco total em conversão de vendas",
      "Design persuasivo e direto ao ponto",
      "Carregamento ultrarrápido",
      "Ideal para tráfego pago (Ads)",
      "Captura de leads qualificados"
    ]
  },
  {
    title: "Cardápio Digital",
    description: "Modernize seu atendimento. Seus clientes acessam o menu via QR Code no celular.",
    icon: <Utensils className="w-8 h-8 text-brand-600" />,
    benefits: [
      "Atualize preços em tempo real",
      "Fotos atraentes dos seus pratos",
      "Acesso fácil via QR Code",
      "Redução de custos com impressão",
      "Link direto para pedidos no WhatsApp"
    ]
  },
  {
    title: "Catálogo de Produtos",
    description: "Exiba seus produtos de forma organizada e profissional, facilitando orçamentos.",
    icon: <ShoppingBag className="w-8 h-8 text-brand-600" />,
    benefits: [
      "Organização por categorias e filtros",
      "Galeria de fotos em alta resolução",
      "Botão de orçamento simplificado",
      "Fácil compartilhamento de link",
      "Sem taxas de comissão por venda"
    ]
  },
  {
    title: "Site de Agendamento",
    description: "Perfeito para barbearias e clínicas. Automatize suas marcações online.",
    icon: <CalendarClock className="w-8 h-8 text-brand-600" />,
    benefits: [
      "Agenda aberta 24h por dia",
      "Redução de faltas (No-Show)",
      "Lembretes automáticos para clientes",
      "Gestão de equipe e horários",
      "Pagamento antecipado (opcional)"
    ]
  },
  {
    title: "Loja Simples (Vitrine)",
    description: "Venda pelo WhatsApp. Uma vitrine virtual sem a complexidade de gateways de pagamento.",
    icon: <Store className="w-8 h-8 text-brand-600" />,
    benefits: [
      "Comece a vender sem burocracia",
      "Carrinho de compras intuitivo",
      "Pedido finalizado no WhatsApp",
      "Sem mensalidades de plataformas caras",
      "Controle total do atendimento"
    ]
  }
];

export const BENEFITS = [
  {
    title: "Velocidade Extrema",
    description: "Sites otimizados para carregar em instantes e não perder visitantes.",
    icon: <Zap className="w-6 h-6 text-white" />
  },
  {
    title: "Design Premium",
    description: "Layouts modernos que transmitem autoridade e confiança.",
    icon: <Palette className="w-6 h-6 text-white" />
  },
  {
    title: "100% Responsivo",
    description: "Seu site perfeito em celulares, tablets e computadores.",
    icon: <Smartphone className="w-6 h-6 text-white" />
  },
  {
    title: "Suporte Dedicado",
    description: "Atendimento próximo para garantir que tudo funcione perfeitamente.",
    icon: <Headset className="w-6 h-6 text-white" />
  },
  {
    title: "SEO Básico",
    description: "Estrutura preparada para ser encontrada pelo Google.",
    icon: <Search className="w-6 h-6 text-white" />
  },
  {
    title: "Totalmente Personalizado",
    description: "Nada de templates genéricos. Feito sob medida para sua marca.",
    icon: <Settings className="w-6 h-6 text-white" />
  }
];

export const PRICING = [
  {
    name: "Essencial",
    price: "Consulte",
    features: ["One Page (Página Única)", "Design Responsivo", "Botão WhatsApp", "Hospedagem Inclusa (1 ano)"],
    recommended: false
  },
  {
    name: "Profissional",
    price: "Popular",
    features: ["Até 5 Páginas", "Blog Integrado", "Otimização SEO", "Formulário de Contato", "Painel Administrativo"],
    recommended: true
  },
  {
    name: "Premium",
    price: "Especial",
    features: ["Loja Virtual ou Sistema", "Área de Membros", "Integrações Avançadas", "Design Exclusivo", "Consultoria de Marketing"],
    recommended: false
  }
];

export const FAQS = [
  {
    question: "Quanto tempo leva para criar um site?",
    answer: "O prazo varia conforme a complexidade. Landing Pages levam em média 3 a 5 dias úteis, enquanto sites institucionais completos podem levar de 10 a 15 dias para serem finalizados pela nossa equipe."
  },
  {
    question: "O site é responsivo?",
    answer: "Sim! Todos os projetos são desenvolvidos com a metodologia 'Mobile First', garantindo funcionamento perfeito em qualquer tamanho de tela, seja celular ou desktop."
  },
  {
    question: "Posso pedir alterações durante o projeto?",
    answer: "Com certeza. Nosso processo inclui etapas de revisão para garantir que o design e o conteúdo estejam exatamente como você e sua empresa desejam."
  },
  {
    question: "O domínio e a hospedagem estão inclusos?",
    answer: "Dependendo do pacote contratado, podemos incluir o primeiro ano de hospedagem. O domínio (ex: seunome.com.br) deve ser registrado em seu nome, mas nossa equipe auxilia em todo o processo técnico."
  }
];

export const PORTFOLIO_PROJECTS = [
  {
    title: "FitLife Academy",
    category: "Landing Page",
    description: "Página de alta conversão para academia premium focada em captação de leads e vendas de planos anuais.",
    image: "/portfolio/landing.png",
    link: "#"
  },
  {
    title: "Aethelred & Chambers",
    category: "Site Institucional",
    description: "Site corporativo elegante e moderno para escritório de advocacia, transmitindo confiança e autoridade.",
    image: "/portfolio/corporate.png",
    link: "#"
  },
  {
    title: "Horology London",
    category: "E-commerce",
    description: "Loja virtual minimalista e sofisticada para relógios de luxo, com foco na experiência do usuário e alta resolução de produtos.",
    image: "/portfolio/ecommerce.png",
    link: "#"
  }
];