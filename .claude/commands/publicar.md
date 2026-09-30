---
description: Sube los cambios de la página a GitHub (commit + push) para actualizar GitHub Pages
argument-hint: [mensaje del commit opcional]
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*), Bash(git log:*), Bash(gh auth status:*), Bash(gh auth switch:*)
---

Publicá los cambios del proyecto en GitHub. Mensaje de commit sugerido por el usuario: $ARGUMENTS

El repo es `JavierVeron/chris-cars` (rama `main`). GitHub Pages publica desde esa rama en https://javierveron.github.io/chris-cars/ y se actualiza solo 1 o 2 minutos después del push.

Pasos:

1. Verificá la cuenta con `gh auth status`: la cuenta activa debe ser **JavierVeron**. Si es otra, ejecutá `gh auth switch -u JavierVeron`.
2. Corré `git status --short` y `git diff --stat`. Si no hay cambios, avisá que no hay nada para publicar y frená.
3. Mostrá al usuario un resumen corto de los archivos modificados. Si entre ellos hay archivos que no parecen parte del sitio (credenciales, `.env`, archivos temporales), frená y preguntá antes de seguir.
4. Hacé `git add -A` y el commit. Si el usuario pasó un mensaje, usalo; si no, redactá uno corto en español que describa el cambio (ej.: `Agrega Audi A3 al catálogo`). Terminá el mensaje con la línea de atribución que indique el entorno.
5. Hacé `git push` a `origin main`. Nunca uses `--force`. Si el push es rechazado, no resuelvas el conflicto por tu cuenta: explicá qué pasó y preguntá.
6. Respondé con el hash y mensaje del commit, la lista de archivos subidos y el link de la página, aclarando que puede tardar 1 o 2 minutos en reflejarse.
