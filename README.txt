# Malla Curricular – Trabajo Social (PWA)

PWA 100% funcional y lista para instalar en Android/PC. Funciona sin conexión y es apta para GitHub Pages.

## Publicar en GitHub Pages (branch `main`, carpeta raíz)

1) Crea un repositorio en GitHub llamado, por ejemplo, `malla-ts`.
2) Sube **todos** los archivos de este ZIP a la **raíz** del repo (no uses subcarpetas distintas a `icons/` y `assets/`).
3) En GitHub ve a: `Settings` → `Pages` → **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main` y carpeta `/ (root)`
4) Guarda. En ~1 minuto obtendrás una URL tipo `https://usuario.github.io/malla-ts/`.
5) Abre la URL en **Chrome** (Android o PC). Verás el banner de instalación o el menú de triple punto `⋮` → **"Instalar app"** o **"Añadir a pantalla principal"**.

## Instalar en Android (Chrome)

- Abre la URL pública.
- Toca el menú `⋮` → **"Añadir a pantalla principal"** o **"Instalar app"**.
- Acepta. La app aparece en el lanzador y se abre a pantalla completa en modo standalone.

## Modo Offline
- El `service worker (sw.js)` precacha los archivos clave y hace cache-first para el resto.
- La app funciona sin conexión después de la primera carga.
- Si actualizas el sitio, el `CACHE_NAME` dentro de `sw.js` debe subir de versión para forzar la actualización.

## Estructura
- `index.html` — UI/JS/CSS completos (sin frameworks).
- `manifest.webmanifest` — Metadatos PWA e íconos.
- `sw.js` — Service Worker (cache y offline).
- `icons/icon-192.png`, `icons/icon-512.png`.
- `assets/bg-default.png` — Fondo por defecto (puedes cambiarlo desde el menú).

## Comprobaciones rápidas (Criterios)
- T8 bloquea: Módulo Integrador II requiere Intervención Aplicada I; Seminario II requiere Seminario I; Electivo II requiere Electivo I.
- Bloqueo por trimestre: T2 exige T1 completo, etc.
- "Modo autorización" habilita **un ramo puntual** para saltarse bloqueos/prerrequisitos.
- Notas (1.0–7.0) → promedio global y distinción (4.0–4.9 Aprobado; 5.0–5.9 Aprobado con Distinción; ≥6.0 Distinción Máxima).
- Exportar/Importar JSON conserva aprobados, autorizaciones, notas y fondo.
- Al aprobar todos los ramos aparece el banner de Felicitaciones con confeti **sin sonido**.
- La PWA se instala y carga offline (pasa Lighthouse básico).

## Accesibilidad y UX
- Controles grandes y táctiles, respetando `env(safe-area-inset-*)`.
- Tarjetas cuadradas (aspect-ratio 1/1), contraste alto y foco visible.
- Layout responsive para tablet y escritorio; se evita el scroll horizontal (`max-width:100vw; overflow-x:hidden`).

---
Crédito al pie en la app: “App creada por Daniel Olave Valle · Agosto 2025”
