# Publicacion, repo y dominio

## Como se relacionan
- El repositorio guarda el codigo del sitio.
- El hosting publica ese codigo en internet.
- El dominio de GoDaddy apunta al hosting, no al repo directamente.

## Flujo recomendado
1. Crear o conectar el repositorio de GitHub para Eros Digital Team.
2. Subir este proyecto al repo.
3. Elegir plataforma de despliegue.
4. Publicar la web desde esa plataforma.
5. Entrar a GoDaddy y apuntar el dominio al hosting con registros DNS.

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
- Usar GitHub + Netlify o GitHub + Vercel.
- Mantener GoDaddy solo como proveedor del dominio.
- Centralizar cambios del sitio en el repo.
