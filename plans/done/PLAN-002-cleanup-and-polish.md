# Cleanup & Polish Plan

**Overall Progress:** `100%`

## TLDR
Clean up dead code from the retro UI overhaul (unused imports, orphan CSS, unused components) and address the video autoplay-with-sound risk on mobile browsers.

## Critical Decisions
- Decision 1: Keep videos unmuted — user wants sound. Accept that some mobile browsers may block audio on autoplay; the tap interactions before each video should satisfy most autoplay policies.
- Decision 2: Remove all dead code rather than commenting it out — unused components, CSS, and imports from the iterative build process should be fully deleted.

## Tasks

- [x] 🟩 **Step 1: Remove dead import in App.jsx**
  - [x] 🟩 Delete `import QuestionTransition` from App.jsx (already removed in prior edit)

- [x] 🟩 **Step 2: Delete unused QuestionTransition component**
  - [x] 🟩 Delete `src/components/QuestionTransition.jsx`

- [x] 🟩 **Step 3: Remove orphan CSS for deleted features**
  - [x] 🟩 Removed `.q-theme`, `.q-theme-item`, all 5 theme classes and 5 keyframe animations (~80 lines)
  - [x] 🟩 Removed `.question-transition`, `.transition-*` classes and keyframes (~50 lines)
  - [x] 🟩 Removed `.scan-frame`, `.scan-corner` rules
  - [x] 🟩 Removed `.retro-illust-bg` and related selectors (~35 lines)

- [x] 🟩 **Step 4: Add muted fallback for video autoplay**
  - [x] 🟩 Added `muted` back to `<video>` tags in Scan.jsx and Final.jsx
  - [x] 🟩 Added `onCanPlay` handler with ref-based unmute after 100ms delay

- [x] 🟩 **Step 5: Verify build passes**
  - [x] 🟩 Build passes — CSS reduced from 24KB to 19KB
