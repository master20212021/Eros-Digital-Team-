# Eros Digital Team

Base inicial del nuevo proyecto web para Eros Digital Team.

## Objetivo
Crear una presencia digital premium para una agencia enfocada en:
- Automatizaciones con IA
- Desarrollo de paginas web
- Desarrollo de apps
- Publicidad digital y growth
- Direccion creativa y branding
- Automatizacion de redes sociales
- Integraciones y optimizacion operativa

## Estructura
- `index.html`: landing inicial de presentacion
- `styles.css`: identidad visual ciberpunk premium
- `script.js`: comportamiento tipo app, diagnostico guiado, carruseles y respuestas locales por segmento
- `terms.html`, `privacy.html`, `data-deletion.html`: capa legal minima para privacidad, terminos y borrado de datos
- `assets/images/branding/`: logos y recursos visuales base de la marca
- `docs/brand/identity.md`: direccion de marca
- `docs/content/services.md`: oferta comercial ampliada
- `docs/content/roadmap.md`: plan recomendado para la siguiente fase
- `docs/content/publishing.md`: relacion entre repo, hosting y dominio
- `docs/content/deploy-checklist.md`: pasos de salida a produccion
- `assets/`: espacio para imagenes, iconos y recursos visuales

## Como abrirlo localmente
Desde la carpeta del proyecto:

```powershell
python -m http.server 5600
```

Luego abrir:
- `http://localhost:5600`

## Diagnostico guiado actual
- El wizard funciona 100% en frontend con respuestas predefinidas por nicho, objetivo y cuello de botella.
- Cada paso solo muestra la siguiente decision y al final entrega una ruta concreta con CTA a formulario y WhatsApp.
- El briefing del formulario se rellena automaticamente con el diagnostico seleccionado.

## Siguiente fase recomendada
1. Definir logo final y sistema visual.
2. Añadir formulario real de contacto y CRM.
3. Incorporar casos de estudio y pruebas sociales.
4. Preparar version responsive final con assets definitivos.
5. Publicar en el dominio `erosdigitalteam.com`.

## Estado actual
- Base estatica funcional creada
- Documentacion de identidad y servicios creada
- Estructura lista para versionar en un repo independiente
- Workflow de GitHub Pages agregado para despliegue automatico desde `main`
- Experiencia tipo app con diagnostico guiado, carruseles y rutas predefinidas por segmento preparada
- Capa legal minima agregada para privacidad, terminos y eliminacion de datos
