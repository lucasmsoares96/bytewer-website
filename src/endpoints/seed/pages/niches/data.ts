import type { ContactChannel, NicheCopy } from '../../types'

export const contactChannelsPt: ContactChannel[] = [
  { type: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/553798719201' },
  { type: 'messenger', label: 'Messenger', href: 'https://m.me/477932758737919' },
  { type: 'instagram', label: 'Instagram', href: 'https://ig.me/m/bytewer' },
  { type: 'email', label: 'E-mail', href: 'mailto:contato@bytewer.com' },
]

export const contactChannelLabelsEn = ['WhatsApp', 'Messenger', 'Instagram', 'Email']

export const niches: NicheCopy[] = [
  {
    slug: 'automacao',
    solutionCardIcons: ['ShieldCheck', 'Zap', 'TrendingUp'],
    agentIcons: ['Users', 'Repeat', 'MessageSquare', 'Bot'],
    statValues: ['10+', '24/7', '12.4x', '+87%'],
    pt: {
      title: 'Automação com IA',
      seo: {
        title: 'Automação com IA: agentes que escalam suas vendas | Bytewer',
        description:
          'Agentes de IA customizados que prospectam, qualificam e atendem clientes 24/7. Escale suas vendas sem aumentar a sua equipe na mesma proporção.',
      },
      hero: {
        tagline: 'Next-Gen AI Agents',
        title: 'Escale suas Vendas de',
        titleHighlight: 'Forma Inteligente',
        description:
          'Nossos Agentes de IA customizados prospectam, qualificam e atendem seus clientes 24/7, permitindo que seu negócio cresça sem precisar aumentar sua equipe na mesma proporção.',
        ctaLabel: 'Falar com nosso Agente SDR',
      },
      problem: {
        title: 'A rotina que está travando o seu',
        titleHighlight: 'crescimento',
        items: [
          'Sua capacidade de prospecção está limitada ao número de pessoas na sua equipe e às horas do dia?',
          'Você sabe que poderia vender mais, mas sua equipe já está sobrecarregada com processos manuais e repetitivos?',
          'Leads valiosos escapam porque seu processo de follow-up não é escalável e depende da memória e disciplina de cada vendedor?',
          'Você quer crescer, mas a ideia de contratar, treinar e gerenciar uma equipe maior te preocupa pelo alto custo e pela complexidade operacional?',
        ],
        quote:
          'Se você busca uma forma de romper essa barreira e crescer exponencialmente, a resposta não está em adicionar mais pessoas, mas em multiplicar a capacidade das que você já tem.',
      },
      solution: {
        title: 'Implemente uma Força de Trabalho',
        titleHighlight: 'Digital, Inteligente e Escalável',
        description:
          'Apresentamos os Agentes de IA: uma solução tecnológica que adiciona uma camada de inteligência e automação à sua operação. Em vez de adicionar mais pessoas para fazer mais do mesmo, você implementa uma solução inteligente que executa tarefas 24/7, liberando sua equipe humana para focar em atividades de alto valor.',
        cards: [
          { title: 'Customização Total', description: 'Adaptado à lógica específica da sua empresa.' },
          { title: 'Integração Fluida', description: 'Conecta-se aos seus CRMs e ferramentas atuais.' },
          { title: 'Escala Infinita', description: 'Dobre seu volume sem dobrar sua folha de pagamento.' },
        ],
      },
      agents: {
        title: 'Uma Solução Inteligente e Customizada para Cada Desafio',
        subtitle:
          'Nossos agentes são especialistas digitais, cada um customizado para uma função chave no seu processo de crescimento.',
        agents: [
          { title: 'Agente SDR (Qualificação Inteligente)', description: 'Aborda e qualifica seus leads de forma autônoma, usando critérios definidos por você. Encaminha apenas os clientes com maior potencial para sua equipe de vendas, já com o contexto da conversa. Resultado: um fluxo de leads qualificados e escalável, sem sobrecarregar sua equipe.' },
          { title: 'Agente de Follow-Up (Persistência Escalável)', description: 'Executa sequências de follow-up inteligentes e personalizadas, reativando leads "esquecidos" na sua base. Resultado: aumento da conversão e maximização do valor de cada lead que você já gerou.' },
          { title: 'Agente de Atendimento (Suporte Customizado)', description: 'Responde de forma inteligente às dúvidas frequentes dos seus clientes, 24h por dia, com a base de conhecimento da sua empresa. Resultado: clientes mais satisfeitos e equipe focada em problemas complexos.' },
          { title: 'Agentes Customizados (Sua Lógica de Negócio)', description: 'Criamos um agente de IA do zero, totalmente customizado para a lógica e os desafios únicos do seu processo. Resultado: uma solução sob medida para o seu maior gargalo operacional.' },
        ],
      },
      authority: {
        title: 'Tecnologia de Ponta Criada por',
        titleHighlight: 'Especialistas em Vendas',
        subtitle:
          'A Bytewer foi fundada por especialistas com mais de 10 anos de experiência em campo, que vivenciaram a frustração de perder vendas por falta de braço para prospecção e follow-up. Unimos conhecimento prático em vendas com o que há de mais avançado em IA para criar uma solução que realmente funciona: vendas com escala, previsibilidade e baixo custo.',
        stats: [
          { label: 'Anos de Experiência em Vendas' },
          { label: 'Operação Autônoma' },
          { label: 'ROI Estimado' },
          { label: 'Taxa de Qualificação' },
        ],
      },
      cta: {
        badge: 'Vamos conversar?',
        title: 'Duvida? Então veja com',
        titleHighlight: 'seus próprios olhos.',
        description:
          'Chega de promessas vazias e apresentações de slides. Agende uma chamada de 15 minutos e nós vamos, em tempo real, configurar e mostrar um agente funcionando na sua frente. É a sua chance de ver o futuro das vendas em ação, sem compromisso e sem truques.',
        disclaimer: 'Consultoria assertiva, foco em resultados e sem compromisso.',
        channelLabel: 'Escolha seu canal de contato preferido:',
      },
    },
    en: {
      title: 'AI Automation',
      seo: {
        title: 'AI Automation: agents that scale your sales | Bytewer',
        description:
          'Custom AI agents that prospect, qualify and serve clients 24/7. Scale your sales without growing your team at the same pace.',
      },
      hero: {
        tagline: 'Next-Gen AI Agents',
        title: 'Scale your Sales',
        titleHighlight: 'Intelligently',
        description:
          'Our custom AI Agents prospect, qualify and serve your clients 24/7, allowing your business to grow without needing to increase your team at the same pace.',
        ctaLabel: 'Talk to our SDR Agent',
      },
      problem: {
        title: 'The routine that is holding back your',
        titleHighlight: 'growth',
        items: [
          'Is your prospecting capacity limited to the number of people on your team and the hours in the day?',
          'You know you could sell more, but your team is already overloaded with manual and repetitive processes?',
          "Valuable leads slip away because your follow-up process isn't scalable and depends on each salesperson's memory and discipline?",
          'You want to grow, but the idea of hiring, training and managing a larger team worries you due to high costs and operational complexity?',
        ],
        quote:
          "If you're looking for a way to break through this barrier and grow exponentially, the answer isn't adding more people, but multiplying the capacity of those you already have.",
      },
      solution: {
        title: 'Implement a Digital, Intelligent',
        titleHighlight: 'and Scalable Workforce',
        description:
          'Introducing AI Agents: a technological solution that adds a layer of intelligence and automation to your operation. Instead of adding more people to do more of the same, you implement an intelligent solution that executes tasks 24/7, freeing your human team to focus on high-value activities.',
        cards: [
          { title: 'Total Customization', description: "Adapted to your company's specific logic." },
          { title: 'Seamless Integration', description: 'Connects to your current CRMs and tools.' },
          { title: 'Infinite Scale', description: 'Double your volume without doubling your payroll.' },
        ],
      },
      agents: {
        title: 'An Intelligent and Customized Solution for Every Challenge',
        subtitle:
          'Our agents are digital specialists, each customized for a key function in your growth process.',
        agents: [
          { title: 'SDR Agent (Intelligent Qualification)', description: 'Approaches and qualifies your leads autonomously, using criteria defined by you. Forwards only the highest-potential clients to your sales team, with full conversation context. Result: a scalable flow of qualified leads, without overloading your team.' },
          { title: 'Follow-Up Agent (Scalable Persistence)', description: 'Executes intelligent and personalized follow-up sequences, reactivating "forgotten" leads in your database. Result: increased conversion and maximized value from every lead you have already generated.' },
          { title: 'Support Agent (Customized Support)', description: "Intelligently responds to your clients' frequently asked questions, 24 hours a day, with your company's specific knowledge base. Result: more satisfied clients and a support team focused on complex problems." },
          { title: 'Custom Agents (Your Business Logic)', description: 'We create an AI agent from scratch, fully customized to the unique logic and challenges of your process. Result: a tailored solution for your biggest operational bottleneck.' },
        ],
      },
      authority: {
        title: 'Cutting-Edge Technology Created by',
        titleHighlight: 'Sales Specialists',
        subtitle:
          'Bytewer was founded by specialists with over 10 years of field experience, who personally experienced the frustration of losing sales due to lack of resources for prospecting and follow-up. We combine practical sales knowledge with the most advanced AI to deliver sales with scale, predictability and low cost.',
        stats: [
          { label: 'Years of Sales Experience' },
          { label: 'Autonomous Operation' },
          { label: 'Estimated ROI' },
          { label: 'Qualification Rate' },
        ],
      },
      cta: {
        badge: "Let's talk?",
        title: 'Doubt? Then see with',
        titleHighlight: 'your own eyes.',
        description:
          'No more empty promises and slide presentations. Schedule a 15-minute call and we will, in real time, configure and show you an agent working right in front of you. This is your chance to see the future of sales in action, no commitment and no tricks.',
        disclaimer: 'Assertive consulting, results-focused and no commitment.',
        channelLabel: 'Choose your preferred contact channel:',
      },
    },
  },
  {
    slug: 'protecao-veicular',
    solutionCardIcons: ['Activity', 'ShieldCheck', 'TrendingUp'],
    agentIcons: ['Users', 'Repeat', 'MessageSquare', 'Bot'],
    statValues: ['10+', '24/7', '-60%', '+3x'],
    pt: {
      title: 'Proteção Veicular',
      seo: {
        title: 'Proteção Veicular no Piloto Automático com IA | Bytewer',
        description:
          'Agentes de IA prospectam, qualificam e agendam clientes no WhatsApp 24/7. Você só fecha o contrato de proteção veicular.',
      },
      hero: {
        tagline: 'Proteção Veicular Autônoma',
        title: 'Feche Mais Contratos de Proteção Veicular.',
        titleHighlight: 'No Piloto Automático.',
        description:
          'Nossos Agentes de IA prospectam, qualificam e agendam clientes no seu WhatsApp, 24 horas por dia. Você só entra na conversa para dar as boas-vindas e fechar o contrato.',
        ctaLabel: 'Quero a prova ao vivo (demo de 15 min)',
      },
      problem: {
        title: 'Sua operação está deixando',
        titleHighlight: 'dinheiro na mesa',
        items: [
          'Seu time de SDRs passa o dia em ligações frias com baixíssima taxa de conversão?',
          'Seus Closers perdem tempo precioso com leads desqualificados que nunca vão fechar?',
          'Quantos follow-ups são esquecidos e quantos "nãos" poderiam virar "sim" com mais insistência?',
          'O custo para manter uma equipe de prospecção está cada vez mais alto e difícil de escalar?',
        ],
        quote: 'Se você marcou "sim" para qualquer uma dessas perguntas, você não está sozinho. Mas a solução chegou.',
      },
      solution: {
        title: 'Contrate uma Equipe de Vendas Digital',
        titleHighlight: 'Incansável, Inteligente e Lucrativa',
        description:
          'Apresentamos os Agentes de IA para Proteção Veicular. Vendedores digitais que trabalham 24/7, treinados especificamente para o mercado, conversam, qualificam, agendam e fazem follow-up — liberando sua equipe humana para o que realmente importa: relacionamento e fechamento.',
        cards: [
          { title: '24/7 Ativo', description: 'Nunca perde um lead, independente da hora.' },
          { title: 'Qualificação', description: 'Filtra curiosos e entrega só quem quer fechar.' },
          { title: 'Escala Imediata', description: 'Dobre suas vendas sem dobrar seu time.' },
        ],
      },
      agents: {
        title: 'Monte sua Operação de Vendas Autônoma',
        subtitle: 'Temos o agente certo para cada etapa do seu funil de vendas.',
        agents: [
          { title: 'Agente SDR/BDR de IA', description: 'Dispara mensagens e/ou ligações para sua lista de leads, qualifica com perguntas-chave e agenda a conversa com um closer humano apenas para os leads quentes. Resultado: agenda cheia de leads quentes, sem esforço de prospecção.' },
          { title: 'Agente Closer de IA', description: 'Realiza follow-ups automáticos e persistentes, envia propostas, responde dúvidas e usa gatilhos de urgência para incentivar o fechamento. Resultado: aumento drástico na conversão e recuperação de vendas "perdidas".' },
          { title: 'Agente de Atendimento de IA', description: 'Responde 24/7 às dúvidas comuns dos seus associados (2ª via de boleto, como acionar assistência, etc.), liberando sua equipe para atendimentos complexos. Resultado: redução de custos com suporte e aumento da satisfação.' },
          { title: 'Agentes Customizados', description: 'Tem um processo único? Desenvolvemos um agente sob medida para automatizar qualquer tarefa de comunicação da sua empresa. Resultado: eficiência máxima e solução definitiva para seus gargalos operacionais.' },
        ],
      },
      authority: {
        title: 'Tecnologia de Ponta Criada por',
        titleHighlight: 'Especialistas em Vendas',
        subtitle:
          'A Bytewer foi fundada por especialistas com mais de 10 anos de experiência em campo. Unimos conhecimento prático em vendas com IA de ponta para entregar vendas com escala, previsibilidade e baixo custo.',
        stats: [
          { label: 'Anos de Experiência em Vendas' },
          { label: 'Operação Autônoma' },
          { label: 'Custo por Lead' },
          { label: 'Aumento em Fechamentos' },
        ],
      },
      cta: {
        badge: 'Vamos conversar?',
        title: 'Duvida? Então veja com',
        titleHighlight: 'seus próprios olhos.',
        description:
          'Agende uma chamada de 15 minutos e nós vamos, em tempo real, configurar e mostrar um agente funcionando na sua frente. Você vai ver exatamente como ele aborda, qualifica e agenda um cliente.',
        disclaimer: 'Demonstração rápida, foco em resultados e sem compromisso.',
        channelLabel: 'Escolha seu canal de contato preferido:',
      },
    },
    en: {
      title: 'Vehicle Protection',
      seo: {
        title: 'Vehicle Protection on Autopilot with AI Agents | Bytewer',
        description:
          'AI agents prospect, qualify and schedule clients on WhatsApp 24/7. You only join in to welcome them and close the contract.',
      },
      hero: {
        tagline: 'Autonomous Vehicle Protection',
        title: 'Close More Vehicle Protection Contracts.',
        titleHighlight: 'On Autopilot.',
        description:
          'Our AI Agents prospect, qualify and schedule clients on your WhatsApp, 24 hours a day. You only join the conversation to welcome them and close the deal.',
        ctaLabel: 'I want live proof (15 min demo)',
      },
      problem: {
        title: 'Your operation is leaving',
        titleHighlight: 'money on the table',
        items: [
          'Does your SDR team spend the day on cold calls with an extremely low conversion rate?',
          'Do your Closers waste precious time with unqualified leads that will never close?',
          'How many follow-ups are forgotten and how many "no" could turn into "yes" with more persistence?',
          'Is the cost of maintaining a prospecting team (salaries, commissions, infrastructure) increasingly high and difficult to scale?',
        ],
        quote: "If you checked \"yes\" for any of these questions, you're not alone. But the solution has arrived.",
      },
      solution: {
        title: 'Hire a Digital Sales Team',
        titleHighlight: 'Tireless, Intelligent and Profitable',
        description:
          'Introducing AI Agents for Vehicle Protection. Digital salespeople who work 24/7, specifically trained for the market, chat, qualify, schedule and follow up — freeing your human team for what truly matters: relationship building and closing.',
        cards: [
          { title: '24/7 Active', description: 'Never misses a lead, regardless of the time.' },
          { title: 'Qualification', description: 'Filters out browsers and delivers only those ready to close.' },
          { title: 'Immediate Scale', description: 'Double your sales without doubling your team.' },
        ],
      },
      agents: {
        title: 'Build Your Autonomous Sales Operation',
        subtitle: 'We have the right agent for every stage of your sales funnel.',
        agents: [
          { title: 'AI SDR/BDR Agent', description: 'Sends messages and/or calls to your lead list, qualifies with key questions and schedules a conversation with a human closer only for hot leads. Result: a calendar full of hot leads, with zero prospecting effort.' },
          { title: 'AI Closer Agent', description: 'Performs automatic and persistent follow-ups, sends proposals, answers frequent questions and uses urgency triggers to encourage closing. Result: drastic increase in conversion rate and recovery of "lost" sales.' },
          { title: 'AI Support Agent', description: 'Responds 24/7 to common questions from your members (payment slips, how to request assistance, etc.), freeing your team for complex cases. Result: reduced support costs and increased customer satisfaction.' },
          { title: 'Custom Agents', description: 'Have a unique process? We develop a custom agent to automate any communication task in your company. Result: maximum efficiency and a definitive solution for your operational bottlenecks.' },
        ],
      },
      authority: {
        title: 'Cutting-Edge Technology Created by',
        titleHighlight: 'Sales Specialists',
        subtitle:
          'Bytewer was founded by specialists with over 10 years of field experience. We combine practical sales knowledge with cutting-edge AI to deliver sales with scale, predictability and low cost.',
        stats: [
          { label: 'Years of Sales Experience' },
          { label: 'Autonomous Operation' },
          { label: 'Cost per Lead' },
          { label: 'Increase in Closings' },
        ],
      },
      cta: {
        badge: "Let's talk?",
        title: 'Doubt? Then see with',
        titleHighlight: 'your own eyes.',
        description:
          'Schedule a 15-minute call and we will, in real time, configure and show you an agent working right in front of you. You will see exactly how it approaches, qualifies and schedules a client.',
        disclaimer: 'Quick demo, results-focused and no commitment.',
        channelLabel: 'Choose your preferred contact channel:',
      },
    },
  },
  {
    slug: 'juridico',
    solutionCardIcons: ['ShieldCheck', 'Lightbulb', 'TrendingUp'],
    agentIcons: ['Users', 'Repeat', 'MessageSquare'],
    statValues: ['10+', '24/7', '+80%', '+200'],
    pt: {
      title: 'Jurídico',
      seo: {
        title: 'Captação de Clientes para Escritórios de Advocacia | Bytewer',
        description:
          'Agentes de IA filtram, qualificam e agendam clientes para o seu escritório 24h por dia. Foque seu tempo apenas em retainers de alto potencial.',
      },
      hero: {
        tagline: 'Advocacia Digital e Autônoma',
        title: 'Conquiste Mais Clientes para seu Escritório.',
        titleHighlight: 'No Piloto Automático.',
        description:
          'Nossos Agentes de IA filtram curiosos, qualificam prospects e agendam consultas 24h por dia. Você dedica seu tempo apenas a clientes com real potencial de fechar um contrato de honorários.',
        ctaLabel: 'Quero a prova ao vivo (demo de 15 min)',
      },
      problem: {
        title: 'Seu escritório está perdendo clientes qualificados',
        titleHighlight: 'todos os dias',
        items: [
          'Sua equipe perde tempo precioso em atendimentos iniciais com pessoas que não têm perfil para se tornarem clientes?',
          'Você desperdiça horas em consultas com prospects que, no fim, nunca fecharão um contrato de honorários?',
          'Quantos potenciais clientes deixaram de responder e nunca mais foram contatados por falta de tempo para follow-up?',
          'O custo para atrair clientes está cada vez mais alto e com retorno sobre o investimento incerto?',
        ],
        quote:
          'Se você marcou "sim" para qualquer uma dessas perguntas, você não está sozinho. Mas a solução para otimizar sua captação chegou.',
      },
      solution: {
        title: 'Contrate uma Secretária Digital',
        titleHighlight: 'para sua Captação',
        description:
          'Apresentamos os Agentes de IA para o Setor Jurídico. Uma assistente que trabalha 24/7, faz o primeiro filtro de todos os contatos, qualifica cada um, agenda consultas apenas com os mais promissores e libera sua equipe para focar em atividades estratégicas que geram faturamento.',
        cards: [
          { title: 'Filtro 24/7', description: 'Não perca mais nenhum contato, independente do horário.' },
          { title: 'Qualificação Inteligente', description: 'Sua agenda apenas com clientes de alto potencial.' },
          { title: 'Otimização do Tempo', description: 'Sua equipe focada em atividades que geram honorários.' },
        ],
      },
      agents: {
        title: 'Monte sua Estrutura de Aquisição de Clientes Autônoma',
        subtitle: 'Temos o agente certo para cada etapa do seu processo de captação.',
        agents: [
          { title: 'Agente de Triagem e Qualificação', description: 'Realiza o filtro inicial com perguntas-chave (área do direito, urgência), identifica o perfil do cliente e agenda a consulta. Resultado: agenda cheia apenas com consultas de alto potencial.' },
          { title: 'Agente de Follow-up e Relacionamento', description: 'Envia lembretes da consulta, materiais sobre o escritório e faz follow-up estratégico com prospects que não fecharam na primeira conversa. Resultado: aumento expressivo na taxa de comparecimento e na conversão de honorários.' },
          { title: 'Agente de Atendimento Primário', description: 'Responde 24/7 a dúvidas comuns (endereço, horário, documentos iniciais). Resultado: equipe liberada de tarefas repetitivas para focar em atividades jurídicas e estratégicas.' },
        ],
      },
      authority: {
        title: 'Tecnologia de Ponta Criada por',
        titleHighlight: 'Especialistas em Eficiência',
        subtitle:
          'A Bytewer foi fundada por especialistas com mais de 10 anos em otimização de processos e automação. Nossa missão é trazer eficiência e escala para escritórios e profissionais do direito, permitindo que você foque no que faz de melhor: advogar.',
        stats: [
          { label: 'Anos de Experiência em Automação' },
          { label: 'Operação Autônoma' },
          { label: 'Consultas Qualificadas' },
          { label: 'Agendamentos Mensais' },
        ],
      },
      cta: {
        badge: 'Vamos conversar?',
        title: 'Duvida? Então veja com',
        titleHighlight: 'seus próprios olhos.',
        description:
          'Sabemos que no mundo jurídico, ver para crer é fundamental. Agende uma chamada de 15 minutos e veja, em tempo real, um agente qualificando um potencial cliente e agendando direto na sua agenda.',
        disclaimer: 'Consultoria assertiva, foco em resultados e sem compromisso.',
        channelLabel: 'Escolha seu canal de contato preferido:',
      },
    },
    en: {
      title: 'Legal',
      seo: {
        title: 'Win More Clients for Your Law Firm. On Autopilot. | Bytewer',
        description:
          'AI agents filter, qualify and schedule clients for your law firm 24/7. Spend your time only on prospects with real retainer potential.',
      },
      hero: {
        tagline: 'Digital and Autonomous Law Practice',
        title: 'Win More Clients for Your Law Firm.',
        titleHighlight: 'On Autopilot.',
        description:
          'Our AI Agents filter out browsers, qualify prospects and schedule consultations 24 hours a day. You dedicate your time only to clients with real potential to sign a retainer agreement.',
        ctaLabel: 'I want live proof (15 min demo)',
      },
      problem: {
        title: 'Your firm is losing qualified clients',
        titleHighlight: 'every single day',
        items: [
          "Does your team waste precious time on initial consultations with people who don't have the profile to become clients?",
          'Do you waste hours in meetings with prospects who, in the end, will never sign a retainer agreement?',
          'How many potential clients stopped responding and were never contacted again due to lack of time for follow-up?',
          'Is the cost of attracting clients (Google Ads, marketing agencies) increasingly high with uncertain ROI?',
        ],
        quote:
          "If you checked \"yes\" for any of these questions, you're not alone. But the solution to optimize your client acquisition has arrived.",
      },
      solution: {
        title: 'Hire a Digital Secretary',
        titleHighlight: 'for Your Client Acquisition',
        description:
          'Introducing AI Agents for the Legal Sector. An assistant who works 24/7, doing the initial screening of every contact, qualifies each one, schedules consultations only with the most promising ones and frees your team to focus on strategic, revenue-generating activities.',
        cards: [
          { title: '24/7 Screening', description: 'Never miss another contact, regardless of the time.' },
          { title: 'Smart Qualification', description: 'Your calendar only with high-potential clients.' },
          { title: 'Time Optimization', description: 'Your team focused on activities that generate fees.' },
        ],
      },
      agents: {
        title: 'Build Your Autonomous Client Acquisition Structure',
        subtitle: 'We have the right agent for every stage of your acquisition process.',
        agents: [
          { title: 'Screening and Qualification Agent', description: 'Performs initial screening with key questions (area of law, urgency), identifies the client profile and schedules the consultation. Result: a calendar full of only high-potential consultations.' },
          { title: 'Follow-up and Relationship Agent', description: "Sends consultation reminders, firm materials and performs strategic follow-up with prospects who didn't close on the first conversation. Result: significant increase in consultation attendance rate and retainer proposal conversion." },
          { title: 'Primary Support Agent', description: 'Responds 24/7 to common questions (firm address, business hours, required initial documents). Result: your team freed from repetitive tasks to focus on legal and strategic activities.' },
        ],
      },
      authority: {
        title: 'Cutting-Edge Technology Created by',
        titleHighlight: 'Efficiency Specialists',
        subtitle:
          'Bytewer was founded by specialists with over 10 years in process optimization and automation. Our mission is to bring efficiency and scale to law firms and legal professionals, allowing you to focus on what you do best: practicing law.',
        stats: [
          { label: 'Years of Automation Experience' },
          { label: 'Autonomous Operation' },
          { label: 'Qualified Consultations' },
          { label: 'Monthly Appointments' },
        ],
      },
      cta: {
        badge: "Let's talk?",
        title: 'Doubt? Then see with',
        titleHighlight: 'your own eyes.',
        description:
          'We know that in the legal world, seeing is believing. Schedule a 15-minute call and watch, in real time, an agent qualifying a potential client and scheduling them directly on your calendar.',
        disclaimer: 'Assertive consulting, results-focused and no commitment.',
        channelLabel: 'Choose your preferred contact channel:',
      },
    },
  },
  {
    slug: 'clinicas',
    solutionCardIcons: ['Activity', 'ShieldCheck', 'Users'],
    agentIcons: ['Users', 'Repeat', 'MessageSquare'],
    statValues: ['10+', '24/7', '-70%', '+300'],
    pt: {
      title: 'Clínicas',
      seo: {
        title: 'Clínicas no Piloto Automático com Agentes de IA | Bytewer',
        description:
          'Agentes de IA agendam consultas e exames 24/7 e liberam sua recepção para focar no cuidado humanizado com o paciente presencial.',
      },
      hero: {
        tagline: 'Gestão Inteligente para Clínicas',
        title: 'Encha a Agenda da sua Clínica.',
        titleHighlight: 'No Piloto Automático.',
        description:
          'Nossos Agentes de IA agendam consultas e exames 24/7, liberando sua recepção para focar no que é mais importante: o cuidado humanizado com o paciente presente na clínica.',
        ctaLabel: 'Quero a prova ao vivo (demo de 15 min)',
      },
      problem: {
        title: 'Sua clínica está perdendo pacientes (e dinheiro)',
        titleHighlight: 'todos os dias',
        items: [
          'Sua equipe de recepção está sobrecarregada, tentando atender ao telefone, WhatsApp e os pacientes no balcão, tudo ao mesmo tempo?',
          'Quantos pacientes você perde por não conseguir atender ligações fora do horário comercial?',
          'Sua agenda sofre com um alto número de "furos" e cancelamentos de última hora, impactando seu faturamento?',
          'Quanto tempo sua equipe gasta respondendo sempre às mesmas perguntas sobre convênios, preparo de exames e endereço?',
        ],
        quote:
          'Se você marcou "sim" para qualquer uma dessas perguntas, você não está sozinho. Mas a solução para otimizar o atendimento e lotar sua agenda finalmente chegou.',
      },
      solution: {
        title: 'Contrate uma Recepcionista Digital',
        titleHighlight: 'Disponível 24h',
        description:
          'Apresentamos os Agentes de IA para Clínicas e Consultórios. Uma recepcionista que nunca dorme, não tira férias e atende dezenas de pacientes simultaneamente com total precisão. Ela qualifica, agenda, confirma e tira dúvidas, garantindo que nenhum paciente fique sem atendimento.',
        cards: [
          { title: 'Atendimento 24/7', description: 'Agende pacientes mesmo com a clínica fechada.' },
          { title: 'Redução de No-show', description: 'Diminua drasticamente os "furos" na agenda.' },
          { title: 'Recepção Otimizada', description: 'Sua equipe focada no atendimento presencial de qualidade.' },
        ],
      },
      agents: {
        title: 'Monte sua Estrutura de Agendamento Autônoma',
        subtitle: 'Temos o agente certo para cada etapa da jornada do seu paciente.',
        agents: [
          { title: 'Agente de Agendamento e Qualificação', description: 'Identifica a necessidade do paciente, verifica a cobertura do convênio e encontra o primeiro horário disponível, realizando o agendamento completo. Resultado: agenda otimizada e cheia, captando pacientes a qualquer hora.' },
          { title: 'Agente de Confirmação e Preparo', description: 'Envia lembretes via WhatsApp, confirma presença e envia instruções de preparo para exames. Resultado: redução drástica do no-show e pacientes mais preparados.' },
          { title: 'Agente de Informações 24h', description: 'Responde 24/7 a dúvidas sobre convênios aceitos, endereço, horários e preparo de exames. Resultado: recepção liberada para um atendimento mais humano e de excelência.' },
        ],
      },
      authority: {
        title: 'Tecnologia de Ponta Criada por',
        titleHighlight: 'Especialistas em Eficiência',
        subtitle:
          'A Bytewer foi fundada por especialistas com mais de 10 anos em otimização de processos e automação. Nossa missão é aplicar tecnologia para otimizar a gestão de clínicas, permitindo que médicos e suas equipes foquem na saúde dos seus pacientes.',
        stats: [
          { label: 'Anos de Experiência em Automação' },
          { label: 'Agendamento Autônomo' },
          { label: 'Taxa de No-show' },
          { label: 'Agendamentos Mensais' },
        ],
      },
      cta: {
        badge: 'Vamos conversar?',
        title: 'Duvida? Então veja com',
        titleHighlight: 'seus próprios olhos.',
        description:
          'Agende uma chamada de 15 minutos e veja, em tempo real, um agente agendando uma consulta para um novo paciente, verificando o convênio e enviando a confirmação — tudo em menos de 2 minutos.',
        disclaimer: 'Demonstração rápida, foco em resultados e sem compromisso.',
        channelLabel: 'Escolha seu canal de contato preferido:',
      },
    },
    en: {
      title: 'Clinics',
      seo: {
        title: "Fill Your Clinic's Schedule. On Autopilot. | Bytewer",
        description:
          'AI agents schedule appointments and exams 24/7, freeing your reception to focus on humanized care for in-person patients.',
      },
      hero: {
        tagline: 'Intelligent Clinic Management',
        title: "Fill Your Clinic's Schedule.",
        titleHighlight: 'On Autopilot.',
        description:
          'Our AI Agents schedule appointments and exams 24/7, freeing your reception to focus on what matters most: humanized care for the patient present at the clinic.',
        ctaLabel: 'I want live proof (15 min demo)',
      },
      problem: {
        title: 'Your clinic is losing patients (and money)',
        titleHighlight: 'every single day',
        items: [
          'Is your reception team overwhelmed, trying to answer the phone, WhatsApp and patients at the counter, all at the same time?',
          'How many patients do you lose by not being able to answer calls outside business hours?',
          'Does your schedule suffer from a high number of no-shows and last-minute cancellations, directly impacting your revenue?',
          'How much time does your team spend always answering the same questions about insurance, exam preparation and address?',
        ],
        quote:
          "If you checked \"yes\" for any of these questions, you're not alone. But the solution to optimize your service and fill your schedule has finally arrived.",
      },
      solution: {
        title: 'Hire a Digital Receptionist',
        titleHighlight: 'Available 24/7',
        description:
          'Introducing AI Agents for Clinics and Medical Offices. A receptionist who never sleeps, never takes vacation and serves dozens of patients simultaneously with total precision. She qualifies, schedules, confirms and answers questions, ensuring no patient goes unserved.',
        cards: [
          { title: '24/7 Service', description: 'Schedule patients even when the clinic is closed.' },
          { title: 'No-show Reduction', description: 'Drastically reduce schedule gaps.' },
          { title: 'Optimized Reception', description: 'Your team focused on quality in-person care.' },
        ],
      },
      agents: {
        title: 'Build Your Autonomous Patient Scheduling Structure',
        subtitle: "We have the right agent for every stage of your patient's journey.",
        agents: [
          { title: 'Scheduling and Qualification Agent', description: "Identifies the patient's need, verifies insurance coverage and finds the first available slot, completing the full scheduling. Result: an always optimized and full schedule, capturing patients at any time of day." },
          { title: 'Confirmation and Preparation Agent', description: 'Sends automatic reminders via WhatsApp, actively confirms attendance and sends exam preparation instructions. Result: drastic reduction in no-show rate and patients who arrive more prepared.' },
          { title: '24h Information Agent', description: 'Responds 24/7 to questions about accepted insurance, address, hours and specific exam preparations. Result: your reception freed to offer more humane and excellent care to patients at the clinic.' },
        ],
      },
      authority: {
        title: 'Cutting-Edge Technology Created by',
        titleHighlight: 'Efficiency Specialists',
        subtitle:
          'Bytewer was founded by specialists with over 10 years in process optimization and automation. Our mission is to apply technology to optimize clinic management, allowing doctors and their teams to focus on their patients’ health.',
        stats: [
          { label: 'Years of Automation Experience' },
          { label: 'Autonomous Scheduling' },
          { label: 'No-show Rate' },
          { label: 'Monthly Appointments' },
        ],
      },
      cta: {
        badge: "Let's talk?",
        title: 'Doubt? Then see with',
        titleHighlight: 'your own eyes.',
        description:
          'Schedule a 15-minute call and watch, in real time, an agent scheduling an appointment for a new patient, verifying the insurance and sending the confirmation — all in less than 2 minutes.',
        disclaimer: 'Quick demo, results-focused and no commitment.',
        channelLabel: 'Choose your preferred contact channel:',
      },
    },
  },
]
