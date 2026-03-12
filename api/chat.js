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

const NICHE_TONE_GUIDES = {
  restaurant: {
    es: 'Habla como alguien que entiende de pedidos, reservas, mesas y clientes que escriben por WhatsApp. Sonido agil, cercano y practico.',
    en: 'Talk like someone who understands orders, bookings, busy hours, and customers messaging on WhatsApp. Keep it quick and practical.',
  },
  tax: {
    es: 'Habla claro y serio, pero humano. Evita palabras legales o tecnicas si no hacen falta. Enfatiza confianza, orden y seguimiento.',
    en: 'Be clear and trustworthy, but still human. Avoid legal or technical terms unless needed. Emphasize trust, order, and follow-up.',
  },
  retail: {
    es: 'Habla de promos, clientes que regresan, mensajes rapidos y ventas sin complicar la explicacion.',
    en: 'Talk about promos, repeat customers, fast replies, and sales without overexplaining.',
  },
  beauty: {
    es: 'Suena cercano, fresco y directo, como hablando con una barberia, salon o spa. Habla de agenda, citas y clientes que vuelven.',
    en: 'Sound friendly, fresh, and direct, like talking to a barbershop, salon, or spa. Mention bookings, appointments, and repeat clients.',
  },
  clinic: {
    es: 'Habla con calma y confianza. Usa un tono humano y respetuoso. Prioriza claridad, seguimiento y confianza del paciente.',
    en: 'Speak with calm and trust. Keep it human and respectful. Prioritize clarity, follow-up, and patient trust.',
  },
  ecommerce: {
    es: 'Habla de vender mas, recuperar gente interesada y hacer seguimiento sin meter palabras tecnicas de marketing.',
    en: 'Talk about selling more, bringing back interested people, and following up without heavy marketing jargon.',
  },
  'real-estate': {
    es: 'Habla como alguien que quiere mover leads, visitas y cierres con mas orden. Sonido directo y seguro.',
    en: 'Talk like someone focused on moving leads, visits, and closes with more order. Keep it direct and confident.',
  },
  education: {
    es: 'Habla de interesados, inscripciones y seguimiento de una forma simple y cercana.',
    en: 'Talk about leads, enrollments, and follow-up in a simple and friendly way.',
  },
  professional: {
    es: 'Habla profesional pero sencillo, como alguien que quiere mas consultas y mejor seguimiento, sin adornos.',
    en: 'Sound professional but simple, like someone who wants more consultations and better follow-up, without fluff.',
  },
  'local-service': {
    es: 'Habla como alguien que quiere mas llamadas, mas mensajes y mas reservas. Muy simple, directo y util.',
    en: 'Talk like someone who wants more calls, more messages, and more bookings. Very simple, direct, and useful.',
  },
  other: {
    es: 'Mantente cercano, claro y latino. Nada de palabras rebuscadas ni tono frio.',
    en: 'Stay friendly, clear, and natural. No cold or overly polished tone.',
  },
};

const INTENT_STYLE_GUIDES = {
  low: {
    es: 'Modo orientacion: responde tranquilo, ayuda a entender, no presiones demasiado y cierra con una invitacion suave o una sola pregunta corta.',
    en: 'Guidance mode: answer calmly, help them understand, do not push too hard, and end with a soft invitation or one short question.',
  },
  medium: {
    es: 'Modo avance: responde claro, aterriza una recomendacion util y cierra con un siguiente paso facil.',
    en: 'Progress mode: answer clearly, give a useful recommendation, and close with one easy next step.',
  },
  high: {
    es: 'Modo cierre: ve directo al punto, recomienda algo concreto y lleva la conversacion a WhatsApp o a dejar datos. No des rodeos.',
    en: 'Closing mode: get to the point, recommend something concrete, and move the conversation to WhatsApp or lead capture. Do not ramble.',
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
    'Paginas para vender mejor',
    'Respuestas automaticas para ahorrar tiempo',
    'Publicidad para atraer clientes',
    'Imagen de marca y comunicacion',
    'Herramientas simples para ordenar el negocio',
  ],
  packages: [
    'Presencia clara: pagina y mensaje base',
    'Mas clientes y seguimiento: pagina, anuncios y seguimiento',
    'Orden y ahorro de tiempo: automatizaciones y conexiones utiles',
  ],
  scope: [
    'Negocios locales, ecommerce, clinicas, restaurantes, servicios profesionales y otros negocios que quieran ordenar ventas o atencion',
  ],
  rules: [
    'No inventar precios exactos ni casos de estudio no confirmados',
    'No prometer integraciones o tiempos si no estan claros',
    'Responder corto y directo, 2 o 3 frases casi siempre',
    'Cuando haya intencion alta, empujar a WhatsApp o formulario',
    'Usar palabras simples, cercanas y faciles de entender',
    'No sonar tecnico, corporativo ni robotico',
    'No responder como soporte tecnico general; responder como alguien del equipo comercial',
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

const getNicheToneGuide = (language, context = {}) => {
  const locale = language === 'en' ? 'en' : 'es';
  const key = context.niche && NICHE_TONE_GUIDES[context.niche] ? context.niche : 'other';

  return NICHE_TONE_GUIDES[key][locale];
};

const getIntentStyleGuide = (language, intent) => {
  const locale = language === 'en' ? 'en' : 'es';
  return INTENT_STYLE_GUIDES[intent]?.[locale] || INTENT_STYLE_GUIDES.low[locale];
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
  const replyLanguage = isEnglish ? 'English' : 'Spanish';
  const nicheTone = getNicheToneGuide(language, context);
  const intentStyle = getIntentStyleGuide(language, intent);
  const contextLines = [
    context.niche ? `${isEnglish ? 'Detected niche' : 'Nicho detectado'}: ${context.niche}` : '',
    context.goals?.length ? `${isEnglish ? 'Detected goals' : 'Metas detectadas'}: ${context.goals.join(', ')}` : '',
    context.tickets?.length ? `${isEnglish ? 'Selected tickets' : 'Tickets seleccionados'}: ${context.tickets.join(', ')}` : '',
    `${isEnglish ? 'Recommended commercial focus' : 'Enfoque comercial sugerido'}: ${playbook.service}`,
    `${isEnglish ? 'Recommended package' : 'Paquete sugerido'}: ${playbook.packageName}`,
    `${isEnglish ? 'Likely commercial angle' : 'Angulo comercial probable'}: ${playbook.angle}`,
    `${isEnglish ? 'Detected purchase intent' : 'Intencion de compra detectada'}: ${intent}`,
    `${isEnglish ? 'Niche voice guide' : 'Guia de voz por nicho'}: ${nicheTone}`,
    `${isEnglish ? 'Intent response style' : 'Estilo segun intencion'}: ${intentStyle}`,
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

${isEnglish ? 'Reply language' : 'Idioma de respuesta'}: ${replyLanguage}

${contextLines ? `${isEnglish ? 'Current lead context' : 'Contexto actual del lead'}:\n${contextLines}\n` : ''}
${isEnglish ? 'Reply like a helpful person from the team, not like a consultant or a robot. Use plain words, short sentences, and a friendly tone. Always answer in English when reply language is English, even if some context fields contain Spanish words. Match the niche voice guide and the intent response style. First answer the question. Then mention the most useful service or package in simple terms. End with one easy next step. If pricing is requested, say the price depends on what is needed and invite them to WhatsApp or the form. If intent is high, move them clearly toward WhatsApp or leaving their details. Avoid jargon, avoid buzzwords, avoid long explanations, and keep it brief.' : 'Responde como alguien amable del equipo, no como consultor ni robot. Usa palabras simples, frases cortas y un tono cercano para publico latino. Siempre responde en espanol cuando el idioma de respuesta sea Spanish, aunque algun dato interno venga en ingles. Ajusta la voz al nicho y al nivel de intencion detectado. Primero contesta la duda. Luego menciona el servicio o paquete mas util con palabras simples. Cierra con un siguiente paso facil. Si preguntan por precio, di que depende de lo que necesiten y llevalos a WhatsApp o al formulario. Si la intencion es alta, muevelos claro hacia WhatsApp o a dejar sus datos. Evita tecnicismos, evita palabras rebuscadas, evita rodeos y mantenlo breve.'}`;
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