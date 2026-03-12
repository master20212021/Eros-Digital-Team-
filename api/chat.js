const DEFAULT_MODEL = process.env.OPENAI_MODEL?.trim() || 'gpt-4.1-mini';
const OPENAI_API_KEY = process.env.OPENAI_API_KEY?.trim() || '';

const CONTACT = {
  email: 'erosdigitalteam@gmail.com',
  whatsapp: '+1 929 403 3746',
  website: 'https://erosdigitalteam.com',
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
  ],
};

const buildSystemPrompt = (language, context = {}) => {
  const isEnglish = language === 'en';
  const contextLines = [
    context.niche ? `${isEnglish ? 'Detected niche' : 'Nicho detectado'}: ${context.niche}` : '',
    context.goals?.length ? `${isEnglish ? 'Detected goals' : 'Metas detectadas'}: ${context.goals.join(', ')}` : '',
    context.tickets?.length ? `${isEnglish ? 'Selected tickets' : 'Tickets seleccionados'}: ${context.tickets.join(', ')}` : '',
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
${isEnglish ? 'If the user asks about pricing, explain that the exact proposal depends on scope and recommend WhatsApp or the form. If the user wants to hire, ask for business type, main goal, and preferred contact. Keep the answer in the same language as the user.' : 'Si el usuario pregunta por precios, explica que la propuesta exacta depende del alcance y recomiendale WhatsApp o el formulario. Si el usuario quiere contratar, pide tipo de negocio, meta principal y contacto preferido. Mantén la respuesta en el mismo idioma del usuario.'}`;
};

const buildMessages = ({ message, history = [], language, context }) => {
  const safeHistory = Array.isArray(history)
    ? history
        .filter((item) => item && typeof item.text === 'string' && (item.role === 'user' || item.role === 'assistant'))
        .slice(-6)
        .map((item) => ({ role: item.role, content: item.text }))
    : [];

  return [
    { role: 'system', content: buildSystemPrompt(language, context) },
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