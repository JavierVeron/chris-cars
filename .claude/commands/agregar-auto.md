---
description: Agrega un auto nuevo al catálogo de Chris Cars (array `autos` en app.js)
argument-hint: <marca> <modelo> <precio> [imagen] [descripción]
---

Agregá un auto nuevo al catálogo con estos datos: $ARGUMENTS

Pasos:

1. Identificá marca, modelo, precio (número entero en ARS, sin puntos), nombre del archivo de imagen y descripción. Si falta la marca, el modelo o el precio, preguntá antes de seguir. Si falta la descripción, redactá una de una sola línea en español (es-AR), en el mismo tono que las existentes. Si falta la imagen, usá `images/<marca>-<modelo>.jpg` en minúsculas y con guiones (ej.: `images/fiat-cronos.jpg`).
2. Leé `app.js` y agregá el objeto al final del array `autos`, con el mismo formato que los existentes (`marca`, `modelo`, `precio`, `imagen`, `descripcion`). Respetá la coma entre elementos y la sangría.
3. Verificá si el archivo de imagen existe en `images/` (la extensión debe coincidir exactamente: `.png`, `.jpg` o `.webp`). Si no existe, avisá que la tarjeta mostrará el placeholder "Imagen no disponible" hasta que se agregue; no descargues imágenes de terceros sin que lo pida el usuario.
4. Actualizá la documentación:
   - `RESUMEN.md`: agregá una fila a la tabla del catálogo (precio formateado con puntos, ej. `$ 67.080.000`), corregí la cantidad de tarjetas ("8 tarjetas ...") y, si la imagen no existe, agregala al pendiente de imágenes faltantes.
   - `CLAUDE.md`: solo si cambia algo que allí se menciona (por ejemplo, la lista de imágenes faltantes).
5. Respondé con un resumen corto: qué auto se agregó, si la imagen existe y qué archivos se modificaron.

No modifiques `index.html` ni `estilos.css`: las tarjetas se generan solas desde el array.
