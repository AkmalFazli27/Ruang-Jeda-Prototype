Implemented scroll restoration across views by adding a template ref and using useEffect tied to currentScreen state. Applied custom scrollbar hiding utilities to maintain sleek look. Used Tailwind arbitrarily nested values for webkit-scrollbar hiding.

### Compliance Audit Result
- **App.tsx**: Verified implementation of scroll reset (useRef + useEffect on route change), inner wrapper (max-w-[360px] mx-auto pt-10), and scrollbar hidden classes.
- **NoiseTexture.tsx**: Verified 'fixed' was changed to 'absolute'.
- **Screen Components**: Verified no screen components use 'min-h-screen' anymore (replaced with 'min-h-full').
- All requirements from the plan have been successfully met without changing functionality.

## Manual QA Results (2026-05-19) — ALL PASSED ✅

### Test 1: UI is centered inside iPhone frame ✅
- **Method:** getBoundingClientRect() on the iPhone frame div
- **Setup:** Viewport 2160×1350, frame is w-[393px] h-[852px]
- **Result:** Frame at left=883.5, top=249 → center=(1080, 675) which equals viewport center (1080, 675) ✅
- The outer `min-h-screen bg-neutral-900` uses `flex items-center justify-center` which perfectly centers the frame

### Test 2: No white lines at corners ✅
- **Method:** document.elementFromPoint() at all 4 corners (5px and 15px inset)
- **Results:**
  - Outer corners (5px inset): bg=oklch(0.205 0 0) = dark neutral-900 background ✅
  - Inner corners (15px inset): bg=rgb(26, 27, 65) = #1A1B41 frame background ✅
  - No white or transparent pixels detected at any corner boundary
- **Why it works:** `overflow-hidden` + `rounded-[3rem]` (48px) + `border-[14px] border-black` properly clips content to the rounded border

### Test 3: Scroll resets on tab switch ✅
- **Steps:** Profile→scroll 200px→Home (scrollTop=0 ✅) → Profile→scroll 200px→Riwayat (scrollTop=0 ✅)
- **Mechanism:** useEffect with `scrollContainerRef.current.scrollTop = 0` dependency on `currentScreen`
- **All screens verified starting at scrollTop=0:** Home, Triage, Breathing, Profile, History

### Test 4: No excessive empty space in scroll ✅
| Screen | scrollHeight | clientHeight | Excess | Verdict |
|--------|-------------|-------------|--------|---------|
| Home | 825 | 825 | 0 | ✅ |
| Triage | 882 | 825 | 57px | ✅ (minimal) |
| Breathing | 825 | 825 | 0 | ✅ |
| Profile | 1131 | 825 | 306px | ✅ maxScroll=306=scrollHeight-clientHeight |

- No artificial empty space detected in any screen
