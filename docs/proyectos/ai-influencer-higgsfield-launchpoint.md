# Proyecto: AI Influencer con Higgsfield + monetizacion via Launchpoint

Fecha: 2026-10-08. Estado: investigacion y plan. Nada generado aun (0 creditos en Higgsfield).

> Nota de nombres: la herramienta es **Higgsfield** (no "Highfield"). La funcion de recrear videos es **Genjutsu**.

---

## 1. Launchpoint (launchpointhq.com): que es y que verifique

**Que es.** Plataforma de UGC/creadores: las marcas publican campanas, el creador se une desde la app,
publica en sus redes y cobra por **vistas verificadas** (OAuth con Instagram, TikTok, Snapchat, YouTube).
App creadores: `app.launchpointhq.com` / app iOS "Launchpoint: Make Money".

**Campana Higgsfield en Launchpoint.** Existe un case study oficial "Higgsfield x Launchpoint"
(530M+ vistas, 1.000+ creadores, 3.000+ cuentas). Una fuente secundaria (Substack) dice que la campana
paga **~$1 por cada 1.000 vistas elegibles**, con ventana de rendimiento tipica de 14 dias y posts que
deben quedar publicos minimo 1 ano. **No pude confirmar la tarifa en una pagina oficial**; hay que
leerla en el brief dentro de la app.

**Terminos (lo que pude verificar via buscadores; la web esta bloqueada desde este entorno):**
- El creador contrata con Launchpoint, no con la marca. Launchpoint paga de sus fondos aunque la marca no haya pagado.
- Pago ~14 dias despues de cerrar la ventana de rendimiento, maximo 30 dias tras terminar la campana.
- Requiere metodo de pago verificado a nombre legal del creador (ACH, PayPal, Venmo u otro que elijan).
- Perfil completo con handles y conteo de seguidores antes de unirse a una campana (sin minimo publicado).
- Deteccion de fraude automatica: vistas falsas, **videos duplicados o casi duplicados**, el mismo video en
  varias plataformas, y **contenido que no coincide con el creador esperado**. Retienen pago o cierran cuenta.
- Prohibido usar el contenido para entrenar IA sin permiso escrito (aplica a marcas, creadores y agencias).
- Un competidor afirma que la clausula 18 cede propiedad de los videos a Launchpoint. **No verificado**: leer §18.

**Riesgos reales para este plan (no los inventes, estan en sus propias fuentes):**
1. **Elegibilidad geografica.** El blog oficial de Launchpoint (guia Canvas UGC) pide creadores
   **US-based, 18+, que firmen 1099** y cobren por PayPal/Venmo. Venmo es solo USA. Si no eres residente
   fiscal de USA, es probable que no pases el registro. **Verificar en la app o con soporte antes de invertir.**
2. **Onboarding con clip de muestra.** Piden un clip vertical de 15-30 s con "presencia en camara" que
   revisa un equipo humano. Un avatar IA puede ser rechazado ahi.
3. **Deteccion de duplicados.** Recrear videos virales ya existentes con cambio de cara es exactamente lo
   que su filtro de "near-duplicate / contenido no coincide con el creador" busca. Alto riesgo de retencion de pago.
4. **Derechos del video original.** El video que se recrea con Genjutsu tiene autor. Usarlo sin licencia
   es infraccion de copyright independientemente de la IA.

**Alternativa directa (misma marca, menos friccion): Higgsfield Earn** (`higgsfield.ai/earn`).
Programa propio de Higgsfield: conectas Instagram, pones un codigo de verificacion en la bio, publicas
contenido que ellos aprueban y pagan por aprobacion + bonos a 24 h y 7 dias. Topes reportados: $1.000 el
primer dia de un video y $2.500 de por vida por video. Cada campana define formato, plataforma, hashtags
y duracion minima. Aqui el contenido IA es el producto, asi que encaja mejor. **No pude abrir la pagina
desde este entorno**; confirmar paises elegibles y metodo de pago.

Tambien existe el **Creator Partnership Program** de Higgsfield (aplicacion individual, no filtra por
seguidores) y un **programa de afiliados**.

---

## 2. Reglas de plataformas para contenido IA (2026)

- **TikTok**: etiqueta AIGC obligatoria para media sintetica realista (caras, voces, fondos). Sin etiqueta
  pueden bajar el video. TikTok afirma que la etiqueta no reduce distribucion.
- **Instagram/Meta**: permite cuentas de creadores IA si estan etiquetadas. Meta puede etiquetar solo.
  Para posts pagados: etiqueta IA + etiqueta de colaboracion pagada. Prohibido suplantar personas reales.
- **FTC / UE**: los influencers virtuales tienen las mismas obligaciones de divulgacion que los humanos
  (#ad, #publicidad). El propio blog de Launchpoint lo dice.
- **Regla practica**: perfil que diga claramente que es un personaje IA, etiquetar cada video como IA,
  nunca usar la cara de una persona real sin consentimiento.

---

## 3. Higgsfield: estado de la cuenta y costos

- Cuenta actual: **plan Free, 0 creditos**. No se puede generar nada hasta cargar creditos.
- Opciones vistas en el widget de precios (USD, sin IVA):
  - Prueba 3 dias: 100 creditos, $0 hoy, **se renueva a Plus $49/mes si no se cancela**. Solo funciona via MCP (este chat), no en la web.
  - Plus: 1.000 creditos/mes, $49/mes o $39/mes anual.
  - Ultra: 3.000 creditos/mes, $129/mes o $99/mes anual.
- Costo del personaje (AI Influencer): fuentes externas dicen ~1 credito por hoja de personaje. El quote
  exacto via `ai_influencer_prepare` fallo dos veces con error del servidor; reintentar.
- Costo de Genjutsu por video: **no publicado**; se ve en el widget antes de generar. Referencia: un clip
  Seedance 2.0 ronda ~22 creditos.
- Presupuesto realista para arrancar: 100 creditos de prueba alcanzan para el personaje + 2-4 videos de prueba.

---

## 4. Flujo de produccion (lo que vamos a hacer)

### Paso 1 — Personaje (AI Influencer)
Builder de Higgsfield con rasgos fijos. Propuesta inicial (ajustable):
- Mujer, latina, adulta (25-28), atletica, pelo largo castano oscuro, piel tan, ojos marrones,
  estilo streetstyle, joyeria discreta, look natural sin retoque (vibe UGC grabado con celular).
- Guardar **seed y settings** para regenerar la misma identidad. Generar hoja de personaje
  (retrato + cuerpo completo) y, si el plan lo permite, entrenar **Soul ID** con 20-80 imagenes para consistencia.
- Nombre, bio y "lore" del personaje (nicho: tecnologia/IA creativa, lifestyle). Definir antes de abrir cuentas.

### Paso 2 — Videos con Genjutsu
Dos modos:
- **Motion Transfer**: conserva movimiento, camara y timing del video fuente y reconstruye toda la escena
  con tu personaje. Ideal para "recrear" un formato viral.
- **Object Swap**: cambia solo lo que senalas (persona, ropa, producto) y deja el resto igual.
Limites reportados: video fuente 3-30 s, hasta 30-40 imagenes de referencia.

Presets trending hoy en Genjutsu (galeria oficial): Jersey Detail Showcase, Urban Style Rotation,
Arcade Identity Swap, Currency Showoff Swap, Night Fuel Drive, Orbital Room Sweep, Convertible Head Bob,
Unboxed Item Swap, Showroom Pickup, Supercar Showreel Spin, Influencer Rhythm Recap, Fan Sweep Lookbook.

**Fuente de los videos a recrear (para evitar los riesgos del punto 1):**
- Opcion A (segura): grabar nosotros los videos "driving" con el celular (10-20 s, movimiento claro) y
  aplicar Motion Transfer. Cero problema de copyright ni de duplicados.
- Opcion B: usar los presets de la galeria de Genjutsu (videos driving que Higgsfield provee).
- Opcion C (riesgo): videos virales de terceros. Solo si tienen licencia o son plantillas/sonidos
  oficiales de la plataforma. Un filtro de duplicados puede retener el pago.

### Paso 3 — Cuentas
- **Instagram**: cuenta nueva de creador, bio con "Personaje IA" / "AI creator", etiquetar cada Reel como IA.
  Es la plataforma que Higgsfield Earn exige (codigo en bio).
- **TikTok**: cuenta nueva; etiqueta AIGC en cada subida. Higgsfield MCP tiene `tiktok_connect` y
  `tiktok_prepare_publish` para publicar directo desde aqui una vez conectada (hoy: 0 cuentas conectadas).
- **YouTube Shorts** opcional (Launchpoint tambien lo trackea).
- Mismo nombre de usuario en todas. Correo y contrasenas: guardar en `CREDENCIALES-NO-SUBIR-NUNCA.env`.

### Paso 4 — Monetizacion
1. Registrarse en Higgsfield Earn (Instagram) y revisar campanas activas.
2. Intentar registro en Launchpoint (app). Si pide residencia USA/1099 y no aplica, descartar y
   quedarse con Earn + afiliados.
3. Cadencia: 1 video/dia por plataforma las primeras 2 semanas; medir retencion y vistas antes de escalar creditos.

---

## 5. Checklist inmediato

- [ ] Decidir: prueba de 3 dias (recordar cancelar) o plan Plus directo.
- [ ] Confirmar rasgos del personaje (o aprobar la propuesta del paso 1) y nombre.
- [ ] Reintentar `ai_influencer_prepare` para el quote exacto y generar la hoja.
- [ ] Abrir cuenta Instagram + TikTok del personaje; conectar TikTok via MCP.
- [ ] Leer en la app de Launchpoint: elegibilidad por pais, brief de la campana Higgsfield, §18 de terminos.
- [ ] Registrarse en Higgsfield Earn y anotar reglas de la campana activa.
- [ ] Grabar 3-5 videos driving propios (10-20 s) para Motion Transfer.

---

## Fuentes consultadas
- Launchpoint terminos: https://www.launchpointhq.com/terms
- Launchpoint case study Higgsfield: https://www.launchpointhq.com/case-studies/higgsfield
- Launchpoint guia Canvas UGC (elegibilidad US/1099): https://www.launchpointhq.com/blog/canvas-ugc-jobs-how-creators-get-paid
- Launchpoint vistas verificadas: https://www.launchpointhq.com/blog/paying-creators-verified-views
- Launchpoint FTC/IA: https://www.launchpointhq.com/blog/ftc-influencer-disclosure-guide
- Substack ($1/1.000 vistas, no oficial): https://videoaihub.substack.com/p/how-to-make-money-with-ai-influencers
- Higgsfield Earn: https://higgsfield.ai/earn
- Higgsfield Creator Partnership: https://higgsfield.ai/blog/creator-partnership-program
- Higgsfield Genjutsu: https://higgsfield.ai/genjutsu y https://higgsfield.ai/blog/higgsfield-genjutsu
- Higgsfield AI Influencer: https://www.higgsfield.ai/ai-influencer
- TikTok politica IA 2026: https://www.cinerads.com/blog/tiktok-ai-content-policy
- Compliance influencers IA 2026: https://auditsocials.com/blog/ai-generated-influencer-content-compliance-disclosure-rules-2026
- Comparativa FindClout (clausula 18, no verificada): https://findclout.com/blog/findclout-vs-launchpoint
