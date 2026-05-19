# Draft: iPhone Frame Layout Fixes

## Requirements (confirmed)
- "pada layar hp nya, tampilan ui tidak pas ditengah dan ada seperti garis putih di pojok kanan bawah dan atas"
- "ketika ganti tab, objek dan teks yang ada pada bagian atas menghilang"
- "buat agar objek pas di tengah dengan menggesernya atau mebesarkannya ke kanan"
- "buat agar saat di scroll tidak terlalu jauh atau terlalu banyak space kosong ketika scroll sudah mentok"

## Technical Decisions
- Use an inner content wrapper (`max-w-[360px] w-full mx-auto`) inside the scroll container to re-center all screens.
- Add top safe-area padding (`pt-10`) in the inner wrapper to avoid Dynamic Island overlap.
- Replace per-screen `min-h-screen` with `min-h-full` (or remove) to prevent extra scroll space inside the iPhone frame.
- Reset scroll position to top on `currentScreen` changes to prevent “missing top content” after tab switch.
- Apply `hide-scrollbar` to the frame scroll container; if missing, define it in global CSS.
- Change NoiseTexture from `fixed` to `absolute` so it stays inside the iPhone frame.
- Replace `min-h-screen` with `min-h-full` (or remove) in Screen components to stop extra empty scroll space.

## Research Findings
- App.tsx wraps content in a fixed-size iPhone frame with `overflow-hidden` and a Dynamic Island element placed `absolute top-2 z-50`.
- Scroll container is `h-full overflow-y-auto pb-24` inside the frame; background overlays are `absolute`.
- Several screens use `min-h-screen` and/or absolute-positioned headers near the top (e.g., breathing screen). This can introduce extra vertical space and clipping inside the constrained frame.
- BottomNav is `absolute bottom-0` (already correct for in-frame positioning).

## Open Questions
- RESOLVED: Use inner wrapper to re-center.
- RESOLVED: Reset scroll to top on tab switch.
- Default safe-area top padding: `pt-10`.
- NEW: Should scroll reset be instant or smooth? Default: instant (no animation).
- RESOLVED: Instant reset.

## Scope Boundaries
- INCLUDE: iPhone frame alignment, eliminate white line artifacts, preserve top content on tab switch, adjust scroll bounds inside frame
- EXCLUDE: new features, backend/API changes, screen logic rewrites
