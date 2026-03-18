# CLAUDE.md

## Project Overview

Dan's 60th birthday card — a retro arcade-themed interactive quiz web app.

## Structure

- `src/App.jsx` — Main component managing screen state and transitions
- `src/components/` — Screen components: Landing, Scan, Question, Result, Final, RetroBackground
- `src/data/questions.js` — Quiz question data
- `src/assets/` — Images (hero.png, vite.svg)
- `src/styles.css` & `index.css` — Styling

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run deploy` — Build and deploy to GitHub Pages (gh-pages branch)

## Notes

- Vite base path is set to `/dads-birthday-card/` for GitHub Pages subdirectory hosting
- Uses `gh-pages` package for deployment
- Retro fonts loaded from Google Fonts: Press Start 2P, VT323, Space Grotesk
