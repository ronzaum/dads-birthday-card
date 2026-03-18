# Dan's Birthday Card 🎂

An interactive, retro-styled "birthday verification system" — a fun gamified birthday card for Dan's 60th birthday. Built with a nostalgic 80s/90s arcade aesthetic.

## How It Works

The app guides users through a multi-screen experience:

1. **Landing** — "DAN VERIFICATION SYSTEM" splash screen with retro stats (Threat Level: CAKE, Age: LVL 60, Status: LEGEND)
2. **Scan** — A scanning/loading phase
3. **Questions** — Multiple choice trivia questions about Dan
4. **Result** — Score reveal
5. **Final** — Celebration with confetti and replay option

## Tech Stack

- React 19 + Vite
- canvas-confetti for celebrations
- Retro fonts: Press Start 2P, VT323, Space Grotesk
- Custom CSS with retro styling and fade transitions

## Development

```bash
npm install
npm run dev
```

## Deployment

Deployed to GitHub Pages via the `gh-pages` package:

```bash
npm run deploy
```

This builds the app and pushes to the `gh-pages` branch, serving at `<username>.github.io/dads-birthday-card/`.
