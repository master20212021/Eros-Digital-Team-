# Publicacion, repo y dominio

## Como se relacionan
- El repositorio guarda el codigo del sitio.
- El hosting publica ese codigo en internet.
- El dominio de GoDaddy apunta al hosting, no al repo directamente.

## Flujo actual de este proyecto
1. El repositorio ya esta conectado a GitHub.
2. La web ya esta publicada en GitHub Pages.
3. El siguiente paso es conectar `erosdigitalteam.com` desde GoDaddy a GitHub Pages.
4. El archivo `CNAME` ya fue agregado al proyecto para usar el dominio raiz.

## Opciones simples de despliegue
### Opcion 1. Netlify
- Buena para sitios estaticos como este.
- Se conecta al repo y publica automaticamente.
- Facil para conectar dominio custom.

### Opcion 2. Vercel
- Muy buena si luego el proyecto crece a framework.
- Deploy automatico por cada push.
- Conexion simple con dominio custom.

### Opcion 3. GitHub Pages
- Sirve para sitios estaticos simples.
- Menos flexible que Netlify o Vercel para escalar marca y formularios.

## En GoDaddy normalmente se configura
- Registro `A` para el dominio raiz.
- Registro `CNAME` para `www`.

## Recomendacion para este proyecto
- Mantener GitHub Pages para esta primera version estatica.
- Mantener GoDaddy solo como proveedor del dominio.
- Centralizar cambios del sitio en el repo.
- Si luego la web crece a una app o necesita funciones mas avanzadas, migrar a Netlify o Vercel.

## DNS sugerido en GoDaddy para GitHub Pages
- Cuatro registros `A` para el dominio raiz apuntando a GitHub Pages.
- Un registro `CNAME` para `www` apuntando al host de Pages indicado por GitHub.
- Confirmar despues el dominio custom dentro de `Settings > Pages` del repo.
