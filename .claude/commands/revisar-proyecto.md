---
description: Revisa el proyecto Chris Cars, busca errores y los soluciona
argument-hint: [archivo o tema opcional a revisar]
---

Revisá el proyecto buscando errores y solucionalos. Foco opcional: $ARGUMENTS (si está vacío, revisá todo).

Es una landing estática (HTML + CSS + JS vanilla, sin build ni tests), así que la revisión es de lectura y verificación manual. Leé `index.html`, `estilos.css`, `app.js` y listá `images/`.

Qué buscar:

1. **Imágenes**: cada `imagen` del array `autos` en `app.js` debe existir en `images/` con la extensión exacta. Las `src` de `index.html` también (ej.: la del Hero). Reportá las faltantes.
2. **JavaScript** (`app.js`): errores de sintaxis, comas faltantes en el array, campos ausentes en algún auto (`marca`, `modelo`, `precio`, `imagen`, `descripcion`), precios que no sean números, ids usados con `getElementById` que no existan en el HTML.
3. **HTML**: etiquetas sin cerrar o mal anidadas, `id` duplicados, enlaces internos (`#autos`, `#contacto`, etc.) sin sección destino, `alt` faltante en imágenes, `href` de WhatsApp/mailto incorrectos, email y teléfono inconsistentes entre footer, formulario y botón flotante.
4. **CSS**: llaves sin cerrar, clases usadas en el HTML o generadas en `app.js` que no tengan estilo, reglas responsive rotas (≤600px).
5. **Consistencia de docs**: que `RESUMEN.md` y `CLAUDE.md` coincidan con el código (cantidad de autos, precios, imágenes faltantes).

Cómo proceder:

- Corregí directamente lo que sea un error claro y de bajo riesgo (sintaxis, comas, `id` duplicados, enlaces rotos, docs desactualizadas).
- No cambies el diseño, los textos comerciales, precios ni datos de contacto: si algo de eso parece incorrecto, solo reportalo.
- No descargues imágenes de terceros para cubrir las faltantes; reportalas.
- Conservá el idioma (es-AR) y el estilo de código existente.

Al final respondé con un resumen corto en dos listas: **Corregido** (qué y en qué archivo) y **Para revisar vos** (lo que no toqué y por qué).
