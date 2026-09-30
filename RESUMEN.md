# Resumen del proyecto: Landing Chris Cars

Landing page estática (HTML + CSS + JS, sin frameworks) para la venta de autos de **Chris Cars**, ubicada en Palermo, CABA, Buenos Aires.

## Archivos
| Archivo | Contenido |
|---|---|
| `index.html` | Estructura de la página y todas las secciones |
| `estilos.css` | Estilos, paleta blanco y rojo, diseño responsive |
| `app.js` | Datos de los autos y generación de las tarjetas del catálogo |
| `images/` | Imágenes de los autos (`.png`, `.webp` y `.jpg`) |

## Secciones de la página
1. **Header** fijo con menú: Autos, Quiénes somos, Talleres y Repuestos, Ubicación, Contacto.
2. **Hero** destacado en dos columnas: etiqueta "Oferta de temporada", título "Tu próximo auto, hoy.", texto promocional (financiación hasta 60 cuotas y usado como parte de pago), CTA "Ver autos" + enlace "Pedí tu cotización →" al contacto, e imagen de la Ford Territory. En móvil se apila.
3. **Nuestros autos**: 9 tarjetas (2 por marca, más el Audi A3) con marca, modelo, imagen, precio y descripción.
4. **Quiénes somos**: más de 15 años de experiencia en venta de autos.
5. **Talleres y Repuestos**: talleres para mantenimiento de vehículos y repuestos Peugeot, Citroën, Ford y Chevrolet.
6. **Dónde estamos**: mapa de Google Maps de Palermo, CABA.
7. **Contacto**: formulario de consulta (envío por `mailto` a chriscars@gmail.com).
8. **Footer** con email, teléfono y ubicación.
9. **Botón flotante de WhatsApp** al 11 2222 3333 (`wa.me/5491122223333`).

## Catálogo (precios en ARS, ilustrativos)
| Marca | Modelo | Precio |
|---|---|---|
| Peugeot | 2008 GT | $ 67.080.000 |
| Peugeot | 308 GT | $ 70.080.000 |
| Citroën | C5 Aircross | $ 75.000.000 |
| Citroën | C3 Aircross | $ 63.000.000 |
| Ford | Ranger | $ 86.400.000 |
| Ford | Territory | $ 82.200.000 |
| Chevrolet | Tracker | $ 62.280.000 |
| Chevrolet | Equinox | $ 93.600.000 |
| Audi | A3 Sedán | $ 64.240.000 |

Todos superan los $50.000.000. Los precios ya incluyen un aumento del 20% sobre los valores iniciales.

## Cómo editar
- **Precios, modelos y descripciones**: array `autos` en `app.js`.
- **Colores**: `estilos.css` (rojo `#dc2626`, blanco y rosado suave `#fef2f2`).
- **Textos, teléfono, email**: `index.html`.

## Pendientes
- **Nueva sección "Usados"**: agregar una sección de autos usados (con enlace en el menú del header y sección en `index.html`, y su propio array de datos en `app.js` o similar). Por ahora no hay vehículos cargados: definir el diseño de las tarjetas (año, kilometraje, precio) y mostrar un mensaje tipo "Próximamente" hasta tener stock.
- **Imágenes faltantes**: faltan `peugeot-308-gt` y `chevrolet-equinox` (se muestra un cartel gris "Imagen no disponible"). Ranger, Territory y 2008 se tomaron de autosencuotas.com.ar (la del 2008 es la foto genérica, no la versión GT); son imágenes de terceros, confirmar permiso de uso o reemplazar por fotos propias.
- **Audi A3 Sedán**: el precio es estimado (US$ 44.000 de lista × $1.460 ≈ $ 64.240.000); ajustar al valor real. La imagen sale de Autocosmos (tercero): confirmar permiso de uso o reemplazar.
- **Texto promocional del Hero**: las "60 cuotas" y la "oferta de temporada" son de ejemplo; ajustar a las condiciones reales.
- **Formulario**: con `mailto` abre el correo del visitante; para envío directo integrar Formspree o EmailJS.
