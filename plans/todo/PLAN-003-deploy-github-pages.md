# Deploy to GitHub Pages

**Overall Progress:** `0%`

## TLDR
Deploy the birthday card as a static site to GitHub Pages so Dan can open a link in his phone browser via WhatsApp. Free, no account needed for the recipient.

## Critical Decisions
- Decision 1: GitHub Pages — free, reliable, no credit card, Dan just opens a URL
- Decision 2: Manual deploy via `gh-pages` branch — simplest for a one-off project, no CI/CD needed
- Decision 3: Set Vite `base` to the repo name — required for GitHub Pages subpath (`username.github.io/repo-name/`)

## Tasks

- [ ] 🟥 **Step 1: Initialize git repo**
  - [ ] 🟥 Run `git init` in the project directory
  - [ ] 🟥 Add a `.gitignore` with `node_modules`, `dist`, `.DS_Store`
  - [ ] 🟥 Stage all files and create initial commit

- [ ] 🟥 **Step 2: Create GitHub repository**
  - [ ] 🟥 Run `gh repo create dads-birthday-card --public --source=.` to create the repo and set the remote
  - [ ] 🟥 Push the initial commit to `main`

- [ ] 🟥 **Step 3: Configure Vite base path**
  - [ ] 🟥 Add `base: '/dads-birthday-card/'` to `vite.config.js` so asset URLs resolve correctly on GitHub Pages

- [ ] 🟥 **Step 4: Install gh-pages and add deploy script**
  - [ ] 🟥 Run `npm install --save-dev gh-pages`
  - [ ] 🟥 Add `"deploy": "vite build && gh-pages -d dist"` script to `package.json`

- [ ] 🟥 **Step 5: Build and deploy**
  - [ ] 🟥 Run `npm run deploy` — this builds to `dist/` and pushes it to the `gh-pages` branch
  - [ ] 🟥 Verify the site is live at `https://<username>.github.io/dads-birthday-card/`

- [ ] 🟥 **Step 6: Commit config changes**
  - [ ] 🟥 Commit the `vite.config.js` and `package.json` changes to `main`
  - [ ] 🟥 Push to remote
