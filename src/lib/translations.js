export const TRANSLATIONS = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      why_us: "Por qué elegirnos",
      portfolio: "Portafolio",
      about: "Sobre Nosotros",
      testimonials: "Testimonios",
      contact: "Contacto",
    },
    cta: { projects: "Ver Proyectos", talk: "Hablemos" },
     hero: {
        title: "Desarrollo Web + Marketing Digital",
        subtitle_phrases: [
          "Sitios ultrarrápidos",
          "Campañas que convierten",
          "Automatización inteligente",
        ],
        description:
          "Transformamos ideas en experiencias digitales de alto impacto. Fusionamos ingeniería de software robusta con estrategias de marketing creativas para escalar tu negocio.",
        successMessage: "Email enviado correctamente. Te contactaremos pronto.",
        errorMessage: "Error al enviar el email. Por favor, inténtalo de nuevo.",
        badge: "Transformamos tu presencia digital",
        freeAudit: "Audit gratuito incluido",
      },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones integrales para la era digital",
      toggle_engineering: "Ingeniería",
      toggle_creativity: "Creatividad",
      web: {
        title: "Desarrollo Web & Apps",
        description:
          "Creamos sitios web de alto rendimiento, aplicaciones móviles nativas y software de escritorio escalable.",
        benefits: [
          "Diseño Responsive & Mobile-First",
          "Aplicaciones iOS/Android & Desktop",
          "Arquitectura Escalable & Segura",
        ],
      },
      marketing: {
        title: "Marketing Digital & SEO",
        description:
          "Estrategias data-driven para maximizar tu visibilidad, tráfico y conversiones en todos los canales.",
        benefits: [
          "Posicionamiento SEO Técnico",
          "Publicidad Programática (Ads)",
          "Content Marketing & Branding",
        ],
      },
      growth: {
        title: "Automatización & Estrategia",
        description:
          "Optimizamos tus procesos de negocio con IA y flujos de trabajo automatizados para ahorrar tiempo y costes.",
        benefits: [
          "Automatización de Procesos (RPA)",
          "Integración de Inteligencia Artificial",
          "Funnels de Venta Automatizados",
        ],
      },
    },
    why_us: {
      title: "Por qué elegirnos",
      subtitle: "Nuestra ventaja competitiva",
      items: [
        {
          title: "Experiencia Comprobada",
          desc: "Años entregando soluciones digitales complejas con éxito.",
        },
        {
          title: "Tecnología de Vanguardia",
          desc: "Stack moderno: React, AI, Cloud Computing.",
        },
        {
          title: "Enfoque en Resultados",
          desc: "No solo entregamos código, entregamos crecimiento.",
        },
        {
          title: "Soporte Premium",
          desc: "Atención personalizada y tiempos de respuesta rápidos.",
        },
      ],
      stats: [
        { value: "50+", label: "Proyectos Exitosos" },
        { value: "98%", label: "Satisfacción Cliente" },
        { value: "200%", label: "Promedio ROI" },
        { value: "24/7", label: "Soporte Crítico" },
      ],
    },
    portfolio: {
      title: "Casos de Éxito",
      subtitle: "Resultados reales para clientes reales",
      filters: ["Todos", "Web", "Marketing", "Diseño"],
      metric_sample: "Load time < 1s",
    },
    about: {
      title: "Nuestra Firma",
      subtitle: "Ingeniería digital y estrategia de alto nivel",
      description:
        "Sierra Esperanza Creations se consolida como un socio tecnológico estratégico para empresas que buscan escalar. Fusionamos consultoría de negocios, desarrollo de software avanzado y marketing de precisión para construir ecosistemas digitales robustos.",
      vision: "Impulsar la transformación digital global mediante soluciones que combinan estética, funcionalidad y rentabilidad.",
      values: [
        {
          title: "Excelencia Técnica",
          desc: "Código limpio, arquitecturas escalables y estándares de industria.",
        },
        {
          title: "Transparencia Total",
          desc: "Comunicación clara y métricas en tiempo real.",
        },
        {
          title: "Innovación Continua",
          desc: "Adopción temprana de IA y nuevas tecnologías.",
        },
      ],
      leadership: {
        title: "Liderazgo Ejecutivo",
        founders: [
          {
            name: "Adrian Castro Sierra",
            img:"/public/adrian.avif",
            role: "Chief Marketing Officer (CMO)",
            bio: "Estratega digital con enfoque en crecimiento exponencial y automatización.",
            github:"https://github.com/kastro0005",
            linkedin:"https://www.linkedin.com/in/adrian-c-sierra-082326280",
          },
          {
            name: "Ariel Chacon Artola",
            img:"/public/ariel.avif",
            role: "Chief Technology Officer (CTO)",
            bio: "Arquitecto de software especializado en sistemas distribuidos y UX.",
            github:"https://github.com/achacona1998",
            linkedin:"https://www.linkedin.com/in/ariel-chacon-artola-7a00bb2b4",
          },
        ],
      },
    },
    testimonials: {
      title: "Testimonios",
      subtitle: "Lo que dicen nuestros clientes",
      items: [
        {
          text: "Sierra Esperanza transformó completamente nuestra presencia digital. Las ventas aumentaron un 150% en el primer trimestre.",
          author: "María González",
          role: "CEO, TechStart",
        },
        {
          text: "La atención al detalle y la calidad del código son excepcionales. Nuestro sitio carga en milisegundos.",
          author: "Carlos Rodríguez",
          role: "CTO, InmoGroup",
        },
        {
          text: "Su estrategia de marketing nos posicionó como líderes en el mercado local en tiempo récord.",
          author: "Ana López",
          role: "Directora de Marketing, BioVida",
        },
      ],
    },
    roi_calculator: {
      title: "Calculadora de ROI",
      subtitle: "Estima el retorno de tu inversión con nuestras estrategias",
      spend_label: "Inversión Mensual (Ads)",
      cpc_label: "Costo por Click (CPC)",
      conversion_label: "Tasa de Conversión",
      aov_label: "Valor Promedio de Venta",
      est_traffic: "Tráfico Estimado",
      est_leads: "Leads/Ventas",
      est_revenue: "Ingresos Estimados",
      disclaimer:
        "Cifras estimadas basadas en promedios de la industria. Los resultados reales pueden variar.",
    },
    multistep: {
      step1_title: "¿Cómo podemos ayudarte?",
      step1_subtitle: "Selecciona el servicio principal que necesitas",
      step2_title: "Detalles del Proyecto",
      step2_subtitle: "Cuéntanos un poco más sobre tus objetivos",
      step3_title: "Información de Contacto",
      step3_subtitle: "Déjanos tus datos para enviarte una propuesta",
      next: "Siguiente",
      back: "Atrás",
      submit: "Enviar Solicitud",
      success_title: "¡Solicitud Recibida!",
      success_desc:
        "Nuestro equipo analizará tu proyecto y te contactará en breve.",
      error: "Error al enviar. Por favor, inténtalo de nuevo.",
      fields: {
        web: "Desarrollo Web / App",
        marketing: "Marketing Digital / SEO",
        design: "Diseño / Branding",
        other: "Consultoría / Otro",
        budget: "Presupuesto Estimado",
        timeline: "Plazo Ideal",
        desc_placeholder: "Describe brevemente tu proyecto...",
        name: "Nombre Completo",
        email: "Correo Corporativo",
        phone: "Teléfono (Opcional)",
      },
    },
    contact: {
      title: "Empieza tu transformación",
      subtitle: "¿Listo para llevar tu negocio al siguiente nivel?",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      message: "Cuéntanos sobre tu proyecto",
      send: "Solicitar Asesoría",
      quick: "WhatsApp Directo",
    },
    lang_label: "ES",
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      why_us: "Why Choose Us",
      portfolio: "Portfolio",
      about: "About Us",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    cta: { projects: "View Projects", talk: "Let's Talk" },
     hero: {
        title: "Web Development + Digital Marketing",
        subtitle_phrases: [
          "Ultra-fast sites",
          "Campaigns that convert",
          "Smart automation",
        ],
        description:
          "We transform ideas into high-impact digital experiences. We fuse robust software engineering with creative marketing strategies to scale your business.",
        successMessage: "Email sent successfully. We'll contact you soon.",
        errorMessage: "Error sending email. Please try again.",
        badge: "We transform your digital presence",
        freeAudit: "Free audit included",
      },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive solutions for the digital age",
      toggle_engineering: "Engineering",
      toggle_creativity: "Creativity",
      web: {
        title: "Web & App Development",
        description:
          "We create high-performance websites, native mobile applications, and scalable desktop software.",
        benefits: [
          "Responsive & Mobile-First Design",
          "iOS/Android & Desktop Apps",
          "Scalable & Secure Architecture",
        ],
      },
      marketing: {
        title: "Digital Marketing & SEO",
        description:
          "Data-driven strategies to maximize your visibility, traffic, and conversions across all channels.",
        benefits: [
          "Technical SEO Positioning",
          "Programmatic Advertising (Ads)",
          "Content Marketing & Branding",
        ],
      },
      growth: {
        title: "Automation & Strategy",
        description:
          "We optimize your business processes with AI and automated workflows to save time and costs.",
        benefits: [
          "Process Automation (RPA)",
          "Artificial Intelligence Integration",
          "Automated Sales Funnels",
        ],
      },
    },
    why_us: {
      title: "Why Choose Us",
      subtitle: "Our competitive advantage",
      items: [
        {
          title: "Proven Experience",
          desc: "Years delivering complex digital solutions successfully.",
        },
        {
          title: "Cutting-edge Tech",
          desc: "Modern stack: React, AI, Cloud Computing.",
        },
        {
          title: "Results Focused",
          desc: "We don't just deliver code, we deliver growth.",
        },
        {
          title: "Premium Support",
          desc: "Personalized attention and fast response times.",
        },
      ],
      stats: [
        { value: "50+", label: "Successful Projects" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "200%", label: "Avg ROI" },
        { value: "24/7", label: "Critical Support" },
      ],
    },
    portfolio: {
      title: "Success Stories",
      subtitle: "Real results for real clients",
      filters: ["All", "Web", "Marketing", "Design"],
      metric_sample: "Load time < 1s",
    },
    about: {
      title: "Our Firm",
      subtitle: "Digital engineering and high-level strategy",
      description:
        "Sierra Esperanza Creations establishes itself as a strategic technology partner for companies looking to scale. We fuse business consulting, advanced software development, and precision marketing to build robust digital ecosystems.",
      vision:
        "To drive global digital transformation through solutions that combine aesthetics, functionality, and profitability.",
      values: [
        {
          title: "Technical Excellence",
          desc: "Clean code, scalable architectures, and industry standards.",
        },
        {
          title: "Total Transparency",
          desc: "Clear communication and real-time metrics.",
        },
        {
          title: "Continuous Innovation",
          desc: "Early adoption of AI and new technologies.",
        },
      ],
      leadership: {
        title: "Executive Leadership",
        founders: [
          {
            name: "Adrian",
            role: "Chief Marketing Officer (CMO)",
            bio: "Digital strategist focused on exponential growth and automation.",
          },
          {
            name: "Ariel",
            role: "Chief Technology Officer (CTO)",
            bio: "Software architect specialized in distributed systems and UX.",
          },
        ],
      },
    },
    testimonials: {
      title: "Testimonials",
      subtitle: "What our clients say",
      items: [
        {
          text: "Sierra Esperanza completely transformed our digital presence. Sales increased by 150% in the first quarter.",
          author: "Maria Gonzalez",
          role: "CEO, TechStart",
        },
        {
          text: "Attention to detail and code quality are exceptional. Our site loads in milliseconds.",
          author: "Carlos Rodriguez",
          role: "CTO, InmoGroup",
        },
        {
          text: "Their marketing strategy positioned us as leaders in the local market in record time.",
          author: "Ana Lopez",
          role: "Marketing Director, BioVida",
        },
      ],
    },
    roi_calculator: {
      title: "ROI Calculator",
      subtitle: "Estimate your return on investment with our strategies",
      spend_label: "Monthly Ad Spend",
      cpc_label: "Cost Per Click (CPC)",
      conversion_label: "Conversion Rate",
      aov_label: "Average Order Value",
      est_traffic: "Est. Traffic",
      est_leads: "Leads/Sales",
      est_revenue: "Est. Revenue",
      disclaimer:
        "Figures are estimates based on industry averages. Actual results may vary.",
    },
    multistep: {
      step1_title: "How can we help you?",
      step1_subtitle: "Select the main service you need",
      step2_title: "Project Details",
      step2_subtitle: "Tell us a bit more about your goals",
      step3_title: "Contact Information",
      step3_subtitle: "Leave your details to receive a proposal",
      next: "Next",
      back: "Back",
      submit: "Submit Request",
      success_title: "Request Received!",
      success_desc:
        "Our team will analyze your project and contact you shortly.",
      error: "Error sending. Please try again.",
      fields: {
        web: "Web Development / App",
        marketing: "Digital Marketing / SEO",
        design: "Design / Branding",
        other: "Consulting / Other",
        budget: "Estimated Budget",
        timeline: "Ideal Timeline",
        desc_placeholder: "Briefly describe your project...",
        name: "Full Name",
        email: "Business Email",
        phone: "Phone (Optional)",
      },
    },
    contact: {
      title: "Start Your Transformation",
      subtitle: "Ready to take your business to the next level?",
      name: "Full Name",
      email: "Email Address",
      message: "Tell us about your project",
      send: "Request Consultation",
      quick: "Direct WhatsApp",
    },
    lang_label: "EN",
  },
};
