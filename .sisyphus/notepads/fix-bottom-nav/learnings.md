# Learnings - Fix Bottom Navigation

## Date: 2026-05-18

### Changes Made
- **BottomNav.tsx**: Added `z-50` to `<nav>` element className to ensure bottom nav renders above all other content
- **App.tsx**: Added `pb-24` to main content container (`div.relative.z-10.max-w-md.mx-auto`) to prevent bottom nav from obscuring content

### Key Insight
The bottom nav uses `fixed bottom-0` positioning but lacked a z-index, causing it to render below other elements and making it unclickable. Adding `z-50` ensures it stays on top. The `pb-24` (96px) padding-bottom on the content container ensures the bottom-most content isn't hidden behind the fixed nav.

### Verification
- `npm run build` passes successfully (vite v6.3.5, built in ~5s)
