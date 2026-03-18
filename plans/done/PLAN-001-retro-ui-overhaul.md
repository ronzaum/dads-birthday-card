# Feature Implementation Plan

**Overall Progress:** `100%`

## TLDR
Complete visual overhaul of the Dan Verification System birthday card from sleek/dark/minimal to a bold, loud, hybrid-retro style with `#FFAB00` yellow-orange background, white accents, dramatic animations, per-question themed animations, a reworked final reveal sequence, and a replay button.

## Critical Decisions
- **Color palette:** `#FFAB00` yellow-orange background with white text/accents, dark text on white buttons — not red-orange, not dark-with-orange-accents
- **Style:** Hybrid retro — retro-inspired (mission control + arcade) but modern and clean, not full pixel-art
- **Final screen flow:** Mission/processing animation → big "IDENTITY CONFIRMED" / "DAN — LVL 61 UNLOCKED" / "STATUS: LEGENDARY" → Dan's photo with scan lines + footballs + confetti (photo is the finale)
- **Answer buttons:** White with dark text on orange background
- **Font:** Bold display/monospace font with clear hierarchy, easy to read
- **No sound effects** — keep silent
- **Question animations:** Each question gets a themed animation (eyes for Q1, paw prints for Q2, footballs for Q3, hearts for Q4, detective/spy for Q5)

## Tasks

- [x] 🟩 **Step 1: Global style foundation**
  - [x] 🟩 Replace dark background (`#0a0a0a`) with `#FFAB00` yellow-orange across `styles.css` (body, `.app-container`)
  - [x] 🟩 Update text colors: primary text to white, secondary to dark where needed for contrast on orange
  - [x] 🟩 Add a bold display/monospace Google Font (e.g., Space Grotesk or similar) via `index.html` and apply in CSS
  - [x] 🟩 Remove `max-width: 420px` constraint on `.screen-wrapper` — let content fill the screen
  - [x] 🟩 Update `.btn-primary` to white background with dark text, bold and chunky
  - [x] 🟩 Update `.btn-option` to white background with dark text, remove transparent/glass styling

- [x] 🟩 **Step 2: Transition effects**
  - [x] 🟩 Replace the simple 300ms fade transition in `App.jsx` with a more dramatic effect (scale + fade or slide + pop)
  - [x] 🟩 Add corresponding CSS keyframe animations (e.g., `pop-in`, `zoom-out`) to `styles.css`

- [x] 🟩 **Step 3: Landing page overhaul**
  - [x] 🟩 Remove the lock emoji from `Landing.jsx`
  - [x] 🟩 Make title ("DAN VERIFICATION SYSTEM") much larger and bolder, filling the width
  - [x] 🟩 Make subtitle and body text bigger and bolder with clear hierarchy
  - [x] 🟩 Add decorative retro elements filling the page: bordered stat boxes, abstract lines, dashed separators, star/sparkle shapes, fake data readouts (CSS/JSX, purely decorative)
  - [x] 🟩 Style the "Start Scan" button as a big chunky retro button (white on orange or dark on white)

- [x] 🟩 **Step 4: Scan screen restyle**
  - [x] 🟩 Update `.scan-pulse` gradient and `.scan-line` colors to work on orange background (white/dark accents)
  - [x] 🟩 Make scan text bolder and larger
  - [x] 🟩 Add decorative elements around the scan animation (lines, dots, abstract shapes) for visual richness

- [x] 🟩 **Step 5: Question screen — per-question themed animations**
  - [x] 🟩 Add a themed animation component/element to `Question.jsx` that renders based on `index`:
    - Q1 ("What has Dan never seen?"): animated eyes/binoculars searching across the screen
    - Q2 ("Favourite dog?"): paw prints appearing/bouncing
    - Q3 ("Favourite football team?"): footballs bouncing around
    - Q4 ("Favourite child?"): hearts/sparkles floating
    - Q5 ("Secretly loves?"): detective magnifying glass / spy "shh" animation
  - [x] 🟩 Style question text larger and bolder, white on orange
  - [x] 🟩 Style answer buttons as white cards with dark text, with a pop animation on appear

- [x] 🟩 **Step 6: Result screen restyle**
  - [x] 🟩 Update result screen colors/typography for orange background (white text, bolder fonts)
  - [x] 🟩 Update progress bar colors to white track / dark fill (or contrasting scheme visible on orange)
  - [x] 🟩 Make "Analysis Complete" title much larger and bolder

- [x] 🟩 **Step 7: Final screen — new reveal sequence**
  - [x] 🟩 Rework `Final.jsx` phase flow:
    - Phase 0: Mission/processing animation (e.g., "PROCESSING IDENTITY..." with animated dots, decorative scan lines, retro loading bars)
    - Phase 1: Big bold text reveal — "IDENTITY CONFIRMED" with dramatic pop/scale animation
    - Phase 2: "DAN — LVL 61 UNLOCKED" + "STATUS: LEGENDARY" with bold styling
    - Phase 3: "Happy Birthday. We love you." message
    - Phase 4: Dan's photo revealed with scan-line overlay + footballs flying around + confetti burst
  - [x] 🟩 Style all final text much larger — `IDENTITY CONFIRMED` should dominate the screen
  - [x] 🟩 Add football emoji/SVG elements that animate around the photo on reveal
  - [x] 🟩 Add a "REPLAY" button below the final content that resets all state back to landing screen

- [x] 🟩 **Step 8: Replay functionality**
  - [x] 🟩 Add `onReplay` callback prop to `Final.jsx`
  - [x] 🟩 In `App.jsx`, create a reset function that sets `screen` back to `"landing"`, `questionIndex` to `0`, `score` to `0`
  - [x] 🟩 Wire the replay button to trigger the reset function

- [x] 🟩 **Step 9: Visual polish pass**
  - [x] 🟩 Verify all screens render correctly on mobile viewport (375px wide)
  - [x] 🟩 Confirm text is readable everywhere (white on orange, dark on white buttons)
  - [x] 🟩 Test full flow: landing → scan → 5 questions with animations → result → final reveal → replay loops back

## Execution Groups

This plan should be split into 3 groups due to the number of files touched and independent concerns:

### Group A: Foundation + Structure (Steps 1, 2, 8)
Global styles, transitions, and replay wiring. Must come first as all other work depends on the new color scheme and layout.

### Group B: Screen Overhauls (Steps 3, 4, 5, 6)
Landing, scan, question animations, and result screen. These build on the new foundation.

### Group C: Final Screen + Polish (Steps 7, 9)
The most complex screen (final reveal sequence) plus the visual QA pass. Depends on A and B being complete.

---

**Paste-ready prompts:**

```
/execute Group A — Foundation + Structure: Apply the new #FFAB00 orange background, white/dark color palette, bold font, dramatic page transitions, and replay state reset wiring. Steps 1, 2, 8 in plans/todo/PLAN-001-retro-ui-overhaul.md.
```

```
/execute Group B — Screen Overhauls: Overhaul landing page with retro decorations filling the screen, restyle scan screen, add per-question themed animations (eyes, paws, footballs, hearts, spy), and restyle result screen. Steps 3, 4, 5, 6 in plans/todo/PLAN-001-retro-ui-overhaul.md.
```

```
/execute Group C — Final Screen + Polish: Rework final reveal sequence (processing animation → big text → photo with scan lines + footballs + confetti), add replay button, and verify all screens on mobile. Steps 7, 9 in plans/todo/PLAN-001-retro-ui-overhaul.md.
```
