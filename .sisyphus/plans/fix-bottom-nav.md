# Fix Bottom Navigation Clicks

## TL;DR

> **Quick Summary**: The Bottom Navigation is currently unclickable because it is rendered underneath the main content which has a higher z-index (`z-10`). We will fix this by increasing the z-index of the Bottom Navigation and adding bottom padding to screens so content isn't obscured.
> 
> **Deliverables**: 
> - Fixed clickable `BottomNav.tsx`
> - Bottom padding added to `Screen1Home`, `Screen6History`, and `Screen7Profile`
> 
> **Estimated Effort**: Quick
> **Parallel Execution**: NO - sequential
> **Critical Path**: Task 1

---

## Context

### Original Request
"tombol riwayat dan profil masih error tidak bisa di klik. tolong perbaiki itu"

### Interview Summary
**Research Findings**:
- The main content container in `App.tsx` has `relative z-10`.
- The `BottomNav.tsx` has `fixed bottom-0` but no z-index, making it fall behind the main content in the stacking context.

---

## Work Objectives

### Core Objective
Make the Bottom Navigation buttons clickable by fixing the z-index stacking context.

### Concrete Deliverables
- `src/app/components/ruangjeda/BottomNav.tsx`

### Definition of Done
- [ ] `z-50` added to BottomNav container.
- [ ] Clicks on Home, Riwayat, and Profil work correctly.

### Must Have
- BottomNav must be above `z-10` main content.

---

## Verification Strategy

### Test Decision
- **Infrastructure exists**: NO
- **Automated tests**: None
- **Framework**: none
- **QA Policy**: Agent-executed QA scenarios using UI interaction tools (e.g., Playwright or manual click emulation where applicable).

---

## Execution Strategy

### Parallel Execution Waves

Wave 1 (Start Immediately):
└── Task 1: Fix BottomNav z-index [quick]

---

## TODOs

- [x] 1. Fix Bottom Navigation z-index

  **What to do**:
  - In `src/app/components/ruangjeda/BottomNav.tsx`, add `z-50` to the `<nav>` element's className.
  - In `src/app/App.tsx`, ensure the container for screens has enough bottom padding (`pb-24`) so the bottom nav doesn't cover content. (e.g., update the `div.relative.z-10.max-w-md.mx-auto` to add `pb-20`).

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Single line CSS fixes.
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential
  - **Blocks**: None
  - **Blocked By**: None

  **References**:
  - `src/app/components/ruangjeda/BottomNav.tsx`
  - `src/app/App.tsx`

  **Acceptance Criteria**:

  **QA Scenarios**:
  ```
  Scenario: Click navigation buttons
    Tool: Playwright
    Preconditions: App is running
    Steps:
      1. Click on "Riwayat" button in bottom nav
      2. Verify screen changes to history
      3. Click on "Profil" button in bottom nav
      4. Verify screen changes to profile
    Expected Result: Buttons are clickable and navigation works
    Failure Indicators: Button clicks have no effect or are intercepted
    Evidence: .sisyphus/evidence/task-1-bottomnav-click.png
  ```

  **Evidence to Capture**:
  - [ ] Each evidence file named: task-1-{scenario-slug}.{ext}

  **Commit**: YES
  - Message: `fix(ui): make bottom navigation clickable by fixing z-index`
  - Files: `src/app/components/ruangjeda/BottomNav.tsx`, `src/app/App.tsx`

---

## Final Verification Wave

- [ ] F1. **Real Manual QA** — `unspecified-high`
  Run the app and manually click the bottom navigation buttons to ensure they route to the correct pages.
  Output: `Scenarios [N/N pass] | VERDICT`

---

## Commit Strategy

- **1**: `fix(ui): z-index for bottom nav`

---

## Success Criteria

### Verification Commands
```bash
npm run build
```

### Final Checklist
- [ ] Bottom Nav clickable
- [ ] Content not hidden behind nav
