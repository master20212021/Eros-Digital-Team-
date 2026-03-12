const languageButtons = [...document.querySelectorAll('.lang-btn')];
const revealItems = document.querySelectorAll('.section, .hero-copy, .hero-panel, .cta-ribbon');
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobileNav');
const languageStorageKey = 'edt-language';
const whatsappNumber = '19294033746';

const metaRefs = {
  title: document.getElementById('pageTitle'),
  description: document.getElementById('metaDescription'),
  ogTitle: document.getElementById('ogTitle'),
  ogDescription: document.getElementById('ogDescription'),
  twitterTitle: document.getElementById('twitterTitle'),
  twitterDescription: document.getElementById('twitterDescription'),
};

const translations = {
  es: {
    meta: {
      title: 'Eros Digital Team | Páginas, ayuda automática y publicidad para negocios',
      description: 'Creamos páginas, respuestas automáticas, publicidad y herramientas útiles para que tu negocio se vea mejor, responda mejor y venda mejor.',
      ogTitle: 'Eros Digital Team | Páginas, ayuda automática y publicidad',
      ogDescription: 'Creamos páginas, respuestas automáticas, publicidad y herramientas útiles para negocios que quieren crecer con más orden.',
      twitterTitle: 'Eros Digital Team | Páginas, ayuda automática y publicidad',
      twitterDescription: 'Ayudamos a negocios a verse mejor, responder mejor y vender mejor con páginas, publicidad y procesos más claros.',
      menuAria: 'Abrir menu',
      mobileNavAria: 'Navegación móvil',
      brandAria: 'Eros Digital Team inicio',
      langSwitchAria: 'Selector de idioma',
      mobileLangSwitchAria: 'Selector de idioma móvil',
      heroStatsAria: 'Indicadores principales',
      wizardProgressAria: 'Progreso del diagnóstico',
    },
    nav: {
      services: 'Servicios',
      process: 'Proceso',
      results: 'Resultados',
      cases: 'Casos',
      stack: 'Extras',
      faq: 'FAQ',
      contact: 'Contacto',
      domain: 'Dominio activo',
      mobileDomain: 'Ver dominio',
    },
    hero: {
      eyebrow: 'Páginas, ayuda automática y ventas más claras.',
      title: 'Haz que tu negocio se vea claro, premium y listo para vender.',
      text: 'Ordenamos tu presencia digital, tus respuestas y tu embudo para que se vea serio y convierta mejor en web, Instagram y WhatsApp.',
      primary: 'Empezar diagnostico',
      secondary: 'Hablar con nosotros',
      brandTagline: 'Soluciones para negocios',
      stats: ['Atención automática', 'Imagen y ventas', 'Orden y seguimiento'],
    },
    wizard: {
      eyebrow: 'Diagnóstico guiado',
      introTitle: 'Cuéntanos tu nicho y qué quieres lograr para decirte por dónde arrancar.',
      introText: 'Primero elegimos el tipo de negocio. Luego marcas una o varias metas y te damos una recomendación clara.',
      selections: {
        niche: 'Nicho',
        goal: 'Metas',
        pending: 'Pendiente',
      },
      resultTag: 'Diagnóstico listo',
      resultTitleFallback: 'Solución recomendada',
      resultTextFallback: 'Completa el diagnóstico para ver una recomendación personalizada.',
      resultPackageLabel: 'Paquete sugerido',
      resultPriorityLabel: 'Enfoque principal',
      resultPackageFallback: 'Pendiente',
      resultPriorityFallback: 'Pendiente',
      resultPrimary: 'Llenar formulario',
      resultWhatsApp: 'Hablar por WhatsApp',
      resultReset: 'Empezar de nuevo',
      continue: 'Ver recomendación',
      goalsHint: 'Puedes marcar una o varias opciones.',
      contactPrompt: 'Si esta ruta te hace sentido para tu {niche}, baja al formulario y te preparamos una propuesta aterrizada a tu caso.',
      closeMap: {
        leads: 'La prioridad es abrir un canal claro para captar y atender oportunidades sin que se te enfríen.',
        automation: 'La prioridad es responder más rápido y quitar carga manual del equipo.',
        retention: 'La prioridad es reactivar clientes y aumentar la recompra.',
        operations: 'La prioridad es ordenar procesos y darle más control al negocio.',
        website: 'La prioridad es tener una presencia más seria, clara y lista para convertir.',
      },
      steps: [
        {
          key: 'niche',
          label: 'Paso 1',
          question: '¿Qué tipo de negocio quieres automatizar o vender mejor?',
          options: [
            { id: 'restaurant', title: 'Restaurante o comida', text: 'Pedidos y reservas.' },
            { id: 'tax', title: 'Taxes, fiscal o contable', text: 'Clientes y citas.' },
            { id: 'retail', title: 'Tienda o retail', text: 'Catalogo y recompra.' },
            { id: 'beauty', title: 'Peluquería, barbería o spa', text: 'Reservas y recurrencia.' },
            { id: 'clinic', title: 'Clínica o salud', text: 'Pacientes y agenda.' },
            { id: 'ecommerce', title: 'Ecommerce', text: 'Ventas y seguimiento.' },
            { id: 'real-estate', title: 'Inmobiliaria', text: 'Leads y filtro.' },
            { id: 'education', title: 'Academia, curso o formación', text: 'Inscripciones y seguimiento.' },
            { id: 'professional', title: 'Despacho, agencia o servicio profesional', text: 'Consultas y cierres.' },
            { id: 'local-service', title: 'Servicio local', text: 'WhatsApp y reservas.' },
            { id: 'other', title: 'Otro negocio', text: 'Lo ajustamos a tu caso.' },
          ],
        },
        {
          key: 'goals',
          label: 'Paso 2',
          question: '¿Qué te gustaría lograr primero? Puedes elegir varias.',
          options: [
            { id: 'leads', title: 'Conseguir mas clientes', text: 'Mas oportunidades.' },
            { id: 'automation', title: 'Automatizar atención', text: 'Menos trabajo manual.' },
            { id: 'retention', title: 'Hacer que vuelvan', text: 'Mas recompra.' },
            { id: 'operations', title: 'Ordenar la operación', text: 'Menos caos interno.' },
            { id: 'website', title: 'Tener mejor presencia digital', text: 'Imagen mas fuerte.' },
          ],
        },
      ],
      routes: {
        leads: {
          title: 'Sistema para atraer más clientes y cerrar mejor',
          bullets: ['Página pensada para que te escriban o te compren', 'Publicidad o llegada local conectada a tu lista de contactos', 'Seguimiento inicial para no dejar enfriar a nadie'],
        },
        automation: {
          title: 'Sistema para responder sin tanto trabajo manual',
          bullets: ['WhatsApp, formularios o chat con respuestas guiadas', 'Filtro de consultas y envío al área correcta', 'Seguimiento sin depender de responder todo a mano'],
        },
        retention: {
          title: 'Sistema para que tus clientes vuelvan',
          bullets: ['Lista de clientes bien ordenada', 'Mensajes para volver a activar clientes por WhatsApp o correo', 'Ofertas y recordatorios segun el tipo de cliente'],
        },
        operations: {
          title: 'Sistema para ordenar el trabajo del negocio',
          bullets: ['Revision del paso a paso de venta o atencion', 'Conexion entre canales, lista de clientes y reportes', 'Ayudas automaticas internas para reducir carga manual'],
        },
        website: {
          title: 'Página clara para dar confianza y vender mejor',
          bullets: ['Oferta clara y ordenada', 'Diseño cuidado para dar confianza y ayudar a vender', 'Formulario, botones y medición listos para crecer'],
        },
      },
      routeOverrides: {
        restaurant: {
          leads: {
            title: 'Sistema de pedidos directos para restaurante',
            bullets: ['Landing o menu digital orientado a conversion', 'Campañas locales para mover pedidos o reservas', 'CRM ligero con seguimiento para promociones y recompra'],
          },
          automation: {
            title: 'Sistema de atencion automatizada por WhatsApp',
            bullets: ['Respuestas automaticas para menu, horarios y reservas', 'Filtro de pedidos o consultas antes de pasar a humano', 'Confirmaciones y seguimiento sin perder conversaciones'],
          },
          retention: {
            title: 'Sistema de recompra para clientes de comida',
            bullets: ['Base de clientes segmentada por consumo o frecuencia', 'Campañas de reactivacion para dias flojos y fines de semana', 'Promociones automatizadas para subir recurrencia y ticket'],
          },
          operations: {
            title: 'Sistema operativo para pedidos y seguimiento',
            bullets: ['Flujo conectado entre pedidos, equipo y seguimiento', 'Integraciones simples con hojas, CRM o panel interno', 'Menos carga manual y mas control sobre demanda'],
          },
          website: {
            title: 'Web premium para vender comida sin friccion',
            bullets: ['Menu claro, CTA visibles y estructura para pedidos', 'Visuales premium para elevar confianza y deseo', 'Base lista para SEO local, reservas o delivery propio'],
          },
        },
        tax: {
          leads: {
            title: 'Sistema de captacion para taxes y asesoria fiscal',
            bullets: ['Landing clara por servicio fiscal o contable', 'Campañas para declaraciones, citas o consultas', 'Seguimiento automatizado para no perder interesados en temporada'],
          },
          automation: {
            title: 'Sistema de atencion y prefiltrado para asesoria',
            bullets: ['Formulario o WhatsApp para clasificar consultas', 'Recordatorios de documentos y citas', 'Seguimiento automatico para cerrar clientes potenciales'],
          },
          retention: {
            title: 'Sistema de renovacion y recurrencia fiscal',
            bullets: ['Recordatorios de fechas y obligaciones', 'Campañas para renovaciones o servicios recurrentes', 'Seguimiento por segmentos según tipo de cliente'],
          },
          operations: {
            title: 'Sistema operativo para despacho fiscal',
            bullets: ['Flujo de leads, citas y documentacion mas ordenado', 'Integraciones entre formularios, CRM y hojas de trabajo', 'Menos tareas repetidas y mejor control del pipeline'],
          },
          website: {
            title: 'Web profesional para captar clientes fiscales',
            bullets: ['Oferta clara por servicio y tipo de cliente', 'Confianza visual para consultas y citas', 'Base lista para formulario, agenda y seguimiento'],
          },
        },
        retail: {
          leads: {
            title: 'Sistema de captacion para tienda o retail',
            bullets: ['Promociones y catálogos con CTA claros', 'Campañas para atraer tráfico al punto de venta o WhatsApp', 'Seguimiento de interesados y clientes frecuentes'],
          },
          automation: {
            title: 'Sistema de atencion automatizada para retail',
            bullets: ['Respuestas para stock, horarios y productos', 'Filtro rapido por tipo de consulta o compra', 'Seguimiento de conversaciones sin carga manual'],
          },
          retention: {
            title: 'Sistema de recompra para tienda',
            bullets: ['Campanas para clientes frecuentes y promociones', 'Recordatorios y reactivacion por WhatsApp o email', 'Segmentacion por tipo de compra o recurrencia'],
          },
          operations: {
            title: 'Sistema operativo para retail en crecimiento',
            bullets: ['Procesos mas claros entre venta, consulta y seguimiento', 'Integraciones simples para catalogo, leads y reportes', 'Mas control comercial con menos desorden'],
          },
          website: {
            title: 'Web o catalogo premium para retail',
            bullets: ['Presentación clara de productos y promociones', 'CTA visibles para compra, consulta o visita', 'Base lista para campañas y captación local o digital'],
          },
        },
        beauty: {
          leads: {
            title: 'Sistema de reservas y captacion para belleza',
            bullets: ['Landing o perfil con CTA directo a reserva', 'Campañas para citas, promos o nuevos servicios', 'Seguimiento para convertir interés en agenda'],
          },
          automation: {
            title: 'Sistema de atencion automatizada para peluqueria o spa',
            bullets: ['Respuestas para horarios, precios y disponibilidad', 'Recordatorios automaticos de cita', 'Seguimiento para cerrar reservas sin perder conversaciones'],
          },
          retention: {
            title: 'Sistema de recurrencia para belleza y spa',
            bullets: ['Promociones segmentadas por servicio o frecuencia', 'Recordatorios para volver en el momento correcto', 'Campañas para activar clientes dormidos'],
          },
          operations: {
            title: 'Sistema operativo para agenda y seguimiento',
            bullets: ['Orden entre reservas, equipo y seguimiento', 'Integraciones simples para agenda y base de clientes', 'Menos carga manual y menos huecos sin llenar'],
          },
          website: {
            title: 'Web premium para peluqueria, barberia o spa',
            bullets: ['Visual fuerte con CTA claros a reserva', 'Confianza para vender paquetes o servicios', 'Base lista para WhatsApp, formularios y promociones'],
          },
        },
        clinic: {
          leads: {
            title: 'Sistema para atraer pacientes con mas confianza',
            bullets: ['Pagina pensada para dar confianza y generar consultas', 'Campañas para tratamientos, consultas o primera visita', 'Seguimiento automatico para no perder personas interesadas'],
          },
          automation: {
            title: 'Sistema de agenda y respuestas automatizadas',
            bullets: ['Precalificacion de consultas antes de agendar', 'Respuestas automaticas para disponibilidad y servicios', 'Recordatorios y seguimiento para reducir fuga de citas'],
          },
          retention: {
            title: 'Sistema de seguimiento y recurrencia para pacientes',
            bullets: ['Recordatorios de control o continuidad', 'Campañas segmentadas por tratamiento o interes', 'Base ordenada para trabajar recurrencia con criterio'],
          },
          operations: {
            title: 'Sistema interno para agenda y seguimiento',
            bullets: ['Proceso claro entre llegada de pacientes, agenda y atencion', 'Conexion entre formularios, lista de clientes y reportes', 'Mas visibilidad del proceso sin depender de tanto manejo manual'],
          },
          website: {
            title: 'Pagina profesional para salud y confianza',
            bullets: ['Mensaje claro, buena imagen y enfoque medico', 'Botones y formularios pensados para captar pacientes', 'Base lista para aparecer mejor en Google y hacer campañas'],
          },
        },
        'real-estate': {
          leads: {
            title: 'Sistema para atraer interesados en inmuebles',
            bullets: ['Pagina por propiedad, zona o tipo de cliente', 'Llegada de consultas conectada a tu lista de clientes', 'Seguimiento inicial para no perder interesados listos para avanzar'],
          },
          automation: {
            title: 'Sistema automatizado de atencion para inmobiliaria',
            bullets: ['Respuestas rapidas para propiedades, ubicacion y rango', 'Filtro de interesados antes de pasar al asesor', 'Seguimiento automatico para visitas y consultas'],
          },
          retention: {
            title: 'Sistema de seguimiento para interesados y referidos',
            bullets: ['Lista ordenada por tipo de comprador o inversionista', 'Mensajes para retomar contactos frios', 'Campañas para nuevas oportunidades y referidos'],
          },
          operations: {
            title: 'Sistema para ordenar visitas y cierres',
            bullets: ['Paso a paso claro entre interesado, visita y cierre', 'Conexion entre formularios, lista de clientes y equipo', 'Menos fugas y mas control del proceso'],
          },
          website: {
            title: 'Pagina inmobiliaria clara para atraer mas consultas',
            bullets: ['Mensaje claro por zona, propiedad o servicio', 'Botones y formularios para captar consultas reales', 'Base lista para campañas y seguimiento'],
          },
        },
        'local-service': {
          leads: {
            title: 'Sistema para atraer clientes a tu negocio local',
            bullets: ['Pagina pensada para llamadas, WhatsApp o reservas', 'Campañas locales y presencia en Google para que te encuentren mas', 'Seguimiento inicial para cerrar mas rapido'],
          },
          automation: {
            title: 'Sistema de respuestas y reservas automatizadas',
            bullets: ['WhatsApp o formularios con respuestas guiadas', 'Calificacion basica antes de contacto humano', 'Seguimiento para reservas, cotizaciones o visitas'],
          },
          retention: {
            title: 'Sistema de recompra y reactivacion local',
            bullets: ['Base de clientes ordenada por frecuencia o servicio', 'Campañas para reactivar clientes antiguos', 'Promociones y recordatorios para aumentar recurrencia'],
          },
          operations: {
            title: 'Sistema para ordenar un negocio local en crecimiento',
            bullets: ['Proceso mas claro entre lead, agenda y servicio', 'Integraciones simples para reducir tareas manuales', 'Mas control de demanda, agenda y seguimiento'],
          },
          website: {
            title: 'Pagina clara para un servicio local que quiere vender mas',
            bullets: ['Propuesta clara y botones visibles desde el inicio', 'Diseño orientado a confianza y accion rapida', 'Base lista para aparecer mejor en Google, hacer anuncios y tomar reservas'],
          },
        },
        ecommerce: {
          leads: {
            title: 'Sistema para vender mas en ecommerce',
            bullets: ['Pagina o fichas de producto pensadas para vender mejor', 'Publicidad y recordatorios para traer de vuelta a quien ya mostro interes', 'Seguimiento para recuperar personas con intencion de compra'],
          },
          automation: {
            title: 'Sistema automatizado de atencion y post-compra',
            bullets: ['Respuestas automaticas para estado de pedido y dudas', 'Secuencias para carrito, seguimiento y soporte', 'Menos tickets manuales y mejor experiencia de compra'],
          },
          retention: {
            title: 'Sistema para aumentar la recompra en ecommerce',
            bullets: ['Mensajes automaticos para recompra y compra adicional', 'Campañas segun como compra cada cliente', 'Recuperacion de clientes dormidos con ofertas utiles'],
          },
          operations: {
            title: 'Sistema para ordenar un ecommerce en crecimiento',
            bullets: ['Conexion entre pedidos, publicidad y reportes', 'Paneles o pasos de trabajo para reducir tareas repetidas', 'Mas claridad del negocio sin revisar todo a mano'],
          },
          website: {
            title: 'Tienda online mas clara para vender mejor',
            bullets: ['Producto, oferta y botones mas claros', 'Visuales y estructura para que menos gente abandone la compra', 'Base lista para campañas, medicion y crecimiento'],
          },
        },
      },
      routeContext: {
        restaurant: 'En un negocio de comida, normalmente conviene trabajar pedidos, reservas y recompra con más orden.',
        tax: 'En taxes o asesoria fiscal, suele hacer falta captar mejor, organizar citas y dar seguimiento sin perder clientes.',
        retail: 'En retail o tienda, normalmente el dinero está en mover promociones, responder rápido y hacer que la gente regrese.',
        beauty: 'En belleza, barberia o spa, lo importante es llenar agenda y mantener la frecuencia de los clientes.',
        clinic: 'En salud, pesa mucho la confianza, la captacion bien filtrada y el seguimiento de agenda.',
        ecommerce: 'En ecommerce, normalmente toca mejorar conversion, seguimiento y recompra.',
        'real-estate': 'En inmobiliaria, suele hacer falta calificar mejor y trabajar seguimiento sin dejar leads tirados.',
        education: 'En academias o formacion, normalmente conviene captar interesados, filtrarlos y llevarlos al cierre.',
        professional: 'En servicios profesionales, funciona mejor cuando consultas, propuestas y seguimiento están bien ordenados.',
        'local-service': 'En servicios locales, lo que más mueve el negocio suele ser responder rápido y cerrar mejor.',
        other: 'En este tipo de negocio, la mejor ruta depende de lo que quieras mover primero.',
      },
      briefLabel: 'Diagnostico realizado',
    },
    services: {
      eyebrow: 'Servicios principales',
      title: 'Una agencia para construir presencia, automatizar operación y acelerar ventas.',
      cards: [
        ['Páginas para vender mejor', 'Creamos páginas claras, rápidas y bien pensadas para que la gente entienda tu negocio y te contacte.'],
        ['Respuestas automáticas', 'Te ayudamos a responder mensajes, ordenar consultas y ahorrar tiempo en tareas repetidas.'],
        ['Publicidad para atraer clientes', 'Hacemos campañas y piezas para que lleguen mas personas interesadas en tu negocio.'],
        ['Contenido y redes sociales', 'Te ayudamos a mantener tus redes activas con contenido más ordenado y constante.'],
        ['Herramientas para tu negocio', 'Creamos soluciones útiles para organizar mejor el trabajo o atender mejor a tus clientes.'],
        ['Imagen y comunicación', 'Te ayudamos a que tu marca se vea más seria, más clara y más confiable.'],
      ],
    },
    why: {
      eyebrow: 'Por qué Eros Digital Team',
      title: 'No hacemos cosas sueltas. Armamos una solución más completa para que tu negocio avance de verdad.',
      cards: [
        ['Todo con una misma idea', 'Tu imagen, tu página, tus anuncios y tu atención pueden trabajar en la misma dirección.'],
        ['Se ve bien y ayuda a vender', 'La idea no es solo que se vea bonito, sino que ayude a generar confianza y mover clientes.'],
        ['Menos trabajo repetido', 'Aplicamos automatizaciones cuando realmente te ayudan a ahorrar tiempo y responder mejor.'],
        ['Pensado para crecer', 'Dejamos una base lista para que luego puedas sumar más acciones sin empezar de cero.'],
      ],
    },
    process: {
      eyebrow: 'Proceso',
      title: 'Trabajamos paso a paso, sin enredos.',
      cards: [
        ['Revisamos tu caso', 'Vemos qué vendes, qué te está frenando y qué sería lo más útil para tu negocio ahora mismo.'],
        ['Te proponemos una ruta', 'Te mostramos una idea clara de lo que conviene hacer primero y cómo se vería la solución.'],
        ['Lo ponemos en marcha', 'Creamos las piezas, la página, los mensajes o la automatización según lo que se necesite.'],
        ['Ajustamos lo necesario', 'Vemos qué funciona mejor y hacemos mejoras para que el resultado sea más sólido.'],
      ],
    },
    results: {
      eyebrow: 'Lo que buscamos mejorar',
      title: 'La meta es simple: que te escriban más, que respondas mejor y que cierres más oportunidades.',
      cards: [
        ['Más contactos', 'Más personas interesadas', 'Creamos puntos de contacto para que te lleguen más consultas con intención real.'],
        ['Menos desorden', 'Menos trabajo manual', 'Ordenamos mensajes, seguimientos y tareas repetidas para que el negocio se mueva mejor.'],
        ['Mejor imagen', 'Más confianza al verte', 'Hacemos que tu negocio se vea más serio y más fácil de entender para nuevos clientes.'],
      ],
      proof: [
        ['Página + anuncios', 'Todo empuja al mismo objetivo'],
        ['Contenido + automatización', 'Más constancia con menos carga manual'],
        ['Imagen + ventas', 'Una presencia que ayuda a cerrar mejor'],
      ],
      proofAria: 'Beneficios clave',
    },
    stack: {
      eyebrow: 'Otras cosas que tambien hacemos',
      title: 'Si tu negocio lo necesita, tambien podemos ayudarte con esto.',
      helper: 'Toca una o varias opciones y las agregamos al formulario como tickets.',
      chips: ['Paginas de venta', 'Chat para atender clientes', 'Correos para seguimiento', 'Orden de clientes y mensajes', 'Reportes simples', 'Videos cortos', 'Seguimiento automatico', 'Mejor presencia en Google', 'Imagen de marca', 'Produccion de video', 'Campanas para recordar tu negocio', 'Conexion entre herramientas'],
    },
    cases: {
      eyebrow: 'Casos por vertical',
      title: 'Ejemplos de cómo llevamos una idea clara a acciones concretas según el tipo de negocio.',
      cards: [
        ['Restaurantes', 'Pedidos directos y clientes que vuelven', 'Menú digital, mensajes por WhatsApp y campañas locales para depender menos de terceros y mover más pedidos propios.', ['Menú o página para pedir', 'Mensajes para reactivar clientes', 'Seguimiento automático para reservas o pedidos']],
        ['Clínicas', 'Más consultas y agenda mejor ordenada', 'Página profesional, llegada de pacientes mejor filtrada y seguimiento automático para consultas o primera cita.', ['Formulario o filtro inicial', 'Agenda o contacto automático', 'Seguimiento para no perder pacientes']],
        ['Ecommerce', 'Más ventas y más recompra', 'Estructura más clara, mensajes automáticos y campañas para vender mejor, recuperar carritos y lograr que te vuelvan a comprar.', ['Página de producto mejor ordenada', 'Mensajes después de la compra', 'Campañas para recompra y recuperación']],
      ],
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Respuestas claras antes de empezar.',
      items: [
        ['¿Que hacen exactamente por mi negocio?', 'Te ayudamos a atraer mas clientes, responder mas rapido, verte mas profesional y organizar mejor tu negocio con paginas, automatizaciones, anuncios y procesos mas claros.'],
        ['¿Esto sirve si no entiendo nada de tecnologia?', 'Si. Nosotros aterrizamos todo de forma simple para que sepas que se va a hacer, por que se hace y como te puede ayudar a vender o trabajar mejor.'],
        ['¿Como se si esto me conviene?', 'Primero revisamos tu caso, tu tipo de negocio y lo que quieres lograr. Con eso te recomendamos una ruta clara, sin meterte cosas que no necesitas.'],
        ['¿Que pasa despues de llenar el formulario?', 'Te contactamos, revisamos lo que necesitas y te proponemos la opcion que mejor encaja con tu negocio, tu momento y tu presupuesto.'],
      ],
    },
    packages: {
      eyebrow: 'Formas de trabajar contigo',
      title: 'Te proponemos opciones claras según lo que hoy necesita tu negocio.',
      cards: [
        ['Inicio', 'Presencia clara', 'Para negocios que necesitan verse mejor y tener una página que explique bien lo que ofrecen.', ['Página o landing', 'Mensaje comercial base', 'Imagen más ordenada']],
        ['Crecimiento', 'Más clientes y seguimiento', 'Para negocios que quieren atraer más personas y responder mejor sin perder oportunidades.', ['Página y anuncios', 'Seguimiento de contactos', 'Mejoras para vender mejor']],
        ['Orden y ahorro de tiempo', 'Menos carga manual', 'Para negocios que ya venden y necesitan ordenar mejor el trabajo del día a día.', ['Respuestas automáticas', 'Conexión entre herramientas', 'Procesos más claros']],
      ],
    },
    launch: {
      eyebrow: 'Primer avance',
      title: 'Asi se ve una primera etapa cuando quieres moverte rapido y con una idea clara.',
      cards: [
        ['Semana 1', 'Orden y enfoque', 'Aterrizamos la oferta, lo que se va a comunicar y la ruta mas conveniente para empezar.'],
        ['Semana 2', 'Armado', 'Creamos la pagina, los textos, las piezas y las automatizaciones basicas si hacen falta.'],
        ['Semana 3', 'Salida y ajustes', 'Revisamos detalles, dejamos todo mejor presentado y afinamos lo mas importante.'],
      ],
      includesEyebrow: 'Puede incluir',
      includes: ['Texto principal de la oferta', 'Diseno de inicio y secciones clave', 'Formulario de contacto', 'Base para aparecer mejor en buscadores', 'Preparacion para publicar'],
    },
    contact: {
      eyebrow: 'Siguiente paso',
      title: 'Cuéntanos tu caso y te decimos por donde conviene empezar.',
      text: 'Si ya viste la ruta que mas te conviene, llena el formulario y te contactamos con una propuesta clara, sin vueltas y pensada para tu negocio.',
      pointsAria: 'Siguientes entregables',
      points: ['Entender bien tu negocio', 'Recomendar una ruta clara', 'Proponerte la mejor opcion para empezar'],
      email: 'erosdigitalteam@gmail.com',
      whatsapp: 'WhatsApp',
      openDomain: 'Abrir dominio',
      formEyebrow: 'Formulario',
      formTitle: 'Cuentanos que necesitas',
      formText: 'Puedes enviar una solicitud rapida con tickets o agregar contexto extra si ya sabes lo que quieres resolver.',
      labels: ['Nombre', 'Email', 'Empresa', 'Servicio principal (opcional)', 'Proyecto o detalle (opcional)'],
      placeholders: ['Ej. Maria Lopez', 'tu@empresa.com', 'Nombre de tu negocio', 'Selecciona una opcion', 'Opcional: agrega contexto extra si quieres.'],
      options: ['Pagina o landing', 'Publicidad para atraer clientes', 'Respuestas automaticas', 'Imagen y comunicacion', 'Herramienta o solucion interna'],
      submit: 'Enviar briefing',
      note: 'Puedes enviar solo nombre, email y tickets seleccionados. Si quieres, agrega mas contexto.',
      quickRequest: {
        title: 'Solicitud rapida',
        text: 'Selecciona lo que necesitas y lo adjuntamos como tickets a tu solicitud.',
        empty: 'Sin tickets seleccionados.',
        selected: 'Tickets elegidos',
        validation: 'Selecciona al menos un ticket o agrega un detalle breve del proyecto.',
      },
      subject: 'Nuevo lead desde Eros Digital Team',
    },
    cta: {
      title: '¿Quieres una propuesta clara para tu negocio?',
      text: 'Podemos ayudarte a definir la mejor forma de empezar.',
      button: 'Pedir propuesta',
    },
    footer: {
      text: 'Paginas, respuestas automaticas, publicidad e imagen para negocios.',
      links: ['Inicio', 'Servicios', 'Casos', 'Contacto'],
    },
  },
  en: {
    meta: {
      title: 'Eros Digital Team | Pages, automatic help and advertising for businesses',
      description: 'We build pages, automatic replies, advertising and useful tools so your business can look better, reply better and sell better.',
      ogTitle: 'Eros Digital Team | Pages, automatic help and advertising',
      ogDescription: 'We build pages, automatic replies, advertising and useful tools for businesses that want to grow with more order.',
      twitterTitle: 'Eros Digital Team | Pages, automatic help and advertising',
      twitterDescription: 'We help businesses look better, reply better and sell better with pages, advertising and clearer ways of working.',
      menuAria: 'Open menu',
      mobileNavAria: 'Mobile navigation',
      brandAria: 'Eros Digital Team home',
      langSwitchAria: 'Language selector',
      mobileLangSwitchAria: 'Mobile language selector',
      heroStatsAria: 'Main indicators',
      wizardProgressAria: 'Diagnosis progress',
    },
    nav: {
      services: 'Services',
      process: 'Process',
      results: 'Results',
      cases: 'Cases',
      stack: 'Extras',
      faq: 'FAQ',
      contact: 'Contact',
      domain: 'Live domain',
      mobileDomain: 'View domain',
    },
    hero: {
      eyebrow: 'Pages, automatic help and clearer sales.',
      title: 'Make your business look premium, clear, and ready to sell.',
      text: 'We tighten your digital presence, response flow, and funnel so the brand feels serious and converts better across web, Instagram, and WhatsApp.',
      primary: 'Start diagnosis',
      secondary: 'Talk to us',
      brandTagline: 'Business solutions',
      stats: ['Automatic replies', 'Better image and sales', 'Order and follow-up'],
    },
    wizard: {
      eyebrow: 'Guided diagnosis',
      introTitle: 'Tell us your niche and what you want to achieve so we can recommend where to start.',
      introText: 'First we choose the business type. Then you pick one or more goals and we give you a clear recommendation.',
      selections: {
        niche: 'Niche',
        goal: 'Goals',
        pending: 'Pending',
      },
      resultTag: 'Diagnosis ready',
      resultTitleFallback: 'Recommended solution',
      resultTextFallback: 'Complete the diagnosis to see a personalized recommendation.',
      resultPackageLabel: 'Suggested package',
      resultPriorityLabel: 'Main focus',
      resultPackageFallback: 'Pending',
      resultPriorityFallback: 'Pending',
      resultPrimary: 'Fill the form',
      resultWhatsApp: 'Talk on WhatsApp',
      resultReset: 'Start again',
      continue: 'See recommendation',
      goalsHint: 'You can choose one or more options.',
      contactPrompt: 'If this route fits your {niche}, go to the form and we will prepare a proposal grounded in your case.',
      packageMap: {
        leads: 'Growth Engine',
        automation: 'AI Operations',
        retention: 'Growth Engine',
        operations: 'AI Operations',
        website: 'Premium Presence',
      },
      priorityMap: {
        'slow-response': 'Respond and qualify faster',
        'platform-dependency': 'Recover owned sales channels',
        'no-followup': 'Install commercial follow-up',
        'low-conversion': 'Improve conversion of current demand',
        'manual-chaos': 'Organize operations and reduce manual load',
      },
      closeMap: {
        leads: 'The priority is to install a clear demand entry point and follow-up that does not leak opportunities.',
        automation: 'The priority is to respond, qualify and move conversations without relying on manual work.',
        retention: 'The priority is to activate repeat purchase, reminders and follow-up on existing customers.',
        operations: 'The priority is to organize process, integrations and visibility to operate with less friction.',
        website: 'The priority is to build a clearer presence that converts better and captures contacts more easily.',
      },
      steps: [
        {
          key: 'niche',
          label: 'Step 1',
          question: 'What type of business do you want to automate or help sell better?',
          options: [
            { id: 'restaurant', title: 'Restaurant or food business', text: 'Orders and bookings.' },
            { id: 'tax', title: 'Tax or accounting firm', text: 'Clients and appointments.' },
            { id: 'retail', title: 'Store or retail', text: 'Catalog and repeat sales.' },
            { id: 'beauty', title: 'Hair salon, barbershop or spa', text: 'Bookings and recurrence.' },
            { id: 'clinic', title: 'Clinic or healthcare', text: 'Patients and bookings.' },
            { id: 'ecommerce', title: 'Ecommerce', text: 'Sales and follow-up.' },
            { id: 'real-estate', title: 'Real estate', text: 'Leads and filtering.' },
            { id: 'education', title: 'Academy, course or training', text: 'Enrollment and follow-up.' },
            { id: 'professional', title: 'Agency, firm or professional service', text: 'Consultations and closes.' },
            { id: 'local-service', title: 'Local service business', text: 'WhatsApp and bookings.' },
            { id: 'other', title: 'Other business', text: 'Adjusted to your case.' },
          ],
        },
        {
          key: 'goals',
          label: 'Step 2',
          question: 'What would you like to improve first? You can choose several.',
          options: [
            { id: 'leads', title: 'Get more clients', text: 'More opportunities.' },
            { id: 'automation', title: 'Automate attention', text: 'Less manual work.' },
            { id: 'retention', title: 'Bring clients back', text: 'More repeat business.' },
            { id: 'operations', title: 'Organize operations', text: 'Cleaner internal flow.' },
            { id: 'website', title: 'Improve digital presence', text: 'Stronger brand image.' },
          ],
        },
      ],
      routes: {
        leads: {
          title: 'System to attract more clients and close better',
          bullets: ['Page built to help people contact you or buy', 'Advertising or local demand connected to your contact list', 'Early follow-up so opportunities do not go cold'],
        },
        automation: {
          title: 'System to reply without so much manual work',
          bullets: ['WhatsApp, forms or chat with guided replies', 'Inquiry filtering and automatic routing', 'Follow-up without depending on manual replies'],
        },
        retention: {
          title: 'System to bring clients back',
          bullets: ['Well organized customer list', 'Reactivation messages by WhatsApp or email', 'Offers and reminders based on customer type'],
        },
        operations: {
          title: 'System to organize daily work',
          bullets: ['Review of the sales or service steps', 'Connections between channels, client list and reports', 'Internal automatic help to reduce manual work'],
        },
        website: {
          title: 'Clear page built to create trust and sell better',
          bullets: ['Clear and well ordered offer', 'Careful design that builds trust and helps sales', 'Form, buttons and measurement ready to grow'],
        },
      },
      routeOverrides: {
        restaurant: {
          leads: {
            title: 'Direct order system for restaurants',
            bullets: ['Landing page or digital menu focused on conversion', 'Local campaigns to drive orders or bookings', 'Light CRM for promotions and repeat purchase'],
          },
          automation: {
            title: 'WhatsApp automated attention system',
            bullets: ['Automated replies for menu, hours and bookings', 'Order and inquiry filtering before handing off to staff', 'Confirmations and follow-up without losing conversations'],
          },
          retention: {
            title: 'Repeat-purchase system for food businesses',
            bullets: ['Customer base segmented by behavior or frequency', 'Reactivation campaigns for slow days and weekends', 'Automated promotions to increase repeat rate and ticket'],
          },
          operations: {
            title: 'Operational system for orders and follow-up',
            bullets: ['Connected flow between orders, team and follow-up', 'Simple integrations with sheets, CRM or internal panel', 'Less manual load and more control over demand'],
          },
          website: {
            title: 'Premium website to sell food without friction',
            bullets: ['Clear menu, visible CTAs and order-ready structure', 'Premium visuals to raise trust and appetite', 'Foundation ready for local SEO, bookings or owned delivery'],
          },
        },
        tax: {
          leads: {
            title: 'Acquisition system for tax and accounting services',
            bullets: ['Clear landing page by fiscal or accounting service', 'Campaigns for tax filing, appointments or consultations', 'Automated follow-up so seasonal leads are not lost'],
          },
          automation: {
            title: 'Qualification and response system for tax firms',
            bullets: ['Form or WhatsApp flow to classify inquiries', 'Reminders for documents and appointments', 'Automated follow-up to close potential clients'],
          },
          retention: {
            title: 'Renewal and recurring service system',
            bullets: ['Reminders for deadlines and obligations', 'Campaigns for renewals or recurring services', 'Segmented follow-up by client type'],
          },
          operations: {
            title: 'Operational system for a tax office',
            bullets: ['Better organized flow across leads, appointments and documentation', 'Integrations between forms, CRM and work sheets', 'Less repetitive work and better pipeline control'],
          },
          website: {
            title: 'Professional website to capture tax clients',
            bullets: ['Clear offer by service and client type', 'Trust-driven design for consultations and appointments', 'Foundation ready for forms, booking and follow-up'],
          },
        },
        retail: {
          leads: {
            title: 'Acquisition system for stores and retail',
            bullets: ['Promotions and catalog with clear CTAs', 'Campaigns to drive traffic to store or WhatsApp', 'Follow-up for prospects and repeat buyers'],
          },
          automation: {
            title: 'Automated attention system for retail',
            bullets: ['Replies for stock, hours and product questions', 'Fast filtering by purchase or inquiry type', 'Conversation follow-up without manual overload'],
          },
          retention: {
            title: 'Repeat-purchase system for retail',
            bullets: ['Campaigns for frequent customers and promotions', 'Reactivation by WhatsApp or email', 'Segmentation by buying behavior or recurrence'],
          },
          operations: {
            title: 'Operational system for growing retail',
            bullets: ['Clearer process between sale, inquiry and follow-up', 'Simple integrations for catalog, leads and reporting', 'More commercial control with less disorder'],
          },
          website: {
            title: 'Premium website or catalog for retail',
            bullets: ['Clear presentation of products and promotions', 'Visible CTAs for buying, visiting or asking', 'Foundation ready for local or digital campaigns'],
          },
        },
        beauty: {
          leads: {
            title: 'Booking and acquisition system for beauty businesses',
            bullets: ['Landing page with direct booking CTA', 'Campaigns for appointments, promos or new services', 'Follow-up that turns interest into filled calendar slots'],
          },
          automation: {
            title: 'Automated attention system for salon or spa',
            bullets: ['Replies for pricing, hours and availability', 'Automatic appointment reminders', 'Follow-up to close bookings without losing conversations'],
          },
          retention: {
            title: 'Retention system for salons, barbershops and spas',
            bullets: ['Promotions segmented by service or frequency', 'Reminder timing to bring clients back at the right moment', 'Campaigns to reactivate sleeping clients'],
          },
          operations: {
            title: 'Operational system for calendar and follow-up',
            bullets: ['More order between bookings, staff and follow-up', 'Simple integrations for calendar and customer base', 'Less manual load and fewer empty slots'],
          },
          website: {
            title: 'Premium website for salon, barbershop or spa',
            bullets: ['Strong visual identity with clear booking CTAs', 'Trust and desire to sell services or packages', 'Foundation ready for WhatsApp, forms and promotions'],
          },
        },
        clinic: {
          leads: {
            title: 'System to bring in patients with more trust',
            bullets: ['Page built to create trust and generate appointments', 'Campaigns for treatments, consultations or first visit', 'Automatic follow-up so interested people are not lost'],
          },
          automation: {
            title: 'Automated booking and response system',
            bullets: ['Pre-qualification before booking', 'Automated replies for availability and services', 'Reminders and follow-up to reduce appointment loss'],
          },
          retention: {
            title: 'Patient follow-up and retention system',
            bullets: ['Check-up and continuity reminders', 'Segmented campaigns by treatment or intent', 'Organized patient base to work recurrence with structure'],
          },
          operations: {
            title: 'Internal system for bookings and follow-up',
            bullets: ['Clear process between patient inquiries, booking and care', 'Connections between forms, client list and reports', 'Better visibility without depending on manual handling'],
          },
          website: {
            title: 'Professional healthcare page for trust',
            bullets: ['Clear message, strong trust and medical focus', 'Buttons and forms designed to capture patients', 'Base ready to show up better on Google and run campaigns'],
          },
        },
        'real-estate': {
          leads: {
            title: 'System to attract real estate inquiries',
            bullets: ['Page by property, area or buyer type', 'Inquiries connected to your contact list', 'Early follow-up so ready buyers are not lost'],
          },
          automation: {
            title: 'Automated attention system for real estate',
            bullets: ['Fast replies for properties, location and budget', 'Prospect filtering before handing off to the advisor', 'Automated follow-up for visits and inquiries'],
          },
          retention: {
            title: 'System for follow-up and referrals',
            bullets: ['Organized list by buyer, seller or investor type', 'Messages to reactivate cold contacts', 'Campaigns for new opportunities and referrals'],
          },
          operations: {
            title: 'System to organize visits and closes',
            bullets: ['Clear steps between inquiry, visit and close', 'Connections between forms, client list and team', 'Less leakage and more process control'],
          },
          website: {
            title: 'Clear real estate page to attract more inquiries',
            bullets: ['Clear message by area, property or service', 'Buttons and forms designed for real inquiries', 'Base ready for campaigns and follow-up'],
          },
        },
        'local-service': {
          leads: {
            title: 'System to attract clients for a local business',
            bullets: ['Page focused on calls, WhatsApp or bookings', 'Local campaigns and Google presence so more people can find you', 'Initial follow-up to close faster'],
          },
          automation: {
            title: 'Automated reply and booking system',
            bullets: ['WhatsApp or forms with guided responses', 'Basic qualification before human contact', 'Follow-up for bookings, quotes or visits'],
          },
          retention: {
            title: 'Repeat business and reactivation system',
            bullets: ['Customer base organized by frequency or service', 'Campaigns to reactivate past clients', 'Promotions and reminders to increase recurrence'],
          },
          operations: {
            title: 'System to organize a growing local business',
            bullets: ['Clearer flow between lead, booking and service', 'Simple integrations to reduce manual tasks', 'More control over demand, scheduling and follow-up'],
          },
          website: {
            title: 'Clear page for a local service business that wants more sales',
            bullets: ['Clear offer and visible buttons from the first screen', 'Design focused on trust and fast action', 'Base ready to show up better on Google, run ads and take bookings'],
          },
        },
        ecommerce: {
          leads: {
            title: 'System to sell more in ecommerce',
            bullets: ['Page or product sections built to sell better', 'Advertising and reminders to bring back people who showed interest', 'Follow-up to recover people with buying intent'],
          },
          automation: {
            title: 'Automated support and post-purchase system',
            bullets: ['Automated replies for order status and common questions', 'Sequences for cart, follow-up and support', 'Fewer manual tickets and a better buying experience'],
          },
          retention: {
            title: 'System to increase repeat purchase in ecommerce',
            bullets: ['Automatic messages for repeat purchase and extra sales', 'Campaigns based on how each client buys', 'Recovery of inactive customers with useful offers'],
          },
          operations: {
            title: 'System to organize a growing ecommerce business',
            bullets: ['Connections between orders, advertising and reports', 'Panels or work steps to reduce repeated tasks', 'More clarity without checking everything by hand'],
          },
          website: {
            title: 'Clearer online store built to sell better',
            bullets: ['Product, offer and buttons shown more clearly', 'Visuals and structure that help more people finish the purchase', 'Base ready for campaigns, measurement and growth'],
          },
        },
      },
      routeContext: {
        restaurant: 'For a food business, the priority is usually turning demand into direct orders and repeat sales.',
        tax: 'For tax or accounting services, the priority is usually capturing consultations, organizing appointments and not losing follow-up.',
        retail: 'For stores and retail, the priority is usually moving promotions, responding quickly and driving repeat purchase.',
        beauty: 'For salons, barbershops or spas, the priority is usually filling the calendar and building recurrence.',
        clinic: 'For healthcare, the priority is usually trust, qualified acquisition and booking follow-up.',
        ecommerce: 'For ecommerce, the priority is usually improving conversion and automating repeat purchase.',
        'real-estate': 'For real estate, the priority is usually qualifying leads better and working follow-up with structure.',
        education: 'For academies or training businesses, the priority is usually capturing leads, qualifying them and closing enrollments.',
        professional: 'For professional services, the priority is usually organizing consultations, proposals and commercial follow-up.',
        'local-service': 'For local services, the priority is usually responding quickly and closing opportunities.',
        other: 'For this profile, the proposal is defined by the main objective and operational friction.',
      },
      painContext: {
        'slow-response': 'The main problem today is slow response time.',
        'platform-dependency': 'The main problem today is overdependence on external platforms.',
        'no-followup': 'The main problem today is the lack of commercial follow-up.',
        'low-conversion': 'The main problem today is that interest is not turning into sales.',
        'manual-chaos': 'The main problem today is too much manual work and disorder.',
      },
      briefLabel: 'Completed diagnosis',
    },
    services: {
      eyebrow: 'Core services',
      title: 'We help you sell better, look better, and work with more order.',
      cards: [
        ['Pages that help you sell', 'We build clear and fast pages so people understand your business and contact you more easily.'],
        ['Automatic replies', 'We help you answer messages, organize requests, and save time on repetitive work.'],
        ['Advertising to bring clients', 'We create campaigns and pieces that help more interested people find your business.'],
        ['Content and social media', 'We help you keep your social media more active, organized, and consistent.'],
        ['Useful tools for your business', 'We create practical solutions to help you organize work and serve your clients better.'],
        ['Image and communication', 'We help your business look clearer, stronger, and more trustworthy.'],
      ],
    },
    why: {
      eyebrow: 'Why Eros Digital Team',
      title: 'We do not build random pieces. We create a more complete solution so your business can move forward.',
      cards: [
        ['One clear direction', 'Your image, page, ads, and customer attention can all work toward the same goal.'],
        ['Looks good and helps sell', 'The goal is not only to look nice, but to build trust and help people take action.'],
        ['Less repetitive work', 'We use automation where it really saves time and helps you respond better.'],
        ['Ready to grow later', 'We leave a base that lets you add more actions later without starting over.'],
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'We work step by step, without making it complicated.',
      cards: [
        ['We review your case', 'We look at what you sell, what is slowing you down, and what would help most right now.'],
        ['We show you a route', 'We give you a clear idea of what should happen first and what the solution could look like.'],
        ['We build it', 'We create the page, messages, pieces, or automation based on what your business needs.'],
        ['We adjust what matters', 'We review what works best and improve the key parts to make the result stronger.'],
      ],
    },
    results: {
      eyebrow: 'What we want to improve',
      title: 'The goal is simple: more people contact you, you respond better, and you close more opportunities.',
      cards: [
        ['More interest', 'More people reaching out', 'We create clearer contact points so more real prospects can reach your business.'],
        ['Less chaos', 'Less manual work', 'We organize messages, follow-up, and repeated tasks so daily work feels lighter.'],
        ['Better image', 'More trust when people see you', 'We help your business look more serious and easier to understand.'],
      ],
      proof: [
        ['Page + ads', 'Everything supports the same goal'],
        ['Content + automation', 'More consistency with less manual effort'],
        ['Image + sales', 'A presence that helps you close better'],
      ],
      proofAria: 'Key benefits',
    },
    stack: {
      eyebrow: 'Other things we can also do',
      title: 'If your business needs it, we can also help with this.',
      helper: 'Tap one or more options and we will attach them to the form as tickets.',
      chips: ['Sales pages', 'Chat to help customers', 'Follow-up emails', 'Order for clients and messages', 'Simple reports', 'Short videos', 'Automatic follow-up', 'Better Google presence', 'Brand image', 'Video production', 'Reminder campaigns', 'Connections between tools'],
    },
    cases: {
      eyebrow: 'Vertical scenarios',
      title: 'Examples of how a clear idea becomes concrete actions depending on the business type.',
      cards: [
        ['Restaurants', 'Direct orders and repeat clients', 'Digital menu, WhatsApp messages and local campaigns to depend less on third parties and drive more direct orders.', ['Order-ready menu or page', 'Messages to reactivate clients', 'Automatic follow-up for bookings or orders']],
        ['Clinics', 'More inquiries and a better organized schedule', 'Professional page, better filtered patient inquiries and automatic follow-up for consultations or first appointments.', ['Form or first filter', 'Automatic booking or contact', 'Follow-up so patients are not lost']],
        ['Ecommerce', 'More sales and more repeat purchase', 'A clearer structure, automatic messages and campaigns to sell better, recover carts and get more repeat buyers.', ['Better organized product page', 'Post-purchase messages', 'Campaigns for repeat purchase and recovery']],
      ],
    },
    faq: {
      eyebrow: 'Frequently asked questions',
      title: 'Clear answers before getting started.',
      items: [
        ['What do you actually do for my business?', 'We help you get more clients, reply faster, look more professional, and organize your business better through websites, automation, ads, and clearer customer flows.'],
        ['Can this work if I do not understand technology?', 'Yes. We keep the process simple so you understand what will be done, why it matters, and how it can help you sell or operate better.'],
        ['How do I know what is right for me?', 'We first look at your business, your goals, and what is slowing you down. Then we recommend a clear route based on what actually fits your case.'],
        ['What happens after I fill out the form?', 'We contact you, review what you need, and suggest the option that best fits your business, your timing, and your budget.'],
      ],
    },
    packages: {
      eyebrow: 'Ways we can work with you',
      title: 'We suggest simple options based on what your business needs right now.',
      cards: [
        ['Start', 'Clear presence', 'For businesses that need to look better and explain what they offer in a simple way.', ['Page or landing', 'Core sales message', 'More organized image']],
        ['Growth', 'More clients and follow-up', 'For businesses that want more attention and better follow-up without losing opportunities.', ['Page and ads', 'Contact follow-up', 'Improvements to sell better']],
        ['Order and saved time', 'Less manual work', 'For businesses that already sell and need better day-to-day order.', ['Automatic replies', 'Connections between tools', 'Clearer work process']],
      ],
    },
    launch: {
      eyebrow: 'First stage',
      title: 'This is what an early stage can look like when you want to move fast with a clear direction.',
      cards: [
        ['Week 1', 'Order and focus', 'We define the offer, what needs to be said, and the smartest way to start.'],
        ['Week 2', 'Build', 'We create the page, messages, pieces, and basic automation if needed.'],
        ['Week 3', 'Go live and adjust', 'We review details, improve presentation, and fine-tune the most important parts.'],
      ],
      includesEyebrow: 'May include',
      includes: ['Main offer text', 'Home section design', 'Contact form', 'Basic search visibility setup', 'Publishing preparation'],
    },
    contact: {
      eyebrow: 'Next step',
      title: 'Tell us about your case and we will show you the best place to start.',
      text: 'If you already saw the route that fits you best, fill out the form and we will reply with a clear proposal built around your business.',
      pointsAria: 'Next deliverables',
      points: ['Understand your business', 'Recommend a clear route', 'Suggest the best first step'],
      email: 'erosdigitalteam@gmail.com',
      whatsapp: 'WhatsApp',
      openDomain: 'Open domain',
      formEyebrow: 'Form',
      formTitle: 'Tell us what you need',
      formText: 'You can send a quick request with tickets or add extra context if you already know what you need.',
      labels: ['Name', 'Email', 'Company', 'Primary service (optional)', 'Project or details (optional)'],
      placeholders: ['Ex. Maria Lopez', 'you@company.com', 'Business name', 'Select an option', 'Optional: add extra context if you want.'],
      options: ['Page or landing', 'Advertising to bring clients', 'Automatic replies', 'Image and communication', 'Internal tool or solution'],
      submit: 'Send brief',
      note: 'You can submit only name, email, and selected tickets. Add more context only if you want.',
      quickRequest: {
        title: 'Quick request',
        text: 'Select what you need and we will attach it as tickets to your request.',
        empty: 'No tickets selected yet.',
        selected: 'Selected tickets',
        validation: 'Select at least one ticket or add a short project detail.',
      },
      subject: 'New lead from Eros Digital Team',
    },
    cta: {
      title: 'Want a clear proposal for your business?',
      text: 'We can help you define the best way to start.',
      button: 'Ask for a proposal',
    },
    footer: {
      text: 'Pages, automatic replies, advertising, and image for businesses.',
      links: ['Home', 'Services', 'Cases', 'Contact'],
    },
  },
};

const wizardState = {
  niche: null,
  goals: [],
  step: 0,
};

const selectedTickets = new Set();

const ticketServiceMap = {
  0: 'web',
  1: 'automation',
  2: 'growth',
  3: 'apps',
  4: 'apps',
  5: 'branding',
  6: 'automation',
  7: 'growth',
  8: 'branding',
  9: 'branding',
  10: 'growth',
  11: 'apps',
};

const elements = {
  brandHome: document.querySelector('.brand'),
  brandTagline: document.querySelector('.brand-copy small'),
  navLinks: [...document.querySelectorAll('.nav a')],
  mobileNavLinks: [...document.querySelectorAll('.mobile-nav a:not(.button)')],
  bottomNavLinks: [...document.querySelectorAll('[data-bottom-nav]')],
  floatingWhatsApp: document.querySelector('.floating-whatsapp'),
  langSwitch: document.querySelector('.topbar .lang-switch'),
  mobileLangSwitch: document.querySelector('.mobile-lang-switch'),
  heroEyebrow: document.querySelector('.hero .hero-copy .eyebrow'),
  heroTitle: document.querySelector('.hero .hero-copy h1'),
  heroText: document.querySelector('.hero-text'),
  heroButtons: [...document.querySelectorAll('.hero-actions a')],
  heroStats: document.querySelector('.signal-grid'),
  statTexts: [...document.querySelectorAll('.signal-grid li span')],
  serviceHeading: document.querySelector('#servicios .section-heading h2'),
  serviceEyebrow: document.querySelector('#servicios .eyebrow'),
  serviceCards: [...document.querySelectorAll('#servicios .service-card')],
  whyEyebrow: document.querySelector('#diferencial .eyebrow'),
  whyHeading: document.querySelector('#diferencial .section-heading h2'),
  whyCards: [...document.querySelectorAll('.why-card')],
  processEyebrow: document.querySelector('#proceso .eyebrow'),
  processHeading: document.querySelector('#proceso h2'),
  processCards: [...document.querySelectorAll('#proceso .process-list article')],
  resultsEyebrow: document.querySelector('#resultados .eyebrow'),
  resultsHeading: document.querySelector('#resultados .section-heading h2'),
  resultCards: [...document.querySelectorAll('#resultados .result-card')],
  proofCards: [...document.querySelectorAll('#resultados .proof-strip div')],
  proofStrip: document.querySelector('#resultados .proof-strip'),
  stackEyebrow: document.querySelector('#stack .eyebrow'),
  stackHeading: document.querySelector('#stack .section-heading h2'),
  stackHelper: document.querySelector('#stack .chip-cloud-note'),
  stackChips: [...document.querySelectorAll('#stack .chip-cloud button')],
  casesEyebrow: document.querySelector('#casos .eyebrow'),
  casesHeading: document.querySelector('#casos .section-heading h2'),
  caseCards: [...document.querySelectorAll('#casos .case-card')],
  faqEyebrow: document.querySelector('#faq .eyebrow'),
  faqHeading: document.querySelector('#faq .section-heading h2'),
  faqItems: [...document.querySelectorAll('#faq .faq-item')],
  packageEyebrow: document.querySelector('#paquetes .eyebrow'),
  packageHeading: document.querySelector('#paquetes .section-heading h2'),
  packageCards: [...document.querySelectorAll('#paquetes .package-card')],
  launchEyebrow: document.querySelector('#lanzamiento .eyebrow'),
  launchHeading: document.querySelector('#lanzamiento .section-heading h2'),
  launchCards: [...document.querySelectorAll('.launch-timeline article')],
  launchIncludesEyebrow: document.querySelector('.launch-card .eyebrow'),
  launchIncludesList: [...document.querySelectorAll('.launch-card li')],
  contactEyebrow: document.querySelector('#contacto .contact-card .eyebrow'),
  contactHeading: document.querySelector('#contacto .contact-card h2'),
  contactText: document.querySelector('#contacto .contact-card p:nth-of-type(2)'),
  contactPoints: [...document.querySelectorAll('.contact-points li')],
  contactPointsList: document.querySelector('.contact-points'),
  contactButtons: [...document.querySelectorAll('.contact-actions a')],
  form: document.querySelector('.contact-form'),
  formHeadingEyebrow: document.querySelector('.form-heading .eyebrow'),
  formHeadingTitle: document.querySelector('.form-heading h3'),
  formHeadingText: document.querySelector('.form-heading p:last-child'),
  formLabels: [...document.querySelectorAll('.contact-form label span')],
  formInputs: [...document.querySelectorAll('.contact-form input:not([type="hidden"]):not(.form-honeypot), .contact-form select, .contact-form textarea')],
  formSelectOptions: [...document.querySelectorAll('.contact-form select option')],
  formSubmit: document.querySelector('.contact-form button[type="submit"]'),
  formNote: document.querySelector('.form-note'),
  formSubject: document.querySelector('.contact-form input[name="_subject"]'),
  formNextField: document.getElementById('formNextField'),
  formReplyToField: document.getElementById('formReplyToField'),
  quickTicketTitle: document.querySelector('.quick-request-title'),
  quickTicketText: document.querySelector('.quick-request-text'),
  quickTicketCloud: document.getElementById('quickTicketCloud'),
  quickTicketSummary: document.getElementById('quickTicketSummary'),
  quickTicketField: document.getElementById('quickTicketsField'),
  formStatus: document.querySelector('.form-status'),
  formSuccessCard: document.querySelector('.form-success-card'),
  ctaTitle: document.querySelector('.cta-ribbon strong'),
  ctaText: document.querySelector('.cta-ribbon span'),
  ctaButton: document.querySelector('.cta-ribbon .button'),
  footerText: document.querySelector('.site-footer .footer-brand span'),
  footerLinks: [...document.querySelectorAll('.footer-links [data-footer-nav="true"]')],
  wizardEyebrow: document.querySelector('.wizard-header .eyebrow'),
  wizardProgress: document.querySelector('.wizard-progress'),
  wizardProgressCurrent: document.querySelector('.wizard-progress-current'),
  wizardProgressTotal: document.querySelector('.wizard-progress-total'),
  wizardProgressFill: document.querySelector('.wizard-progress-fill'),
  wizardTitle: document.querySelector('.wizard-header h2'),
  wizardIntro: document.querySelector('.wizard-intro'),
  wizardStepLabel: document.querySelector('.wizard-step-label'),
  wizardQuestion: document.querySelector('.wizard-question'),
  wizardOptions: document.querySelector('.wizard-options'),
  wizardStepActions: document.querySelector('.wizard-step-actions'),
  wizardStepContinue: document.getElementById('wizardStepContinue'),
  wizardSelectionNiche: document.querySelector('.wizard-selection-niche'),
  wizardSelectionGoal: document.querySelector('.wizard-selection-goal'),
  wizardSelectionList: document.querySelector('.wizard-selection-list'),
  wizardSelectionCards: [...document.querySelectorAll('.wizard-selection-list > div')],
  wizardSelectionLabels: [...document.querySelectorAll('.wizard-selection-list span')],
  wizardStepMeta: document.querySelector('.wizard-step-meta'),
  wizardResultCard: document.querySelector('.wizard-result-card'),
  wizardResultTag: document.querySelector('.wizard-result-tag'),
  wizardResultTitle: document.querySelector('.wizard-result-title'),
  wizardResultText: document.querySelector('.wizard-result-text'),
  wizardResultContact: document.querySelector('.wizard-result-contact'),
  wizardResultMetaLabels: [...document.querySelectorAll('.wizard-result-meta-label')],
  wizardResultPackage: document.querySelector('.wizard-result-package'),
  wizardResultPriority: document.querySelector('.wizard-result-priority'),
  wizardResultList: document.querySelector('.wizard-result-list'),
  wizardPrimaryCta: document.getElementById('wizardPrimaryCta'),
  wizardWhatsAppCta: document.getElementById('wizardWhatsAppCta'),
  wizardReset: document.getElementById('wizardReset'),
};

let currentLanguage = 'es';
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal', 'is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => {
  item.classList.add('reveal');
  revealObserver.observe(item);
});

const syncTopbarState = () => {
  document.body.classList.toggle('menu-scrolled', window.scrollY > 24);
};

const syncBottomNavState = () => {
  if (!elements.bottomNavLinks.length) {
    return;
  }

  const activeSection = ['inicio', 'diagnostico', 'servicios', 'casos', 'contacto']
    .map((id) => document.getElementById(id))
    .filter(Boolean)
    .find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.25;
    }) || document.getElementById('inicio');

  const activeHash = `#${activeSection?.id || 'inicio'}`;
  elements.bottomNavLinks.forEach((link) => {
    link.classList.toggle('is-active', link.getAttribute('href') === activeHash);
  });
};

const closeMenu = () => {
  if (!menuToggle) {
    return;
  }
  document.body.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
};

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const willOpen = !document.body.classList.contains('menu-open');
    document.body.classList.toggle('menu-open', willOpen);
    menuToggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) {
      closeMenu();
    }
  });
}

const setCardContent = (cards, source, options = {}) => {
  cards.forEach((card, index) => {
    const data = source[index];
    if (!data) {
      return;
    }

    const [title, text] = data;
    const number = options.numberPrefix ? card.querySelector('span') : null;
    if (number) {
      number.textContent = String(index + 1).padStart(2, '0');
    }

    const heading = card.querySelector('h3');
    const paragraph = card.querySelector('p');
    if (heading) {
      heading.textContent = title;
    }
    if (paragraph) {
      paragraph.textContent = text;
    }
  });
};

const setThreePartCards = (cards, source) => {
  cards.forEach((card, index) => {
    const data = source[index];
    if (!data) {
      return;
    }

    const [label, heading, text] = data;
    card.querySelector('span').textContent = label;
    card.querySelector('strong').textContent = heading;
    card.querySelector('p').textContent = text;
  });
};

const setListCards = (cards, source, tagSelector) => {
  cards.forEach((card, index) => {
    const data = source[index];
    if (!data) {
      return;
    }

    const [tag, heading, text, listItems] = data;
    card.querySelector(tagSelector).textContent = tag;
    card.querySelector('h3').textContent = heading;
    card.querySelector('p').textContent = text;
    [...card.querySelectorAll('li')].forEach((item, itemIndex) => {
      item.textContent = listItems[itemIndex] || '';
    });
  });
};

const getWizardStep = (copy, stepIndex) => copy.wizard.steps[stepIndex];

const getOptionById = (copy, key, id) => {
  const step = copy.wizard.steps.find((item) => item.key === key);
  return step?.options.find((option) => option.id === id) || null;
};

const buildWhatsAppUrl = (message) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

const isEnglishCopy = () => currentLanguage === 'en';

const getSelectedTicketLabels = (copy = translations[currentLanguage]) => [...selectedTickets]
  .sort((left, right) => left - right)
  .map((index) => copy.stack.chips[index])
  .filter(Boolean);

const inferServiceFromTickets = () => {
  const match = [...selectedTickets]
    .sort((left, right) => left - right)
    .map((index) => ticketServiceMap[index])
    .find(Boolean);

  return match || '';
};

const getQuickTicketButtons = () => elements.quickTicketCloud
  ? [...elements.quickTicketCloud.querySelectorAll('button[data-ticket-index]')]
  : [];

const syncSelectedTickets = (copy = translations[currentLanguage]) => {
  const labels = getSelectedTicketLabels(copy);
  const selectedText = labels.length
    ? `${copy.contact.quickRequest.selected}: ${labels.join(' • ')}`
    : copy.contact.quickRequest.empty;

  if (elements.quickTicketField) {
    elements.quickTicketField.value = labels.join(' | ');
  }

  if (elements.quickTicketSummary) {
    elements.quickTicketSummary.textContent = selectedText;
    elements.quickTicketSummary.classList.toggle('is-empty', !labels.length);
  }

  [...elements.stackChips, ...getQuickTicketButtons()].forEach((button) => {
    const ticketIndex = Number(button.dataset.ticketIndex);
    const isSelected = selectedTickets.has(ticketIndex);
    button.classList.toggle('is-selected', isSelected);
    button.setAttribute('aria-pressed', String(isSelected));
  });

  const serviceSelect = elements.formInputs[3];
  if (serviceSelect instanceof HTMLSelectElement && !serviceSelect.value && labels.length) {
    serviceSelect.value = inferServiceFromTickets();
  }
};

const renderQuickTicketCloud = (copy) => {
  if (!elements.quickTicketCloud) {
    return;
  }

  elements.quickTicketCloud.innerHTML = '';
  copy.stack.chips.forEach((label, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.dataset.ticketIndex = String(index);
    button.textContent = label;
    button.addEventListener('click', () => {
      if (selectedTickets.has(index)) {
        selectedTickets.delete(index);
      } else {
        selectedTickets.add(index);
      }
      syncSelectedTickets(copy);
    });
    elements.quickTicketCloud.append(button);
  });

  syncSelectedTickets(copy);
};

const getRouteKeys = () => (wizardState.goals.length ? wizardState.goals : ['website']);

const getPrimaryRouteKey = () => getRouteKeys()[0] || 'website';

const getPackageName = (copy) => {
  const goals = getRouteKeys();
  if (goals.includes('operations') || goals.includes('automation')) {
    return isEnglishCopy() ? 'Order and saved time' : 'Orden y ahorro de tiempo';
  }
  if (goals.length === 1 && goals[0] === 'website') {
    return isEnglishCopy() ? 'Clear presence' : 'Presencia clara';
  }
  return isEnglishCopy() ? 'More clients and follow-up' : 'Mas clientes y seguimiento';
};

const buildRecommendation = (copy) => {
  const routeKeys = getRouteKeys();
  const primaryRouteKey = getPrimaryRouteKey();
  const route = copy.wizard.routeOverrides?.[wizardState.niche]?.[primaryRouteKey] || copy.wizard.routes[primaryRouteKey];
  const goalTitles = routeKeys
    .map((goalId) => getOptionById(copy, 'goals', goalId)?.title)
    .filter(Boolean);
  const goalSentence = goalTitles.join(', ');
  const bullets = [...new Set(routeKeys.flatMap((goalId) => {
    const selectedRoute = copy.wizard.routeOverrides?.[wizardState.niche]?.[goalId] || copy.wizard.routes[goalId];
    return selectedRoute?.bullets || [];
  }))].slice(0, 3);
  const nicheLabel = getOptionById(copy, 'niche', wizardState.niche)?.title || copy.wizard.selections.pending;
  const recommendationText = isEnglishCopy()
    ? `Recommended focus: ${goalSentence || route.title}.`
    : `Enfoque recomendado: ${goalSentence || route.title}.`;

  return {
    title: route.title,
    text: recommendationText.trim(),
    bullets,
    packageName: getPackageName(copy),
    priority: goalSentence || copy.wizard.resultPriorityFallback,
    contactPrompt: copy.wizard.contactPrompt.replace('{niche}', nicheLabel.toLowerCase()),
  };
};

const syncWizardSummary = (copy) => {
  elements.wizardSelectionLabels[0].textContent = copy.wizard.selections.niche;
  elements.wizardSelectionLabels[1].textContent = copy.wizard.selections.goal;

  elements.wizardSelectionNiche.textContent = getOptionById(copy, 'niche', wizardState.niche)?.title || copy.wizard.selections.pending;
  const selectedGoals = wizardState.goals
    .map((goalId) => getOptionById(copy, 'goals', goalId)?.title)
    .filter(Boolean);
  elements.wizardSelectionGoal.textContent = selectedGoals.join(', ') || copy.wizard.selections.pending;

  elements.wizardSelectionCards.forEach((card, index) => {
    const hasValue = index === 0 ? Boolean(wizardState.niche) : Boolean(wizardState.goals.length);
    card.classList.toggle('is-empty', !hasValue);
  });

  const answeredCount = [wizardState.niche, wizardState.goals.length ? 'goals' : null].filter(Boolean).length;
  const isComplete = Boolean(wizardState.niche && wizardState.goals.length);
  elements.wizardSelectionList.classList.toggle('is-hidden', answeredCount === 0 || isComplete);
};

const fillBriefFromWizard = (copy, recommendation) => {
  const [nameInput, emailInput, companyInput, serviceSelect, textarea] = elements.formInputs;
  const niche = getOptionById(copy, 'niche', wizardState.niche)?.title || copy.wizard.selections.pending;
  const goal = wizardState.goals
    .map((goalId) => getOptionById(copy, 'goals', goalId)?.title)
    .filter(Boolean)
    .join(', ') || copy.wizard.selections.pending;
  const analysisSummary = recommendation.text;
  const analysisPoints = recommendation.bullets.join(' | ');
  const briefText = isEnglishCopy()
    ? `${copy.wizard.briefLabel}: ${recommendation.title}. ${copy.wizard.selections.niche}: ${niche}. ${copy.wizard.selections.goal}: ${goal}. Diagnosis: ${analysisSummary}. Priorities: ${analysisPoints}.`
    : `${copy.wizard.briefLabel}: ${recommendation.title}. ${copy.wizard.selections.niche}: ${niche}. ${copy.wizard.selections.goal}: ${goal}. Diagnostico: ${analysisSummary}. Prioridades: ${analysisPoints}.`;

  textarea.value = briefText;

  const selectMap = {
    website: 'web',
    leads: 'growth',
    automation: 'automation',
    retention: 'growth',
    operations: 'apps',
  };
  serviceSelect.value = selectMap[getPrimaryRouteKey()] || '';
  companyInput.focus();
};

const updateWhatsAppLink = (copy, recommendation) => {
  const niche = getOptionById(copy, 'niche', wizardState.niche)?.title || copy.wizard.selections.pending;
  const goal = wizardState.goals
    .map((goalId) => getOptionById(copy, 'goals', goalId)?.title)
    .filter(Boolean)
    .join(', ') || copy.wizard.selections.pending;
  const message = isEnglishCopy()
    ? `Hi Eros Digital Team, I completed the diagnosis. Niche: ${niche}. Goals: ${goal}. Recommended route: ${recommendation.title}. I want to talk about the proposal.`
    : `Hola Eros Digital Team, complete el diagnostico. Nicho: ${niche}. Metas: ${goal}. Ruta: ${recommendation.title}. Quiero hablar sobre la propuesta.`;
  elements.wizardWhatsAppCta.href = buildWhatsAppUrl(message);
};

const syncFormConfiguration = () => {
  if (!elements.form) {
    return;
  }

  const redirectUrl = `${window.location.origin}${window.location.pathname}?sent=1#contacto`;
  elements.form.setAttribute('action', 'https://formsubmit.co/erosdigitalteam@gmail.com');
  if (elements.formNextField) {
    elements.formNextField.value = redirectUrl;
  }
};

const syncFormFeedback = () => {
  if (!elements.formStatus) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  if (params.get('sent') === '1') {
    elements.formStatus.classList.add('is-success');
    elements.formStatus.textContent = currentLanguage === 'en'
      ? 'Form sent successfully. We will contact you soon.'
      : 'Formulario enviado correctamente. Te contactaremos pronto.';
    setFormSuccessCardVisibility(true, currentLanguage);
    if (window.history.replaceState) {
      const cleanUrl = `${window.location.pathname}#contacto`;
      window.history.replaceState({}, document.title, cleanUrl);
    }
    return;
  }

  elements.formStatus.classList.remove('is-success');
  elements.formStatus.textContent = currentLanguage === 'en'
    ? 'Reply time: usually within one business day.'
    : 'Tiempo de respuesta: normalmente dentro de un día hábil.';
  setFormSuccessCardVisibility(false, currentLanguage);
};

const setFormStatus = (kind, message) => {
  if (!elements.formStatus) {
    return;
  }

  elements.formStatus.classList.remove('is-success', 'is-error');
  if (kind) {
    elements.formStatus.classList.add(`is-${kind}`);
  }
  elements.formStatus.textContent = message;
};

const setFormSuccessCardVisibility = (isVisible, language = currentLanguage) => {
  if (!elements.formSuccessCard) {
    return;
  }

  const heading = elements.formSuccessCard.querySelector('strong');
  const text = elements.formSuccessCard.querySelector('span');
  if (heading) {
    heading.textContent = language === 'en' ? 'Request sent successfully' : 'Solicitud enviada correctamente';
  }
  if (text) {
    text.textContent = language === 'en'
      ? 'Thank you. We received your information and will review your case to reply with an initial proposal as soon as possible.'
      : 'Gracias. Recibimos tu informacion y revisaremos tu caso para responderte con una propuesta inicial lo antes posible.';
  }

  elements.formSuccessCard.classList.toggle('is-hidden', !isVisible);
};

const initInteractiveCarousels = () => {
  const carouselRoots = [...document.querySelectorAll('[data-carousel]')];

  carouselRoots.forEach((root) => {
    const track = root.classList.contains('app-carousel-track') ? root : root.querySelector('.app-carousel-track');
    if (!track) {
      return;
    }

    const cards = [...track.children];
    if (cards.length < 2) {
      cards[0]?.classList.add('is-current');
      return;
    }

    const controls = track.id ? document.querySelector(`.app-carousel-controls[data-controls-for="${track.id}"]`) : null;
    let currentIndex = 0;
    track.tabIndex = 0;

    const setCurrentCard = (index) => {
      currentIndex = (index + cards.length) % cards.length;
      cards.forEach((card, cardIndex) => {
        card.classList.toggle('is-current', cardIndex === currentIndex);
        card.classList.toggle('is-featured', cardIndex === currentIndex);
      });
    };

    const scrollToCard = (index) => {
      setCurrentCard(index);
      const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
      const targetLeft = Math.min(cards[currentIndex].offsetLeft, maxScrollLeft);
      track.scrollTo({ left: targetLeft, behavior: 'smooth' });
    };

    let scrollFrame = null;

    const syncCurrentCardFromScroll = () => {
      if (cards.length < 2) {
        return;
      }

      const referencePoint = track.scrollLeft + (track.clientWidth * 0.35);
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, cardIndex) => {
        const distance = Math.abs(card.offsetLeft - referencePoint);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = cardIndex;
        }
      });

      if (closestIndex !== currentIndex) {
        setCurrentCard(closestIndex);
      }
    };

    const stepScroll = (direction = 1) => {
      scrollToCard(currentIndex + direction);
    };

    controls?.querySelectorAll('.app-carousel-btn').forEach((button) => {
      button.addEventListener('click', () => {
        stepScroll(button.dataset.dir === 'prev' ? -1 : 1);
      });
    });

    track.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        stepScroll(-1);
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        stepScroll(1);
      }
    });

    track.addEventListener('scroll', () => {
      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame);
      }

      scrollFrame = window.requestAnimationFrame(() => {
        syncCurrentCardFromScroll();
        scrollFrame = null;
      });
    }, { passive: true });

    scrollToCard(0);
  });
};

const renderWizard = (copy) => {
  const isComplete = Boolean(wizardState.niche && wizardState.goals.length);
  const step = getWizardStep(copy, wizardState.step);
  elements.wizardEyebrow.textContent = copy.wizard.eyebrow;
  elements.wizardTitle.textContent = copy.wizard.introTitle;
  elements.wizardIntro.textContent = copy.wizard.introText;
  elements.wizardProgress.setAttribute('aria-label', copy.meta.wizardProgressAria);
  elements.wizardProgressCurrent.textContent = String(wizardState.step + 1).padStart(2, '0');
  elements.wizardProgressTotal.textContent = String(copy.wizard.steps.length).padStart(2, '0');
  elements.wizardProgressFill.style.width = `${((wizardState.step + 1) / copy.wizard.steps.length) * 100}%`;
  elements.wizardStepLabel.textContent = step.label;
  elements.wizardQuestion.textContent = step.question;
  elements.wizardResultTag.textContent = copy.wizard.resultTag;
  elements.wizardResultMetaLabels[0].textContent = copy.wizard.resultPackageLabel;
  elements.wizardResultMetaLabels[1].textContent = copy.wizard.resultPriorityLabel;
  elements.wizardPrimaryCta.textContent = copy.wizard.resultPrimary;
  elements.wizardPrimaryCta.href = '#contacto';
  elements.wizardWhatsAppCta.textContent = copy.wizard.resultWhatsApp;
  elements.wizardReset.textContent = copy.wizard.resultReset;
  elements.wizardStepContinue.textContent = copy.wizard.continue;

  elements.wizardStepMeta.classList.toggle('is-hidden', isComplete);
  elements.wizardOptions.classList.toggle('is-hidden', isComplete);
  elements.wizardStepActions.classList.toggle('is-hidden', isComplete || step.key !== 'goals');

  elements.wizardOptions.innerHTML = '';
  if (!isComplete) {
    step.options.forEach((option) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'wizard-option';
      button.innerHTML = `<strong>${option.title}</strong><small>${option.text}</small>`;
      button.addEventListener('click', () => {
        if (step.key === 'niche') {
          wizardState.niche = option.id;
          wizardState.goals = [];
          wizardState.step = 1;
          renderWizard(copy);
          return;
        }

        if (step.key === 'goals') {
          const isSelected = wizardState.goals.includes(option.id);
          wizardState.goals = isSelected
            ? wizardState.goals.filter((goalId) => goalId !== option.id)
            : [...wizardState.goals, option.id];
          button.classList.toggle('is-selected', !isSelected);
          elements.wizardStepContinue.disabled = wizardState.goals.length === 0;
          return;
        }
      });
      if (step.key === 'goals' && wizardState.goals.includes(option.id)) {
        button.classList.add('is-selected');
      }
      elements.wizardOptions.append(button);
    });
  }

  elements.wizardStepContinue.disabled = step.key === 'goals' ? wizardState.goals.length === 0 : true;

  syncWizardSummary(copy);

  if (isComplete) {
    const recommendation = buildRecommendation(copy);
    elements.wizardResultCard.classList.remove('is-hidden');
    elements.wizardResultTitle.textContent = recommendation.title;
    elements.wizardResultText.textContent = recommendation.text;
    elements.wizardResultContact.textContent = recommendation.contactPrompt;
    elements.wizardResultPackage.textContent = recommendation.packageName;
    elements.wizardResultPriority.textContent = recommendation.priority;
    elements.wizardResultList.innerHTML = recommendation.bullets.map((item) => `<li>${item}</li>`).join('');
    updateWhatsAppLink(copy, recommendation);
  } else {
    elements.wizardResultCard.classList.add('is-hidden');
    elements.wizardResultTitle.textContent = copy.wizard.resultTitleFallback;
    elements.wizardResultText.textContent = copy.wizard.resultTextFallback;
    elements.wizardResultContact.textContent = copy.wizard.contactPrompt.replace('{niche}', copy.wizard.selections.pending.toLowerCase());
    elements.wizardResultPackage.textContent = copy.wizard.resultPackageFallback;
    elements.wizardResultPriority.textContent = copy.wizard.resultPriorityFallback;
    elements.wizardResultList.innerHTML = '';
  }
};

const applyLanguage = (language) => {
  currentLanguage = language;
  const copy = translations[language] || translations.es;
  document.documentElement.lang = language;
  localStorage.setItem(languageStorageKey, language);

  metaRefs.title.textContent = copy.meta.title;
  document.title = copy.meta.title;
  metaRefs.description.setAttribute('content', copy.meta.description);
  metaRefs.ogTitle.setAttribute('content', copy.meta.ogTitle);
  metaRefs.ogDescription.setAttribute('content', copy.meta.ogDescription);
  metaRefs.twitterTitle.setAttribute('content', copy.meta.twitterTitle);
  metaRefs.twitterDescription.setAttribute('content', copy.meta.twitterDescription);

  if (menuToggle) {
    menuToggle.setAttribute('aria-label', copy.meta.menuAria);
  }
  if (mobileNav) {
    mobileNav.setAttribute('aria-label', copy.meta.mobileNavAria);
  }
  elements.brandHome?.setAttribute('aria-label', copy.meta.brandAria);
  elements.langSwitch?.setAttribute('aria-label', copy.meta.langSwitchAria);
  elements.mobileLangSwitch?.setAttribute('aria-label', copy.meta.mobileLangSwitchAria);
  elements.heroStats?.setAttribute('aria-label', copy.meta.heroStatsAria);

  languageButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.lang === language);
  });

  const navLabels = [copy.nav.services, copy.nav.process, copy.nav.results, copy.nav.cases, copy.nav.stack, copy.nav.faq, copy.nav.contact];
  const bottomLabels = language === 'en'
    ? ['Home', 'Diagnosis', 'Services', 'Cases', 'Contact']
    : ['Inicio', 'Diagnóstico', 'Servicios', 'Casos', 'Contacto'];
  elements.navLinks.forEach((link, index) => {
    link.textContent = navLabels[index];
  });
  elements.mobileNavLinks.forEach((link, index) => {
    link.textContent = navLabels[index];
  });
  elements.bottomNavLinks.forEach((link, index) => {
    link.querySelector('span').textContent = bottomLabels[index];
  });
  elements.heroEyebrow.textContent = copy.hero.eyebrow;
  elements.heroTitle.textContent = copy.hero.title;
  elements.heroText.textContent = copy.hero.text;
  elements.brandTagline.textContent = copy.hero.brandTagline;
  elements.heroButtons[0].textContent = copy.hero.primary;
  elements.heroButtons[1].textContent = copy.hero.secondary;
  elements.statTexts.forEach((item, index) => {
    item.textContent = copy.hero.stats[index];
  });

  renderWizard(copy);

  elements.serviceEyebrow.textContent = copy.services.eyebrow;
  elements.serviceHeading.textContent = copy.services.title;
  setCardContent(elements.serviceCards, copy.services.cards);

  elements.whyEyebrow.textContent = copy.why.eyebrow;
  elements.whyHeading.textContent = copy.why.title;
  setCardContent(elements.whyCards, copy.why.cards, { numberPrefix: true });

  elements.processEyebrow.textContent = copy.process.eyebrow;
  elements.processHeading.textContent = copy.process.title;
  setCardContent(elements.processCards, copy.process.cards, { numberPrefix: true });

  elements.resultsEyebrow.textContent = copy.results.eyebrow;
  elements.resultsHeading.textContent = copy.results.title;
  setThreePartCards(elements.resultCards, copy.results.cards);
  elements.proofStrip.setAttribute('aria-label', copy.results.proofAria);
  elements.proofCards.forEach((card, index) => {
    const item = copy.results.proof[index];
    card.querySelector('strong').textContent = item[0];
    card.querySelector('span').textContent = item[1];
  });

  elements.stackEyebrow.textContent = copy.stack.eyebrow;
  elements.stackHeading.textContent = copy.stack.title;
  elements.stackHelper.textContent = copy.stack.helper;
  elements.stackChips.forEach((chip, index) => {
    chip.textContent = copy.stack.chips[index];
  });
  elements.quickTicketTitle.textContent = copy.contact.quickRequest.title;
  elements.quickTicketText.textContent = copy.contact.quickRequest.text;
  renderQuickTicketCloud(copy);

  elements.casesEyebrow.textContent = copy.cases.eyebrow;
  elements.casesHeading.textContent = copy.cases.title;
  setListCards(elements.caseCards, copy.cases.cards, '.case-tag');

  elements.faqEyebrow.textContent = copy.faq.eyebrow;
  elements.faqHeading.textContent = copy.faq.title;
  elements.faqItems.forEach((item, index) => {
    const data = copy.faq.items[index];
    item.querySelector('summary').textContent = data[0];
    item.querySelector('p').textContent = data[1];
  });

  elements.packageEyebrow.textContent = copy.packages.eyebrow;
  elements.packageHeading.textContent = copy.packages.title;
  setListCards(elements.packageCards, copy.packages.cards, '.package-tag');

  elements.launchEyebrow.textContent = copy.launch.eyebrow;
  elements.launchHeading.textContent = copy.launch.title;
  elements.launchCards.forEach((card, index) => {
    const data = copy.launch.cards[index];
    card.querySelector('span').textContent = data[0];
    card.querySelector('h3').textContent = data[1];
    card.querySelector('p').textContent = data[2];
  });
  elements.launchIncludesEyebrow.textContent = copy.launch.includesEyebrow;
  elements.launchIncludesList.forEach((item, index) => {
    item.textContent = copy.launch.includes[index];
  });

  elements.contactEyebrow.textContent = copy.contact.eyebrow;
  elements.contactHeading.textContent = copy.contact.title;
  elements.contactText.textContent = copy.contact.text;
  elements.contactPointsList.setAttribute('aria-label', copy.contact.pointsAria);
  elements.contactPoints.forEach((item, index) => {
    item.textContent = copy.contact.points[index];
  });
  elements.contactButtons[0].textContent = copy.contact.email;
  elements.contactButtons[0].setAttribute('href', `mailto:${copy.contact.email}`);
  elements.contactButtons[1].textContent = copy.contact.whatsapp;
  elements.contactButtons[1].setAttribute('href', buildWhatsAppUrl(
    language === 'en'
      ? 'Hi Eros Digital Team, I want to talk about automation and web services.'
      : 'Hola Eros Digital Team, quiero hablar sobre automatizaciones y web.'
  ));

  elements.form.setAttribute('action', 'https://formsubmit.co/erosdigitalteam@gmail.com');
  elements.formHeadingEyebrow.textContent = copy.contact.formEyebrow;
  elements.formHeadingTitle.textContent = copy.contact.formTitle;
  elements.formHeadingText.textContent = copy.contact.formText;
  elements.formLabels.forEach((label, index) => {
    label.textContent = copy.contact.labels[index];
  });

  const [nameInput, emailInput, companyInput, serviceSelect, textarea] = elements.formInputs;
  nameInput.placeholder = copy.contact.placeholders[0];
  emailInput.placeholder = copy.contact.placeholders[1];
  companyInput.placeholder = copy.contact.placeholders[2];
  serviceSelect.setAttribute('aria-label', copy.contact.labels[3]);
  textarea.placeholder = copy.contact.placeholders[4];
  elements.formSelectOptions[0].textContent = copy.contact.placeholders[3];
  copy.contact.options.forEach((option, index) => {
    elements.formSelectOptions[index + 1].textContent = option;
  });
  elements.formSubmit.textContent = copy.contact.submit;
  elements.formNote.textContent = copy.contact.note;
  elements.formSubject.value = copy.contact.subject;
  elements.floatingWhatsApp?.setAttribute('href', buildWhatsAppUrl(
    language === 'en'
      ? 'Hi Eros Digital Team, I want to talk about my project.'
      : 'Hola Eros Digital Team, quiero hablar sobre mi proyecto.'
  ));
  elements.floatingWhatsApp?.setAttribute('aria-label', language === 'en' ? 'Open WhatsApp' : 'Abrir WhatsApp');
  setFormSuccessCardVisibility(!elements.formSuccessCard?.classList.contains('is-hidden'), language);
  syncFormConfiguration();
  syncFormFeedback();

  elements.ctaTitle.textContent = copy.cta.title;
  elements.ctaText.textContent = copy.cta.text;
  elements.ctaButton.textContent = copy.cta.button;

  elements.footerText.textContent = copy.footer.text;
  elements.footerLinks.forEach((link, index) => {
    link.textContent = copy.footer.links[index];
  });
};

const detectInitialLanguage = () => {
  const storedLanguage = localStorage.getItem(languageStorageKey);
  if (storedLanguage && translations[storedLanguage]) {
    return storedLanguage;
  }

  const browserLanguage = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  return browserLanguage.startsWith('es') ? 'es' : 'en';
};

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.lang);
    closeMenu();
  });
});

elements.bottomNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});

elements.stackChips.forEach((button) => {
  button.addEventListener('click', () => {
    const ticketIndex = Number(button.dataset.ticketIndex);
    if (selectedTickets.has(ticketIndex)) {
      selectedTickets.delete(ticketIndex);
    } else {
      selectedTickets.add(ticketIndex);
    }
    syncSelectedTickets(translations[currentLanguage]);
  });
});

elements.wizardReset?.addEventListener('click', () => {
  wizardState.niche = null;
  wizardState.goals = [];
  wizardState.step = 0;
  applyLanguage(currentLanguage);
});

elements.wizardStepContinue?.addEventListener('click', () => {
  if (!wizardState.goals.length) {
    return;
  }
  renderWizard(translations[currentLanguage]);
});

elements.wizardPrimaryCta?.addEventListener('click', (event) => {
  if (!(wizardState.niche && wizardState.goals.length)) {
    event.preventDefault();
    return;
  }

  const copy = translations[currentLanguage];
  const recommendation = buildRecommendation(copy);
  fillBriefFromWizard(copy, recommendation);
  event.preventDefault();
  document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

elements.form?.addEventListener('submit', (event) => {
  const emailField = elements.form?.querySelector('input[name="email"]');
  const serviceSelect = elements.formInputs[3];
  const textarea = elements.formInputs[4];
  const copy = translations[currentLanguage];
  const selectedLabels = getSelectedTicketLabels(copy);

  if (elements.formReplyToField && emailField instanceof HTMLInputElement) {
    elements.formReplyToField.value = emailField.value.trim();
  }

  if (serviceSelect instanceof HTMLSelectElement && !serviceSelect.value && selectedLabels.length) {
    serviceSelect.value = inferServiceFromTickets();
  }

  if (textarea instanceof HTMLTextAreaElement && !textarea.value.trim() && selectedLabels.length) {
    textarea.value = isEnglishCopy()
      ? `Quick request: ${selectedLabels.join(' | ')}.`
      : `Solicitud rapida: ${selectedLabels.join(' | ')}.`;
  }

  const hasMessage = textarea instanceof HTMLTextAreaElement && Boolean(textarea.value.trim());
  if (!hasMessage && !selectedLabels.length) {
    event.preventDefault();
    setFormSuccessCardVisibility(false, currentLanguage);
    setFormStatus('error', copy.contact.quickRequest.validation);
    elements.quickTicketCloud?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  setFormSuccessCardVisibility(false, currentLanguage);
  setFormStatus('', currentLanguage === 'en' ? 'Sending form...' : 'Enviando formulario...');
});

window.addEventListener('scroll', syncTopbarState, { passive: true });
window.addEventListener('scroll', syncBottomNavState, { passive: true });
applyLanguage(detectInitialLanguage());
initInteractiveCarousels();
syncTopbarState();
syncBottomNavState();
syncFormConfiguration();
syncFormFeedback();
