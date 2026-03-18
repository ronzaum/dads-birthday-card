# Deploy to GitHub Pages

**Overall Progress:** `100%`

## TLDR
Deploy the birthday card as a static site to GitHub Pages so Dan can open a link in his phone browser via WhatsApp. Free, no account needed for the recipient.

## Critical Decisions
- Decision 1: GitHub Pages — free, reliable, no credit card, Dan just opens a URL
- Decision 2: Manual deploy via `gh-pages` branch — simplest for a one-off project, no CI/CD needed
- Decision 3: Set Vite `base` to the repo name — required for GitHub Pages subpath (`username.github.io/repo-name/`)

## Tasks

- [x] 🟩 **Step 1: Initialize git repo**
  - [x] 🟩 Run `git init` in the project directory
  - [x] 🟩 `.gitignore` already existed with correct entries
  - [x] 🟩 Staged all files and created initial commit

- [x] 🟩 **Step 2: Create GitHub repository**
  - [x] 🟩 Created `ronzaum/dads-birthday-card` public repo via `gh`
  - [x] 🟩 Pushed initial commit to `main`

- [x] 🟩 **Step 3: Configure Vite base path**
  - [x] 🟩 Added `base: '/dads-birthday-card/'` to `vite.config.js`

- [x] 🟩 **Step 4: Install gh-pages and add deploy script**
  - [x] 🟩 Installed `gh-pages` as dev dependency
  - [x] 🟩 Added `"deploy": "vite build && gh-pages -d dist"` to `package.json`

- [x] 🟩 **Step 5: Build and deploy**
  - [x] 🟩 Ran `npm run deploy` — built and published to `gh-pages` branch
  - [x] 🟩 Site live at https://ronzaum.github.io/dads-birthday-card/

- [x] 🟩 **Step 6: Commit config changes**
  - [x] 🟩 Committed `vite.config.js`, `package.json`, `package-lock.json` to `main`
  - [x] 🟩 Pushed to remote
