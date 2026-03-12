const DEFAULT_MODEL = process.env.OPENAI_MODEL?.trim() || 'gpt-4.1-mini';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY?.trim() || '';

const CONTACT = {
  email: 'erosdigitalteam@gmail.com',
  whatsapp: '+1 929 403 3746',
  website: 'https://erosdigitalteam.com',
};

const PLAYBOOKS = {
  restaurant: {
    service: {
      es: 'web de pedidos y automatizacion por WhatsApp',
      en: 'order-focused website and WhatsApp automation',
    },
    package: {
      es: 'Mas clientes y seguimiento',
      en: 'More clients and follow-up',
    },
    angle: {
      es: 'llenar pedidos, reservas y recompra sin depender de responder todo a mano',
      en: 'fill orders, bookings, and repeat sales without relying on manual replies',
    },
  },
  tax: {
    service: {
      es: 'captacion con web clara y seguimiento automatizado',
      en: 'lead capture with a clear website and automated follow-up',
    },
    package: {
      es: 'Mas clientes y seguimiento',
      en: 'More clients and follow-up',
    },
    angle: {
      es: 'captar consultas, ordenar citas y no perder clientes en temporada',
      en: 'capture consultations, organize appointments, and stop losing seasonal leads',
    },
  },
  retail: {
    service: {
      es: 'catalogo o web comercial con campañas y seguimiento',
      en: 'sales catalog or website with campaigns and follow-up',
    },
    package: {
      es: 'Mas clientes y seguimiento',
      en: 'More clients and follow-up',
    },
    angle: {
      es: 'mover promociones, responder rapido y empujar recompra',
      en: 'move promotions, reply fast, and drive repeat purchase',
    },
  },
  beauty: {
    service: {
      es: 'reservas con automatizacion y seguimiento',
      en: 'bookings with automation and follow-up',
    },
    package: {
      es: 'Mas clientes y seguimiento',
      en: 'More clients and follow-up',
    },
    angle: {
      es: 'llenar agenda y mantener recurrencia',
      en: 'fill the calendar and keep recurrence high',
    },
  },
  clinic: {
    service: {
      es: 'pagina de confianza con agenda y precalificacion',
      en: 'trust-focused website with booking and pre-qualification',
    },
    package: {
      es: 'Mas clientes y seguimiento',
      en: 'More clients and follow-up',
    },
    angle: {
      es: 'captar pacientes con confianza y reducir perdida de citas',
      en: 'bring in patients with trust and reduce appointment leakage',
    },
  },
  ecommerce: {
    service: {
      es: 'optimizacion de conversion con seguimiento y automatizacion',
      en: 'conversion optimization with follow-up and automation',
    },
    package: {
      es: 'Orden y ahorro de tiempo',
      en: 'Order and saved time',
    },
    angle: {
      es: 'subir conversion, recuperar interes y activar recompra',
      en: 'increase conversion, recover intent, and trigger repeat purchase',
    },
  },
  'real-estate': {
    service: {
      es: 'captacion con filtro de leads y seguimiento comercial',
      en: 'acquisition with lead qualification and sales follow-up',
    },
    package: {
      es: 'Mas clientes y seguimiento',
      en: 'More clients and follow-up',
    },
    angle: {
      es: 'calificar mejor interesados y avanzar visitas con mas control',
      en: 'qualify prospects better and move visits forward with more control',
    },
  },
  education: {
    service: {
      es: 'captacion para inscripciones con automatizacion y seguimiento',
      en: 'enrollment capture with automation and follow-up',
    },
    package: {
      es: 'Mas clientes y seguimiento',
      en: 'More clients and follow-up',
    },
    angle: {
      es: 'captar interesados, filtrarlos y llevarlos al cierre',
      en: 'capture prospects, qualify them, and move them to close',
    },
  },
  professional: {
    service: {
      es: 'web comercial con proceso de consultas y seguimiento',
      en: 'sales website with consultation flow and follow-up',
    },
    package: {
      es: 'Presencia clara',
      en: 'Clear presence',
    },
    angle: {
      es: 'ordenar consultas, propuestas y cierres',
      en: 'organize consultations, proposals, and closes',
    },
  },
  'local-service': {
    service: {
      es: 'captacion rapida por web y WhatsApp',
      en: 'fast lead capture through website and WhatsApp',
    },
    package: {
      es: 'Mas clientes y seguimiento',
      en: 'More clients and follow-up',
    },
    angle: {
      es: 'responder rapido, tomar reservas y cerrar mejor',
      en: 'reply fast, take bookings, and close more consistently',
    },
  },
  other: {
    service: {
      es: 'web, automatizacion y seguimiento comercial',
      en: 'website, automation, and sales follow-up',
    },
    package: {
      es: 'Mas clientes y seguimiento',
      en: 'More clients and follow-up',
    },
    angle: {
      es: 'aclarar la oferta, ordenar el embudo y acelerar respuesta',
      en: 'clarify the offer, organize the funnel, and speed up response',
    },
  },
};

const INTENT_PATTERNS = {
  high: [
    /precio|precios|coste|costo|cotizacion|presupuesto|contratar|empezar|agendar|llam(a|o)|whatsapp|propuesta|paquete/i,
    /price|pricing|quote|budget|proposal|start|book|call|whatsapp|hire|package/i,
  ],
  medium: [
    /quiero|necesito|me interesa|busco|ayuda|automatizar|pagina|web|landing|clientes|ventas|anuncios/i,
    /i want|i need|interested|looking for|help|automation|website|landing|clients|sales|ads/i,
  ],
};

const KNOWLEDGE = {
  services: [
    'Webs y landing pages enfocadas en conversion',
    'Automatizacion con IA para ventas, atencion y seguimiento',
    'Publicidad y growth para captar demanda',
    'Branding, comunicacion e identidad',
    'Apps, paneles y herramientas internas',
  ],
  packages: [
    'Presencia clara: web y mensaje comercial base',
    'Mas clientes y seguimiento: web, anuncios y seguimiento',
    'Orden y ahorro de tiempo: automatizacion e integraciones',
  ],
  scope: [
    'Negocios locales, ecommerce, clinicas, restaurantes, servicios profesionales y otros negocios que quieran ordenar ventas o atencion',
  ],
  rules: [
    'No inventar precios exactos ni casos de estudio no confirmados',
    'No prometer integraciones o tiempos si no estan claros',
    'Responder corto y directo, 2 a 4 frases maximo',
    'Cuando haya intencion alta, empujar a WhatsApp o formulario',
    'No responder como soporte tecnico general; responder como asesor comercial estrategico',
    'Cuando falte contexto, hacer solo una pregunta corta y util',
  ],
};

const getPlaybook = (language, context = {}) => {
  const locale = language === 'en' ? 'en' : 'es';
  const key = context.niche && PLAYBOOKS[context.niche] ? context.niche : 'other';
  const playbook = PLAYBOOKS[key];

  return {
    key,
    service: playbook.service[locale],
    packageName: playbook.package[locale],
    angle: playbook.angle[locale],
  };
};

const detectIntent = (message, context = {}) => {
  const source = [
    message,
    ...(Array.isArray(context.goals) ? context.goals : []),
    ...(Array.isArray(context.tickets) ? context.tickets : []),
  ].join(' ');

  if (INTENT_PATTERNS.high.some((pattern) => pattern.test(source))) {
    return 'high';
  }

  if (INTENT_PATTERNS.medium.some((pattern) => pattern.test(source))) {
    return 'medium';
  }

  return 'low';
};

const buildCtaOptions = (language, intent, playbook) => {
  const isEnglish = language === 'en';

  if (intent === 'high') {
    return [
      {
        type: 'whatsapp',
        label: isEnglish ? 'Open WhatsApp' : 'Abrir WhatsApp',
        message: isEnglish
          ? `Hi Eros Digital Team, I want to move forward with ${playbook.packageName}.`
          : `Hola Eros Digital Team, quiero avanzar con ${playbook.packageName}.`,
      },
      {
        type: 'lead',
        label: isEnglish ? 'Leave my details' : 'Dejar mis datos',
      },
    ];
  }

  const options = [{
    type: 'form',
    label: isEnglish ? 'Open form' : 'Abrir formulario',
  }];

  if (intent === 'medium') {
    options.push({
      type: 'whatsapp',
      label: isEnglish ? 'Talk on WhatsApp' : 'Hablar por WhatsApp',
      message: isEnglish
        ? `Hi Eros Digital Team, I want guidance on ${playbook.service}.`
        : `Hola Eros Digital Team, quiero orientacion sobre ${playbook.service}.`,
    });
  }

  return options;
};

const buildSystemPrompt = (language, context = {}) => {
  const isEnglish = language === 'en';
  const playbook = getPlaybook(language, context);
  const intent = detectIntent(context.lastMessage || '', context);
  const contextLines = [
    context.niche ? `${isEnglish ? 'Detected niche' : 'Nicho detectado'}: ${context.niche}` : '',
    context.goals?.length ? `${isEnglish ? 'Detected goals' : 'Metas detectadas'}: ${context.goals.join(', ')}` : '',
    context.tickets?.length ? `${isEnglish ? 'Selected tickets' : 'Tickets seleccionados'}: ${context.tickets.join(', ')}` : '',
    `${isEnglish ? 'Recommended commercial focus' : 'Enfoque comercial sugerido'}: ${playbook.service}`,
    `${isEnglish ? 'Recommended package' : 'Paquete sugerido'}: ${playbook.packageName}`,
    `${isEnglish ? 'Likely commercial angle' : 'Angulo comercial probable'}: ${playbook.angle}`,
    `${isEnglish ? 'Detected purchase intent' : 'Intencion de compra detectada'}: ${intent}`,
  ].filter(Boolean).join('\n');

  return `${isEnglish ? 'You are' : 'Eres'} the sales assistant for Eros Digital Team.

${isEnglish ? 'Your job is to help prospects understand the best next step, answer service questions, and move the conversation toward WhatsApp or the contact form.' : 'Tu trabajo es ayudar a los prospectos a entender el mejor siguiente paso, responder dudas de servicios y mover la conversacion hacia WhatsApp o el formulario.'}

${isEnglish ? 'Business context' : 'Contexto del negocio'}:
- ${KNOWLEDGE.services.join('\n- ')}

${isEnglish ? 'Commercial packages' : 'Paquetes comerciales'}:
- ${KNOWLEDGE.packages.join('\n- ')}

${isEnglish ? 'Scope' : 'Alcance'}:
- ${KNOWLEDGE.scope.join('\n- ')}

${isEnglish ? 'Rules' : 'Reglas'}:
- ${KNOWLEDGE.rules.join('\n- ')}

${isEnglish ? 'Contact options' : 'Opciones de contacto'}:
- Email: ${CONTACT.email}
- WhatsApp: ${CONTACT.whatsapp}
- Website: ${CONTACT.website}

${contextLines ? `${isEnglish ? 'Current lead context' : 'Contexto actual del lead'}:\n${contextLines}\n` : ''}
${isEnglish ? 'Reply like a sharp sales strategist. First answer directly. Then connect the answer to the most relevant service or package for this niche. Close with one concrete next step. If pricing is requested, explain that the exact proposal depends on scope and push WhatsApp or the form. If buying intent is high, move decisively toward WhatsApp or ask for details in the chat. Mention business impact, not generic features. Keep the answer in the same language as the user, stay at 2 to 4 short sentences, and do not use bullets unless the user explicitly asks for a list.' : 'Responde como un asesor comercial estrategico y directo. Primero responde de forma clara. Luego conecta la respuesta con el servicio o paquete mas relevante para ese nicho. Cierra con un siguiente paso concreto. Si preguntan por precios, explica que la propuesta exacta depende del alcance y empuja a WhatsApp o al formulario. Si la intencion de compra es alta, mueve la conversacion hacia WhatsApp o a dejar datos en el chat. Habla de impacto comercial, no de funciones genericas. Mantén la respuesta en el mismo idioma del usuario, en 2 a 4 frases cortas, y no uses listas salvo que el usuario pida una.'}`;
};

const buildMessages = ({ message, history = [], language, context }) => {
  const safeHistory = Array.isArray(history)
    ? history
        .filter((item) => item && typeof item.text === 'string' && (item.role === 'user' || item.role === 'assistant'))
        .slice(-6)
        .map((item) => ({ role: item.role, content: item.text }))
    : [];

  return [
    { role: 'system', content: buildSystemPrompt(language, { ...context, lastMessage: message }) },
    ...safeHistory,
    { role: 'user', content: String(message || '').slice(0, 1200) },
  ];
};

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const payload = typeof req.body === 'object' && req.body !== null ? req.body : {};
  const language = payload.language === 'en' ? 'en' : 'es';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';
  const intent = detectIntent(message, payload.context);
  const playbook = getPlaybook(language, payload.context);

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  if (!OPENAI_API_KEY) {
    return res.status(503).json({
      mode: 'unavailable',
      reply: language === 'en'
        ? 'The assistant is ready in code, but the secure backend still needs the OpenAI key. Use WhatsApp or the form for now.'
        : 'El asistente ya esta listo en codigo, pero el backend seguro todavia necesita la clave de OpenAI. Por ahora usa WhatsApp o el formulario.',
    });
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: DEFAULT_MODEL,
        temperature: 0.4,
        messages: buildMessages(payload),
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(502).json({
        error: 'OpenAI request failed',
        detail: errorText.slice(0, 800),
      });
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content?.trim();

    return res.status(200).json({
      intent,
      playbook,
      ctaOptions: buildCtaOptions(language, intent, playbook),
      reply: reply || (language === 'en'
        ? 'I can help you choose the best next step. Tell me your business type and what you want to improve first.'
        : 'Puedo ayudarte a elegir el mejor siguiente paso. Dime tu tipo de negocio y que quieres mejorar primero.'),
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Unexpected server error',
      detail: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}