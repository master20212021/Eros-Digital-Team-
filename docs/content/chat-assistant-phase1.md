# Chat Assistant Phase 1

## Objetivo
Implementar un asistente comercial 24/7 con IA que:
- responda dudas frecuentes
- ayude a recomendar el mejor siguiente paso
- use contexto del diagnostico y tickets seleccionados
- derive a WhatsApp o formulario cuando haya intencion alta

## Arquitectura
- frontend: widget integrado en `index.html`
- runtime: estado, UI y llamadas en `script.js`
- backend seguro: `netlify/functions/chat.js`
- ruta publica: `/api/chat`

## Lo que si hace esta fase
- responde preguntas comerciales cortas
- orienta sobre servicios y paquetes
- conserva un historial corto de conversacion
- usa prompt controlado con contexto del negocio

## Lo que no hace aun
- no crea leads en CRM automaticamente
- no agenda llamadas
- no consulta calendarios
- no ejecuta acciones autonomas
- no usa RAG documental avanzado

## Activacion
1. Desplegar en Netlify.
2. Configurar `OPENAI_API_KEY`.
3. Opcional: ajustar `OPENAI_MODEL`.
4. Probar `/api/chat` desde la web desplegada.

## Siguiente fase natural
- guardar conversaciones
- capturar lead dentro del chat
- enviar resumen al equipo
- integrar CRM o Google Sheets
- agregar RAG con documentos reales de ventas y servicios