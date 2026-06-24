# Loslassen und Dranbleiben

Eine psychologische Orientierung für Angehörige von Menschen mit einer
psychischen Erkrankung – als statische Single-Page-Website (React + Vite).

## Stack

- **React 19** + **TypeScript**, Routing über **wouter**
- **Tailwind CSS 4** (Design-System „Stilles Wasser") + **shadcn/ui**
- **framer-motion** für die interaktiven Visualisierungen
- Build & Dev-Server über **Vite 7**

## Entwicklung

```bash
pnpm install
pnpm dev        # Dev-Server auf http://localhost:3000
pnpm build      # Produktions-Build nach dist/public
pnpm preview    # gebauten Output lokal ansehen
pnpm check      # TypeScript-Typecheck (tsc --noEmit)
```

## Projektstruktur

```
client/
  index.html        ← HTML-Einstieg
  src/
    pages/          ← Seiten (Home, NotFound)
    components/     ← InteractiveVisuals, ErrorBoundary, ui/ (shadcn)
    contexts/       ← ThemeProvider
    hooks/          ← eigene React-Hooks
    lib/            ← content.ts (Texte/Kapitel) + utils.ts
    main.tsx        ← React-Entry
    index.css       ← Design-Tokens & globale Styles
```

Die gesamten Inhalte (Kapitel, Quellen, Empfehlungen) liegen in
`client/src/lib/content.ts`.

## Deployment (Netlify)

Statisches Hosting; die Konfiguration steht in `netlify.toml`:

- Build-Command `pnpm build`, Publish-Verzeichnis `dist/public`
- `NODE_VERSION = 22` (Vite 7 benötigt Node ≥ 20.19)
- SPA-Redirect (`/* → /index.html`), damit die clientseitigen Routen funktionieren

Ein Push auf den Default-Branch löst einen Production-Deploy aus, jeder Pull
Request einen Deploy-Preview.
