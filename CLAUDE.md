# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

Landing page estática de **Chris Cars** (venta de autos, Palermo, CABA). HTML + CSS + JS vanilla: sin framework, sin build, sin package manager, sin tests ni linter. Para verla, abrir `index.html` en el navegador. El contenido está en español (es-AR); mantener ese idioma. Ver también `RESUMEN.md` (resumen del proyecto y pendientes).

## Arquitectura

- `index.html`: todas las secciones (header, hero, autos, quiénes somos, talleres, ubicación con iframe de Google Maps, contacto, footer, botón flotante de WhatsApp). Los textos, email (`chriscars@gmail.com`) y teléfono (`11 2222 3333` / `wa.me/5491122223333`) están hardcodeados acá, en varios lugares (footer, form `mailto`, enlace de WhatsApp).
- `app.js`: el catálogo NO está en el HTML. El array `autos` (marca, modelo, precio en ARS, imagen, descripcion) se renderiza como tarjetas dentro de `#catalogo`. Para agregar/editar un auto se modifica solo el array. Si una imagen falla al cargar, `onerror` la reemplaza por un placeholder SVG "Imagen no disponible".
- `estilos.css`: paleta blanco/rojo (`#dc2626`, rosado suave `#fef2f2`), responsive.
- `images/`: las imágenes se referencian por nombre exacto desde `app.js` (ojo con la extensión: `.png` vs `.jpg`). Hay `.png`, `.webp` y `.jpg`. Actualmente faltan las de Peugeot 308 GT y Chevrolet Equinox (se ve el placeholder). La de Peugeot 2008 GT es la foto genérica del 2008 (no la versión GT). Las imágenes de Ford y Peugeot vienen de autosencuotas.com.ar y la del Audi A3 de Autocosmos (imágenes de terceros; confirmar permiso de uso).
- Hero (`#inicio`): grilla de 2 columnas (texto promocional + CTA + imagen de `ford-territory.webp`, con fondo transparente sobre el degradado rojo); se apila en pantallas ≤600px. Las "60 cuotas" y la "oferta de temporada" son texto de ejemplo, no condiciones reales.

## Notas

- El formulario usa `mailto:` (abre el cliente de correo del visitante, no envía directo).
- Los precios son ilustrativos.
