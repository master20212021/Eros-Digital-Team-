const FORM_ENDPOINT = 'https://formsubmit.co/erosdigitalteam@gmail.com';

const buildConversationSummary = (history = []) => history
  .filter((item) => item && typeof item.text === 'string' && (item.role === 'user' || item.role === 'assistant'))
  .slice(-8)
  .map((item) => `${item.role === 'user' ? 'Usuario' : 'Asistente'}: ${item.text.trim()}`)
  .join('\n');

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const payload = typeof req.body === 'object' && req.body !== null ? req.body : {};
  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const company = typeof payload.company === 'string' ? payload.company.trim() : '';
  const language = payload.language === 'en' ? 'en' : 'es';
  const context = payload.context || {};
  const conversation = buildConversationSummary(payload.history || []);

  if (!name || !email) {
    return res.status(400).json({ ok: false, error: 'Name and email are required' });
  }

  const message = language === 'en'
    ? `Lead captured from chat assistant.\n\nName: ${name}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\nGoals: ${(context.goals || []).join(', ') || 'Not provided'}\nTickets: ${(context.tickets || []).join(', ') || 'Not provided'}\n\nRecent conversation:\n${conversation || 'No conversation captured.'}`
    : `Lead capturado desde el chat asistente.\n\nNombre: ${name}\nEmail: ${email}\nEmpresa: ${company || 'No indicada'}\nMetas: ${(context.goals || []).join(', ') || 'No indicadas'}\nTickets: ${(context.tickets || []).join(', ') || 'No indicados'}\n\nConversacion reciente:\n${conversation || 'Sin conversacion capturada.'}`;

  const body = new URLSearchParams({
    _subject: language === 'en' ? 'New lead from AI chat' : 'Nuevo lead desde chat IA',
    _captcha: 'false',
    _template: 'table',
    _replyto: email,
    nombre: name,
    email,
    empresa: company,
    servicio: 'automation',
    tickets: (context.tickets || []).join(' | '),
    mensaje: message,
  });

  try {
    const response = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(502).json({ ok: false, error: errorText.slice(0, 800) });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ ok: false, error: error instanceof Error ? error.message : 'Unknown error' });
  }
}