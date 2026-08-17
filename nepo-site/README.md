# Nepo Agency — sitio + blog

Sitio construido con Eleventy (generador de sitios estáticos) + Decap CMS (panel para publicar artículos sin código) + Netlify (hosting gratis).

## Estructura
- `src/index.njk` — Home
- `src/articulos.njk` — Listado de artículos
- `src/articulos/*.md` — Cada artículo (los nuevos los crea el panel /admin automáticamente)
- `src/contacto.njk` — Página de contacto con formulario (Netlify Forms)
- `src/admin/` — Panel de edición (Decap CMS)

## Cómo se publica
No necesitas tocar este código para escribir artículos nuevos. Una vez el sitio esté desplegado, entra a `tudominio.com/admin` para publicar.

Ver la guía paso a paso que te compartió Claude para conectar GitHub + Netlify.
