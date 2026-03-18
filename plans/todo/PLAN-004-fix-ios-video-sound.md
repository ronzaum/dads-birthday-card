# Fix iOS Video Sound

**Overall Progress:** `0%`

## TLDR
Video sound doesn't work on iOS because `.play()` is called after a setTimeout (screen transition), which breaks the user gesture chain. Fix by moving video elements to App.jsx and calling `.play()` synchronously in the button tap handler.

## Critical Decisions
- Decision 1: Move video elements to App.jsx level — they must persist across screen transitions so we can `.play()` them before the transition setTimeout
- Decision 2: Call `.play()` synchronously in click handlers — scan video plays on START SCAN tap, final video plays on last answer tap
- Decision 3: Remove video elements from Scan.jsx and Final.jsx — they use the App-level videos via CSS visibility

## Tasks

- [ ] 🟥 **Step 1: Add persistent video elements to App.jsx**
  - [ ] 🟥 Add two `<video>` elements (scan + final) with refs, positioned fixed, hidden by default
  - [ ] 🟥 Show scan video when `screen === "scan"`, show final video when `screen === "final" && phase < 4`
  - [ ] 🟥 Pass a `finalPhase` state up from Final or track it in App

- [ ] 🟥 **Step 2: Play scan video in START SCAN handler**
  - [ ] 🟥 In the `handleStart` function, call `scanVideoRef.current.play()` synchronously before `transition("scan")`
  - [ ] 🟥 Reset video to start (`currentTime = 0`) before playing (for replay support)

- [ ] 🟥 **Step 3: Play final video in last answer handler**
  - [ ] 🟥 In `handleAnswer`, when it's the last question, call `finalVideoRef.current.play()` synchronously before `transition("result")`
  - [ ] 🟥 Reset video to start before playing

- [ ] 🟥 **Step 4: Remove video elements from Scan.jsx and Final.jsx**
  - [ ] 🟥 Remove `<video>` element and ref/unmute logic from Scan.jsx
  - [ ] 🟥 Remove `<video>` element and ref/unmute logic from Final.jsx (phases 0-3 video only)
  - [ ] 🟥 Keep all overlay/text content intact

- [ ] 🟥 **Step 5: Add CSS for persistent videos**
  - [ ] 🟥 Style persistent videos as `position: fixed; inset: 0; object-fit: cover` with z-index below screen content
  - [ ] 🟥 Toggle visibility based on active screen

- [ ] 🟥 **Step 6: Build, commit, deploy, and verify**
  - [ ] 🟥 Run `npx vite build` — zero errors
  - [ ] 🟥 Commit, push, and deploy to GitHub Pages
